/*! limiter - v1.4 - 2013-05-25 6:23:29 PM
* Copyright (c) 2013 明河; Licensed  */
KISSY.add("gallery/limiter/1.4/index",function(a,b,c){function d(b,c){var e=this;c=a.merge({target:f(b)},c),d.superclass.constructor.call(e,c)}var e="",f=b.all;return a.mix(d,{tpl:{DEFAULT:'<span class="ks-letter-count">\u4f60\u8fd8\u53ef\u4ee5\u8f93\u5165<em class="J_LetterRemain">{remain}</em>\u4e2a\u6c49\u5b57</span>'},event:{RENDER:"render",COUNT:"count"}}),a.extend(d,c,{render:function(){var a=this,b=a.get("target");return b.length?(a.set("tpl",a.get("defaultTpl")),a.count(),b.on("keyup blur",function(){a.count()}),a.fire(d.event.RENDER),void 0):!1},count:function(){var a=this,b=a.get("len"),c=a.get("max"),e=a.get("defaultTpl"),f=a.get("exceedTpl"),g=b>c&&f||e,h=a.get("isCut");h&&(g=e,a._cutText()),a.set("tpl",g),a._create(),a.fire(d.event.COUNT)},_cutText:function(){var a=this,b=a.get("isCut");if(!b)return!1;var c=a.get("len"),d=a.get("max"),e=a.get("target");if(c>d){var f=e.val();f=f.substr(0,d),e.val(f)}},_create:function(){var b,c=this,d=c.get("wrapper"),e=c.get("target"),f=c.get("tpl"),g=c.get("max"),h=c.get("len");return e.length?(b=a.substitute(f,{len:h,max:g,remain:Math.abs(g-h)}),d.html(b),void 0):!1}},{ATTRS:{wrapper:{value:e,getter:function(a){return f(a)}},target:{value:e},el:{value:e},tpl:{value:e},defaultTpl:{value:'<span class="ks-letter-count">\u4f60\u8fd8\u53ef\u4ee5\u8f93\u5165<em class="J_LetterRemain">{remain}</em>\u4e2a\u6c49\u5b57</span>'},exceedTpl:{value:'<span class="ks-letter-count">\u5df2\u7ecf\u8d85\u51fa<em class="J_LetterRemain exceed-letter">{remain}</em>\u4e2a\u6c49\u5b57</span>'},max:{value:50},len:{value:0,getter:function(){var b=this,c=b.get("target"),d=a.trim(c.val()),e=b.get("isRejectTag"),f=b.get("isEnToCn");e&&(d=d.replace(/<[^>]*>/g,""));var g=d.length;return f&&(d=d.replace(/[^\x00-\xff]/g,"**"),g=Math.ceil(d.length/2)),g}},isRejectTag:{value:!1},isEnToCn:{value:!1},isCut:{value:!1}}}),d},{requires:["node","base"]});