'use strict';

var mcore = require('mcore');
var __mc_T_El = mcore.virtualDom.Element;
var __mc_T_formatters = mcore.Template.formatters;
var __mc_T_binders = mcore.Template.binders;
var __mc_T_components = mcore.Template.components;
var __objectKeys = mcore.util.objectKeys;
var __each = mcore.util.each;
var __isArray = mcore.util.isArray;

module.exports = function(scope, __mc__observe) {
    var __mc__children_0 = [];
    var __mc__binders = {};
    var __mc__dom_id = 0;

    var __parserBinders = function(__mc__binderData, __mc__isBindObserve, key, val) {
        if (__mc_T_binders.hasOwnProperty(key)) {
            __mc__isBindObserve = true;
            __mc__binderData.push({
                attrName: key,
                value: val
            });
        }
        return __mc__isBindObserve;
    };

    var __bindBinder = function(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData) {
        if (!__mc__isBindObserve) {
            var __mc__attr__keys = __objectKeys(__mc__attr);
            __each(__mc__attr__keys, function(attr) {
                if (attr.indexOf('on-') === 0) {
                    __mc__isBindObserve = true;
                }
            });
        }
        if (__mc__isBindObserve || __mc_T_components[__mc__new_el.tagName]) {
            __mc__new_el.bindTemplate(__mc__observe);
        }

        if (__mc__isBindObserve) {
            for (var __mc_i = 0, __mc_len = __mc__binderData.length; __mc_i < __mc_len; __mc_i++) {
                var __mc_v = __mc__binderData[__mc_i];
                __mc__new_el.bindBinder(__mc_v.attrName, __mc_v.value);
            }
        }
    };

    (function(scope, tree) { // startTree 0

        // <div mc-data-id="scope.id" />
        var __mc__children_0 = [],
            __mc__attr = {},
            __mc__isBindObserve = false,
            __mc__binderData = [];
        __mc__attr['data-id'] = scope.id;
        if (__mc__attr['data-id'] == undefined) {
            __mc__attr['data-id'] = '';
        }
        __mc__isBindObserve = __parserBinders(__mc__binderData, __mc__isBindObserve, 'data-id', __mc__attr['data-id']);
        __mc__attr['key'] = __mc__dom_id++;
        (function(scope, tree) { // startTree 1

            // <ul/>
            var __mc__children_1 = [],
                __mc__attr = {},
                __mc__isBindObserve = false,
                __mc__binderData = [];
            __mc__attr['key'] = __mc__dom_id++;
            (function(scope, tree) { // startTree 2


                // for v in scope.list
                var __mc__arr = __isArray(scope.list) ? scope.list : [];
                for (var __mc__$ix_ = 0, len = __mc__arr.length; __mc__$ix_ < len; __mc__$ix_++) {
                    var v = __mc__arr[__mc__$ix_];
                    // <li/>
                    var __mc__children_3 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 4

                        var __mc__rp__key_0;
                        __mc__rp__key_0 = (function(x) {
                            // toString
                            if (__mc_T_formatters.hasOwnProperty('toString')) {
                                x = __mc_T_formatters['toString'](x);
                            } // end toString 
                            return x;
                        })(v.name);
                        tree.push("             " + __mc__rp__key_0 + "         ");
                    })(scope, __mc__children_3); // endTree 4
                    var __mc__new_el = new __mc_T_El('li', __mc__attr, __mc__children_3);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                } // endFor 
            })(scope, __mc__children_1); // endTree 2
            var __mc__new_el = new __mc_T_El('ul', __mc__attr, __mc__children_1);
            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
            tree.push(__mc__new_el);
            // <ul/>
            var __mc__children_5 = [],
                __mc__attr = {},
                __mc__isBindObserve = false,
                __mc__binderData = [];
            __mc__attr['key'] = __mc__dom_id++;
            (function(scope, tree) { // startTree 6


                // for v, k in scope.list
                var __mc__arr = __isArray(scope.list) ? scope.list : [];
                for (var k = 0, len = __mc__arr.length; k < len; k++) {
                    var v = __mc__arr[k];
                    // <li/>
                    var __mc__children_7 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 8

                        var __mc__rp__key_0;
                        var __mc__rp__key_1;
                        __mc__rp__key_0 = v.name;
                        if (__mc__rp__key_0 == undefined) {
                            __mc__rp__key_0 = '';
                        }
                        __mc__rp__key_1 = (function(x) {
                            // toString
                            if (__mc_T_formatters.hasOwnProperty('toString')) {
                                x = __mc_T_formatters['toString'](x);
                            } // end toString 
                            return x;
                        })(k);
                        tree.push("             " + __mc__rp__key_0 + " " + __mc__rp__key_1 + "         ");
                    })(scope, __mc__children_7); // endTree 8
                    var __mc__new_el = new __mc_T_El('li', __mc__attr, __mc__children_7);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                } // endFor 
            })(scope, __mc__children_5); // endTree 6
            var __mc__new_el = new __mc_T_El('ul', __mc__attr, __mc__children_5);
            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
            tree.push(__mc__new_el);

            // for v of scope.books
            var __mc__obj = scope.books || {};
            for (var v in __mc__obj) {
                var _ = __mc__obj[v];
                // <a mc-href="v.id" />
                var __mc__children_10 = [],
                    __mc__attr = {},
                    __mc__isBindObserve = false,
                    __mc__binderData = [];
                __mc__attr['href'] = v.id;
                if (__mc__attr['href'] == undefined) {
                    __mc__attr['href'] = '';
                }
                __mc__isBindObserve = __parserBinders(__mc__binderData, __mc__isBindObserve, 'href', __mc__attr['href']);
                __mc__attr['key'] = __mc__dom_id++;
                (function(scope, tree) { // startTree 11

                    var __mc__rp__key_0;
                    __mc__rp__key_0 = v.name;
                    if (__mc__rp__key_0 == undefined) {
                        __mc__rp__key_0 = '';
                    }
                    tree.push("" + __mc__rp__key_0 + "");
                })(scope, __mc__children_10); // endTree 11
                var __mc__new_el = new __mc_T_El('a', __mc__attr, __mc__children_10);
                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                tree.push(__mc__new_el);
            } // endFor 
        })(scope, __mc__children_0); // endTree 1
        var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_0);
        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
        tree.push(__mc__new_el);
        // <div class="main wrapper" />
        var __mc__children_12 = [],
            __mc__attr = {},
            __mc__isBindObserve = false,
            __mc__binderData = [];
        __mc__attr['class'] = 'main wrapper';
        __mc__attr['key'] = __mc__dom_id++;
        (function(scope, tree) { // startTree 13

            // <div class="shop-step" />
            var __mc__children_13 = [],
                __mc__attr = {},
                __mc__isBindObserve = false,
                __mc__binderData = [];
            __mc__attr['class'] = 'shop-step';
            __mc__attr['key'] = __mc__dom_id++;
            (function(scope, tree) { // startTree 14

                // <span class="item first" />
                var __mc__children_14 = [],
                    __mc__attr = {},
                    __mc__isBindObserve = false,
                    __mc__binderData = [];
                __mc__attr['class'] = 'item first';
                __mc__attr['key'] = __mc__dom_id++;
                var __mc__new_el = new __mc_T_El('span', __mc__attr, __mc__children_14);
                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                tree.push(__mc__new_el);
                // <span class="item second second-done0" />
                var __mc__children_15 = [],
                    __mc__attr = {},
                    __mc__isBindObserve = false,
                    __mc__binderData = [];
                __mc__attr['class'] = 'item second second-done0';
                __mc__attr['key'] = __mc__dom_id++;
                var __mc__new_el = new __mc_T_El('span', __mc__attr, __mc__children_15);
                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                tree.push(__mc__new_el);
                // <span class="item third third-done0" />
                var __mc__children_16 = [],
                    __mc__attr = {},
                    __mc__isBindObserve = false,
                    __mc__binderData = [];
                __mc__attr['class'] = 'item third third-done0';
                __mc__attr['key'] = __mc__dom_id++;
                var __mc__new_el = new __mc_T_El('span', __mc__attr, __mc__children_16);
                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                tree.push(__mc__new_el);
            })(scope, __mc__children_13); // endTree 14
            var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_13);
            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
            tree.push(__mc__new_el);
            // <div class="shop-wrap" />
            var __mc__children_17 = [],
                __mc__attr = {},
                __mc__isBindObserve = false,
                __mc__binderData = [];
            __mc__attr['class'] = 'shop-wrap';
            __mc__attr['key'] = __mc__dom_id++;
            (function(scope, tree) { // startTree 18

                // <div class="shop-head" />
                var __mc__children_18 = [],
                    __mc__attr = {},
                    __mc__isBindObserve = false,
                    __mc__binderData = [];
                __mc__attr['class'] = 'shop-head';
                __mc__attr['key'] = __mc__dom_id++;
                (function(scope, tree) { // startTree 19

                    // <h2/>
                    var __mc__children_19 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 20

                        tree.push('确认用户信息');
                    })(scope, __mc__children_19); // endTree 20
                    var __mc__new_el = new __mc_T_El('h2', __mc__attr, __mc__children_19);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                })(scope, __mc__children_18); // endTree 19
                var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_18);
                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                tree.push(__mc__new_el);
                // <div class="user-view" />
                var __mc__children_21 = [],
                    __mc__attr = {},
                    __mc__isBindObserve = false,
                    __mc__binderData = [];
                __mc__attr['class'] = 'user-view';
                __mc__attr['key'] = __mc__dom_id++;
                (function(scope, tree) { // startTree 22

                    // <p class="item active" />
                    var __mc__children_22 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['class'] = 'item active';
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 23

                        // <label/>
                        var __mc__children_23 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 24

                            // <input class="J-addressChk rad"  type="radio"  name="order_address" />
                            var __mc__children_24 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'J-addressChk rad';
                            __mc__attr['type'] = 'radio';
                            __mc__attr['name'] = 'order_address';
                            __mc__attr['key'] = __mc__dom_id++;
                            var __mc__new_el = new __mc_T_El('input', __mc__attr, __mc__children_24);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <span class="addr" />
                            var __mc__children_25 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'addr';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 26

                                tree.push('姚瑛；1592****21；369**1；430821*******1；番禺区番禺大道北 555 号天安科技园总部 2 号楼');
                            })(scope, __mc__children_25); // endTree 26
                            var __mc__new_el = new __mc_T_El('span', __mc__attr, __mc__children_25);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <span class="oper" />
                            var __mc__children_27 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'oper';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 28

                                // <a class="J-addressEdit"  href="javascript:;" />
                                var __mc__children_28 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['class'] = 'J-addressEdit';
                                __mc__attr['href'] = 'javascript:;';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 29

                                    tree.push('修改');
                                })(scope, __mc__children_28); // endTree 29
                                var __mc__new_el = new __mc_T_El('a', __mc__attr, __mc__children_28);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <a class="J-addressDel"  href="javascript:;" />
                                var __mc__children_30 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['class'] = 'J-addressDel';
                                __mc__attr['href'] = 'javascript:;';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 31

                                    tree.push('删除');
                                })(scope, __mc__children_30); // endTree 31
                                var __mc__new_el = new __mc_T_El('a', __mc__attr, __mc__children_30);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                            })(scope, __mc__children_27); // endTree 28
                            var __mc__new_el = new __mc_T_El('span', __mc__attr, __mc__children_27);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                        })(scope, __mc__children_23); // endTree 24
                        var __mc__new_el = new __mc_T_El('label', __mc__attr, __mc__children_23);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                    })(scope, __mc__children_22); // endTree 23
                    var __mc__new_el = new __mc_T_El('p', __mc__attr, __mc__children_22);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                })(scope, __mc__children_21); // endTree 22
                var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_21);
                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                tree.push(__mc__new_el);
                // <div id="J-userInfo"  class="user-info shop-line hide" />
                var __mc__children_32 = [],
                    __mc__attr = {},
                    __mc__isBindObserve = false,
                    __mc__binderData = [];
                __mc__attr['id'] = 'J-userInfo';
                __mc__attr['class'] = 'user-info shop-line hide';
                __mc__attr['key'] = __mc__dom_id++;
                (function(scope, tree) { // startTree 33

                    // <form id="J-userInfoForm"  class="ui-form" />
                    var __mc__children_33 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['id'] = 'J-userInfoForm';
                    __mc__attr['class'] = 'ui-form';
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 34

                        // <div class="ui-form-item" />
                        var __mc__children_34 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['class'] = 'ui-form-item';
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 35

                            // <label for=""  class="ui-label" />
                            var __mc__children_35 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['for'] = '';
                            __mc__attr['class'] = 'ui-label';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 36

                                // <span class="ui-form-required" />
                                var __mc__children_36 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['class'] = 'ui-form-required';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 37

                                    tree.push('*');
                                })(scope, __mc__children_36); // endTree 37
                                var __mc__new_el = new __mc_T_El('span', __mc__attr, __mc__children_36);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                tree.push('姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：');
                            })(scope, __mc__children_35); // endTree 36
                            var __mc__new_el = new __mc_T_El('label', __mc__attr, __mc__children_35);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <input class="ui-input"  type="text"  name="full_name"  required="" />
                            var __mc__children_39 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'ui-input';
                            __mc__attr['type'] = 'text';
                            __mc__attr['name'] = 'full_name';
                            __mc__attr['required'] = '';
                            __mc__attr['key'] = __mc__dom_id++;
                            var __mc__new_el = new __mc_T_El('input', __mc__attr, __mc__children_39);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <div class="ui-form-explain" />
                            var __mc__children_40 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'ui-form-explain';
                            __mc__attr['key'] = __mc__dom_id++;
                            var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_40);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                        })(scope, __mc__children_34); // endTree 35
                        var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_34);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                        // <div class="ui-form-item ui-form-item-error" />
                        var __mc__children_41 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['class'] = 'ui-form-item ui-form-item-error';
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 42

                            // <label for=""  class="ui-label" />
                            var __mc__children_42 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['for'] = '';
                            __mc__attr['class'] = 'ui-label';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 43

                                // <span class="ui-form-required" />
                                var __mc__children_43 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['class'] = 'ui-form-required';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 44

                                    tree.push('*');
                                })(scope, __mc__children_43); // endTree 44
                                var __mc__new_el = new __mc_T_El('span', __mc__attr, __mc__children_43);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                tree.push('手机号码：');
                            })(scope, __mc__children_42); // endTree 43
                            var __mc__new_el = new __mc_T_El('label', __mc__attr, __mc__children_42);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <input class="ui-input"  type="text"  name="mobile"  required="" />
                            var __mc__children_46 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'ui-input';
                            __mc__attr['type'] = 'text';
                            __mc__attr['name'] = 'mobile';
                            __mc__attr['required'] = '';
                            __mc__attr['key'] = __mc__dom_id++;
                            var __mc__new_el = new __mc_T_El('input', __mc__attr, __mc__children_46);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <div class="ui-form-explain" />
                            var __mc__children_47 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'ui-form-explain';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 48

                                tree.push('您已经是软件用户，请联系服务人员进行二次购买，此处暂不支持软件用户二次购买。');
                            })(scope, __mc__children_47); // endTree 48
                            var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_47);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                        })(scope, __mc__children_41); // endTree 42
                        var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_41);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                        // <div class="ui-form-item" />
                        var __mc__children_49 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['class'] = 'ui-form-item';
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 50

                            // <label for=""  class="ui-label" />
                            var __mc__children_50 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['for'] = '';
                            __mc__attr['class'] = 'ui-label';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 51

                                // <span class="ui-form-required" />
                                var __mc__children_51 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['class'] = 'ui-form-required';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 52

                                    tree.push('*');
                                })(scope, __mc__children_51); // endTree 52
                                var __mc__new_el = new __mc_T_El('span', __mc__attr, __mc__children_51);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                tree.push('QQ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：');
                            })(scope, __mc__children_50); // endTree 51
                            var __mc__new_el = new __mc_T_El('label', __mc__attr, __mc__children_50);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <input class="ui-input"  type="text"  name="qq_code"  required="" />
                            var __mc__children_54 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'ui-input';
                            __mc__attr['type'] = 'text';
                            __mc__attr['name'] = 'qq_code';
                            __mc__attr['required'] = '';
                            __mc__attr['key'] = __mc__dom_id++;
                            var __mc__new_el = new __mc_T_El('input', __mc__attr, __mc__children_54);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <div class="ui-form-explain" />
                            var __mc__children_55 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'ui-form-explain';
                            __mc__attr['key'] = __mc__dom_id++;
                            var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_55);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                        })(scope, __mc__children_49); // endTree 50
                        var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_49);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                        // <div class="ui-form-item ui-form-item-error" />
                        var __mc__children_56 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['class'] = 'ui-form-item ui-form-item-error';
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 57

                            // <label for=""  class="ui-label" />
                            var __mc__children_57 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['for'] = '';
                            __mc__attr['class'] = 'ui-label';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 58

                                // <span class="ui-form-required" />
                                var __mc__children_58 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['class'] = 'ui-form-required';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 59

                                    tree.push('*');
                                })(scope, __mc__children_58); // endTree 59
                                var __mc__new_el = new __mc_T_El('span', __mc__attr, __mc__children_58);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                tree.push('身份证号：');
                            })(scope, __mc__children_57); // endTree 58
                            var __mc__new_el = new __mc_T_El('label', __mc__attr, __mc__children_57);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <input class="ui-input"  type="text"  name="id_card"  required="" />
                            var __mc__children_61 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'ui-input';
                            __mc__attr['type'] = 'text';
                            __mc__attr['name'] = 'id_card';
                            __mc__attr['required'] = '';
                            __mc__attr['key'] = __mc__dom_id++;
                            var __mc__new_el = new __mc_T_El('input', __mc__attr, __mc__children_61);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <div class="ui-form-explain" />
                            var __mc__children_62 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'ui-form-explain';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 63

                                tree.push('您已经是软件用户，请联系服务人员进行二次购买，此处暂不支持软件用户二次购买。');
                            })(scope, __mc__children_62); // endTree 63
                            var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_62);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                        })(scope, __mc__children_56); // endTree 57
                        var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_56);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                        // <div id="J-userAddress"  class="ui-form-item" />
                        var __mc__children_64 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['id'] = 'J-userAddress';
                        __mc__attr['class'] = 'ui-form-item';
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 65

                            // <label class="ui-label" />
                            var __mc__children_65 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'ui-label';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 66

                                // <span class="ui-form-required" />
                                var __mc__children_66 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['class'] = 'ui-form-required';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 67

                                    tree.push('*');
                                })(scope, __mc__children_66); // endTree 67
                                var __mc__new_el = new __mc_T_El('span', __mc__attr, __mc__children_66);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                tree.push('收货地址：');
                            })(scope, __mc__children_65); // endTree 66
                            var __mc__new_el = new __mc_T_El('label', __mc__attr, __mc__children_65);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <select name="province"  required="" />
                            var __mc__children_69 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['name'] = 'province';
                            __mc__attr['required'] = '';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 70

                                // <option value="" />
                                var __mc__children_70 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['value'] = '';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 71

                                    tree.push('请选择');
                                })(scope, __mc__children_70); // endTree 71
                                var __mc__new_el = new __mc_T_El('option', __mc__attr, __mc__children_70);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <option value="1" />
                                var __mc__children_72 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['value'] = '1';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 73

                                    tree.push('广东');
                                })(scope, __mc__children_72); // endTree 73
                                var __mc__new_el = new __mc_T_El('option', __mc__attr, __mc__children_72);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <option value="2" />
                                var __mc__children_74 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['value'] = '2';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 75

                                    tree.push('湖南');
                                })(scope, __mc__children_74); // endTree 75
                                var __mc__new_el = new __mc_T_El('option', __mc__attr, __mc__children_74);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                            })(scope, __mc__children_69); // endTree 70
                            var __mc__new_el = new __mc_T_El('select', __mc__attr, __mc__children_69);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <select name="city"  required="" />
                            var __mc__children_76 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['name'] = 'city';
                            __mc__attr['required'] = '';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 77

                                // <option value="" />
                                var __mc__children_77 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['value'] = '';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 78

                                    tree.push('请选择');
                                })(scope, __mc__children_77); // endTree 78
                                var __mc__new_el = new __mc_T_El('option', __mc__attr, __mc__children_77);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <option value="1" />
                                var __mc__children_79 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['value'] = '1';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 80

                                    tree.push('广州');
                                })(scope, __mc__children_79); // endTree 80
                                var __mc__new_el = new __mc_T_El('option', __mc__attr, __mc__children_79);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <option value="2" />
                                var __mc__children_81 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['value'] = '2';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 82

                                    tree.push('深圳');
                                })(scope, __mc__children_81); // endTree 82
                                var __mc__new_el = new __mc_T_El('option', __mc__attr, __mc__children_81);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                            })(scope, __mc__children_76); // endTree 77
                            var __mc__new_el = new __mc_T_El('select', __mc__attr, __mc__children_76);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <select name="district"  required="" />
                            var __mc__children_83 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['name'] = 'district';
                            __mc__attr['required'] = '';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 84

                                // <option value="" />
                                var __mc__children_84 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['value'] = '';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 85

                                    tree.push('请选择');
                                })(scope, __mc__children_84); // endTree 85
                                var __mc__new_el = new __mc_T_El('option', __mc__attr, __mc__children_84);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <option value="1" />
                                var __mc__children_86 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['value'] = '1';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 87

                                    tree.push('番禺');
                                })(scope, __mc__children_86); // endTree 87
                                var __mc__new_el = new __mc_T_El('option', __mc__attr, __mc__children_86);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <option value="2" />
                                var __mc__children_88 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['value'] = '2';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 89

                                    tree.push('天河');
                                })(scope, __mc__children_88); // endTree 89
                                var __mc__new_el = new __mc_T_El('option', __mc__attr, __mc__children_88);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                            })(scope, __mc__children_83); // endTree 84
                            var __mc__new_el = new __mc_T_El('select', __mc__attr, __mc__children_83);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <input class="ui-input street"  type="text"  name="street"  required="" />
                            var __mc__children_90 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'ui-input street';
                            __mc__attr['type'] = 'text';
                            __mc__attr['name'] = 'street';
                            __mc__attr['required'] = '';
                            __mc__attr['key'] = __mc__dom_id++;
                            var __mc__new_el = new __mc_T_El('input', __mc__attr, __mc__children_90);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                        })(scope, __mc__children_64); // endTree 65
                        var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_64);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                        // <div class="ui-form-item" />
                        var __mc__children_91 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['class'] = 'ui-form-item';
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 92

                            // <label/>
                            var __mc__children_92 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 93

                                // <input class="save-chk"  type="checkbox"  name="save_default"  required="" />
                                var __mc__children_93 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['class'] = 'save-chk';
                                __mc__attr['type'] = 'checkbox';
                                __mc__attr['name'] = 'save_default';
                                __mc__attr['required'] = '';
                                __mc__attr['key'] = __mc__dom_id++;
                                var __mc__new_el = new __mc_T_El('input', __mc__attr, __mc__children_93);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                tree.push('保存为默认账号');
                            })(scope, __mc__children_92); // endTree 93
                            var __mc__new_el = new __mc_T_El('label', __mc__attr, __mc__children_92);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <span class="sub-btn" />
                            var __mc__children_95 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'sub-btn';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 96

                                // <input class="btn btn-primary"  type="submit"  value="确定" />
                                var __mc__children_96 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['class'] = 'btn btn-primary';
                                __mc__attr['type'] = 'submit';
                                __mc__attr['value'] = '确定';
                                __mc__attr['key'] = __mc__dom_id++;
                                var __mc__new_el = new __mc_T_El('input', __mc__attr, __mc__children_96);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                            })(scope, __mc__children_95); // endTree 96
                            var __mc__new_el = new __mc_T_El('span', __mc__attr, __mc__children_95);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                        })(scope, __mc__children_91); // endTree 92
                        var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_91);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                    })(scope, __mc__children_33); // endTree 34
                    var __mc__new_el = new __mc_T_El('form', __mc__attr, __mc__children_33);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                })(scope, __mc__children_32); // endTree 33
                var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_32);
                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                tree.push(__mc__new_el);
                // <div class="shop-head" />
                var __mc__children_97 = [],
                    __mc__attr = {},
                    __mc__isBindObserve = false,
                    __mc__binderData = [];
                __mc__attr['class'] = 'shop-head';
                __mc__attr['key'] = __mc__dom_id++;
                (function(scope, tree) { // startTree 98

                    // <h2/>
                    var __mc__children_98 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 99

                        tree.push('确定订单信息');
                    })(scope, __mc__children_98); // endTree 99
                    var __mc__new_el = new __mc_T_El('h2', __mc__attr, __mc__children_98);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                })(scope, __mc__children_97); // endTree 98
                var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_97);
                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                tree.push(__mc__new_el);
                // <div id="J-orderInfo"  class="order-info" />
                var __mc__children_100 = [],
                    __mc__attr = {},
                    __mc__isBindObserve = false,
                    __mc__binderData = [];
                __mc__attr['id'] = 'J-orderInfo';
                __mc__attr['class'] = 'order-info';
                __mc__attr['key'] = __mc__dom_id++;
                (function(scope, tree) { // startTree 101

                    // <table class="ui-table ui-table-center" />
                    var __mc__children_101 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['class'] = 'ui-table ui-table-center';
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 102

                        // <thead/>
                        var __mc__children_102 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 103

                            // <tr/>
                            var __mc__children_103 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 104

                                // <th/>
                                var __mc__children_104 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 105

                                    tree.push('商品名称');
                                })(scope, __mc__children_104); // endTree 105
                                var __mc__new_el = new __mc_T_El('th', __mc__attr, __mc__children_104);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <th/>
                                var __mc__children_106 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 107

                                    tree.push('所含服务');
                                })(scope, __mc__children_106); // endTree 107
                                var __mc__new_el = new __mc_T_El('th', __mc__attr, __mc__children_106);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <th/>
                                var __mc__children_108 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 109

                                    tree.push('单价/使用期限');
                                })(scope, __mc__children_108); // endTree 109
                                var __mc__new_el = new __mc_T_El('th', __mc__attr, __mc__children_108);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <th/>
                                var __mc__children_110 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 111

                                    tree.push('数量');
                                })(scope, __mc__children_110); // endTree 111
                                var __mc__new_el = new __mc_T_El('th', __mc__attr, __mc__children_110);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <th/>
                                var __mc__children_112 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 113

                                    tree.push('合计');
                                })(scope, __mc__children_112); // endTree 113
                                var __mc__new_el = new __mc_T_El('th', __mc__attr, __mc__children_112);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <th/>
                                var __mc__children_114 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 115

                                    tree.push('操作');
                                })(scope, __mc__children_114); // endTree 115
                                var __mc__new_el = new __mc_T_El('th', __mc__attr, __mc__children_114);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                            })(scope, __mc__children_103); // endTree 104
                            var __mc__new_el = new __mc_T_El('tr', __mc__attr, __mc__children_103);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                        })(scope, __mc__children_102); // endTree 103
                        var __mc__new_el = new __mc_T_El('thead', __mc__attr, __mc__children_102);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                        // <tbody/>
                        var __mc__children_116 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 117

                            // <tr/>
                            var __mc__children_117 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 118

                                // <td/>
                                var __mc__children_118 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 119

                                    tree.push('巡航版');
                                })(scope, __mc__children_118); // endTree 119
                                var __mc__new_el = new __mc_T_El('td', __mc__attr, __mc__children_118);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <td/>
                                var __mc__children_120 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 121

                                    tree.push('巡航版及经传手机版');
                                })(scope, __mc__children_120); // endTree 121
                                var __mc__new_el = new __mc_T_El('td', __mc__attr, __mc__children_120);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <td/>
                                var __mc__children_122 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 123

                                    tree.push('18800元');
                                })(scope, __mc__children_122); // endTree 123
                                var __mc__new_el = new __mc_T_El('td', __mc__attr, __mc__children_122);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <td/>
                                var __mc__children_124 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 125

                                    tree.push('1');
                                })(scope, __mc__children_124); // endTree 125
                                var __mc__new_el = new __mc_T_El('td', __mc__attr, __mc__children_124);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <td/>
                                var __mc__children_126 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 127

                                    tree.push('18800元');
                                })(scope, __mc__children_126); // endTree 127
                                var __mc__new_el = new __mc_T_El('td', __mc__attr, __mc__children_126);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <td/>
                                var __mc__children_128 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 129

                                    // <a class="J-delGoodsBtn"  href="javascript:;" />
                                    var __mc__children_129 = [],
                                        __mc__attr = {},
                                        __mc__isBindObserve = false,
                                        __mc__binderData = [];
                                    __mc__attr['class'] = 'J-delGoodsBtn';
                                    __mc__attr['href'] = 'javascript:;';
                                    __mc__attr['key'] = __mc__dom_id++;
                                    (function(scope, tree) { // startTree 130

                                        tree.push('删除');
                                    })(scope, __mc__children_129); // endTree 130
                                    var __mc__new_el = new __mc_T_El('a', __mc__attr, __mc__children_129);
                                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                    tree.push(__mc__new_el);
                                })(scope, __mc__children_128); // endTree 129
                                var __mc__new_el = new __mc_T_El('td', __mc__attr, __mc__children_128);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                            })(scope, __mc__children_117); // endTree 118
                            var __mc__new_el = new __mc_T_El('tr', __mc__attr, __mc__children_117);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                        })(scope, __mc__children_116); // endTree 117
                        var __mc__new_el = new __mc_T_El('tbody', __mc__attr, __mc__children_116);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                        // <tfoot/>
                        var __mc__children_131 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 132

                            // <tr/>
                            var __mc__children_132 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 133

                                // <td class="total"  colspan="6" />
                                var __mc__children_133 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['class'] = 'total';
                                __mc__attr['colspan'] = '6';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 134

                                    // <span class="red2" />
                                    var __mc__children_134 = [],
                                        __mc__attr = {},
                                        __mc__isBindObserve = false,
                                        __mc__binderData = [];
                                    __mc__attr['class'] = 'red2';
                                    __mc__attr['key'] = __mc__dom_id++;
                                    (function(scope, tree) { // startTree 135

                                        tree.push('备注：如已经是软件用户，请联系服务人员进行二次购买，此处暂不支持软件用户二次购买。');
                                    })(scope, __mc__children_134); // endTree 135
                                    var __mc__new_el = new __mc_T_El('span', __mc__attr, __mc__children_134);
                                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                    tree.push(__mc__new_el);
                                    // <span class="num" />
                                    var __mc__children_136 = [],
                                        __mc__attr = {},
                                        __mc__isBindObserve = false,
                                        __mc__binderData = [];
                                    __mc__attr['class'] = 'num';
                                    __mc__attr['key'] = __mc__dom_id++;
                                    (function(scope, tree) { // startTree 137

                                        tree.push('总计：');
                                        // <b class="red2" />
                                        var __mc__children_138 = [],
                                            __mc__attr = {},
                                            __mc__isBindObserve = false,
                                            __mc__binderData = [];
                                        __mc__attr['class'] = 'red2';
                                        __mc__attr['key'] = __mc__dom_id++;
                                        (function(scope, tree) { // startTree 139

                                            tree.push('18800');
                                        })(scope, __mc__children_138); // endTree 139
                                        var __mc__new_el = new __mc_T_El('b', __mc__attr, __mc__children_138);
                                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                        tree.push(__mc__new_el);
                                        tree.push(' 元');
                                    })(scope, __mc__children_136); // endTree 137
                                    var __mc__new_el = new __mc_T_El('span', __mc__attr, __mc__children_136);
                                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                    tree.push(__mc__new_el);
                                })(scope, __mc__children_133); // endTree 134
                                var __mc__new_el = new __mc_T_El('td', __mc__attr, __mc__children_133);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                            })(scope, __mc__children_132); // endTree 133
                            var __mc__new_el = new __mc_T_El('tr', __mc__attr, __mc__children_132);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                        })(scope, __mc__children_131); // endTree 132
                        var __mc__new_el = new __mc_T_El('tfoot', __mc__attr, __mc__children_131);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                    })(scope, __mc__children_101); // endTree 102
                    var __mc__new_el = new __mc_T_El('table', __mc__attr, __mc__children_101);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                })(scope, __mc__children_100); // endTree 101
                var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_100);
                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                tree.push(__mc__new_el);
                // <div class="shop-head" />
                var __mc__children_141 = [],
                    __mc__attr = {},
                    __mc__isBindObserve = false,
                    __mc__binderData = [];
                __mc__attr['class'] = 'shop-head';
                __mc__attr['key'] = __mc__dom_id++;
                (function(scope, tree) { // startTree 142

                    // <h2/>
                    var __mc__children_142 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 143

                        tree.push('发票信息 ');
                        // <a class="J-invoiceEditBtn invoice-edit-btn hide"  href="javascript:;" />
                        var __mc__children_144 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['class'] = 'J-invoiceEditBtn invoice-edit-btn hide';
                        __mc__attr['href'] = 'javascript:;';
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 145

                            // <i class="icon-comm icon-edit" />
                            var __mc__children_145 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'icon-comm icon-edit';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 146

                                tree.push('&#xe607;');
                            })(scope, __mc__children_145); // endTree 146
                            var __mc__new_el = new __mc_T_El('i', __mc__attr, __mc__children_145);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            tree.push('修改');
                        })(scope, __mc__children_144); // endTree 145
                        var __mc__new_el = new __mc_T_El('a', __mc__attr, __mc__children_144);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                    })(scope, __mc__children_142); // endTree 143
                    var __mc__new_el = new __mc_T_El('h2', __mc__attr, __mc__children_142);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                })(scope, __mc__children_141); // endTree 142
                var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_141);
                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                tree.push(__mc__new_el);
                // <div class="J-invoiceInfo invoice-info shop-line" />
                var __mc__children_148 = [],
                    __mc__attr = {},
                    __mc__isBindObserve = false,
                    __mc__binderData = [];
                __mc__attr['class'] = 'J-invoiceInfo invoice-info shop-line';
                __mc__attr['key'] = __mc__dom_id++;
                (function(scope, tree) { // startTree 149

                    // <a class="J-isInvoiceBtn btn btn-primary"  href="javascript:;" />
                    var __mc__children_149 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['class'] = 'J-isInvoiceBtn btn btn-primary';
                    __mc__attr['href'] = 'javascript:;';
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 150

                        tree.push('我需要发票');
                    })(scope, __mc__children_149); // endTree 150
                    var __mc__new_el = new __mc_T_El('a', __mc__attr, __mc__children_149);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                    // <a class="J-noInvoiceBtn btn btn-primary"  href="javascript:;" />
                    var __mc__children_151 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['class'] = 'J-noInvoiceBtn btn btn-primary';
                    __mc__attr['href'] = 'javascript:;';
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 152

                        tree.push('不需要发票');
                    })(scope, __mc__children_151); // endTree 152
                    var __mc__new_el = new __mc_T_El('a', __mc__attr, __mc__children_151);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                })(scope, __mc__children_148); // endTree 149
                var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_148);
                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                tree.push(__mc__new_el);
                // <div class="J-invoiceView invoice-view shop-line hide" />
                var __mc__children_153 = [],
                    __mc__attr = {},
                    __mc__isBindObserve = false,
                    __mc__binderData = [];
                __mc__attr['class'] = 'J-invoiceView invoice-view shop-line hide';
                __mc__attr['key'] = __mc__dom_id++;
                (function(scope, tree) { // startTree 154

                    // <p/>
                    var __mc__children_154 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 155

                        tree.push('发票类型：普通发票');
                    })(scope, __mc__children_154); // endTree 155
                    var __mc__new_el = new __mc_T_El('p', __mc__attr, __mc__children_154);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                    // <p/>
                    var __mc__children_156 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 157

                        tree.push('发票抬头：个人');
                    })(scope, __mc__children_156); // endTree 157
                    var __mc__new_el = new __mc_T_El('p', __mc__attr, __mc__children_156);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                    // <p/>
                    var __mc__children_158 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 159

                        tree.push('发票内容：经传多赢证券交易辅助决策软件');
                    })(scope, __mc__children_158); // endTree 159
                    var __mc__new_el = new __mc_T_El('p', __mc__attr, __mc__children_158);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                    // <p class="tips" />
                    var __mc__children_160 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['class'] = 'tips';
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 161

                        tree.push('备注：发票将于次月寄往各地办事处，请联系办事处领取，如有特殊情况请致电：400-700-3809');
                    })(scope, __mc__children_160); // endTree 161
                    var __mc__new_el = new __mc_T_El('p', __mc__attr, __mc__children_160);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                })(scope, __mc__children_153); // endTree 154
                var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_153);
                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                tree.push(__mc__new_el);
                // <div class="J-isInvoiceBox invoice-view shop-line hide" />
                var __mc__children_162 = [],
                    __mc__attr = {},
                    __mc__isBindObserve = false,
                    __mc__binderData = [];
                __mc__attr['class'] = 'J-isInvoiceBox invoice-view shop-line hide';
                __mc__attr['key'] = __mc__dom_id++;
                (function(scope, tree) { // startTree 163

                    // <form id="J-invoiceForm" />
                    var __mc__children_163 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['id'] = 'J-invoiceForm';
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 164

                        // <p/>
                        var __mc__children_164 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 165

                            tree.push('                     发票类型：                     ');
                            // <label class="type" />
                            var __mc__children_166 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'type';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 167

                                // <input class="J-invoiceType"  type="radio"  name="invoice_type"  checked="checked"  value="1" />
                                var __mc__children_167 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['class'] = 'J-invoiceType';
                                __mc__attr['type'] = 'radio';
                                __mc__attr['name'] = 'invoice_type';
                                __mc__attr['checked'] = 'checked';
                                __mc__attr['value'] = '1';
                                __mc__attr['key'] = __mc__dom_id++;
                                var __mc__new_el = new __mc_T_El('input', __mc__attr, __mc__children_167);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                tree.push('普通发票                     ');
                            })(scope, __mc__children_166); // endTree 167
                            var __mc__new_el = new __mc_T_El('label', __mc__attr, __mc__children_166);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <label class="type" />
                            var __mc__children_169 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'type';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 170

                                // <input class="J-invoiceType"  type="radio"  name="invoice_type"  value="2" />
                                var __mc__children_170 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['class'] = 'J-invoiceType';
                                __mc__attr['type'] = 'radio';
                                __mc__attr['name'] = 'invoice_type';
                                __mc__attr['value'] = '2';
                                __mc__attr['key'] = __mc__dom_id++;
                                var __mc__new_el = new __mc_T_El('input', __mc__attr, __mc__children_170);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                tree.push('增值税专用发票                     ');
                            })(scope, __mc__children_169); // endTree 170
                            var __mc__new_el = new __mc_T_El('label', __mc__attr, __mc__children_169);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                        })(scope, __mc__children_164); // endTree 165
                        var __mc__new_el = new __mc_T_El('p', __mc__attr, __mc__children_164);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                        // <div class="J-comInvoiceEdit" />
                        var __mc__children_172 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['class'] = 'J-comInvoiceEdit';
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 173

                            // <p/>
                            var __mc__children_173 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 174

                                tree.push('                         发票抬头：                         ');
                                // <select class="J-invoiceName name"  name="invoice_name"  required="" />
                                var __mc__children_175 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['class'] = 'J-invoiceName name';
                                __mc__attr['name'] = 'invoice_name';
                                __mc__attr['required'] = '';
                                __mc__attr['key'] = __mc__dom_id++;
                                (function(scope, tree) { // startTree 176

                                    // <option value="1" />
                                    var __mc__children_176 = [],
                                        __mc__attr = {},
                                        __mc__isBindObserve = false,
                                        __mc__binderData = [];
                                    __mc__attr['value'] = '1';
                                    __mc__attr['key'] = __mc__dom_id++;
                                    (function(scope, tree) { // startTree 177

                                        tree.push('个人');
                                    })(scope, __mc__children_176); // endTree 177
                                    var __mc__new_el = new __mc_T_El('option', __mc__attr, __mc__children_176);
                                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                    tree.push(__mc__new_el);
                                    // <option value="2" />
                                    var __mc__children_178 = [],
                                        __mc__attr = {},
                                        __mc__isBindObserve = false,
                                        __mc__binderData = [];
                                    __mc__attr['value'] = '2';
                                    __mc__attr['key'] = __mc__dom_id++;
                                    (function(scope, tree) { // startTree 179

                                        tree.push('单位');
                                    })(scope, __mc__children_178); // endTree 179
                                    var __mc__new_el = new __mc_T_El('option', __mc__attr, __mc__children_178);
                                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                    tree.push(__mc__new_el);
                                })(scope, __mc__children_175); // endTree 176
                                var __mc__new_el = new __mc_T_El('select', __mc__attr, __mc__children_175);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                                // <input class="J-invoiceUnitName ui-input unit hide"  type="text"  name="unit_name"  value="广州经传多赢投资咨询有限公司" />
                                var __mc__children_180 = [],
                                    __mc__attr = {},
                                    __mc__isBindObserve = false,
                                    __mc__binderData = [];
                                __mc__attr['class'] = 'J-invoiceUnitName ui-input unit hide';
                                __mc__attr['type'] = 'text';
                                __mc__attr['name'] = 'unit_name';
                                __mc__attr['value'] = '广州经传多赢投资咨询有限公司';
                                __mc__attr['key'] = __mc__dom_id++;
                                var __mc__new_el = new __mc_T_El('input', __mc__attr, __mc__children_180);
                                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                                tree.push(__mc__new_el);
                            })(scope, __mc__children_173); // endTree 174
                            var __mc__new_el = new __mc_T_El('p', __mc__attr, __mc__children_173);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <p/>
                            var __mc__children_181 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 182

                                tree.push('发票内容：经传多赢证券交易辅助决策软件');
                            })(scope, __mc__children_181); // endTree 182
                            var __mc__new_el = new __mc_T_El('p', __mc__attr, __mc__children_181);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <p class="tips" />
                            var __mc__children_183 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'tips';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 184

                                tree.push('备注：发票将于次月寄往各地办事处，请联系办事处领取，如有特殊情况请致电：400-700-3809');
                            })(scope, __mc__children_183); // endTree 184
                            var __mc__new_el = new __mc_T_El('p', __mc__attr, __mc__children_183);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                        })(scope, __mc__children_172); // endTree 173
                        var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_172);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                        // <p class="J-taxInvoiceEdit tips hide" />
                        var __mc__children_185 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['class'] = 'J-taxInvoiceEdit tips hide';
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 186

                            tree.push('备注：如您需要开通增值税专用发票，请致电400-700-3809');
                        })(scope, __mc__children_185); // endTree 186
                        var __mc__new_el = new __mc_T_El('p', __mc__attr, __mc__children_185);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                        // <p class="btns" />
                        var __mc__children_187 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['class'] = 'btns';
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 188

                            // <input class="btn btn-primary"  type="submit"  value="保存发票信息" />
                            var __mc__children_188 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'btn btn-primary';
                            __mc__attr['type'] = 'submit';
                            __mc__attr['value'] = '保存发票信息';
                            __mc__attr['key'] = __mc__dom_id++;
                            var __mc__new_el = new __mc_T_El('input', __mc__attr, __mc__children_188);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                            // <a class="J-noInvoicebtn btn btn-primary"  href="javascript:;" />
                            var __mc__children_189 = [],
                                __mc__attr = {},
                                __mc__isBindObserve = false,
                                __mc__binderData = [];
                            __mc__attr['class'] = 'J-noInvoicebtn btn btn-primary';
                            __mc__attr['href'] = 'javascript:;';
                            __mc__attr['key'] = __mc__dom_id++;
                            (function(scope, tree) { // startTree 190

                                tree.push('暂不需要发票');
                            })(scope, __mc__children_189); // endTree 190
                            var __mc__new_el = new __mc_T_El('a', __mc__attr, __mc__children_189);
                            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                            tree.push(__mc__new_el);
                        })(scope, __mc__children_187); // endTree 188
                        var __mc__new_el = new __mc_T_El('p', __mc__attr, __mc__children_187);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                    })(scope, __mc__children_163); // endTree 164
                    var __mc__new_el = new __mc_T_El('form', __mc__attr, __mc__children_163);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                })(scope, __mc__children_162); // endTree 163
                var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_162);
                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                tree.push(__mc__new_el);
                // <div class="J-noInvoiceBox invoice-view shop-line hide" />
                var __mc__children_191 = [],
                    __mc__attr = {},
                    __mc__isBindObserve = false,
                    __mc__binderData = [];
                __mc__attr['class'] = 'J-noInvoiceBox invoice-view shop-line hide';
                __mc__attr['key'] = __mc__dom_id++;
                (function(scope, tree) { // startTree 192

                    // <p class="tips" />
                    var __mc__children_192 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['class'] = 'tips';
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 193

                        tree.push('不需要发票');
                    })(scope, __mc__children_192); // endTree 193
                    var __mc__new_el = new __mc_T_El('p', __mc__attr, __mc__children_192);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                })(scope, __mc__children_191); // endTree 192
                var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_191);
                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                tree.push(__mc__new_el);
                // <div class="total-info" />
                var __mc__children_194 = [],
                    __mc__attr = {},
                    __mc__isBindObserve = false,
                    __mc__binderData = [];
                __mc__attr['class'] = 'total-info';
                __mc__attr['key'] = __mc__dom_id++;
                (function(scope, tree) { // startTree 195

                    // <p class="num" />
                    var __mc__children_195 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['class'] = 'num';
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 196

                        tree.push('商品金额 18800 元');
                    })(scope, __mc__children_195); // endTree 196
                    var __mc__new_el = new __mc_T_El('p', __mc__attr, __mc__children_195);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                    // <p class="all" />
                    var __mc__children_197 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['class'] = 'all';
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 198

                        tree.push('您需为订单支付 总共：');
                        // <b class="red2" />
                        var __mc__children_199 = [],
                            __mc__attr = {},
                            __mc__isBindObserve = false,
                            __mc__binderData = [];
                        __mc__attr['class'] = 'red2';
                        __mc__attr['key'] = __mc__dom_id++;
                        (function(scope, tree) { // startTree 200

                            tree.push('18800');
                        })(scope, __mc__children_199); // endTree 200
                        var __mc__new_el = new __mc_T_El('b', __mc__attr, __mc__children_199);
                        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                        tree.push(__mc__new_el);
                        tree.push(' 元');
                    })(scope, __mc__children_197); // endTree 198
                    var __mc__new_el = new __mc_T_El('p', __mc__attr, __mc__children_197);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                    // <a id="J-orderSubmit"  class="order-submit btn btn-primary btn-lg"  href="javascript:;" />
                    var __mc__children_202 = [],
                        __mc__attr = {},
                        __mc__isBindObserve = false,
                        __mc__binderData = [];
                    __mc__attr['id'] = 'J-orderSubmit';
                    __mc__attr['class'] = 'order-submit btn btn-primary btn-lg';
                    __mc__attr['href'] = 'javascript:;';
                    __mc__attr['key'] = __mc__dom_id++;
                    (function(scope, tree) { // startTree 203

                        tree.push('提交订单');
                    })(scope, __mc__children_202); // endTree 203
                    var __mc__new_el = new __mc_T_El('a', __mc__attr, __mc__children_202);
                    __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                    tree.push(__mc__new_el);
                })(scope, __mc__children_194); // endTree 195
                var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_194);
                __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
                tree.push(__mc__new_el);
            })(scope, __mc__children_17); // endTree 18
            var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_17);
            __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
            tree.push(__mc__new_el);
        })(scope, __mc__children_12); // endTree 13
        var __mc__new_el = new __mc_T_El('div', __mc__attr, __mc__children_12);
        __bindBinder(__mc__new_el, __mc__attr, __mc__isBindObserve, __mc__binderData);
        tree.push(__mc__new_el);
    })(scope, __mc__children_0); // endTree 0


    if (__mc__children_0.length === 1 && __mc__children_0[0].render) {
        var virtualDom = __mc__children_0[0];
    } else {
        var virtualDom = new __mc_T_El('mc-vd', {}, __mc__children_0);
    }

    var templateDefined = {
        'virtualDom': virtualDom
    };
    return templateDefined;
};