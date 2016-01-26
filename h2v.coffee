###*
# 转换 html 到 virtual Dom 
# @date 2016-01-08 20:12:21
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

htmlparser = require 'htmlparser2'

# dom id
_domId = 0

_signReg = /\{([^}]+)\}/g
_strEndReg = /[^]+""$/

objectKeys = (obj = {})->
    return Object.keys(obj) if Object.keys
    keys = []
    for key of obj
        keys.push key
    keys

each = (arr, done)->
    for v, k in arr
        res = done v, k
        return if false == res

# 构造空格
bNS = (len)->
    ('' for i in [0 ... len * 4]).join ' '

### 
# 解释 <div mc-each-v="scope.list"></div>
###
parserAttrEach = (code, dom, ix, attrKey)->
    # 删除 dom 的 mc-for 属性
    delete dom.attribs[attrKey]

    # 数组key变量名
    _ix =  '__mc__$ix_'
    # 取数组变量名
    _arr = code

    # 数组 item 值
    _vName = attrKey.replace 'mc-each-', ''

    """

#{bNS ix + 1} // each #{attrKey} = #{code}
#{bNS ix + 1} var __mc__arr;
#{parserFormatters _arr, '__mc__arr', ix}
#{bNS ix + 1} __mc__arr = __mc__arr.length ? __mc__arr : [];
#{bNS ix + 1} for(var #{_ix}=0, len=__mc__arr.length; #{_ix} < len; #{_ix}++){
#{bNS ix + 1}     var #{_vName} = __mc__arr[#{_ix}];
#{bNS ix + 1}     #{parseDom dom, ix + 1}
#{bNS ix + 1} }// endEach

"""



### 
# 解释 <div mc-for="v, k in scope.list"></div>
###
parserAttrFor = (code, dom, ix)->

    # 删除 dom 的 mc-for 属性
    delete dom.attribs['mc-for']

    script = ''
    # Array for
    if code.indexOf(' in ') != -1
        # 数组key变量名
        _ix = '__mc__$ix_'

        # 取数组变量名
        _arr = code.split(' in ').pop()

        # 数组 item 值
        _vName = code.split(' ')[0].replace ',', ''

        # 取自定义key for v, k in x 
        if code.indexOf(',') != -1
            _ix = code.split(',').pop().split(' in')[0].trim()

        script = """

#{bNS ix + 1} // for #{code}
#{bNS ix + 1} var __mc__arr = #{_arr}.length ? #{_arr} : [];
#{bNS ix + 1} for(var #{_ix}=0, len=__mc__arr.length; #{_ix} < len; #{_ix}++){
#{bNS ix + 1}     var #{_vName} = __mc__arr[#{_ix}];
#{bNS ix + 1}     #{parseDom dom, ix + 1}

"""

    # Object for <div mc-for="v of scope.list"></div>
    else if code.indexOf(' of ') != -1
        _key = code.split(' of ')[0]
        _obj = code.split(' of ').pop()
        _val = '_'

        if _key.indexOf(',') != -1
            _val = _key.split(',').pop()
            _key = _key.split(',')[0]

        script = """

#{bNS ix + 1} // for #{code}
#{bNS ix + 1} var __mc__obj = #{_obj} || {};
#{bNS ix + 1} for(var #{_key} in __mc__obj){
#{bNS ix + 1}     var #{_val} = __mc__obj[#{_key}] || {};
#{bNS ix + 1}     #{parseDom dom, ix + 1}

"""

    script += "#{bNS ix + 1} } // endFor \n"

### 
# 解释 if
###
parserAttrIf = (code, dom, ix)->
    script = ''
    delete dom.attribs['mc-if']

    script = """

#{bNS ix + 1} // if #{code}
#{bNS ix + 1} if( #{code} ){
#{bNS ix + 1}    #{parseDom dom, ix + 1}
#{bNS ix + 1} }// endif \n"""

