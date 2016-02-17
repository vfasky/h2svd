
/**
 * 转换 html 到 virtual Dom
 * @date 2016-01-08 20:12:21
 * @author vfasky <vfasky@gmail.com>
 * @link http://vfasky.com
 */
'use strict';
var _domId, _funReg, _signReg, _strEndReg, _varReg, beautify, domToHtml, domToScript, each, htmlparser, objectKeys, parseDom, parseTree, parserAttr, parserAttrEach, parserAttrFor, parserAttrIf, parserAttrUnless, parserFormatters;

htmlparser = require('htmlparser2');

beautify = require('js-beautify').js_beautify;

_domId = 0;

_signReg = /\{([^}]+)\}/g;

_funReg = /(^[a-zA-Z0-9_-]+)\(([^]+)\)$/;

_varReg = /(^[a-zA-Z0-9_-]+)$/;

_strEndReg = /[^]+""$/;

objectKeys = function(obj) {
  var key, keys;
  if (obj == null) {
    obj = {};
  }
  if (Object.keys) {
    return Object.keys(obj);
  }
  keys = [];
  for (key in obj) {
    keys.push(key);
  }
  return keys;
};

each = function(arr, done) {
  var i, k, len, res, v;
  for (k = i = 0, len = arr.length; i < len; k = ++i) {
    v = arr[k];
    res = done(v, k);
    if (false === res) {
      return;
    }
  }
};


/*
 * 解释 <div mc-each-v="scope.list"></div>
 */

parserAttrEach = function(code, dom, ix, attrKey) {
  var _arr, _ix, _vName;
  delete dom.attribs[attrKey];
  _ix = '__mc__$ix_';
  _arr = code;
  _vName = attrKey.replace('mc-each-', '');
  return "\n// each " + attrKey + " = " + code + "\nvar __mc__arr;\n" + (parserFormatters(_arr, '__mc__arr', ix)) + "\n__mc__arr = __isArray(__mc__arr) ? __mc__arr : [];\nfor(var " + _ix + "=0, len=__mc__arr.length; " + _ix + " < len; " + _ix + "++){\n    var " + _vName + " = __mc__arr[" + _ix + "];\n    " + (parseDom(dom, ix + 1)) + "\n}// endEach\n";
};


/*
 * 解释 <div mc-for="v, k in scope.list"></div>
 */

parserAttrFor = function(code, dom, ix) {
  var _arr, _ix, _key, _obj, _vName, _val, script;
  delete dom.attribs['mc-for'];
  script = '';
  if (code.indexOf(' in ') !== -1) {
    _ix = '__mc__$ix_';
    _arr = code.split(' in ').pop();
    _vName = code.split(' ')[0].replace(',', '');
    if (code.indexOf(',') !== -1) {
      _ix = code.split(',').pop().split(' in')[0].trim();
    }
    script = "\n// for " + code + "\nvar __mc__arr = __isArray(" + _arr + ") ? " + _arr + " : [];\nfor(var " + _ix + "=0, len=__mc__arr.length; " + _ix + " < len; " + _ix + "++){\n    var " + _vName + " = __mc__arr[" + _ix + "];\n    " + (parseDom(dom, ix + 1)) + "\n";
  } else if (code.indexOf(' of ') !== -1) {
    _key = code.split(' of ')[0];
    _obj = code.split(' of ').pop();
    _val = '_';
    if (_key.indexOf(',') !== -1) {
      _val = _key.split(',').pop();
      _key = _key.split(',')[0];
    }
    script = "\n// for " + code + "\nvar __mc__obj = " + _obj + " || {};\nfor(var " + _key + " in __mc__obj){\n    var " + _val + " = __mc__obj[" + _key + "] || {};\n    " + (parseDom(dom, ix + 1)) + "\n";
  }
  return script += "} // endFor \n";
};


/*
 * 解释 if
 */

parserAttrIf = function(code, dom, ix) {
  var script;
  script = '';
  delete dom.attribs['mc-if'];
  return script = "\n// if " + code + "\nif( " + code + " ){\n   " + (parseDom(dom, ix + 1)) + "\n}// endif \n";
};


/*
 * 解释 unless
 */

