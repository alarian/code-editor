!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=512)}({129:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},130:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},131:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},30:function(e,t,n){var o=n(129),r=n(130),c=n(131);e.exports=function(e){return o(e)||r(e)||c()}},34:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},512:function(e,t,n){"use strict";n.r(t);var o=n(30),r=n.n(o),c=n(34),a=n.n(c);!function(){if(!window.consoleLoaded){var e,t,n=document.createElement("c-input"),o=document.createElement("div"),c=document.createElement("c-toggler"),i=document.createElement("c-toggler"),l={"&":"&amp;","<":"&lt;",">":"&gt;"},s=!1;o.id="__c-input",n.appendChild(o),i.innerHTML="&times;",i.onclick=h,i.style.fontSize="1.2em",i.style.left="calc(100vw - 40px)",i.style.transform="translate(-2px, 2px)",c.innerHTML="&#9888;",c.style.transform="translate(2px, 2px)",o.onblur=function(){setTimeout((function(){s=!1}),0)},c.onclick=p,c.ontouchstart=function(){document.ontouchmove=function(e){c.style.transform="translate(".concat(e.touches[0].clientX-20,"px, ").concat(e.touches[0].clientY-20,"px)")},document.ontouchend=function(e){document.ontouchmove=null,document.ontouchend=null}};var u="_c_error"+(new Date).getMilliseconds(),d=document.createElement("c-console"),f={};d.appendChild(n),d.onclick=function(e){var n=e.target;if("use code"===n.getAttribute("action")){var o=n.getAttribute("data-code");t.updateCode(o),t.elTextarea.focus()}},window.consoleLoaded?"complete"===document.readyState?m():document.addEventListener("readystatechange",(function(){"complete"===this.readyState&&m()})):(window.addEventListener("load",m),window.addEventListener("error",(function(e){console.error(e)}))),window.consoleLoaded=!0,console={log:g,error:function(){if(0!==arguments.length){var e=arguments[0];if(arguments[0]instanceof Error||arguments[0]instanceof ErrorEvent)g(u+"error",e);else{var t=Object.values(arguments);t.unshift(u),g.apply(void 0,r()(t))}}},count:function(){var e=(arguments[0]||"default")+"";f[e]?++f[e]:f[e]=1,g("".concat(e,": ").concat(f[e]))},clear:h},window.consoleLoaded||window.addEventListener("error",(function(e){console.error(e)}))}function m(){"console"===sessionStorage.getItem("__mode")?p():(c.isConnected||document.body.appendChild(c),setInterval((function(){c.isConnected||document.body.appendChild(c)}),1e3));var e=document.querySelectorAll("meta");if("mobile"===sessionStorage.getItem("_$mode")){for(var t=!1,n=0;n<e.length;++n)if("viewport"===e[n].name){e[n].setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"),t=!0;break}if(!t){var o=document.createElement("meta");o.name="viewport",o.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",document.getElementsByTagName("head")[0].appendChild(o)}}else if("desktop"===window.__mode)for(var r=0;r<e.length;++r)"viewport"===e[r].name&&e[r].setAttribute("content","user-scalable=yes, maximum-scale=2")}function p(){if(d.isConnected)document.body.removeChild(i),document.body.removeChild(d);else if(document.body.appendChild(i),document.body.appendChild(d),!e){var n=(t=new CodeFlask("#__c-input",{language:"js"})).elTextarea;n&&n.addEventListener("keydown",(function(e){var n=e.keyCode||e.which;if(s=!0,13===n){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation();var o=this.value.trim(),r=(o.length-o.replace(/[\[|{\(\)\}\]]/g,"").length)%2,c=document.createElement("c-code"),a=this.selectionStart,i=o.substr(a-1,1);if("\n"!==i&&"\r"!==i||(o=o.substr(0,a-1)+o.substr(a)),c.textContent=o.length>50?o.substr(0,50)+"...":o,c.setAttribute("data-code",o),c.setAttribute("action","use code"),!o||r)return;t.updateCode(""),console.log(u+"code",c.outerHTML),function(e){var t=function(){try{return esprima.parse(e,{range:!0}).body}catch(e){return[]}}(),n="";if(t.map((function(t){if("VariableDeclaration"===t.type){if(["const","let"].indexOf(t.kind)<0)return;var o=t.range,r=e.substring(o[0],o[1])+";";n+=r}return t})),n){var o=document.createElement("script");o.textContent=n,document.body.appendChild(o),document.body.removeChild(o),r(e)}else r(e);function r(e){try{var t=window.eval(e);console.log(u+"log",t)}catch(e){console.error(e)}}}(o)}})),e=!0}}function y(e){var t="";if("object"===a()(e))for(var n in e){var o=e[n],r=a()(o),c=v(r);"function"===r?o=b(o):"object"===r&&null!==o&&(o=o.constructor.name),c.textContent=s(o+""),t+="<c-key>".concat(n,"</c-key>: ").concat(c.outerHTML,"<br>")}function i(e){return l[e]||e}function s(e){if(e)return e.replace(/[&<>]/g,i)}return t}function v(e){var t=document.createElement("c-text");switch(e){case"boolean":t.classList.add("__c-boolean");break;case"function":t.classList.add("__c-function");break;case"bigint":case"number":t.classList.add("__c-number");break;case"string":t.classList.add("__c-string");break;case"symbol":t.classList.add("__c-symbol");break;case"object":case"undefined":t.classList.add("__c-undefined")}return t}function b(e){var t,n;try{t=esprima.parse(e.toString()).body[0]}catch(n){var o=("("+e.toString()+")").replace(/\{.*\}/,"{}");t=esprima.parse(o).body[0]}if("ExpressionStatement"===t.type){var r=t.expression;"ArrowFunctionExpression"===r.type?n=c(r.params,"arrow"):"FunctionExpression"===r.type&&(n=c(r.params))}else{n=t.id.name+c(t.params)}function c(e,t){var n="(";return e.map((function(e){return n+="RestElement"===e.type?"..."+e.argument.name:e.name+",",e})),n=n.replace(/,$/,""),n+=")"+("arrow"===t?"=>":"")+"{...}"}return n}function g(){var e=null,t=null,o=Object.values(arguments),r="normal",c="";if(0===arguments.length&&(o=[void 0]),arguments[0]===u+"error"){c="no-qoutes";var i=(t=arguments[1]).filename||"console";o=[u,t.message],e=i,t.lineno&&(e+=":"+t.lineno),t.colno&&(e+=":"+t.colno)}else if(arguments[0]===u+"log")e=r="console",o.splice(0,1);else if(arguments[0]===u+"code")r="code",o.splice(0,1);else{var l,s=function(){try{throw Error("")}catch(e){return e}}().stack.split("\n")[arguments[0]===u?4:3],f=s.indexOf("at ");e=s.slice(f+2,s.length)}if("normal"===r&&Array.isArray(e)){var m=/\/\.run_(.+):(\d+):(\d+)/.exec(e),p=(e=m||/^(.+):(\d+):(\d+)/.exec(e.split("/").slice(-1)))[1].split(",");p.length>=2&&(e[1]=p.pop()),e=e[1]+":"+e[2]+":"+e[3]}var g=!1,h=document.createElement("c-message"),x=!0,w=!1,_=void 0;try{for(var C,E=o[Symbol.iterator]();!(x=(C=E.next()).done);x=!0){var S=C.value,L=a()(S),k=void 0;if("code"===r)h.innerHTML=S;else if("object"!==L||null===S){if(S===u){h.classList.add("error");continue}if(g){h.lastElementChild.setAttribute("style",S),g=!1;continue}k=v(L),"function"===L&&(S=b(S),S+=y(S));var j=["code","console"].indexOf(o[0])>-1?o.length>2:o.length>1;"undefined"===L||"string"===L?S+="":S=S.toString(),/^%c/.test(S)&&j?(g=!0,k.textContent=S.replace(/%[a-zA-Z]/,"")):k.textContent=S,c&&"string"===L&&k.classList.add(c)}else{g&&(g=!1);var A=void 0,O=y(S);S.constructor&&(A=S.constructor.name),(k=document.createElement("c-text")).innerHTML="<c-type>".concat(A,"</c-type>")+O}k&&h.appendChild(k)}}catch(l){w=!0,_=l}finally{try{x||null==E.return||E.return()}finally{if(w)throw _}}if(e){var T=document.createElement("c-stack");e=(e=decodeURI(e.replace(".run_","").replace(/\)$/,"").replace(location.origin,""))).length>35?"..."+e.substr(e.length-32):e,T.textContent=e,h.appendChild(T)}else"code"===r&&(h.style.marginBottom="0",h.style.border="none");d.insertBefore(h,n)}function h(){s&&o.focus(),d.textContent="",d.appendChild(n)}}()}});