### 
# 解释 unless
###
parserAttrUnless = (code, dom, ix)->
    script = ''
    delete dom.attribs['mc-unless']

    script = """

#{bNS ix + 1} // if #{code}
#{bNS ix + 1} if( !(#{code}) ){
#{bNS ix + 1}    #{parseDom dom, ix + 1}
#{bNS ix + 1} }// endif \n"""


### 
# 解释属性
###
parserAttr = (attribs, ix)->
    script = ''
    
    attr = objectKeys attribs
    each attr, (key)->
        val = attribs[key]
        if key.indexOf('mc-') == 0
            key = key.replace 'mc-', ''
            if key.indexOf('on-') == 0
                script += "#{bNS ix + 1} __mc__attr['#{key}'] = '#{val}';"
            else
                #parserFormatters dom.attribs[attr]

                script += "#{parserFormatters val, "__mc__attr['#{key}']", ix}"
                script += "#{parserBinders key, ix}"
        else
            script += "#{bNS ix + 1} __mc__attr['#{key}'] = '#{val}';"
            
    script + '\n'

# 解释过滤函数
# 'test' | toNumber | toFixed 2 =>
parserFormatters = (key, valName, ix)->
    key = key.trim()
    if key.indexOf('|') == -1
        return "#{bNS ix + 1} #{valName} = #{key}; \n"

    funcs = key.split ' | '
    domVal = funcs[0]
    funcs.splice 0, 1

    script = """
    
#{bNS ix + 1} #{valName} = (function(x){
    
"""

    each funcs, (fun)->
        args = []
        each fun.split(' '), (v)->
            val = v.trim()
            args.push val if val.length > 0

        formatter = args[0]
        args[0] = 'x'

        script += """
#{bNS ix + 2} // #{formatter}
#{bNS ix + 2} if( __mc_T_formatters.hasOwnProperty('#{formatter}') ) {
#{bNS ix + 2}     x = __mc_T_formatters['#{formatter}'](#{args.join(',')});
#{bNS ix + 2} } // end #{formatter} \n
"""

        #console.log fun

    script += """
#{bNS ix + 2} return x;
#{bNS ix + 1} })(#{domVal});\n
"""

    #console.log script

    script