parserAttrUnless = function(code, dom, ix) {
  var script;
  script = '';
  delete dom.attribs['mc-unless'];
  return script = "\n// if " + code + "\nif( !(" + code + ") ){\n   " + (parseDom(dom, ix + 1)) + "\n}// endif \n";
};


/*
 * 解释属性
 */

parserAttr = function(attribs, ix) {
  var attr, script;
  script = '';
  attr = objectKeys(attribs);
  each(attr, function(key) {
    var args, fun, funName, val;
    val = attribs[key];
    if (key.indexOf('mc-') === 0) {
      key = key.replace('mc-', '');
      if (key.indexOf('on-') === 0) {
        fun = val.trim();
        if (_funReg.test(fun)) {
          funName = fun.substr(0, fun.indexOf('('));
          args = fun.substr(fun.indexOf('(') + 1);
          args = args.substr(0, args.length - 1).split(',');
          args.splice(0, 0, "'" + funName + "'");
          return script += "__mc__attr['" + key + "'] = [" + args + "];";
        } else {
          return script += "__mc__attr['" + key + "'] = '" + val + "';";
        }
      } else {
        script += "" + (parserFormatters(val, "__mc__attr['" + key + "']", ix));
        return script += "__mc__isBindObserve = __parserBinders(__mc__binderData, __mc__isBindObserve, '" + key + "', __mc__attr['" + key + "']);";
      }
    } else {
      return script += "__mc__attr['" + key + "'] = '" + val + "';";
    }
  });
  return script;
};

parserFormatters = function(key, valName, ix) {
  var domVal, funcs, script;
  key = key.trim();
  if (key.indexOf('|') === -1) {
    if (key !== false && !key) {
      return valName + " = '';";
    }
    if (_varReg.test(key)) {
      return valName + " = typeof " + key + " === 'undefined' ? '" + key + "' : " + key + ";";
    } else {
      return valName + " = " + key + ";";
    }
  }
  funcs = key.split(' | ');
  domVal = funcs[0];
  funcs.splice(0, 1);
  script = "\n" + valName + " = (function(x){\n";
  each(funcs, function(fun) {
    var args, formatter;
    args = [];
    each(fun.split(' '), function(v) {
      var val;
      val = v.trim();
      if (val.length > 0) {
        return args.push(val);
      }
    });
    formatter = args[0];
    args[0] = 'x';
    return script += "// " + formatter + "\nif( __mc_T_formatters.hasOwnProperty('" + formatter + "') ) {\n    x = __mc_T_formatters['" + formatter + "'](" + (args.join(',')) + ");\n} // end " + formatter + " \n";
  });
  script += "return x;\n})(" + domVal + ");\n";
  return script;
};

domToHtml = function(dom) {
  var html, key, ref, val;
  html = "<" + dom.name;
  if (dom.attribs) {
    ref = dom.attribs;
    for (key in ref) {
      val = ref[key];
      html += " " + key + "=\"" + val + "\" ";
    }
  }
  return html += '/>';
};


/*
 * 解释dom结构
 */

parseDom = function(dom, ix) {
  var attr, attrKeys, code, i, id, len, mapTree, mapTreeId, script, text;
  id = _domId++;
  if (dom.type === 'text') {
    script = '';
    dom.data = dom.data.replace(/\n/g, ' ');
    text = dom.data;
    if (_signReg.test(text)) {
      mapTree = [];
      mapTreeId = 0;
      code = text.replace(_signReg, function(key, val) {
        var reKey;
        reKey = "__mc__rp__key_" + (mapTreeId++);
        script += "var " + reKey + ";";
        mapTree.push({
          key: reKey,
          val: val
        });
        return '" + ' + reKey + ' + "';
      });
      code = '"' + code;
      if (false === _strEndReg.test(code)) {
        code += '"';
      }
      each(mapTree, function(v) {
        return script += "" + (parserFormatters(v.val, v.key, ix));
      });
      script += "tree.push( " + code + " );";
    } else {
      script += "tree.push( '" + dom.data + "' );";
    }
    return script;
  }
  if (!dom.name) {
    return '';
  }
  script = "// " + (domToHtml(dom)) + "\nvar __mc__children_" + id + " = [], __mc__attr = {}, __mc__isBindObserve = false, __mc__binderData = [];";
  if (dom.attribs) {
    if (dom.attribs['mc-for']) {
      return parserAttrFor(dom.attribs['mc-for'], dom, ix);
    }
    if (dom.attribs['mc-if']) {
      return parserAttrIf(dom.attribs['mc-if'], dom, ix);
    }
    if (dom.attribs['mc-unless']) {
      return parserAttrUnless(dom.attribs['mc-unless'], dom, ix);
    }
    attrKeys = objectKeys(dom.attribs);
    for (i = 0, len = attrKeys.length; i < len; i++) {
      attr = attrKeys[i];
      if (attr.indexOf('mc-each-') === 0) {
        return parserAttrEach(dom.attribs[attr], dom, ix, attr);
      }
    }
    script += parserAttr(dom.attribs, ix);
  }
  if (dom.children && dom.children.length > 0) {
    script += parseTree(dom.children, ix, "__mc__children_" + id);
  }
  if (dom.name) {
    script += "var __mc__new_el = new __mc_T_El('" + dom.name + "', __mc__attr, __mc__children_" + id + ");";
    script += "__bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);";
    script += "tree.push( __mc__new_el );";
  }
  return script;
};

