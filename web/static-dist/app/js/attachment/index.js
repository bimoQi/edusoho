webpackJsonp(["app/js/attachment/index"],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n("681ef68c63f649773fdf"),i=o(r),a=new i.default($("#chooser-upload-panel")),l=function(e){if(e.length&&e.length>0){var t=parseInt(e.length/60),n=Math.round(e.length%60);$("#minute").val(t),$("#second").val(n),$("#length").val(60*t+n)}var o=$('[data-role="metas"]'),r=o.data("idsClass"),i=o.data("listClass");$.get("/attachment/file/"+e.id+"/show",function(t){$("."+i).append(t),$("."+r).val(e.id),$(".modal").modal("hide"),$("."+i).siblings(".js-upload-file").hide()})};a.on("select",l)},"681ef68c63f649773fdf":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n("99661fb1527348ee5def"),f=o(u),c=n("f3404f3e29d10cb74973"),s=o(c),d=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.uploaderPanel=e,n.init(),n}return a(t,e),l(t,[{key:"init",value:function(){this.initFileChooser()}},{key:"initFileChooser",value:function(){var e=this,t=new f.default(this.uploaderPanel);t.on("select",function(t){return e.fileSelect(t)})}},{key:"fileSelect",value:function(e){this.trigger("select",e)}}]),t}(s.default);t.default=d}});