# 解释属性绑定
parserBinders = (sKey, sVal, ix)->
    script = """
#{bNS ix + 1} // binders check
#{bNS ix + 1} if( __mc_T_binders.hasOwnProperty('#{sKey}') ){
#{bNS ix + 1}    __mc__isBindObserve = true;
#{bNS ix + 1}    __mc__binderData.push({attrName: '#{sKey}', value: __mc__attr['#{sKey}']});
#{bNS ix + 1} }// end \n"""



    
###
# 解释dom结构
###
parseDom = (dom, ix)->
    id = _domId++
    script = "\n#{bNS ix + 1} var __mc__children_#{id} = [], __mc__attr = {}, __mc__isBindObserve = false, __mc__binderData = [];\n"
    
    if dom.attribs
        # 解释 for
        if dom.attribs['mc-for']
            return parserAttrFor dom.attribs['mc-for'], dom, ix

        # 解释 if
        if dom.attribs['mc-if']
            return parserAttrIf dom.attribs['mc-if'], dom, ix

        # 解释 unless
        if dom.attribs['mc-unless']
            return parserAttrUnless dom.attribs['mc-unless'], dom, ix
        
        attrKeys = objectKeys dom.attribs

        # 解释 each-[x]
        for attr in attrKeys
            if attr.indexOf('mc-each-') == 0
                return parserAttrEach dom.attribs[attr], dom, ix, attr

            

        # 解释属性
        script += parserAttr dom.attribs, ix

    # 子元素
    if dom.children and dom.children.length > 0
        script += parseTree dom.children, ix, "__mc__children_#{id}"

    # tag 处理, 自定义组件处理
    if dom.name
        script += "\n#{bNS ix + 1} var __mc__new_el = new __mc_T_El('#{dom.name}', __mc__attr, __mc__children_#{id});"
        script += """
#{bNS ix + 1} var __mc__attr__keys = objectKeys(__mc__attr);
#{bNS ix + 1} each(__mc__attr__keys, function(attr){
#{bNS ix + 1}     if(attr.indexOf('on-') === 0){ __mc__isBindObserve = true; }
#{bNS ix + 1} });
#{bNS ix + 1} if(__mc__isBindObserve){
#{bNS ix + 1}     __mc__new_el.bindTemplate(__mc__observe); 
#{bNS ix + 1}     for(var __mc_i = 0, __mc_len = __mc__binderData.length; __mc_i < __mc_len; __mc_i++){ 
#{bNS ix + 1}         var __mc_v = __mc__binderData[__mc_i];
#{bNS ix + 1}         __mc__new_el.bindBinder(__mc_v.attrName, __mc_v.value);
#{bNS ix + 1}     }
#{bNS ix + 1} }

"""
        script += "\n#{bNS ix + 1} tree.push( __mc__new_el );"
    # 文本处理
    else if dom.type == 'text'
        # 解释 { xx }
        dom.data = dom.data.replace /\n/g, ' '
        text = dom.data
        #if text.indexOf('{') != -1 and text.indexOf('}') != -1
            #code = text.replace /\{/g, '" + ('
            #           .replace /\}/g, ') + "'
        if _signReg.test(text)
            mapTree = []
            mapTreeId = 0
            code = text.replace _signReg, (key, val)->
                reKey = "__mc__rp__key_#{mapTreeId++}"
                script += "\n#{bNS ix + 1} var #{reKey};"

                mapTree.push
                    key: reKey
                    val: val

                '" + '+ reKey + ' + "'

            code = '"' + code
            if false == _strEndReg.test(code)
                code += '"'

            each mapTree, (v)->
                 script += "\n#{parserFormatters v.val, v.key, ix}"
        
            #console.log script
            
            script += "\n#{bNS ix + 1} tree.push( #{code} );"
        else
            script += "\n#{bNS ix + 1} tree.push( '#{dom.data}' );"

    script


# 解释 dom tree
parseTree = (tree, ix=0, children='__mc__children_0')->
    treeId = _domId
    script = "\n#{bNS ix + 1} (function(scope, tree){ // startTree #{treeId}\n"

    each tree, (dom, id)->
        # 过滤空行
        if dom.type != 'text' or (dom.type == 'text' and dom.data.trim().length > 0)
            script += "#{parseDom dom, ix + 1}"

    script += "\n#{bNS ix + 1} })(scope, #{children}); // endTree #{treeId}\n"
    script


# 将 dom 转成 js
domToScript = (tree)->
    script = """
    'use strict'
    var mcore = require('mcore');
    var __mc_T_El = mcore.virtualDom.Element;
    var __mc_T_formatters = mcore.Template.formatters;
    var __mc_T_binders = mcore.Template.binders;
    var objectKeys = mcore.util.objectKeys;
    var each = mcore.util.each;
 
    module.exports = function(scope, __mc__observe){
        var __mc__children_0 = [];
        var __mc__binders = {};
        var __mc__dom_id = 0;
    """

    script += "\n    #{parseTree tree}"

    script += """
        if(__mc__children_0.length === 1 && __mc__children_0[0].render){
            var virtualDom = __mc__children_0[0];
        }
        else{
            var virtualDom = new __mc_T_El( 'mc-vd', {}, __mc__children_0 );
        }
    
        var templateDefined = {
            'virtualDom': virtualDom,
            'binders': __mc__binders
        };
        return templateDefined;
    };
    """
    #console.log script
    script

    
module.exports = (html)->
    _domId = 0
    domTree = htmlparser.parseDOM html
    domToScript domTree

