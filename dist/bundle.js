!function(r,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t=e();for(var n in t)("object"==typeof exports?exports:r)[n]=t[n]}}(window,function(){return function(r){var e={};function t(n){if(e[n])return e[n].exports;var u=e[n]={i:n,l:!1,exports:{}};return r[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var u in r)t.d(n,u,function(e){return r[e]}.bind(null,u));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=0)}([function(r,e,t){"use strict";t.r(e);var n=function(r){return r===Number(r)},u=Number.isInteger||function(r){return"number"==typeof r&&isFinite(r)&&Math.floor(r)===r};e.default={string:function(r,e,t){var n={type:"string",required:!0,message:"请输入"+r,trigger:"blur"};return u(e)&&(n.max=e),u(t)&&(n.min=t),[n]},select:function(r,e){var t={required:!0,message:"请选择"+r,trigger:"change"};return e&&(t.type="array"),[t]},url:function(r){return[{required:!0,message:r+"格式不正确",type:"url",trigger:"blur"}]},integer:function(r,e,t,n){var i=[{required:!0,message:"请输入"+r,trigger:"blur"}];return n?i.push({validator:function(e,t,n){if(!u(t))return n(new Error(r+"只能是整数"));n()},trigger:"blur"}):i.push({type:"string",pattern:/^(([0]{1})|([1-9][0-9]*))$/,message:r+"只能是整数",trigger:"blur"}),(u(e)||u(t))&&i.push({validator:function(n,i,o){return u(e)&&Number(i)>e?o(new Error(r+"不能大于"+e)):u(t)&&Number(i)<t?o(new Error(r+"不能小于"+t)):void o()},trigger:"blur"}),i},money:function(r,e,t){var u=[{type:"string",required:!0,message:"请输入"+(r=r||"金额"),trigger:"blur"},{pattern:/^(([1-9]\d*)|([1-9]\d*)(\.\d{1,2})|(0\.0[1-9]{1})|(0\.[1-9][0-9]{0,1}))$/,message:r+"只能是数字和小数点后面两位",trigger:"blur"}];return(n(e)||n(t))&&u.push({type:"string",validator:function(u,i,o){return n(e)&&Number(i)>e?o(new Error(r+"不能大于"+e)):n(t)&&Number(i)<t?o(new Error(r+"不能小于"+t)):void o()},trigger:"blur"}),u},phone:function(r){return[{required:!0,message:"请输入"+r,trigger:"blur"},{type:"string",pattern:/^[1][3456789][0-9]{9}$/,message:r+"格式不正确",trigger:"blur"}]},bank_card:function(r){return[{required:!0,message:"请输入"+r,trigger:"blur"},{type:"string",pattern:/^(\d{16}|\d{19})$/,message:r+"格式不正确",trigger:"blur"}]},email:function(r){return[{required:!0,message:r+"不能为空",trigger:"blur"},{type:"string",pattern:/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,message:r+"格式不正确",trigger:"blur"}]},qq:function(r){return[{required:!0,message:r+"不能为空",trigger:"blur"},{type:"string",pattern:/^[1-9][0-9]{4,10}$/,message:r+"格式不正确",trigger:"blur"}]}}}])});