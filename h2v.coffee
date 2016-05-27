###*
# 转换 html 到 virtual Dom
# @date 2016-01-08 20:12:21
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

htmlparser = require 'htmlparser2'
beautify = require('js-beautify').js_beautify

# dom id
_domId = 0

_signReg = /\{([^}]+)\}/g
_funReg = /(^[a-zA-Z0-9_-]+)\(([^]+)\)$/
_varReg = /(^[a-zA-Z0-9_-]+)$/
_strEndReg = /[^]+""$/

# Object.keys
objectKeys = (obj = {})->
    return Object.keys(obj) if Object.keys
    keys = []
    for key of obj
        keys.push key
    keys

# Array each
each = (arr, done)->
    for v, k in arr
        res = done v, k
        return if false == res



###
# 解释 <div mc-each-v="scope.list"></div>
###
parserAttrEach = (code, dom, ix, attrKey, path)->
    # 删除 dom 的 mc-for 属性
    delete dom.attribs[attrKey]

    # 数组key变量名
    _ix =  '__mc__$ix_'
    # 取数组变量名
    _arr = code

    # 数组 item 值
    _vName = attrKey.replace 'mc-each-', ''

    """

// each #{attrKey} = #{code}
var __mc__arr;
#{parserFormatters _arr, '__mc__arr', ix}
__mc__arr = __isArray(__mc__arr) ? __mc__arr : [];
for(var #{_ix}=0, len=__mc__arr.length; #{_ix} < len; #{_ix}++){
    var #{_vName} = __mc__arr[#{_ix}];
    #{parseDom dom, ix + 1, path}
}// endEach

"""



###
# 解释 <div mc-for="v, k in scope.list"></div>
###
parserAttrFor = (code, dom, ix, path)->

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
        if code.split(' in ').shift().indexOf(',') != -1
            _ix = code.split(',').pop().split(' in')[0].trim()

        script = """

// for #{code}
var __mc__arr = __isArray(#{_arr}) ? #{_arr} : [];
for(var #{_ix}=0, len=__mc__arr.length; #{_ix} < len; #{_ix}++){
    var #{_vName} = __mc__arr[#{_ix}];
    #{parseDom dom, ix + 1, path}

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

// for #{code}
var __mc__obj = #{_obj} || {};
for(var #{_key} in __mc__obj){
    var #{_val} = __mc__obj[#{_key}];
    #{parseDom dom, ix + 1, path}

"""

    script += "} // endFor \n"

###
# 解释 if
###
parserAttrIf = (code, dom, ix, path)->
    script = ''
    delete dom.attribs['mc-if']

    script = """

// if #{code}
if( #{code} ){
   #{parseDom dom, ix + 1, path}
}// endif \n"""

###
# 解释 unless
###
parserAttrUnless = (code, dom, ix, path)->
    script = ''
    delete dom.attribs['mc-unless']

    script = """

// if #{code}
if( !(#{code}) ){
   #{parseDom dom, ix + 1, path}
}// endif \n"""


###
# 解释属性
###
parserAttr = (attribs, ix, path)->
    script = ''

    attr = objectKeys attribs
    each attr, (key)->
        val = attribs[key]
        if key.indexOf('mc-') == 0
            key = key.replace 'mc-', ''
            if key.indexOf('on-') == 0
                fun = val.trim()
                if _funReg.test fun
                    funName = fun.substr 0, fun.indexOf('(')
                    args = fun.substr fun.indexOf('(') + 1
                    args = args.substr(0, args.length - 1).split ','
                    args.splice 0, 0, "'#{funName}'"
                    #console.log args
                    script += "__mc__attr['#{key}'] = [#{args}];"

                else
                    script += "__mc__attr['#{key}'] = '#{val}';"
            else
                #parserFormatters dom.attribs[attr]

                script += "#{parserFormatters val, "__mc__attr['#{key}']", ix}"
                script += "__mc__isBindObserve = __parserBinders(__mc__binderData, __mc__isBindObserve, '#{key}', __mc__attr['#{key}']);"
        else
            script += "__mc__attr['#{key}'] = '#{val}';"

    #script += "__mc__attr['key'] = __mc__dom_id++;"
    script += "__mc__attr['key'] = __getPath('#{path}');"

    script

# 解释过滤函数
# 'test' | toNumber | toFixed 2 =>
parserFormatters = (key, valName, ix)->
    key = key.trim()
    if key.indexOf('|') == -1
        return "#{valName} = '';" if key != false and !key

        if _varReg.test key
            return "#{valName} = typeof #{key} === 'undefined' ? ('#{key}' == 'undefined' ? '' : '#{key}') : #{key};"
        else
            return "#{valName} = #{key}; if(#{valName} == undefined){#{valName} = '';}"

    funcs = key.split ' | '
    domVal = funcs[0]
    funcs.splice 0, 1

    script = """

#{valName} = (function(x){

"""

    each funcs, (fun)->
        args = []
        each fun.split(' '), (v)->
            val = v.trim()
            args.push val if val.length > 0

        formatter = args[0]
        args[0] = 'x'

        script += """
// #{formatter}
if( __mc_T_formatters.hasOwnProperty('#{formatter}') ) {
    x = __mc_T_formatters['#{formatter}'](#{args.join(',')});
} // end #{formatter} \n
"""

        #console.log fun

    script += """
return x;
})(#{domVal});\n
"""

    #console.log script

    script


domToHtml = (dom)->
    html = "<#{dom.name}"

    if dom.attribs
        for key, val of dom.attribs
            html += " #{key}=\"#{val}\" "

    html += '/>'