parseTree = function(tree, ix, children) {
  var script, treeId, treeLen;
  if (ix == null) {
    ix = 0;
  }
  if (children == null) {
    children = '__mc__children_0';
  }
  treeId = _domId;
  treeLen = 0;
  script = "(function(scope, tree){ // startTree " + treeId + "\n";
  each(tree, function(dom, id) {
    if (dom.type !== 'text' || (dom.type === 'text' && dom.data.trim().length > 0)) {
      script += "\n " + (parseDom(dom, ix + 1));
      return treeLen++;
    }
  });
  script += "})(scope, " + children + "); // endTree " + treeId + "\n";
  if (treeLen > 0) {
    return script;
  }
  return '';
};

domToScript = function(tree, options) {
  var script;
  script = "'use strict';\n\nvar mcore = require('" + options.mcoreName + "');\nvar __mc_T_El = mcore.virtualDom.Element;\nvar __mc_T_formatters = mcore.Template.formatters;\nvar __mc_T_binders = mcore.Template.binders;\nvar __objectKeys = mcore.util.objectKeys;\nvar __each = mcore.util.each;\nvar __isArray = mcore.util.isArray;\n\nmodule.exports = function(scope, __mc__observe){\n    var __mc__children_0 = [];\n    var __mc__binders = {};\n    var __mc__dom_id = 0;\n\n    var __parserBinders = function(__mc__binderData, __mc__isBindObserve, key, val){\n        if( __mc_T_binders.hasOwnProperty(key) ){\n           __mc__isBindObserve = true;\n           __mc__binderData.push({attrName: key, value: val});\n        }\n        return __mc__isBindObserve;\n    };\n\n    var __bindBinder = function(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData){\n        if(!__mc__isBindObserve){\n            var __mc__attr__keys = __objectKeys(__mc__attr);\n            __each(__mc__attr__keys, function(attr){\n                if(attr.indexOf('on-') === 0){\n                    __mc__isBindObserve = true;\n                }\n            });\n        }\n        if(__mc__isBindObserve){\n            __mc__new_el.bindTemplate(__mc__observe);\n            for(var __mc_i = 0, __mc_len = __mc__binderData.length; __mc_i < __mc_len; __mc_i++){\n                var __mc_v = __mc__binderData[__mc_i];\n                __mc__new_el.bindBinder(__mc_v.attrName, __mc_v.value);\n            }\n        }\n    };\n\n    " + (parseTree(tree)) + "\n\n    if(__mc__children_0.length === 1 && __mc__children_0[0].render){\n        var virtualDom = __mc__children_0[0];\n    }\n    else{\n        var virtualDom = new __mc_T_El( 'mc-vd', {}, __mc__children_0 );\n    }\n\n    var templateDefined = {\n        'virtualDom': virtualDom\n    };\n    return templateDefined;\n};";
  script = beautify(script, {
    indent_size: options.formatIndentSize
  });
  return script;
};

module.exports = function(html, options) {
  var domTree;
  if (options == null) {
    options = {};
  }
  options.mcoreName || (options.mcoreName = 'mcore');
  options.formatIndentSize || (options.formatIndentSize = 4);
  _domId = 0;
  domTree = htmlparser.parseDOM(html);
  return domToScript(domTree, options);
};
