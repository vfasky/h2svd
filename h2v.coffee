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

# 生成的私有变量前缀
_preNS = '__mc__'

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
    _ix =  _preNS + '$ix_'
    # 取数组变量名
    _arr = code

    # 数组 item 值
    _vName = attrKey.replace 'mc-each-', ''

    """

#{bNS ix + 1} // each #{attrKey} = #{code}
#{bNS ix + 1} var #{_preNS}arr = #{_arr} || [];
#{bNS ix + 1} for(var #{_ix}=0, len=#{_preNS}arr.length; #{_ix} < len; #{_ix}++){
#{bNS ix + 1}     var #{_vName} = #{_preNS}arr[#{_ix}];
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
        _ix =  _preNS + '$ix_'

        # 取数组变量名
        _arr = code.split(' in ').pop()

        # 数组 item 值
        _vName = code.split(' ')[0].replace ',', ''

        # 取自定义key for v, k in x 
        if code.indexOf(',') != -1
            _ix = code.split(',').pop().split(' in')[0].trim()

        script = """

#{bNS ix + 1} // for #{code}
#{bNS ix + 1} var #{_preNS}arr = #{_arr} || [];
#{bNS ix + 1} for(var #{_ix}=0, len=#{_preNS}arr.length; #{_ix} < len; #{_ix}++){
#{bNS ix + 1}     var #{_vName} = #{_preNS}arr[#{_ix}];
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
#{bNS ix + 1} var #{_preNS}obj = #{_obj} || {};
#{bNS ix + 1} for(var #{_key} in #{_preNS}obj){
#{bNS ix + 1}     var #{_val} = #{_preNS}obj[#{_key}] || {};
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
    
    attr = Object.keys attribs
    attr.forEach (key)->
        val = attribs[key]
        if key.indexOf('mc-') == 0
            key = key.replace 'mc-', ''

            #parserFormatters dom.attribs[attr]

            script += "#{parserFormatters val, "attr['#{key}']", ix}"
            #script += "#{bNS ix + 1} attr['#{key}'] = #{val};"
        else
            script += "#{bNS ix + 1} attr['#{key}'] = '#{val}';"
            
    script + '\n'

# 解释过滤函数
# 'test' | toNumber | toFixed 2 =>
parserFormatters = (key, valName, ix)->
    if key.indexOf('|') == -1
        return "#{bNS ix + 1} #{valName} = #{key}; \n"

    funcs = key.split ' | '
    domVal = funcs[0]
    funcs.splice 0, 1

    script = """
    
#{bNS ix + 1} #{valName} = (function(x){
    
"""

    funcs.forEach (fun)->
        args = []
        fun.split(' ').forEach (v)->
            val = v.trim()
            args.push val if val.length > 0

        formatter = args[0]
        args[0] = 'x'

        script += """
#{bNS ix + 2} // #{formatter}
#{bNS ix + 2} if( formatters.hasOwnProperty('#{formatter}') ) {
#{bNS ix + 2}     x = formatters.#{formatter}(#{args.join(',')});
#{bNS ix + 2} } // end #{formatter} \n
"""

        #console.log fun

    script += """
#{bNS ix + 2} return x;
#{bNS ix + 1} })(#{domVal});\n
"""

    #console.log script

    script
    
###
# 解释dom结构
###
parseDom = (dom, ix)->
    id = _domId++
    script = "\n#{bNS ix + 1} var children_#{id} = [], attr = {};\n"
    
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
        
        attrKeys = Object.keys dom.attribs

        # 解释 each-[x]
        for attr in attrKeys
            if attr.indexOf('mc-each-') == 0
                return parserAttrEach dom.attribs[attr], dom, ix, attr

            

        # 解释属性
        script += parserAttr dom.attribs, ix

    # 子元素
    if dom.children and dom.children.length > 0
        script += parseTree dom.children, ix, "children_#{id}"

    # tag 处理 ? 自定义组件处理
    if dom.name
        script += "\n#{bNS ix + 1} tree.push( el('#{dom.name}', attr, children_#{id}) );"
    # 文本处理
    else if dom.type == 'text'
        # 解释 { xx }
        dom.data = dom.data.replace /\n/g, ' '
        text = dom.data
        if text.indexOf('{') != -1 and text.indexOf('}') != -1
            code = text.replace /\{/g, '" + ('
                       .replace /\}/g, ') + "'

            code = '"' + code + '"'
            
            script += "\n#{bNS ix + 1} tree.push( #{code} );"
        else
            script += "\n#{bNS ix + 1} tree.push( '#{dom.data}' );"

    script


# 解释 dom tree
parseTree = (tree, ix=0, children='children_0')->
    treeId = _domId
    script = "\n#{bNS ix + 1} (function(scope, tree){ // startTree #{treeId}\n"

    tree.forEach (dom, id)->
        # 过滤空行
        if dom.type != 'text' or (dom.type == 'text' and dom.data.trim().length > 0)
            script += "#{parseDom dom, ix + 1}"

    script += "\n#{bNS ix + 1} })(scope, #{children}); // endTree #{treeId}\n"
    script


# 将 dom 转成 js
domToScript = (tree)->
    script = """
    var mcore = require('mcore');
    var el = mcore.virtualDom.el;
    var formatters = mcore.Template.formatters;
 
    module.exports = function(scope){
        var children_0 = [];
    """

    script += "\n    #{parseTree tree}"

    script += """
    
        return el('div', {'class': 'mc-vd'}, children_0);
    };
    """
    #console.log script
    script

    
module.exports = (html)->
    _domId = 0
    domTree = htmlparser.parseDOM html
    domToScript domTree