###
# 解释dom结构
###
parseDom = (dom, ix, path)->
    #console.log path
    id = _domId++
    # 文本处理
    if dom.type == 'text'
        script = ''
        # 解释 { xx }
        dom.data = dom.data.replace /\n/g, ' '
        text = dom.data
        if _signReg.test(text)
            mapTree = []
            mapTreeId = 0
            code = text.replace _signReg, (key, val)->
                reKey = "__mc__rp__key_#{mapTreeId++}"
                script += "var #{reKey};"

                mapTree.push
                    key: reKey
                    val: val

                '" + '+ reKey + ' + "'

            code = '"' + code
            if false == _strEndReg.test(code)
                code += '"'

            each mapTree, (v)->
                 script += "#{parserFormatters v.val, v.key, ix}"

            #console.log script

            script += "tree.push( #{code} );"
        else
            script += "tree.push( '#{dom.data}' );"

        return script

    # 去除注释
    if !dom.name
        return ''

    script = """
    // #{domToHtml dom}
    var __mc__children_#{id} = [], __mc__attr = {}, __mc__isBindObserve = false, __mc__binderData = [];
    """

    if dom.attribs
        # 解释 for
        if dom.attribs['mc-for']
            return parserAttrFor dom.attribs['mc-for'], dom, ix, path

        # 解释 if
        if dom.attribs['mc-if']
            return parserAttrIf dom.attribs['mc-if'], dom, ix, path

        # 解释 unless
        if dom.attribs['mc-unless']
            return parserAttrUnless dom.attribs['mc-unless'], dom, ix, path

        attrKeys = objectKeys dom.attribs

        # 解释 each-[x]
        for attr in attrKeys
            if attr.indexOf('mc-each-') == 0
                return parserAttrEach dom.attribs[attr], dom, ix, attr, path

        # 解释属性
        script += parserAttr dom.attribs, ix, path

    # 子元素
    if dom.children and dom.children.length > 0
        script += parseTree dom.children, ix, "__mc__children_#{id}", path

    # tag 处理, 自定义组件处理
    if dom.name
        script += "var __mc__new_el = new __mc_T_El('#{dom.name}', __mc__attr, __mc__children_#{id});"
        script += "__bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);"
        script += "tree.push( __mc__new_el );"


    script


# 解释 dom tree
parseTree = (tree, ix = 0, children='__mc__children_0', path = '')->
    treeId = _domId
    treeLen = 0
    script = "(function(scope, tree){ // startTree #{treeId}\n"

    each tree, (dom, id)->
        # 过滤空行
        if dom.type != 'text' or (dom.type == 'text' and dom.data.trim().length > 0)
            script += "\n #{parseDom dom, ix + 1, path + '.' + id}"
            treeLen++

    script += "})(scope, #{children}); // endTree #{treeId}\n"

    if treeLen > 0
        return script
    return ''


# 将 dom 转成 js
domToScript = (tree, options)->

    script = """
    'use strict';

    var mcore = require('#{options.mcoreName}');
    var __mc_T_El = mcore.virtualDom.Element;
    var __mc_T_formatters = mcore.Template.formatters;
    var __mc_T_binders = mcore.Template.binders;
    var __mc_T_components = mcore.Template.components;
    var __objectKeys = mcore.util.objectKeys;
    var __each = mcore.util.each;
    var __isArray = mcore.util.isArray;

    module.exports = function(scope, __mc__observe){
        var __mc__children_0 = [];
        var __mc__binders = {};
        var __mc__dom_id = 0;
        var __pathMap = {};

        var __getPath = function(path){
            var key = path;
            if(__pathMap[path] >= 0){
                path = path + ':' + String(__pathMap[path]);
                //console.log(path, String(__pathMap[key]));
                __pathMap[key]++;
                //console.log(path, __pathMap[key]);
            }
            else{
                __pathMap[path] = 0;
            }
            return path;
        };

        var __parserBinders = function(__mc__binderData, __mc__isBindObserve, key, val){
            if( __mc_T_binders.hasOwnProperty(key) ){
               __mc__isBindObserve = true;
               __mc__binderData.push({attrName: key, value: val});
            }
            return __mc__isBindObserve;
        };

        var __bindBinder = function(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData){
            if(!__mc__isBindObserve){
                var __mc__attr__keys = __objectKeys(__mc__attr);
                __each(__mc__attr__keys, function(attr){
                    if(attr.indexOf('on-') === 0){
                        __mc__isBindObserve = true;
                    }
                });
            }
            if(__mc__isBindObserve || __mc_T_components[__mc__new_el.tagName]){
                __mc__new_el.bindTemplate(__mc__observe);
            }

            if(__mc__isBindObserve){
                for(var __mc_i = 0, __mc_len = __mc__binderData.length; __mc_i < __mc_len; __mc_i++){
                    var __mc_v = __mc__binderData[__mc_i];
                    __mc__new_el.bindBinder(__mc_v.attrName, __mc_v.value);
                }
            }
        };

        #{parseTree tree}

        if(__mc__children_0.length === 1 && __mc__children_0[0].render){
            var virtualDom = __mc__children_0[0];
        }
        else{
            var virtualDom = new __mc_T_El( 'mc-vd', {}, __mc__children_0 );
        }

        var templateDefined = {
            'virtualDom': virtualDom
        };
        return templateDefined;
    };
    """

    script = beautify script,
        indent_size: options.formatIndentSize

    #console.log script
    script


module.exports = (html, options = {})->
    options.mcoreName or= 'mcore'
    options.formatIndentSize or= 4
    _domId = 0
    domTree = htmlparser.parseDOM html,
        decodeEntities: true
    # console.log domTree
    domToScript domTree, options
