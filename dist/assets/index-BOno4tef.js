(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function kP(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Jy={exports:{}},Yc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cb;function VP(){if(Cb)return Yc;Cb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,o){var u=null;if(o!==void 0&&(u=""+o),a.key!==void 0&&(u=""+a.key),"key"in a){o={};for(var d in a)d!=="key"&&(o[d]=a[d])}else o=a;return a=o.ref,{$$typeof:n,type:r,key:u,ref:a!==void 0?a:null,props:o}}return Yc.Fragment=e,Yc.jsx=t,Yc.jsxs=t,Yc}var xb;function MP(){return xb||(xb=1,Jy.exports=VP()),Jy.exports}var $=MP(),Zy={exports:{}},Wc={},e_={exports:{}},t_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Db;function LP(){return Db||(Db=1,function(n){function e(de,Ie){var we=de.length;de.push(Ie);e:for(;0<we;){var Oe=we-1>>>1,O=de[Oe];if(0<a(O,Ie))de[Oe]=Ie,de[we]=O,we=Oe;else break e}}function t(de){return de.length===0?null:de[0]}function r(de){if(de.length===0)return null;var Ie=de[0],we=de.pop();if(we!==Ie){de[0]=we;e:for(var Oe=0,O=de.length,ie=O>>>1;Oe<ie;){var ye=2*(Oe+1)-1,me=de[ye],pe=ye+1,xe=de[pe];if(0>a(me,we))pe<O&&0>a(xe,me)?(de[Oe]=xe,de[pe]=we,Oe=pe):(de[Oe]=me,de[ye]=we,Oe=ye);else if(pe<O&&0>a(xe,we))de[Oe]=xe,de[pe]=we,Oe=pe;else break e}}return Ie}function a(de,Ie){var we=de.sortIndex-Ie.sortIndex;return we!==0?we:de.id-Ie.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],m=[],_=1,v=null,w=3,S=!1,D=!1,U=!1,L=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function K(de){for(var Ie=t(m);Ie!==null;){if(Ie.callback===null)r(m);else if(Ie.startTime<=de)r(m),Ie.sortIndex=Ie.expirationTime,e(p,Ie);else break;Ie=t(m)}}function oe(de){if(U=!1,K(de),!D)if(t(p)!==null)D=!0,Nt();else{var Ie=t(m);Ie!==null&&It(oe,Ie.startTime-de)}}var ae=!1,le=-1,x=5,R=-1;function A(){return!(n.unstable_now()-R<x)}function P(){if(ae){var de=n.unstable_now();R=de;var Ie=!0;try{e:{D=!1,U&&(U=!1,H(le),le=-1),S=!0;var we=w;try{t:{for(K(de),v=t(p);v!==null&&!(v.expirationTime>de&&A());){var Oe=v.callback;if(typeof Oe=="function"){v.callback=null,w=v.priorityLevel;var O=Oe(v.expirationTime<=de);if(de=n.unstable_now(),typeof O=="function"){v.callback=O,K(de),Ie=!0;break t}v===t(p)&&r(p),K(de)}else r(p);v=t(p)}if(v!==null)Ie=!0;else{var ie=t(m);ie!==null&&It(oe,ie.startTime-de),Ie=!1}}break e}finally{v=null,w=we,S=!1}Ie=void 0}}finally{Ie?V():ae=!1}}}var V;if(typeof X=="function")V=function(){X(P)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,N=B.port2;B.port1.onmessage=P,V=function(){N.postMessage(null)}}else V=function(){L(P,0)};function Nt(){ae||(ae=!0,V())}function It(de,Ie){le=L(function(){de(n.unstable_now())},Ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(de){de.callback=null},n.unstable_continueExecution=function(){D||S||(D=!0,Nt())},n.unstable_forceFrameRate=function(de){0>de||125<de?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<de?Math.floor(1e3/de):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(de){switch(w){case 1:case 2:case 3:var Ie=3;break;default:Ie=w}var we=w;w=Ie;try{return de()}finally{w=we}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(de,Ie){switch(de){case 1:case 2:case 3:case 4:case 5:break;default:de=3}var we=w;w=de;try{return Ie()}finally{w=we}},n.unstable_scheduleCallback=function(de,Ie,we){var Oe=n.unstable_now();switch(typeof we=="object"&&we!==null?(we=we.delay,we=typeof we=="number"&&0<we?Oe+we:Oe):we=Oe,de){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=we+O,de={id:_++,callback:Ie,priorityLevel:de,startTime:we,expirationTime:O,sortIndex:-1},we>Oe?(de.sortIndex=we,e(m,de),t(p)===null&&de===t(m)&&(U?(H(le),le=-1):U=!0,It(oe,we-Oe))):(de.sortIndex=O,e(p,de),D||S||(D=!0,Nt())),de},n.unstable_shouldYield=A,n.unstable_wrapCallback=function(de){var Ie=w;return function(){var we=w;w=Ie;try{return de.apply(this,arguments)}finally{w=we}}}}(t_)),t_}var Pb;function UP(){return Pb||(Pb=1,e_.exports=LP()),e_.exports}var n_={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nb;function zP(){if(Nb)return Ne;Nb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,U={};function L(O,ie,ye){this.props=O,this.context=ie,this.refs=U,this.updater=ye||S}L.prototype.isReactComponent={},L.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},L.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function H(){}H.prototype=L.prototype;function X(O,ie,ye){this.props=O,this.context=ie,this.refs=U,this.updater=ye||S}var K=X.prototype=new H;K.constructor=X,D(K,L.prototype),K.isPureReactComponent=!0;var oe=Array.isArray,ae={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function x(O,ie,ye,me,pe,xe){return ye=xe.ref,{$$typeof:n,type:O,key:ie,ref:ye!==void 0?ye:null,props:xe}}function R(O,ie){return x(O.type,ie,void 0,void 0,void 0,O.props)}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function P(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ye){return ie[ye]})}var V=/\/+/g;function B(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?P(""+O.key):ie.toString(36)}function N(){}function Nt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function It(O,ie,ye,me,pe){var xe=typeof O;(xe==="undefined"||xe==="boolean")&&(O=null);var Ce=!1;if(O===null)Ce=!0;else switch(xe){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(O.$$typeof){case n:case e:Ce=!0;break;case _:return Ce=O._init,It(Ce(O._payload),ie,ye,me,pe)}}if(Ce)return pe=pe(O),Ce=me===""?"."+B(O,0):me,oe(pe)?(ye="",Ce!=null&&(ye=Ce.replace(V,"$&/")+"/"),It(pe,ie,ye,"",function(Je){return Je})):pe!=null&&(A(pe)&&(pe=R(pe,ye+(pe.key==null||O&&O.key===pe.key?"":(""+pe.key).replace(V,"$&/")+"/")+Ce)),ie.push(pe)),1;Ce=0;var ut=me===""?".":me+":";if(oe(O))for(var Me=0;Me<O.length;Me++)me=O[Me],xe=ut+B(me,Me),Ce+=It(me,ie,ye,xe,pe);else if(Me=w(O),typeof Me=="function")for(O=Me.call(O),Me=0;!(me=O.next()).done;)me=me.value,xe=ut+B(me,Me++),Ce+=It(me,ie,ye,xe,pe);else if(xe==="object"){if(typeof O.then=="function")return It(Nt(O),ie,ye,me,pe);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function de(O,ie,ye){if(O==null)return O;var me=[],pe=0;return It(O,me,"","",function(xe){return ie.call(ye,xe,pe++)}),me}function Ie(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(ye){(O._status===0||O._status===-1)&&(O._status=1,O._result=ye)},function(ye){(O._status===0||O._status===-1)&&(O._status=2,O._result=ye)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var we=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Oe(){}return Ne.Children={map:de,forEach:function(O,ie,ye){de(O,function(){ie.apply(this,arguments)},ye)},count:function(O){var ie=0;return de(O,function(){ie++}),ie},toArray:function(O){return de(O,function(ie){return ie})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ne.Component=L,Ne.Fragment=t,Ne.Profiler=a,Ne.PureComponent=X,Ne.StrictMode=r,Ne.Suspense=p,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,Ne.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ne.cache=function(O){return function(){return O.apply(null,arguments)}},Ne.cloneElement=function(O,ie,ye){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var me=D({},O.props),pe=O.key,xe=void 0;if(ie!=null)for(Ce in ie.ref!==void 0&&(xe=void 0),ie.key!==void 0&&(pe=""+ie.key),ie)!le.call(ie,Ce)||Ce==="key"||Ce==="__self"||Ce==="__source"||Ce==="ref"&&ie.ref===void 0||(me[Ce]=ie[Ce]);var Ce=arguments.length-2;if(Ce===1)me.children=ye;else if(1<Ce){for(var ut=Array(Ce),Me=0;Me<Ce;Me++)ut[Me]=arguments[Me+2];me.children=ut}return x(O.type,pe,void 0,void 0,xe,me)},Ne.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:o,_context:O},O},Ne.createElement=function(O,ie,ye){var me,pe={},xe=null;if(ie!=null)for(me in ie.key!==void 0&&(xe=""+ie.key),ie)le.call(ie,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(pe[me]=ie[me]);var Ce=arguments.length-2;if(Ce===1)pe.children=ye;else if(1<Ce){for(var ut=Array(Ce),Me=0;Me<Ce;Me++)ut[Me]=arguments[Me+2];pe.children=ut}if(O&&O.defaultProps)for(me in Ce=O.defaultProps,Ce)pe[me]===void 0&&(pe[me]=Ce[me]);return x(O,xe,void 0,void 0,null,pe)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(O){return{$$typeof:d,render:O}},Ne.isValidElement=A,Ne.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:Ie}},Ne.memo=function(O,ie){return{$$typeof:m,type:O,compare:ie===void 0?null:ie}},Ne.startTransition=function(O){var ie=ae.T,ye={};ae.T=ye;try{var me=O(),pe=ae.S;pe!==null&&pe(ye,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(Oe,we)}catch(xe){we(xe)}finally{ae.T=ie}},Ne.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},Ne.use=function(O){return ae.H.use(O)},Ne.useActionState=function(O,ie,ye){return ae.H.useActionState(O,ie,ye)},Ne.useCallback=function(O,ie){return ae.H.useCallback(O,ie)},Ne.useContext=function(O){return ae.H.useContext(O)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(O,ie){return ae.H.useDeferredValue(O,ie)},Ne.useEffect=function(O,ie){return ae.H.useEffect(O,ie)},Ne.useId=function(){return ae.H.useId()},Ne.useImperativeHandle=function(O,ie,ye){return ae.H.useImperativeHandle(O,ie,ye)},Ne.useInsertionEffect=function(O,ie){return ae.H.useInsertionEffect(O,ie)},Ne.useLayoutEffect=function(O,ie){return ae.H.useLayoutEffect(O,ie)},Ne.useMemo=function(O,ie){return ae.H.useMemo(O,ie)},Ne.useOptimistic=function(O,ie){return ae.H.useOptimistic(O,ie)},Ne.useReducer=function(O,ie,ye){return ae.H.useReducer(O,ie,ye)},Ne.useRef=function(O){return ae.H.useRef(O)},Ne.useState=function(O){return ae.H.useState(O)},Ne.useSyncExternalStore=function(O,ie,ye){return ae.H.useSyncExternalStore(O,ie,ye)},Ne.useTransition=function(){return ae.H.useTransition()},Ne.version="19.0.0",Ne}var Ob;function Rv(){return Ob||(Ob=1,n_.exports=zP()),n_.exports}var r_={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kb;function BP(){if(kb)return wn;kb=1;var n=Rv();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function o(p,m,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:v==null?null:""+v,children:p,containerInfo:m,implementation:_}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return o(p,m,null,_)},wn.flushSync=function(p){var m=u.T,_=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=m,r.p=_,r.d.f()}},wn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},wn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},wn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:S}):_==="script"&&r.d.X(p,{crossOrigin:v,integrity:w,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},wn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin);r.d.L(p,_,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wn.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},wn.requestFormReset=function(p){r.d.r(p)},wn.unstable_batchedUpdates=function(p,m){return p(m)},wn.useFormState=function(p,m,_){return u.H.useFormState(p,m,_)},wn.useFormStatus=function(){return u.H.useHostTransitionStatus()},wn.version="19.0.0",wn}var Vb;function FP(){if(Vb)return r_.exports;Vb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),r_.exports=BP(),r_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb;function jP(){if(Mb)return Wc;Mb=1;var n=UP(),e=Rv(),t=FP();function r(i){var s="https://react.dev/errors/"+i;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}var o=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),S=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),oe=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=ae&&i[ae]||i["@@iterator"],typeof i=="function"?i:null)}var x=Symbol.for("react.client.reference");function R(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===x?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case p:return"Fragment";case d:return"Portal";case _:return"Profiler";case m:return"StrictMode";case U:return"Suspense";case L:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case S:return(i.displayName||"Context")+".Provider";case w:return(i._context.displayName||"Context")+".Consumer";case D:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case H:return s=i.displayName||null,s!==null?s:R(i.type)||"Memo";case X:s=i._payload,i=i._init;try{return R(i(s))}catch{}}return null}var A=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=Object.assign,V,B;function N(i){if(V===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||"",B=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+i+B}var Nt=!1;function It(i,s){if(!i||Nt)return"";Nt=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(J){var G=J}Reflect.construct(i,[],ne)}else{try{ne.call()}catch(J){G=J}i.call(ne.prototype)}}else{try{throw Error()}catch(J){G=J}(ne=i())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(J){if(J&&G&&typeof J.stack=="string")return[J.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],b=g[1];if(T&&b){var C=T.split(`
`),M=b.split(`
`);for(f=c=0;c<C.length&&!C[c].includes("DetermineComponentFrameRoot");)c++;for(;f<M.length&&!M[f].includes("DetermineComponentFrameRoot");)f++;if(c===C.length||f===M.length)for(c=C.length-1,f=M.length-1;1<=c&&0<=f&&C[c]!==M[f];)f--;for(;1<=c&&0<=f;c--,f--)if(C[c]!==M[f]){if(c!==1||f!==1)do if(c--,f--,0>f||C[c]!==M[f]){var Z=`
`+C[c].replace(" at new "," at ");return i.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",i.displayName)),Z}while(1<=c&&0<=f);break}}}finally{Nt=!1,Error.prepareStackTrace=l}return(l=i?i.displayName||i.name:"")?N(l):""}function de(i){switch(i.tag){case 26:case 27:case 5:return N(i.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 15:return i=It(i.type,!1),i;case 11:return i=It(i.type.render,!1),i;case 1:return i=It(i.type,!0),i;default:return""}}function Ie(i){try{var s="";do s+=de(i),i=i.return;while(i);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function we(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Oe(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function O(i){if(we(i)!==i)throw Error(r(188))}function ie(i){var s=i.alternate;if(!s){if(s=we(i),s===null)throw Error(r(188));return s!==i?null:i}for(var l=i,c=s;;){var f=l.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){l=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===l)return O(f),i;if(g===c)return O(f),s;g=g.sibling}throw Error(r(188))}if(l.return!==c.return)l=f,c=g;else{for(var T=!1,b=f.child;b;){if(b===l){T=!0,l=f,c=g;break}if(b===c){T=!0,c=f,l=g;break}b=b.sibling}if(!T){for(b=g.child;b;){if(b===l){T=!0,l=g,c=f;break}if(b===c){T=!0,c=g,l=f;break}b=b.sibling}if(!T)throw Error(r(189))}}if(l.alternate!==c)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?i:s}function ye(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i;for(i=i.child;i!==null;){if(s=ye(i),s!==null)return s;i=i.sibling}return null}var me=Array.isArray,pe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xe={pending:!1,data:null,method:null,action:null},Ce=[],ut=-1;function Me(i){return{current:i}}function Je(i){0>ut||(i.current=Ce[ut],Ce[ut]=null,ut--)}function Ke(i,s){ut++,Ce[ut]=i.current,i.current=s}var Ut=Me(null),Zt=Me(null),rr=Me(null),as=Me(null);function os(i,s){switch(Ke(rr,s),Ke(Zt,i),Ke(Ut,null),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)&&(s=s.namespaceURI)?rb(s):0;break;default:if(i=i===8?s.parentNode:s,s=i.tagName,i=i.namespaceURI)i=rb(i),s=ib(i,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}Je(Ut),Ke(Ut,s)}function yi(){Je(Ut),Je(Zt),Je(rr)}function Hu(i){i.memoizedState!==null&&Ke(as,i);var s=Ut.current,l=ib(s,i.type);s!==l&&(Ke(Zt,i),Ke(Ut,l))}function Fo(i){Zt.current===i&&(Je(Ut),Je(Zt)),as.current===i&&(Je(as),Hc._currentValue=xe)}var jo=Object.prototype.hasOwnProperty,Aa=n.unstable_scheduleCallback,qo=n.unstable_cancelCallback,eg=n.unstable_shouldYield,$u=n.unstable_requestPaint,Ln=n.unstable_now,Rd=n.unstable_getCurrentPriorityLevel,$t=n.unstable_ImmediatePriority,en=n.unstable_UserBlockingPriority,_i=n.unstable_NormalPriority,Cd=n.unstable_LowPriority,Gu=n.unstable_IdlePriority,tg=n.log,Sa=n.unstable_setDisableYieldValue,ls=null,En=null;function Ku(i){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(ls,i,void 0,(i.current.flags&128)===128)}catch{}}function Vr(i){if(typeof tg=="function"&&Sa(i),En&&typeof En.setStrictMode=="function")try{En.setStrictMode(ls,i)}catch{}}var Rn=Math.clz32?Math.clz32:Dd,Qu=Math.log,xd=Math.LN2;function Dd(i){return i>>>=0,i===0?32:31-(Qu(i)/xd|0)|0}var Mr=128,us=4194304;function Ir(i){var s=i&42;if(s!==0)return s;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ir(i,s){var l=i.pendingLanes;if(l===0)return 0;var c=0,f=i.suspendedLanes,g=i.pingedLanes,T=i.warmLanes;i=i.finishedLanes!==0;var b=l&134217727;return b!==0?(l=b&~f,l!==0?c=Ir(l):(g&=b,g!==0?c=Ir(g):i||(T=b&~T,T!==0&&(c=Ir(T))))):(b=l&~f,b!==0?c=Ir(b):g!==0?c=Ir(g):i||(T=l&~T,T!==0&&(c=Ir(T)))),c===0?0:s!==0&&s!==c&&(s&f)===0&&(f=c&-c,T=s&-s,f>=T||f===32&&(T&4194176)!==0)?s:c}function cs(i,s){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&s)===0}function Ho(i,s){switch(i){case 1:case 2:case 4:case 8:return s+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yu(){var i=Mr;return Mr<<=1,(Mr&4194176)===0&&(Mr=128),i}function hs(){var i=us;return us<<=1,(us&62914560)===0&&(us=4194304),i}function $o(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Ot(i,s){i.pendingLanes|=s,s!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Pd(i,s,l,c,f,g){var T=i.pendingLanes;i.pendingLanes=l,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=l,i.entangledLanes&=l,i.errorRecoveryDisabledLanes&=l,i.shellSuspendCounter=0;var b=i.entanglements,C=i.expirationTimes,M=i.hiddenUpdates;for(l=T&~l;0<l;){var Z=31-Rn(l),ne=1<<Z;b[Z]=0,C[Z]=-1;var G=M[Z];if(G!==null)for(M[Z]=null,Z=0;Z<G.length;Z++){var J=G[Z];J!==null&&(J.lane&=-536870913)}l&=~ne}c!==0&&ds(i,c,0),g!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=g&~(T&~s))}function ds(i,s,l){i.pendingLanes|=s,i.suspendedLanes&=~s;var c=31-Rn(s);i.entangledLanes|=s,i.entanglements[c]=i.entanglements[c]|1073741824|l&4194218}function fs(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var c=31-Rn(l),f=1<<c;f&s|i[c]&s&&(i[c]|=s),l&=~f}}function Nd(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Od(){var i=pe.p;return i!==0?i:(i=window.event,i===void 0?32:wb(i.type))}function ps(i,s){var l=pe.p;try{return pe.p=i,s()}finally{pe.p=l}}var Lr=Math.random().toString(36).slice(2),tn="__reactFiber$"+Lr,Gt="__reactProps$"+Lr,vi="__reactContainer$"+Lr,Ra="__reactEvents$"+Lr,Go="__reactListeners$"+Lr,Ur="__reactHandles$"+Lr,Wu="__reactResources$"+Lr,ms="__reactMarker$"+Lr;function Ca(i){delete i[tn],delete i[Gt],delete i[Ra],delete i[Go],delete i[Ur]}function Ar(i){var s=i[tn];if(s)return s;for(var l=i.parentNode;l;){if(s=l[vi]||l[tn]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=ob(i);i!==null;){if(l=i[tn])return l;i=ob(i)}return s}i=l,l=i.parentNode}return null}function Ei(i){if(i=i[tn]||i[vi]){var s=i.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return i}return null}function gs(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i.stateNode;throw Error(r(33))}function ys(i){var s=i[Wu];return s||(s=i[Wu]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function yt(i){i[ms]=!0}var Xu=new Set,Ko={};function $n(i,s){Un(i,s),Un(i+"Capture",s)}function Un(i,s){for(Ko[i]=s,i=0;i<s.length;i++)Xu.add(s[i])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ng=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ju={},Zu={};function kd(i){return jo.call(Zu,i)?!0:jo.call(Ju,i)?!1:ng.test(i)?Zu[i]=!0:(Ju[i]=!0,!1)}function _s(i,s,l){if(kd(s))if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":i.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(s);return}}i.setAttribute(s,""+l)}}function vs(i,s,l){if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttribute(s,""+l)}}function sr(i,s,l,c){if(c===null)i.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(l);return}i.setAttributeNS(s,l,""+c)}}function Cn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Vd(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function rg(i){var s=Vd(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function xa(i){i._valueTracker||(i._valueTracker=rg(i))}function ec(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return i&&(c=Vd(i)?i.checked?"true":"false":i.value),i=c,i!==l?(s.setValue(i),!0):!1}function Qo(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Ti=/[\n"\\]/g;function At(i){return i.replace(Ti,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Es(i,s,l,c,f,g,T,b){i.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.type=T:i.removeAttribute("type"),s!=null?T==="number"?(s===0&&i.value===""||i.value!=s)&&(i.value=""+Cn(s)):i.value!==""+Cn(s)&&(i.value=""+Cn(s)):T!=="submit"&&T!=="reset"||i.removeAttribute("value"),s!=null?Yo(i,T,Cn(s)):l!=null?Yo(i,T,Cn(l)):c!=null&&i.removeAttribute("value"),f==null&&g!=null&&(i.defaultChecked=!!g),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?i.name=""+Cn(b):i.removeAttribute("name")}function Da(i,s,l,c,f,g,T,b){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(i.type=g),s!=null||l!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;l=l!=null?""+Cn(l):"",s=s!=null?""+Cn(s):l,b||s===i.value||(i.value=s),i.defaultValue=s}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=b?i.checked:!!c,i.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(i.name=T)}function Yo(i,s,l){s==="number"&&Qo(i.ownerDocument)===i||i.defaultValue===""+l||(i.defaultValue=""+l)}function Qe(i,s,l,c){if(i=i.options,s){s={};for(var f=0;f<l.length;f++)s["$"+l[f]]=!0;for(l=0;l<i.length;l++)f=s.hasOwnProperty("$"+i[l].value),i[l].selected!==f&&(i[l].selected=f),f&&c&&(i[l].defaultSelected=!0)}else{for(l=""+Cn(l),s=null,f=0;f<i.length;f++){if(i[f].value===l){i[f].selected=!0,c&&(i[f].defaultSelected=!0);return}s!==null||i[f].disabled||(s=i[f])}s!==null&&(s.selected=!0)}}function Pa(i,s,l){if(s!=null&&(s=""+Cn(s),s!==i.value&&(i.value=s),l==null)){i.defaultValue!==s&&(i.defaultValue=s);return}i.defaultValue=l!=null?""+Cn(l):""}function Ts(i,s,l,c){if(s==null){if(c!=null){if(l!=null)throw Error(r(92));if(me(c)){if(1<c.length)throw Error(r(93));c=c[0]}l=c}l==null&&(l=""),s=l}l=Cn(s),i.defaultValue=l,c=i.textContent,c===l&&c!==""&&c!==null&&(i.value=c)}function ar(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var ig=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tc(i,s,l){var c=s.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?i.setProperty(s,""):s==="float"?i.cssFloat="":i[s]="":c?i.setProperty(s,l):typeof l!="number"||l===0||ig.has(s)?s==="float"?i.cssFloat=l:i[s]=(""+l).trim():i[s]=l+"px"}function Md(i,s,l){if(s!=null&&typeof s!="object")throw Error(r(62));if(i=i.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var f in s)c=s[f],s.hasOwnProperty(f)&&l[f]!==c&&tc(i,f,c)}else for(var g in s)s.hasOwnProperty(g)&&tc(i,g,s[g])}function nc(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ag=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zr(i){return ag.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var or=null;function Wo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var wi=null,bi=null;function Ii(i){var s=Ei(i);if(s&&(i=s.stateNode)){var l=i[Gt]||null;e:switch(i=s.stateNode,s.type){case"input":if(Es(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+At(""+s)+'"][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==i&&c.form===i.form){var f=c[Gt]||null;if(!f)throw Error(r(90));Es(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<l.length;s++)c=l[s],c.form===i.form&&ec(c)}break e;case"textarea":Pa(i,l.value,l.defaultValue);break e;case"select":s=l.value,s!=null&&Qe(i,!!l.multiple,s,!1)}}}var rc=!1;function Ld(i,s,l){if(rc)return i(s,l);rc=!0;try{var c=i(s);return c}finally{if(rc=!1,(wi!==null||bi!==null)&&(xf(),wi&&(s=wi,i=bi,bi=wi=null,Ii(s),i)))for(s=0;s<i.length;s++)Ii(i[s])}}function Na(i,s){var l=i.stateNode;if(l===null)return null;var c=l[Gt]||null;if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(r(231,s,typeof l));return l}var lr=!1;if(Gn)try{var Oa={};Object.defineProperty(Oa,"passive",{get:function(){lr=!0}}),window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{lr=!1}var Br=null,ws=null,Ai=null;function ic(){if(Ai)return Ai;var i,s=ws,l=s.length,c,f="value"in Br?Br.value:Br.textContent,g=f.length;for(i=0;i<l&&s[i]===f[i];i++);var T=l-i;for(c=1;c<=T&&s[l-c]===f[g-c];c++);return Ai=f.slice(i,1<c?1-c:void 0)}function Fr(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function jr(){return!0}function sc(){return!1}function nn(i){function s(l,c,f,g,T){this._reactName=l,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var b in i)i.hasOwnProperty(b)&&(l=i[b],this[b]=l?l(g):g[b]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?jr:sc,this.isPropagationStopped=sc,this}return P(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),s}var Ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=nn(Ze),ka=P({},Ze,{view:0,detail:0}),Ud=nn(ka),Jo,Zo,qr,Va=P({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==qr&&(qr&&i.type==="mousemove"?(Jo=i.screenX-qr.screenX,Zo=i.screenY-qr.screenY):Zo=Jo=0,qr=i),Jo)},movementY:function(i){return"movementY"in i?i.movementY:Zo}}),ur=nn(Va),zd=P({},Va,{dataTransfer:0}),og=nn(zd),Ma=P({},ka,{relatedTarget:0}),el=nn(Ma),ac=P({},Ze,{animationName:0,elapsedTime:0,pseudoElement:0}),tl=nn(ac),Bd=P({},Ze,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),nl=nn(Bd),lg=P({},Ze,{data:0}),oc=nn(lg),La={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lc(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=jd[i])?!!s[i]:!1}function Ua(){return lc}var qd=P({},ka,{key:function(i){if(i.key){var s=La[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Fr(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Fd[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(i){return i.type==="keypress"?Fr(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fr(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),rl=nn(qd),Hd=P({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uc=nn(Hd),Si=P({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),$d=nn(Si),Gd=P({},Ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kd=nn(Gd),Qd=P({},Va,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),il=nn(Qd),xn=P({},Ze,{newState:0,oldState:0}),Yd=nn(xn),Wd=[9,13,27,32],Hr=Gn&&"CompositionEvent"in window,h=null;Gn&&"documentMode"in document&&(h=document.documentMode);var y=Gn&&"TextEvent"in window&&!h,E=Gn&&(!Hr||h&&8<h&&11>=h),I=" ",F=!1;function Y(i,s){switch(i){case"keyup":return Wd.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ce(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var qe=!1;function Kt(i,s){switch(i){case"compositionend":return ce(s);case"keypress":return s.which!==32?null:(F=!0,I);case"textInput":return i=s.data,i===I&&F?null:i;default:return null}}function He(i,s){if(qe)return i==="compositionend"||!Hr&&Y(i,s)?(i=ic(),Ai=ws=Br=null,qe=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!rn[i.type]:s==="textarea"}function Ri(i,s,l,c){wi?bi?bi.push(c):bi=[c]:wi=c,s=kf(s,"onChange"),0<s.length&&(l=new Xo("onChange","change",null,l,c),i.push({event:l,listeners:s}))}var dn=null,$r=null;function cc(i){J0(i,0)}function Xd(i){var s=gs(i);if(ec(s))return i}function RT(i,s){if(i==="change")return s}var CT=!1;if(Gn){var ug;if(Gn){var cg="oninput"in document;if(!cg){var xT=document.createElement("div");xT.setAttribute("oninput","return;"),cg=typeof xT.oninput=="function"}ug=cg}else ug=!1;CT=ug&&(!document.documentMode||9<document.documentMode)}function DT(){dn&&(dn.detachEvent("onpropertychange",PT),$r=dn=null)}function PT(i){if(i.propertyName==="value"&&Xd($r)){var s=[];Ri(s,$r,i,Wo(i)),Ld(cc,s)}}function cD(i,s,l){i==="focusin"?(DT(),dn=s,$r=l,dn.attachEvent("onpropertychange",PT)):i==="focusout"&&DT()}function hD(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Xd($r)}function dD(i,s){if(i==="click")return Xd(s)}function fD(i,s){if(i==="input"||i==="change")return Xd(s)}function pD(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Kn=typeof Object.is=="function"?Object.is:pD;function hc(i,s){if(Kn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var f=l[c];if(!jo.call(s,f)||!Kn(i[f],s[f]))return!1}return!0}function NT(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function OT(i,s){var l=NT(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=s&&c>=s)return{node:l,offset:s-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=NT(l)}}function kT(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?kT(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function VT(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var s=Qo(i.document);s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Qo(i.document)}return s}function hg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function mD(i,s){var l=VT(s);s=i.focusedElem;var c=i.selectionRange;if(l!==s&&s&&s.ownerDocument&&kT(s.ownerDocument.documentElement,s)){if(c!==null&&hg(s)){if(i=c.start,l=c.end,l===void 0&&(l=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(l,s.value.length);else if(l=(i=s.ownerDocument||document)&&i.defaultView||window,l.getSelection){l=l.getSelection();var f=s.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!l.extend&&g>c&&(f=c,c=g,g=f),f=OT(s,g);var T=OT(s,c);f&&T&&(l.rangeCount!==1||l.anchorNode!==f.node||l.anchorOffset!==f.offset||l.focusNode!==T.node||l.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),l.removeAllRanges(),g>c?(l.addRange(i),l.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),l.addRange(i)))}}for(i=[],l=s;l=l.parentNode;)l.nodeType===1&&i.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)l=i[s],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var gD=Gn&&"documentMode"in document&&11>=document.documentMode,sl=null,dg=null,dc=null,fg=!1;function MT(i,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;fg||sl==null||sl!==Qo(c)||(c=sl,"selectionStart"in c&&hg(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),dc&&hc(dc,c)||(dc=c,c=kf(dg,"onSelect"),0<c.length&&(s=new Xo("onSelect","select",null,s,l),i.push({event:s,listeners:c}),s.target=sl)))}function za(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var al={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},pg={},LT={};Gn&&(LT=document.createElement("div").style,"AnimationEvent"in window||(delete al.animationend.animation,delete al.animationiteration.animation,delete al.animationstart.animation),"TransitionEvent"in window||delete al.transitionend.transition);function Ba(i){if(pg[i])return pg[i];if(!al[i])return i;var s=al[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in LT)return pg[i]=s[l];return i}var UT=Ba("animationend"),zT=Ba("animationiteration"),BT=Ba("animationstart"),yD=Ba("transitionrun"),_D=Ba("transitionstart"),vD=Ba("transitioncancel"),FT=Ba("transitionend"),jT=new Map,qT="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Sr(i,s){jT.set(i,s),$n(s,[i])}var cr=[],ol=0,mg=0;function Jd(){for(var i=ol,s=mg=ol=0;s<i;){var l=cr[s];cr[s++]=null;var c=cr[s];cr[s++]=null;var f=cr[s];cr[s++]=null;var g=cr[s];if(cr[s++]=null,c!==null&&f!==null){var T=c.pending;T===null?f.next=f:(f.next=T.next,T.next=f),c.pending=f}g!==0&&HT(l,f,g)}}function Zd(i,s,l,c){cr[ol++]=i,cr[ol++]=s,cr[ol++]=l,cr[ol++]=c,mg|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function gg(i,s,l,c){return Zd(i,s,l,c),ef(i)}function bs(i,s){return Zd(i,null,null,s),ef(i)}function HT(i,s,l){i.lanes|=l;var c=i.alternate;c!==null&&(c.lanes|=l);for(var f=!1,g=i.return;g!==null;)g.childLanes|=l,c=g.alternate,c!==null&&(c.childLanes|=l),g.tag===22&&(i=g.stateNode,i===null||i._visibility&1||(f=!0)),i=g,g=g.return;f&&s!==null&&i.tag===3&&(g=i.stateNode,f=31-Rn(l),g=g.hiddenUpdates,i=g[f],i===null?g[f]=[s]:i.push(s),s.lane=l|536870912)}function ef(i){if(50<Lc)throw Lc=0,wy=null,Error(r(185));for(var s=i.return;s!==null;)i=s,s=i.return;return i.tag===3?i.stateNode:null}var ll={},$T=new WeakMap;function hr(i,s){if(typeof i=="object"&&i!==null){var l=$T.get(i);return l!==void 0?l:(s={value:i,source:s,stack:Ie(s)},$T.set(i,s),s)}return{value:i,source:s,stack:Ie(s)}}var ul=[],cl=0,tf=null,nf=0,dr=[],fr=0,Fa=null,Ci=1,xi="";function ja(i,s){ul[cl++]=nf,ul[cl++]=tf,tf=i,nf=s}function GT(i,s,l){dr[fr++]=Ci,dr[fr++]=xi,dr[fr++]=Fa,Fa=i;var c=Ci;i=xi;var f=32-Rn(c)-1;c&=~(1<<f),l+=1;var g=32-Rn(s)+f;if(30<g){var T=f-f%5;g=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Ci=1<<32-Rn(s)+f|l<<f|c,xi=g+i}else Ci=1<<g|l<<f|c,xi=i}function yg(i){i.return!==null&&(ja(i,1),GT(i,1,0))}function _g(i){for(;i===tf;)tf=ul[--cl],ul[cl]=null,nf=ul[--cl],ul[cl]=null;for(;i===Fa;)Fa=dr[--fr],dr[fr]=null,xi=dr[--fr],dr[fr]=null,Ci=dr[--fr],dr[fr]=null}var Dn=null,fn=null,Ye=!1,Rr=null,Gr=!1,vg=Error(r(519));function qa(i){var s=Error(r(418,""));throw mc(hr(s,i)),vg}function KT(i){var s=i.stateNode,l=i.type,c=i.memoizedProps;switch(s[tn]=i,s[Gt]=c,l){case"dialog":je("cancel",s),je("close",s);break;case"iframe":case"object":case"embed":je("load",s);break;case"video":case"audio":for(l=0;l<zc.length;l++)je(zc[l],s);break;case"source":je("error",s);break;case"img":case"image":case"link":je("error",s),je("load",s);break;case"details":je("toggle",s);break;case"input":je("invalid",s),Da(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),xa(s);break;case"select":je("invalid",s);break;case"textarea":je("invalid",s),Ts(s,c.value,c.defaultValue,c.children),xa(s)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||s.textContent===""+l||c.suppressHydrationWarning===!0||nb(s.textContent,l)?(c.popover!=null&&(je("beforetoggle",s),je("toggle",s)),c.onScroll!=null&&je("scroll",s),c.onScrollEnd!=null&&je("scrollend",s),c.onClick!=null&&(s.onclick=Vf),s=!0):s=!1,s||qa(i)}function QT(i){for(Dn=i.return;Dn;)switch(Dn.tag){case 3:case 27:Gr=!0;return;case 5:case 13:Gr=!1;return;default:Dn=Dn.return}}function fc(i){if(i!==Dn)return!1;if(!Ye)return QT(i),Ye=!0,!1;var s=!1,l;if((l=i.tag!==3&&i.tag!==27)&&((l=i.tag===5)&&(l=i.type,l=!(l!=="form"&&l!=="button")||zy(i.type,i.memoizedProps)),l=!l),l&&(s=!0),s&&fn&&qa(i),QT(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8)if(l=i.data,l==="/$"){if(s===0){fn=xr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++;i=i.nextSibling}fn=null}}else fn=Dn?xr(i.stateNode.nextSibling):null;return!0}function pc(){fn=Dn=null,Ye=!1}function mc(i){Rr===null?Rr=[i]:Rr.push(i)}var gc=Error(r(460)),YT=Error(r(474)),Eg={then:function(){}};function WT(i){return i=i.status,i==="fulfilled"||i==="rejected"}function rf(){}function XT(i,s,l){switch(l=i[l],l===void 0?i.push(s):l!==s&&(s.then(rf,rf),s=l),s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===gc?Error(r(483)):i;default:if(typeof s.status=="string")s.then(rf,rf);else{if(i=at,i!==null&&100<i.shellSuspendCounter)throw Error(r(482));i=s,i.status="pending",i.then(function(c){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=c}},function(c){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===gc?Error(r(483)):i}throw yc=s,gc}}var yc=null;function JT(){if(yc===null)throw Error(r(459));var i=yc;return yc=null,i}var hl=null,_c=0;function sf(i){var s=_c;return _c+=1,hl===null&&(hl=[]),XT(hl,i,s)}function vc(i,s){s=s.props.ref,i.ref=s!==void 0?s:null}function af(i,s){throw s.$$typeof===o?Error(r(525)):(i=Object.prototype.toString.call(s),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i)))}function ZT(i){var s=i._init;return s(i._payload)}function ew(i){function s(z,k){if(i){var q=z.deletions;q===null?(z.deletions=[k],z.flags|=16):q.push(k)}}function l(z,k){if(!i)return null;for(;k!==null;)s(z,k),k=k.sibling;return null}function c(z){for(var k=new Map;z!==null;)z.key!==null?k.set(z.key,z):k.set(z.index,z),z=z.sibling;return k}function f(z,k){return z=Vs(z,k),z.index=0,z.sibling=null,z}function g(z,k,q){return z.index=q,i?(q=z.alternate,q!==null?(q=q.index,q<k?(z.flags|=33554434,k):q):(z.flags|=33554434,k)):(z.flags|=1048576,k)}function T(z){return i&&z.alternate===null&&(z.flags|=33554434),z}function b(z,k,q,ee){return k===null||k.tag!==6?(k=py(q,z.mode,ee),k.return=z,k):(k=f(k,q),k.return=z,k)}function C(z,k,q,ee){var _e=q.type;return _e===p?Z(z,k,q.props.children,ee,q.key):k!==null&&(k.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===X&&ZT(_e)===k.type)?(k=f(k,q.props),vc(k,q),k.return=z,k):(k=If(q.type,q.key,q.props,null,z.mode,ee),vc(k,q),k.return=z,k)}function M(z,k,q,ee){return k===null||k.tag!==4||k.stateNode.containerInfo!==q.containerInfo||k.stateNode.implementation!==q.implementation?(k=my(q,z.mode,ee),k.return=z,k):(k=f(k,q.children||[]),k.return=z,k)}function Z(z,k,q,ee,_e){return k===null||k.tag!==7?(k=Za(q,z.mode,ee,_e),k.return=z,k):(k=f(k,q),k.return=z,k)}function ne(z,k,q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=py(""+k,z.mode,q),k.return=z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case u:return q=If(k.type,k.key,k.props,null,z.mode,q),vc(q,k),q.return=z,q;case d:return k=my(k,z.mode,q),k.return=z,k;case X:var ee=k._init;return k=ee(k._payload),ne(z,k,q)}if(me(k)||le(k))return k=Za(k,z.mode,q,null),k.return=z,k;if(typeof k.then=="function")return ne(z,sf(k),q);if(k.$$typeof===S)return ne(z,Tf(z,k),q);af(z,k)}return null}function G(z,k,q,ee){var _e=k!==null?k.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return _e!==null?null:b(z,k,""+q,ee);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case u:return q.key===_e?C(z,k,q,ee):null;case d:return q.key===_e?M(z,k,q,ee):null;case X:return _e=q._init,q=_e(q._payload),G(z,k,q,ee)}if(me(q)||le(q))return _e!==null?null:Z(z,k,q,ee,null);if(typeof q.then=="function")return G(z,k,sf(q),ee);if(q.$$typeof===S)return G(z,k,Tf(z,q),ee);af(z,q)}return null}function J(z,k,q,ee,_e){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return z=z.get(q)||null,b(k,z,""+ee,_e);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:return z=z.get(ee.key===null?q:ee.key)||null,C(k,z,ee,_e);case d:return z=z.get(ee.key===null?q:ee.key)||null,M(k,z,ee,_e);case X:var Le=ee._init;return ee=Le(ee._payload),J(z,k,q,ee,_e)}if(me(ee)||le(ee))return z=z.get(q)||null,Z(k,z,ee,_e,null);if(typeof ee.then=="function")return J(z,k,q,sf(ee),_e);if(ee.$$typeof===S)return J(z,k,q,Tf(k,ee),_e);af(k,ee)}return null}function Ee(z,k,q,ee){for(var _e=null,Le=null,be=k,Se=k=0,on=null;be!==null&&Se<q.length;Se++){be.index>Se?(on=be,be=null):on=be.sibling;var We=G(z,be,q[Se],ee);if(We===null){be===null&&(be=on);break}i&&be&&We.alternate===null&&s(z,be),k=g(We,k,Se),Le===null?_e=We:Le.sibling=We,Le=We,be=on}if(Se===q.length)return l(z,be),Ye&&ja(z,Se),_e;if(be===null){for(;Se<q.length;Se++)be=ne(z,q[Se],ee),be!==null&&(k=g(be,k,Se),Le===null?_e=be:Le.sibling=be,Le=be);return Ye&&ja(z,Se),_e}for(be=c(be);Se<q.length;Se++)on=J(be,z,Se,q[Se],ee),on!==null&&(i&&on.alternate!==null&&be.delete(on.key===null?Se:on.key),k=g(on,k,Se),Le===null?_e=on:Le.sibling=on,Le=on);return i&&be.forEach(function(js){return s(z,js)}),Ye&&ja(z,Se),_e}function De(z,k,q,ee){if(q==null)throw Error(r(151));for(var _e=null,Le=null,be=k,Se=k=0,on=null,We=q.next();be!==null&&!We.done;Se++,We=q.next()){be.index>Se?(on=be,be=null):on=be.sibling;var js=G(z,be,We.value,ee);if(js===null){be===null&&(be=on);break}i&&be&&js.alternate===null&&s(z,be),k=g(js,k,Se),Le===null?_e=js:Le.sibling=js,Le=js,be=on}if(We.done)return l(z,be),Ye&&ja(z,Se),_e;if(be===null){for(;!We.done;Se++,We=q.next())We=ne(z,We.value,ee),We!==null&&(k=g(We,k,Se),Le===null?_e=We:Le.sibling=We,Le=We);return Ye&&ja(z,Se),_e}for(be=c(be);!We.done;Se++,We=q.next())We=J(be,z,Se,We.value,ee),We!==null&&(i&&We.alternate!==null&&be.delete(We.key===null?Se:We.key),k=g(We,k,Se),Le===null?_e=We:Le.sibling=We,Le=We);return i&&be.forEach(function(OP){return s(z,OP)}),Ye&&ja(z,Se),_e}function Ct(z,k,q,ee){if(typeof q=="object"&&q!==null&&q.type===p&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case u:e:{for(var _e=q.key;k!==null;){if(k.key===_e){if(_e=q.type,_e===p){if(k.tag===7){l(z,k.sibling),ee=f(k,q.props.children),ee.return=z,z=ee;break e}}else if(k.elementType===_e||typeof _e=="object"&&_e!==null&&_e.$$typeof===X&&ZT(_e)===k.type){l(z,k.sibling),ee=f(k,q.props),vc(ee,q),ee.return=z,z=ee;break e}l(z,k);break}else s(z,k);k=k.sibling}q.type===p?(ee=Za(q.props.children,z.mode,ee,q.key),ee.return=z,z=ee):(ee=If(q.type,q.key,q.props,null,z.mode,ee),vc(ee,q),ee.return=z,z=ee)}return T(z);case d:e:{for(_e=q.key;k!==null;){if(k.key===_e)if(k.tag===4&&k.stateNode.containerInfo===q.containerInfo&&k.stateNode.implementation===q.implementation){l(z,k.sibling),ee=f(k,q.children||[]),ee.return=z,z=ee;break e}else{l(z,k);break}else s(z,k);k=k.sibling}ee=my(q,z.mode,ee),ee.return=z,z=ee}return T(z);case X:return _e=q._init,q=_e(q._payload),Ct(z,k,q,ee)}if(me(q))return Ee(z,k,q,ee);if(le(q)){if(_e=le(q),typeof _e!="function")throw Error(r(150));return q=_e.call(q),De(z,k,q,ee)}if(typeof q.then=="function")return Ct(z,k,sf(q),ee);if(q.$$typeof===S)return Ct(z,k,Tf(z,q),ee);af(z,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,k!==null&&k.tag===6?(l(z,k.sibling),ee=f(k,q),ee.return=z,z=ee):(l(z,k),ee=py(q,z.mode,ee),ee.return=z,z=ee),T(z)):l(z,k)}return function(z,k,q,ee){try{_c=0;var _e=Ct(z,k,q,ee);return hl=null,_e}catch(be){if(be===gc)throw be;var Le=yr(29,be,null,z.mode);return Le.lanes=ee,Le.return=z,Le}finally{}}}var Ha=ew(!0),tw=ew(!1),dl=Me(null),of=Me(0);function nw(i,s){i=Bi,Ke(of,i),Ke(dl,s),Bi=i|s.baseLanes}function Tg(){Ke(of,Bi),Ke(dl,dl.current)}function wg(){Bi=of.current,Je(dl),Je(of)}var pr=Me(null),Kr=null;function Is(i){var s=i.alternate;Ke(Yt,Yt.current&1),Ke(pr,i),Kr===null&&(s===null||dl.current!==null||s.memoizedState!==null)&&(Kr=i)}function rw(i){if(i.tag===22){if(Ke(Yt,Yt.current),Ke(pr,i),Kr===null){var s=i.alternate;s!==null&&s.memoizedState!==null&&(Kr=i)}}else As()}function As(){Ke(Yt,Yt.current),Ke(pr,pr.current)}function Di(i){Je(pr),Kr===i&&(Kr=null),Je(Yt)}var Yt=Me(0);function lf(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ED=typeof AbortController<"u"?AbortController:function(){var i=[],s=this.signal={aborted:!1,addEventListener:function(l,c){i.push(c)}};this.abort=function(){s.aborted=!0,i.forEach(function(l){return l()})}},TD=n.unstable_scheduleCallback,wD=n.unstable_NormalPriority,Wt={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bg(){return{controller:new ED,data:new Map,refCount:0}}function Ec(i){i.refCount--,i.refCount===0&&TD(wD,function(){i.controller.abort()})}var Tc=null,Ig=0,fl=0,pl=null;function bD(i,s){if(Tc===null){var l=Tc=[];Ig=0,fl=Dy(),pl={status:"pending",value:void 0,then:function(c){l.push(c)}}}return Ig++,s.then(iw,iw),s}function iw(){if(--Ig===0&&Tc!==null){pl!==null&&(pl.status="fulfilled");var i=Tc;Tc=null,fl=0,pl=null;for(var s=0;s<i.length;s++)(0,i[s])()}}function ID(i,s){var l=[],c={status:"pending",value:null,reason:null,then:function(f){l.push(f)}};return i.then(function(){c.status="fulfilled",c.value=s;for(var f=0;f<l.length;f++)(0,l[f])(s)},function(f){for(c.status="rejected",c.reason=f,f=0;f<l.length;f++)(0,l[f])(void 0)}),c}var sw=A.S;A.S=function(i,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&bD(i,s),sw!==null&&sw(i,s)};var $a=Me(null);function Ag(){var i=$a.current;return i!==null?i:at.pooledCache}function uf(i,s){s===null?Ke($a,$a.current):Ke($a,s.pool)}function aw(){var i=Ag();return i===null?null:{parent:Wt._currentValue,pool:i}}var Ss=0,Ve=null,rt=null,zt=null,cf=!1,ml=!1,Ga=!1,hf=0,wc=0,gl=null,AD=0;function kt(){throw Error(r(321))}function Sg(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Kn(i[l],s[l]))return!1;return!0}function Rg(i,s,l,c,f,g){return Ss=g,Ve=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,A.H=i===null||i.memoizedState===null?Ka:Rs,Ga=!1,g=l(c,f),Ga=!1,ml&&(g=lw(s,l,c,f)),ow(i),g}function ow(i){A.H=Qr;var s=rt!==null&&rt.next!==null;if(Ss=0,zt=rt=Ve=null,cf=!1,wc=0,gl=null,s)throw Error(r(300));i===null||sn||(i=i.dependencies,i!==null&&Ef(i)&&(sn=!0))}function lw(i,s,l,c){Ve=i;var f=0;do{if(ml&&(gl=null),wc=0,ml=!1,25<=f)throw Error(r(301));if(f+=1,zt=rt=null,i.updateQueue!=null){var g=i.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}A.H=Qa,g=s(l,c)}while(ml);return g}function SD(){var i=A.H,s=i.useState()[0];return s=typeof s.then=="function"?bc(s):s,i=i.useState()[0],(rt!==null?rt.memoizedState:null)!==i&&(Ve.flags|=1024),s}function Cg(){var i=hf!==0;return hf=0,i}function xg(i,s,l){s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~l}function Dg(i){if(cf){for(i=i.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}cf=!1}Ss=0,zt=rt=Ve=null,ml=!1,wc=hf=0,gl=null}function zn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Ve.memoizedState=zt=i:zt=zt.next=i,zt}function Bt(){if(rt===null){var i=Ve.alternate;i=i!==null?i.memoizedState:null}else i=rt.next;var s=zt===null?Ve.memoizedState:zt.next;if(s!==null)zt=s,rt=i;else{if(i===null)throw Ve.alternate===null?Error(r(467)):Error(r(310));rt=i,i={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},zt===null?Ve.memoizedState=zt=i:zt=zt.next=i}return zt}var df;df=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function bc(i){var s=wc;return wc+=1,gl===null&&(gl=[]),i=XT(gl,i,s),s=Ve,(zt===null?s.memoizedState:zt.next)===null&&(s=s.alternate,A.H=s===null||s.memoizedState===null?Ka:Rs),i}function ff(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return bc(i);if(i.$$typeof===S)return Tn(i)}throw Error(r(438,String(i)))}function Pg(i){var s=null,l=Ve.updateQueue;if(l!==null&&(s=l.memoCache),s==null){var c=Ve.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),l===null&&(l=df(),Ve.updateQueue=l),l.memoCache=s,l=s.data[s.index],l===void 0)for(l=s.data[s.index]=Array(i),c=0;c<i;c++)l[c]=oe;return s.index++,l}function Pi(i,s){return typeof s=="function"?s(i):s}function pf(i){var s=Bt();return Ng(s,rt,i)}function Ng(i,s,l){var c=i.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=l;var f=i.baseQueue,g=c.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}s.baseQueue=f=g,c.pending=null}if(g=i.baseState,f===null)i.memoizedState=g;else{s=f.next;var b=T=null,C=null,M=s,Z=!1;do{var ne=M.lane&-536870913;if(ne!==M.lane?($e&ne)===ne:(Ss&ne)===ne){var G=M.revertLane;if(G===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),ne===fl&&(Z=!0);else if((Ss&G)===G){M=M.next,G===fl&&(Z=!0);continue}else ne={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},C===null?(b=C=ne,T=g):C=C.next=ne,Ve.lanes|=G,Ms|=G;ne=M.action,Ga&&l(g,ne),g=M.hasEagerState?M.eagerState:l(g,ne)}else G={lane:ne,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},C===null?(b=C=G,T=g):C=C.next=G,Ve.lanes|=ne,Ms|=ne;M=M.next}while(M!==null&&M!==s);if(C===null?T=g:C.next=b,!Kn(g,i.memoizedState)&&(sn=!0,Z&&(l=pl,l!==null)))throw l;i.memoizedState=g,i.baseState=T,i.baseQueue=C,c.lastRenderedState=g}return f===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Og(i){var s=Bt(),l=s.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var c=l.dispatch,f=l.pending,g=s.memoizedState;if(f!==null){l.pending=null;var T=f=f.next;do g=i(g,T.action),T=T.next;while(T!==f);Kn(g,s.memoizedState)||(sn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,c]}function uw(i,s,l){var c=Ve,f=Bt(),g=Ye;if(g){if(l===void 0)throw Error(r(407));l=l()}else l=s();var T=!Kn((rt||f).memoizedState,l);if(T&&(f.memoizedState=l,sn=!0),f=f.queue,Mg(dw.bind(null,c,f,i),[i]),f.getSnapshot!==s||T||zt!==null&&zt.memoizedState.tag&1){if(c.flags|=2048,yl(9,hw.bind(null,c,f,l,s),{destroy:void 0},null),at===null)throw Error(r(349));g||(Ss&60)!==0||cw(c,s,l)}return l}function cw(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Ve.updateQueue,s===null?(s=df(),Ve.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function hw(i,s,l,c){s.value=l,s.getSnapshot=c,fw(s)&&pw(i)}function dw(i,s,l){return l(function(){fw(s)&&pw(i)})}function fw(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Kn(i,l)}catch{return!0}}function pw(i){var s=bs(i,2);s!==null&&Pn(s,i,2)}function kg(i){var s=zn();if(typeof i=="function"){var l=i;if(i=l(),Ga){Vr(!0);try{l()}finally{Vr(!1)}}}return s.memoizedState=s.baseState=i,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:i},s}function mw(i,s,l,c){return i.baseState=l,Ng(i,rt,typeof c=="function"?c:Pi)}function RD(i,s,l,c,f){if(yf(i))throw Error(r(485));if(i=s.action,i!==null){var g={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};A.T!==null?l(!0):g.isTransition=!1,c(g),l=s.pending,l===null?(g.next=s.pending=g,gw(s,g)):(g.next=l.next,s.pending=l.next=g)}}function gw(i,s){var l=s.action,c=s.payload,f=i.state;if(s.isTransition){var g=A.T,T={};A.T=T;try{var b=l(f,c),C=A.S;C!==null&&C(T,b),yw(i,s,b)}catch(M){Vg(i,s,M)}finally{A.T=g}}else try{g=l(f,c),yw(i,s,g)}catch(M){Vg(i,s,M)}}function yw(i,s,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){_w(i,s,c)},function(c){return Vg(i,s,c)}):_w(i,s,l)}function _w(i,s,l){s.status="fulfilled",s.value=l,vw(s),i.state=l,s=i.pending,s!==null&&(l=s.next,l===s?i.pending=null:(l=l.next,s.next=l,gw(i,l)))}function Vg(i,s,l){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=l,vw(s),s=s.next;while(s!==c)}i.action=null}function vw(i){i=i.listeners;for(var s=0;s<i.length;s++)(0,i[s])()}function Ew(i,s){return s}function Tw(i,s){if(Ye){var l=at.formState;if(l!==null){e:{var c=Ve;if(Ye){if(fn){t:{for(var f=fn,g=Gr;f.nodeType!==8;){if(!g){f=null;break t}if(f=xr(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){fn=xr(f.nextSibling),c=f.data==="F!";break e}}qa(c)}c=!1}c&&(s=l[0])}}return l=zn(),l.memoizedState=l.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ew,lastRenderedState:s},l.queue=c,l=zw.bind(null,Ve,c),c.dispatch=l,c=kg(!1),g=Fg.bind(null,Ve,!1,c.queue),c=zn(),f={state:s,dispatch:null,action:i,pending:null},c.queue=f,l=RD.bind(null,Ve,f,g,l),f.dispatch=l,c.memoizedState=i,[s,l,!1]}function ww(i){var s=Bt();return bw(s,rt,i)}function bw(i,s,l){s=Ng(i,s,Ew)[0],i=pf(Pi)[0],s=typeof s=="object"&&s!==null&&typeof s.then=="function"?bc(s):s;var c=Bt(),f=c.queue,g=f.dispatch;return l!==c.memoizedState&&(Ve.flags|=2048,yl(9,CD.bind(null,f,l),{destroy:void 0},null)),[s,g,i]}function CD(i,s){i.action=s}function Iw(i){var s=Bt(),l=rt;if(l!==null)return bw(s,l,i);Bt(),s=s.memoizedState,l=Bt();var c=l.queue.dispatch;return l.memoizedState=i,[s,c,!1]}function yl(i,s,l,c){return i={tag:i,create:s,inst:l,deps:c,next:null},s=Ve.updateQueue,s===null&&(s=df(),Ve.updateQueue=s),l=s.lastEffect,l===null?s.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,s.lastEffect=i),i}function Aw(){return Bt().memoizedState}function mf(i,s,l,c){var f=zn();Ve.flags|=i,f.memoizedState=yl(1|s,l,{destroy:void 0},c===void 0?null:c)}function gf(i,s,l,c){var f=Bt();c=c===void 0?null:c;var g=f.memoizedState.inst;rt!==null&&c!==null&&Sg(c,rt.memoizedState.deps)?f.memoizedState=yl(s,l,g,c):(Ve.flags|=i,f.memoizedState=yl(1|s,l,g,c))}function Sw(i,s){mf(8390656,8,i,s)}function Mg(i,s){gf(2048,8,i,s)}function Rw(i,s){return gf(4,2,i,s)}function Cw(i,s){return gf(4,4,i,s)}function xw(i,s){if(typeof s=="function"){i=i();var l=s(i);return function(){typeof l=="function"?l():s(null)}}if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Dw(i,s,l){l=l!=null?l.concat([i]):null,gf(4,4,xw.bind(null,s,i),l)}function Lg(){}function Pw(i,s){var l=Bt();s=s===void 0?null:s;var c=l.memoizedState;return s!==null&&Sg(s,c[1])?c[0]:(l.memoizedState=[i,s],i)}function Nw(i,s){var l=Bt();s=s===void 0?null:s;var c=l.memoizedState;if(s!==null&&Sg(s,c[1]))return c[0];if(c=i(),Ga){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c}function Ug(i,s,l){return l===void 0||(Ss&1073741824)!==0?i.memoizedState=s:(i.memoizedState=l,i=k0(),Ve.lanes|=i,Ms|=i,l)}function Ow(i,s,l,c){return Kn(l,s)?l:dl.current!==null?(i=Ug(i,l,c),Kn(i,s)||(sn=!0),i):(Ss&42)===0?(sn=!0,i.memoizedState=l):(i=k0(),Ve.lanes|=i,Ms|=i,s)}function kw(i,s,l,c,f){var g=pe.p;pe.p=g!==0&&8>g?g:8;var T=A.T,b={};A.T=b,Fg(i,!1,s,l);try{var C=f(),M=A.S;if(M!==null&&M(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Z=ID(C,c);Ic(i,s,Z,Xn(i))}else Ic(i,s,c,Xn(i))}catch(ne){Ic(i,s,{then:function(){},status:"rejected",reason:ne},Xn())}finally{pe.p=g,A.T=T}}function xD(){}function zg(i,s,l,c){if(i.tag!==5)throw Error(r(476));var f=Vw(i).queue;kw(i,f,s,xe,l===null?xD:function(){return Mw(i),l(c)})}function Vw(i){var s=i.memoizedState;if(s!==null)return s;s={memoizedState:xe,baseState:xe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:xe},next:null};var l={};return s.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:l},next:null},i.memoizedState=s,i=i.alternate,i!==null&&(i.memoizedState=s),s}function Mw(i){var s=Vw(i).next.queue;Ic(i,s,{},Xn())}function Bg(){return Tn(Hc)}function Lw(){return Bt().memoizedState}function Uw(){return Bt().memoizedState}function DD(i){for(var s=i.return;s!==null;){switch(s.tag){case 24:case 3:var l=Xn();i=Ds(l);var c=Ps(s,i,l);c!==null&&(Pn(c,s,l),Rc(c,s,l)),s={cache:bg()},i.payload=s;return}s=s.return}}function PD(i,s,l){var c=Xn();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},yf(i)?Bw(s,l):(l=gg(i,s,l,c),l!==null&&(Pn(l,i,c),Fw(l,s,c)))}function zw(i,s,l){var c=Xn();Ic(i,s,l,c)}function Ic(i,s,l,c){var f={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(yf(i))Bw(s,f);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var T=s.lastRenderedState,b=g(T,l);if(f.hasEagerState=!0,f.eagerState=b,Kn(b,T))return Zd(i,s,f,0),at===null&&Jd(),!1}catch{}finally{}if(l=gg(i,s,f,c),l!==null)return Pn(l,i,c),Fw(l,s,c),!0}return!1}function Fg(i,s,l,c){if(c={lane:2,revertLane:Dy(),action:c,hasEagerState:!1,eagerState:null,next:null},yf(i)){if(s)throw Error(r(479))}else s=gg(i,l,c,2),s!==null&&Pn(s,i,2)}function yf(i){var s=i.alternate;return i===Ve||s!==null&&s===Ve}function Bw(i,s){ml=cf=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Fw(i,s,l){if((l&4194176)!==0){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,fs(i,l)}}var Qr={readContext:Tn,use:ff,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt};Qr.useCacheRefresh=kt,Qr.useMemoCache=kt,Qr.useHostTransitionStatus=kt,Qr.useFormState=kt,Qr.useActionState=kt,Qr.useOptimistic=kt;var Ka={readContext:Tn,use:ff,useCallback:function(i,s){return zn().memoizedState=[i,s===void 0?null:s],i},useContext:Tn,useEffect:Sw,useImperativeHandle:function(i,s,l){l=l!=null?l.concat([i]):null,mf(4194308,4,xw.bind(null,s,i),l)},useLayoutEffect:function(i,s){return mf(4194308,4,i,s)},useInsertionEffect:function(i,s){mf(4,2,i,s)},useMemo:function(i,s){var l=zn();s=s===void 0?null:s;var c=i();if(Ga){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c},useReducer:function(i,s,l){var c=zn();if(l!==void 0){var f=l(s);if(Ga){Vr(!0);try{l(s)}finally{Vr(!1)}}}else f=s;return c.memoizedState=c.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},c.queue=i,i=i.dispatch=PD.bind(null,Ve,i),[c.memoizedState,i]},useRef:function(i){var s=zn();return i={current:i},s.memoizedState=i},useState:function(i){i=kg(i);var s=i.queue,l=zw.bind(null,Ve,s);return s.dispatch=l,[i.memoizedState,l]},useDebugValue:Lg,useDeferredValue:function(i,s){var l=zn();return Ug(l,i,s)},useTransition:function(){var i=kg(!1);return i=kw.bind(null,Ve,i.queue,!0,!1),zn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,s,l){var c=Ve,f=zn();if(Ye){if(l===void 0)throw Error(r(407));l=l()}else{if(l=s(),at===null)throw Error(r(349));($e&60)!==0||cw(c,s,l)}f.memoizedState=l;var g={value:l,getSnapshot:s};return f.queue=g,Sw(dw.bind(null,c,g,i),[i]),c.flags|=2048,yl(9,hw.bind(null,c,g,l,s),{destroy:void 0},null),l},useId:function(){var i=zn(),s=at.identifierPrefix;if(Ye){var l=xi,c=Ci;l=(c&~(1<<32-Rn(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=hf++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=AD++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},useCacheRefresh:function(){return zn().memoizedState=DD.bind(null,Ve)}};Ka.useMemoCache=Pg,Ka.useHostTransitionStatus=Bg,Ka.useFormState=Tw,Ka.useActionState=Tw,Ka.useOptimistic=function(i){var s=zn();s.memoizedState=s.baseState=i;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=l,s=Fg.bind(null,Ve,!0,l),l.dispatch=s,[i,s]};var Rs={readContext:Tn,use:ff,useCallback:Pw,useContext:Tn,useEffect:Mg,useImperativeHandle:Dw,useInsertionEffect:Rw,useLayoutEffect:Cw,useMemo:Nw,useReducer:pf,useRef:Aw,useState:function(){return pf(Pi)},useDebugValue:Lg,useDeferredValue:function(i,s){var l=Bt();return Ow(l,rt.memoizedState,i,s)},useTransition:function(){var i=pf(Pi)[0],s=Bt().memoizedState;return[typeof i=="boolean"?i:bc(i),s]},useSyncExternalStore:uw,useId:Lw};Rs.useCacheRefresh=Uw,Rs.useMemoCache=Pg,Rs.useHostTransitionStatus=Bg,Rs.useFormState=ww,Rs.useActionState=ww,Rs.useOptimistic=function(i,s){var l=Bt();return mw(l,rt,i,s)};var Qa={readContext:Tn,use:ff,useCallback:Pw,useContext:Tn,useEffect:Mg,useImperativeHandle:Dw,useInsertionEffect:Rw,useLayoutEffect:Cw,useMemo:Nw,useReducer:Og,useRef:Aw,useState:function(){return Og(Pi)},useDebugValue:Lg,useDeferredValue:function(i,s){var l=Bt();return rt===null?Ug(l,i,s):Ow(l,rt.memoizedState,i,s)},useTransition:function(){var i=Og(Pi)[0],s=Bt().memoizedState;return[typeof i=="boolean"?i:bc(i),s]},useSyncExternalStore:uw,useId:Lw};Qa.useCacheRefresh=Uw,Qa.useMemoCache=Pg,Qa.useHostTransitionStatus=Bg,Qa.useFormState=Iw,Qa.useActionState=Iw,Qa.useOptimistic=function(i,s){var l=Bt();return rt!==null?mw(l,rt,i,s):(l.baseState=i,[i,l.queue.dispatch])};function jg(i,s,l,c){s=i.memoizedState,l=l(c,s),l=l==null?s:P({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var qg={isMounted:function(i){return(i=i._reactInternals)?we(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var c=Xn(),f=Ds(c);f.payload=s,l!=null&&(f.callback=l),s=Ps(i,f,c),s!==null&&(Pn(s,i,c),Rc(s,i,c))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var c=Xn(),f=Ds(c);f.tag=1,f.payload=s,l!=null&&(f.callback=l),s=Ps(i,f,c),s!==null&&(Pn(s,i,c),Rc(s,i,c))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Xn(),c=Ds(l);c.tag=2,s!=null&&(c.callback=s),s=Ps(i,c,l),s!==null&&(Pn(s,i,l),Rc(s,i,l))}};function jw(i,s,l,c,f,g,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,g,T):s.prototype&&s.prototype.isPureReactComponent?!hc(l,c)||!hc(f,g):!0}function qw(i,s,l,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==i&&qg.enqueueReplaceState(s,s.state,null)}function Ya(i,s){var l=s;if("ref"in s){l={};for(var c in s)c!=="ref"&&(l[c]=s[c])}if(i=i.defaultProps){l===s&&(l=P({},l));for(var f in i)l[f]===void 0&&(l[f]=i[f])}return l}var _f=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function Hw(i){_f(i)}function $w(i){console.error(i)}function Gw(i){_f(i)}function vf(i,s){try{var l=i.onUncaughtError;l(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function Kw(i,s,l){try{var c=i.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Hg(i,s,l){return l=Ds(l),l.tag=3,l.payload={element:null},l.callback=function(){vf(i,s)},l}function Qw(i){return i=Ds(i),i.tag=3,i}function Yw(i,s,l,c){var f=l.type.getDerivedStateFromError;if(typeof f=="function"){var g=c.value;i.payload=function(){return f(g)},i.callback=function(){Kw(s,l,c)}}var T=l.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(i.callback=function(){Kw(s,l,c),typeof f!="function"&&(Ls===null?Ls=new Set([this]):Ls.add(this));var b=c.stack;this.componentDidCatch(c.value,{componentStack:b!==null?b:""})})}function ND(i,s,l,c,f){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=l.alternate,s!==null&&Sc(s,l,f,!0),l=pr.current,l!==null){switch(l.tag){case 13:return Kr===null?Ay():l.alternate===null&&Rt===0&&(Rt=3),l.flags&=-257,l.flags|=65536,l.lanes=f,c===Eg?l.flags|=16384:(s=l.updateQueue,s===null?l.updateQueue=new Set([c]):s.add(c),Ry(i,c,f)),!1;case 22:return l.flags|=65536,c===Eg?l.flags|=16384:(s=l.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=s):(l=s.retryQueue,l===null?s.retryQueue=new Set([c]):l.add(c)),Ry(i,c,f)),!1}throw Error(r(435,l.tag))}return Ry(i,c,f),Ay(),!1}if(Ye)return s=pr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,c!==vg&&(i=Error(r(422),{cause:c}),mc(hr(i,l)))):(c!==vg&&(s=Error(r(423),{cause:c}),mc(hr(s,l))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,c=hr(c,l),f=Hg(i.stateNode,c,f),sy(i,f),Rt!==4&&(Rt=2)),!1;var g=Error(r(520),{cause:c});if(g=hr(g,l),Vc===null?Vc=[g]:Vc.push(g),Rt!==4&&(Rt=2),s===null)return!0;c=hr(c,l),l=s;do{switch(l.tag){case 3:return l.flags|=65536,i=f&-f,l.lanes|=i,i=Hg(l.stateNode,c,i),sy(l,i),!1;case 1:if(s=l.type,g=l.stateNode,(l.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ls===null||!Ls.has(g))))return l.flags|=65536,f&=-f,l.lanes|=f,f=Qw(f),Yw(f,i,l,c),sy(l,f),!1}l=l.return}while(l!==null);return!1}var Ww=Error(r(461)),sn=!1;function pn(i,s,l,c){s.child=i===null?tw(s,null,l,c):Ha(s,i.child,l,c)}function Xw(i,s,l,c,f){l=l.render;var g=s.ref;if("ref"in c){var T={};for(var b in c)b!=="ref"&&(T[b]=c[b])}else T=c;return Xa(s),c=Rg(i,s,l,T,g,f),b=Cg(),i!==null&&!sn?(xg(i,s,f),Ni(i,s,f)):(Ye&&b&&yg(s),s.flags|=1,pn(i,s,c,f),s.child)}function Jw(i,s,l,c,f){if(i===null){var g=l.type;return typeof g=="function"&&!fy(g)&&g.defaultProps===void 0&&l.compare===null?(s.tag=15,s.type=g,Zw(i,s,g,c,f)):(i=If(l.type,null,c,s,s.mode,f),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,!Zg(i,f)){var T=g.memoizedProps;if(l=l.compare,l=l!==null?l:hc,l(T,c)&&i.ref===s.ref)return Ni(i,s,f)}return s.flags|=1,i=Vs(g,c),i.ref=s.ref,i.return=s,s.child=i}function Zw(i,s,l,c,f){if(i!==null){var g=i.memoizedProps;if(hc(g,c)&&i.ref===s.ref)if(sn=!1,s.pendingProps=c=g,Zg(i,f))(i.flags&131072)!==0&&(sn=!0);else return s.lanes=i.lanes,Ni(i,s,f)}return $g(i,s,l,c,f)}function e0(i,s,l){var c=s.pendingProps,f=c.children,g=(s.stateNode._pendingVisibility&2)!==0,T=i!==null?i.memoizedState:null;if(Ac(i,s),c.mode==="hidden"||g){if((s.flags&128)!==0){if(c=T!==null?T.baseLanes|l:l,i!==null){for(f=s.child=i.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;s.childLanes=g&~c}else s.childLanes=0,s.child=null;return t0(i,s,c,l)}if((l&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},i!==null&&uf(s,T!==null?T.cachePool:null),T!==null?nw(s,T):Tg(),rw(s);else return s.lanes=s.childLanes=536870912,t0(i,s,T!==null?T.baseLanes|l:l,l)}else T!==null?(uf(s,T.cachePool),nw(s,T),As(),s.memoizedState=null):(i!==null&&uf(s,null),Tg(),As());return pn(i,s,f,l),s.child}function t0(i,s,l,c){var f=Ag();return f=f===null?null:{parent:Wt._currentValue,pool:f},s.memoizedState={baseLanes:l,cachePool:f},i!==null&&uf(s,null),Tg(),rw(s),i!==null&&Sc(i,s,c,!0),null}function Ac(i,s){var l=s.ref;if(l===null)i!==null&&i.ref!==null&&(s.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(i===null||i.ref!==l)&&(s.flags|=2097664)}}function $g(i,s,l,c,f){return Xa(s),l=Rg(i,s,l,c,void 0,f),c=Cg(),i!==null&&!sn?(xg(i,s,f),Ni(i,s,f)):(Ye&&c&&yg(s),s.flags|=1,pn(i,s,l,f),s.child)}function n0(i,s,l,c,f,g){return Xa(s),s.updateQueue=null,l=lw(s,c,l,f),ow(i),c=Cg(),i!==null&&!sn?(xg(i,s,g),Ni(i,s,g)):(Ye&&c&&yg(s),s.flags|=1,pn(i,s,l,g),s.child)}function r0(i,s,l,c,f){if(Xa(s),s.stateNode===null){var g=ll,T=l.contextType;typeof T=="object"&&T!==null&&(g=Tn(T)),g=new l(c,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=qg,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=c,g.state=s.memoizedState,g.refs={},ry(s),T=l.contextType,g.context=typeof T=="object"&&T!==null?Tn(T):ll,g.state=s.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(jg(s,l,T,c),g.state=s.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&qg.enqueueReplaceState(g,g.state,null),xc(s,c,g,f),Cc(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(i===null){g=s.stateNode;var b=s.memoizedProps,C=Ya(l,b);g.props=C;var M=g.context,Z=l.contextType;T=ll,typeof Z=="object"&&Z!==null&&(T=Tn(Z));var ne=l.getDerivedStateFromProps;Z=typeof ne=="function"||typeof g.getSnapshotBeforeUpdate=="function",b=s.pendingProps!==b,Z||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b||M!==T)&&qw(s,g,c,T),xs=!1;var G=s.memoizedState;g.state=G,xc(s,c,g,f),Cc(),M=s.memoizedState,b||G!==M||xs?(typeof ne=="function"&&(jg(s,l,ne,c),M=s.memoizedState),(C=xs||jw(s,l,C,c,G,M,T))?(Z||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=M),g.props=c,g.state=M,g.context=T,c=C):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{g=s.stateNode,iy(i,s),T=s.memoizedProps,Z=Ya(l,T),g.props=Z,ne=s.pendingProps,G=g.context,M=l.contextType,C=ll,typeof M=="object"&&M!==null&&(C=Tn(M)),b=l.getDerivedStateFromProps,(M=typeof b=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==ne||G!==C)&&qw(s,g,c,C),xs=!1,G=s.memoizedState,g.state=G,xc(s,c,g,f),Cc();var J=s.memoizedState;T!==ne||G!==J||xs||i!==null&&i.dependencies!==null&&Ef(i.dependencies)?(typeof b=="function"&&(jg(s,l,b,c),J=s.memoizedState),(Z=xs||jw(s,l,Z,c,G,J,C)||i!==null&&i.dependencies!==null&&Ef(i.dependencies))?(M||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,J,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,J,C)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=J),g.props=c,g.state=J,g.context=C,c=Z):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),c=!1)}return g=c,Ac(i,s),c=(s.flags&128)!==0,g||c?(g=s.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,i!==null&&c?(s.child=Ha(s,i.child,null,f),s.child=Ha(s,null,l,f)):pn(i,s,l,f),s.memoizedState=g.state,i=s.child):i=Ni(i,s,f),i}function i0(i,s,l,c){return pc(),s.flags|=256,pn(i,s,l,c),s.child}var Gg={dehydrated:null,treeContext:null,retryLane:0};function Kg(i){return{baseLanes:i,cachePool:aw()}}function Qg(i,s,l){return i=i!==null?i.childLanes&~l:0,s&&(i|=_r),i}function s0(i,s,l){var c=s.pendingProps,f=!1,g=(s.flags&128)!==0,T;if((T=g)||(T=i!==null&&i.memoizedState===null?!1:(Yt.current&2)!==0),T&&(f=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,i===null){if(Ye){if(f?Is(s):As(),Ye){var b=fn,C;if(C=b){e:{for(C=b,b=Gr;C.nodeType!==8;){if(!b){b=null;break e}if(C=xr(C.nextSibling),C===null){b=null;break e}}b=C}b!==null?(s.memoizedState={dehydrated:b,treeContext:Fa!==null?{id:Ci,overflow:xi}:null,retryLane:536870912},C=yr(18,null,null,0),C.stateNode=b,C.return=s,s.child=C,Dn=s,fn=null,C=!0):C=!1}C||qa(s)}if(b=s.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?s.lanes=16:s.lanes=536870912,null;Di(s)}return b=c.children,c=c.fallback,f?(As(),f=s.mode,b=Wg({mode:"hidden",children:b},f),c=Za(c,f,l,null),b.return=s,c.return=s,b.sibling=c,s.child=b,f=s.child,f.memoizedState=Kg(l),f.childLanes=Qg(i,T,l),s.memoizedState=Gg,c):(Is(s),Yg(s,b))}if(C=i.memoizedState,C!==null&&(b=C.dehydrated,b!==null)){if(g)s.flags&256?(Is(s),s.flags&=-257,s=Xg(i,s,l)):s.memoizedState!==null?(As(),s.child=i.child,s.flags|=128,s=null):(As(),f=c.fallback,b=s.mode,c=Wg({mode:"visible",children:c.children},b),f=Za(f,b,l,null),f.flags|=2,c.return=s,f.return=s,c.sibling=f,s.child=c,Ha(s,i.child,null,l),c=s.child,c.memoizedState=Kg(l),c.childLanes=Qg(i,T,l),s.memoizedState=Gg,s=f);else if(Is(s),b.data==="$!"){if(T=b.nextSibling&&b.nextSibling.dataset,T)var M=T.dgst;T=M,c=Error(r(419)),c.stack="",c.digest=T,mc({value:c,source:null,stack:null}),s=Xg(i,s,l)}else if(sn||Sc(i,s,l,!1),T=(l&i.childLanes)!==0,sn||T){if(T=at,T!==null){if(c=l&-l,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(T.suspendedLanes|l))!==0?0:c,c!==0&&c!==C.retryLane)throw C.retryLane=c,bs(i,c),Pn(T,i,c),Ww}b.data==="$?"||Ay(),s=Xg(i,s,l)}else b.data==="$?"?(s.flags|=128,s.child=i.child,s=KD.bind(null,i),b._reactRetry=s,s=null):(i=C.treeContext,fn=xr(b.nextSibling),Dn=s,Ye=!0,Rr=null,Gr=!1,i!==null&&(dr[fr++]=Ci,dr[fr++]=xi,dr[fr++]=Fa,Ci=i.id,xi=i.overflow,Fa=s),s=Yg(s,c.children),s.flags|=4096);return s}return f?(As(),f=c.fallback,b=s.mode,C=i.child,M=C.sibling,c=Vs(C,{mode:"hidden",children:c.children}),c.subtreeFlags=C.subtreeFlags&31457280,M!==null?f=Vs(M,f):(f=Za(f,b,l,null),f.flags|=2),f.return=s,c.return=s,c.sibling=f,s.child=c,c=f,f=s.child,b=i.child.memoizedState,b===null?b=Kg(l):(C=b.cachePool,C!==null?(M=Wt._currentValue,C=C.parent!==M?{parent:M,pool:M}:C):C=aw(),b={baseLanes:b.baseLanes|l,cachePool:C}),f.memoizedState=b,f.childLanes=Qg(i,T,l),s.memoizedState=Gg,c):(Is(s),l=i.child,i=l.sibling,l=Vs(l,{mode:"visible",children:c.children}),l.return=s,l.sibling=null,i!==null&&(T=s.deletions,T===null?(s.deletions=[i],s.flags|=16):T.push(i)),s.child=l,s.memoizedState=null,l)}function Yg(i,s){return s=Wg({mode:"visible",children:s},i.mode),s.return=i,i.child=s}function Wg(i,s){return P0(i,s,0,null)}function Xg(i,s,l){return Ha(s,i.child,null,l),i=Yg(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function a0(i,s,l){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),ty(i.return,s,l)}function Jg(i,s,l,c,f){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=f)}function o0(i,s,l){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(pn(i,s,c.children,l),c=Yt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&a0(i,l,s);else if(i.tag===19)a0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(Ke(Yt,c),f){case"forwards":for(l=s.child,f=null;l!==null;)i=l.alternate,i!==null&&lf(i)===null&&(f=l),l=l.sibling;l=f,l===null?(f=s.child,s.child=null):(f=l.sibling,l.sibling=null),Jg(s,!1,f,l,g);break;case"backwards":for(l=null,f=s.child,s.child=null;f!==null;){if(i=f.alternate,i!==null&&lf(i)===null){s.child=f;break}i=f.sibling,f.sibling=l,l=f,f=i}Jg(s,!0,l,null,g);break;case"together":Jg(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ni(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Ms|=s.lanes,(l&s.childLanes)===0)if(i!==null){if(Sc(i,s,l,!1),(l&s.childLanes)===0)return null}else return null;if(i!==null&&s.child!==i.child)throw Error(r(153));if(s.child!==null){for(i=s.child,l=Vs(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Vs(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function Zg(i,s){return(i.lanes&s)!==0?!0:(i=i.dependencies,!!(i!==null&&Ef(i)))}function OD(i,s,l){switch(s.tag){case 3:os(s,s.stateNode.containerInfo),Cs(s,Wt,i.memoizedState.cache),pc();break;case 27:case 5:Hu(s);break;case 4:os(s,s.stateNode.containerInfo);break;case 10:Cs(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Is(s),s.flags|=128,null):(l&s.child.childLanes)!==0?s0(i,s,l):(Is(s),i=Ni(i,s,l),i!==null?i.sibling:null);Is(s);break;case 19:var f=(i.flags&128)!==0;if(c=(l&s.childLanes)!==0,c||(Sc(i,s,l,!1),c=(l&s.childLanes)!==0),f){if(c)return o0(i,s,l);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ke(Yt,Yt.current),c)break;return null;case 22:case 23:return s.lanes=0,e0(i,s,l);case 24:Cs(s,Wt,i.memoizedState.cache)}return Ni(i,s,l)}function l0(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps)sn=!0;else{if(!Zg(i,l)&&(s.flags&128)===0)return sn=!1,OD(i,s,l);sn=(i.flags&131072)!==0}else sn=!1,Ye&&(s.flags&1048576)!==0&&GT(s,nf,s.index);switch(s.lanes=0,s.tag){case 16:e:{i=s.pendingProps;var c=s.elementType,f=c._init;if(c=f(c._payload),s.type=c,typeof c=="function")fy(c)?(i=Ya(c,i),s.tag=1,s=r0(null,s,c,i,l)):(s.tag=0,s=$g(null,s,c,i,l));else{if(c!=null){if(f=c.$$typeof,f===D){s.tag=11,s=Xw(null,s,c,i,l);break e}else if(f===H){s.tag=14,s=Jw(null,s,c,i,l);break e}}throw s=R(c)||c,Error(r(306,s,""))}}return s;case 0:return $g(i,s,s.type,s.pendingProps,l);case 1:return c=s.type,f=Ya(c,s.pendingProps),r0(i,s,c,f,l);case 3:e:{if(os(s,s.stateNode.containerInfo),i===null)throw Error(r(387));var g=s.pendingProps;f=s.memoizedState,c=f.element,iy(i,s),xc(s,g,null,l);var T=s.memoizedState;if(g=T.cache,Cs(s,Wt,g),g!==f.cache&&ny(s,[Wt],l,!0),Cc(),g=T.element,f.isDehydrated)if(f={element:g,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=f,s.memoizedState=f,s.flags&256){s=i0(i,s,g,l);break e}else if(g!==c){c=hr(Error(r(424)),s),mc(c),s=i0(i,s,g,l);break e}else for(fn=xr(s.stateNode.containerInfo.firstChild),Dn=s,Ye=!0,Rr=null,Gr=!0,l=tw(s,null,g,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(pc(),g===c){s=Ni(i,s,l);break e}pn(i,s,g,l)}s=s.child}return s;case 26:return Ac(i,s),i===null?(l=hb(s.type,null,s.pendingProps,null))?s.memoizedState=l:Ye||(l=s.type,i=s.pendingProps,c=Mf(rr.current).createElement(l),c[tn]=s,c[Gt]=i,mn(c,l,i),yt(c),s.stateNode=c):s.memoizedState=hb(s.type,i.memoizedProps,s.pendingProps,i.memoizedState),null;case 27:return Hu(s),i===null&&Ye&&(c=s.stateNode=lb(s.type,s.pendingProps,rr.current),Dn=s,Gr=!0,fn=xr(c.firstChild)),c=s.pendingProps.children,i!==null||Ye?pn(i,s,c,l):s.child=Ha(s,null,c,l),Ac(i,s),s.child;case 5:return i===null&&Ye&&((f=c=fn)&&(c=uP(c,s.type,s.pendingProps,Gr),c!==null?(s.stateNode=c,Dn=s,fn=xr(c.firstChild),Gr=!1,f=!0):f=!1),f||qa(s)),Hu(s),f=s.type,g=s.pendingProps,T=i!==null?i.memoizedProps:null,c=g.children,zy(f,g)?c=null:T!==null&&zy(f,T)&&(s.flags|=32),s.memoizedState!==null&&(f=Rg(i,s,SD,null,null,l),Hc._currentValue=f),Ac(i,s),pn(i,s,c,l),s.child;case 6:return i===null&&Ye&&((i=l=fn)&&(l=cP(l,s.pendingProps,Gr),l!==null?(s.stateNode=l,Dn=s,fn=null,i=!0):i=!1),i||qa(s)),null;case 13:return s0(i,s,l);case 4:return os(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=Ha(s,null,c,l):pn(i,s,c,l),s.child;case 11:return Xw(i,s,s.type,s.pendingProps,l);case 7:return pn(i,s,s.pendingProps,l),s.child;case 8:return pn(i,s,s.pendingProps.children,l),s.child;case 12:return pn(i,s,s.pendingProps.children,l),s.child;case 10:return c=s.pendingProps,Cs(s,s.type,c.value),pn(i,s,c.children,l),s.child;case 9:return f=s.type._context,c=s.pendingProps.children,Xa(s),f=Tn(f),c=c(f),s.flags|=1,pn(i,s,c,l),s.child;case 14:return Jw(i,s,s.type,s.pendingProps,l);case 15:return Zw(i,s,s.type,s.pendingProps,l);case 19:return o0(i,s,l);case 22:return e0(i,s,l);case 24:return Xa(s),c=Tn(Wt),i===null?(f=Ag(),f===null&&(f=at,g=bg(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=l),f=g),s.memoizedState={parent:c,cache:f},ry(s),Cs(s,Wt,f)):((i.lanes&l)!==0&&(iy(i,s),xc(s,null,null,l),Cc()),f=i.memoizedState,g=s.memoizedState,f.parent!==c?(f={parent:c,cache:c},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Cs(s,Wt,c)):(c=g.cache,Cs(s,Wt,c),c!==f.cache&&ny(s,[Wt],l,!0))),pn(i,s,s.pendingProps.children,l),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}var ey=Me(null),Wa=null,Oi=null;function Cs(i,s,l){Ke(ey,s._currentValue),s._currentValue=l}function ki(i){i._currentValue=ey.current,Je(ey)}function ty(i,s,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===l)break;i=i.return}}function ny(i,s,l,c){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var g=f.dependencies;if(g!==null){var T=f.child;g=g.firstContext;e:for(;g!==null;){var b=g;g=f;for(var C=0;C<s.length;C++)if(b.context===s[C]){g.lanes|=l,b=g.alternate,b!==null&&(b.lanes|=l),ty(g.return,l,i),c||(T=null);break e}g=b.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(r(341));T.lanes|=l,g=T.alternate,g!==null&&(g.lanes|=l),ty(T,l,i),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===i){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function Sc(i,s,l,c){i=null;for(var f=s,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var b=f.type;Kn(f.pendingProps.value,T.value)||(i!==null?i.push(b):i=[b])}}else if(f===as.current){if(T=f.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(Hc):i=[Hc])}f=f.return}i!==null&&ny(s,i,l,c),s.flags|=262144}function Ef(i){for(i=i.firstContext;i!==null;){if(!Kn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Xa(i){Wa=i,Oi=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Tn(i){return u0(Wa,i)}function Tf(i,s){return Wa===null&&Xa(i),u0(i,s)}function u0(i,s){var l=s._currentValue;if(s={context:s,memoizedValue:l,next:null},Oi===null){if(i===null)throw Error(r(308));Oi=s,i.dependencies={lanes:0,firstContext:s},i.flags|=524288}else Oi=Oi.next=s;return l}var xs=!1;function ry(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function iy(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Ds(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Ps(i,s,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(vt&2)!==0){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,s=ef(i),HT(i,null,l),s}return Zd(i,c,s,l),ef(i)}function Rc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194176)!==0)){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,fs(i,l)}}function sy(i,s){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var f=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var T={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};g===null?f=g=T:g=g.next=T,l=l.next}while(l!==null);g===null?f=g=s:g=g.next=s}else f=g=s;l={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}var ay=!1;function Cc(){if(ay){var i=pl;if(i!==null)throw i}}function xc(i,s,l,c){ay=!1;var f=i.updateQueue;xs=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var C=b,M=C.next;C.next=null,T===null?g=M:T.next=M,T=C;var Z=i.alternate;Z!==null&&(Z=Z.updateQueue,b=Z.lastBaseUpdate,b!==T&&(b===null?Z.firstBaseUpdate=M:b.next=M,Z.lastBaseUpdate=C))}if(g!==null){var ne=f.baseState;T=0,Z=M=C=null,b=g;do{var G=b.lane&-536870913,J=G!==b.lane;if(J?($e&G)===G:(c&G)===G){G!==0&&G===fl&&(ay=!0),Z!==null&&(Z=Z.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Ee=i,De=b;G=s;var Ct=l;switch(De.tag){case 1:if(Ee=De.payload,typeof Ee=="function"){ne=Ee.call(Ct,ne,G);break e}ne=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=De.payload,G=typeof Ee=="function"?Ee.call(Ct,ne,G):Ee,G==null)break e;ne=P({},ne,G);break e;case 2:xs=!0}}G=b.callback,G!==null&&(i.flags|=64,J&&(i.flags|=8192),J=f.callbacks,J===null?f.callbacks=[G]:J.push(G))}else J={lane:G,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Z===null?(M=Z=J,C=ne):Z=Z.next=J,T|=G;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;J=b,b=J.next,J.next=null,f.lastBaseUpdate=J,f.shared.pending=null}}while(!0);Z===null&&(C=ne),f.baseState=C,f.firstBaseUpdate=M,f.lastBaseUpdate=Z,g===null&&(f.shared.lanes=0),Ms|=T,i.lanes=T,i.memoizedState=ne}}function c0(i,s){if(typeof i!="function")throw Error(r(191,i));i.call(s)}function h0(i,s){var l=i.callbacks;if(l!==null)for(i.callbacks=null,i=0;i<l.length;i++)c0(l[i],s)}function Dc(i,s){try{var l=s.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&i)===i){c=void 0;var g=l.create,T=l.inst;c=g(),T.destroy=c}l=l.next}while(l!==f)}}catch(b){st(s,s.return,b)}}function Ns(i,s,l){try{var c=s.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var g=f.next;c=g;do{if((c.tag&i)===i){var T=c.inst,b=T.destroy;if(b!==void 0){T.destroy=void 0,f=s;var C=l;try{b()}catch(M){st(f,C,M)}}}c=c.next}while(c!==g)}}catch(M){st(s,s.return,M)}}function d0(i){var s=i.updateQueue;if(s!==null){var l=i.stateNode;try{h0(s,l)}catch(c){st(i,i.return,c)}}}function f0(i,s,l){l.props=Ya(i.type,i.memoizedProps),l.state=i.memoizedState;try{l.componentWillUnmount()}catch(c){st(i,s,c)}}function Ja(i,s){try{var l=i.ref;if(l!==null){var c=i.stateNode;switch(i.tag){case 26:case 27:case 5:var f=c;break;default:f=c}typeof l=="function"?i.refCleanup=l(f):l.current=f}}catch(g){st(i,s,g)}}function Qn(i,s){var l=i.ref,c=i.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(f){st(i,s,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(f){st(i,s,f)}else l.current=null}function p0(i){var s=i.type,l=i.memoizedProps,c=i.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(f){st(i,i.return,f)}}function m0(i,s,l){try{var c=i.stateNode;iP(c,i.type,l,s),c[Gt]=s}catch(f){st(i,i.return,f)}}function g0(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27||i.tag===4}function oy(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||g0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==27&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function ly(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Vf));else if(c!==4&&c!==27&&(i=i.child,i!==null))for(ly(i,s,l),i=i.sibling;i!==null;)ly(i,s,l),i=i.sibling}function wf(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(c!==4&&c!==27&&(i=i.child,i!==null))for(wf(i,s,l),i=i.sibling;i!==null;)wf(i,s,l),i=i.sibling}var Vi=!1,St=!1,uy=!1,y0=typeof WeakSet=="function"?WeakSet:Set,an=null,_0=!1;function kD(i,s){if(i=i.containerInfo,Ly=jf,i=VT(i),hg(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var T=0,b=-1,C=-1,M=0,Z=0,ne=i,G=null;t:for(;;){for(var J;ne!==l||f!==0&&ne.nodeType!==3||(b=T+f),ne!==g||c!==0&&ne.nodeType!==3||(C=T+c),ne.nodeType===3&&(T+=ne.nodeValue.length),(J=ne.firstChild)!==null;)G=ne,ne=J;for(;;){if(ne===i)break t;if(G===l&&++M===f&&(b=T),G===g&&++Z===c&&(C=T),(J=ne.nextSibling)!==null)break;ne=G,G=ne.parentNode}ne=J}l=b===-1||C===-1?null:{start:b,end:C}}else l=null}l=l||{start:0,end:0}}else l=null;for(Uy={focusedElem:i,selectionRange:l},jf=!1,an=s;an!==null;)if(s=an,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,an=i;else for(;an!==null;){switch(s=an,g=s.alternate,i=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&g!==null){i=void 0,l=s,f=g.memoizedProps,g=g.memoizedState,c=l.stateNode;try{var Ee=Ya(l.type,f,l.elementType===l.type);i=c.getSnapshotBeforeUpdate(Ee,g),c.__reactInternalSnapshotBeforeUpdate=i}catch(De){st(l,l.return,De)}}break;case 3:if((i&1024)!==0){if(i=s.stateNode.containerInfo,l=i.nodeType,l===9)jy(i);else if(l===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":jy(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(r(163))}if(i=s.sibling,i!==null){i.return=s.return,an=i;break}an=s.return}return Ee=_0,_0=!1,Ee}function v0(i,s,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:Li(i,l),c&4&&Dc(5,l);break;case 1:if(Li(i,l),c&4)if(i=l.stateNode,s===null)try{i.componentDidMount()}catch(b){st(l,l.return,b)}else{var f=Ya(l.type,s.memoizedProps);s=s.memoizedState;try{i.componentDidUpdate(f,s,i.__reactInternalSnapshotBeforeUpdate)}catch(b){st(l,l.return,b)}}c&64&&d0(l),c&512&&Ja(l,l.return);break;case 3:if(Li(i,l),c&64&&(c=l.updateQueue,c!==null)){if(i=null,l.child!==null)switch(l.child.tag){case 27:case 5:i=l.child.stateNode;break;case 1:i=l.child.stateNode}try{h0(c,i)}catch(b){st(l,l.return,b)}}break;case 26:Li(i,l),c&512&&Ja(l,l.return);break;case 27:case 5:Li(i,l),s===null&&c&4&&p0(l),c&512&&Ja(l,l.return);break;case 12:Li(i,l);break;case 13:Li(i,l),c&4&&w0(i,l);break;case 22:if(f=l.memoizedState!==null||Vi,!f){s=s!==null&&s.memoizedState!==null||St;var g=Vi,T=St;Vi=f,(St=s)&&!T?Os(i,l,(l.subtreeFlags&8772)!==0):Li(i,l),Vi=g,St=T}c&512&&(l.memoizedProps.mode==="manual"?Ja(l,l.return):Qn(l,l.return));break;default:Li(i,l)}}function E0(i){var s=i.alternate;s!==null&&(i.alternate=null,E0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&Ca(s)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Ft=null,Yn=!1;function Mi(i,s,l){for(l=l.child;l!==null;)T0(i,s,l),l=l.sibling}function T0(i,s,l){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(ls,l)}catch{}switch(l.tag){case 26:St||Qn(l,s),Mi(i,s,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:St||Qn(l,s);var c=Ft,f=Yn;for(Ft=l.stateNode,Mi(i,s,l),l=l.stateNode,s=l.attributes;s.length;)l.removeAttributeNode(s[0]);Ca(l),Ft=c,Yn=f;break;case 5:St||Qn(l,s);case 6:f=Ft;var g=Yn;if(Ft=null,Mi(i,s,l),Ft=f,Yn=g,Ft!==null)if(Yn)try{i=Ft,c=l.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)}catch(T){st(l,s,T)}else try{Ft.removeChild(l.stateNode)}catch(T){st(l,s,T)}break;case 18:Ft!==null&&(Yn?(s=Ft,l=l.stateNode,s.nodeType===8?Fy(s.parentNode,l):s.nodeType===1&&Fy(s,l),Qc(s)):Fy(Ft,l.stateNode));break;case 4:c=Ft,f=Yn,Ft=l.stateNode.containerInfo,Yn=!0,Mi(i,s,l),Ft=c,Yn=f;break;case 0:case 11:case 14:case 15:St||Ns(2,l,s),St||Ns(4,l,s),Mi(i,s,l);break;case 1:St||(Qn(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"&&f0(l,s,c)),Mi(i,s,l);break;case 21:Mi(i,s,l);break;case 22:St||Qn(l,s),St=(c=St)||l.memoizedState!==null,Mi(i,s,l),St=c;break;default:Mi(i,s,l)}}function w0(i,s){if(s.memoizedState===null&&(i=s.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Qc(i)}catch(l){st(s,s.return,l)}}function VD(i){switch(i.tag){case 13:case 19:var s=i.stateNode;return s===null&&(s=i.stateNode=new y0),s;case 22:return i=i.stateNode,s=i._retryCache,s===null&&(s=i._retryCache=new y0),s;default:throw Error(r(435,i.tag))}}function cy(i,s){var l=VD(i);s.forEach(function(c){var f=QD.bind(null,i,c);l.has(c)||(l.add(c),c.then(f,f))})}function mr(i,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var f=l[c],g=i,T=s,b=T;e:for(;b!==null;){switch(b.tag){case 27:case 5:Ft=b.stateNode,Yn=!1;break e;case 3:Ft=b.stateNode.containerInfo,Yn=!0;break e;case 4:Ft=b.stateNode.containerInfo,Yn=!0;break e}b=b.return}if(Ft===null)throw Error(r(160));T0(g,T,f),Ft=null,Yn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)b0(s,i),s=s.sibling}var Cr=null;function b0(i,s){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:mr(s,i),gr(i),c&4&&(Ns(3,i,i.return),Dc(3,i),Ns(5,i,i.return));break;case 1:mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&64&&Vi&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(l=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var f=Cr;if(mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&4){var g=l!==null?l.memoizedState:null;if(c=i.memoizedState,l===null)if(c===null)if(i.stateNode===null){e:{c=i.type,l=i.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":g=f.getElementsByTagName("title")[0],(!g||g[ms]||g[tn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(c),f.head.insertBefore(g,f.querySelector("head > title"))),mn(g,c,l),g[tn]=i,yt(g),c=g;break e;case"link":var T=pb("link","href",f).get(c+(l.href||""));if(T){for(var b=0;b<T.length;b++)if(g=T[b],g.getAttribute("href")===(l.href==null?null:l.href)&&g.getAttribute("rel")===(l.rel==null?null:l.rel)&&g.getAttribute("title")===(l.title==null?null:l.title)&&g.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){T.splice(b,1);break t}}g=f.createElement(c),mn(g,c,l),f.head.appendChild(g);break;case"meta":if(T=pb("meta","content",f).get(c+(l.content||""))){for(b=0;b<T.length;b++)if(g=T[b],g.getAttribute("content")===(l.content==null?null:""+l.content)&&g.getAttribute("name")===(l.name==null?null:l.name)&&g.getAttribute("property")===(l.property==null?null:l.property)&&g.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&g.getAttribute("charset")===(l.charSet==null?null:l.charSet)){T.splice(b,1);break t}}g=f.createElement(c),mn(g,c,l),f.head.appendChild(g);break;default:throw Error(r(468,c))}g[tn]=i,yt(g),c=g}i.stateNode=c}else mb(f,i.type,i.stateNode);else i.stateNode=fb(f,c,i.memoizedProps);else g!==c?(g===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):g.count--,c===null?mb(f,i.type,i.stateNode):fb(f,c,i.memoizedProps)):c===null&&i.stateNode!==null&&m0(i,i.memoizedProps,l.memoizedProps)}break;case 27:if(c&4&&i.alternate===null){f=i.stateNode,g=i.memoizedProps;try{for(var C=f.firstChild;C;){var M=C.nextSibling,Z=C.nodeName;C[ms]||Z==="HEAD"||Z==="BODY"||Z==="SCRIPT"||Z==="STYLE"||Z==="LINK"&&C.rel.toLowerCase()==="stylesheet"||f.removeChild(C),C=M}for(var ne=i.type,G=f.attributes;G.length;)f.removeAttributeNode(G[0]);mn(f,ne,g),f[tn]=i,f[Gt]=g}catch(Ee){st(i,i.return,Ee)}}case 5:if(mr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),i.flags&32){f=i.stateNode;try{ar(f,"")}catch(Ee){st(i,i.return,Ee)}}c&4&&i.stateNode!=null&&(f=i.memoizedProps,m0(i,f,l!==null?l.memoizedProps:f)),c&1024&&(uy=!0);break;case 6:if(mr(s,i),gr(i),c&4){if(i.stateNode===null)throw Error(r(162));c=i.memoizedProps,l=i.stateNode;try{l.nodeValue=c}catch(Ee){st(i,i.return,Ee)}}break;case 3:if(zf=null,f=Cr,Cr=Lf(s.containerInfo),mr(s,i),Cr=f,gr(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Qc(s.containerInfo)}catch(Ee){st(i,i.return,Ee)}uy&&(uy=!1,I0(i));break;case 4:c=Cr,Cr=Lf(i.stateNode.containerInfo),mr(s,i),gr(i),Cr=c;break;case 12:mr(s,i),gr(i);break;case 13:mr(s,i),gr(i),i.child.flags&8192&&i.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(vy=Ln()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,cy(i,c)));break;case 22:if(c&512&&(St||l===null||Qn(l,l.return)),C=i.memoizedState!==null,M=l!==null&&l.memoizedState!==null,Z=Vi,ne=St,Vi=Z||C,St=ne||M,mr(s,i),St=ne,Vi=Z,gr(i),s=i.stateNode,s._current=i,s._visibility&=-3,s._visibility|=s._pendingVisibility&2,c&8192&&(s._visibility=C?s._visibility&-2:s._visibility|1,C&&(s=Vi||St,l===null||M||s||_l(i)),i.memoizedProps===null||i.memoizedProps.mode!=="manual"))e:for(l=null,s=i;;){if(s.tag===5||s.tag===26||s.tag===27){if(l===null){M=l=s;try{if(f=M.stateNode,C)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=M.stateNode,b=M.memoizedProps.style;var J=b!=null&&b.hasOwnProperty("display")?b.display:null;T.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(Ee){st(M,M.return,Ee)}}}else if(s.tag===6){if(l===null){M=s;try{M.stateNode.nodeValue=C?"":M.memoizedProps}catch(Ee){st(M,M.return,Ee)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===i)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;l===s&&(l=null),s=s.return}l===s&&(l=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=i.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,cy(i,l))));break;case 19:mr(s,i),gr(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,cy(i,c)));break;case 21:break;default:mr(s,i),gr(i)}}function gr(i){var s=i.flags;if(s&2){try{if(i.tag!==27){e:{for(var l=i.return;l!==null;){if(g0(l)){var c=l;break e}l=l.return}throw Error(r(160))}switch(c.tag){case 27:var f=c.stateNode,g=oy(i);wf(i,g,f);break;case 5:var T=c.stateNode;c.flags&32&&(ar(T,""),c.flags&=-33);var b=oy(i);wf(i,b,T);break;case 3:case 4:var C=c.stateNode.containerInfo,M=oy(i);ly(i,M,C);break;default:throw Error(r(161))}}}catch(Z){st(i,i.return,Z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function I0(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var s=i;I0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),i=i.sibling}}function Li(i,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)v0(i,s.alternate,s),s=s.sibling}function _l(i){for(i=i.child;i!==null;){var s=i;switch(s.tag){case 0:case 11:case 14:case 15:Ns(4,s,s.return),_l(s);break;case 1:Qn(s,s.return);var l=s.stateNode;typeof l.componentWillUnmount=="function"&&f0(s,s.return,l),_l(s);break;case 26:case 27:case 5:Qn(s,s.return),_l(s);break;case 22:Qn(s,s.return),s.memoizedState===null&&_l(s);break;default:_l(s)}i=i.sibling}}function Os(i,s,l){for(l=l&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,f=i,g=s,T=g.flags;switch(g.tag){case 0:case 11:case 15:Os(f,g,l),Dc(4,g);break;case 1:if(Os(f,g,l),c=g,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(M){st(c,c.return,M)}if(c=g,f=c.updateQueue,f!==null){var b=c.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)c0(C[f],b)}catch(M){st(c,c.return,M)}}l&&T&64&&d0(g),Ja(g,g.return);break;case 26:case 27:case 5:Os(f,g,l),l&&c===null&&T&4&&p0(g),Ja(g,g.return);break;case 12:Os(f,g,l);break;case 13:Os(f,g,l),l&&T&4&&w0(f,g);break;case 22:g.memoizedState===null&&Os(f,g,l),Ja(g,g.return);break;default:Os(f,g,l)}s=s.sibling}}function hy(i,s){var l=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==l&&(i!=null&&i.refCount++,l!=null&&Ec(l))}function dy(i,s){i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&Ec(i))}function ks(i,s,l,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)A0(i,s,l,c),s=s.sibling}function A0(i,s,l,c){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ks(i,s,l,c),f&2048&&Dc(9,s);break;case 3:ks(i,s,l,c),f&2048&&(i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&Ec(i)));break;case 12:if(f&2048){ks(i,s,l,c),i=s.stateNode;try{var g=s.memoizedProps,T=g.id,b=g.onPostCommit;typeof b=="function"&&b(T,s.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){st(s,s.return,C)}}else ks(i,s,l,c);break;case 23:break;case 22:g=s.stateNode,s.memoizedState!==null?g._visibility&4?ks(i,s,l,c):Pc(i,s):g._visibility&4?ks(i,s,l,c):(g._visibility|=4,vl(i,s,l,c,(s.subtreeFlags&10256)!==0)),f&2048&&hy(s.alternate,s);break;case 24:ks(i,s,l,c),f&2048&&dy(s.alternate,s);break;default:ks(i,s,l,c)}}function vl(i,s,l,c,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=i,T=s,b=l,C=c,M=T.flags;switch(T.tag){case 0:case 11:case 15:vl(g,T,b,C,f),Dc(8,T);break;case 23:break;case 22:var Z=T.stateNode;T.memoizedState!==null?Z._visibility&4?vl(g,T,b,C,f):Pc(g,T):(Z._visibility|=4,vl(g,T,b,C,f)),f&&M&2048&&hy(T.alternate,T);break;case 24:vl(g,T,b,C,f),f&&M&2048&&dy(T.alternate,T);break;default:vl(g,T,b,C,f)}s=s.sibling}}function Pc(i,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var l=i,c=s,f=c.flags;switch(c.tag){case 22:Pc(l,c),f&2048&&hy(c.alternate,c);break;case 24:Pc(l,c),f&2048&&dy(c.alternate,c);break;default:Pc(l,c)}s=s.sibling}}var Nc=8192;function El(i){if(i.subtreeFlags&Nc)for(i=i.child;i!==null;)S0(i),i=i.sibling}function S0(i){switch(i.tag){case 26:El(i),i.flags&Nc&&i.memoizedState!==null&&bP(Cr,i.memoizedState,i.memoizedProps);break;case 5:El(i);break;case 3:case 4:var s=Cr;Cr=Lf(i.stateNode.containerInfo),El(i),Cr=s;break;case 22:i.memoizedState===null&&(s=i.alternate,s!==null&&s.memoizedState!==null?(s=Nc,Nc=16777216,El(i),Nc=s):El(i));break;default:El(i)}}function R0(i){var s=i.alternate;if(s!==null&&(i=s.child,i!==null)){s.child=null;do s=i.sibling,i.sibling=null,i=s;while(i!==null)}}function Oc(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,x0(c,i)}R0(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)C0(i),i=i.sibling}function C0(i){switch(i.tag){case 0:case 11:case 15:Oc(i),i.flags&2048&&Ns(9,i,i.return);break;case 3:Oc(i);break;case 12:Oc(i);break;case 22:var s=i.stateNode;i.memoizedState!==null&&s._visibility&4&&(i.return===null||i.return.tag!==13)?(s._visibility&=-5,bf(i)):Oc(i);break;default:Oc(i)}}function bf(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,x0(c,i)}R0(i)}for(i=i.child;i!==null;){switch(s=i,s.tag){case 0:case 11:case 15:Ns(8,s,s.return),bf(s);break;case 22:l=s.stateNode,l._visibility&4&&(l._visibility&=-5,bf(s));break;default:bf(s)}i=i.sibling}}function x0(i,s){for(;an!==null;){var l=an;switch(l.tag){case 0:case 11:case 15:Ns(8,l,s);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Ec(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,an=c;else e:for(l=i;an!==null;){c=an;var f=c.sibling,g=c.return;if(E0(c),c===l){an=null;break e}if(f!==null){f.return=g,an=f;break e}an=g}}}function MD(i,s,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yr(i,s,l,c){return new MD(i,s,l,c)}function fy(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Vs(i,s){var l=i.alternate;return l===null?(l=yr(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&31457280,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l.refCleanup=i.refCleanup,l}function D0(i,s){i.flags&=31457282;var l=i.alternate;return l===null?(i.childLanes=0,i.lanes=s,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,s=l.dependencies,i.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),i}function If(i,s,l,c,f,g){var T=0;if(c=i,typeof i=="function")fy(i)&&(T=1);else if(typeof i=="string")T=TP(i,l,Ut.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case p:return Za(l.children,f,g,s);case m:T=8,f|=24;break;case _:return i=yr(12,l,s,f|2),i.elementType=_,i.lanes=g,i;case U:return i=yr(13,l,s,f),i.elementType=U,i.lanes=g,i;case L:return i=yr(19,l,s,f),i.elementType=L,i.lanes=g,i;case K:return P0(l,f,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case v:case S:T=10;break e;case w:T=9;break e;case D:T=11;break e;case H:T=14;break e;case X:T=16,c=null;break e}T=29,l=Error(r(130,i===null?"null":typeof i,"")),c=null}return s=yr(T,l,s,f),s.elementType=i,s.type=c,s.lanes=g,s}function Za(i,s,l,c){return i=yr(7,i,c,s),i.lanes=l,i}function P0(i,s,l,c){i=yr(22,i,c,s),i.elementType=K,i.lanes=l;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)===0){var T=bs(g,2);T!==null&&(f._pendingVisibility|=2,Pn(T,g,2))}},attach:function(){var g=f._current;if(g===null)throw Error(r(456));if((f._pendingVisibility&2)!==0){var T=bs(g,2);T!==null&&(f._pendingVisibility&=-3,Pn(T,g,2))}}};return i.stateNode=f,i}function py(i,s,l){return i=yr(6,i,null,s),i.lanes=l,i}function my(i,s,l){return s=yr(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function Ui(i){i.flags|=4}function N0(i,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!gb(s)){if(s=pr.current,s!==null&&(($e&4194176)===$e?Kr!==null:($e&62914560)!==$e&&($e&536870912)===0||s!==Kr))throw yc=Eg,YT;i.flags|=8192}}function Af(i,s){s!==null&&(i.flags|=4),i.flags&16384&&(s=i.tag!==22?hs():536870912,i.lanes|=s,wl|=s)}function kc(i,s){if(!Ye)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function _t(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(s)for(var f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags&31457280,c|=f.flags&31457280,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)l|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=c,i.childLanes=l,s}function LD(i,s,l){var c=s.pendingProps;switch(_g(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(s),null;case 1:return _t(s),null;case 3:return l=s.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),ki(Wt),yi(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(i===null||i.child===null)&&(fc(s)?Ui(s):i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Rr!==null&&(by(Rr),Rr=null))),_t(s),null;case 26:return l=s.memoizedState,i===null?(Ui(s),l!==null?(_t(s),N0(s,l)):(_t(s),s.flags&=-16777217)):l?l!==i.memoizedState?(Ui(s),_t(s),N0(s,l)):(_t(s),s.flags&=-16777217):(i.memoizedProps!==c&&Ui(s),_t(s),s.flags&=-16777217),null;case 27:Fo(s),l=rr.current;var f=s.type;if(i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return _t(s),null}i=Ut.current,fc(s)?KT(s):(i=lb(f,c,l),s.stateNode=i,Ui(s))}return _t(s),null;case 5:if(Fo(s),l=s.type,i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return _t(s),null}if(i=Ut.current,fc(s))KT(s);else{switch(f=Mf(rr.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?f.createElement(l,{is:c.is}):f.createElement(l)}}i[tn]=s,i[Gt]=c;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=i;e:switch(mn(i,l,c),l){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ui(s)}}return _t(s),s.flags&=-16777217,null;case 6:if(i&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(r(166));if(i=rr.current,fc(s)){if(i=s.stateNode,l=s.memoizedProps,c=null,f=Dn,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}i[tn]=s,i=!!(i.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||nb(i.nodeValue,l)),i||qa(s)}else i=Mf(i).createTextNode(c),i[tn]=s,s.stateNode=i}return _t(s),null;case 13:if(c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=fc(s),c!==null&&c.dehydrated!==null){if(i===null){if(!f)throw Error(r(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[tn]=s}else pc(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;_t(s),f=!1}else Rr!==null&&(by(Rr),Rr=null),f=!0;if(!f)return s.flags&256?(Di(s),s):(Di(s),null)}if(Di(s),(s.flags&128)!==0)return s.lanes=l,s;if(l=c!==null,i=i!==null&&i.memoizedState!==null,l){c=s.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==f&&(c.flags|=2048)}return l!==i&&l&&(s.child.flags|=8192),Af(s,s.updateQueue),_t(s),null;case 4:return yi(),i===null&&ky(s.stateNode.containerInfo),_t(s),null;case 10:return ki(s.type),_t(s),null;case 19:if(Je(Yt),f=s.memoizedState,f===null)return _t(s),null;if(c=(s.flags&128)!==0,g=f.rendering,g===null)if(c)kc(f,!1);else{if(Rt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(g=lf(i),g!==null){for(s.flags|=128,kc(f,!1),i=g.updateQueue,s.updateQueue=i,Af(s,i),s.subtreeFlags=0,i=l,l=s.child;l!==null;)D0(l,i),l=l.sibling;return Ke(Yt,Yt.current&1|2),s.child}i=i.sibling}f.tail!==null&&Ln()>Sf&&(s.flags|=128,c=!0,kc(f,!1),s.lanes=4194304)}else{if(!c)if(i=lf(g),i!==null){if(s.flags|=128,c=!0,i=i.updateQueue,s.updateQueue=i,Af(s,i),kc(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Ye)return _t(s),null}else 2*Ln()-f.renderingStartTime>Sf&&l!==536870912&&(s.flags|=128,c=!0,kc(f,!1),s.lanes=4194304);f.isBackwards?(g.sibling=s.child,s.child=g):(i=f.last,i!==null?i.sibling=g:s.child=g,f.last=g)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Ln(),s.sibling=null,i=Yt.current,Ke(Yt,c?i&1|2:i&1),s):(_t(s),null);case 22:case 23:return Di(s),wg(),c=s.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(l&536870912)!==0&&(s.flags&128)===0&&(_t(s),s.subtreeFlags&6&&(s.flags|=8192)):_t(s),l=s.updateQueue,l!==null&&Af(s,l.retryQueue),l=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048),i!==null&&Je($a),null;case 24:return l=null,i!==null&&(l=i.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),ki(Wt),_t(s),null;case 25:return null}throw Error(r(156,s.tag))}function UD(i,s){switch(_g(s),s.tag){case 1:return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return ki(Wt),yi(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 26:case 27:case 5:return Fo(s),null;case 13:if(Di(s),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(r(340));pc()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Je(Yt),null;case 4:return yi(),null;case 10:return ki(s.type),null;case 22:case 23:return Di(s),wg(),i!==null&&Je($a),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 24:return ki(Wt),null;case 25:return null;default:return null}}function O0(i,s){switch(_g(s),s.tag){case 3:ki(Wt),yi();break;case 26:case 27:case 5:Fo(s);break;case 4:yi();break;case 13:Di(s);break;case 19:Je(Yt);break;case 10:ki(s.type);break;case 22:case 23:Di(s),wg(),i!==null&&Je($a);break;case 24:ki(Wt)}}var zD={getCacheForType:function(i){var s=Tn(Wt),l=s.data.get(i);return l===void 0&&(l=i(),s.data.set(i,l)),l}},BD=typeof WeakMap=="function"?WeakMap:Map,vt=0,at=null,Ue=null,$e=0,ot=0,Wn=null,zi=!1,Tl=!1,gy=!1,Bi=0,Rt=0,Ms=0,eo=0,yy=0,_r=0,wl=0,Vc=null,Yr=null,_y=!1,vy=0,Sf=1/0,Rf=null,Ls=null,Cf=!1,to=null,Mc=0,Ey=0,Ty=null,Lc=0,wy=null;function Xn(){if((vt&2)!==0&&$e!==0)return $e&-$e;if(A.T!==null){var i=fl;return i!==0?i:Dy()}return Od()}function k0(){_r===0&&(_r=($e&536870912)===0||Ye?Yu():536870912);var i=pr.current;return i!==null&&(i.flags|=32),_r}function Pn(i,s,l){(i===at&&ot===2||i.cancelPendingCommit!==null)&&(bl(i,0),Fi(i,$e,_r,!1)),Ot(i,l),((vt&2)===0||i!==at)&&(i===at&&((vt&2)===0&&(eo|=l),Rt===4&&Fi(i,$e,_r,!1)),Wr(i))}function V0(i,s,l){if((vt&6)!==0)throw Error(r(327));var c=!l&&(s&60)===0&&(s&i.expiredLanes)===0||cs(i,s),f=c?qD(i,s):Sy(i,s,!0),g=c;do{if(f===0){Tl&&!c&&Fi(i,s,0,!1);break}else if(f===6)Fi(i,s,0,!zi);else{if(l=i.current.alternate,g&&!FD(l)){f=Sy(i,s,!1),g=!1;continue}if(f===2){if(g=s,i.errorRecoveryDisabledLanes&g)var T=0;else T=i.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var b=i;f=Vc;var C=b.current.memoizedState.isDehydrated;if(C&&(bl(b,T).flags|=256),T=Sy(b,T,!1),T!==2){if(gy&&!C){b.errorRecoveryDisabledLanes|=g,eo|=g,f=4;break e}g=Yr,Yr=f,g!==null&&by(g)}f=T}if(g=!1,f!==2)continue}}if(f===1){bl(i,0),Fi(i,s,0,!0);break}e:{switch(c=i,f){case 0:case 1:throw Error(r(345));case 4:if((s&4194176)===s){Fi(c,s,_r,!zi);break e}break;case 2:Yr=null;break;case 3:case 5:break;default:throw Error(r(329))}if(c.finishedWork=l,c.finishedLanes=s,(s&62914560)===s&&(g=vy+300-Ln(),10<g)){if(Fi(c,s,_r,!zi),ir(c,0)!==0)break e;c.timeoutHandle=sb(M0.bind(null,c,l,Yr,Rf,_y,s,_r,eo,wl,zi,2,-0,0),g);break e}M0(c,l,Yr,Rf,_y,s,_r,eo,wl,zi,0,-0,0)}}break}while(!0);Wr(i)}function by(i){Yr===null?Yr=i:Yr.push.apply(Yr,i)}function M0(i,s,l,c,f,g,T,b,C,M,Z,ne,G){var J=s.subtreeFlags;if((J&8192||(J&16785408)===16785408)&&(qc={stylesheets:null,count:0,unsuspend:wP},S0(s),s=IP(),s!==null)){i.cancelPendingCommit=s(q0.bind(null,i,l,c,f,T,b,C,1,ne,G)),Fi(i,g,T,!M);return}q0(i,l,c,f,T,b,C,Z,ne,G)}function FD(i){for(var s=i;;){var l=s.tag;if((l===0||l===11||l===15)&&s.flags&16384&&(l=s.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var f=l[c],g=f.getSnapshot;f=f.value;try{if(!Kn(g(),f))return!1}catch{return!1}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fi(i,s,l,c){s&=~yy,s&=~eo,i.suspendedLanes|=s,i.pingedLanes&=~s,c&&(i.warmLanes|=s),c=i.expirationTimes;for(var f=s;0<f;){var g=31-Rn(f),T=1<<g;c[g]=-1,f&=~T}l!==0&&ds(i,l,s)}function xf(){return(vt&6)===0?(Uc(0),!1):!0}function Iy(){if(Ue!==null){if(ot===0)var i=Ue.return;else i=Ue,Oi=Wa=null,Dg(i),hl=null,_c=0,i=Ue;for(;i!==null;)O0(i.alternate,i),i=i.return;Ue=null}}function bl(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;l!==-1&&(i.timeoutHandle=-1,aP(l)),l=i.cancelPendingCommit,l!==null&&(i.cancelPendingCommit=null,l()),Iy(),at=i,Ue=l=Vs(i.current,null),$e=s,ot=0,Wn=null,zi=!1,Tl=cs(i,s),gy=!1,wl=_r=yy=eo=Ms=Rt=0,Yr=Vc=null,_y=!1,(s&8)!==0&&(s|=s&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=s;0<c;){var f=31-Rn(c),g=1<<f;s|=i[f],c&=~g}return Bi=s,Jd(),l}function L0(i,s){Ve=null,A.H=Qr,s===gc?(s=JT(),ot=3):s===YT?(s=JT(),ot=4):ot=s===Ww?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Wn=s,Ue===null&&(Rt=1,vf(i,hr(s,i.current)))}function U0(){var i=A.H;return A.H=Qr,i===null?Qr:i}function z0(){var i=A.A;return A.A=zD,i}function Ay(){Rt=4,zi||($e&4194176)!==$e&&pr.current!==null||(Tl=!0),(Ms&134217727)===0&&(eo&134217727)===0||at===null||Fi(at,$e,_r,!1)}function Sy(i,s,l){var c=vt;vt|=2;var f=U0(),g=z0();(at!==i||$e!==s)&&(Rf=null,bl(i,s)),s=!1;var T=Rt;e:do try{if(ot!==0&&Ue!==null){var b=Ue,C=Wn;switch(ot){case 8:Iy(),T=6;break e;case 3:case 2:case 6:pr.current===null&&(s=!0);var M=ot;if(ot=0,Wn=null,Il(i,b,C,M),l&&Tl){T=0;break e}break;default:M=ot,ot=0,Wn=null,Il(i,b,C,M)}}jD(),T=Rt;break}catch(Z){L0(i,Z)}while(!0);return s&&i.shellSuspendCounter++,Oi=Wa=null,vt=c,A.H=f,A.A=g,Ue===null&&(at=null,$e=0,Jd()),T}function jD(){for(;Ue!==null;)B0(Ue)}function qD(i,s){var l=vt;vt|=2;var c=U0(),f=z0();at!==i||$e!==s?(Rf=null,Sf=Ln()+500,bl(i,s)):Tl=cs(i,s);e:do try{if(ot!==0&&Ue!==null){s=Ue;var g=Wn;t:switch(ot){case 1:ot=0,Wn=null,Il(i,s,g,1);break;case 2:if(WT(g)){ot=0,Wn=null,F0(s);break}s=function(){ot===2&&at===i&&(ot=7),Wr(i)},g.then(s,s);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:WT(g)?(ot=0,Wn=null,F0(s)):(ot=0,Wn=null,Il(i,s,g,7));break;case 5:var T=null;switch(Ue.tag){case 26:T=Ue.memoizedState;case 5:case 27:var b=Ue;if(!T||gb(T)){ot=0,Wn=null;var C=b.sibling;if(C!==null)Ue=C;else{var M=b.return;M!==null?(Ue=M,Df(M)):Ue=null}break t}}ot=0,Wn=null,Il(i,s,g,5);break;case 6:ot=0,Wn=null,Il(i,s,g,6);break;case 8:Iy(),Rt=6;break e;default:throw Error(r(462))}}HD();break}catch(Z){L0(i,Z)}while(!0);return Oi=Wa=null,A.H=c,A.A=f,vt=l,Ue!==null?0:(at=null,$e=0,Jd(),Rt)}function HD(){for(;Ue!==null&&!eg();)B0(Ue)}function B0(i){var s=l0(i.alternate,i,Bi);i.memoizedProps=i.pendingProps,s===null?Df(i):Ue=s}function F0(i){var s=i,l=s.alternate;switch(s.tag){case 15:case 0:s=n0(l,s,s.pendingProps,s.type,void 0,$e);break;case 11:s=n0(l,s,s.pendingProps,s.type.render,s.ref,$e);break;case 5:Dg(s);default:O0(l,s),s=Ue=D0(s,Bi),s=l0(l,s,Bi)}i.memoizedProps=i.pendingProps,s===null?Df(i):Ue=s}function Il(i,s,l,c){Oi=Wa=null,Dg(s),hl=null,_c=0;var f=s.return;try{if(ND(i,f,s,l,$e)){Rt=1,vf(i,hr(l,i.current)),Ue=null;return}}catch(g){if(f!==null)throw Ue=f,g;Rt=1,vf(i,hr(l,i.current)),Ue=null;return}s.flags&32768?(Ye||c===1?i=!0:Tl||($e&536870912)!==0?i=!1:(zi=i=!0,(c===2||c===3||c===6)&&(c=pr.current,c!==null&&c.tag===13&&(c.flags|=16384))),j0(s,i)):Df(s)}function Df(i){var s=i;do{if((s.flags&32768)!==0){j0(s,zi);return}i=s.return;var l=LD(s.alternate,s,Bi);if(l!==null){Ue=l;return}if(s=s.sibling,s!==null){Ue=s;return}Ue=s=i}while(s!==null);Rt===0&&(Rt=5)}function j0(i,s){do{var l=UD(i.alternate,i);if(l!==null){l.flags&=32767,Ue=l;return}if(l=i.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!s&&(i=i.sibling,i!==null)){Ue=i;return}Ue=i=l}while(i!==null);Rt=6,Ue=null}function q0(i,s,l,c,f,g,T,b,C,M){var Z=A.T,ne=pe.p;try{pe.p=2,A.T=null,$D(i,s,l,c,ne,f,g,T,b,C,M)}finally{A.T=Z,pe.p=ne}}function $D(i,s,l,c,f,g,T,b){do Al();while(to!==null);if((vt&6)!==0)throw Error(r(327));var C=i.finishedWork;if(c=i.finishedLanes,C===null)return null;if(i.finishedWork=null,i.finishedLanes=0,C===i.current)throw Error(r(177));i.callbackNode=null,i.callbackPriority=0,i.cancelPendingCommit=null;var M=C.lanes|C.childLanes;if(M|=mg,Pd(i,c,M,g,T,b),i===at&&(Ue=at=null,$e=0),(C.subtreeFlags&10256)===0&&(C.flags&10256)===0||Cf||(Cf=!0,Ey=M,Ty=l,YD(_i,function(){return Al(),null})),l=(C.flags&15990)!==0,(C.subtreeFlags&15990)!==0||l?(l=A.T,A.T=null,g=pe.p,pe.p=2,T=vt,vt|=4,kD(i,C),b0(C,i),mD(Uy,i.containerInfo),jf=!!Ly,Uy=Ly=null,i.current=C,v0(i,C.alternate,C),$u(),vt=T,pe.p=g,A.T=l):i.current=C,Cf?(Cf=!1,to=i,Mc=c):H0(i,M),M=i.pendingLanes,M===0&&(Ls=null),Ku(C.stateNode),Wr(i),s!==null)for(f=i.onRecoverableError,C=0;C<s.length;C++)M=s[C],f(M.value,{componentStack:M.stack});return(Mc&3)!==0&&Al(),M=i.pendingLanes,(c&4194218)!==0&&(M&42)!==0?i===wy?Lc++:(Lc=0,wy=i):Lc=0,Uc(0),null}function H0(i,s){(i.pooledCacheLanes&=s)===0&&(s=i.pooledCache,s!=null&&(i.pooledCache=null,Ec(s)))}function Al(){if(to!==null){var i=to,s=Ey;Ey=0;var l=Nd(Mc),c=A.T,f=pe.p;try{if(pe.p=32>l?32:l,A.T=null,to===null)var g=!1;else{l=Ty,Ty=null;var T=to,b=Mc;if(to=null,Mc=0,(vt&6)!==0)throw Error(r(331));var C=vt;if(vt|=4,C0(T.current),A0(T,T.current,b,l),vt=C,Uc(0,!1),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(ls,T)}catch{}g=!0}return g}finally{pe.p=f,A.T=c,H0(i,s)}}return!1}function $0(i,s,l){s=hr(l,s),s=Hg(i.stateNode,s,2),i=Ps(i,s,2),i!==null&&(Ot(i,2),Wr(i))}function st(i,s,l){if(i.tag===3)$0(i,i,l);else for(;s!==null;){if(s.tag===3){$0(s,i,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ls===null||!Ls.has(c))){i=hr(l,i),l=Qw(2),c=Ps(s,l,2),c!==null&&(Yw(l,c,s,i),Ot(c,2),Wr(c));break}}s=s.return}}function Ry(i,s,l){var c=i.pingCache;if(c===null){c=i.pingCache=new BD;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(l)||(gy=!0,f.add(l),i=GD.bind(null,i,s,l),s.then(i,i))}function GD(i,s,l){var c=i.pingCache;c!==null&&c.delete(s),i.pingedLanes|=i.suspendedLanes&l,i.warmLanes&=~l,at===i&&($e&l)===l&&(Rt===4||Rt===3&&($e&62914560)===$e&&300>Ln()-vy?(vt&2)===0&&bl(i,0):yy|=l,wl===$e&&(wl=0)),Wr(i)}function G0(i,s){s===0&&(s=hs()),i=bs(i,s),i!==null&&(Ot(i,s),Wr(i))}function KD(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),G0(i,l)}function QD(i,s){var l=0;switch(i.tag){case 13:var c=i.stateNode,f=i.memoizedState;f!==null&&(l=f.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(s),G0(i,l)}function YD(i,s){return Aa(i,s)}var Pf=null,Sl=null,Cy=!1,Nf=!1,xy=!1,no=0;function Wr(i){i!==Sl&&i.next===null&&(Sl===null?Pf=Sl=i:Sl=Sl.next=i),Nf=!0,Cy||(Cy=!0,XD(WD))}function Uc(i,s){if(!xy&&Nf){xy=!0;do for(var l=!1,c=Pf;c!==null;){if(i!==0){var f=c.pendingLanes;if(f===0)var g=0;else{var T=c.suspendedLanes,b=c.pingedLanes;g=(1<<31-Rn(42|i)+1)-1,g&=f&~(T&~b),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(l=!0,Y0(c,g))}else g=$e,g=ir(c,c===at?g:0),(g&3)===0||cs(c,g)||(l=!0,Y0(c,g));c=c.next}while(l);xy=!1}}function WD(){Nf=Cy=!1;var i=0;no!==0&&(sP()&&(i=no),no=0);for(var s=Ln(),l=null,c=Pf;c!==null;){var f=c.next,g=K0(c,s);g===0?(c.next=null,l===null?Pf=f:l.next=f,f===null&&(Sl=l)):(l=c,(i!==0||(g&3)!==0)&&(Nf=!0)),c=f}Uc(i)}function K0(i,s){for(var l=i.suspendedLanes,c=i.pingedLanes,f=i.expirationTimes,g=i.pendingLanes&-62914561;0<g;){var T=31-Rn(g),b=1<<T,C=f[T];C===-1?((b&l)===0||(b&c)!==0)&&(f[T]=Ho(b,s)):C<=s&&(i.expiredLanes|=b),g&=~b}if(s=at,l=$e,l=ir(i,i===s?l:0),c=i.callbackNode,l===0||i===s&&ot===2||i.cancelPendingCommit!==null)return c!==null&&c!==null&&qo(c),i.callbackNode=null,i.callbackPriority=0;if((l&3)===0||cs(i,l)){if(s=l&-l,s===i.callbackPriority)return s;switch(c!==null&&qo(c),Nd(l)){case 2:case 8:l=en;break;case 32:l=_i;break;case 268435456:l=Gu;break;default:l=_i}return c=Q0.bind(null,i),l=Aa(l,c),i.callbackPriority=s,i.callbackNode=l,s}return c!==null&&c!==null&&qo(c),i.callbackPriority=2,i.callbackNode=null,2}function Q0(i,s){var l=i.callbackNode;if(Al()&&i.callbackNode!==l)return null;var c=$e;return c=ir(i,i===at?c:0),c===0?null:(V0(i,c,s),K0(i,Ln()),i.callbackNode!=null&&i.callbackNode===l?Q0.bind(null,i):null)}function Y0(i,s){if(Al())return null;V0(i,s,!0)}function XD(i){oP(function(){(vt&6)!==0?Aa($t,i):i()})}function Dy(){return no===0&&(no=Yu()),no}function W0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:zr(""+i)}function X0(i,s){var l=s.ownerDocument.createElement("input");return l.name=s.name,l.value=s.value,i.id&&l.setAttribute("form",i.id),s.parentNode.insertBefore(l,s),i=new FormData(i),l.parentNode.removeChild(l),i}function JD(i,s,l,c,f){if(s==="submit"&&l&&l.stateNode===f){var g=W0((f[Gt]||null).action),T=c.submitter;T&&(s=(s=T[Gt]||null)?W0(s.formAction):T.getAttribute("formAction"),s!==null&&(g=s,T=null));var b=new Xo("action","action",null,c,f);i.push({event:b,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(no!==0){var C=T?X0(f,T):new FormData(f);zg(l,{pending:!0,data:C,method:f.method,action:g},null,C)}}else typeof g=="function"&&(b.preventDefault(),C=T?X0(f,T):new FormData(f),zg(l,{pending:!0,data:C,method:f.method,action:g},g,C))},currentTarget:f}]})}}for(var Py=0;Py<qT.length;Py++){var Ny=qT[Py],ZD=Ny.toLowerCase(),eP=Ny[0].toUpperCase()+Ny.slice(1);Sr(ZD,"on"+eP)}Sr(UT,"onAnimationEnd"),Sr(zT,"onAnimationIteration"),Sr(BT,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(yD,"onTransitionRun"),Sr(_D,"onTransitionStart"),Sr(vD,"onTransitionCancel"),Sr(FT,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$n("onBeforeInput",["compositionend","keypress","textInput","paste"]),$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tP=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zc));function J0(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var T=c.length-1;0<=T;T--){var b=c[T],C=b.instance,M=b.currentTarget;if(b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=M;try{g(f)}catch(Z){_f(Z)}f.currentTarget=null,g=C}else for(T=0;T<c.length;T++){if(b=c[T],C=b.instance,M=b.currentTarget,b=b.listener,C!==g&&f.isPropagationStopped())break e;g=b,f.currentTarget=M;try{g(f)}catch(Z){_f(Z)}f.currentTarget=null,g=C}}}}function je(i,s){var l=s[Ra];l===void 0&&(l=s[Ra]=new Set);var c=i+"__bubble";l.has(c)||(Z0(s,i,2,!1),l.add(c))}function Oy(i,s,l){var c=0;s&&(c|=4),Z0(l,i,c,s)}var Of="_reactListening"+Math.random().toString(36).slice(2);function ky(i){if(!i[Of]){i[Of]=!0,Xu.forEach(function(l){l!=="selectionchange"&&(tP.has(l)||Oy(l,!1,i),Oy(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Of]||(s[Of]=!0,Oy("selectionchange",!1,s))}}function Z0(i,s,l,c){switch(wb(s)){case 2:var f=RP;break;case 8:f=CP;break;default:f=Ky}l=f.bind(null,s,l,i),f=void 0,!lr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?i.addEventListener(s,l,{capture:!0,passive:f}):i.addEventListener(s,l,!0):f!==void 0?i.addEventListener(s,l,{passive:f}):i.addEventListener(s,l,!1)}function Vy(i,s,l,c,f){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var b=c.stateNode.containerInfo;if(b===f||b.nodeType===8&&b.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var C=T.tag;if((C===3||C===4)&&(C=T.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;T=T.return}for(;b!==null;){if(T=Ar(b),T===null)return;if(C=T.tag,C===5||C===6||C===26||C===27){c=g=T;continue e}b=b.parentNode}}c=c.return}Ld(function(){var M=g,Z=Wo(l),ne=[];e:{var G=jT.get(i);if(G!==void 0){var J=Xo,Ee=i;switch(i){case"keypress":if(Fr(l)===0)break e;case"keydown":case"keyup":J=rl;break;case"focusin":Ee="focus",J=el;break;case"focusout":Ee="blur",J=el;break;case"beforeblur":case"afterblur":J=el;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=ur;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=og;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=$d;break;case UT:case zT:case BT:J=tl;break;case FT:J=Kd;break;case"scroll":case"scrollend":J=Ud;break;case"wheel":J=il;break;case"copy":case"cut":case"paste":J=nl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=uc;break;case"toggle":case"beforetoggle":J=Yd}var De=(s&4)!==0,Ct=!De&&(i==="scroll"||i==="scrollend"),z=De?G!==null?G+"Capture":null:G;De=[];for(var k=M,q;k!==null;){var ee=k;if(q=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||q===null||z===null||(ee=Na(k,z),ee!=null&&De.push(Bc(k,ee,q))),Ct)break;k=k.return}0<De.length&&(G=new J(G,Ee,null,l,Z),ne.push({event:G,listeners:De}))}}if((s&7)===0){e:{if(G=i==="mouseover"||i==="pointerover",J=i==="mouseout"||i==="pointerout",G&&l!==or&&(Ee=l.relatedTarget||l.fromElement)&&(Ar(Ee)||Ee[vi]))break e;if((J||G)&&(G=Z.window===Z?Z:(G=Z.ownerDocument)?G.defaultView||G.parentWindow:window,J?(Ee=l.relatedTarget||l.toElement,J=M,Ee=Ee?Ar(Ee):null,Ee!==null&&(Ct=we(Ee),De=Ee.tag,Ee!==Ct||De!==5&&De!==27&&De!==6)&&(Ee=null)):(J=null,Ee=M),J!==Ee)){if(De=ur,ee="onMouseLeave",z="onMouseEnter",k="mouse",(i==="pointerout"||i==="pointerover")&&(De=uc,ee="onPointerLeave",z="onPointerEnter",k="pointer"),Ct=J==null?G:gs(J),q=Ee==null?G:gs(Ee),G=new De(ee,k+"leave",J,l,Z),G.target=Ct,G.relatedTarget=q,ee=null,Ar(Z)===M&&(De=new De(z,k+"enter",Ee,l,Z),De.target=q,De.relatedTarget=Ct,ee=De),Ct=ee,J&&Ee)t:{for(De=J,z=Ee,k=0,q=De;q;q=Rl(q))k++;for(q=0,ee=z;ee;ee=Rl(ee))q++;for(;0<k-q;)De=Rl(De),k--;for(;0<q-k;)z=Rl(z),q--;for(;k--;){if(De===z||z!==null&&De===z.alternate)break t;De=Rl(De),z=Rl(z)}De=null}else De=null;J!==null&&eb(ne,G,J,De,!1),Ee!==null&&Ct!==null&&eb(ne,Ct,Ee,De,!0)}}e:{if(G=M?gs(M):window,J=G.nodeName&&G.nodeName.toLowerCase(),J==="select"||J==="input"&&G.type==="file")var _e=RT;else if(Qt(G))if(CT)_e=fD;else{_e=hD;var Le=cD}else J=G.nodeName,!J||J.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?M&&nc(M.elementType)&&(_e=RT):_e=dD;if(_e&&(_e=_e(i,M))){Ri(ne,_e,l,Z);break e}Le&&Le(i,G,M),i==="focusout"&&M&&G.type==="number"&&M.memoizedProps.value!=null&&Yo(G,"number",G.value)}switch(Le=M?gs(M):window,i){case"focusin":(Qt(Le)||Le.contentEditable==="true")&&(sl=Le,dg=M,dc=null);break;case"focusout":dc=dg=sl=null;break;case"mousedown":fg=!0;break;case"contextmenu":case"mouseup":case"dragend":fg=!1,MT(ne,l,Z);break;case"selectionchange":if(gD)break;case"keydown":case"keyup":MT(ne,l,Z)}var be;if(Hr)e:{switch(i){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else qe?Y(i,l)&&(Se="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Se="onCompositionStart");Se&&(E&&l.locale!=="ko"&&(qe||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&qe&&(be=ic()):(Br=Z,ws="value"in Br?Br.value:Br.textContent,qe=!0)),Le=kf(M,Se),0<Le.length&&(Se=new oc(Se,i,null,l,Z),ne.push({event:Se,listeners:Le}),be?Se.data=be:(be=ce(l),be!==null&&(Se.data=be)))),(be=y?Kt(i,l):He(i,l))&&(Se=kf(M,"onBeforeInput"),0<Se.length&&(Le=new oc("onBeforeInput","beforeinput",null,l,Z),ne.push({event:Le,listeners:Se}),Le.data=be)),JD(ne,i,M,l,Z)}J0(ne,s)})}function Bc(i,s,l){return{instance:i,listener:s,currentTarget:l}}function kf(i,s){for(var l=s+"Capture",c=[];i!==null;){var f=i,g=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=Na(i,l),f!=null&&c.unshift(Bc(i,f,g)),f=Na(i,s),f!=null&&c.push(Bc(i,f,g))),i=i.return}return c}function Rl(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function eb(i,s,l,c,f){for(var g=s._reactName,T=[];l!==null&&l!==c;){var b=l,C=b.alternate,M=b.stateNode;if(b=b.tag,C!==null&&C===c)break;b!==5&&b!==26&&b!==27||M===null||(C=M,f?(M=Na(l,g),M!=null&&T.unshift(Bc(l,M,C))):f||(M=Na(l,g),M!=null&&T.push(Bc(l,M,C)))),l=l.return}T.length!==0&&i.push({event:s,listeners:T})}var nP=/\r\n?/g,rP=/\u0000|\uFFFD/g;function tb(i){return(typeof i=="string"?i:""+i).replace(nP,`
`).replace(rP,"")}function nb(i,s){return s=tb(s),tb(i)===s}function Vf(){}function it(i,s,l,c,f,g){switch(l){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||ar(i,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&ar(i,""+c);break;case"className":vs(i,"class",c);break;case"tabIndex":vs(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":vs(i,l,c);break;case"style":Md(i,c,g);break;case"data":if(s!=="object"){vs(i,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||l!=="href")){i.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=zr(""+c),i.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(l==="formAction"?(s!=="input"&&it(i,s,"name",f.name,f,null),it(i,s,"formEncType",f.formEncType,f,null),it(i,s,"formMethod",f.formMethod,f,null),it(i,s,"formTarget",f.formTarget,f,null)):(it(i,s,"encType",f.encType,f,null),it(i,s,"method",f.method,f,null),it(i,s,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=zr(""+c),i.setAttribute(l,c);break;case"onClick":c!=null&&(i.onclick=Vf);break;case"onScroll":c!=null&&je("scroll",i);break;case"onScrollEnd":c!=null&&je("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}l=zr(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""+c):i.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""):i.removeAttribute(l);break;case"capture":case"download":c===!0?i.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,c):i.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(l,c):i.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(l):i.setAttribute(l,c);break;case"popover":je("beforetoggle",i),je("toggle",i),_s(i,"popover",c);break;case"xlinkActuate":sr(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":sr(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":sr(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":sr(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":sr(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":sr(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":sr(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":sr(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":sr(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":_s(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=sg.get(l)||l,_s(i,l,c))}}function My(i,s,l,c,f,g){switch(l){case"style":Md(i,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(f.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"children":typeof c=="string"?ar(i,c):(typeof c=="number"||typeof c=="bigint")&&ar(i,""+c);break;case"onScroll":c!=null&&je("scroll",i);break;case"onScrollEnd":c!=null&&je("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Vf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ko.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(f=l.endsWith("Capture"),s=l.slice(2,f?l.length-7:void 0),g=i[Gt]||null,g=g!=null?g[l]:null,typeof g=="function"&&i.removeEventListener(s,g,f),typeof c=="function")){typeof g!="function"&&g!==null&&(l in i?i[l]=null:i.hasAttribute(l)&&i.removeAttribute(l)),i.addEventListener(s,c,f);break e}l in i?i[l]=c:c===!0?i.setAttribute(l,""):_s(i,l,c)}}}function mn(i,s,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",i),je("load",i);var c=!1,f=!1,g;for(g in l)if(l.hasOwnProperty(g)){var T=l[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,g,T,l,null)}}f&&it(i,s,"srcSet",l.srcSet,l,null),c&&it(i,s,"src",l.src,l,null);return;case"input":je("invalid",i);var b=g=T=f=null,C=null,M=null;for(c in l)if(l.hasOwnProperty(c)){var Z=l[c];if(Z!=null)switch(c){case"name":f=Z;break;case"type":T=Z;break;case"checked":C=Z;break;case"defaultChecked":M=Z;break;case"value":g=Z;break;case"defaultValue":b=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,s));break;default:it(i,s,c,Z,l,null)}}Da(i,g,b,C,M,T,f,!1),xa(i);return;case"select":je("invalid",i),c=T=g=null;for(f in l)if(l.hasOwnProperty(f)&&(b=l[f],b!=null))switch(f){case"value":g=b;break;case"defaultValue":T=b;break;case"multiple":c=b;default:it(i,s,f,b,l,null)}s=g,l=T,i.multiple=!!c,s!=null?Qe(i,!!c,s,!1):l!=null&&Qe(i,!!c,l,!0);return;case"textarea":je("invalid",i),g=f=c=null;for(T in l)if(l.hasOwnProperty(T)&&(b=l[T],b!=null))switch(T){case"value":c=b;break;case"defaultValue":f=b;break;case"children":g=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:it(i,s,T,b,l,null)}Ts(i,c,f,g),xa(i);return;case"option":for(C in l)if(l.hasOwnProperty(C)&&(c=l[C],c!=null))switch(C){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:it(i,s,C,c,l,null)}return;case"dialog":je("cancel",i),je("close",i);break;case"iframe":case"object":je("load",i);break;case"video":case"audio":for(c=0;c<zc.length;c++)je(zc[c],i);break;case"image":je("error",i),je("load",i);break;case"details":je("toggle",i);break;case"embed":case"source":case"link":je("error",i),je("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in l)if(l.hasOwnProperty(M)&&(c=l[M],c!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,M,c,l,null)}return;default:if(nc(s)){for(Z in l)l.hasOwnProperty(Z)&&(c=l[Z],c!==void 0&&My(i,s,Z,c,l,void 0));return}}for(b in l)l.hasOwnProperty(b)&&(c=l[b],c!=null&&it(i,s,b,c,l,null))}function iP(i,s,l,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,T=null,b=null,C=null,M=null,Z=null;for(J in l){var ne=l[J];if(l.hasOwnProperty(J)&&ne!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":C=ne;default:c.hasOwnProperty(J)||it(i,s,J,null,c,ne)}}for(var G in c){var J=c[G];if(ne=l[G],c.hasOwnProperty(G)&&(J!=null||ne!=null))switch(G){case"type":g=J;break;case"name":f=J;break;case"checked":M=J;break;case"defaultChecked":Z=J;break;case"value":T=J;break;case"defaultValue":b=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,s));break;default:J!==ne&&it(i,s,G,J,c,ne)}}Es(i,T,b,C,M,Z,g,f);return;case"select":J=T=b=G=null;for(g in l)if(C=l[g],l.hasOwnProperty(g)&&C!=null)switch(g){case"value":break;case"multiple":J=C;default:c.hasOwnProperty(g)||it(i,s,g,null,c,C)}for(f in c)if(g=c[f],C=l[f],c.hasOwnProperty(f)&&(g!=null||C!=null))switch(f){case"value":G=g;break;case"defaultValue":b=g;break;case"multiple":T=g;default:g!==C&&it(i,s,f,g,c,C)}s=b,l=T,c=J,G!=null?Qe(i,!!l,G,!1):!!c!=!!l&&(s!=null?Qe(i,!!l,s,!0):Qe(i,!!l,l?[]:"",!1));return;case"textarea":J=G=null;for(b in l)if(f=l[b],l.hasOwnProperty(b)&&f!=null&&!c.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:it(i,s,b,null,c,f)}for(T in c)if(f=c[T],g=l[T],c.hasOwnProperty(T)&&(f!=null||g!=null))switch(T){case"value":G=f;break;case"defaultValue":J=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==g&&it(i,s,T,f,c,g)}Pa(i,G,J);return;case"option":for(var Ee in l)if(G=l[Ee],l.hasOwnProperty(Ee)&&G!=null&&!c.hasOwnProperty(Ee))switch(Ee){case"selected":i.selected=!1;break;default:it(i,s,Ee,null,c,G)}for(C in c)if(G=c[C],J=l[C],c.hasOwnProperty(C)&&G!==J&&(G!=null||J!=null))switch(C){case"selected":i.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:it(i,s,C,G,c,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var De in l)G=l[De],l.hasOwnProperty(De)&&G!=null&&!c.hasOwnProperty(De)&&it(i,s,De,null,c,G);for(M in c)if(G=c[M],J=l[M],c.hasOwnProperty(M)&&G!==J&&(G!=null||J!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(r(137,s));break;default:it(i,s,M,G,c,J)}return;default:if(nc(s)){for(var Ct in l)G=l[Ct],l.hasOwnProperty(Ct)&&G!==void 0&&!c.hasOwnProperty(Ct)&&My(i,s,Ct,void 0,c,G);for(Z in c)G=c[Z],J=l[Z],!c.hasOwnProperty(Z)||G===J||G===void 0&&J===void 0||My(i,s,Z,G,c,J);return}}for(var z in l)G=l[z],l.hasOwnProperty(z)&&G!=null&&!c.hasOwnProperty(z)&&it(i,s,z,null,c,G);for(ne in c)G=c[ne],J=l[ne],!c.hasOwnProperty(ne)||G===J||G==null&&J==null||it(i,s,ne,G,c,J)}var Ly=null,Uy=null;function Mf(i){return i.nodeType===9?i:i.ownerDocument}function rb(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ib(i,s){if(i===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&s==="foreignObject"?0:i}function zy(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var By=null;function sP(){var i=window.event;return i&&i.type==="popstate"?i===By?!1:(By=i,!0):(By=null,!1)}var sb=typeof setTimeout=="function"?setTimeout:void 0,aP=typeof clearTimeout=="function"?clearTimeout:void 0,ab=typeof Promise=="function"?Promise:void 0,oP=typeof queueMicrotask=="function"?queueMicrotask:typeof ab<"u"?function(i){return ab.resolve(null).then(i).catch(lP)}:sb;function lP(i){setTimeout(function(){throw i})}function Fy(i,s){var l=s,c=0;do{var f=l.nextSibling;if(i.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"){if(c===0){i.removeChild(f),Qc(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=f}while(l);Qc(s)}function jy(i){var s=i.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var l=s;switch(s=s.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":jy(l),Ca(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}i.removeChild(l)}}function uP(i,s,l,c){for(;i.nodeType===1;){var f=l;if(i.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[ms])switch(s){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(g=i.getAttribute("rel"),g==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(g!==f.rel||i.getAttribute("href")!==(f.href==null?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(g=i.getAttribute("src"),(g!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(s==="input"&&i.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===g)return i}else return i;if(i=xr(i.nextSibling),i===null)break}return null}function cP(i,s,l){if(s==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!l||(i=xr(i.nextSibling),i===null))return null;return i}function xr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return i}function ob(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}function lb(i,s,l){switch(s=Mf(l),i){case"html":if(i=s.documentElement,!i)throw Error(r(452));return i;case"head":if(i=s.head,!i)throw Error(r(453));return i;case"body":if(i=s.body,!i)throw Error(r(454));return i;default:throw Error(r(451))}}var vr=new Map,ub=new Set;function Lf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.ownerDocument}var ji=pe.d;pe.d={f:hP,r:dP,D:fP,C:pP,L:mP,m:gP,X:_P,S:yP,M:vP};function hP(){var i=ji.f(),s=xf();return i||s}function dP(i){var s=Ei(i);s!==null&&s.tag===5&&s.type==="form"?Mw(s):ji.r(i)}var Cl=typeof document>"u"?null:document;function cb(i,s,l){var c=Cl;if(c&&typeof s=="string"&&s){var f=At(s);f='link[rel="'+i+'"][href="'+f+'"]',typeof l=="string"&&(f+='[crossorigin="'+l+'"]'),ub.has(f)||(ub.add(f),i={rel:i,crossOrigin:l,href:s},c.querySelector(f)===null&&(s=c.createElement("link"),mn(s,"link",i),yt(s),c.head.appendChild(s)))}}function fP(i){ji.D(i),cb("dns-prefetch",i,null)}function pP(i,s){ji.C(i,s),cb("preconnect",i,s)}function mP(i,s,l){ji.L(i,s,l);var c=Cl;if(c&&i&&s){var f='link[rel="preload"][as="'+At(s)+'"]';s==="image"&&l&&l.imageSrcSet?(f+='[imagesrcset="'+At(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(f+='[imagesizes="'+At(l.imageSizes)+'"]')):f+='[href="'+At(i)+'"]';var g=f;switch(s){case"style":g=xl(i);break;case"script":g=Dl(i)}vr.has(g)||(i=P({rel:"preload",href:s==="image"&&l&&l.imageSrcSet?void 0:i,as:s},l),vr.set(g,i),c.querySelector(f)!==null||s==="style"&&c.querySelector(Fc(g))||s==="script"&&c.querySelector(jc(g))||(s=c.createElement("link"),mn(s,"link",i),yt(s),c.head.appendChild(s)))}}function gP(i,s){ji.m(i,s);var l=Cl;if(l&&i){var c=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+At(c)+'"][href="'+At(i)+'"]',g=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Dl(i)}if(!vr.has(g)&&(i=P({rel:"modulepreload",href:i},s),vr.set(g,i),l.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(jc(g)))return}c=l.createElement("link"),mn(c,"link",i),yt(c),l.head.appendChild(c)}}}function yP(i,s,l){ji.S(i,s,l);var c=Cl;if(c&&i){var f=ys(c).hoistableStyles,g=xl(i);s=s||"default";var T=f.get(g);if(!T){var b={loading:0,preload:null};if(T=c.querySelector(Fc(g)))b.loading=5;else{i=P({rel:"stylesheet",href:i,"data-precedence":s},l),(l=vr.get(g))&&qy(i,l);var C=T=c.createElement("link");yt(C),mn(C,"link",i),C._p=new Promise(function(M,Z){C.onload=M,C.onerror=Z}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Uf(T,s,c)}T={type:"stylesheet",instance:T,count:1,state:b},f.set(g,T)}}}function _P(i,s){ji.X(i,s);var l=Cl;if(l&&i){var c=ys(l).hoistableScripts,f=Dl(i),g=c.get(f);g||(g=l.querySelector(jc(f)),g||(i=P({src:i,async:!0},s),(s=vr.get(f))&&Hy(i,s),g=l.createElement("script"),yt(g),mn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function vP(i,s){ji.M(i,s);var l=Cl;if(l&&i){var c=ys(l).hoistableScripts,f=Dl(i),g=c.get(f);g||(g=l.querySelector(jc(f)),g||(i=P({src:i,async:!0,type:"module"},s),(s=vr.get(f))&&Hy(i,s),g=l.createElement("script"),yt(g),mn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function hb(i,s,l,c){var f=(f=rr.current)?Lf(f):null;if(!f)throw Error(r(446));switch(i){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(s=xl(l.href),l=ys(f).hoistableStyles,c=l.get(s),c||(c={type:"style",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){i=xl(l.href);var g=ys(f).hoistableStyles,T=g.get(i);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(i,T),(g=f.querySelector(Fc(i)))&&!g._p&&(T.instance=g,T.state.loading=5),vr.has(i)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},vr.set(i,l),g||EP(f,i,l,T.state))),s&&c===null)throw Error(r(528,""));return T}if(s&&c!==null)throw Error(r(529,""));return null;case"script":return s=l.async,l=l.src,typeof l=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Dl(l),l=ys(f).hoistableScripts,c=l.get(s),c||(c={type:"script",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,i))}}function xl(i){return'href="'+At(i)+'"'}function Fc(i){return'link[rel="stylesheet"]['+i+"]"}function db(i){return P({},i,{"data-precedence":i.precedence,precedence:null})}function EP(i,s,l,c){i.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=i.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),mn(s,"link",l),yt(s),i.head.appendChild(s))}function Dl(i){return'[src="'+At(i)+'"]'}function jc(i){return"script[async]"+i}function fb(i,s,l){if(s.count++,s.instance===null)switch(s.type){case"style":var c=i.querySelector('style[data-href~="'+At(l.href)+'"]');if(c)return s.instance=c,yt(c),c;var f=P({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),yt(c),mn(c,"style",f),Uf(c,l.precedence,i),s.instance=c;case"stylesheet":f=xl(l.href);var g=i.querySelector(Fc(f));if(g)return s.state.loading|=4,s.instance=g,yt(g),g;c=db(l),(f=vr.get(f))&&qy(c,f),g=(i.ownerDocument||i).createElement("link"),yt(g);var T=g;return T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),mn(g,"link",c),s.state.loading|=4,Uf(g,l.precedence,i),s.instance=g;case"script":return g=Dl(l.src),(f=i.querySelector(jc(g)))?(s.instance=f,yt(f),f):(c=l,(f=vr.get(g))&&(c=P({},l),Hy(c,f)),i=i.ownerDocument||i,f=i.createElement("script"),yt(f),mn(f,"link",c),i.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Uf(c,l.precedence,i));return s.instance}function Uf(i,s,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,g=f,T=0;T<c.length;T++){var b=c[T];if(b.dataset.precedence===s)g=b;else if(g!==f)break}g?g.parentNode.insertBefore(i,g.nextSibling):(s=l.nodeType===9?l.head:l,s.insertBefore(i,s.firstChild))}function qy(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.title==null&&(i.title=s.title)}function Hy(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.integrity==null&&(i.integrity=s.integrity)}var zf=null;function pb(i,s,l){if(zf===null){var c=new Map,f=zf=new Map;f.set(l,c)}else f=zf,c=f.get(l),c||(c=new Map,f.set(l,c));if(c.has(i))return c;for(c.set(i,null),l=l.getElementsByTagName(i),f=0;f<l.length;f++){var g=l[f];if(!(g[ms]||g[tn]||i==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(s)||"";T=i+T;var b=c.get(T);b?b.push(g):c.set(T,[g])}}return c}function mb(i,s,l){i=i.ownerDocument||i,i.head.insertBefore(l,s==="title"?i.querySelector("head > title"):null)}function TP(i,s,l){if(l===1||s.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return i=s.disabled,typeof s.precedence=="string"&&i==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function gb(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var qc=null;function wP(){}function bP(i,s,l){if(qc===null)throw Error(r(475));var c=qc;if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=xl(l.href),g=i.querySelector(Fc(f));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=Bf.bind(c),i.then(c,c)),s.state.loading|=4,s.instance=g,yt(g);return}g=i.ownerDocument||i,l=db(l),(f=vr.get(f))&&qy(l,f),g=g.createElement("link"),yt(g);var T=g;T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),mn(g,"link",l),s.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=Bf.bind(c),i.addEventListener("load",s),i.addEventListener("error",s))}}function IP(){if(qc===null)throw Error(r(475));var i=qc;return i.stylesheets&&i.count===0&&$y(i,i.stylesheets),0<i.count?function(s){var l=setTimeout(function(){if(i.stylesheets&&$y(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=s,function(){i.unsuspend=null,clearTimeout(l)}}:null}function Bf(){if(this.count--,this.count===0){if(this.stylesheets)$y(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Ff=null;function $y(i,s){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Ff=new Map,s.forEach(AP,i),Ff=null,Bf.call(i))}function AP(i,s){if(!(s.state.loading&4)){var l=Ff.get(i);if(l)var c=l.get(null);else{l=new Map,Ff.set(i,l);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var T=f[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(l.set(T.dataset.precedence,T),c=T)}c&&l.set(null,c)}f=s.instance,T=f.getAttribute("data-precedence"),g=l.get(T)||c,g===c&&l.set(null,f),l.set(T,f),this.count++,c=Bf.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),g?g.parentNode.insertBefore(f,g.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),s.state.loading|=4}}var Hc={$$typeof:S,Provider:null,Consumer:null,_currentValue:xe,_currentValue2:xe,_threadCount:0};function SP(i,s,l,c,f,g,T,b){this.tag=1,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$o(0),this.hiddenUpdates=$o(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function yb(i,s,l,c,f,g,T,b,C,M,Z,ne){return i=new SP(i,s,l,T,b,C,M,ne),s=1,g===!0&&(s|=24),g=yr(3,null,null,s),i.current=g,g.stateNode=i,s=bg(),s.refCount++,i.pooledCache=s,s.refCount++,g.memoizedState={element:c,isDehydrated:l,cache:s},ry(g),i}function _b(i){return i?(i=ll,i):ll}function vb(i,s,l,c,f,g){f=_b(f),c.context===null?c.context=f:c.pendingContext=f,c=Ds(s),c.payload={element:l},g=g===void 0?null:g,g!==null&&(c.callback=g),l=Ps(i,c,s),l!==null&&(Pn(l,i,s),Rc(l,i,s))}function Eb(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Gy(i,s){Eb(i,s),(i=i.alternate)&&Eb(i,s)}function Tb(i){if(i.tag===13){var s=bs(i,67108864);s!==null&&Pn(s,i,67108864),Gy(i,67108864)}}var jf=!0;function RP(i,s,l,c){var f=A.T;A.T=null;var g=pe.p;try{pe.p=2,Ky(i,s,l,c)}finally{pe.p=g,A.T=f}}function CP(i,s,l,c){var f=A.T;A.T=null;var g=pe.p;try{pe.p=8,Ky(i,s,l,c)}finally{pe.p=g,A.T=f}}function Ky(i,s,l,c){if(jf){var f=Qy(c);if(f===null)Vy(i,s,c,qf,l),bb(i,c);else if(DP(f,i,s,l,c))c.stopPropagation();else if(bb(i,c),s&4&&-1<xP.indexOf(i)){for(;f!==null;){var g=Ei(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Ir(g.pendingLanes);if(T!==0){var b=g;for(b.pendingLanes|=2,b.entangledLanes|=2;T;){var C=1<<31-Rn(T);b.entanglements[1]|=C,T&=~C}Wr(g),(vt&6)===0&&(Sf=Ln()+500,Uc(0))}}break;case 13:b=bs(g,2),b!==null&&Pn(b,g,2),xf(),Gy(g,2)}if(g=Qy(c),g===null&&Vy(i,s,c,qf,l),g===f)break;f=g}f!==null&&c.stopPropagation()}else Vy(i,s,c,null,l)}}function Qy(i){return i=Wo(i),Yy(i)}var qf=null;function Yy(i){if(qf=null,i=Ar(i),i!==null){var s=we(i);if(s===null)i=null;else{var l=s.tag;if(l===13){if(i=Oe(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return qf=i,null}function wb(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rd()){case $t:return 2;case en:return 8;case _i:case Cd:return 32;case Gu:return 268435456;default:return 32}default:return 32}}var Wy=!1,Us=null,zs=null,Bs=null,$c=new Map,Gc=new Map,Fs=[],xP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bb(i,s){switch(i){case"focusin":case"focusout":Us=null;break;case"dragenter":case"dragleave":zs=null;break;case"mouseover":case"mouseout":Bs=null;break;case"pointerover":case"pointerout":$c.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gc.delete(s.pointerId)}}function Kc(i,s,l,c,f,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ei(s),s!==null&&Tb(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),i)}function DP(i,s,l,c,f){switch(s){case"focusin":return Us=Kc(Us,i,s,l,c,f),!0;case"dragenter":return zs=Kc(zs,i,s,l,c,f),!0;case"mouseover":return Bs=Kc(Bs,i,s,l,c,f),!0;case"pointerover":var g=f.pointerId;return $c.set(g,Kc($c.get(g)||null,i,s,l,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Gc.set(g,Kc(Gc.get(g)||null,i,s,l,c,f)),!0}return!1}function Ib(i){var s=Ar(i.target);if(s!==null){var l=we(s);if(l!==null){if(s=l.tag,s===13){if(s=Oe(l),s!==null){i.blockedOn=s,ps(i.priority,function(){if(l.tag===13){var c=Xn(),f=bs(l,c);f!==null&&Pn(f,l,c),Gy(l,c)}});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Hf(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Qy(i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);or=c,l.target.dispatchEvent(c),or=null}else return s=Ei(l),s!==null&&Tb(s),i.blockedOn=l,!1;s.shift()}return!0}function Ab(i,s,l){Hf(i)&&l.delete(s)}function PP(){Wy=!1,Us!==null&&Hf(Us)&&(Us=null),zs!==null&&Hf(zs)&&(zs=null),Bs!==null&&Hf(Bs)&&(Bs=null),$c.forEach(Ab),Gc.forEach(Ab)}function $f(i,s){i.blockedOn===s&&(i.blockedOn=null,Wy||(Wy=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,PP)))}var Gf=null;function Sb(i){Gf!==i&&(Gf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Gf===i&&(Gf=null);for(var s=0;s<i.length;s+=3){var l=i[s],c=i[s+1],f=i[s+2];if(typeof c!="function"){if(Yy(c||l)===null)continue;break}var g=Ei(l);g!==null&&(i.splice(s,3),s-=3,zg(g,{pending:!0,data:f,method:l.method,action:c},c,f))}}))}function Qc(i){function s(C){return $f(C,i)}Us!==null&&$f(Us,i),zs!==null&&$f(zs,i),Bs!==null&&$f(Bs,i),$c.forEach(s),Gc.forEach(s);for(var l=0;l<Fs.length;l++){var c=Fs[l];c.blockedOn===i&&(c.blockedOn=null)}for(;0<Fs.length&&(l=Fs[0],l.blockedOn===null);)Ib(l),l.blockedOn===null&&Fs.shift();if(l=(i.ownerDocument||i).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var f=l[c],g=l[c+1],T=f[Gt]||null;if(typeof g=="function")T||Sb(l);else if(T){var b=null;if(g&&g.hasAttribute("formAction")){if(f=g,T=g[Gt]||null)b=T.formAction;else if(Yy(f)!==null)continue}else b=T.action;typeof b=="function"?l[c+1]=b:(l.splice(c,3),c-=3),Sb(l)}}}function Xy(i){this._internalRoot=i}Kf.prototype.render=Xy.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(r(409));var l=s.current,c=Xn();vb(l,c,i,s,null,null)},Kf.prototype.unmount=Xy.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;i.tag===0&&Al(),vb(i.current,2,null,i,null,null),xf(),s[vi]=null}};function Kf(i){this._internalRoot=i}Kf.prototype.unstable_scheduleHydration=function(i){if(i){var s=Od();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Fs.length&&s!==0&&s<Fs[l].priority;l++);Fs.splice(l,0,i),l===0&&Ib(i)}};var Rb=e.version;if(Rb!=="19.0.0")throw Error(r(527,Rb,"19.0.0"));pe.findDOMNode=function(i){var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=ie(s),i=i!==null?ye(i):null,i=i===null?null:i.stateNode,i};var NP={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Ar,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qf.isDisabled&&Qf.supportsFiber)try{ls=Qf.inject(NP),En=Qf}catch{}}return Wc.createRoot=function(i,s){if(!a(i))throw Error(r(299));var l=!1,c="",f=Hw,g=$w,T=Gw,b=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(b=s.unstable_transitionCallbacks)),s=yb(i,1,!1,null,null,l,c,f,g,T,b,null),i[vi]=s.current,ky(i.nodeType===8?i.parentNode:i),new Xy(s)},Wc.hydrateRoot=function(i,s,l){if(!a(i))throw Error(r(299));var c=!1,f="",g=Hw,T=$w,b=Gw,C=null,M=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(f=l.identifierPrefix),l.onUncaughtError!==void 0&&(g=l.onUncaughtError),l.onCaughtError!==void 0&&(T=l.onCaughtError),l.onRecoverableError!==void 0&&(b=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(C=l.unstable_transitionCallbacks),l.formState!==void 0&&(M=l.formState)),s=yb(i,1,!0,s,l??null,c,f,g,T,b,C,M),s.context=_b(null),l=s.current,c=Xn(),f=Ds(c),f.callback=null,Ps(l,f,c),s.current.lanes=c,Ot(s,c),Wr(s),i[vi]=s.current,ky(i),new Kf(s)},Wc.version="19.0.0",Wc}var Lb;function qP(){if(Lb)return Zy.exports;Lb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Zy.exports=jP(),Zy.exports}var HP=qP(),W=Rv();const xh=kP(W);var Xc={},Ub;function $P(){if(Ub)return Xc;Ub=1,Object.defineProperty(Xc,"__esModule",{value:!0}),Xc.parse=u,Xc.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,o=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function u(w,S){const D=new o,U=w.length;if(U<2)return D;const L=(S==null?void 0:S.decode)||_;let H=0;do{const X=w.indexOf("=",H);if(X===-1)break;const K=w.indexOf(";",H),oe=K===-1?U:K;if(X>oe){H=w.lastIndexOf(";",X-1)+1;continue}const ae=d(w,H,X),le=p(w,X,ae),x=w.slice(ae,le);if(D[x]===void 0){let R=d(w,X+1,oe),A=p(w,oe,R);const P=L(w.slice(R,A));D[x]=P}H=oe+1}while(H<U);return D}function d(w,S,D){do{const U=w.charCodeAt(S);if(U!==32&&U!==9)return S}while(++S<D);return D}function p(w,S,D){for(;S>D;){const U=w.charCodeAt(--S);if(U!==32&&U!==9)return S+1}return D}function m(w,S,D){const U=(D==null?void 0:D.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const L=U(S);if(!e.test(L))throw new TypeError(`argument val is invalid: ${S}`);let H=w+"="+L;if(!D)return H;if(D.maxAge!==void 0){if(!Number.isInteger(D.maxAge))throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);H+="; Max-Age="+D.maxAge}if(D.domain){if(!t.test(D.domain))throw new TypeError(`option domain is invalid: ${D.domain}`);H+="; Domain="+D.domain}if(D.path){if(!r.test(D.path))throw new TypeError(`option path is invalid: ${D.path}`);H+="; Path="+D.path}if(D.expires){if(!v(D.expires)||!Number.isFinite(D.expires.valueOf()))throw new TypeError(`option expires is invalid: ${D.expires}`);H+="; Expires="+D.expires.toUTCString()}if(D.httpOnly&&(H+="; HttpOnly"),D.secure&&(H+="; Secure"),D.partitioned&&(H+="; Partitioned"),D.priority)switch(typeof D.priority=="string"?D.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${D.priority}`)}if(D.sameSite)switch(typeof D.sameSite=="string"?D.sameSite.toLowerCase():D.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${D.sameSite}`)}return H}function _(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function v(w){return a.call(w)==="[object Date]"}return Xc}$P();var zb="popstate";function GP(n={}){function e(r,a){let{pathname:o,search:u,hash:d}=r.location;return D_("",{pathname:o,search:u,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Dh(a)}return QP(e,t,null,n)}function Et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ui(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function KP(){return Math.random().toString(36).substring(2,10)}function Bb(n,e){return{usr:n.state,key:n.key,idx:e}}function D_(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Ru(e):e,state:t,key:e&&e.key||r||KP()}}function Dh({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Ru(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function QP(n,e,t,r={}){let{window:a=document.defaultView,v5Compat:o=!1}=r,u=a.history,d="POP",p=null,m=_();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function _(){return(u.state||{idx:null}).idx}function v(){d="POP";let L=_(),H=L==null?null:L-m;m=L,p&&p({action:d,location:U.location,delta:H})}function w(L,H){d="PUSH";let X=D_(U.location,L,H);m=_()+1;let K=Bb(X,m),oe=U.createHref(X);try{u.pushState(K,"",oe)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;a.location.assign(oe)}o&&p&&p({action:d,location:U.location,delta:1})}function S(L,H){d="REPLACE";let X=D_(U.location,L,H);m=_();let K=Bb(X,m),oe=U.createHref(X);u.replaceState(K,"",oe),o&&p&&p({action:d,location:U.location,delta:0})}function D(L){let H=a.location.origin!=="null"?a.location.origin:a.location.href,X=typeof L=="string"?L:Dh(L);return X=X.replace(/ $/,"%20"),Et(H,`No window.location.(origin|href) available to create URL for href: ${X}`),new URL(X,H)}let U={get action(){return d},get location(){return n(a,u)},listen(L){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(zb,v),p=L,()=>{a.removeEventListener(zb,v),p=null}},createHref(L){return e(a,L)},createURL:D,encodeLocation(L){let H=D(L);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:w,replace:S,go(L){return u.go(L)}};return U}function gS(n,e,t="/"){return YP(n,e,t,!1)}function YP(n,e,t,r){let a=typeof e=="string"?Ru(e):e,o=Qi(a.pathname||"/",t);if(o==null)return null;let u=yS(n);WP(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let m=oN(o);d=sN(u[p],m,r)}return d}function yS(n,e=[],t=[],r=""){let a=(o,u,d)=>{let p={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};p.relativePath.startsWith("/")&&(Et(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let m=Gi([r,p.relativePath]),_=t.concat(p);o.children&&o.children.length>0&&(Et(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),yS(o.children,e,_,m)),!(o.path==null&&!o.index)&&e.push({path:m,score:rN(m,o.index),routesMeta:_})};return n.forEach((o,u)=>{var d;if(o.path===""||!((d=o.path)!=null&&d.includes("?")))a(o,u);else for(let p of _S(o.path))a(o,u,p)}),e}function _S(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let u=_S(r.join("/")),d=[];return d.push(...u.map(p=>p===""?o:[o,p].join("/"))),a&&d.push(...u),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function WP(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:iN(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var XP=/^:[\w-]+$/,JP=3,ZP=2,eN=1,tN=10,nN=-2,Fb=n=>n==="*";function rN(n,e){let t=n.split("/"),r=t.length;return t.some(Fb)&&(r+=nN),e&&(r+=ZP),t.filter(a=>!Fb(a)).reduce((a,o)=>a+(XP.test(o)?JP:o===""?eN:tN),r)}function iN(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function sN(n,e,t=!1){let{routesMeta:r}=n,a={},o="/",u=[];for(let d=0;d<r.length;++d){let p=r[d],m=d===r.length-1,_=o==="/"?e:e.slice(o.length)||"/",v=Cp({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},_),w=p.route;if(!v&&m&&t&&!r[r.length-1].route.index&&(v=Cp({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!v)return null;Object.assign(a,v.params),u.push({params:a,pathname:Gi([o,v.pathname]),pathnameBase:hN(Gi([o,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(o=Gi([o,v.pathnameBase]))}return u}function Cp(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=aN(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((m,{paramName:_,isOptional:v},w)=>{if(_==="*"){let D=d[w]||"";u=o.slice(0,o.length-D.length).replace(/(.)\/+$/,"$1")}const S=d[w];return v&&!S?m[_]=void 0:m[_]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:o,pathnameBase:u,pattern:n}}function aN(n,e=!1,t=!0){ui(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function oN(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ui(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Qi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function lN(n,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof n=="string"?Ru(n):n;return{pathname:t?t.startsWith("/")?t:uN(t,e):e,search:dN(r),hash:fN(a)}}function uN(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function i_(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cN(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function vS(n){let e=cN(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function ES(n,e,t,r=!1){let a;typeof n=="string"?a=Ru(n):(a={...n},Et(!a.pathname||!a.pathname.includes("?"),i_("?","pathname","search",a)),Et(!a.pathname||!a.pathname.includes("#"),i_("#","pathname","hash",a)),Et(!a.search||!a.search.includes("#"),i_("#","search","hash",a)));let o=n===""||a.pathname==="",u=o?"/":a.pathname,d;if(u==null)d=t;else{let v=e.length-1;if(!r&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),v-=1;a.pathname=w.join("/")}d=v>=0?e[v]:"/"}let p=lN(a,d),m=u&&u!=="/"&&u.endsWith("/"),_=(o||u===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||_)&&(p.pathname+="/"),p}var Gi=n=>n.join("/").replace(/\/\/+/g,"/"),hN=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),dN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,fN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function pN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var TS=["POST","PUT","PATCH","DELETE"];new Set(TS);var mN=["GET",...TS];new Set(mN);var Cu=W.createContext(null);Cu.displayName="DataRouter";var om=W.createContext(null);om.displayName="DataRouterState";var wS=W.createContext({isTransitioning:!1});wS.displayName="ViewTransition";var gN=W.createContext(new Map);gN.displayName="Fetchers";var yN=W.createContext(null);yN.displayName="Await";var mi=W.createContext(null);mi.displayName="Navigation";var nd=W.createContext(null);nd.displayName="Location";var gi=W.createContext({outlet:null,matches:[],isDataRoute:!1});gi.displayName="Route";var Cv=W.createContext(null);Cv.displayName="RouteError";function _N(n,{relative:e}={}){Et(rd(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=W.useContext(mi),{hash:a,pathname:o,search:u}=id(n,{relative:e}),d=o;return t!=="/"&&(d=o==="/"?t:Gi([t,o])),r.createHref({pathname:d,search:u,hash:a})}function rd(){return W.useContext(nd)!=null}function ya(){return Et(rd(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(nd).location}var bS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function IS(n){W.useContext(mi).static||W.useLayoutEffect(n)}function xu(){let{isDataRoute:n}=W.useContext(gi);return n?NN():vN()}function vN(){Et(rd(),"useNavigate() may be used only in the context of a <Router> component.");let n=W.useContext(Cu),{basename:e,navigator:t}=W.useContext(mi),{matches:r}=W.useContext(gi),{pathname:a}=ya(),o=JSON.stringify(vS(r)),u=W.useRef(!1);return IS(()=>{u.current=!0}),W.useCallback((p,m={})=>{if(ui(u.current,bS),!u.current)return;if(typeof p=="number"){t.go(p);return}let _=ES(p,JSON.parse(o),a,m.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Gi([e,_.pathname])),(m.replace?t.replace:t.push)(_,m.state,m)},[e,t,o,a,n])}W.createContext(null);function EN(){let{matches:n}=W.useContext(gi),e=n[n.length-1];return e?e.params:{}}function id(n,{relative:e}={}){let{matches:t}=W.useContext(gi),{pathname:r}=ya(),a=JSON.stringify(vS(t));return W.useMemo(()=>ES(n,JSON.parse(a),r,e==="path"),[n,a,r,e])}function TN(n,e){return AS(n,e)}function AS(n,e,t,r){var X;Et(rd(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:o}=W.useContext(mi),{matches:u}=W.useContext(gi),d=u[u.length-1],p=d?d.params:{},m=d?d.pathname:"/",_=d?d.pathnameBase:"/",v=d&&d.route;{let K=v&&v.path||"";SS(m,!v||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let w=ya(),S;if(e){let K=typeof e=="string"?Ru(e):e;Et(_==="/"||((X=K.pathname)==null?void 0:X.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${K.pathname}" was given in the \`location\` prop.`),S=K}else S=w;let D=S.pathname||"/",U=D;if(_!=="/"){let K=_.replace(/^\//,"").split("/");U="/"+D.replace(/^\//,"").split("/").slice(K.length).join("/")}let L=!o&&t&&t.matches&&t.matches.length>0?t.matches:gS(n,{pathname:U});ui(v||L!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ui(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=SN(L&&L.map(K=>Object.assign({},K,{params:Object.assign({},p,K.params),pathname:Gi([_,a.encodeLocation?a.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?_:Gi([_,a.encodeLocation?a.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),u,t,r);return e&&H?W.createElement(nd.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},H):H}function wN(){let n=PN(),e=pN(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:o},"ErrorBoundary")," or"," ",W.createElement("code",{style:o},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:a},t):null,u)}var bN=W.createElement(wN,null),IN=class extends W.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?W.createElement(gi.Provider,{value:this.props.routeContext},W.createElement(Cv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function AN({routeContext:n,match:e,children:t}){let r=W.useContext(Cu);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(gi.Provider,{value:n},t)}function SN(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=t==null?void 0:t.errors;if(o!=null){let p=a.findIndex(m=>m.route.id&&(o==null?void 0:o[m.route.id])!==void 0);Et(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let u=!1,d=-1;if(t)for(let p=0;p<a.length;p++){let m=a[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:_,errors:v}=t,w=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||w){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,m,_)=>{let v,w=!1,S=null,D=null;t&&(v=o&&m.route.id?o[m.route.id]:void 0,S=m.route.errorElement||bN,u&&(d<0&&_===0?(SS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,D=null):d===_&&(w=!0,D=m.route.hydrateFallbackElement||null)));let U=e.concat(a.slice(0,_+1)),L=()=>{let H;return v?H=S:w?H=D:m.route.Component?H=W.createElement(m.route.Component,null):m.route.element?H=m.route.element:H=p,W.createElement(AN,{match:m,routeContext:{outlet:p,matches:U,isDataRoute:t!=null},children:H})};return t&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?W.createElement(IN,{location:t.location,revalidation:t.revalidation,component:S,error:v,children:L(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):L()},null)}function xv(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function RN(n){let e=W.useContext(Cu);return Et(e,xv(n)),e}function CN(n){let e=W.useContext(om);return Et(e,xv(n)),e}function xN(n){let e=W.useContext(gi);return Et(e,xv(n)),e}function Dv(n){let e=xN(n),t=e.matches[e.matches.length-1];return Et(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function DN(){return Dv("useRouteId")}function PN(){var r;let n=W.useContext(Cv),e=CN("useRouteError"),t=Dv("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function NN(){let{router:n}=RN("useNavigate"),e=Dv("useNavigate"),t=W.useRef(!1);return IS(()=>{t.current=!0}),W.useCallback(async(a,o={})=>{ui(t.current,bS),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...o}))},[n,e])}var jb={};function SS(n,e,t){!e&&!jb[n]&&(jb[n]=!0,ui(!1,t))}W.memo(ON);function ON({routes:n,future:e,state:t}){return AS(n,void 0,t,e)}function ap(n){Et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function kN({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:o=!1}){Et(!rd(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),d=W.useMemo(()=>({basename:u,navigator:a,static:o,future:{}}),[u,a,o]);typeof t=="string"&&(t=Ru(t));let{pathname:p="/",search:m="",hash:_="",state:v=null,key:w="default"}=t,S=W.useMemo(()=>{let D=Qi(p,u);return D==null?null:{location:{pathname:D,search:m,hash:_,state:v,key:w},navigationType:r}},[u,p,m,_,v,w,r]);return ui(S!=null,`<Router basename="${u}"> is not able to match the URL "${p}${m}${_}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:W.createElement(mi.Provider,{value:d},W.createElement(nd.Provider,{children:e,value:S}))}function VN({children:n,location:e}){return TN(P_(n),e)}function P_(n,e=[]){let t=[];return W.Children.forEach(n,(r,a)=>{if(!W.isValidElement(r))return;let o=[...e,a];if(r.type===W.Fragment){t.push.apply(t,P_(r.props.children,o));return}Et(r.type===ap,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Et(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=P_(r.props.children,o)),t.push(u)}),t}var op="get",lp="application/x-www-form-urlencoded";function lm(n){return n!=null&&typeof n.tagName=="string"}function MN(n){return lm(n)&&n.tagName.toLowerCase()==="button"}function LN(n){return lm(n)&&n.tagName.toLowerCase()==="form"}function UN(n){return lm(n)&&n.tagName.toLowerCase()==="input"}function zN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function BN(n,e){return n.button===0&&(!e||e==="_self")&&!zN(n)}var Yf=null;function FN(){if(Yf===null)try{new FormData(document.createElement("form"),0),Yf=!1}catch{Yf=!0}return Yf}var jN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function s_(n){return n!=null&&!jN.has(n)?(ui(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lp}"`),null):n}function qN(n,e){let t,r,a,o,u;if(LN(n)){let d=n.getAttribute("action");r=d?Qi(d,e):null,t=n.getAttribute("method")||op,a=s_(n.getAttribute("enctype"))||lp,o=new FormData(n)}else if(MN(n)||UN(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(r=p?Qi(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||op,a=s_(n.getAttribute("formenctype"))||s_(d.getAttribute("enctype"))||lp,o=new FormData(d,n),!FN()){let{name:m,type:_,value:v}=n;if(_==="image"){let w=m?`${m}.`:"";o.append(`${w}x`,"0"),o.append(`${w}y`,"0")}else m&&o.append(m,v)}}else{if(lm(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=op,r=null,a=lp,u=n}return o&&a==="text/plain"&&(u=o,o=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:o,body:u}}function Pv(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function HN(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $N(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function GN(n,e,t){let r=await Promise.all(n.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await HN(o,t);return u.links?u.links():[]}return[]}));return WN(r.flat(1).filter($N).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function qb(n,e,t,r,a,o){let u=(p,m)=>t[m]?p.route.id!==t[m].route.id:!0,d=(p,m)=>{var _;return t[m].pathname!==p.pathname||((_=t[m].route.path)==null?void 0:_.endsWith("*"))&&t[m].params["*"]!==p.params["*"]};return o==="assets"?e.filter((p,m)=>u(p,m)||d(p,m)):o==="data"?e.filter((p,m)=>{var v;let _=r.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(u(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function KN(n,e,{includeHydrateFallback:t}={}){return QN(n.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function QN(n){return[...new Set(n)]}function YN(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function WN(n,e){let t=new Set;return new Set(e),n.reduce((r,a)=>{let o=JSON.stringify(YN(a));return t.has(o)||(t.add(o),r.push({key:o,link:a})),r},[])}var XN=new Set([100,101,204,205]);function JN(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Qi(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function RS(){let n=W.useContext(Cu);return Pv(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function ZN(){let n=W.useContext(om);return Pv(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Nv=W.createContext(void 0);Nv.displayName="FrameworkContext";function CS(){let n=W.useContext(Nv);return Pv(n,"You must render this element inside a <HydratedRouter> element"),n}function eO(n,e){let t=W.useContext(Nv),[r,a]=W.useState(!1),[o,u]=W.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:_,onTouchStart:v}=e,w=W.useRef(null);W.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let U=H=>{H.forEach(X=>{u(X.isIntersecting)})},L=new IntersectionObserver(U,{threshold:.5});return w.current&&L.observe(w.current),()=>{L.disconnect()}}},[n]),W.useEffect(()=>{if(r){let U=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(U)}}},[r]);let S=()=>{a(!0)},D=()=>{a(!1),u(!1)};return t?n!=="intent"?[o,w,{}]:[o,w,{onFocus:Jc(d,S),onBlur:Jc(p,D),onMouseEnter:Jc(m,S),onMouseLeave:Jc(_,D),onTouchStart:Jc(v,S)}]:[!1,w,{}]}function Jc(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function tO({page:n,...e}){let{router:t}=RS(),r=W.useMemo(()=>gS(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?W.createElement(rO,{page:n,matches:r,...e}):null}function nO(n){let{manifest:e,routeModules:t}=CS(),[r,a]=W.useState([]);return W.useEffect(()=>{let o=!1;return GN(n,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[n,e,t]),r}function rO({page:n,matches:e,...t}){let r=ya(),{manifest:a,routeModules:o}=CS(),{basename:u}=RS(),{loaderData:d,matches:p}=ZN(),m=W.useMemo(()=>qb(n,e,p,a,r,"data"),[n,e,p,a,r]),_=W.useMemo(()=>qb(n,e,p,a,r,"assets"),[n,e,p,a,r]),v=W.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let D=new Set,U=!1;if(e.forEach(H=>{var K;let X=a.routes[H.route.id];!X||!X.hasLoader||(!m.some(oe=>oe.route.id===H.route.id)&&H.route.id in d&&((K=o[H.route.id])!=null&&K.shouldRevalidate)||X.hasClientLoader?U=!0:D.add(H.route.id))}),D.size===0)return[];let L=JN(n,u);return U&&D.size>0&&L.searchParams.set("_routes",e.filter(H=>D.has(H.route.id)).map(H=>H.route.id).join(",")),[L.pathname+L.search]},[u,d,r,a,m,e,n,o]),w=W.useMemo(()=>KN(_,a),[_,a]),S=nO(_);return W.createElement(W.Fragment,null,v.map(D=>W.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...t})),w.map(D=>W.createElement("link",{key:D,rel:"modulepreload",href:D,...t})),S.map(({key:D,link:U})=>W.createElement("link",{key:D,...U})))}function iO(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var xS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xS&&(window.__reactRouterVersion="7.5.3")}catch{}function sO({basename:n,children:e,window:t}){let r=W.useRef();r.current==null&&(r.current=GP({window:t,v5Compat:!0}));let a=r.current,[o,u]=W.useState({action:a.action,location:a.location}),d=W.useCallback(p=>{W.startTransition(()=>u(p))},[u]);return W.useLayoutEffect(()=>a.listen(d),[a,d]),W.createElement(kN,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:a})}var DS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,PS=W.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:o,replace:u,state:d,target:p,to:m,preventScrollReset:_,viewTransition:v,...w},S){let{basename:D}=W.useContext(mi),U=typeof m=="string"&&DS.test(m),L,H=!1;if(typeof m=="string"&&U&&(L=m,xS))try{let A=new URL(window.location.href),P=m.startsWith("//")?new URL(A.protocol+m):new URL(m),V=Qi(P.pathname,D);P.origin===A.origin&&V!=null?m=V+P.search+P.hash:H=!0}catch{ui(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=_N(m,{relative:a}),[K,oe,ae]=eO(r,w),le=uO(m,{replace:u,state:d,target:p,preventScrollReset:_,relative:a,viewTransition:v});function x(A){e&&e(A),A.defaultPrevented||le(A)}let R=W.createElement("a",{...w,...ae,href:L||X,onClick:H||o?e:x,ref:iO(S,oe),target:p,"data-discover":!U&&t==="render"?"true":void 0});return K&&!U?W.createElement(W.Fragment,null,R,W.createElement(tO,{page:X})):R});PS.displayName="Link";var aO=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:o,to:u,viewTransition:d,children:p,...m},_){let v=id(u,{relative:m.relative}),w=ya(),S=W.useContext(om),{navigator:D,basename:U}=W.useContext(mi),L=S!=null&&pO(v)&&d===!0,H=D.encodeLocation?D.encodeLocation(v).pathname:v.pathname,X=w.pathname,K=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(X=X.toLowerCase(),K=K?K.toLowerCase():null,H=H.toLowerCase()),K&&U&&(K=Qi(K,U)||K);const oe=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let ae=X===H||!a&&X.startsWith(H)&&X.charAt(oe)==="/",le=K!=null&&(K===H||!a&&K.startsWith(H)&&K.charAt(H.length)==="/"),x={isActive:ae,isPending:le,isTransitioning:L},R=ae?e:void 0,A;typeof r=="function"?A=r(x):A=[r,ae?"active":null,le?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let P=typeof o=="function"?o(x):o;return W.createElement(PS,{...m,"aria-current":R,className:A,ref:_,style:P,to:u,viewTransition:d},typeof p=="function"?p(x):p)});aO.displayName="NavLink";var oO=W.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:o,method:u=op,action:d,onSubmit:p,relative:m,preventScrollReset:_,viewTransition:v,...w},S)=>{let D=dO(),U=fO(d,{relative:m}),L=u.toLowerCase()==="get"?"get":"post",H=typeof d=="string"&&DS.test(d),X=K=>{if(p&&p(K),K.defaultPrevented)return;K.preventDefault();let oe=K.nativeEvent.submitter,ae=(oe==null?void 0:oe.getAttribute("formmethod"))||u;D(oe||K.currentTarget,{fetcherKey:e,method:ae,navigate:t,replace:a,state:o,relative:m,preventScrollReset:_,viewTransition:v})};return W.createElement("form",{ref:S,method:L,action:U,onSubmit:r?p:X,...w,"data-discover":!H&&n==="render"?"true":void 0})});oO.displayName="Form";function lO(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function NS(n){let e=W.useContext(Cu);return Et(e,lO(n)),e}function uO(n,{target:e,replace:t,state:r,preventScrollReset:a,relative:o,viewTransition:u}={}){let d=xu(),p=ya(),m=id(n,{relative:o});return W.useCallback(_=>{if(BN(_,e)){_.preventDefault();let v=t!==void 0?t:Dh(p)===Dh(m);d(n,{replace:v,state:r,preventScrollReset:a,relative:o,viewTransition:u})}},[p,d,m,t,r,e,n,a,o,u])}var cO=0,hO=()=>`__${String(++cO)}__`;function dO(){let{router:n}=NS("useSubmit"),{basename:e}=W.useContext(mi),t=DN();return W.useCallback(async(r,a={})=>{let{action:o,method:u,encType:d,formData:p,body:m}=qN(r,e);if(a.navigate===!1){let _=a.fetcherKey||hO();await n.fetch(_,t,a.action||o,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function fO(n,{relative:e}={}){let{basename:t}=W.useContext(mi),r=W.useContext(gi);Et(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),o={...id(n||".",{relative:e})},u=ya();if(n==null){o.search=u.search;let d=new URLSearchParams(o.search),p=d.getAll("index");if(p.some(_=>_==="")){d.delete("index"),p.filter(v=>v).forEach(v=>d.append("index",v));let _=d.toString();o.search=_?`?${_}`:""}}return(!n||n===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:Gi([t,o.pathname])),Dh(o)}function pO(n,e={}){let t=W.useContext(wS);Et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=NS("useViewTransitionState"),a=id(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=Qi(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Qi(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Cp(a.pathname,u)!=null||Cp(a.pathname,o)!=null}new TextEncoder;[...XN];var Fn=function(){return Fn=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Fn.apply(this,arguments)};function Ov(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t}function xp(n,e,t){if(t||arguments.length===2)for(var r=0,a=e.length,o;r<a;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}var ct="-ms-",gh="-moz-",et="-webkit-",OS="comm",um="rule",kv="decl",mO="@import",kS="@keyframes",gO="@layer",VS=Math.abs,Vv=String.fromCharCode,N_=Object.assign;function yO(n,e){return un(n,0)^45?(((e<<2^un(n,0))<<2^un(n,1))<<2^un(n,2))<<2^un(n,3):0}function MS(n){return n.trim()}function qi(n,e){return(n=e.exec(n))?n[0]:n}function ke(n,e,t){return n.replace(e,t)}function up(n,e,t){return n.indexOf(e,t)}function un(n,e){return n.charCodeAt(e)|0}function Zl(n,e,t){return n.slice(e,t)}function Jr(n){return n.length}function LS(n){return n.length}function lh(n,e){return e.push(n),n}function _O(n,e){return n.map(e).join("")}function Hb(n,e){return n.filter(function(t){return!qi(t,e)})}var cm=1,eu=1,US=0,wr=0,Ht=0,Du="";function hm(n,e,t,r,a,o,u,d){return{value:n,root:e,parent:t,type:r,props:a,children:o,line:cm,column:eu,length:u,return:"",siblings:d}}function Qs(n,e){return N_(hm("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Pl(n){for(;n.root;)n=Qs(n.root,{children:[n]});lh(n,n.siblings)}function vO(){return Ht}function EO(){return Ht=wr>0?un(Du,--wr):0,eu--,Ht===10&&(eu=1,cm--),Ht}function Nr(){return Ht=wr<US?un(Du,wr++):0,eu++,Ht===10&&(eu=1,cm++),Ht}function _o(){return un(Du,wr)}function cp(){return wr}function dm(n,e){return Zl(Du,n,e)}function O_(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function TO(n){return cm=eu=1,US=Jr(Du=n),wr=0,[]}function wO(n){return Du="",n}function a_(n){return MS(dm(wr-1,k_(n===91?n+2:n===40?n+1:n)))}function bO(n){for(;(Ht=_o())&&Ht<33;)Nr();return O_(n)>2||O_(Ht)>3?"":" "}function IO(n,e){for(;--e&&Nr()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return dm(n,cp()+(e<6&&_o()==32&&Nr()==32))}function k_(n){for(;Nr();)switch(Ht){case n:return wr;case 34:case 39:n!==34&&n!==39&&k_(Ht);break;case 40:n===41&&k_(n);break;case 92:Nr();break}return wr}function AO(n,e){for(;Nr()&&n+Ht!==57;)if(n+Ht===84&&_o()===47)break;return"/*"+dm(e,wr-1)+"*"+Vv(n===47?n:Nr())}function SO(n){for(;!O_(_o());)Nr();return dm(n,wr)}function RO(n){return wO(hp("",null,null,null,[""],n=TO(n),0,[0],n))}function hp(n,e,t,r,a,o,u,d,p){for(var m=0,_=0,v=u,w=0,S=0,D=0,U=1,L=1,H=1,X=0,K="",oe=a,ae=o,le=r,x=K;L;)switch(D=X,X=Nr()){case 40:if(D!=108&&un(x,v-1)==58){up(x+=ke(a_(X),"&","&\f"),"&\f",VS(m?d[m-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:x+=a_(X);break;case 9:case 10:case 13:case 32:x+=bO(D);break;case 92:x+=IO(cp()-1,7);continue;case 47:switch(_o()){case 42:case 47:lh(CO(AO(Nr(),cp()),e,t,p),p);break;default:x+="/"}break;case 123*U:d[m++]=Jr(x)*H;case 125*U:case 59:case 0:switch(X){case 0:case 125:L=0;case 59+_:H==-1&&(x=ke(x,/\f/g,"")),S>0&&Jr(x)-v&&lh(S>32?Gb(x+";",r,t,v-1,p):Gb(ke(x," ","")+";",r,t,v-2,p),p);break;case 59:x+=";";default:if(lh(le=$b(x,e,t,m,_,a,d,K,oe=[],ae=[],v,o),o),X===123)if(_===0)hp(x,e,le,le,oe,o,v,d,ae);else switch(w===99&&un(x,3)===110?100:w){case 100:case 108:case 109:case 115:hp(n,le,le,r&&lh($b(n,le,le,0,0,a,d,K,a,oe=[],v,ae),ae),a,ae,v,d,r?oe:ae);break;default:hp(x,le,le,le,[""],ae,0,d,ae)}}m=_=S=0,U=H=1,K=x="",v=u;break;case 58:v=1+Jr(x),S=D;default:if(U<1){if(X==123)--U;else if(X==125&&U++==0&&EO()==125)continue}switch(x+=Vv(X),X*U){case 38:H=_>0?1:(x+="\f",-1);break;case 44:d[m++]=(Jr(x)-1)*H,H=1;break;case 64:_o()===45&&(x+=a_(Nr())),w=_o(),_=v=Jr(K=x+=SO(cp())),X++;break;case 45:D===45&&Jr(x)==2&&(U=0)}}return o}function $b(n,e,t,r,a,o,u,d,p,m,_,v){for(var w=a-1,S=a===0?o:[""],D=LS(S),U=0,L=0,H=0;U<r;++U)for(var X=0,K=Zl(n,w+1,w=VS(L=u[U])),oe=n;X<D;++X)(oe=MS(L>0?S[X]+" "+K:ke(K,/&\f/g,S[X])))&&(p[H++]=oe);return hm(n,e,t,a===0?um:d,p,m,_,v)}function CO(n,e,t,r){return hm(n,e,t,OS,Vv(vO()),Zl(n,2,-2),0,r)}function Gb(n,e,t,r,a){return hm(n,e,t,kv,Zl(n,0,r),Zl(n,r+1,-1),r,a)}function zS(n,e,t){switch(yO(n,e)){case 5103:return et+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+n+n;case 4789:return gh+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return et+n+gh+n+ct+n+n;case 5936:switch(un(n,e+11)){case 114:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return et+n+ct+n+n;case 6165:return et+n+ct+"flex-"+n+n;case 5187:return et+n+ke(n,/(\w+).+(:[^]+)/,et+"box-$1$2"+ct+"flex-$1$2")+n;case 5443:return et+n+ct+"flex-item-"+ke(n,/flex-|-self/g,"")+(qi(n,/flex-|baseline/)?"":ct+"grid-row-"+ke(n,/flex-|-self/g,""))+n;case 4675:return et+n+ct+"flex-line-pack"+ke(n,/align-content|flex-|-self/g,"")+n;case 5548:return et+n+ct+ke(n,"shrink","negative")+n;case 5292:return et+n+ct+ke(n,"basis","preferred-size")+n;case 6060:return et+"box-"+ke(n,"-grow","")+et+n+ct+ke(n,"grow","positive")+n;case 4554:return et+ke(n,/([^-])(transform)/g,"$1"+et+"$2")+n;case 6187:return ke(ke(ke(n,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),n,"")+n;case 5495:case 3959:return ke(n,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return ke(ke(n,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+n+n;case 4200:if(!qi(n,/flex-|baseline/))return ct+"grid-column-align"+Zl(n,e)+n;break;case 2592:case 3360:return ct+ke(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,a){return e=a,qi(r.props,/grid-\w+-end/)})?~up(n+(t=t[e].value),"span",0)?n:ct+ke(n,"-start","")+n+ct+"grid-row-span:"+(~up(t,"span",0)?qi(t,/\d+/):+qi(t,/\d+/)-+qi(n,/\d+/))+";":ct+ke(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return qi(r.props,/grid-\w+-start/)})?n:ct+ke(ke(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ke(n,/(.+)-inline(.+)/,et+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jr(n)-1-e>6)switch(un(n,e+1)){case 109:if(un(n,e+4)!==45)break;case 102:return ke(n,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+gh+(un(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~up(n,"stretch",0)?zS(ke(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return ke(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,o,u,d,p,m){return ct+a+":"+o+m+(u?ct+a+"-span:"+(d?p:+p-+o)+m:"")+n});case 4949:if(un(n,e+6)===121)return ke(n,":",":"+et)+n;break;case 6444:switch(un(n,un(n,14)===45?18:11)){case 120:return ke(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+et+(un(n,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+ct+"$2box$3")+n;case 100:return ke(n,":",":"+ct)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(n,"scroll-","scroll-snap-")+n}return n}function Dp(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function xO(n,e,t,r){switch(n.type){case gO:if(n.children.length)break;case mO:case kv:return n.return=n.return||n.value;case OS:return"";case kS:return n.return=n.value+"{"+Dp(n.children,r)+"}";case um:if(!Jr(n.value=n.props.join(",")))return""}return Jr(t=Dp(n.children,r))?n.return=n.value+"{"+t+"}":""}function DO(n){var e=LS(n);return function(t,r,a,o){for(var u="",d=0;d<e;d++)u+=n[d](t,r,a,o)||"";return u}}function PO(n){return function(e){e.root||(e=e.return)&&n(e)}}function NO(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case kv:n.return=zS(n.value,n.length,t);return;case kS:return Dp([Qs(n,{value:ke(n.value,"@","@"+et)})],r);case um:if(n.length)return _O(t=n.props,function(a){switch(qi(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Pl(Qs(n,{props:[ke(a,/:(read-\w+)/,":"+gh+"$1")]})),Pl(Qs(n,{props:[a]})),N_(n,{props:Hb(t,r)});break;case"::placeholder":Pl(Qs(n,{props:[ke(a,/:(plac\w+)/,":"+et+"input-$1")]})),Pl(Qs(n,{props:[ke(a,/:(plac\w+)/,":"+gh+"$1")]})),Pl(Qs(n,{props:[ke(a,/:(plac\w+)/,ct+"input-$1")]})),Pl(Qs(n,{props:[a]})),N_(n,{props:Hb(t,r)});break}return""})}}var OO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jn={},tu=typeof process<"u"&&Jn!==void 0&&(Jn.REACT_APP_SC_ATTR||Jn.SC_ATTR)||"data-styled",BS="active",FS="data-styled-version",fm="6.1.17",Mv=`/*!sc*/
`,Pp=typeof window<"u"&&"HTMLElement"in window,kO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Jn!==void 0&&Jn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Jn.REACT_APP_SC_DISABLE_SPEEDY!==""?Jn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Jn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Jn!==void 0&&Jn.SC_DISABLE_SPEEDY!==void 0&&Jn.SC_DISABLE_SPEEDY!==""&&Jn.SC_DISABLE_SPEEDY!=="false"&&Jn.SC_DISABLE_SPEEDY),pm=Object.freeze([]),nu=Object.freeze({});function VO(n,e,t){return t===void 0&&(t=nu),n.theme!==t.theme&&n.theme||e||t.theme}var jS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),MO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,LO=/(^-|-$)/g;function Kb(n){return n.replace(MO,"-").replace(LO,"")}var UO=/(a)(d)/gi,Wf=52,Qb=function(n){return String.fromCharCode(n+(n>25?39:97))};function V_(n){var e,t="";for(e=Math.abs(n);e>Wf;e=e/Wf|0)t=Qb(e%Wf)+t;return(Qb(e%Wf)+t).replace(UO,"$1-$2")}var o_,qS=5381,Hl=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},HS=function(n){return Hl(qS,n)};function zO(n){return V_(HS(n)>>>0)}function BO(n){return n.displayName||n.name||"Component"}function l_(n){return typeof n=="string"&&!0}var $S=typeof Symbol=="function"&&Symbol.for,GS=$S?Symbol.for("react.memo"):60115,FO=$S?Symbol.for("react.forward_ref"):60112,jO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},KS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},HO=((o_={})[FO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o_[GS]=KS,o_);function Yb(n){return("type"in(e=n)&&e.type.$$typeof)===GS?KS:"$$typeof"in n?HO[n.$$typeof]:jO;var e}var $O=Object.defineProperty,GO=Object.getOwnPropertyNames,Wb=Object.getOwnPropertySymbols,KO=Object.getOwnPropertyDescriptor,QO=Object.getPrototypeOf,Xb=Object.prototype;function QS(n,e,t){if(typeof e!="string"){if(Xb){var r=QO(e);r&&r!==Xb&&QS(n,r,t)}var a=GO(e);Wb&&(a=a.concat(Wb(e)));for(var o=Yb(n),u=Yb(e),d=0;d<a.length;++d){var p=a[d];if(!(p in qO||t&&t[p]||u&&p in u||o&&p in o)){var m=KO(e,p);try{$O(n,p,m)}catch{}}}}return n}function ru(n){return typeof n=="function"}function Lv(n){return typeof n=="object"&&"styledComponentId"in n}function fo(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Jb(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function Ph(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function M_(n,e,t){if(t===void 0&&(t=!1),!t&&!Ph(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=M_(n[r],e[r]);else if(Ph(e))for(var r in e)n[r]=M_(n[r],e[r]);return n}function Uv(n,e){Object.defineProperty(n,"toString",{value:e})}function sd(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var YO=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,o=a;e>=o;)if((o<<=1)<0)throw sd(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var u=a;u<o;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),p=(u=0,t.length);u<p;u++)this.tag.insertRule(d,t[u])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),a=r+t;this.groupSizes[e]=0;for(var o=r;o<a;o++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],a=this.indexOfGroup(e),o=a+r,u=a;u<o;u++)t+="".concat(this.tag.getRule(u)).concat(Mv);return t},n}(),dp=new Map,Np=new Map,fp=1,Xf=function(n){if(dp.has(n))return dp.get(n);for(;Np.has(fp);)fp++;var e=fp++;return dp.set(n,e),Np.set(e,n),e},WO=function(n,e){fp=e+1,dp.set(n,e),Np.set(e,n)},XO="style[".concat(tu,"][").concat(FS,'="').concat(fm,'"]'),JO=new RegExp("^".concat(tu,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ZO=function(n,e,t){for(var r,a=t.split(","),o=0,u=a.length;o<u;o++)(r=a[o])&&n.registerName(e,r)},ek=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(Mv),a=[],o=0,u=r.length;o<u;o++){var d=r[o].trim();if(d){var p=d.match(JO);if(p){var m=0|parseInt(p[1],10),_=p[2];m!==0&&(WO(_,m),ZO(n,_,p[3]),n.getTag().insertRules(m,a)),a.length=0}else a.push(d)}}},Zb=function(n){for(var e=document.querySelectorAll(XO),t=0,r=e.length;t<r;t++){var a=e[t];a&&a.getAttribute(tu)!==BS&&(ek(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function tk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var YS=function(n){var e=document.head,t=n||e,r=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(tu,"]")));return p[p.length-1]}(t),o=a!==void 0?a.nextSibling:null;r.setAttribute(tu,BS),r.setAttribute(FS,fm);var u=tk();return u&&r.setAttribute("nonce",u),t.insertBefore(r,o),r},nk=function(){function n(e){this.element=YS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,a=0,o=r.length;a<o;a++){var u=r[a];if(u.ownerNode===t)return u}throw sd(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),rk=function(){function n(e){this.element=YS(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),ik=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),eI=Pp,sk={isServer:!Pp,useCSSOMInjection:!kO},WS=function(){function n(e,t,r){e===void 0&&(e=nu),t===void 0&&(t={});var a=this;this.options=Fn(Fn({},sk),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Pp&&eI&&(eI=!1,Zb(this)),Uv(this,function(){return function(o){for(var u=o.getTag(),d=u.length,p="",m=function(v){var w=function(H){return Np.get(H)}(v);if(w===void 0)return"continue";var S=o.names.get(w),D=u.getGroup(v);if(S===void 0||!S.size||D.length===0)return"continue";var U="".concat(tu,".g").concat(v,'[id="').concat(w,'"]'),L="";S!==void 0&&S.forEach(function(H){H.length>0&&(L+="".concat(H,","))}),p+="".concat(D).concat(U,'{content:"').concat(L,'"}').concat(Mv)},_=0;_<d;_++)m(_);return p}(a)})}return n.registerId=function(e){return Xf(e)},n.prototype.rehydrate=function(){!this.server&&Pp&&Zb(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Fn(Fn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,a=t.target;return t.isServer?new ik(a):r?new nk(a):new rk(a)}(this.options),new YO(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Xf(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(Xf(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Xf(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),ak=/&/g,ok=/^\s*\/\/.*$/gm;function XS(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=XS(t.children,e)),t})}function lk(n){var e,t,r,a=nu,o=a.options,u=o===void 0?nu:o,d=a.plugins,p=d===void 0?pm:d,m=function(w,S,D){return D.startsWith(t)&&D.endsWith(t)&&D.replaceAll(t,"").length>0?".".concat(e):w},_=p.slice();_.push(function(w){w.type===um&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(ak,t).replace(r,m))}),u.prefix&&_.push(NO),_.push(xO);var v=function(w,S,D,U){S===void 0&&(S=""),D===void 0&&(D=""),U===void 0&&(U="&"),e=U,t=S,r=new RegExp("\\".concat(t,"\\b"),"g");var L=w.replace(ok,""),H=RO(D||S?"".concat(D," ").concat(S," { ").concat(L," }"):L);u.namespace&&(H=XS(H,u.namespace));var X=[];return Dp(H,DO(_.concat(PO(function(K){return X.push(K)})))),X};return v.hash=p.length?p.reduce(function(w,S){return S.name||sd(15),Hl(w,S.name)},qS).toString():"",v}var uk=new WS,L_=lk(),JS=xh.createContext({shouldForwardProp:void 0,styleSheet:uk,stylis:L_});JS.Consumer;xh.createContext(void 0);function tI(){return W.useContext(JS)}var ck=function(){function n(e,t){var r=this;this.inject=function(a,o){o===void 0&&(o=L_);var u=r.name+o.hash;a.hasNameForId(r.id,u)||a.insertRules(r.id,u,o(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Uv(this,function(){throw sd(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=L_),this.name+e.hash},n}(),hk=function(n){return n>="A"&&n<="Z"};function nI(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;hk(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var ZS=function(n){return n==null||n===!1||n===""},eR=function(n){var e,t,r=[];for(var a in n){var o=n[a];n.hasOwnProperty(a)&&!ZS(o)&&(Array.isArray(o)&&o.isCss||ru(o)?r.push("".concat(nI(a),":"),o,";"):Ph(o)?r.push.apply(r,xp(xp(["".concat(a," {")],eR(o),!1),["}"],!1)):r.push("".concat(nI(a),": ").concat((e=a,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in OO||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function vo(n,e,t,r){if(ZS(n))return[];if(Lv(n))return[".".concat(n.styledComponentId)];if(ru(n)){if(!ru(o=n)||o.prototype&&o.prototype.isReactComponent||!e)return[n];var a=n(e);return vo(a,e,t,r)}var o;return n instanceof ck?t?(n.inject(t,r),[n.getName(r)]):[n]:Ph(n)?eR(n):Array.isArray(n)?Array.prototype.concat.apply(pm,n.map(function(u){return vo(u,e,t,r)})):[n.toString()]}function dk(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(ru(t)&&!Lv(t))return!1}return!0}var fk=HS(fm),pk=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&dk(e),this.componentId=t,this.baseHash=Hl(fk,t),this.baseStyle=r,WS.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=fo(a,this.staticRulesId);else{var o=Jb(vo(this.rules,e,t,r)),u=V_(Hl(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,u)){var d=r(o,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,d)}a=fo(a,u),this.staticRulesId=u}else{for(var p=Hl(this.baseHash,r.hash),m="",_=0;_<this.rules.length;_++){var v=this.rules[_];if(typeof v=="string")m+=v;else if(v){var w=Jb(vo(v,e,t,r));p=Hl(p,w+_),m+=w}}if(m){var S=V_(p>>>0);t.hasNameForId(this.componentId,S)||t.insertRules(this.componentId,S,r(m,".".concat(S),void 0,this.componentId)),a=fo(a,S)}}return a},n}(),tR=xh.createContext(void 0);tR.Consumer;var u_={};function mk(n,e,t){var r=Lv(n),a=n,o=!l_(n),u=e.attrs,d=u===void 0?pm:u,p=e.componentId,m=p===void 0?function(oe,ae){var le=typeof oe!="string"?"sc":Kb(oe);u_[le]=(u_[le]||0)+1;var x="".concat(le,"-").concat(zO(fm+le+u_[le]));return ae?"".concat(ae,"-").concat(x):x}(e.displayName,e.parentComponentId):p,_=e.displayName,v=_===void 0?function(oe){return l_(oe)?"styled.".concat(oe):"Styled(".concat(BO(oe),")")}(n):_,w=e.displayName&&e.componentId?"".concat(Kb(e.displayName),"-").concat(e.componentId):e.componentId||m,S=r&&a.attrs?a.attrs.concat(d).filter(Boolean):d,D=e.shouldForwardProp;if(r&&a.shouldForwardProp){var U=a.shouldForwardProp;if(e.shouldForwardProp){var L=e.shouldForwardProp;D=function(oe,ae){return U(oe,ae)&&L(oe,ae)}}else D=U}var H=new pk(t,w,r?a.componentStyle:void 0);function X(oe,ae){return function(le,x,R){var A=le.attrs,P=le.componentStyle,V=le.defaultProps,B=le.foldedComponentIds,N=le.styledComponentId,Nt=le.target,It=xh.useContext(tR),de=tI(),Ie=le.shouldForwardProp||de.shouldForwardProp,we=VO(x,It,V)||nu,Oe=function(xe,Ce,ut){for(var Me,Je=Fn(Fn({},Ce),{className:void 0,theme:ut}),Ke=0;Ke<xe.length;Ke+=1){var Ut=ru(Me=xe[Ke])?Me(Je):Me;for(var Zt in Ut)Je[Zt]=Zt==="className"?fo(Je[Zt],Ut[Zt]):Zt==="style"?Fn(Fn({},Je[Zt]),Ut[Zt]):Ut[Zt]}return Ce.className&&(Je.className=fo(Je.className,Ce.className)),Je}(A,x,we),O=Oe.as||Nt,ie={};for(var ye in Oe)Oe[ye]===void 0||ye[0]==="$"||ye==="as"||ye==="theme"&&Oe.theme===we||(ye==="forwardedAs"?ie.as=Oe.forwardedAs:Ie&&!Ie(ye,O)||(ie[ye]=Oe[ye]));var me=function(xe,Ce){var ut=tI(),Me=xe.generateAndInjectStyles(Ce,ut.styleSheet,ut.stylis);return Me}(P,Oe),pe=fo(B,N);return me&&(pe+=" "+me),Oe.className&&(pe+=" "+Oe.className),ie[l_(O)&&!jS.has(O)?"class":"className"]=pe,R&&(ie.ref=R),W.createElement(O,ie)}(K,oe,ae)}X.displayName=v;var K=xh.forwardRef(X);return K.attrs=S,K.componentStyle=H,K.displayName=v,K.shouldForwardProp=D,K.foldedComponentIds=r?fo(a.foldedComponentIds,a.styledComponentId):"",K.styledComponentId=w,K.target=r?a.target:n,Object.defineProperty(K,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(oe){this._foldedDefaultProps=r?function(ae){for(var le=[],x=1;x<arguments.length;x++)le[x-1]=arguments[x];for(var R=0,A=le;R<A.length;R++)M_(ae,A[R],!0);return ae}({},a.defaultProps,oe):oe}}),Uv(K,function(){return".".concat(K.styledComponentId)}),o&&QS(K,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),K}function rI(n,e){for(var t=[n[0]],r=0,a=e.length;r<a;r+=1)t.push(e[r],n[r+1]);return t}var iI=function(n){return Object.assign(n,{isCss:!0})};function gk(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(ru(n)||Ph(n))return iI(vo(rI(pm,xp([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?vo(r):iI(vo(rI(r,e)))}function U_(n,e,t){if(t===void 0&&(t=nu),!e)throw sd(1,e);var r=function(a){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return n(e,t,gk.apply(void 0,xp([a],o,!1)))};return r.attrs=function(a){return U_(n,e,Fn(Fn({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return U_(n,e,Fn(Fn({},t),a))},r}var nR=function(n){return U_(mk,n)},ue=nR;jS.forEach(function(n){ue[n]=nR(n)});const yk=ue.div`
    padding: 72px 24px;
    display: flex;
    flex-direction: column;
    gap: 48px;
    border-right: 1px solid #d9d9d9;
    height: 100%;
    background-color: #fff;
    align-items: center;
`,c_=ue.img`
    transition : transform 0.1s ease;
    width: 36px;

    &:hover{
    transform: scale(1.2);
    }
`;function zv(){const n=xu();return $.jsxs(yk,{children:[$.jsx(c_,{src:"/Logo.svg",onClick:e=>{n("/")}}),$.jsx(c_,{src:"/Home.svg",onClick:e=>{n("/")}}),$.jsx(c_,{src:"/Add.svg",onClick:e=>{n("/write")}})]})}const rR=ue.button`
    width: fit-content; 
    background-color: #222222;
    padding: 8px 16px;
    color: white;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    i {
        font-size: 16px;
    }
`,_k=ue(rR)`
    background-color: #FF2E1A;
    border: none;
`;function Bv(n){const{title:e,onClick:t,icon:r,type:a}=n,o=a==="delete"?_k:rR;return $.jsxs(o,{onClick:t,children:[r&&$.jsx("i",{className:r}),e||"작성하기"]})}const vk=ue.div`
  width: fit-content;
  padding: 12px 18px;
  border: 1px solid ${({selected:n})=>n?"#FF2E1A":"#fff"};
  background-color: ${({selected:n})=>n?"#fff":"#f3f3f3"};
  color: ${({selected:n})=>n?"#FF2E1A":"#666666"};
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;

  display:flex;
  gap: 24px;
  align-items: center;

  i {
    margin-right: 4px;
  }

  &:hover{
    background-color: #eeeeee;
  }

  & > span{
    width:22px;
    height:22px;
    border-radius: 2px;
    background-color: ${({selected:n})=>n?"#FF2E1A":"#d9d9d9"};
    color:${({selected:n})=>n?"#fff":"#666666"};
    text-align: center;
    line-height: 22px;
  }
`;function Ek(n){const{categoryName:e,icon:t,selected:r,onClick:a,count:o}=n;return $.jsxs(vk,{selected:r,onClick:a,children:[$.jsxs("p",{children:[t,e]}),$.jsx("span",{children:o})]})}const Tk=ue.div`
    width: 100%;
    padding: 12px 12px;

    display: flex;
    align-items: center;
    justify-contents: flex-start;
    gap: 8px;

    border: 1px solid #d9d9d9;
    border-radius: 2px;
`;function wk({selectedCategory:n,setSelectedCategory:e,posts:t}){const r=["전체","일상 공유","정보 공유","메모장","편지"],a=o=>o==="전체"?t.length:t.filter(u=>u.category===o).length;return $.jsx(Tk,{children:r.map(o=>$.jsx(Ek,{icon:$.jsx("i",{className:"fa-regular fa-file-lines"}),categoryName:o,count:a(o),selected:n===o,onClick:()=>e(o)},o))})}const bk=ue.div`
    display: flex;
    gap: 8px;
    align-items: center;
`,Ik=ue.div`
    width: 28px;
    height:28px;    
    border-radius: 24px;
    background-image: url(${"/Icon.png"});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`,Ak=ue.p`
    font-size: 16px;
    color: #444444;
    font-weight: 600;
`;function iR(n){const{name:e}=n;return $.jsxs(bk,{children:[$.jsx(Ik,{}),$.jsx(Ak,{children:e})]})}const Sk=ue.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;

    cursor: pointer;
    background-color: #f8f8f8;
    border-radius: 2px;
`,Rk=ue.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    flex-grow: 1;
    white-space: pre-line;

    & > h1{
        font-size: 20px;
        color: #222222;
        font-weight: bold;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

     & > p {
    color: #888888;
    font-size: 16px;
    font-weight: 400;
    display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

`,Ck=ue.div`
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border: 0.5px solid #f3f3f3;
`,xk=ue.img`
    width: 100%;
`,Dk=ue.div`
    width: 100%;
    height: 300px;
    overflow: hidden;
    background-color: #fff;
`,Pk=ue.div`
    display: flex;
    gap: 4px;
    align-items: center;
`,Nk=ue.span`
    padding: 4px 8px;
    background-color: #eeeeee;
    color: #666666;
    width: fit-content;
    gap:2px;
    font-weight:600;
    font-size: 14px;
`,Ok=ue.div`
    display: flex;
    gap: 6px;
    flex-Wrap: wrap;
    max-height: 60px;
    overflow-y: hidden;
`;function kk(n){const{post:e,onClick:t}=n;return!e||!e.title?null:$.jsxs(Sk,{onClick:t,children:[e.image&&$.jsxs(Dk,{children:[" ",$.jsx(xk,{src:e.image,alt:"업로드된 이미지"})]}),$.jsxs(Rk,{noImage:!e.image,children:[$.jsx(Ok,{children:e.hashtag&&e.hashtag.map((r,a)=>$.jsxs(Nk,{children:["#",r]},a))}),$.jsx("h1",{children:e.title}),$.jsx("p",{children:e.content})]}),$.jsxs(Ck,{children:[$.jsxs(Pk,{children:[$.jsx("i",{className:"fa-solid fa-comment"}),$.jsx("span",{style:{color:"#222222"},children:e.comments.length})]}),e.date]})]})}const Vk=ue.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
`,Mk=ue.p`
    fontSize: '24px';
    color: '#888888';
`;function Lk(n){const{posts:e,itemClicked:t}=n,r=[...e].sort((o,u)=>u.id-o.id);if(!e||e.length===0)return $.jsxs("div",{style:{width:"100%",textAlign:"center",padding:"48px 0"},children:[$.jsx("img",{src:"/empty.png",style:{width:"600px",marginBottom:"16px"}}),$.jsx(Mk,{children:"카테고리에 게시글이 없습니다."})]});const a=r.map((o,u)=>$.jsx(kk,{post:o,onClick:d=>t(o)},o.id));return $.jsx(Vk,{children:a})}const Uk=()=>{};var sI={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let a=n.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},zk=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const a=n[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=n[t++];e[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=n[t++],u=n[t++],d=n[t++],p=((a&7)<<18|(o&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const o=n[t++],u=n[t++];e[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|u&63)}}return e.join("")},aR={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<n.length;a+=3){const o=n[a],u=a+1<n.length,d=u?n[a+1]:0,p=a+2<n.length,m=p?n[a+2]:0,_=o>>2,v=(o&3)<<4|d>>4;let w=(d&15)<<2|m>>6,S=m&63;p||(S=64,u||(w=64)),r.push(t[_],t[v],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(sR(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zk(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<n.length;){const o=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const m=a<n.length?t[n.charAt(a)]:64;++a;const v=a<n.length?t[n.charAt(a)]:64;if(++a,o==null||d==null||m==null||v==null)throw new Bk;const w=o<<2|d>>4;if(r.push(w),m!==64){const S=d<<4&240|m>>2;if(r.push(S),v!==64){const D=m<<6&192|v;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fk=function(n){const e=sR(n);return aR.encodeByteArray(e,!0)},Op=function(n){return Fk(n).replace(/\./g,"")},Fv=function(n){try{return aR.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function kp(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!jk(t)||(n[t]=kp(n[t],e[t]));return n}function jk(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=()=>jv().__FIREBASE_DEFAULTS__,Hk=()=>{if(typeof process>"u"||typeof sI>"u")return;const n=sI.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$k=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Fv(n[1]);return e&&JSON.parse(e)},qv=()=>{try{return Uk()||qk()||Hk()||$k()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},oR=()=>{var n;return(n=qv())===null||n===void 0?void 0:n.config},Gk=n=>{var e;return(e=qv())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Op(JSON.stringify(t)),Op(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Hv(){var n;const e=(n=qv())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wk(){return typeof window<"u"||lR()}function lR(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function Xk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $v(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cR(){const n=wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hR(){return!Hv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nh(){try{return typeof indexedDB=="object"}catch{return!1}}function Jk(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="FirebaseError";class kn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Zk,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vo.prototype.create)}}class Vo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,o=this.errors[e],u=o?eV(o,r):"Error",d=`${this.serviceName}: ${u} (${a}).`;return new kn(a,d,r)}}function eV(n,e){return n.replace(tV,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const tV=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aI(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function nV(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ia(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const o=n[a],u=e[a];if(oI(o)&&oI(u)){if(!ia(o,u))return!1}else if(o!==u)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function oI(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $l(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,o]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(o)}}),e}function uh(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function dR(n,e){const t=new rV(n,e);return t.subscribe.bind(t)}class rV{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");iV(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=h_),a.error===void 0&&(a.error=h_),a.complete===void 0&&(a.complete=h_);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iV(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function h_(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n){return n&&n._delegate?n._delegate:n}class ci{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Kk;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oV(e))try{this.getOrInitializeService({instanceIdentifier:io})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch{}}}}clearInstance(e=io){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=io){return this.instances.has(e)}getOptions(e=io){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(o);r===d&&u.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aV(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=io){return this.component?this.component.multipleInstances?e:io:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aV(n){return n===io?void 0:n}function oV(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sV(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=[];var ze;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ze||(ze={}));const pR={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},lV=ze.INFO,uV={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},cV=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),a=uV[e];if(a)console[a](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class mm{constructor(e){this.name=e,this._logLevel=lV,this._logHandler=cV,this._userLogHandler=null,Gv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}function hV(n){Gv.forEach(e=>{e.setLogLevel(n)})}function dV(n,e){for(const t of Gv){let r=null;e&&e.level&&(r=pR[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(a,o,...u)=>{const d=u.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");o>=(r??a.logLevel)&&n({level:ze[o].toLowerCase(),message:d,args:u,type:a.name})}}}const fV=(n,e)=>e.some(t=>n instanceof t);let lI,uI;function pV(){return lI||(lI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mV(){return uI||(uI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mR=new WeakMap,z_=new WeakMap,gR=new WeakMap,d_=new WeakMap,Kv=new WeakMap;function gV(n){const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{t(Zs(n.result)),a()},u=()=>{r(n.error),a()};n.addEventListener("success",o),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&mR.set(t,n)}).catch(()=>{}),Kv.set(e,n),e}function yV(n){if(z_.has(n))return;const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{t(),a()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});z_.set(n,e)}let B_={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return z_.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gR.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _V(n){B_=n(B_)}function vV(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(f_(this),e,...t);return gR.set(r,e.sort?e.sort():[e]),Zs(r)}:mV().includes(n)?function(...e){return n.apply(f_(this),e),Zs(mR.get(this))}:function(...e){return Zs(n.apply(f_(this),e))}}function EV(n){return typeof n=="function"?vV(n):(n instanceof IDBTransaction&&yV(n),fV(n,pV())?new Proxy(n,B_):n)}function Zs(n){if(n instanceof IDBRequest)return gV(n);if(d_.has(n))return d_.get(n);const e=EV(n);return e!==n&&(d_.set(n,e),Kv.set(e,n)),e}const f_=n=>Kv.get(n);function TV(n,e,{blocked:t,upgrade:r,blocking:a,terminated:o}={}){const u=indexedDB.open(n,e),d=Zs(u);return r&&u.addEventListener("upgradeneeded",p=>{r(Zs(u.result),p.oldVersion,p.newVersion,Zs(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{o&&p.addEventListener("close",()=>o()),a&&p.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const wV=["get","getKey","getAll","getAllKeys","count"],bV=["put","add","delete","clear"],p_=new Map;function cI(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(p_.get(e))return p_.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=bV.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||wV.includes(t)))return;const o=async function(u,...d){const p=this.transaction(u,a?"readwrite":"readonly");let m=p.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&p.done]))[0]};return p_.set(e,o),o}_V(n=>({...n,get:(e,t,r)=>cI(e,t)||n.get(e,t,r),has:(e,t)=>!!cI(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(AV(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function AV(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vp="@firebase/app",F_="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new mm("@firebase/app"),SV="@firebase/app-compat",RV="@firebase/analytics-compat",CV="@firebase/analytics",xV="@firebase/app-check-compat",DV="@firebase/app-check",PV="@firebase/auth",NV="@firebase/auth-compat",OV="@firebase/database",kV="@firebase/data-connect",VV="@firebase/database-compat",MV="@firebase/functions",LV="@firebase/functions-compat",UV="@firebase/installations",zV="@firebase/installations-compat",BV="@firebase/messaging",FV="@firebase/messaging-compat",jV="@firebase/performance",qV="@firebase/performance-compat",HV="@firebase/remote-config",$V="@firebase/remote-config-compat",GV="@firebase/storage",KV="@firebase/storage-compat",QV="@firebase/firestore",YV="@firebase/vertexai",WV="@firebase/firestore-compat",XV="firebase",JV="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="[DEFAULT]",ZV={[Vp]:"fire-core",[SV]:"fire-core-compat",[CV]:"fire-analytics",[RV]:"fire-analytics-compat",[DV]:"fire-app-check",[xV]:"fire-app-check-compat",[PV]:"fire-auth",[NV]:"fire-auth-compat",[OV]:"fire-rtdb",[kV]:"fire-data-connect",[VV]:"fire-rtdb-compat",[MV]:"fire-fn",[LV]:"fire-fn-compat",[UV]:"fire-iid",[zV]:"fire-iid-compat",[BV]:"fire-fcm",[FV]:"fire-fcm-compat",[jV]:"fire-perf",[qV]:"fire-perf-compat",[HV]:"fire-rc",[$V]:"fire-rc-compat",[GV]:"fire-gcs",[KV]:"fire-gcs-compat",[QV]:"fire-fst",[WV]:"fire-fst-compat",[YV]:"fire-vertex","fire-js":"fire-js",[XV]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new Map,iu=new Map,su=new Map;function Oh(n,e){try{n.container.addComponent(e)}catch(t){Yi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function yR(n,e){n.container.addOrOverwriteComponent(e)}function oa(n){const e=n.name;if(su.has(e))return Yi.debug(`There were multiple attempts to register component ${e}.`),!1;su.set(e,n);for(const t of aa.values())Oh(t,n);for(const t of iu.values())Oh(t,n);return!0}function _R(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function eM(n,e,t=sa){_R(n,e).clearInstance(t)}function vR(n){return n.options!==void 0}function ft(n){return n==null?!1:n.settings!==void 0}function tM(){su.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Vo("app","Firebase",nM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ER=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(n,e){const t=Fv(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,o=new Date().getTime();a-o<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class rM extends ER{constructor(e,t,r,a){const o=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,u={name:r,automaticDataCollectionEnabled:o};if(e.apiKey!==void 0)super(e,u,a);else{const d=e;super(d.options,u,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},t),this._serverConfig.authIdToken&&hI(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&hI(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Or(Vp,F_,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Yv(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Tr.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=JV;function Qv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sa,automaticDataCollectionEnabled:!1},e),a=r.name;if(typeof a!="string"||!a)throw Tr.create("bad-app-name",{appName:String(a)});if(t||(t=oR()),!t)throw Tr.create("no-options");const o=aa.get(a);if(o){if(ia(t,o.options)&&ia(r,o.config))return o;throw Tr.create("duplicate-app",{appName:a})}const u=new fR(a);for(const p of su.values())u.addComponent(p);const d=new ER(t,r,u);return aa.set(a,d),d}function iM(n,e){if(Wk()&&!lR())throw Tr.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;vR(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const a=m=>[...m].reduce((_,v)=>Math.imul(31,_)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Tr.create("finalization-registry-not-supported",{});const o=""+a(JSON.stringify(r)),u=iu.get(o);if(u)return u.incRefCount(e.releaseOnDeref),u;const d=new fR(o);for(const m of su.values())d.addComponent(m);const p=new rM(t,e,o,d);return iu.set(o,p),p}function sM(n=sa){const e=aa.get(n);if(!e&&n===sa&&oR())return Qv();if(!e)throw Tr.create("no-app",{appName:n});return e}function aM(){return Array.from(aa.values())}async function Yv(n){let e=!1;const t=n.name;aa.has(t)?(e=!0,aa.delete(t)):iu.has(t)&&n.decRefCount()<=0&&(iu.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Or(n,e,t){var r;let a=(r=ZV[n])!==null&&r!==void 0?r:n;t&&(a+=`-${t}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const d=[`Unable to register library "${a}" with version "${e}":`];o&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yi.warn(d.join(" "));return}oa(new ci(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function TR(n,e){if(n!==null&&typeof n!="function")throw Tr.create("invalid-log-argument");dV(n,e)}function wR(n){hV(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM="firebase-heartbeat-database",lM=1,kh="firebase-heartbeat-store";let m_=null;function bR(){return m_||(m_=TV(oM,lM,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(kh)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tr.create("idb-open",{originalErrorMessage:n.message})})),m_}async function uM(n){try{const t=(await bR()).transaction(kh),r=await t.objectStore(kh).get(IR(n));return await t.done,r}catch(e){if(e instanceof kn)Yi.warn(e.message);else{const t=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yi.warn(t.message)}}}async function dI(n,e){try{const r=(await bR()).transaction(kh,"readwrite");await r.objectStore(kh).put(e,IR(n)),await r.done}catch(t){if(t instanceof kn)Yi.warn(t.message);else{const r=Tr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Yi.warn(r.message)}}}function IR(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=1024,hM=30;class dM{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pM(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=fI();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>hM){const u=mM(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Yi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fI(),{heartbeatsToSend:r,unsentEntries:a}=fM(this._heartbeatsCache.heartbeats),o=Op(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Yi.warn(t),""}}}function fI(){return new Date().toISOString().substring(0,10)}function fM(n,e=cM){const t=[];let r=n.slice();for(const a of n){const o=t.find(u=>u.agent===a.agent);if(o){if(o.dates.push(a.date),pI(t)>e){o.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),pI(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class pM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nh()?Jk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await uM(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return dI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return dI(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function pI(n){return Op(JSON.stringify({version:2,heartbeats:n})).length}function mM(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gM(n){oa(new ci("platform-logger",e=>new IV(e),"PRIVATE")),oa(new ci("heartbeat",e=>new dM(e),"PRIVATE")),Or(Vp,F_,n),Or(Vp,F_,"esm2017"),Or("fire-js","")}gM("");const yM=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:kn,SDK_VERSION:_a,_DEFAULT_ENTRY_NAME:sa,_addComponent:Oh,_addOrOverwriteComponent:yR,_apps:aa,_clearComponents:tM,_components:su,_getProvider:_R,_isFirebaseApp:vR,_isFirebaseServerApp:ft,_registerComponent:oa,_removeServiceInstance:eM,_serverApps:iu,deleteApp:Yv,getApp:sM,getApps:aM,initializeApp:Qv,initializeServerApp:iM,onLog:TR,registerVersion:Or,setLogLevel:wR},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e,t){this._delegate=e,this.firebase=t,Oh(e,new ci("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Yv(this._delegate)))}_getService(e,t=sa){var r;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((r=a.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=sa){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Oh(this._delegate,e)}_addOrOverwriteComponent(e){yR(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vM={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},mI=new Vo("app-compat","Firebase",vM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(n){const e={},t={__esModule:!0,initializeApp:o,app:a,registerVersion:Or,setLogLevel:wR,onLog:TR,apps:null,SDK_VERSION:_a,INTERNAL:{registerComponent:d,removeApp:r,useAsService:p,modularAPIs:yM}};t.default=t,Object.defineProperty(t,"apps",{get:u});function r(m){delete e[m]}function a(m){if(m=m||sa,!aI(e,m))throw mI.create("no-app",{appName:m});return e[m]}a.App=n;function o(m,_={}){const v=Qv(m,_);if(aI(e,v.name))return e[v.name];const w=new n(v,t);return e[v.name]=w,w}function u(){return Object.keys(e).map(m=>e[m])}function d(m){const _=m.name,v=_.replace("-compat","");if(oa(m)&&m.type==="PUBLIC"){const w=(S=a())=>{if(typeof S[v]!="function")throw mI.create("invalid-app-argument",{appName:_});return S[v]()};m.serviceProps!==void 0&&kp(w,m.serviceProps),t[v]=w,n.prototype[v]=function(...S){return this._getService.bind(this,_).apply(this,m.multipleInstances?S:[])}}return m.type==="PUBLIC"?t[v]:null}function p(m,_){return _==="serverAuth"?null:_}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(){const n=EM(_M);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:AR,extendNamespace:e,createSubscribe:dR,ErrorFactory:Vo,deepExtend:kp});function e(t){kp(n,t)}return n}const TM=AR();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=new mm("@firebase/app-compat"),wM="@firebase/app-compat",bM="0.2.54";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IM(n){Or(wM,bM,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=jv();if(n.firebase!==void 0){gI.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&gI.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Nu=TM;IM();var AM="firebase",SM="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nu.registerVersion(AM,SM,"app-compat");const Zc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Nl={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function SR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CM=RM,xM=SR,RR=new Vo("auth","Firebase",SR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new mm("@firebase/auth");function DM(n,...e){Mp.logLevel<=ze.WARN&&Mp.warn(`Auth (${_a}): ${n}`,...e)}function pp(n,...e){Mp.logLevel<=ze.ERROR&&Mp.error(`Auth (${_a}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n,...e){throw Xv(n,...e)}function Xt(n,...e){return Xv(n,...e)}function Wv(n,e,t){const r=Object.assign(Object.assign({},xM()),{[e]:t});return new Vo("auth","Firebase",r).create(e,{appName:n.name})}function hn(n){return Wv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ou(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(n,"argument-error"),Wv(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xv(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return RR.create(n,...e)}function se(n,e,...t){if(!n)throw Xv(e,...t)}function ii(n){const e="INTERNAL ASSERTION FAILED: "+n;throw pp(e),new Error(e)}function kr(n,e){n||ii(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Jv(){return yI()==="http:"||yI()==="https:"}function yI(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jv()||uR()||"connection"in navigator)?navigator.onLine:!0}function NM(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=Yk()||$v()}get(){return PM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(n,e){kr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ii("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ii("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ii("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VM=new ad(3e4,6e4);function Dt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pt(n,e,t,r,a={}){return xR(n,a,async()=>{let o={},u={};r&&(e==="GET"?u=r:o={body:JSON.stringify(r)});const d=Pu(Object.assign({key:n.config.apiKey},u)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:p},o);return Xk()||(m.referrerPolicy="no-referrer"),CR.fetch()(await DR(n,n.config.apiHost,t,d),m)})}async function xR(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},OM),e);try{const a=new LM(n),o=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw ch(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const d=o.ok?u.errorMessage:u.error.message,[p,m]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ch(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw ch(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw ch(n,"user-disabled",u);const _=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Wv(n,_,m);vn(n,_)}}catch(a){if(a instanceof kn)throw a;vn(n,"network-request-failed",{message:String(a)})}}async function es(n,e,t,r,a={}){const o=await Pt(n,e,t,r,a);return"mfaPendingCredential"in o&&vn(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function DR(n,e,t,r){const a=`${e}${t}?${r}`,o=n,u=o.config.emulator?Zv(n.config,a):`${n.config.apiScheme}://${a}`;return kM.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(u).toString():u}function MM(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),VM.get())})}}function ch(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Xt(n,e,r);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(n){return n!==void 0&&n.getResponse!==void 0}function vI(n){return n!==void 0&&n.enterprise!==void 0}class PR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return MM(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UM(n){return(await Pt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function NR(n,e){return Pt(n,"GET","/v2/recaptchaConfig",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zM(n,e){return Pt(n,"POST","/v1/accounts:delete",e)}async function BM(n,e){return Pt(n,"POST","/v1/accounts:update",e)}async function Lp(n,e){return Pt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FM(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),a=gm(r);se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const o=typeof a.firebase=="object"?a.firebase:void 0,u=o==null?void 0:o.sign_in_provider;return{claims:a,token:r,authTime:yh(g_(a.auth_time)),issuedAtTime:yh(g_(a.iat)),expirationTime:yh(g_(a.exp)),signInProvider:u||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function g_(n){return Number(n)*1e3}function gm(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return pp("JWT malformed, contained fewer than 3 sections"),null;try{const a=Fv(t);return a?JSON.parse(a):(pp("Failed to decode base64 JWT payload"),null)}catch(a){return pp("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function EI(n){const e=gm(n);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof kn&&jM(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function jM({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yh(this.lastLoginAt),this.creationTime=yh(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh(n){var e;const t=n.auth,r=await n.getIdToken(),a=await Wi(n,Lp(t,{idToken:r}));se(a==null?void 0:a.users.length,t,"internal-error");const o=a.users[0];n._notifyReloadListener(o);const u=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?OR(o.providerUserInfo):[],d=$M(n.providerData,u),p=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!(d!=null&&d.length),_=p?m:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new j_(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(n,v)}async function HM(n){const e=Ae(n);await Mh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $M(n,e){return[...n.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function OR(n){return n.map(e=>{var{providerId:t}=e,r=Ov(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GM(n,e){const t=await xR(n,{},async()=>{const r=Pu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:o}=n.config,u=await DR(n,a,"/v1/token",`key=${o}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",CR.fetch()(u,{method:"POST",headers:d,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function KM(n,e){return Pt(n,"POST","/v2/accounts:revokeToken",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):EI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=EI(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:o}=await GM(e,t);this.updateTokensAndExpiration(r,a,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:o}=t,u=new Kl;return r&&(se(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),a&&(se(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),o&&(se(typeof o=="number","internal-error",{appName:e}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kl,this.toJSON())}_performRefresh(){return ii("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n,e){se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pr{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,o=Ov(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new j_(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return FM(this,e)}reload(){return HM(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Mh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await Wi(this,zM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,o,u,d,p,m,_;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,D=(u=t.photoURL)!==null&&u!==void 0?u:void 0,U=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,H=(m=t.createdAt)!==null&&m!==void 0?m:void 0,X=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:K,emailVerified:oe,isAnonymous:ae,providerData:le,stsTokenManager:x}=t;se(K&&x,e,"internal-error");const R=Kl.fromJSON(this.name,x);se(typeof K=="string",e,"internal-error"),qs(v,e.name),qs(w,e.name),se(typeof oe=="boolean",e,"internal-error"),se(typeof ae=="boolean",e,"internal-error"),qs(S,e.name),qs(D,e.name),qs(U,e.name),qs(L,e.name),qs(H,e.name),qs(X,e.name);const A=new Pr({uid:K,auth:e,email:w,emailVerified:oe,displayName:v,isAnonymous:ae,photoURL:D,phoneNumber:S,tenantId:U,stsTokenManager:R,createdAt:H,lastLoginAt:X});return le&&Array.isArray(le)&&(A.providerData=le.map(P=>Object.assign({},P))),L&&(A._redirectEventId=L),A}static async _fromIdTokenResponse(e,t,r=!1){const a=new Kl;a.updateFromServerResponse(t);const o=new Pr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Mh(o),o}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];se(a.localId!==void 0,"internal-error");const o=a.providerUserInfo!==void 0?OR(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(o!=null&&o.length),d=new Kl;d.updateFromIdToken(r);const p=new Pr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new j_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(o!=null&&o.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=new Map;function tr(n){kr(n instanceof Function,"Expected a class definition");let e=TI.get(n);return e?(kr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,TI.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kR.type="NONE";const au=kR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n,e,t){return`firebase:${n}:${e}:${t}`}class Ql{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:o}=this.auth;this.fullUserKey=Eo(this.userKey,a.apiKey,o),this.fullPersistenceKey=Eo("persistence",a.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lp(this.auth,{idToken:e}).catch(()=>{});return t?Pr._fromGetAccountInfoResponse(this.auth,t,e):null}return Pr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ql(tr(au),e,r);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let o=a[0]||tr(au);const u=Eo(r,e.config.apiKey,e.name);let d=null;for(const m of t)try{const _=await m._get(u);if(_){let v;if(typeof _=="string"){const w=await Lp(e,{idToken:_}).catch(()=>{});if(!w)break;v=await Pr._fromGetAccountInfoResponse(e,w,_)}else v=Pr._fromJSON(e,_);m!==o&&(d=v),o=m;break}}catch{}const p=a.filter(m=>m._shouldAllowMigration);return!o._shouldAllowMigration||!p.length?new Ql(o,e,r):(o=p[0],d&&await o._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==o)try{await m._remove(u)}catch{}})),new Ql(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(UR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zR(e))return"Blackberry";if(BR(e))return"Webos";if(MR(e))return"Safari";if((e.includes("chrome/")||LR(e))&&!e.includes("edge/"))return"Chrome";if(od(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VR(n=wt()){return/firefox\//i.test(n)}function MR(n=wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function LR(n=wt()){return/crios\//i.test(n)}function UR(n=wt()){return/iemobile/i.test(n)}function od(n=wt()){return/android/i.test(n)}function zR(n=wt()){return/blackberry/i.test(n)}function BR(n=wt()){return/webos/i.test(n)}function ld(n=wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function QM(n=wt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function YM(n=wt()){var e;return ld(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WM(){return cR()&&document.documentMode===10}function FR(n=wt()){return ld(n)||od(n)||BR(n)||zR(n)||/windows phone/i.test(n)||UR(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(n,e=[]){let t;switch(n){case"Browser":t=wI(wt());break;case"Worker":t=`${wI(wt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_a}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((u,d)=>{try{const p=e(o);u(p)}catch(p){d(p)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JM(n,e={}){return Pt(n,"GET","/v2/passwordPolicy",Dt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZM=6;class e2{constructor(e){var t,r,a,o;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:ZM,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,o,u,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(o=p.containsUppercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsNumericCharacter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bI(this),this.idTokenSubscription=new bI(this),this.beforeStateQueue=new XM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=RR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tr(t)),this._initializationPromise=this.queue(async()=>{var r,a,o;if(!this._deleted&&(this.persistenceManager=await Ql.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lp(this,{idToken:e}),r=await Pr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===d)&&(p!=null&&p.user)&&(a=p.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(hn(this));const t=e?Ae(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JM(this),t=new e2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await KM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tr(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await Ql.create(this,[tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(d,this,"internal-error"),d.then(()=>{u||o(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,a);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&DM(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function bt(n){return Ae(n)}class bI{constructor(e){this.auth=e,this.observer=null,this.addObserver=dR(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ud={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function n2(n){ud=n}function eE(n){return ud.loadJS(n)}function r2(){return ud.recaptchaV2Script}function i2(){return ud.recaptchaEnterpriseScript}function s2(){return ud.gapiScript}function qR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=500,o2=6e4,Jf=1e12;class l2{constructor(e){this.auth=e,this.counter=Jf,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new h2(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Jf;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Jf;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Jf;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class u2{constructor(){this.enterprise=new c2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class c2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class h2{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;se(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=d2(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},o2)},a2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function d2(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const f2="recaptcha-enterprise",_h="NO_RECAPTCHA";class HR{constructor(e){this.type=f2,this.auth=bt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(u,d)=>{NR(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new PR(p);return o.tenantId==null?o._agentRecaptchaConfig=m:o._tenantRecaptchaConfigs[o.tenantId]=m,u(m.siteKey)}}).catch(p=>{d(p)})})}function a(o,u,d){const p=window.grecaptcha;vI(p)?p.enterprise.ready(()=>{p.enterprise.execute(o,{action:e}).then(m=>{u(m)}).catch(()=>{u(_h)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new u2().execute("siteKey",{action:"verify"}):new Promise((o,u)=>{r(this.auth).then(d=>{if(!t&&vI(window.grecaptcha))a(d,o,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=i2();p.length!==0&&(p+=d),eE(p).then(()=>{a(d,o,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function eh(n,e,t,r=!1,a=!1){const o=new HR(n);let u;if(a)u=_h;else try{u=await o.verify(t)}catch{u=await o.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function ea(n,e,t,r,a){var o,u;if(a==="EMAIL_PASSWORD_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await eh(n,e,t,t==="getOobCode");return r(n,d)}else return r(n,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await eh(n,e,t,t==="getOobCode");return r(n,p)}else return Promise.reject(d)});else if(a==="PHONE_PROVIDER")if(!((u=n._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("PHONE_PROVIDER")){const d=await eh(n,e,t);return r(n,d).catch(async p=>{var m;if(((m=n._getRecaptchaConfig())===null||m===void 0?void 0:m.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const _=await eh(n,e,t,!1,!0);return r(n,_)}return Promise.reject(p)})}else{const d=await eh(n,e,t,!1,!0);return r(n,d)}else return Promise.reject(a+" provider is not supported.")}async function p2(n){const e=bt(n),t=await NR(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new PR(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new HR(e).verify()}function m2(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(tr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function g2(n,e,t){const r=bt(n);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),o=$R(e),{host:u,port:d}=y2(e),p=d===null?"":`:${d}`,m={url:`${o}//${u}${p}/`},_=Object.freeze({host:u,port:d,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(ia(m,r.config.emulator)&&ia(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,a||_2()}function $R(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function y2(n){const e=$R(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const o=a[1];return{host:o,port:II(r.substr(o.length+1))}}else{const[o,u]=r.split(":");return{host:o,port:II(u)}}}function II(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function _2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ii("not implemented")}_getIdTokenResponse(e){return ii("not implemented")}_linkToIdToken(e,t){return ii("not implemented")}_getReauthenticationResolver(e){return ii("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(n,e){return Pt(n,"POST","/v1/accounts:resetPassword",Dt(n,e))}async function v2(n,e){return Pt(n,"POST","/v1/accounts:update",e)}async function E2(n,e){return Pt(n,"POST","/v1/accounts:signUp",e)}async function T2(n,e){return Pt(n,"POST","/v1/accounts:update",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(n,e){return es(n,"POST","/v1/accounts:signInWithPassword",Dt(n,e))}async function ym(n,e){return Pt(n,"POST","/v1/accounts:sendOobCode",Dt(n,e))}async function b2(n,e){return ym(n,e)}async function I2(n,e){return ym(n,e)}async function A2(n,e){return ym(n,e)}async function S2(n,e){return ym(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",Dt(n,e))}async function C2(n,e){return es(n,"POST","/v1/accounts:signInWithEmailLink",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh extends ku{constructor(e,t,r,a=null){super("password",r),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Lh(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Lh(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ea(e,t,"signInWithPassword",w2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return R2(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ea(e,r,"signUpPassword",E2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return C2(e,{idToken:t,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(n,e){return es(n,"POST","/v1/accounts:signInWithIdp",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2="http://localhost";class hi extends ku{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,o=Ov(t,["providerId","signInMethod"]);if(!r||!a)return null;const u=new hi(r,a);return u.idToken=o.idToken||void 0,u.accessToken=o.accessToken||void 0,u.secret=o.secret,u.nonce=o.nonce,u.pendingToken=o.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}buildRequest(){const e={requestUri:x2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(n,e){return Pt(n,"POST","/v1/accounts:sendVerificationCode",Dt(n,e))}async function D2(n,e){return es(n,"POST","/v1/accounts:signInWithPhoneNumber",Dt(n,e))}async function P2(n,e){const t=await es(n,"POST","/v1/accounts:signInWithPhoneNumber",Dt(n,e));if(t.temporaryProof)throw ch(n,"account-exists-with-different-credential",t);return t}const N2={USER_NOT_FOUND:"user-not-found"};async function O2(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return es(n,"POST","/v1/accounts:signInWithPhoneNumber",Dt(n,t),N2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends ku{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new To({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new To({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return D2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return P2(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return O2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o}=e;return!r&&!t&&!a&&!o?null:new To({verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function V2(n){const e=$l(uh(n)).link,t=e?$l(uh(e)).deep_link_id:null,r=$l(uh(n)).deep_link_id;return(r?$l(uh(r)).link:null)||r||t||e||n}class _m{constructor(e){var t,r,a,o,u,d;const p=$l(uh(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,_=(r=p.oobCode)!==null&&r!==void 0?r:null,v=k2((a=p.mode)!==null&&a!==void 0?a:null);se(m&&_&&v,"argument-error"),this.apiKey=m,this.operation=v,this.code=_,this.continueUrl=(o=p.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(u=p.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=V2(e);try{return new _m(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.providerId=va.PROVIDER_ID}static credential(e,t){return Lh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=_m.parseLink(t);return se(r,"argument-error"),Lh._fromEmailAndCode(e,r.code,r.tenantId)}}va.PROVIDER_ID="password";va.EMAIL_PASSWORD_SIGN_IN_METHOD="password";va.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends ts{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Yl extends Vu{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return se("providerId"in t&&"signInMethod"in t,"argument-error"),hi._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return se(e.idToken||e.accessToken,"argument-error"),hi._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Yl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Yl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:a,pendingToken:o,nonce:u,providerId:d}=e;if(!r&&!a&&!t&&!o||!d)return null;try{return new Yl(d)._credential({idToken:t,accessToken:r,nonce:u,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Vu{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Vu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ti.credential(t,r)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Vu{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2="http://localhost";class ou extends ku{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ki(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ki(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ki(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a,pendingToken:o}=t;return!r||!a||!o||r!==a?null:new ou(r,o)}static _create(e,t){return new ou(e,t)}buildRequest(){return{requestUri:M2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2="saml.";class Up extends ts{constructor(e){se(e.startsWith(L2),"argument-error"),super(e)}static credentialFromResult(e){return Up.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Up.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=ou.fromJSON(e);return se(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return ou._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Vu{constructor(){super("twitter.com")}static credential(e,t){return hi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ri.credential(t,r)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KR(n,e){return es(n,"POST","/v1/accounts:signUp",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const o=await Pr._fromIdTokenResponse(e,r,a),u=SI(r);return new br({user:o,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=SI(r);return new br({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function SI(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(n){var e;if(ft(n.app))return Promise.reject(hn(n));const t=bt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new br({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await KR(t,{returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp extends kn{constructor(e,t,r,a){var o;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,zp.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new zp(e,t,r,a)}}function QR(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?zp._fromErrorAndOperation(n,o,e,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z2(n,e){const t=Ae(n);await vm(!0,t,e);const{providerUserInfo:r}=await BM(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=YR(r||[]);return t.providerData=t.providerData.filter(o=>a.has(o.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function tE(n,e,t=!1){const r=await Wi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return br._forOperation(n,"link",r)}async function vm(n,e,t){await Mh(e);const r=YR(e.providerData),a=n===!1?"provider-already-linked":"no-such-provider";se(r.has(t)===n,e.auth,a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(n,e,t=!1){const{auth:r}=n;if(ft(r.app))return Promise.reject(hn(r));const a="reauthenticate";try{const o=await Wi(n,QR(r,a,e,n),t);se(o.idToken,r,"internal-error");const u=gm(o.idToken);se(u,r,"internal-error");const{sub:d}=u;return se(n.uid===d,r,"user-mismatch"),br._forOperation(n,a,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r="signIn",a=await QR(n,r,e),o=await br._fromIdTokenResponse(n,r,a);return t||await n._updateCurrentUser(o.user),o}async function Em(n,e){return XR(bt(n),e)}async function JR(n,e){const t=Ae(n);return await vm(!1,t,e.providerId),tE(t,e)}async function ZR(n,e){return WR(Ae(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(n,e){return es(n,"POST","/v1/accounts:signInWithCustomToken",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F2(n,e){if(ft(n.app))return Promise.reject(hn(n));const t=bt(n),r=await B2(t,{token:e,returnSecureToken:!0}),a=await br._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?nE._fromServerResponse(e,t):"totpInfo"in t?rE._fromServerResponse(e,t):vn(e,"internal-error")}}class nE extends cd{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new nE(t)}}class rE extends cd{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new rE(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(n,e,t){var r;se(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),se(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),se(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(se(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(se(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(n){const e=bt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function j2(n,e,t){const r=bt(n),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Tm(r,a,t),await ea(r,a,"getOobCode",I2,"EMAIL_PASSWORD_PROVIDER")}async function q2(n,e,t){await GR(Ae(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iE(n),r})}async function H2(n,e){await T2(Ae(n),{oobCode:e})}async function e1(n,e){const t=Ae(n),r=await GR(t,{oobCode:e}),a=r.requestType;switch(se(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":se(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":se(r.mfaInfo,t,"internal-error");default:se(r.email,t,"internal-error")}let o=null;return r.mfaInfo&&(o=cd._fromServerResponse(bt(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:a}}async function $2(n,e){const{data:t}=await e1(Ae(n),e);return t.email}async function G2(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),u=await ea(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",KR,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&iE(n),p}),d=await br._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function K2(n,e,t){return ft(n.app)?Promise.reject(hn(n)):Em(Ae(n),va.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iE(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q2(n,e,t){const r=bt(n),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(u,d){se(d.handleCodeInApp,r,"argument-error"),d&&Tm(r,u,d)}o(a,t),await ea(r,a,"getOobCode",A2,"EMAIL_PASSWORD_PROVIDER")}function Y2(n,e){const t=_m.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function W2(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=Ae(n),a=va.credentialWithLink(e,t||Vh());return se(a._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Em(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X2(n,e){return Pt(n,"POST","/v1/accounts:createAuthUri",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J2(n,e){const t=Jv()?Vh():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:a}=await X2(Ae(n),r);return a||[]}async function Z2(n,e){const t=Ae(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Tm(t.auth,a,e);const{email:o}=await b2(t.auth,a);o!==n.email&&await n.reload()}async function eL(n,e,t){const r=Ae(n),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Tm(r.auth,o,t);const{email:u}=await S2(r.auth,o);u!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tL(n,e){return Pt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nL(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ae(n),o={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Wi(r,tL(r.auth,o));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const d=r.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=r.displayName,d.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function rL(n,e){const t=Ae(n);return ft(t.auth.app)?Promise.reject(hn(t.auth)):t1(t,e,null)}function iL(n,e){return t1(Ae(n),null,e)}async function t1(n,e,t){const{auth:r}=n,o={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(o.email=e),t&&(o.password=t);const u=await Wi(n,v2(r,o));await n._updateTokensIfNecessary(u,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sL(n){var e,t;if(!n)return null;const{providerId:r}=n,a=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},o=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const u=(t=(e=gm(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(u){const d=u!=="anonymous"&&u!=="custom"?u:null;return new Wl(o,d)}}if(!r)return null;switch(r){case"facebook.com":return new aL(o,a);case"github.com":return new oL(o,a);case"google.com":return new lL(o,a);case"twitter.com":return new uL(o,a,n.screenName||null);case"custom":case"anonymous":return new Wl(o,null);default:return new Wl(o,r,a)}}class Wl{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class n1 extends Wl{constructor(e,t,r,a){super(e,t,r),this.username=a}}class aL extends Wl{constructor(e,t){super(e,"facebook.com",t)}}class oL extends n1{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class lL extends Wl{constructor(e,t){super(e,"google.com",t)}}class uL extends n1{constructor(e,t,r){super(e,"twitter.com",t,r)}}function cL(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:sL(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new po("enroll",e,t)}static _fromMfaPendingCredential(e){return new po("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return po._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return po._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=bt(e),a=t.customData._serverResponse,o=(a.mfaInfo||[]).map(d=>cd._fromServerResponse(r,d));se(a.mfaPendingCredential,r,"internal-error");const u=po._fromMfaPendingCredential(a.mfaPendingCredential);return new sE(u,o,async d=>{const p=await d._process(r,u);delete a.mfaInfo,delete a.mfaPendingCredential;const m=Object.assign(Object.assign({},a),{idToken:p.idToken,refreshToken:p.refreshToken});switch(t.operationType){case"signIn":const _=await br._fromIdTokenResponse(r,t.operationType,m);return await r._updateCurrentUser(_.user),_;case"reauthenticate":return se(t.user,r,"internal-error"),br._forOperation(t.user,t.operationType,m);default:vn(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function hL(n,e){var t;const r=Ae(n),a=e;return se(e.customData.operationType,r,"argument-error"),se((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),sE._fromError(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:start",Dt(n,e))}function dL(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Dt(n,e))}function fL(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Dt(n,e))}class aE{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>cd._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new aE(e)}async getSession(){return po._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,a=await this.getSession(),o=await Wi(this.user,r._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const a=await Wi(this.user,fL(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const y_=new WeakMap;function pL(n){const e=Ae(n);return y_.has(e)||y_.set(e,aE._fromUser(e)),y_.get(e)}const Bp="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bp,"1"),this.storage.removeItem(Bp),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mL=1e3,gL=10;class i1 extends r1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=FR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},o=this.storage.getItem(r);WM()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,gL):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},mL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}i1.type="LOCAL";const oE=i1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1 extends r1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}s1.type="SESSION";const bo=s1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yL(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new wm(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:o}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const d=Array.from(u).map(async m=>m(t.origin,o)),p=await yL(d);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wm.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let o,u;return new Promise((d,p)=>{const m=hd("",20);a.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:a,onMessage(v){const w=v;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(_),o=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),d(w.data.response);break;default:clearTimeout(_),clearTimeout(o),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return window}function vL(n){qt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function EL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TL(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wL(){return lE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1="firebaseLocalStorageDb",bL=1,Fp="firebaseLocalStorage",o1="fbase_key";class dd{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bm(n,e){return n.transaction([Fp],e?"readwrite":"readonly").objectStore(Fp)}function IL(){const n=indexedDB.deleteDatabase(a1);return new dd(n).toPromise()}function q_(){const n=indexedDB.open(a1,bL);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Fp,{keyPath:o1})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Fp)?e(r):(r.close(),await IL(),e(await q_()))})})}async function CI(n,e,t){const r=bm(n,!0).put({[o1]:e,value:t});return new dd(r).toPromise()}async function AL(n,e){const t=bm(n,!1).get(e),r=await new dd(t).toPromise();return r===void 0?null:r.value}function xI(n,e){const t=bm(n,!0).delete(e);return new dd(t).toPromise()}const SL=800,RL=3;class l1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await q_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>RL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wm._getInstance(wL()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await EL(),!this.activeServiceWorker)return;this.sender=new _L(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await q_();return await CI(e,Bp,"1"),await xI(e,Bp),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>CI(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>AL(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xI(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const o=bm(a,!1).getAll();return new dd(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:o}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}l1.type="LOCAL";const Uh=l1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(n,e){return Pt(n,"POST","/v2/accounts/mfaSignIn:start",Dt(n,e))}function CL(n,e){return Pt(n,"POST","/v2/accounts/mfaSignIn:finalize",Dt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=qR("rcb"),xL=new ad(3e4,6e4);class DL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=qt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return se(PL(t),e,"argument-error"),this.shouldResolveImmediately(t)&&_I(qt().grecaptcha)?Promise.resolve(qt().grecaptcha):new Promise((r,a)=>{const o=qt().setTimeout(()=>{a(Xt(e,"network-request-failed"))},xL.get());qt()[__]=()=>{qt().clearTimeout(o),delete qt()[__];const d=qt().grecaptcha;if(!d||!_I(d)){a(Xt(e,"internal-error"));return}const p=d.render;d.render=(m,_)=>{const v=p(m,_);return this.counter++,v},this.hostLanguage=t,r(d)};const u=`${r2()}?${Pu({onload:__,render:"explicit",hl:t})}`;eE(u).catch(()=>{clearTimeout(o),a(Xt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=qt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function PL(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class NL{async load(e){return new l2(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="recaptcha",OL={theme:"light",type:"image"};let kL=class{constructor(e,t,r=Object.assign({},OL)){this.parameters=r,this.type=vh,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=bt(e),this.isInvisible=this.parameters.size==="invisible",se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;se(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new NL:new DL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(a=>{const o=u=>{u&&(this.tokenChangeListeners.delete(o),a(u))};this.tokenChangeListeners.add(o),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){se(!this.parameters.sitekey,this.auth,"argument-error"),se(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=qt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){se(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){se(Jv()&&!lE(),this.auth,"internal-error"),await VL(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await UM(this.auth);se(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return se(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function VL(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=To._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function ML(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=await Im(r,e,Ae(t));return new uE(a,o=>Em(r,o))}async function LL(n,e,t){const r=Ae(n);await vm(!1,r,"phone");const a=await Im(r.auth,e,Ae(t));return new uE(a,o=>JR(r,o))}async function UL(n,e,t){const r=Ae(n);if(ft(r.auth.app))return Promise.reject(hn(r.auth));const a=await Im(r.auth,e,Ae(t));return new uE(a,o=>ZR(r,o))}async function Im(n,e,t){var r;if(!n._getRecaptchaConfig())try{await p2(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const o=a.session;if("phoneNumber"in a){se(o.type==="enroll",n,"internal-error");const u={idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ea(n,u,"mfaSmsEnrollment",async(_,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===_h){se((t==null?void 0:t.type)===vh,_,"argument-error");const w=await v_(_,v,t);return RI(_,w)}return RI(_,v)},"PHONE_PROVIDER").catch(_=>Promise.reject(_))).phoneSessionInfo.sessionInfo}else{se(o.type==="signin",n,"internal-error");const u=((r=a.multiFactorHint)===null||r===void 0?void 0:r.uid)||a.multiFactorUid;se(u,n,"missing-multi-factor-info");const d={mfaPendingCredential:o.credential,mfaEnrollmentId:u,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ea(n,d,"mfaSmsSignIn",async(v,w)=>{if(w.phoneSignInInfo.captchaResponse===_h){se((t==null?void 0:t.type)===vh,v,"argument-error");const S=await v_(v,w,t);return DI(v,S)}return DI(v,w)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{const o={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ea(n,o,"sendVerificationCode",async(m,_)=>{if(_.captchaResponse===_h){se((t==null?void 0:t.type)===vh,m,"argument-error");const v=await v_(m,_,t);return AI(m,v)}return AI(m,_)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).sessionInfo}}finally{t==null||t._reset()}}async function zL(n,e){const t=Ae(n);if(ft(t.auth.app))return Promise.reject(hn(t.auth));await tE(t,e)}async function v_(n,e,t){se(t.type===vh,n,"argument-error");const r=await t.verify();se(typeof r=="string",n,"argument-error");const a=Object.assign({},e);if("phoneEnrollmentInfo"in a){const o=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.captchaResponse,d=a.phoneEnrollmentInfo.clientType,p=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:r,captchaResponse:u,clientType:d,recaptchaVersion:p}}),a}else if("phoneSignInInfo"in a){const o=a.phoneSignInInfo.captchaResponse,u=a.phoneSignInInfo.clientType,d=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:o,clientType:u,recaptchaVersion:d}}),a}else return Object.assign(a,{recaptchaToken:r}),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io=class mp{constructor(e){this.providerId=mp.PROVIDER_ID,this.auth=bt(e)}verifyPhoneNumber(e,t){return Im(this.auth,e,Ae(t))}static credential(e,t){return To._fromVerification(e,t)}static credentialFromResult(e){const t=e;return mp.credentialFromTaggedObject(t)}static credentialFromError(e){return mp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?To._fromTokenResponse(t,r):null}};Io.PROVIDER_ID="phone";Io.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n,e){return e?tr(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE extends ku{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ki(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ki(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function BL(n){return XR(n.auth,new cE(n),n.bypassAuthState)}function FL(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),WR(t,new cE(n),n.bypassAuthState)}async function jL(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),tE(t,new cE(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,t,r,a,o=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:o,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BL;case"linkViaPopup":case"linkViaRedirect":return jL;case"reauthViaPopup":case"reauthViaRedirect":return FL;default:vn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL=new ad(2e3,1e4);async function HL(n,e,t){if(ft(n.app))return Promise.reject(Xt(n,"operation-not-supported-in-this-environment"));const r=bt(n);Ou(n,e,ts);const a=Mo(r,t);return new Hi(r,"signInViaPopup",e,a).executeNotNull()}async function $L(n,e,t){const r=Ae(n);if(ft(r.auth.app))return Promise.reject(Xt(r.auth,"operation-not-supported-in-this-environment"));Ou(r.auth,e,ts);const a=Mo(r.auth,t);return new Hi(r.auth,"reauthViaPopup",e,a,r).executeNotNull()}async function GL(n,e,t){const r=Ae(n);Ou(r.auth,e,ts);const a=Mo(r.auth,t);return new Hi(r.auth,"linkViaPopup",e,a,r).executeNotNull()}class Hi extends u1{constructor(e,t,r,a,o){super(e,t,a,o),this.provider=r,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=hd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qL.get())};e()}}Hi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KL="pendingRedirect",Eh=new Map;class QL extends u1{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Eh.get(this.auth._key());if(!e){try{const r=await YL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Eh.set(this.auth._key(),e)}return this.bypassAuthState||Eh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YL(n,e){const t=h1(e),r=c1(n);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}async function hE(n,e){return c1(n)._set(h1(e),"true")}function WL(){Eh.clear()}function dE(n,e){Eh.set(n._key(),e)}function c1(n){return tr(n._redirectPersistence)}function h1(n){return Eo(KL,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XL(n,e,t){return JL(n,e,t)}async function JL(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n);Ou(n,e,ts),await r._initializationPromise;const a=Mo(r,t);return await hE(a,r),a._openRedirect(r,e,"signInViaRedirect")}function ZL(n,e,t){return e4(n,e,t)}async function e4(n,e,t){const r=Ae(n);if(Ou(r.auth,e,ts),ft(r.auth.app))return Promise.reject(hn(r.auth));await r.auth._initializationPromise;const a=Mo(r.auth,t);await hE(a,r.auth);const o=await d1(r);return a._openRedirect(r.auth,e,"reauthViaRedirect",o)}function t4(n,e,t){return n4(n,e,t)}async function n4(n,e,t){const r=Ae(n);Ou(r.auth,e,ts),await r.auth._initializationPromise;const a=Mo(r.auth,t);await vm(!1,r,e.providerId),await hE(a,r.auth);const o=await d1(r);return a._openRedirect(r.auth,e,"linkViaRedirect",o)}async function r4(n,e){return await bt(n)._initializationPromise,Am(n,e,!1)}async function Am(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=Mo(r,e),u=await new QL(r,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}async function d1(n){const e=hd(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i4=10*60*1e3;class f1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!s4(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!p1(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=i4&&this.cachedEventUids.clear(),this.cachedEventUids.has(PI(e))}saveEventToCache(e){this.cachedEventUids.add(PI(e)),this.lastProcessedEventTime=Date.now()}}function PI(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function p1({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function s4(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p1(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m1(n,e={}){return Pt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,o4=/^https?/;async function l4(n){if(n.config.emulator)return;const{authorizedDomains:e}=await m1(n);for(const t of e)try{if(u4(t))return}catch{}vn(n,"unauthorized-domain")}function u4(n){const e=Vh(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!o4.test(t))return!1;if(a4.test(n))return r===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4=new ad(3e4,6e4);function NI(){const n=qt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function h4(n){return new Promise((e,t)=>{var r,a,o;function u(){NI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{NI(),t(Xt(n,"network-request-failed"))},timeout:c4.get()})}if(!((a=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((o=qt().gapi)===null||o===void 0)&&o.load)u();else{const d=qR("iframefcb");return qt()[d]=()=>{gapi.load?u():t(Xt(n,"network-request-failed"))},eE(`${s2()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw gp=null,e})}let gp=null;function d4(n){return gp=gp||h4(n),gp}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=new ad(5e3,15e3),p4="__/auth/iframe",m4="emulator/auth/iframe",g4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _4(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Zv(e,m4):`https://${n.config.authDomain}/${p4}`,r={apiKey:e.apiKey,appName:n.name,v:_a},a=y4.get(n.config.apiHost);a&&(r.eid=a);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Pu(r).slice(1)}`}async function v4(n){const e=await d4(n),t=qt().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:_4(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:g4,dontclear:!0},r=>new Promise(async(a,o)=>{await r.restyle({setHideOnLeave:!1});const u=Xt(n,"network-request-failed"),d=qt().setTimeout(()=>{o(u)},f4.get());function p(){qt().clearTimeout(d),a(r)}r.ping(p).then(p,()=>{o(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},T4=500,w4=600,b4="_blank",I4="http://localhost";class OI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function A4(n,e,t,r=T4,a=w4){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p=Object.assign(Object.assign({},E4),{width:r.toString(),height:a.toString(),top:o,left:u}),m=wt().toLowerCase();t&&(d=LR(m)?b4:t),VR(m)&&(e=e||I4,p.scrollbars="yes");const _=Object.entries(p).reduce((w,[S,D])=>`${w}${S}=${D},`,"");if(YM(m)&&d!=="_self")return S4(e||"",d),new OI(null);const v=window.open(e||"",d,_);se(v,n,"popup-blocked");try{v.focus()}catch{}return new OI(v)}function S4(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R4="__/auth/handler",C4="emulator/auth/handler",x4=encodeURIComponent("fac");async function H_(n,e,t,r,a,o){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:_a,eventId:a};if(e instanceof ts){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",nV(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,v]of Object.entries(o||{}))u[_]=v}if(e instanceof Vu){const _=e.getScopes().filter(v=>v!=="");_.length>0&&(u.scopes=_.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const _ of Object.keys(d))d[_]===void 0&&delete d[_];const p=await n._getAppCheckToken(),m=p?`#${x4}=${encodeURIComponent(p)}`:"";return`${D4(n)}?${Pu(d).slice(1)}${m}`}function D4({config:n}){return n.emulator?Zv(n,C4):`https://${n.authDomain}/${R4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="webStorageSupport";class P4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bo,this._completeRedirectFn=Am,this._overrideRedirectResult=dE}async _openPopup(e,t,r,a){var o;kr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const u=await H_(e,t,r,Vh(),a);return A4(e,u,hd())}async _openRedirect(e,t,r,a){await this._originValidation(e);const o=await H_(e,t,r,Vh(),a);return vL(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:o}=this.eventManagers[t];return a?Promise.resolve(a):(kr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await v4(e),r=new f1(e);return t.register("authEvent",a=>(se(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(E_,{type:E_},a=>{var o;const u=(o=a==null?void 0:a[0])===null||o===void 0?void 0:o[E_];u!==void 0&&t(!!u),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=l4(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return FR()||MR()||ld()}}const N4=P4;class O4{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ii("unexpected MultiFactorSessionType")}}}class fE extends O4{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new fE(e)}_finalizeEnroll(e,t,r){return dL(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return CL(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class g1{constructor(){}static assertion(e){return fE._fromCredential(e)}}g1.FACTOR_ID="phone";var kI="@firebase/auth",VI="1.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V4(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function M4(n){oa(new ci("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;se(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jR(n)},m=new t2(r,a,o,p);return m2(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),oa(new ci("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(r=>new k4(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Or(kI,VI,V4(n)),Or(kI,VI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L4=5*60;Gk("authIdTokenMaxAge");function U4(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}n2({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=a=>{const o=Xt("internal-error");o.customData=a,t(o)},r.type="text/javascript",r.charset="UTF-8",U4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});M4("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z4=2e3;async function B4(n,e,t){var r;const{BuildInfo:a}=Ao();kr(e.sessionId,"AuthEvent did not contain a session ID");const o=await $4(e.sessionId),u={};return ld()?u.ibi=a.packageName:od()?u.apn=a.packageName:vn(n,"operation-not-supported-in-this-environment"),a.displayName&&(u.appDisplayName=a.displayName),u.sessionId=o,H_(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,u)}async function F4(n){const{BuildInfo:e}=Ao(),t={};ld()?t.iosBundleId=e.packageName:od()?t.androidPackageName=e.packageName:vn(n,"operation-not-supported-in-this-environment"),await m1(n,t)}function j4(n){const{cordova:e}=Ao();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(n):a=e.InAppBrowser.open(n,QM()?"_blank":"_system","location=yes"),t(a)})})}async function q4(n,e,t){const{cordova:r}=Ao();let a=()=>{};try{await new Promise((o,u)=>{let d=null;function p(){var v;o();const w=(v=r.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof w=="function"&&w(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function m(){d||(d=window.setTimeout(()=>{u(Xt(n,"redirect-cancelled-by-user"))},z4))}function _(){(document==null?void 0:document.visibilityState)==="visible"&&m()}e.addPassiveListener(p),document.addEventListener("resume",m,!1),od()&&document.addEventListener("visibilitychange",_,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",m,!1),document.removeEventListener("visibilitychange",_,!1),d&&window.clearTimeout(d)}})}finally{a()}}function H4(n){var e,t,r,a,o,u,d,p,m,_;const v=Ao();se(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),se(typeof((t=v==null?void 0:v.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),se(typeof((o=(a=(r=v==null?void 0:v.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((p=(d=(u=v==null?void 0:v.cordova)===null||u===void 0?void 0:u.plugins)===null||d===void 0?void 0:d.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((_=(m=v==null?void 0:v.cordova)===null||m===void 0?void 0:m.InAppBrowser)===null||_===void 0?void 0:_.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function $4(n){const e=G4(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function G4(n){if(kr(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K4=20;class Q4 extends f1{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Y4(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:J4(),postBody:null,tenantId:n.tenantId,error:Xt(n,"no-auth-event")}}function W4(n,e){return $_()._set(G_(n),e)}async function MI(n){const e=await $_()._get(G_(n));return e&&await $_()._remove(G_(n)),e}function X4(n,e){var t,r;const a=eU(e);if(a.includes("/__/auth/callback")){const o=yp(a),u=o.firebaseError?Z4(decodeURIComponent(o.firebaseError)):null,d=(r=(t=u==null?void 0:u.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],p=d?Xt(d):null;return p?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:a,postBody:null}}return null}function J4(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<K4;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function $_(){return tr(oE)}function G_(n){return Eo("authEvent",n.config.apiKey,n.name)}function Z4(n){try{return JSON.parse(n)}catch{return null}}function eU(n){const e=yp(n),t=e.link?decodeURIComponent(e.link):void 0,r=yp(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return yp(a).link||a||r||t||n}function yp(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return $l(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tU=500;class nU{constructor(){this._redirectPersistence=bo,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Am,this._overrideRedirectResult=dE}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new Q4(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){vn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){H4(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),WL(),await this._originValidation(e);const u=Y4(e,r,a);await W4(e,u);const d=await B4(e,u,t),p=await j4(d);return q4(e,o,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=F4(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:o}=Ao(),u=setTimeout(async()=>{await MI(e),t.onEvent(LI())},tU),d=async _=>{clearTimeout(u);const v=await MI(e);let w=null;v&&(_!=null&&_.url)&&(w=X4(v,_.url)),t.onEvent(w||LI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,d);const p=a,m=`${o.packageName.toLowerCase()}://`;Ao().handleOpenURL=async _=>{if(_.toLowerCase().startsWith(m)&&d({url:_}),typeof p=="function")try{p(_)}catch(v){console.error(v)}}}}const rU=nU;function LI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iU(n,e){bt(n)._logFramework(e)}var sU="@firebase/auth-compat",aU="0.5.21";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oU=1e3;function Th(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function lU(){return Th()==="http:"||Th()==="https:"}function y1(n=wt()){return!!((Th()==="file:"||Th()==="ionic:"||Th()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function uU(){return $v()||Hv()}function cU(){return cR()&&(document==null?void 0:document.documentMode)===11}function hU(n=wt()){return/Edge\/\d+/.test(n)}function dU(n=wt()){return cU()||hU(n)}function _1(){try{const n=self.localStorage,e=hd();if(n)return n.setItem(e,"1"),n.removeItem(e),dU()?Nh():!0}catch{return pE()&&Nh()}return!1}function pE(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function T_(){return(lU()||uR()||y1())&&!uU()&&_1()&&!pE()}function v1(){return y1()&&typeof document<"u"}async function fU(){return v1()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},oU);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function pU(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={LOCAL:"local",NONE:"none",SESSION:"session"},th=se,E1="persistence";function mU(n,e){if(th(Object.values(er).includes(e),n,"invalid-persistence-type"),$v()){th(e!==er.SESSION,n,"unsupported-persistence-type");return}if(Hv()){th(e===er.NONE,n,"unsupported-persistence-type");return}if(pE()){th(e===er.NONE||e===er.LOCAL&&Nh(),n,"unsupported-persistence-type");return}th(e===er.NONE||_1(),n,"unsupported-persistence-type")}async function K_(n){await n._initializationPromise;const e=T1(),t=Eo(E1,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistenceType())}function gU(n,e){const t=T1();if(!t)return[];const r=Eo(E1,n,e);switch(t.getItem(r)){case er.NONE:return[au];case er.LOCAL:return[Uh,bo];case er.SESSION:return[bo];default:return[]}}function T1(){var n;try{return((n=pU())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yU=se;class Ws{constructor(){this.browserResolver=tr(N4),this.cordovaResolver=tr(rU),this.underlyingResolver=null,this._redirectPersistence=bo,this._completeRedirectFn=Am,this._overrideRedirectResult=dE}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,a)}async _openRedirect(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return v1()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return yU(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await fU();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(n){return n.unwrap()}function _U(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vU(n){return b1(n)}function EU(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new TU(n,hL(n,e))}else if(r){const a=b1(e),o=e;a&&(o.credential=a,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function b1(n){const{_tokenResponse:e}=n instanceof kn?n.customData:n;if(!e)return null;if(!(n instanceof kn)&&"temporaryProof"in e&&"phoneNumber"in e)return Io.credentialFromResult(n);const t=e.providerId;if(!t||t===Zc.PASSWORD)return null;let r;switch(t){case Zc.GOOGLE:r=ti;break;case Zc.FACEBOOK:r=ei;break;case Zc.GITHUB:r=ni;break;case Zc.TWITTER:r=ri;break;default:const{oauthIdToken:a,oauthAccessToken:o,oauthTokenSecret:u,pendingToken:d,nonce:p}=e;return!o&&!u&&!a&&!d?null:d?t.startsWith("saml.")?ou._create(t,d):hi._fromParams({providerId:t,signInMethod:t,pendingToken:d,idToken:a,accessToken:o}):new Yl(t).credential({idToken:a,accessToken:o,rawNonce:p})}return n instanceof kn?r.credentialFromError(n):r.credentialFromResult(n)}function Bn(n,e){return e.catch(t=>{throw t instanceof kn&&EU(n,t),t}).then(t=>{const r=t.operationType,a=t.user;return{operationType:r,credential:vU(t),additionalUserInfo:cL(t),user:Sm.getOrCreate(a)}})}async function Q_(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Bn(n,t.confirm(r))}}class TU{constructor(e,t){this.resolver=t,this.auth=_U(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Bn(w1(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sm=class hh{constructor(e){this._delegate=e,this.multiFactor=pL(e)}static getOrCreate(e){return hh.USER_MAP.has(e)||hh.USER_MAP.set(e,new hh(e)),hh.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Bn(this.auth,JR(this._delegate,e))}async linkWithPhoneNumber(e,t){return Q_(this.auth,LL(this._delegate,e,t))}async linkWithPopup(e){return Bn(this.auth,GL(this._delegate,e,Ws))}async linkWithRedirect(e){return await K_(bt(this.auth)),t4(this._delegate,e,Ws)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Bn(this.auth,ZR(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Q_(this.auth,UL(this._delegate,e,t))}reauthenticateWithPopup(e){return Bn(this.auth,$L(this._delegate,e,Ws))}async reauthenticateWithRedirect(e){return await K_(bt(this.auth)),ZL(this._delegate,e,Ws)}sendEmailVerification(e){return Z2(this._delegate,e)}async unlink(e){return await z2(this._delegate,e),this}updateEmail(e){return rL(this._delegate,e)}updatePassword(e){return iL(this._delegate,e)}updatePhoneNumber(e){return zL(this._delegate,e)}updateProfile(e){return nL(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return eL(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Sm.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=se;class Y_{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;nh(r,"invalid-api-key",{appName:e.name}),nh(r,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Ws:void 0;this._delegate=t.initialize({options:{persistence:wU(r,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(CM),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Sm.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){g2(this._delegate,e,t)}applyActionCode(e){return H2(this._delegate,e)}checkActionCode(e){return e1(this._delegate,e)}confirmPasswordReset(e,t){return q2(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Bn(this._delegate,G2(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return J2(this._delegate,e)}isSignInWithEmailLink(e){return Y2(this._delegate,e)}async getRedirectResult(){nh(T_(),this._delegate,"operation-not-supported-in-this-environment");const e=await r4(this._delegate,Ws);return e?Bn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){iU(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:a,error:o,complete:u}=UI(e,t,r);return this._delegate.onAuthStateChanged(a,o,u)}onIdTokenChanged(e,t,r){const{next:a,error:o,complete:u}=UI(e,t,r);return this._delegate.onIdTokenChanged(a,o,u)}sendSignInLinkToEmail(e,t){return Q2(this._delegate,e,t)}sendPasswordResetEmail(e,t){return j2(this._delegate,e,t||void 0)}async setPersistence(e){mU(this._delegate,e);let t;switch(e){case er.SESSION:t=bo;break;case er.LOCAL:t=await tr(Uh)._isAvailable()?Uh:oE;break;case er.NONE:t=au;break;default:return vn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Bn(this._delegate,U2(this._delegate))}signInWithCredential(e){return Bn(this._delegate,Em(this._delegate,e))}signInWithCustomToken(e){return Bn(this._delegate,F2(this._delegate,e))}signInWithEmailAndPassword(e,t){return Bn(this._delegate,K2(this._delegate,e,t))}signInWithEmailLink(e,t){return Bn(this._delegate,W2(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Q_(this._delegate,ML(this._delegate,e,t))}async signInWithPopup(e){return nh(T_(),this._delegate,"operation-not-supported-in-this-environment"),Bn(this._delegate,HL(this._delegate,e,Ws))}async signInWithRedirect(e){return nh(T_(),this._delegate,"operation-not-supported-in-this-environment"),await K_(this._delegate),XL(this._delegate,e,Ws)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return $2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Y_.Persistence=er;function UI(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const a=r;return{next:u=>a(u&&Sm.getOrCreate(u)),error:e,complete:t}}function wU(n,e){const t=gU(n,e);if(typeof self<"u"&&!t.includes(Uh)&&t.push(Uh),typeof window<"u")for(const r of[oE,bo])t.includes(r)||t.push(r);return t.includes(au)||t.push(au),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{static credential(e,t){return Io.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new Io(w1(Nu.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}mE.PHONE_SIGN_IN_METHOD=Io.PHONE_SIGN_IN_METHOD;mE.PROVIDER_ID=Io.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bU=se;class IU{constructor(e,t,r=Nu.app()){var a;bU((a=r.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new kL(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AU="auth-compat";function SU(n){n.INTERNAL.registerComponent(new ci(AU,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Y_(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Nl.EMAIL_SIGNIN,PASSWORD_RESET:Nl.PASSWORD_RESET,RECOVER_EMAIL:Nl.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Nl.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Nl.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Nl.VERIFY_EMAIL}},EmailAuthProvider:va,FacebookAuthProvider:ei,GithubAuthProvider:ni,GoogleAuthProvider:ti,OAuthProvider:Yl,SAMLAuthProvider:Up,PhoneAuthProvider:mE,PhoneMultiFactorGenerator:g1,RecaptchaVerifier:IU,TwitterAuthProvider:ri,Auth:Y_,AuthCredential:ku,Error:kn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(sU,aU)}SU(Nu);var zI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ta,I1;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,R){function A(){}A.prototype=R.prototype,x.D=R.prototype,x.prototype=new A,x.prototype.constructor=x,x.C=function(P,V,B){for(var N=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)N[Nt-2]=arguments[Nt];return R.prototype[V].apply(P,N)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(x,R,A){A||(A=0);var P=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)P[V]=R.charCodeAt(A++)|R.charCodeAt(A++)<<8|R.charCodeAt(A++)<<16|R.charCodeAt(A++)<<24;else for(V=0;16>V;++V)P[V]=R[A++]|R[A++]<<8|R[A++]<<16|R[A++]<<24;R=x.g[0],A=x.g[1],V=x.g[2];var B=x.g[3],N=R+(B^A&(V^B))+P[0]+3614090360&4294967295;R=A+(N<<7&4294967295|N>>>25),N=B+(V^R&(A^V))+P[1]+3905402710&4294967295,B=R+(N<<12&4294967295|N>>>20),N=V+(A^B&(R^A))+P[2]+606105819&4294967295,V=B+(N<<17&4294967295|N>>>15),N=A+(R^V&(B^R))+P[3]+3250441966&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(B^A&(V^B))+P[4]+4118548399&4294967295,R=A+(N<<7&4294967295|N>>>25),N=B+(V^R&(A^V))+P[5]+1200080426&4294967295,B=R+(N<<12&4294967295|N>>>20),N=V+(A^B&(R^A))+P[6]+2821735955&4294967295,V=B+(N<<17&4294967295|N>>>15),N=A+(R^V&(B^R))+P[7]+4249261313&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(B^A&(V^B))+P[8]+1770035416&4294967295,R=A+(N<<7&4294967295|N>>>25),N=B+(V^R&(A^V))+P[9]+2336552879&4294967295,B=R+(N<<12&4294967295|N>>>20),N=V+(A^B&(R^A))+P[10]+4294925233&4294967295,V=B+(N<<17&4294967295|N>>>15),N=A+(R^V&(B^R))+P[11]+2304563134&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(B^A&(V^B))+P[12]+1804603682&4294967295,R=A+(N<<7&4294967295|N>>>25),N=B+(V^R&(A^V))+P[13]+4254626195&4294967295,B=R+(N<<12&4294967295|N>>>20),N=V+(A^B&(R^A))+P[14]+2792965006&4294967295,V=B+(N<<17&4294967295|N>>>15),N=A+(R^V&(B^R))+P[15]+1236535329&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(V^B&(A^V))+P[1]+4129170786&4294967295,R=A+(N<<5&4294967295|N>>>27),N=B+(A^V&(R^A))+P[6]+3225465664&4294967295,B=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(B^R))+P[11]+643717713&4294967295,V=B+(N<<14&4294967295|N>>>18),N=A+(B^R&(V^B))+P[0]+3921069994&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^B&(A^V))+P[5]+3593408605&4294967295,R=A+(N<<5&4294967295|N>>>27),N=B+(A^V&(R^A))+P[10]+38016083&4294967295,B=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(B^R))+P[15]+3634488961&4294967295,V=B+(N<<14&4294967295|N>>>18),N=A+(B^R&(V^B))+P[4]+3889429448&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^B&(A^V))+P[9]+568446438&4294967295,R=A+(N<<5&4294967295|N>>>27),N=B+(A^V&(R^A))+P[14]+3275163606&4294967295,B=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(B^R))+P[3]+4107603335&4294967295,V=B+(N<<14&4294967295|N>>>18),N=A+(B^R&(V^B))+P[8]+1163531501&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^B&(A^V))+P[13]+2850285829&4294967295,R=A+(N<<5&4294967295|N>>>27),N=B+(A^V&(R^A))+P[2]+4243563512&4294967295,B=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(B^R))+P[7]+1735328473&4294967295,V=B+(N<<14&4294967295|N>>>18),N=A+(B^R&(V^B))+P[12]+2368359562&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(A^V^B)+P[5]+4294588738&4294967295,R=A+(N<<4&4294967295|N>>>28),N=B+(R^A^V)+P[8]+2272392833&4294967295,B=R+(N<<11&4294967295|N>>>21),N=V+(B^R^A)+P[11]+1839030562&4294967295,V=B+(N<<16&4294967295|N>>>16),N=A+(V^B^R)+P[14]+4259657740&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^B)+P[1]+2763975236&4294967295,R=A+(N<<4&4294967295|N>>>28),N=B+(R^A^V)+P[4]+1272893353&4294967295,B=R+(N<<11&4294967295|N>>>21),N=V+(B^R^A)+P[7]+4139469664&4294967295,V=B+(N<<16&4294967295|N>>>16),N=A+(V^B^R)+P[10]+3200236656&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^B)+P[13]+681279174&4294967295,R=A+(N<<4&4294967295|N>>>28),N=B+(R^A^V)+P[0]+3936430074&4294967295,B=R+(N<<11&4294967295|N>>>21),N=V+(B^R^A)+P[3]+3572445317&4294967295,V=B+(N<<16&4294967295|N>>>16),N=A+(V^B^R)+P[6]+76029189&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^B)+P[9]+3654602809&4294967295,R=A+(N<<4&4294967295|N>>>28),N=B+(R^A^V)+P[12]+3873151461&4294967295,B=R+(N<<11&4294967295|N>>>21),N=V+(B^R^A)+P[15]+530742520&4294967295,V=B+(N<<16&4294967295|N>>>16),N=A+(V^B^R)+P[2]+3299628645&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(V^(A|~B))+P[0]+4096336452&4294967295,R=A+(N<<6&4294967295|N>>>26),N=B+(A^(R|~V))+P[7]+1126891415&4294967295,B=R+(N<<10&4294967295|N>>>22),N=V+(R^(B|~A))+P[14]+2878612391&4294967295,V=B+(N<<15&4294967295|N>>>17),N=A+(B^(V|~R))+P[5]+4237533241&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~B))+P[12]+1700485571&4294967295,R=A+(N<<6&4294967295|N>>>26),N=B+(A^(R|~V))+P[3]+2399980690&4294967295,B=R+(N<<10&4294967295|N>>>22),N=V+(R^(B|~A))+P[10]+4293915773&4294967295,V=B+(N<<15&4294967295|N>>>17),N=A+(B^(V|~R))+P[1]+2240044497&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~B))+P[8]+1873313359&4294967295,R=A+(N<<6&4294967295|N>>>26),N=B+(A^(R|~V))+P[15]+4264355552&4294967295,B=R+(N<<10&4294967295|N>>>22),N=V+(R^(B|~A))+P[6]+2734768916&4294967295,V=B+(N<<15&4294967295|N>>>17),N=A+(B^(V|~R))+P[13]+1309151649&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~B))+P[4]+4149444226&4294967295,R=A+(N<<6&4294967295|N>>>26),N=B+(A^(R|~V))+P[11]+3174756917&4294967295,B=R+(N<<10&4294967295|N>>>22),N=V+(R^(B|~A))+P[2]+718787259&4294967295,V=B+(N<<15&4294967295|N>>>17),N=A+(B^(V|~R))+P[9]+3951481745&4294967295,x.g[0]=x.g[0]+R&4294967295,x.g[1]=x.g[1]+(V+(N<<21&4294967295|N>>>11))&4294967295,x.g[2]=x.g[2]+V&4294967295,x.g[3]=x.g[3]+B&4294967295}r.prototype.u=function(x,R){R===void 0&&(R=x.length);for(var A=R-this.blockSize,P=this.B,V=this.h,B=0;B<R;){if(V==0)for(;B<=A;)a(this,x,B),B+=this.blockSize;if(typeof x=="string"){for(;B<R;)if(P[V++]=x.charCodeAt(B++),V==this.blockSize){a(this,P),V=0;break}}else for(;B<R;)if(P[V++]=x[B++],V==this.blockSize){a(this,P),V=0;break}}this.h=V,this.o+=R},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var R=1;R<x.length-8;++R)x[R]=0;var A=8*this.o;for(R=x.length-8;R<x.length;++R)x[R]=A&255,A/=256;for(this.u(x),x=Array(16),R=A=0;4>R;++R)for(var P=0;32>P;P+=8)x[A++]=this.g[R]>>>P&255;return x};function o(x,R){var A=d;return Object.prototype.hasOwnProperty.call(A,x)?A[x]:A[x]=R(x)}function u(x,R){this.h=R;for(var A=[],P=!0,V=x.length-1;0<=V;V--){var B=x[V]|0;P&&B==R||(A[V]=B,P=!1)}this.g=A}var d={};function p(x){return-128<=x&&128>x?o(x,function(R){return new u([R|0],0>R?-1:0)}):new u([x|0],0>x?-1:0)}function m(x){if(isNaN(x)||!isFinite(x))return v;if(0>x)return L(m(-x));for(var R=[],A=1,P=0;x>=A;P++)R[P]=x/A|0,A*=4294967296;return new u(R,0)}function _(x,R){if(x.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(x.charAt(0)=="-")return L(_(x.substring(1),R));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=m(Math.pow(R,8)),P=v,V=0;V<x.length;V+=8){var B=Math.min(8,x.length-V),N=parseInt(x.substring(V,V+B),R);8>B?(B=m(Math.pow(R,B)),P=P.j(B).add(m(N))):(P=P.j(A),P=P.add(m(N)))}return P}var v=p(0),w=p(1),S=p(16777216);n=u.prototype,n.m=function(){if(U(this))return-L(this).m();for(var x=0,R=1,A=0;A<this.g.length;A++){var P=this.i(A);x+=(0<=P?P:4294967296+P)*R,R*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(D(this))return"0";if(U(this))return"-"+L(this).toString(x);for(var R=m(Math.pow(x,6)),A=this,P="";;){var V=oe(A,R).g;A=H(A,V.j(R));var B=((0<A.g.length?A.g[0]:A.h)>>>0).toString(x);if(A=V,D(A))return B+P;for(;6>B.length;)B="0"+B;P=B+P}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function D(x){if(x.h!=0)return!1;for(var R=0;R<x.g.length;R++)if(x.g[R]!=0)return!1;return!0}function U(x){return x.h==-1}n.l=function(x){return x=H(this,x),U(x)?-1:D(x)?0:1};function L(x){for(var R=x.g.length,A=[],P=0;P<R;P++)A[P]=~x.g[P];return new u(A,~x.h).add(w)}n.abs=function(){return U(this)?L(this):this},n.add=function(x){for(var R=Math.max(this.g.length,x.g.length),A=[],P=0,V=0;V<=R;V++){var B=P+(this.i(V)&65535)+(x.i(V)&65535),N=(B>>>16)+(this.i(V)>>>16)+(x.i(V)>>>16);P=N>>>16,B&=65535,N&=65535,A[V]=N<<16|B}return new u(A,A[A.length-1]&-2147483648?-1:0)};function H(x,R){return x.add(L(R))}n.j=function(x){if(D(this)||D(x))return v;if(U(this))return U(x)?L(this).j(L(x)):L(L(this).j(x));if(U(x))return L(this.j(L(x)));if(0>this.l(S)&&0>x.l(S))return m(this.m()*x.m());for(var R=this.g.length+x.g.length,A=[],P=0;P<2*R;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var V=0;V<x.g.length;V++){var B=this.i(P)>>>16,N=this.i(P)&65535,Nt=x.i(V)>>>16,It=x.i(V)&65535;A[2*P+2*V]+=N*It,X(A,2*P+2*V),A[2*P+2*V+1]+=B*It,X(A,2*P+2*V+1),A[2*P+2*V+1]+=N*Nt,X(A,2*P+2*V+1),A[2*P+2*V+2]+=B*Nt,X(A,2*P+2*V+2)}for(P=0;P<R;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=R;P<2*R;P++)A[P]=0;return new u(A,0)};function X(x,R){for(;(x[R]&65535)!=x[R];)x[R+1]+=x[R]>>>16,x[R]&=65535,R++}function K(x,R){this.g=x,this.h=R}function oe(x,R){if(D(R))throw Error("division by zero");if(D(x))return new K(v,v);if(U(x))return R=oe(L(x),R),new K(L(R.g),L(R.h));if(U(R))return R=oe(x,L(R)),new K(L(R.g),R.h);if(30<x.g.length){if(U(x)||U(R))throw Error("slowDivide_ only works with positive integers.");for(var A=w,P=R;0>=P.l(x);)A=ae(A),P=ae(P);var V=le(A,1),B=le(P,1);for(P=le(P,2),A=le(A,2);!D(P);){var N=B.add(P);0>=N.l(x)&&(V=V.add(A),B=N),P=le(P,1),A=le(A,1)}return R=H(x,V.j(R)),new K(V,R)}for(V=v;0<=x.l(R);){for(A=Math.max(1,Math.floor(x.m()/R.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),B=m(A),N=B.j(R);U(N)||0<N.l(x);)A-=P,B=m(A),N=B.j(R);D(B)&&(B=w),V=V.add(B),x=H(x,N)}return new K(V,x)}n.A=function(x){return oe(this,x).h},n.and=function(x){for(var R=Math.max(this.g.length,x.g.length),A=[],P=0;P<R;P++)A[P]=this.i(P)&x.i(P);return new u(A,this.h&x.h)},n.or=function(x){for(var R=Math.max(this.g.length,x.g.length),A=[],P=0;P<R;P++)A[P]=this.i(P)|x.i(P);return new u(A,this.h|x.h)},n.xor=function(x){for(var R=Math.max(this.g.length,x.g.length),A=[],P=0;P<R;P++)A[P]=this.i(P)^x.i(P);return new u(A,this.h^x.h)};function ae(x){for(var R=x.g.length+1,A=[],P=0;P<R;P++)A[P]=x.i(P)<<1|x.i(P-1)>>>31;return new u(A,x.h)}function le(x,R){var A=R>>5;R%=32;for(var P=x.g.length-A,V=[],B=0;B<P;B++)V[B]=0<R?x.i(B+A)>>>R|x.i(B+A+1)<<32-R:x.i(B+A);return new u(V,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,I1=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=_,ta=u}).apply(typeof zI<"u"?zI:typeof self<"u"?self:typeof window<"u"?window:{});var Zf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var A1,dh,S1,_p,W_,R1,C1,x1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,y,E){return h==Array.prototype||h==Object.prototype||(h[y]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zf=="object"&&Zf];for(var y=0;y<h.length;++y){var E=h[y];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function a(h,y){if(y)e:{var E=r;h=h.split(".");for(var I=0;I<h.length-1;I++){var F=h[I];if(!(F in E))break e;E=E[F]}h=h[h.length-1],I=E[h],y=y(I),y!=I&&y!=null&&e(E,h,{configurable:!0,writable:!0,value:y})}}function o(h,y){h instanceof String&&(h+="");var E=0,I=!1,F={next:function(){if(!I&&E<h.length){var Y=E++;return{value:y(Y,h[Y]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}a("Array.prototype.values",function(h){return h||function(){return o(this,function(y,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(h){var y=typeof h;return y=y!="object"?y:h?Array.isArray(h)?"array":y:"null",y=="array"||y=="object"&&typeof h.length=="number"}function m(h){var y=typeof h;return y=="object"&&h!=null||y=="function"}function _(h,y,E){return h.call.apply(h.bind,arguments)}function v(h,y,E){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),h.apply(y,F)}}return function(){return h.apply(y,arguments)}}function w(h,y,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:v,w.apply(null,arguments)}function S(h,y){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function D(h,y){function E(){}E.prototype=y.prototype,h.aa=y.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(I,F,Y){for(var ce=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ce[qe-2]=arguments[qe];return y.prototype[F].apply(I,ce)}}function U(h){const y=h.length;if(0<y){const E=Array(y);for(let I=0;I<y;I++)E[I]=h[I];return E}return[]}function L(h,y){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(p(I)){const F=h.length||0,Y=I.length||0;h.length=F+Y;for(let ce=0;ce<Y;ce++)h[F+ce]=I[ce]}else h.push(I)}}class H{constructor(y,E){this.i=y,this.j=E,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function X(h){return/^[\s\xa0]*$/.test(h)}function K(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function oe(h){return oe[" "](h),h}oe[" "]=function(){};var ae=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function le(h,y,E){for(const I in h)y.call(E,h[I],I,h)}function x(h,y){for(const E in h)y.call(void 0,h[E],E,h)}function R(h){const y={};for(const E in h)y[E]=h[E];return y}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(h,y){let E,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(E in I)h[E]=I[E];for(let Y=0;Y<A.length;Y++)E=A[Y],Object.prototype.hasOwnProperty.call(I,E)&&(h[E]=I[E])}}function V(h){var y=1;h=h.split(":");const E=[];for(;0<y&&h.length;)E.push(h.shift()),y--;return h.length&&E.push(h.join(":")),E}function B(h){d.setTimeout(()=>{throw h},0)}function N(){var h=Oe;let y=null;return h.g&&(y=h.g,h.g=h.g.next,h.g||(h.h=null),y.next=null),y}class Nt{constructor(){this.h=this.g=null}add(y,E){const I=It.get();I.set(y,E),this.h?this.h.next=I:this.g=I,this.h=I}}var It=new H(()=>new de,h=>h.reset());class de{constructor(){this.next=this.g=this.h=null}set(y,E){this.h=y,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,we=!1,Oe=new Nt,O=()=>{const h=d.Promise.resolve(void 0);Ie=()=>{h.then(ie)}};var ie=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(E){B(E)}var y=It;y.j(h),100>y.h&&(y.h++,h.next=y.g,y.g=h)}we=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(h,y){this.type=h,this.g=this.target=y,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var pe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,y=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};d.addEventListener("test",E,y),d.removeEventListener("test",E,y)}catch{}return h}();function xe(h,y){if(me.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=y,y=h.relatedTarget){if(ae){e:{try{oe(y.nodeName);var F=!0;break e}catch{}F=!1}F||(y=null)}}else E=="mouseover"?y=h.fromElement:E=="mouseout"&&(y=h.toElement);this.relatedTarget=y,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ce[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&xe.aa.h.call(this)}}D(xe,me);var Ce={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Je(h,y,E,I,F){this.listener=h,this.proxy=null,this.src=y,this.type=E,this.capture=!!I,this.ha=F,this.key=++Me,this.da=this.fa=!1}function Ke(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ut(h){this.src=h,this.g={},this.h=0}Ut.prototype.add=function(h,y,E,I,F){var Y=h.toString();h=this.g[Y],h||(h=this.g[Y]=[],this.h++);var ce=rr(h,y,I,F);return-1<ce?(y=h[ce],E||(y.fa=!1)):(y=new Je(y,this.src,Y,!!I,F),y.fa=E,h.push(y)),y};function Zt(h,y){var E=y.type;if(E in h.g){var I=h.g[E],F=Array.prototype.indexOf.call(I,y,void 0),Y;(Y=0<=F)&&Array.prototype.splice.call(I,F,1),Y&&(Ke(y),h.g[E].length==0&&(delete h.g[E],h.h--))}}function rr(h,y,E,I){for(var F=0;F<h.length;++F){var Y=h[F];if(!Y.da&&Y.listener==y&&Y.capture==!!E&&Y.ha==I)return F}return-1}var as="closure_lm_"+(1e6*Math.random()|0),os={};function yi(h,y,E,I,F){if(Array.isArray(y)){for(var Y=0;Y<y.length;Y++)yi(h,y[Y],E,I,F);return null}return E=Rd(E),h&&h[ut]?h.K(y,E,m(I)?!!I.capture:!1,F):Hu(h,y,E,!1,I,F)}function Hu(h,y,E,I,F,Y){if(!y)throw Error("Invalid event type");var ce=m(F)?!!F.capture:!!F,qe=$u(h);if(qe||(h[as]=qe=new Ut(h)),E=qe.add(y,E,I,ce,Y),E.proxy)return E;if(I=Fo(),E.proxy=I,I.src=h,I.listener=E,h.addEventListener)pe||(F=ce),F===void 0&&(F=!1),h.addEventListener(y.toString(),I,F);else if(h.attachEvent)h.attachEvent(qo(y.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Fo(){function h(E){return y.call(h.src,h.listener,E)}const y=eg;return h}function jo(h,y,E,I,F){if(Array.isArray(y))for(var Y=0;Y<y.length;Y++)jo(h,y[Y],E,I,F);else I=m(I)?!!I.capture:!!I,E=Rd(E),h&&h[ut]?(h=h.i,y=String(y).toString(),y in h.g&&(Y=h.g[y],E=rr(Y,E,I,F),-1<E&&(Ke(Y[E]),Array.prototype.splice.call(Y,E,1),Y.length==0&&(delete h.g[y],h.h--)))):h&&(h=$u(h))&&(y=h.g[y.toString()],h=-1,y&&(h=rr(y,E,I,F)),(E=-1<h?y[h]:null)&&Aa(E))}function Aa(h){if(typeof h!="number"&&h&&!h.da){var y=h.src;if(y&&y[ut])Zt(y.i,h);else{var E=h.type,I=h.proxy;y.removeEventListener?y.removeEventListener(E,I,h.capture):y.detachEvent?y.detachEvent(qo(E),I):y.addListener&&y.removeListener&&y.removeListener(I),(E=$u(y))?(Zt(E,h),E.h==0&&(E.src=null,y[as]=null)):Ke(h)}}}function qo(h){return h in os?os[h]:os[h]="on"+h}function eg(h,y){if(h.da)h=!0;else{y=new xe(y,this);var E=h.listener,I=h.ha||h.src;h.fa&&Aa(h),h=E.call(I,y)}return h}function $u(h){return h=h[as],h instanceof Ut?h:null}var Ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rd(h){return typeof h=="function"?h:(h[Ln]||(h[Ln]=function(y){return h.handleEvent(y)}),h[Ln])}function $t(){ye.call(this),this.i=new Ut(this),this.M=this,this.F=null}D($t,ye),$t.prototype[ut]=!0,$t.prototype.removeEventListener=function(h,y,E,I){jo(this,h,y,E,I)};function en(h,y){var E,I=h.F;if(I)for(E=[];I;I=I.F)E.push(I);if(h=h.M,I=y.type||y,typeof y=="string")y=new me(y,h);else if(y instanceof me)y.target=y.target||h;else{var F=y;y=new me(I,h),P(y,F)}if(F=!0,E)for(var Y=E.length-1;0<=Y;Y--){var ce=y.g=E[Y];F=_i(ce,I,!0,y)&&F}if(ce=y.g=h,F=_i(ce,I,!0,y)&&F,F=_i(ce,I,!1,y)&&F,E)for(Y=0;Y<E.length;Y++)ce=y.g=E[Y],F=_i(ce,I,!1,y)&&F}$t.prototype.N=function(){if($t.aa.N.call(this),this.i){var h=this.i,y;for(y in h.g){for(var E=h.g[y],I=0;I<E.length;I++)Ke(E[I]);delete h.g[y],h.h--}}this.F=null},$t.prototype.K=function(h,y,E,I){return this.i.add(String(h),y,!1,E,I)},$t.prototype.L=function(h,y,E,I){return this.i.add(String(h),y,!0,E,I)};function _i(h,y,E,I){if(y=h.i.g[String(y)],!y)return!0;y=y.concat();for(var F=!0,Y=0;Y<y.length;++Y){var ce=y[Y];if(ce&&!ce.da&&ce.capture==E){var qe=ce.listener,Kt=ce.ha||ce.src;ce.fa&&Zt(h.i,ce),F=qe.call(Kt,I)!==!1&&F}}return F&&!I.defaultPrevented}function Cd(h,y,E){if(typeof h=="function")E&&(h=w(h,E));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(h,y||0)}function Gu(h){h.g=Cd(()=>{h.g=null,h.i&&(h.i=!1,Gu(h))},h.l);const y=h.h;h.h=null,h.m.apply(null,y)}class tg extends ye{constructor(y,E){super(),this.m=y,this.l=E,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Gu(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sa(h){ye.call(this),this.h=h,this.g={}}D(Sa,ye);var ls=[];function En(h){le(h.g,function(y,E){this.g.hasOwnProperty(E)&&Aa(y)},h),h.g={}}Sa.prototype.N=function(){Sa.aa.N.call(this),En(this)},Sa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ku=d.JSON.stringify,Vr=d.JSON.parse,Rn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Qu(){}Qu.prototype.h=null;function xd(h){return h.h||(h.h=h.i())}function Dd(){}var Mr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){me.call(this,"d")}D(us,me);function Ir(){me.call(this,"c")}D(Ir,me);var ir={},cs=null;function Ho(){return cs=cs||new $t}ir.La="serverreachability";function Yu(h){me.call(this,ir.La,h)}D(Yu,me);function hs(h){const y=Ho();en(y,new Yu(y))}ir.STAT_EVENT="statevent";function $o(h,y){me.call(this,ir.STAT_EVENT,h),this.stat=y}D($o,me);function Ot(h){const y=Ho();en(y,new $o(y,h))}ir.Ma="timingevent";function Pd(h,y){me.call(this,ir.Ma,h),this.size=y}D(Pd,me);function ds(h,y){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},y)}function fs(){this.g=!0}fs.prototype.xa=function(){this.g=!1};function Nd(h,y,E,I,F,Y){h.info(function(){if(h.g)if(Y)for(var ce="",qe=Y.split("&"),Kt=0;Kt<qe.length;Kt++){var He=qe[Kt].split("=");if(1<He.length){var rn=He[0];He=He[1];var Qt=rn.split("_");ce=2<=Qt.length&&Qt[1]=="type"?ce+(rn+"="+He+"&"):ce+(rn+"=redacted&")}}else ce=null;else ce=Y;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+y+`
`+E+`
`+ce})}function Od(h,y,E,I,F,Y,ce){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+y+`
`+E+`
`+Y+" "+ce})}function ps(h,y,E,I){h.info(function(){return"XMLHTTP TEXT ("+y+"): "+tn(h,E)+(I?" "+I:"")})}function Lr(h,y){h.info(function(){return"TIMEOUT: "+y})}fs.prototype.info=function(){};function tn(h,y){if(!h.g)return y;if(!y)return null;try{var E=JSON.parse(y);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var I=E[h];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var Y=F[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var ce=1;ce<F.length;ce++)F[ce]=""}}}}return Ku(E)}catch{return y}}var Gt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ra;function Go(){}D(Go,Qu),Go.prototype.g=function(){return new XMLHttpRequest},Go.prototype.i=function(){return{}},Ra=new Go;function Ur(h,y,E,I){this.j=h,this.i=y,this.l=E,this.R=I||1,this.U=new Sa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wu}function Wu(){this.i=null,this.g="",this.h=!1}var ms={},Ca={};function Ar(h,y,E){h.L=1,h.v=Pa(At(y)),h.m=E,h.P=!0,Ei(h,null)}function Ei(h,y){h.F=Date.now(),yt(h),h.A=At(h.v);var E=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),bi(E.i,"t",I),h.C=0,E=h.j.J,h.h=new Wu,h.g=Kd(h.j,E?y:null,!h.m),0<h.O&&(h.M=new tg(w(h.Y,h,h.g),h.O)),y=h.U,E=h.g,I=h.ca;var F="readystatechange";Array.isArray(F)||(F&&(ls[0]=F.toString()),F=ls);for(var Y=0;Y<F.length;Y++){var ce=yi(E,F[Y],I||y.handleEvent,!1,y.h||y);if(!ce)break;y.g[ce.key]=ce}y=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,y)):(h.u="GET",h.g.ea(h.A,h.u,null,y)),hs(),Nd(h.i,h.u,h.A,h.l,h.R,h.m)}Ur.prototype.ca=function(h){h=h.target;const y=this.M;y&&ur(h)==3?y.j():this.Y(h)},Ur.prototype.Y=function(h){try{if(h==this.g)e:{const Qt=ur(this.g);var y=this.g.Ba();const Ri=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||zd(this.g)))){this.J||Qt!=4||y==7||(y==8||0>=Ri?hs(3):hs(2)),Ko(this);var E=this.g.Z();this.X=E;t:if(gs(this)){var I=zd(this.g);h="";var F=I.length,Y=ur(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),$n(this);var ce="";break t}this.h.i=new d.TextDecoder}for(y=0;y<F;y++)this.h.h=!0,h+=this.h.i.decode(I[y],{stream:!(Y&&y==F-1)});I.length=0,this.h.g+=h,this.C=0,ce=this.h.g}else ce=this.g.oa();if(this.o=E==200,Od(this.i,this.u,this.A,this.l,this.R,Qt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Kt=this.g;if((qe=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(qe)){var He=qe;break t}}He=null}if(E=He)ps(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gn(this,E);else{this.o=!1,this.s=3,Ot(12),Un(this),$n(this);break e}}if(this.P){E=!0;let dn;for(;!this.J&&this.C<ce.length;)if(dn=ys(this,ce),dn==Ca){Qt==4&&(this.s=4,Ot(14),E=!1),ps(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==ms){this.s=4,Ot(15),ps(this.i,this.l,ce,"[Invalid Chunk]"),E=!1;break}else ps(this.i,this.l,dn,null),Gn(this,dn);if(gs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||ce.length!=0||this.h.h||(this.s=1,Ot(16),E=!1),this.o=this.o&&E,!E)ps(this.i,this.l,ce,"[Invalid Chunked Response]"),Un(this),$n(this);else if(0<ce.length&&!this.W){this.W=!0;var rn=this.j;rn.g==this&&rn.ba&&!rn.M&&(rn.j.info("Great, no buffering proxy detected. Bytes received: "+ce.length),Ua(rn),rn.M=!0,Ot(11))}}else ps(this.i,this.l,ce,null),Gn(this,ce);Qt==4&&Un(this),this.o&&!this.J&&(Qt==4?Hd(this.j,this):(this.o=!1,yt(this)))}else og(this.g),E==400&&0<ce.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Un(this),$n(this)}}}catch{}finally{}};function gs(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function ys(h,y){var E=h.C,I=y.indexOf(`
`,E);return I==-1?Ca:(E=Number(y.substring(E,I)),isNaN(E)?ms:(I+=1,I+E>y.length?Ca:(y=y.slice(I,I+E),h.C=I+E,y)))}Ur.prototype.cancel=function(){this.J=!0,Un(this)};function yt(h){h.S=Date.now()+h.I,Xu(h,h.I)}function Xu(h,y){if(h.B!=null)throw Error("WatchDog timer not null");h.B=ds(w(h.ba,h),y)}function Ko(h){h.B&&(d.clearTimeout(h.B),h.B=null)}Ur.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Lr(this.i,this.A),this.L!=2&&(hs(),Ot(17)),Un(this),this.s=2,$n(this)):Xu(this,this.S-h)};function $n(h){h.j.G==0||h.J||Hd(h.j,h)}function Un(h){Ko(h);var y=h.M;y&&typeof y.ma=="function"&&y.ma(),h.M=null,En(h.U),h.g&&(y=h.g,h.g=null,y.abort(),y.ma())}function Gn(h,y){try{var E=h.j;if(E.G!=0&&(E.g==h||_s(E.h,h))){if(!h.K&&_s(E.h,h)&&E.G==3){try{var I=E.Da.g.parse(y)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)rl(E),tl(E);else break e;lc(E),Ot(18)}}else E.za=F[1],0<E.za-E.T&&37500>F[2]&&E.F&&E.v==0&&!E.C&&(E.C=ds(w(E.Za,E),6e3));if(1>=kd(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Si(E,11)}else if((h.K||E.g==h)&&rl(E),!X(y))for(F=E.Da.g.parse(y),y=0;y<F.length;y++){let He=F[y];if(E.T=He[0],He=He[1],E.G==2)if(He[0]=="c"){E.K=He[1],E.ia=He[2];const rn=He[3];rn!=null&&(E.la=rn,E.j.info("VER="+E.la));const Qt=He[4];Qt!=null&&(E.Aa=Qt,E.j.info("SVER="+E.Aa));const Ri=He[5];Ri!=null&&typeof Ri=="number"&&0<Ri&&(I=1.5*Ri,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const dn=h.g;if(dn){const $r=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($r){var Y=I.h;Y.g||$r.indexOf("spdy")==-1&&$r.indexOf("quic")==-1&&$r.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(vs(Y,Y.h),Y.h=null))}if(I.D){const cc=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;cc&&(I.ya=cc,Qe(I.I,I.D,cc))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ce=h;if(I.qa=Gd(I,I.J?I.ia:null,I.W),ce.K){sr(I.h,ce);var qe=ce,Kt=I.L;Kt&&(qe.I=Kt),qe.B&&(Ko(qe),yt(qe)),I.g=ce}else jd(I);0<E.i.length&&nl(E)}else He[0]!="stop"&&He[0]!="close"||Si(E,7);else E.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?Si(E,7):ac(E):He[0]!="noop"&&E.l&&E.l.ta(He),E.v=0)}}hs(4)}catch{}}var ng=class{constructor(h,y){this.g=h,this.map=y}};function Ju(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zu(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function kd(h){return h.h?1:h.g?h.g.size:0}function _s(h,y){return h.h?h.h==y:h.g?h.g.has(y):!1}function vs(h,y){h.g?h.g.add(y):h.h=y}function sr(h,y){h.h&&h.h==y?h.h=null:h.g&&h.g.has(y)&&h.g.delete(y)}Ju.prototype.cancel=function(){if(this.i=Cn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Cn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let y=h.i;for(const E of h.g.values())y=y.concat(E.D);return y}return U(h.i)}function Vd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var y=[],E=h.length,I=0;I<E;I++)y.push(h[I]);return y}y=[],E=0;for(I in h)y[E++]=h[I];return y}function rg(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var y=[];h=h.length;for(var E=0;E<h;E++)y.push(E);return y}y=[],E=0;for(const I in h)y[E++]=I;return y}}}function xa(h,y){if(h.forEach&&typeof h.forEach=="function")h.forEach(y,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,y,void 0);else for(var E=rg(h),I=Vd(h),F=I.length,Y=0;Y<F;Y++)y.call(void 0,I[Y],E&&E[Y],h)}var ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qo(h,y){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var I=h[E].indexOf("="),F=null;if(0<=I){var Y=h[E].substring(0,I);F=h[E].substring(I+1)}else Y=h[E];y(Y,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Ti(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Ti){this.h=h.h,Es(this,h.j),this.o=h.o,this.g=h.g,Da(this,h.s),this.l=h.l;var y=h.i,E=new zr;E.i=y.i,y.g&&(E.g=new Map(y.g),E.h=y.h),Yo(this,E),this.m=h.m}else h&&(y=String(h).match(ec))?(this.h=!1,Es(this,y[1]||"",!0),this.o=Ts(y[2]||""),this.g=Ts(y[3]||"",!0),Da(this,y[4]),this.l=Ts(y[5]||"",!0),Yo(this,y[6]||"",!0),this.m=Ts(y[7]||"")):(this.h=!1,this.i=new zr(null,this.h))}Ti.prototype.toString=function(){var h=[],y=this.j;y&&h.push(ar(y,tc,!0),":");var E=this.g;return(E||y=="file")&&(h.push("//"),(y=this.o)&&h.push(ar(y,tc,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(ar(E,E.charAt(0)=="/"?nc:Md,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",ar(E,ag)),h.join("")};function At(h){return new Ti(h)}function Es(h,y,E){h.j=E?Ts(y,!0):y,h.j&&(h.j=h.j.replace(/:$/,""))}function Da(h,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);h.s=y}else h.s=null}function Yo(h,y,E){y instanceof zr?(h.i=y,rc(h.i,h.h)):(E||(y=ar(y,sg)),h.i=new zr(y,h.h))}function Qe(h,y,E){h.i.set(y,E)}function Pa(h){return Qe(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Ts(h,y){return h?y?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function ar(h,y,E){return typeof h=="string"?(h=encodeURI(h).replace(y,ig),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function ig(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var tc=/[#\/\?@]/g,Md=/[#\?:]/g,nc=/[#\?]/g,sg=/[#\?@]/g,ag=/#/g;function zr(h,y){this.h=this.g=null,this.i=h||null,this.j=!!y}function or(h){h.g||(h.g=new Map,h.h=0,h.i&&Qo(h.i,function(y,E){h.add(decodeURIComponent(y.replace(/\+/g," ")),E)}))}n=zr.prototype,n.add=function(h,y){or(this),this.i=null,h=Ii(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(y),this.h+=1,this};function Wo(h,y){or(h),y=Ii(h,y),h.g.has(y)&&(h.i=null,h.h-=h.g.get(y).length,h.g.delete(y))}function wi(h,y){return or(h),y=Ii(h,y),h.g.has(y)}n.forEach=function(h,y){or(this),this.g.forEach(function(E,I){E.forEach(function(F){h.call(y,F,I,this)},this)},this)},n.na=function(){or(this);const h=Array.from(this.g.values()),y=Array.from(this.g.keys()),E=[];for(let I=0;I<y.length;I++){const F=h[I];for(let Y=0;Y<F.length;Y++)E.push(y[I])}return E},n.V=function(h){or(this);let y=[];if(typeof h=="string")wi(this,h)&&(y=y.concat(this.g.get(Ii(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)y=y.concat(h[E])}return y},n.set=function(h,y){return or(this),this.i=null,h=Ii(this,h),wi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[y]),this.h+=1,this},n.get=function(h,y){return h?(h=this.V(h),0<h.length?String(h[0]):y):y};function bi(h,y,E){Wo(h,y),0<E.length&&(h.i=null,h.g.set(Ii(h,y),U(E)),h.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],y=Array.from(this.g.keys());for(var E=0;E<y.length;E++){var I=y[E];const Y=encodeURIComponent(String(I)),ce=this.V(I);for(I=0;I<ce.length;I++){var F=Y;ce[I]!==""&&(F+="="+encodeURIComponent(String(ce[I]))),h.push(F)}}return this.i=h.join("&")};function Ii(h,y){return y=String(y),h.j&&(y=y.toLowerCase()),y}function rc(h,y){y&&!h.j&&(or(h),h.i=null,h.g.forEach(function(E,I){var F=I.toLowerCase();I!=F&&(Wo(this,I),bi(this,F,E))},h)),h.j=y}function Ld(h,y){const E=new fs;if(d.Image){const I=new Image;I.onload=S(lr,E,"TestLoadImage: loaded",!0,y,I),I.onerror=S(lr,E,"TestLoadImage: error",!1,y,I),I.onabort=S(lr,E,"TestLoadImage: abort",!1,y,I),I.ontimeout=S(lr,E,"TestLoadImage: timeout",!1,y,I),d.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else y(!1)}function Na(h,y){const E=new fs,I=new AbortController,F=setTimeout(()=>{I.abort(),lr(E,"TestPingServer: timeout",!1,y)},1e4);fetch(h,{signal:I.signal}).then(Y=>{clearTimeout(F),Y.ok?lr(E,"TestPingServer: ok",!0,y):lr(E,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(F),lr(E,"TestPingServer: error",!1,y)})}function lr(h,y,E,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(E)}catch{}}function Oa(){this.g=new Rn}function Br(h,y,E){const I=E||"";try{xa(h,function(F,Y){let ce=F;m(F)&&(ce=Ku(F)),y.push(I+Y+"="+encodeURIComponent(ce))})}catch(F){throw y.push(I+"type="+encodeURIComponent("_badmap")),F}}function ws(h){this.l=h.Ub||null,this.j=h.eb||!1}D(ws,Qu),ws.prototype.g=function(){return new Ai(this.l,this.j)},ws.prototype.i=function(h){return function(){return h}}({});function Ai(h,y){$t.call(this),this.D=h,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Ai,$t),n=Ai.prototype,n.open=function(h,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=y,this.readyState=1,jr(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(y.body=h),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,jr(this)),this.g&&(this.readyState=3,jr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ic(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function ic(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var y=h.value?h.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!h.done}))&&(this.response=this.responseText+=y)}h.done?Fr(this):jr(this),this.readyState==3&&ic(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Fr(this))},n.Qa=function(h){this.g&&(this.response=h,Fr(this))},n.ga=function(){this.g&&Fr(this)};function Fr(h){h.readyState=4,h.l=null,h.j=null,h.v=null,jr(h)}n.setRequestHeader=function(h,y){this.u.append(h,y)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],y=this.h.entries();for(var E=y.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=y.next();return h.join(`\r
`)};function jr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function sc(h){let y="";return le(h,function(E,I){y+=I,y+=":",y+=E,y+=`\r
`}),y}function nn(h,y,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=sc(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):Qe(h,y,E))}function Ze(h){$t.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Ze,$t);var Xo=/^https?$/i,ka=["POST","PUT"];n=Ze.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,y,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);y=y?y.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ra.g(),this.v=this.o?xd(this.o):xd(Ra),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(y,String(h),!0),this.B=!1}catch(Y){Ud(this,Y);return}if(h=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)E.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const Y of I.keys())E.set(Y,I.get(Y));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(Y=>Y.toLowerCase()=="content-type"),F=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ka,y,void 0))||I||F||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,ce]of E)this.g.setRequestHeader(Y,ce);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Va(this),this.u=!0,this.g.send(h),this.u=!1}catch(Y){Ud(this,Y)}};function Ud(h,y){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=y,h.m=5,Jo(h),qr(h)}function Jo(h){h.A||(h.A=!0,en(h,"complete"),en(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,en(this,"complete"),en(this,"abort"),qr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qr(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Zo(this):this.bb())},n.bb=function(){Zo(this)};function Zo(h){if(h.h&&typeof u<"u"&&(!h.v[1]||ur(h)!=4||h.Z()!=2)){if(h.u&&ur(h)==4)Cd(h.Ea,0,h);else if(en(h,"readystatechange"),ur(h)==4){h.h=!1;try{const ce=h.Z();e:switch(ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var E;if(!(E=y)){var I;if(I=ce===0){var F=String(h.D).match(ec)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),I=!Xo.test(F?F.toLowerCase():"")}E=I}if(E)en(h,"complete"),en(h,"success");else{h.m=6;try{var Y=2<ur(h)?h.g.statusText:""}catch{Y=""}h.l=Y+" ["+h.Z()+"]",Jo(h)}}finally{qr(h)}}}}function qr(h,y){if(h.g){Va(h);const E=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,y||en(h,"ready");try{E.onreadystatechange=I}catch{}}}function Va(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function ur(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<ur(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var y=this.g.responseText;return h&&y.indexOf(h)==0&&(y=y.substring(h.length)),Vr(y)}};function zd(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function og(h){const y={};h=(h.g&&2<=ur(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(X(h[I]))continue;var E=V(h[I]);const F=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Y=y[F]||[];y[F]=Y,Y.push(E)}x(y,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ma(h,y,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||y}function el(h){this.Aa=0,this.i=[],this.j=new fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ma("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ma("baseRetryDelayMs",5e3,h),this.cb=Ma("retryDelaySeedMs",1e4,h),this.Wa=Ma("forwardChannelMaxRetries",2,h),this.wa=Ma("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Ju(h&&h.concurrentRequestLimit),this.Da=new Oa,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=el.prototype,n.la=8,n.G=1,n.connect=function(h,y,E,I){Ot(0),this.W=h,this.H=y||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Gd(this,null,this.W),nl(this)};function ac(h){if(Bd(h),h.G==3){var y=h.U++,E=At(h.I);if(Qe(E,"SID",h.K),Qe(E,"RID",y),Qe(E,"TYPE","terminate"),La(h,E),y=new Ur(h,h.j,y),y.L=2,y.v=Pa(At(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=y.v,E=!0),E||(y.g=Kd(y.j,null),y.g.ea(y.v)),y.F=Date.now(),yt(y)}$d(h)}function tl(h){h.g&&(Ua(h),h.g.cancel(),h.g=null)}function Bd(h){tl(h),h.u&&(d.clearTimeout(h.u),h.u=null),rl(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function nl(h){if(!Zu(h.h)&&!h.s){h.s=!0;var y=h.Ga;Ie||O(),we||(Ie(),we=!0),Oe.add(y,h),h.B=0}}function lg(h,y){return kd(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=y.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=ds(w(h.Ga,h,y),uc(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const F=new Ur(this,this.j,h);let Y=this.o;if(this.S&&(Y?(Y=R(Y),P(Y,this.S)):Y=this.S),this.m!==null||this.O||(F.H=Y,Y=null),this.P)e:{for(var y=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(y+=I,4096<y){y=E;break e}if(y===4096||E===this.i.length-1){y=E+1;break e}}y=1e3}else y=1e3;y=Fd(this,F,y),E=At(this.I),Qe(E,"RID",h),Qe(E,"CVER",22),this.D&&Qe(E,"X-HTTP-Session-Id",this.D),La(this,E),Y&&(this.O?y="headers="+encodeURIComponent(String(sc(Y)))+"&"+y:this.m&&nn(E,this.m,Y)),vs(this.h,F),this.Ua&&Qe(E,"TYPE","init"),this.P?(Qe(E,"$req",y),Qe(E,"SID","null"),F.T=!0,Ar(F,E,null)):Ar(F,E,y),this.G=2}}else this.G==3&&(h?oc(this,h):this.i.length==0||Zu(this.h)||oc(this))};function oc(h,y){var E;y?E=y.l:E=h.U++;const I=At(h.I);Qe(I,"SID",h.K),Qe(I,"RID",E),Qe(I,"AID",h.T),La(h,I),h.m&&h.o&&nn(I,h.m,h.o),E=new Ur(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),y&&(h.i=y.D.concat(h.i)),y=Fd(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),vs(h.h,E),Ar(E,I,y)}function La(h,y){h.H&&le(h.H,function(E,I){Qe(y,I,E)}),h.l&&xa({},function(E,I){Qe(y,I,E)})}function Fd(h,y,E){E=Math.min(h.i.length,E);var I=h.l?w(h.l.Na,h.l,h):null;e:{var F=h.i;let Y=-1;for(;;){const ce=["count="+E];Y==-1?0<E?(Y=F[0].g,ce.push("ofs="+Y)):Y=0:ce.push("ofs="+Y);let qe=!0;for(let Kt=0;Kt<E;Kt++){let He=F[Kt].g;const rn=F[Kt].map;if(He-=Y,0>He)Y=Math.max(0,F[Kt].g-100),qe=!1;else try{Br(rn,ce,"req"+He+"_")}catch{I&&I(rn)}}if(qe){I=ce.join("&");break e}}}return h=h.i.splice(0,E),y.D=h,I}function jd(h){if(!h.g&&!h.u){h.Y=1;var y=h.Fa;Ie||O(),we||(Ie(),we=!0),Oe.add(y,h),h.v=0}}function lc(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=ds(w(h.Fa,h),uc(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,qd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=ds(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),tl(this),qd(this))};function Ua(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function qd(h){h.g=new Ur(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var y=At(h.qa);Qe(y,"RID","rpc"),Qe(y,"SID",h.K),Qe(y,"AID",h.T),Qe(y,"CI",h.F?"0":"1"),!h.F&&h.ja&&Qe(y,"TO",h.ja),Qe(y,"TYPE","xmlhttp"),La(h,y),h.m&&h.o&&nn(y,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=Pa(At(y)),E.m=null,E.P=!0,Ei(E,h)}n.Za=function(){this.C!=null&&(this.C=null,tl(this),lc(this),Ot(19))};function rl(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Hd(h,y){var E=null;if(h.g==y){rl(h),Ua(h),h.g=null;var I=2}else if(_s(h.h,y))E=y.D,sr(h.h,y),I=1;else return;if(h.G!=0){if(y.o)if(I==1){E=y.m?y.m.length:0,y=Date.now()-y.F;var F=h.B;I=Ho(),en(I,new Pd(I,E)),nl(h)}else jd(h);else if(F=y.s,F==3||F==0&&0<y.X||!(I==1&&lg(h,y)||I==2&&lc(h)))switch(E&&0<E.length&&(y=h.h,y.i=y.i.concat(E)),F){case 1:Si(h,5);break;case 4:Si(h,10);break;case 3:Si(h,6);break;default:Si(h,2)}}}function uc(h,y){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*y}function Si(h,y){if(h.j.info("Error code "+y),y==2){var E=w(h.fb,h),I=h.Xa;const F=!I;I=new Ti(I||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Es(I,"https"),Pa(I),F?Ld(I.toString(),E):Na(I.toString(),E)}else Ot(2);h.G=0,h.l&&h.l.sa(y),$d(h),Bd(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function $d(h){if(h.G=0,h.ka=[],h.l){const y=Cn(h.h);(y.length!=0||h.i.length!=0)&&(L(h.ka,y),L(h.ka,h.i),h.h.i.length=0,U(h.i),h.i.length=0),h.l.ra()}}function Gd(h,y,E){var I=E instanceof Ti?At(E):new Ti(E);if(I.g!="")y&&(I.g=y+"."+I.g),Da(I,I.s);else{var F=d.location;I=F.protocol,y=y?y+"."+F.hostname:F.hostname,F=+F.port;var Y=new Ti(null);I&&Es(Y,I),y&&(Y.g=y),F&&Da(Y,F),E&&(Y.l=E),I=Y}return E=h.D,y=h.ya,E&&y&&Qe(I,E,y),Qe(I,"VER",h.la),La(h,I),I}function Kd(h,y,E){if(y&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=h.Ca&&!h.pa?new Ze(new ws({eb:E})):new Ze(h.pa),y.Ha(h.J),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qd(){}n=Qd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function il(){}il.prototype.g=function(h,y){return new xn(h,y)};function xn(h,y){$t.call(this),this.g=new el(y),this.l=h,this.h=y&&y.messageUrlParams||null,h=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(h?h["X-WebChannel-Content-Type"]=y.messageContentType:h={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(h?h["X-WebChannel-Client-Profile"]=y.va:h={"X-WebChannel-Client-Profile":y.va}),this.g.S=h,(h=y&&y.Sb)&&!X(h)&&(this.g.m=h),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!X(y)&&(this.g.D=y,h=this.h,h!==null&&y in h&&(h=this.h,y in h&&delete h[y])),this.j=new Hr(this)}D(xn,$t),xn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xn.prototype.close=function(){ac(this.g)},xn.prototype.o=function(h){var y=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=Ku(h),h=E);y.i.push(new ng(y.Ya++,h)),y.G==3&&nl(y)},xn.prototype.N=function(){this.g.l=null,delete this.j,ac(this.g),delete this.g,xn.aa.N.call(this)};function Yd(h){us.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var y=h.__sm__;if(y){e:{for(const E in y){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,y=y!==null&&h in y?y[h]:void 0),this.data=y}else this.data=h}D(Yd,us);function Wd(){Ir.call(this),this.status=1}D(Wd,Ir);function Hr(h){this.g=h}D(Hr,Qd),Hr.prototype.ua=function(){en(this.g,"a")},Hr.prototype.ta=function(h){en(this.g,new Yd(h))},Hr.prototype.sa=function(h){en(this.g,new Wd)},Hr.prototype.ra=function(){en(this.g,"b")},il.prototype.createWebChannel=il.prototype.g,xn.prototype.send=xn.prototype.o,xn.prototype.open=xn.prototype.m,xn.prototype.close=xn.prototype.close,x1=function(){return new il},C1=function(){return Ho()},R1=ir,W_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gt.NO_ERROR=0,Gt.TIMEOUT=8,Gt.HTTP_ERROR=6,_p=Gt,vi.COMPLETE="complete",S1=vi,Dd.EventType=Mr,Mr.OPEN="a",Mr.CLOSE="b",Mr.ERROR="c",Mr.MESSAGE="d",$t.prototype.listen=$t.prototype.K,dh=Dd,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,A1=Ze}).apply(typeof Zf<"u"?Zf:typeof self<"u"?self:typeof window<"u"?window:{});const BI="@firebase/firestore",FI="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new mm("@firebase/firestore");function zl(){return la.logLevel}function RU(n){la.setLogLevel(n)}function re(n,...e){if(la.logLevel<=ze.DEBUG){const t=e.map(gE);la.debug(`Firestore (${Mu}): ${n}`,...t)}}function Vt(n,...e){if(la.logLevel<=ze.ERROR){const t=e.map(gE);la.error(`Firestore (${Mu}): ${n}`,...t)}}function di(n,...e){if(la.logLevel<=ze.WARN){const t=e.map(gE);la.warn(`Firestore (${Mu}): ${n}`,...t)}}function gE(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,D1(n,r,t)}function D1(n,e,t){let r=`FIRESTORE (${Mu}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Vt(r),new Error(r)}function ve(n,e,t,r){let a="Unexpected state";typeof t=="string"?a=t:r=t,n||D1(e,a,r)}function CU(n,e){n||ge(57014,e)}function fe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xU{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(cn.UNAUTHENTICATED))}shutdown(){}}class DU{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class PU{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ve(this.o===void 0,42304);let r=this.i;const a=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let o=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new _n,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const p=o;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new _n)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new P1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new cn(e)}}class NU{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class OU{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new NU(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kU{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ve(this.o===void 0,3512);const r=o=>{o.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,re("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const a=o=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>a(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?a(o):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new jI(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ve(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new jI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VU(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=VU(40);for(let o=0;o<a.length;++o)r.length<20&&a[o]<t&&(r+=e.charAt(a[o]%62))}return r}}function Re(n,e){return n<e?-1:n>e?1:0}function X_(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Re(r,a);{const o=yE(),u=MU(o.encode(qI(n,t)),o.encode(qI(e,t)));return u!==0?u:Re(r,a)}}t+=r>65535?2:1}return Re(n.length,e.length)}function qI(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function MU(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Re(n[t],e[t]);return Re(n.length,e.length)}function lu(n,e,t){return n.length===e.length&&n.every((r,a)=>t(r,e[a]))}function O1(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=-62135596800,$I=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*$I);return new gt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<HI)throw new te(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$I}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-HI;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new gt(0,0))}static max(){return new Te(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="__name__";class Xr{constructor(e,t,r){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ge(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const o=Xr.compareSegments(e.get(a),t.get(a));if(o!==0)return o}return Re(e.length,t.length)}static compareSegments(e,t){const r=Xr.isNumericId(e),a=Xr.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?Xr.extractNumericId(e).compare(Xr.extractNumericId(t)):X_(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ta.fromString(e.substring(4,e.length-2))}}class Be extends Xr{construct(e,t,r){return new Be(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(Q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new Be(t)}static emptyPath(){return new Be([])}}const LU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends Xr{construct(e,t,r){return new pt(e,t,r)}static isValidIdentifier(e){return LU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===GI}static keyField(){return new pt([GI])}static fromServerFormat(e){const t=[];let r="",a=0;const o=()=>{if(r.length===0)throw new te(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new te(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new te(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,a+=2}else d==="`"?(u=!u,a++):d!=="."||u?(r+=d,a++):(o(),a++)}if(o(),u)throw new te(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(t)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Be.fromString(e))}static fromName(e){return new he(Be.fromString(e).popFirst(5))}static empty(){return new he(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Be(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=-1;class jp{constructor(e,t,r,a){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=a}}function J_(n){return n.fields.find(e=>e.kind===2)}function so(n){return n.fields.filter(e=>e.kind!==2)}jp.UNKNOWN_ID=-1;class vp{constructor(e,t){this.fieldPath=e,this.kind=t}}class zh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new zh(0,nr.min())}}function k1(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,a=Te.fromTimestamp(r===1e9?new gt(t+1,0):new gt(t,r));return new nr(a,he.empty(),e)}function V1(n){return new nr(n.readTime,n.key,uu)}class nr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nr(Te.min(),he.empty(),uu)}static max(){return new nr(Te.max(),he.empty(),uu)}}function _E(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=he.comparator(n.documentKey,e.documentKey),t!==0?t:Re(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class L1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(n){if(n.code!==Q.FAILED_PRECONDITION||n.message!==M1)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((r,a)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,a)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,r)=>{t(e)})}static reject(e){return new j((t,r)=>{r(e)})}static waitFor(e){return new j((t,r)=>{let a=0,o=0,u=!1;e.forEach(d=>{++a,d.next(()=>{++o,u&&o===a&&t()},p=>r(p))}),u=!0,o===a&&t()})}static or(e){let t=j.resolve(!1);for(const r of e)t=t.next(a=>a?j.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,o)=>{r.push(t.call(this,a,o))}),this.waitFor(r)}static mapArray(e,t){return new j((r,a)=>{const o=e.length,u=new Array(o);let d=0;for(let p=0;p<o;p++){const m=p;t(e[m]).next(_=>{u[m]=_,++d,d===o&&r(u)},_=>a(_))}})}static doWhile(e,t){return new j((r,a)=>{const o=()=>{e()===!0?t().next(()=>{o()},a):r()};o()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="SimpleDb";class Rm{static open(e,t,r,a){try{return new Rm(t,e.transaction(a,r))}catch(o){throw new wh(t,o)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new _n,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new wh(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const a=vE(r.target.error);this.S.reject(new wh(e,a))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(re(Zn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new zU(t)}}class oi{static delete(e){return re(Zn,"Removing database:",e),oo(jv().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Nh())return!1;if(oi.F())return!0;const e=wt(),t=oi.M(e),r=0<t&&t<10,a=U1(e),o=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,oi.M(wt())===12.2&&Vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(re(Zn,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=o=>{const u=o.target.result;t(u)},a.onblocked=()=>{r(new wh(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=o=>{const u=o.target.error;u.name==="VersionError"?r(new te(Q.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new te(Q.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new wh(e,u))},a.onupgradeneeded=o=>{re(Zn,'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const u=o.target.result;if(this.L!==null&&this.L!==o.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${o.oldVersion}, event.newVersion=${o.newVersion}, db.version=${u.version}`);this.B.q(u,a.transaction,o.oldVersion,this.version).next(()=>{re(Zn,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const r=t.target;this.L=r.version},{passive:!0})),this.$&&(this.db.onversionchange=t=>this.$(t)),this.db}U(e){this.$=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,a){const o=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.k(e);const d=Rm.open(this.db,e,o?"readonly":"readwrite",r),p=a(d).next(m=>(d.v(),m)).catch(m=>(d.abort(m),j.reject(m))).toPromise();return p.catch(()=>{}),await d.D,p}catch(d){const p=d,m=p.name!=="FirebaseError"&&u<3;if(re(Zn,"Transaction failed with error:",p.message,"Retrying:",m),this.close(),!m)return Promise.reject(p)}}}close(){this.db&&this.db.close(),this.db=void 0}}function U1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class UU{constructor(e){this.K=e,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(e){this.K=e}done(){this.W=!0}H(e){this.G=e}delete(){return oo(this.K.delete())}}class wh extends te{constructor(e,t){super(Q.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ta(n){return n.name==="IndexedDbTransactionError"}class zU{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(re(Zn,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(re(Zn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),oo(r)}add(e){return re(Zn,"ADD",this.store.name,e,e),oo(this.store.add(e))}get(e){return oo(this.store.get(e)).next(t=>(t===void 0&&(t=null),re(Zn,"GET",this.store.name,e,t),t))}delete(e){return re(Zn,"DELETE",this.store.name,e),oo(this.store.delete(e))}count(){return re(Zn,"COUNT",this.store.name),oo(this.store.count())}J(e,t){const r=this.options(e,t),a=r.index?this.store.index(r.index):this.store;if(typeof a.getAll=="function"){const o=a.getAll(r.range);return new j((u,d)=>{o.onerror=p=>{d(p.target.error)},o.onsuccess=p=>{u(p.target.result)}})}{const o=this.cursor(r),u=[];return this.Y(o,(d,p)=>{u.push(p)}).next(()=>u)}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new j((a,o)=>{r.onerror=u=>{o(u.target.error)},r.onsuccess=u=>{a(u.target.result)}})}X(e,t){re(Zn,"DELETE ALL",this.store.name);const r=this.options(e,t);r.ee=!1;const a=this.cursor(r);return this.Y(a,(o,u,d)=>d.delete())}te(e,t){let r;t?r=e:(r={},t=e);const a=this.cursor(r);return this.Y(a,t)}ne(e){const t=this.cursor({});return new j((r,a)=>{t.onerror=o=>{const u=vE(o.target.error);a(u)},t.onsuccess=o=>{const u=o.target.result;u?e(u.primaryKey,u.value).next(d=>{d?u.continue():r()}):r()}})}Y(e,t){const r=[];return new j((a,o)=>{e.onerror=u=>{o(u.target.error)},e.onsuccess=u=>{const d=u.target.result;if(!d)return void a();const p=new UU(d),m=t(d.primaryKey,d.value,p);if(m instanceof j){const _=m.catch(v=>(p.done(),j.reject(v)));r.push(_)}p.isDone?a():p.j===null?d.continue():d.continue(p.j)}}).next(()=>j.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.ee?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function oo(n){return new j((e,t)=>{n.onsuccess=r=>{const a=r.target.result;e(a)},n.onerror=r=>{const a=vE(r.target.error);t(a)}})}let KI=!1;function vE(n){const e=oi.M(wt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new te("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return KI||(KI=!0,setTimeout(()=>{throw r},0)),r}}return n}const bh="IndexBackfiller";class BU{constructor(e,t){this.asyncQueue=e,this.re=t,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(e){re(bh,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.re.se();re(bh,`Documents written: ${t}`)}catch(t){Ta(t)?re(bh,"Ignoring IndexedDB error during index backfill: ",t):await Ea(t)}await this.ie(6e4)})}}class FU{constructor(e,t){this.localStore=e,this.persistence=t}async se(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.oe(t,e))}oe(e,t){const r=new Set;let a=t,o=!0;return j.doWhile(()=>o===!0&&a>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(u=>{if(u!==null&&!r.has(u))return re(bh,`Processing collection: ${u}`),this._e(e,u,a).next(d=>{a-=d,r.add(u)});o=!1})).next(()=>t-a)}_e(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(a=>this.localStore.localDocuments.getNextDocuments(e,t,a,r).next(o=>{const u=o.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next(()=>this.ae(a,o)).next(d=>(re(bh,`Updating offset: ${d}`),this.localStore.indexManager.updateCollectionGroup(e,t,d))).next(()=>u.size)}))}ae(e,t){let r=e;return t.changes.forEach((a,o)=>{const u=V1(o);_E(u,r)>0&&(r=u)}),new nr(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}jn.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=-1;function fd(n){return n==null}function Bh(n){return n===0&&1/n==-1/0}function z1(n){return typeof n=="number"&&Number.isInteger(n)&&!Bh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="";function An(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=QI(e)),e=jU(n.get(t),e);return QI(e)}function jU(n,e){let t=e;const r=n.length;for(let a=0;a<r;a++){const o=n.charAt(a);switch(o){case"\0":t+="";break;case qp:t+="";break;default:t+=o}}return t}function QI(n){return n+qp+""}function si(n){const e=n.length;if(ve(e>=2,64408,{path:n}),e===2)return ve(n.charAt(0)===qp&&n.charAt(1)==="",56145,{path:n}),Be.emptyPath();const t=e-2,r=[];let a="";for(let o=0;o<e;){const u=n.indexOf(qp,o);switch((u<0||u>t)&&ge(50515,{path:n}),n.charAt(u+1)){case"":const d=n.substring(o,u);let p;a.length===0?p=d:(a+=d,p=a,a=""),r.push(p);break;case"":a+=n.substring(o,u),a+="\0";break;case"":a+=n.substring(o,u+1);break;default:ge(61167,{path:n})}o=u+2}return new Be(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="remoteDocuments",pd="owner",Ol="owner",Fh="mutationQueues",qU="userId",Dr="mutations",YI="batchId",mo="userMutationsIndex",WI=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n,e){return[n,An(e)]}function B1(n,e,t){return[n,An(e),t]}const HU={},cu="documentMutations",Hp="remoteDocumentsV14",$U=["prefixPath","collectionGroup","readTime","documentId"],Tp="documentKeyIndex",GU=["prefixPath","collectionGroup","documentId"],F1="collectionGroupIndex",KU=["collectionGroup","readTime","prefixPath","documentId"],jh="remoteDocumentGlobal",Z_="remoteDocumentGlobalKey",hu="targets",j1="queryTargetsIndex",QU=["canonicalId","targetId"],du="targetDocuments",YU=["targetId","path"],EE="documentTargetsIndex",WU=["path","targetId"],$p="targetGlobalKey",wo="targetGlobal",qh="collectionParents",XU=["collectionId","parent"],fu="clientMetadata",JU="clientId",Cm="bundles",ZU="bundleId",xm="namedQueries",e6="name",TE="indexConfiguration",t6="indexId",ev="collectionGroupIndex",n6="collectionGroup",Gp="indexState",r6=["indexId","uid"],q1="sequenceNumberIndex",i6=["uid","sequenceNumber"],Kp="indexEntries",s6=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],H1="documentKeyIndex",a6=["indexId","uid","orderedDocumentKey"],Dm="documentOverlays",o6=["userId","collectionPath","documentId"],tv="collectionPathOverlayIndex",l6=["userId","collectionPath","largestBatchId"],$1="collectionGroupOverlayIndex",u6=["userId","collectionGroup","largestBatchId"],wE="globals",c6="name",G1=[Fh,Dr,cu,ao,hu,pd,wo,du,fu,jh,qh,Cm,xm],h6=[...G1,Dm],K1=[Fh,Dr,cu,Hp,hu,pd,wo,du,fu,jh,qh,Cm,xm,Dm],Q1=K1,bE=[...Q1,TE,Gp,Kp],d6=bE,f6=[...bE,wE];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv extends L1{constructor(e,t){super(),this.he=e,this.currentSequenceNumber=t}}function Jt(n,e){const t=fe(n);return oi.N(t.he,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function wa(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Y1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.comparator=e,this.root=t||gn.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gn.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ep(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ep(this.root,e,this.comparator,!1)}getReverseIterator(){return new ep(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ep(this.root,e,this.comparator,!0)}}class ep{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&a&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gn{constructor(e,t,r,a,o){this.key=e,this.value=t,this.color=r??gn.RED,this.left=a??gn.EMPTY,this.right=o??gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,o){return new gn(e??this.key,t??this.value,r??this.color,a??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const o=r(e,a.key);return a=o<0?a.copy(null,null,null,a.left.insert(e,t,r),null):o===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return gn.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}gn.EMPTY=null,gn.RED=!0,gn.BLACK=!1;gn.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,r,a,o){return this}insert(e,t,r){return new gn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new JI(this.data.getIterator())}getIteratorFrom(e){return new JI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(this.comparator(a,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new nt(this.comparator);return t.data=e,t}}class JI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function kl(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new qn([])}unionWith(e){let t=new nt(pt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return lu(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p6(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new W1("Invalid base64 string: "+o):o}}(e);return new xt(t)}static fromUint8Array(e){const t=function(a){let o="";for(let u=0;u<a.length;++u)o+=String.fromCharCode(a[u]);return o}(e);return new xt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const m6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xi(n){if(ve(!!n,39018),typeof n=="string"){let e=0;const t=m6.exec(n);if(ve(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ji(n){return typeof n=="string"?xt.fromBase64String(n):xt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="server_timestamp",J1="__type__",Z1="__previous_value__",eC="__local_write_time__";function Pm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[J1])===null||t===void 0?void 0:t.stringValue)===X1}function Nm(n){const e=n.mapValue.fields[Z1];return Pm(e)?Nm(e):e}function Hh(n){const e=Xi(n.mapValue.fields[eC].timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g6{constructor(e,t,r,a,o,u,d,p,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=m}}const rv="(default)";class ua{constructor(e,t){this.projectId=e,this.database=t||rv}static empty(){return new ua("","")}get isDefaultDatabase(){return this.database===rv}isEqual(e){return e instanceof ua&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="__type__",tC="__max__",Xs={mapValue:{fields:{__type__:{stringValue:tC}}}},AE="__vector__",pu="value",wp={nullValue:"NULL_VALUE"};function ca(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pm(n)?4:nC(n)?9007199254740991:Om(n)?10:11:ge(28295,{value:n})}function fi(n,e){if(n===e)return!0;const t=ca(n);if(t!==ca(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Hh(n).isEqual(Hh(e));case 3:return function(a,o){if(typeof a.timestampValue=="string"&&typeof o.timestampValue=="string"&&a.timestampValue.length===o.timestampValue.length)return a.timestampValue===o.timestampValue;const u=Xi(a.timestampValue),d=Xi(o.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,o){return Ji(a.bytesValue).isEqual(Ji(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,o){return dt(a.geoPointValue.latitude)===dt(o.geoPointValue.latitude)&&dt(a.geoPointValue.longitude)===dt(o.geoPointValue.longitude)}(n,e);case 2:return function(a,o){if("integerValue"in a&&"integerValue"in o)return dt(a.integerValue)===dt(o.integerValue);if("doubleValue"in a&&"doubleValue"in o){const u=dt(a.doubleValue),d=dt(o.doubleValue);return u===d?Bh(u)===Bh(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return lu(n.arrayValue.values||[],e.arrayValue.values||[],fi);case 10:case 11:return function(a,o){const u=a.mapValue.fields||{},d=o.mapValue.fields||{};if(XI(u)!==XI(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!fi(u[p],d[p])))return!1;return!0}(n,e);default:return ge(52216,{left:n})}}function $h(n,e){return(n.values||[]).find(t=>fi(t,e))!==void 0}function ha(n,e){if(n===e)return 0;const t=ca(n),r=ca(e);if(t!==r)return Re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(n.booleanValue,e.booleanValue);case 2:return function(o,u){const d=dt(o.integerValue||o.doubleValue),p=dt(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return ZI(n.timestampValue,e.timestampValue);case 4:return ZI(Hh(n),Hh(e));case 5:return X_(n.stringValue,e.stringValue);case 6:return function(o,u){const d=Ji(o),p=Ji(u);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(o,u){const d=o.split("/"),p=u.split("/");for(let m=0;m<d.length&&m<p.length;m++){const _=Re(d[m],p[m]);if(_!==0)return _}return Re(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,u){const d=Re(dt(o.latitude),dt(u.latitude));return d!==0?d:Re(dt(o.longitude),dt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return eA(n.arrayValue,e.arrayValue);case 10:return function(o,u){var d,p,m,_;const v=o.fields||{},w=u.fields||{},S=(d=v[pu])===null||d===void 0?void 0:d.arrayValue,D=(p=w[pu])===null||p===void 0?void 0:p.arrayValue,U=Re(((m=S==null?void 0:S.values)===null||m===void 0?void 0:m.length)||0,((_=D==null?void 0:D.values)===null||_===void 0?void 0:_.length)||0);return U!==0?U:eA(S,D)}(n.mapValue,e.mapValue);case 11:return function(o,u){if(o===Xs.mapValue&&u===Xs.mapValue)return 0;if(o===Xs.mapValue)return 1;if(u===Xs.mapValue)return-1;const d=o.fields||{},p=Object.keys(d),m=u.fields||{},_=Object.keys(m);p.sort(),_.sort();for(let v=0;v<p.length&&v<_.length;++v){const w=X_(p[v],_[v]);if(w!==0)return w;const S=ha(d[p[v]],m[_[v]]);if(S!==0)return S}return Re(p.length,_.length)}(n.mapValue,e.mapValue);default:throw ge(23264,{Pe:t})}}function ZI(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Re(n,e);const t=Xi(n),r=Xi(e),a=Re(t.seconds,r.seconds);return a!==0?a:Re(t.nanos,r.nanos)}function eA(n,e){const t=n.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const o=ha(t[a],r[a]);if(o)return o}return Re(t.length,r.length)}function mu(n){return iv(n)}function iv(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xi(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ji(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return he.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",a=!0;for(const o of t.values||[])a?a=!1:r+=",",r+=iv(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",o=!0;for(const u of r)o?o=!1:a+=",",a+=`${u}:${iv(t.fields[u])}`;return a+"}"}(n.mapValue):ge(61005,{value:n})}function bp(n){switch(ca(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Nm(n);return e?16+bp(e):16;case 5:return 2*n.stringValue.length;case 6:return Ji(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,o)=>a+bp(o),0)}(n.arrayValue);case 10:case 11:return function(r){let a=0;return wa(r.fields,(o,u)=>{a+=o.length+bp(u)}),a}(n.mapValue);default:throw ge(13486,{value:n})}}function So(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function sv(n){return!!n&&"integerValue"in n}function Gh(n){return!!n&&"arrayValue"in n}function tA(n){return!!n&&"nullValue"in n}function nA(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ip(n){return!!n&&"mapValue"in n}function Om(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[IE])===null||t===void 0?void 0:t.stringValue)===AE}function Ih(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return wa(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ih(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ih(n.arrayValue.values[t]);return e}return Object.assign({},n)}function nC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===tC}const rC={mapValue:{fields:{[IE]:{stringValue:AE},[pu]:{arrayValue:{}}}}};function y6(n){return"nullValue"in n?wp:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?So(ua.empty(),he.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Om(n)?rC:{mapValue:{}}:ge(35942,{value:n})}function _6(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?So(ua.empty(),he.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?rC:"mapValue"in n?Om(n)?{mapValue:{}}:Xs:ge(61959,{value:n})}function rA(n,e){const t=ha(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function iA(n,e){const t=ha(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ip(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ih(t)}setAll(e){let t=pt.emptyPath(),r={},a=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,r,a),r={},a=[],t=d.popLast()}u?r[d.lastSegment()]=Ih(u):a.push(d.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,a)}delete(e){const t=this.field(e.popLast());Ip(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];Ip(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){wa(t,(a,o)=>e[a]=o);for(const a of r)delete e[a]}clone(){return new yn(Ih(this.value))}}function iC(n){const e=[];return wa(n.fields,(t,r)=>{const a=new pt([t]);if(Ip(r)){const o=iC(r.mapValue).fields;if(o.length===0)e.push(a);else for(const u of o)e.push(a.child(u))}else e.push(a)}),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,r,a,o,u,d){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=o,this.data=u,this.documentState=d}static newInvalidDocument(e){return new ht(e,0,Te.min(),Te.min(),Te.min(),yn.empty(),0)}static newFoundDocument(e,t,r,a){return new ht(e,1,t,Te.min(),r,a,0)}static newNoDocument(e,t){return new ht(e,2,t,Te.min(),Te.min(),yn.empty(),0)}static newUnknownDocument(e,t){return new ht(e,3,t,Te.min(),Te.min(),yn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.position=e,this.inclusive=t}}function sA(n,e,t){let r=0;for(let a=0;a<n.position.length;a++){const o=e[a],u=n.position[a];if(o.field.isKeyField()?r=he.comparator(he.fromName(u.referenceValue),t.key):r=ha(u,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function aA(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!fi(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t="asc"){this.field=e,this.dir=t}}function v6(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{}class Fe extends sC{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new E6(e,t,r):t==="array-contains"?new b6(e,r):t==="in"?new hC(e,r):t==="not-in"?new I6(e,r):t==="array-contains-any"?new A6(e,r):new Fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new T6(e,r):new w6(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ha(t,this.value)):t!==null&&ca(this.value)===ca(t)&&this.matchesComparison(ha(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends sC{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new tt(e,t)}matches(e){return gu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function gu(n){return n.op==="and"}function av(n){return n.op==="or"}function SE(n){return aC(n)&&gu(n)}function aC(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function ov(n){if(n instanceof Fe)return n.field.canonicalString()+n.op.toString()+mu(n.value);if(SE(n))return n.filters.map(e=>ov(e)).join(",");{const e=n.filters.map(t=>ov(t)).join(",");return`${n.op}(${e})`}}function oC(n,e){return n instanceof Fe?function(r,a){return a instanceof Fe&&r.op===a.op&&r.field.isEqual(a.field)&&fi(r.value,a.value)}(n,e):n instanceof tt?function(r,a){return a instanceof tt&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((o,u,d)=>o&&oC(u,a.filters[d]),!0):!1}(n,e):void ge(19439)}function lC(n,e){const t=n.filters.concat(e);return tt.create(t,n.op)}function uC(n){return n instanceof Fe?function(t){return`${t.field.canonicalString()} ${t.op} ${mu(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(uC).join(" ,")+"}"}(n):"Filter"}class E6 extends Fe{constructor(e,t,r){super(e,t,r),this.key=he.fromName(r.referenceValue)}matches(e){const t=he.comparator(e.key,this.key);return this.matchesComparison(t)}}class T6 extends Fe{constructor(e,t){super(e,"in",t),this.keys=cC("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class w6 extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=cC("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function cC(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>he.fromName(r.referenceValue))}class b6 extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gh(t)&&$h(t.arrayValue,this.value)}}class hC extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$h(this.value.arrayValue,t)}}class I6 extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if($h(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!$h(this.value.arrayValue,t)}}class A6 extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gh(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>$h(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S6{constructor(e,t=null,r=[],a=[],o=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=o,this.startAt=u,this.endAt=d,this.Ie=null}}function lv(n,e=null,t=[],r=[],a=null,o=null,u=null){return new S6(n,e,t,r,a,o,u)}function Ro(n){const e=fe(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ov(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),fd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>mu(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>mu(r)).join(",")),e.Ie=t}return e.Ie}function md(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!v6(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!oC(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!aA(n.startAt,e.startAt)&&aA(n.endAt,e.endAt)}function Qp(n){return he.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Yp(n,e){return n.filters.filter(t=>t instanceof Fe&&t.field.isEqual(e))}function oA(n,e,t){let r=wp,a=!0;for(const o of Yp(n,e)){let u=wp,d=!0;switch(o.op){case"<":case"<=":u=y6(o.value);break;case"==":case"in":case">=":u=o.value;break;case">":u=o.value,d=!1;break;case"!=":case"not-in":u=wp}rA({value:r,inclusive:a},{value:u,inclusive:d})<0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];rA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})<0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}function lA(n,e,t){let r=Xs,a=!0;for(const o of Yp(n,e)){let u=Xs,d=!0;switch(o.op){case">=":case">":u=_6(o.value),d=!1;break;case"==":case"in":case"<=":u=o.value;break;case"<":u=o.value,d=!1;break;case"!=":case"not-in":u=Xs}iA({value:r,inclusive:a},{value:u,inclusive:d})>0&&(r=u,a=d)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];iA({value:r,inclusive:a},{value:u,inclusive:t.inclusive})>0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t=null,r=[],a=[],o=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=o,this.limitType=u,this.startAt=d,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function dC(n,e,t,r,a,o,u,d){return new ns(n,e,t,r,a,o,u,d)}function Lu(n){return new ns(n)}function uA(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function RE(n){return n.collectionGroup!==null}function Xl(n){const e=fe(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new nt(pt.comparator);return u.filters.forEach(p=>{p.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new Kh(o,r))}),t.has(pt.keyField().canonicalString())||e.Ee.push(new Kh(pt.keyField(),r))}return e.Ee}function Vn(n){const e=fe(n);return e.de||(e.de=R6(e,Xl(n))),e.de}function R6(n,e){if(n.limitType==="F")return lv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const o=a.dir==="desc"?"asc":"desc";return new Kh(a.field,o)});const t=n.endAt?new da(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new da(n.startAt.position,n.startAt.inclusive):null;return lv(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function uv(n,e){const t=n.filters.concat([e]);return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Wp(n,e,t){return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function gd(n,e){return md(Vn(n),Vn(e))&&n.limitType===e.limitType}function fC(n){return`${Ro(Vn(n))}|lt:${n.limitType}`}function Bl(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>uC(a)).join(", ")}]`),fd(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>mu(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>mu(a)).join(",")),`Target(${r})`}(Vn(n))}; limitType=${n.limitType})`}function yd(n,e){return e.isFoundDocument()&&function(r,a){const o=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):he.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,a){for(const o of Xl(r))if(!o.field.isKeyField()&&a.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,a){for(const o of r.filters)if(!o.matches(a))return!1;return!0}(n,e)&&function(r,a){return!(r.startAt&&!function(u,d,p){const m=sA(u,d,p);return u.inclusive?m<=0:m<0}(r.startAt,Xl(r),a)||r.endAt&&!function(u,d,p){const m=sA(u,d,p);return u.inclusive?m>=0:m>0}(r.endAt,Xl(r),a))}(n,e)}function pC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mC(n){return(e,t)=>{let r=!1;for(const a of Xl(n)){const o=C6(a,e,t);if(o!==0)return o;r=r||a.field.isKeyField()}return 0}}function C6(n,e,t){const r=n.field.isKeyField()?he.comparator(e.key,t.key):function(o,u,d){const p=u.data.field(o),m=d.data.field(o);return p!==null&&m!==null?ha(p,m):ge(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ge(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,o]of r)if(this.equalsFn(a,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return void(a[o]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){wa(this.inner,(t,r)=>{for(const[a,o]of r)e(a,o)})}isEmpty(){return Y1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x6=new lt(he.comparator);function Hn(){return x6}const gC=new lt(he.comparator);function fh(...n){let e=gC;for(const t of n)e=e.insert(t.key,t);return e}function yC(n){let e=gC;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ai(){return Ah()}function _C(){return Ah()}function Ah(){return new rs(n=>n.toString(),(n,e)=>n.isEqual(e))}const D6=new lt(he.comparator),P6=new nt(he.comparator);function Pe(...n){let e=P6;for(const t of n)e=e.add(t);return e}const N6=new nt(Re);function CE(){return N6}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bh(e)?"-0":e}}function vC(n){return{integerValue:""+n}}function EC(n,e){return z1(e)?vC(e):xE(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this._=void 0}}function O6(n,e,t){return n instanceof yu?function(a,o){const u={fields:{[J1]:{stringValue:X1},[eC]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return o&&Pm(o)&&(o=Nm(o)),o&&(u.fields[Z1]=o),{mapValue:u}}(t,e):n instanceof Co?wC(n,e):n instanceof xo?bC(n,e):function(a,o){const u=TC(a,o),d=cA(u)+cA(a.Re);return sv(u)&&sv(a.Re)?vC(d):xE(a.serializer,d)}(n,e)}function k6(n,e,t){return n instanceof Co?wC(n,e):n instanceof xo?bC(n,e):t}function TC(n,e){return n instanceof _u?function(r){return sv(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class yu extends km{}class Co extends km{constructor(e){super(),this.elements=e}}function wC(n,e){const t=IC(e);for(const r of n.elements)t.some(a=>fi(a,r))||t.push(r);return{arrayValue:{values:t}}}class xo extends km{constructor(e){super(),this.elements=e}}function bC(n,e){let t=IC(e);for(const r of n.elements)t=t.filter(a=>!fi(a,r));return{arrayValue:{values:t}}}class _u extends km{constructor(e,t){super(),this.serializer=e,this.Re=t}}function cA(n){return dt(n.integerValue||n.doubleValue)}function IC(n){return Gh(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,t){this.field=e,this.transform=t}}function V6(n,e){return n.field.isEqual(e.field)&&function(r,a){return r instanceof Co&&a instanceof Co||r instanceof xo&&a instanceof xo?lu(r.elements,a.elements,fi):r instanceof _u&&a instanceof _u?fi(r.Re,a.Re):r instanceof yu&&a instanceof yu}(n.transform,e.transform)}class M6{constructor(e,t){this.version=e,this.transformResults=t}}class mt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mt}static exists(e){return new mt(void 0,e)}static updateTime(e){return new mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ap(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Vm{}function AC(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zu(n.key,mt.none()):new Uu(n.key,n.data,mt.none());{const t=n.data,r=yn.empty();let a=new nt(pt.comparator);for(let o of e.fields)if(!a.has(o)){let u=t.field(o);u===null&&o.length>1&&(o=o.popLast(),u=t.field(o)),u===null?r.delete(o):r.set(o,u),a=a.add(o)}return new is(n.key,r,new qn(a.toArray()),mt.none())}}function L6(n,e,t){n instanceof Uu?function(a,o,u){const d=a.value.clone(),p=dA(a.fieldTransforms,o,u.transformResults);d.setAll(p),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof is?function(a,o,u){if(!Ap(a.precondition,o))return void o.convertToUnknownDocument(u.version);const d=dA(a.fieldTransforms,o,u.transformResults),p=o.data;p.setAll(SC(a)),p.setAll(d),o.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(n,e,t):function(a,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function Sh(n,e,t,r){return n instanceof Uu?function(o,u,d,p){if(!Ap(o.precondition,u))return d;const m=o.value.clone(),_=fA(o.fieldTransforms,p,u);return m.setAll(_),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,r):n instanceof is?function(o,u,d,p){if(!Ap(o.precondition,u))return d;const m=fA(o.fieldTransforms,p,u),_=u.data;return _.setAll(SC(o)),_.setAll(m),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),d===null?null:d.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,u,d){return Ap(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function U6(n,e){let t=null;for(const r of n.fieldTransforms){const a=e.data.field(r.field),o=TC(r.transform,a||null);o!=null&&(t===null&&(t=yn.empty()),t.set(r.field,o))}return t||null}function hA(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&lu(r,a,(o,u)=>V6(o,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Uu extends Vm{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class is extends Vm{constructor(e,t,r,a,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function SC(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function dA(n,e,t){const r=new Map;ve(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let a=0;a<t.length;a++){const o=n[a],u=o.transform,d=e.data.field(o.field);r.set(o.field,k6(u,d,t[a]))}return r}function fA(n,e,t){const r=new Map;for(const a of n){const o=a.transform,u=t.data.field(a.field);r.set(a.field,O6(o,u,e))}return r}class zu extends Vm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DE extends Vm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const o=this.mutations[a];o.key.isEqual(e.key)&&L6(o,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Sh(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Sh(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=_C();return this.mutations.forEach(a=>{const o=e.get(a.key),u=o.overlayedDocument;let d=this.applyToLocalView(u,o.mutatedFields);d=t.has(a.key)?null:d;const p=AC(u,d);p!==null&&r.set(a.key,p),u.isValidDocument()||u.convertToNoDocument(Te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&lu(this.mutations,e.mutations,(t,r)=>hA(t,r))&&lu(this.baseMutations,e.baseMutations,(t,r)=>hA(t,r))}}class NE{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){ve(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let a=function(){return D6}();const o=e.mutations;for(let u=0;u<o.length;u++)a=a.insert(o[u].key,r[u].version);return new NE(e,t,r,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z6{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jt,Ge;function RC(n){switch(n){case Q.OK:return ge(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return ge(15467,{code:n})}}function CC(n){if(n===void 0)return Vt("GRPC error has no .code"),Q.UNKNOWN;switch(n){case jt.OK:return Q.OK;case jt.CANCELLED:return Q.CANCELLED;case jt.UNKNOWN:return Q.UNKNOWN;case jt.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case jt.INTERNAL:return Q.INTERNAL;case jt.UNAVAILABLE:return Q.UNAVAILABLE;case jt.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case jt.NOT_FOUND:return Q.NOT_FOUND;case jt.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case jt.ABORTED:return Q.ABORTED;case jt.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case jt.DATA_LOSS:return Q.DATA_LOSS;default:return ge(39323,{code:n})}}(Ge=jt||(jt={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B6=new ta([4294967295,4294967295],0);function pA(n){const e=yE().encode(n),t=new I1;return t.update(e),new Uint8Array(t.digest())}function mA(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ta([t,r],0),new ta([a,o],0)]}class kE{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ph(`Invalid padding: ${t}`);if(r<0)throw new ph(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ph(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ph(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=ta.fromNumber(this.pe)}we(e,t,r){let a=e.add(t.multiply(ta.fromNumber(r)));return a.compare(B6)===1&&(a=new ta([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=pA(e),[r,a]=mA(t);for(let o=0;o<this.hashCount;o++){const u=this.we(r,a,o);if(!this.be(u))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),u=new kE(o,a,t);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.pe===0)return;const t=pA(e),[r,a]=mA(t);for(let o=0;o<this.hashCount;o++){const u=this.we(r,a,o);this.Se(u)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ph extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t,r,a,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,Ed.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new vd(Te.min(),a,new lt(Re),Hn(),Pe())}}class Ed{constructor(e,t,r,a,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ed(r,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,r,a){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=a}}class xC{constructor(e,t){this.targetId=e,this.Ce=t}}class DC{constructor(e,t,r=xt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class gA{constructor(){this.Fe=0,this.Me=yA(),this.xe=xt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Pe(),t=Pe(),r=Pe();return this.Me.forEach((a,o)=>{switch(o){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:ge(38017,{changeType:o})}}),new Ed(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=yA()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,ve(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class F6{constructor(e){this.ze=e,this.je=new Map,this.He=Hn(),this.Je=tp(),this.Ye=tp(),this.Ze=new lt(Re)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:ge(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,r=e.Ce.count,a=this._t(t);if(a){const o=a.target;if(Qp(o))if(r===0){const u=new he(o.path);this.tt(t,u,ht.newNoDocument(u,Te.min()))}else ve(r===1,20013,{expectedCount:r});else{const u=this.ut(t);if(u!==r){const d=this.ct(e),p=d?this.lt(d,e,u):1;if(p!==0){this.st(t);const m=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,m)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:o=0}=t;let u,d;try{u=Ji(r).toUint8Array()}catch(p){if(p instanceof W1)return di("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new kE(u,a,o)}catch(p){return di(p instanceof ph?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.pe===0?null:d}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let a=0;return r.forEach(o=>{const u=this.ze.Pt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;e.mightContain(d)||(this.tt(t,o,null),a++)}),a}It(e){const t=new Map;this.je.forEach((o,u)=>{const d=this._t(u);if(d){if(o.current&&Qp(d.target)){const p=new he(d.target.path);this.Et(p).has(u)||this.dt(u,p)||this.tt(u,p,ht.newNoDocument(p,e))}o.Le&&(t.set(u,o.qe()),o.Qe())}});let r=Pe();this.Ye.forEach((o,u)=>{let d=!0;u.forEachWhile(p=>{const m=this._t(p);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(o))}),this.He.forEach((o,u)=>u.setReadTime(e));const a=new vd(e,t,this.Ze,this.He,r);return this.He=Hn(),this.Je=tp(),this.Ye=tp(),this.Ze=new lt(Re),a}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new gA,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new nt(Re),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new nt(Re),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new gA),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function tp(){return new lt(he.comparator)}function yA(){return new lt(he.comparator)}const j6={asc:"ASCENDING",desc:"DESCENDING"},q6={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},H6={and:"AND",or:"OR"};class $6{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function cv(n,e){return n.useProto3Json||fd(e)?e:{value:e}}function vu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function PC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function G6(n,e){return vu(n,e.toTimestamp())}function Mt(n){return ve(!!n,49232),Te.fromTimestamp(function(t){const r=Xi(t);return new gt(r.seconds,r.nanos)}(n))}function VE(n,e){return hv(n,e).canonicalString()}function hv(n,e){const t=function(a){return new Be(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function NC(n){const e=Be.fromString(n);return ve(jC(e),10190,{key:e.toString()}),e}function Qh(n,e){return VE(n.databaseId,e.path)}function li(n,e){const t=NC(e);if(t.get(1)!==n.databaseId.projectId)throw new te(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new te(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new he(VC(t))}function OC(n,e){return VE(n.databaseId,e)}function kC(n){const e=NC(n);return e.length===4?Be.emptyPath():VC(e)}function dv(n){return new Be(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function VC(n){return ve(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function _A(n,e,t){return{name:Qh(n,e),fields:t.value.mapValue.fields}}function MC(n,e,t){const r=li(n,e.name),a=Mt(e.updateTime),o=e.createTime?Mt(e.createTime):Te.min(),u=new yn({mapValue:{fields:e.fields}}),d=ht.newFoundDocument(r,a,o,u);return t&&d.setHasCommittedMutations(),t?d.setHasCommittedMutations():d}function K6(n,e){return"found"in e?function(r,a){ve(!!a.found,43571),a.found.name,a.found.updateTime;const o=li(r,a.found.name),u=Mt(a.found.updateTime),d=a.found.createTime?Mt(a.found.createTime):Te.min(),p=new yn({mapValue:{fields:a.found.fields}});return ht.newFoundDocument(o,u,d,p)}(n,e):"missing"in e?function(r,a){ve(!!a.missing,3894),ve(!!a.readTime,22933);const o=li(r,a.missing),u=Mt(a.readTime);return ht.newNoDocument(o,u)}(n,e):ge(7234,{result:e})}function Q6(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:ge(39313,{state:m})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],o=function(m,_){return m.useProto3Json?(ve(_===void 0||typeof _=="string",58123),xt.fromBase64String(_||"")):(ve(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),xt.fromUint8Array(_||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(m){const _=m.code===void 0?Q.UNKNOWN:CC(m.code);return new te(_,m.message||"")}(u);t=new DC(r,a,o,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=li(n,r.document.name),o=Mt(r.document.updateTime),u=r.document.createTime?Mt(r.document.createTime):Te.min(),d=new yn({mapValue:{fields:r.document.fields}}),p=ht.newFoundDocument(a,o,u,d),m=r.targetIds||[],_=r.removedTargetIds||[];t=new Sp(m,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=li(n,r.document),o=r.readTime?Mt(r.readTime):Te.min(),u=ht.newNoDocument(a,o),d=r.removedTargetIds||[];t=new Sp([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=li(n,r.document),o=r.removedTargetIds||[];t=new Sp([],o,a,null)}else{if(!("filter"in e))return ge(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:o}=r,u=new z6(a,o),d=r.targetId;t=new xC(d,u)}}return t}function Yh(n,e){let t;if(e instanceof Uu)t={update:_A(n,e.key,e.value)};else if(e instanceof zu)t={delete:Qh(n,e.key)};else if(e instanceof is)t={update:_A(n,e.key,e.data),updateMask:e9(e.fieldMask)};else{if(!(e instanceof DE))return ge(16599,{ft:e.type});t={verify:Qh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,u){const d=u.transform;if(d instanceof yu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Co)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof xo)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof _u)return{fieldPath:u.field.canonicalString(),increment:d.Re};throw ge(20930,{transform:u.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,o){return o.updateTime!==void 0?{updateTime:G6(a,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ge(27497)}(n,e.precondition)),t}function fv(n,e){const t=e.currentDocument?function(o){return o.updateTime!==void 0?mt.updateTime(Mt(o.updateTime)):o.exists!==void 0?mt.exists(o.exists):mt.none()}(e.currentDocument):mt.none(),r=e.updateTransforms?e.updateTransforms.map(a=>function(u,d){let p=null;if("setToServerValue"in d)ve(d.setToServerValue==="REQUEST_TIME",16630,{proto:d}),p=new yu;else if("appendMissingElements"in d){const _=d.appendMissingElements.values||[];p=new Co(_)}else if("removeAllFromArray"in d){const _=d.removeAllFromArray.values||[];p=new xo(_)}else"increment"in d?p=new _u(u,d.increment):ge(16584,{proto:d});const m=pt.fromServerFormat(d.fieldPath);return new _d(m,p)}(n,a)):[];if(e.update){e.update.name;const a=li(n,e.update.name),o=new yn({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=function(p){const m=p.fieldPaths||[];return new qn(m.map(_=>pt.fromServerFormat(_)))}(e.updateMask);return new is(a,o,u,t,r)}return new Uu(a,o,t,r)}if(e.delete){const a=li(n,e.delete);return new zu(a,t)}if(e.verify){const a=li(n,e.verify);return new DE(a,t)}return ge(1463,{proto:e})}function Y6(n,e){return n&&n.length>0?(ve(e!==void 0,14353),n.map(t=>function(a,o){let u=a.updateTime?Mt(a.updateTime):Mt(o);return u.isEqual(Te.min())&&(u=Mt(o)),new M6(u,a.transformResults||[])}(t,e))):[]}function LC(n,e){return{documents:[OC(n,e.path)]}}function UC(n,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=OC(n,a);const o=function(m){if(m.length!==0)return FC(tt.create(m,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const u=function(m){if(m.length!==0)return m.map(_=>function(w){return{field:Fl(w.field),direction:X6(w.dir)}}(_))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=cv(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{gt:t,parent:a}}function zC(n){let e=kC(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){ve(r===1,65062);const _=t.from[0];_.allDescendants?a=_.collectionId:e=e.child(_.collectionId)}let o=[];t.where&&(o=function(v){const w=BC(v);return w instanceof tt&&SE(w)?w.getFilters():[w]}(t.where));let u=[];t.orderBy&&(u=function(v){return v.map(w=>function(D){return new Kh(jl(D.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(v){let w;return w=typeof v=="object"?v.value:v,fd(w)?null:w}(t.limit));let p=null;t.startAt&&(p=function(v){const w=!!v.before,S=v.values||[];return new da(S,w)}(t.startAt));let m=null;return t.endAt&&(m=function(v){const w=!v.before,S=v.values||[];return new da(S,w)}(t.endAt)),dC(e,a,u,o,d,"F",p,m)}function W6(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function BC(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=jl(t.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=jl(t.unaryFilter.field);return Fe.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=jl(t.unaryFilter.field);return Fe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=jl(t.unaryFilter.field);return Fe.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}}(n):n.fieldFilter!==void 0?function(t){return Fe.create(jl(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(r=>BC(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ge(1026)}}(t.compositeFilter.op))}(n):ge(30097,{filter:n})}function X6(n){return j6[n]}function J6(n){return q6[n]}function Z6(n){return H6[n]}function Fl(n){return{fieldPath:n.canonicalString()}}function jl(n){return pt.fromServerFormat(n.fieldPath)}function FC(n){return n instanceof Fe?function(t){if(t.op==="=="){if(nA(t.value))return{unaryFilter:{field:Fl(t.field),op:"IS_NAN"}};if(tA(t.value))return{unaryFilter:{field:Fl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nA(t.value))return{unaryFilter:{field:Fl(t.field),op:"IS_NOT_NAN"}};if(tA(t.value))return{unaryFilter:{field:Fl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fl(t.field),op:J6(t.op),value:t.value}}}(n):n instanceof tt?function(t){const r=t.getFilters().map(a=>FC(a));return r.length===1?r[0]:{compositeFilter:{op:Z6(t.op),filters:r}}}(n):ge(54877,{filter:n})}function e9(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function jC(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,r,a,o=Te.min(),u=Te.min(),d=xt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new $i(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new $i(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.wt=e}}function t9(n,e){let t;if(e.document)t=MC(n.wt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=he.fromSegments(e.noDocument.path),a=Po(e.noDocument.readTime);t=ht.newNoDocument(r,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return ge(56709);{const r=he.fromSegments(e.unknownDocument.path),a=Po(e.unknownDocument.version);t=ht.newUnknownDocument(r,a)}}return e.readTime&&t.setReadTime(function(a){const o=new gt(a[0],a[1]);return Te.fromTimestamp(o)}(e.readTime)),t}function vA(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Xp(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(o,u){return{name:Qh(o,u.key),fields:u.data.value.mapValue.fields,updateTime:vu(o,u.version.toTimestamp()),createTime:vu(o,u.createTime.toTimestamp())}}(n.wt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Do(e.version)};else{if(!e.isUnknownDocument())return ge(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Do(e.version)}}return r}function Xp(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Do(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Po(n){const e=new gt(n.seconds,n.nanoseconds);return Te.fromTimestamp(e)}function lo(n,e){const t=(e.baseMutations||[]).map(o=>fv(n.wt,o));for(let o=0;o<e.mutations.length-1;++o){const u=e.mutations[o];if(o+1<e.mutations.length&&e.mutations[o+1].transform!==void 0){const d=e.mutations[o+1];u.updateTransforms=d.transform.fieldTransforms,e.mutations.splice(o+1,1),++o}}const r=e.mutations.map(o=>fv(n.wt,o)),a=gt.fromMillis(e.localWriteTimeMs);return new PE(e.batchId,a,t,r)}function mh(n){const e=Po(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Po(n.lastLimboFreeSnapshotVersion):Te.min();let r;return r=function(o){return o.documents!==void 0}(n.query)?function(o){const u=o.documents.length;return ve(u===1,1966,{count:u}),Vn(Lu(kC(o.documents[0])))}(n.query):function(o){return Vn(zC(o))}(n.query),new $i(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,xt.fromBase64String(n.resumeToken))}function HC(n,e){const t=Do(e.snapshotVersion),r=Do(e.lastLimboFreeSnapshotVersion);let a;a=Qp(e.target)?LC(n.wt,e.target):UC(n.wt,e.target).gt;const o=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ro(e.target),readTime:t,resumeToken:o,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:a}}function ME(n){const e=zC({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Wp(e,e.limit,"L"):e}function w_(n,e){return new OE(e.largestBatchId,fv(n.wt,e.overlayMutation))}function EA(n,e){const t=e.path.lastSegment();return[n,An(e.path.popLast()),t]}function TA(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Do(r.readTime),documentKey:An(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n9{getBundleMetadata(e,t){return wA(e).get(t).next(r=>{if(r)return function(o){return{id:o.bundleId,createTime:Po(o.createTime),version:o.version}}(r)})}saveBundleMetadata(e,t){return wA(e).put(function(a){return{bundleId:a.id,createTime:Do(Mt(a.createTime)),version:a.version}}(t))}getNamedQuery(e,t){return bA(e).get(t).next(r=>{if(r)return function(o){return{name:o.name,query:ME(o.bundledQuery),readTime:Po(o.readTime)}}(r)})}saveNamedQuery(e,t){return bA(e).put(function(a){return{name:a.name,readTime:Do(Mt(a.readTime)),bundledQuery:a.bundledQuery}}(t))}}function wA(n){return Jt(n,Cm)}function bA(n){return Jt(n,xm)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t){this.serializer=e,this.userId=t}static bt(e,t){const r=t.uid||"";return new Mm(e,r)}getOverlay(e,t){return rh(e).get(EA(this.userId,t)).next(r=>r?w_(this.serializer,r):null)}getOverlays(e,t){const r=ai();return j.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){const a=[];return r.forEach((o,u)=>{const d=new OE(t,u);a.push(this.St(e,d))}),j.waitFor(a)}removeOverlaysForBatchId(e,t,r){const a=new Set;t.forEach(u=>a.add(An(u.getCollectionPath())));const o=[];return a.forEach(u=>{const d=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);o.push(rh(e).X(tv,d))}),j.waitFor(o)}getOverlaysForCollection(e,t,r){const a=ai(),o=An(t),u=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,Number.POSITIVE_INFINITY],!0);return rh(e).J(tv,u).next(d=>{for(const p of d){const m=w_(this.serializer,p);a.set(m.getKey(),m)}return a})}getOverlaysForCollectionGroup(e,t,r,a){const o=ai();let u;const d=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return rh(e).te({index:$1,range:d},(p,m,_)=>{const v=w_(this.serializer,m);o.size()<a||v.largestBatchId===u?(o.set(v.getKey(),v),u=v.largestBatchId):_.done()}).next(()=>o)}St(e,t){return rh(e).put(function(a,o,u){const[d,p,m]=EA(o,u.mutation.key);return{userId:o,collectionPath:p,documentId:m,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:Yh(a.wt,u.mutation)}}(this.serializer,this.userId,t))}}function rh(n){return Jt(n,Dm)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r9{Dt(e){return Jt(e,wE)}getSessionToken(e){return this.Dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?xt.fromUint8Array(r):xt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(dt(e.integerValue));else if("doubleValue"in e){const r=dt(e.doubleValue);isNaN(r)?this.Mt(t,13):(this.Mt(t,15),Bh(r)?t.xt(0):t.xt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Mt(t,20),typeof r=="string"&&(r=Xi(r)),t.Ot(`${r.seconds||""}`),t.xt(r.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(Ji(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Mt(t,45),t.xt(r.latitude||0),t.xt(r.longitude||0)}else"mapValue"in e?nC(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):Om(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):ge(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){const r=e.fields||{};this.Mt(t,55);for(const a of Object.keys(r))this.Nt(a,t),this.Ct(r[a],t)}qt(e,t){var r,a;const o=e.fields||{};this.Mt(t,53);const u=pu,d=((a=(r=o[u].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.length)||0;this.Mt(t,15),t.xt(dt(d)),this.Nt(u,t),this.Ct(o[u],t)}$t(e,t){const r=e.values||[];this.Mt(t,50);for(const a of r)this.Ct(a,t)}kt(e,t){this.Mt(t,37),he.fromName(e).path.forEach(r=>{this.Mt(t,60),this.Kt(r,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}uo.Wt=new uo;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=255;function i9(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function IA(n){const e=64-function(r){let a=0;for(let o=0;o<8;++o){const u=i9(255&r[o]);if(a+=u,u!==8)break}return a}(n);return Math.ceil(e/8)}class s9{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.zt(r.value),r=t.next();this.jt()}Ht(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Yt()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.zt(r);else if(r<2048)this.zt(960|r>>>6),this.zt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.zt(480|r>>>12),this.zt(128|63&r>>>6),this.zt(128|63&r);else{const a=t.codePointAt(0);this.zt(240|a>>>18),this.zt(128|63&a>>>12),this.zt(128|63&a>>>6),this.zt(128|63&a)}}this.jt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const a=t.codePointAt(0);this.Jt(240|a>>>18),this.Jt(128|63&a>>>12),this.Jt(128|63&a>>>6),this.Jt(128|63&a)}}this.Yt()}en(e){const t=this.tn(e),r=IA(t);this.nn(1+r),this.buffer[this.position++]=255&r;for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=255&t[a]}rn(e){const t=this.tn(e),r=IA(t);this.nn(1+r),this.buffer[this.position++]=~(255&r);for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}sn(){this._n(Vl),this._n(255)}an(){this.un(Vl),this.un(255)}reset(){this.position=0}seed(e){this.nn(e.length),this.buffer.set(e,this.position),this.position+=e.length}cn(){return this.buffer.slice(0,this.position)}tn(e){const t=function(o){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,o,!1),new Uint8Array(u.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let a=1;a<t.length;++a)t[a]^=r?255:0;return t}zt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Vl?(this._n(Vl),this._n(0)):this._n(t)}Jt(e){const t=255&e;t===0?(this.un(0),this.un(255)):t===Vl?(this.un(Vl),this.un(0)):this.un(e)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(e){this.nn(1),this.buffer[this.position++]=e}un(e){this.nn(1),this.buffer[this.position++]=~e}nn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const a=new Uint8Array(r);a.set(this.buffer),this.buffer=a}}class a9{constructor(e){this.ln=e}Lt(e){this.ln.Gt(e)}Ot(e){this.ln.Zt(e)}xt(e){this.ln.en(e)}Ft(){this.ln.sn()}}class o9{constructor(e){this.ln=e}Lt(e){this.ln.Ht(e)}Ot(e){this.ln.Xt(e)}xt(e){this.ln.rn(e)}Ft(){this.ln.an()}}class ih{constructor(){this.ln=new s9,this.hn=new a9(this.ln),this.Pn=new o9(this.ln)}seed(e){this.ln.seed(e)}Tn(e){return e===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t,r,a){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=a}In(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new co(this.indexId,this.documentKey,this.arrayValue,r)}}function Hs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=AA(n.arrayValue,e.arrayValue),t!==0?t:(t=AA(n.directionalValue,e.directionalValue),t!==0?t:he.comparator(n.documentKey,e.documentKey)))}function AA(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.En=new nt((t,r)=>pt.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.An=[];for(const t of e.filters){const r=t;r.isInequality()?this.En=this.En.add(r):this.An.push(r)}}get Rn(){return this.En.size>1}Vn(e){if(ve(e.collectionGroup===this.collectionId,49279),this.Rn)return!1;const t=J_(e);if(t!==void 0&&!this.mn(t))return!1;const r=so(e);let a=new Set,o=0,u=0;for(;o<r.length&&this.mn(r[o]);++o)a=a.add(r[o].fieldPath.canonicalString());if(o===r.length)return!0;if(this.En.size>0){const d=this.En.getIterator().getNext();if(!a.has(d.field.canonicalString())){const p=r[o];if(!this.fn(d,p)||!this.gn(this.dn[u++],p))return!1}++o}for(;o<r.length;++o){const d=r[o];if(u>=this.dn.length||!this.gn(this.dn[u++],d))return!1}return!0}pn(){if(this.Rn)return null;let e=new nt(pt.comparator);const t=[];for(const r of this.An)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new vp(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new vp(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new vp(r.field,r.dir==="asc"?0:1)));return new jp(jp.UNKNOWN_ID,this.collectionId,t,zh.empty())}mn(e){for(const t of this.An)if(this.fn(t,e))return!0;return!1}fn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}gn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(n){var e,t;if(ve(n instanceof Fe||n instanceof tt,20012),n instanceof Fe){if(n instanceof hC){const a=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(o=>Fe.create(n.field,"==",o)))||[];return tt.create(a,"or")}return n}const r=n.filters.map(a=>$C(a));return tt.create(r,n.op)}function l9(n){if(n.getFilters().length===0)return[];const e=gv($C(n));return ve(GC(e),7391),pv(e)||mv(e)?[e]:e.getFilters()}function pv(n){return n instanceof Fe}function mv(n){return n instanceof tt&&SE(n)}function GC(n){return pv(n)||mv(n)||function(t){if(t instanceof tt&&av(t)){for(const r of t.getFilters())if(!pv(r)&&!mv(r))return!1;return!0}return!1}(n)}function gv(n){if(ve(n instanceof Fe||n instanceof tt,34018),n instanceof Fe)return n;if(n.filters.length===1)return gv(n.filters[0]);const e=n.filters.map(r=>gv(r));let t=tt.create(e,n.op);return t=Jp(t),GC(t)?t:(ve(t instanceof tt,64498),ve(gu(t),40251),ve(t.filters.length>1,57927),t.filters.reduce((r,a)=>LE(r,a)))}function LE(n,e){let t;return ve(n instanceof Fe||n instanceof tt,38388),ve(e instanceof Fe||e instanceof tt,25473),t=n instanceof Fe?e instanceof Fe?function(a,o){return tt.create([a,o],"and")}(n,e):RA(n,e):e instanceof Fe?RA(e,n):function(a,o){if(ve(a.filters.length>0&&o.filters.length>0,48005),gu(a)&&gu(o))return lC(a,o.getFilters());const u=av(a)?a:o,d=av(a)?o:a,p=u.filters.map(m=>LE(m,d));return tt.create(p,"or")}(n,e),Jp(t)}function RA(n,e){if(gu(e))return lC(e,n.getFilters());{const t=e.filters.map(r=>LE(n,r));return tt.create(t,"or")}}function Jp(n){if(ve(n instanceof Fe||n instanceof tt,11850),n instanceof Fe)return n;const e=n.getFilters();if(e.length===1)return Jp(e[0]);if(aC(n))return n;const t=e.map(a=>Jp(a)),r=[];return t.forEach(a=>{a instanceof Fe?r.push(a):a instanceof tt&&(a.op===n.op?r.push(...a.filters):r.push(a))}),r.length===1?r[0]:tt.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u9{constructor(){this.yn=new UE}addToCollectionParentIndex(e,t){return this.yn.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.yn.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(nr.min())}updateCollectionGroup(e,t,r){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class UE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new nt(Be.comparator),o=!a.has(r);return this.index[t]=a.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new nt(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="IndexedDbIndexManager",np=new Uint8Array(0);class c9{constructor(e,t){this.databaseId=t,this.wn=new UE,this.bn=new rs(r=>Ro(r),(r,a)=>md(r,a)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.wn.has(t)){const r=t.lastSegment(),a=t.popLast();e.addOnCommittedListener(()=>{this.wn.add(t)});const o={collectionId:r,parent:An(a)};return xA(e).put(o)}return j.resolve()}getCollectionParents(e,t){const r=[],a=IDBKeyRange.bound([t,""],[O1(t),""],!1,!0);return xA(e).J(a).next(o=>{for(const u of o){if(u.collectionId!==t)break;r.push(si(u.parent))}return r})}addFieldIndex(e,t){const r=sh(e),a=function(d){return{indexId:d.indexId,collectionGroup:d.collectionGroup,fields:d.fields.map(p=>[p.fieldPath.canonicalString(),p.kind])}}(t);delete a.indexId;const o=r.add(a);if(t.indexState){const u=Ll(e);return o.next(d=>{u.put(TA(d,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return o.next()}deleteFieldIndex(e,t){const r=sh(e),a=Ll(e),o=Ml(e);return r.delete(t.indexId).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=sh(e),r=Ml(e),a=Ll(e);return t.X().next(()=>r.X()).next(()=>a.X())}createTargetIndexes(e,t){return j.forEach(this.Sn(t),r=>this.getIndexType(e,r).next(a=>{if(a===0||a===1){const o=new SA(r).pn();if(o!=null)return this.addFieldIndex(e,o)}}))}getDocumentsMatchingTarget(e,t){const r=Ml(e);let a=!0;const o=new Map;return j.forEach(this.Sn(t),u=>this.Dn(e,u).next(d=>{a&&(a=!!d),o.set(u,d)})).next(()=>{if(a){let u=Pe();const d=[];return j.forEach(o,(p,m)=>{re(CA,`Using index ${function(K){return`id=${K.indexId}|cg=${K.collectionGroup}|f=${K.fields.map(oe=>`${oe.fieldPath}:${oe.kind}`).join(",")}`}(p)} to execute ${Ro(t)}`);const _=function(K,oe){const ae=J_(oe);if(ae===void 0)return null;for(const le of Yp(K,ae.fieldPath))switch(le.op){case"array-contains-any":return le.value.arrayValue.values||[];case"array-contains":return[le.value]}return null}(m,p),v=function(K,oe){const ae=new Map;for(const le of so(oe))for(const x of Yp(K,le.fieldPath))switch(x.op){case"==":case"in":ae.set(le.fieldPath.canonicalString(),x.value);break;case"not-in":case"!=":return ae.set(le.fieldPath.canonicalString(),x.value),Array.from(ae.values())}return null}(m,p),w=function(K,oe){const ae=[];let le=!0;for(const x of so(oe)){const R=x.kind===0?oA(K,x.fieldPath,K.startAt):lA(K,x.fieldPath,K.startAt);ae.push(R.value),le&&(le=R.inclusive)}return new da(ae,le)}(m,p),S=function(K,oe){const ae=[];let le=!0;for(const x of so(oe)){const R=x.kind===0?lA(K,x.fieldPath,K.endAt):oA(K,x.fieldPath,K.endAt);ae.push(R.value),le&&(le=R.inclusive)}return new da(ae,le)}(m,p),D=this.vn(p,m,w),U=this.vn(p,m,S),L=this.Cn(p,m,v),H=this.Fn(p.indexId,_,D,w.inclusive,U,S.inclusive,L);return j.forEach(H,X=>r.Z(X,t.limit).next(K=>{K.forEach(oe=>{const ae=he.fromSegments(oe.documentKey);u.has(ae)||(u=u.add(ae),d.push(ae))})}))}).next(()=>d)}return j.resolve(null)})}Sn(e){let t=this.bn.get(e);return t||(e.filters.length===0?t=[e]:t=l9(tt.create(e.filters,"and")).map(r=>lv(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.bn.set(e,t),t)}Fn(e,t,r,a,o,u,d){const p=(t!=null?t.length:1)*Math.max(r.length,o.length),m=p/(t!=null?t.length:1),_=[];for(let v=0;v<p;++v){const w=t?this.Mn(t[v/m]):np,S=this.xn(e,w,r[v%m],a),D=this.On(e,w,o[v%m],u),U=d.map(L=>this.xn(e,w,L,!0));_.push(...this.createRange(S,D,U))}return _}xn(e,t,r,a){const o=new co(e,he.empty(),t,r);return a?o:o.In()}On(e,t,r,a){const o=new co(e,he.empty(),t,r);return a?o.In():o}Dn(e,t){const r=new SA(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next(o=>{let u=null;for(const d of o)r.Vn(d)&&(!u||d.fields.length>u.fields.length)&&(u=d);return u})}getIndexType(e,t){let r=2;const a=this.Sn(t);return j.forEach(a,o=>this.Dn(e,o).next(u=>{u?r!==0&&u.fields.length<function(p){let m=new nt(pt.comparator),_=!1;for(const v of p.filters)for(const w of v.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?_=!0:m=m.add(w.field));for(const v of p.orderBy)v.field.isKeyField()||(m=m.add(v.field));return m.size+(_?1:0)}(o)&&(r=1):r=0})).next(()=>function(u){return u.limit!==null}(t)&&a.length>1&&r===2?1:r)}Nn(e,t){const r=new ih;for(const a of so(e)){const o=t.data.field(a.fieldPath);if(o==null)return null;const u=r.Tn(a.kind);uo.Wt.vt(o,u)}return r.cn()}Mn(e){const t=new ih;return uo.Wt.vt(e,t.Tn(0)),t.cn()}Bn(e,t){const r=new ih;return uo.Wt.vt(So(this.databaseId,t),r.Tn(function(o){const u=so(o);return u.length===0?0:u[u.length-1].kind}(e))),r.cn()}Cn(e,t,r){if(r===null)return[];let a=[];a.push(new ih);let o=0;for(const u of so(e)){const d=r[o++];for(const p of a)if(this.Ln(t,u.fieldPath)&&Gh(d))a=this.kn(a,u,d);else{const m=p.Tn(u.kind);uo.Wt.vt(d,m)}}return this.qn(a)}vn(e,t,r){return this.Cn(e,t,r.position)}qn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].cn();return t}kn(e,t,r){const a=[...e],o=[];for(const u of r.arrayValue.values||[])for(const d of a){const p=new ih;p.seed(d.cn()),uo.Wt.vt(u,p.Tn(t.kind)),o.push(p)}return o}Ln(e,t){return!!e.filters.find(r=>r instanceof Fe&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=sh(e),a=Ll(e);return(t?r.J(ev,IDBKeyRange.bound(t,t)):r.J()).next(o=>{const u=[];return j.forEach(o,d=>a.get([d.indexId,this.uid]).next(p=>{u.push(function(_,v){const w=v?new zh(v.sequenceNumber,new nr(Po(v.readTime),new he(si(v.documentKey)),v.largestBatchId)):zh.empty(),S=_.fields.map(([D,U])=>new vp(pt.fromServerFormat(D),U));return new jp(_.indexId,_.collectionGroup,S,w)}(d,p))})).next(()=>u)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,a)=>{const o=r.indexState.sequenceNumber-a.indexState.sequenceNumber;return o!==0?o:Re(r.collectionGroup,a.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const a=sh(e),o=Ll(e);return this.Qn(e).next(u=>a.J(ev,IDBKeyRange.bound(t,t)).next(d=>j.forEach(d,p=>o.put(TA(p.indexId,this.uid,u,r)))))}updateIndexEntries(e,t){const r=new Map;return j.forEach(t,(a,o)=>{const u=r.get(a.collectionGroup);return(u?j.resolve(u):this.getFieldIndexes(e,a.collectionGroup)).next(d=>(r.set(a.collectionGroup,d),j.forEach(d,p=>this.$n(e,a,p).next(m=>{const _=this.Un(o,p);return m.isEqual(_)?j.resolve():this.Kn(e,o,p,m,_)}))))})}Wn(e,t,r,a){return Ml(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.Bn(r,t.key),documentKey:t.key.path.toArray()})}Gn(e,t,r,a){return Ml(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.Bn(r,t.key),t.key.path.toArray()])}$n(e,t,r){const a=Ml(e);let o=new nt(Hs);return a.te({index:H1,range:IDBKeyRange.only([r.indexId,this.uid,this.Bn(r,t)])},(u,d)=>{o=o.add(new co(r.indexId,t,d.arrayValue,d.directionalValue))}).next(()=>o)}Un(e,t){let r=new nt(Hs);const a=this.Nn(t,e);if(a==null)return r;const o=J_(t);if(o!=null){const u=e.data.field(o.fieldPath);if(Gh(u))for(const d of u.arrayValue.values||[])r=r.add(new co(t.indexId,e.key,this.Mn(d),a))}else r=r.add(new co(t.indexId,e.key,np,a));return r}Kn(e,t,r,a,o){re(CA,"Updating index entries for document '%s'",t.key);const u=[];return function(p,m,_,v,w){const S=p.getIterator(),D=m.getIterator();let U=kl(S),L=kl(D);for(;U||L;){let H=!1,X=!1;if(U&&L){const K=_(U,L);K<0?X=!0:K>0&&(H=!0)}else U!=null?X=!0:H=!0;H?(v(L),L=kl(D)):X?(w(U),U=kl(S)):(U=kl(S),L=kl(D))}}(a,o,Hs,d=>{u.push(this.Wn(e,t,r,d))},d=>{u.push(this.Gn(e,t,r,d))}),j.waitFor(u)}Qn(e){let t=1;return Ll(e).te({index:q1,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,a,o)=>{o.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((u,d)=>Hs(u,d)).filter((u,d,p)=>!d||Hs(u,p[d-1])!==0);const a=[];a.push(e);for(const u of r){const d=Hs(u,e),p=Hs(u,t);if(d===0)a[0]=e.In();else if(d>0&&p<0)a.push(u),a.push(u.In());else if(p>0)break}a.push(t);const o=[];for(let u=0;u<a.length;u+=2){if(this.zn(a[u],a[u+1]))return[];const d=[a[u].indexId,this.uid,a[u].arrayValue,a[u].directionalValue,np,[]],p=[a[u+1].indexId,this.uid,a[u+1].arrayValue,a[u+1].directionalValue,np,[]];o.push(IDBKeyRange.bound(d,p))}return o}zn(e,t){return Hs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(DA)}getMinOffset(e,t){return j.mapArray(this.Sn(t),r=>this.Dn(e,r).next(a=>a||ge(44426))).next(DA)}}function xA(n){return Jt(n,qh)}function Ml(n){return Jt(n,Kp)}function sh(n){return Jt(n,TE)}function Ll(n){return Jt(n,Gp)}function DA(n){ve(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const a=n[r].indexState.offset;_E(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new nr(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},KC=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(n,e,t){const r=n.store(Dr),a=n.store(cu),o=[],u=IDBKeyRange.only(t.batchId);let d=0;const p=r.te({range:u},(_,v,w)=>(d++,w.delete()));o.push(p.next(()=>{ve(d===1,47070,{batchId:t.batchId})}));const m=[];for(const _ of t.mutations){const v=B1(e,_.key.path,t.batchId);o.push(a.delete(v)),m.push(_.key)}return j.waitFor(o).next(()=>m)}function Zp(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw ge(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(KC,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);class Lm{constructor(e,t,r,a){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=a,this.jn={}}static bt(e,t,r,a){ve(e.uid!=="",64387);const o=e.isAuthenticated()?e.uid:"";return new Lm(o,t,r,a)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return $s(e).te({index:mo,range:r},(a,o,u)=>{t=!1,u.done()}).next(()=>t)}addMutationBatch(e,t,r,a){const o=ql(e),u=$s(e);return u.add({}).next(d=>{ve(typeof d=="number",49019);const p=new PE(d,t,r,a),m=function(S,D,U){const L=U.baseMutations.map(X=>Yh(S.wt,X)),H=U.mutations.map(X=>Yh(S.wt,X));return{userId:D,batchId:U.batchId,localWriteTimeMs:U.localWriteTime.toMillis(),baseMutations:L,mutations:H}}(this.serializer,this.userId,p),_=[];let v=new nt((w,S)=>Re(w.canonicalString(),S.canonicalString()));for(const w of a){const S=B1(this.userId,w.key.path,d);v=v.add(w.key.path.popLast()),_.push(u.put(m)),_.push(o.put(S,HU))}return v.forEach(w=>{_.push(this.indexManager.addToCollectionParentIndex(e,w))}),e.addOnCommittedListener(()=>{this.jn[d]=p.keys()}),j.waitFor(_).next(()=>p)})}lookupMutationBatch(e,t){return $s(e).get(t).next(r=>r?(ve(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),lo(this.serializer,r)):null)}Hn(e,t){return this.jn[t]?j.resolve(this.jn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const a=r.keys();return this.jn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=IDBKeyRange.lowerBound([this.userId,r]);let o=null;return $s(e).te({index:mo,range:a},(u,d,p)=>{d.userId===this.userId&&(ve(d.batchId>=r,47524,{Jn:r}),o=lo(this.serializer,d)),p.done()}).next(()=>o)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=na;return $s(e).te({index:mo,range:t,reverse:!0},(a,o,u)=>{r=o.batchId,u.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,na],[this.userId,Number.POSITIVE_INFINITY]);return $s(e).J(mo,t).next(r=>r.map(a=>lo(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ep(this.userId,t.path),a=IDBKeyRange.lowerBound(r),o=[];return ql(e).te({range:a},(u,d,p)=>{const[m,_,v]=u,w=si(_);if(m===this.userId&&t.path.isEqual(w))return $s(e).get(v).next(S=>{if(!S)throw ge(61480,{Yn:u,batchId:v});ve(S.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:S.userId,batchId:v}),o.push(lo(this.serializer,S))});p.done()}).next(()=>o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Re);const a=[];return t.forEach(o=>{const u=Ep(this.userId,o.path),d=IDBKeyRange.lowerBound(u),p=ql(e).te({range:d},(m,_,v)=>{const[w,S,D]=m,U=si(S);w===this.userId&&o.path.isEqual(U)?r=r.add(D):v.done()});a.push(p)}),j.waitFor(a).next(()=>this.Zn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1,o=Ep(this.userId,r),u=IDBKeyRange.lowerBound(o);let d=new nt(Re);return ql(e).te({range:u},(p,m,_)=>{const[v,w,S]=p,D=si(w);v===this.userId&&r.isPrefixOf(D)?D.length===a&&(d=d.add(S)):_.done()}).next(()=>this.Zn(e,d))}Zn(e,t){const r=[],a=[];return t.forEach(o=>{a.push($s(e).get(o).next(u=>{if(u===null)throw ge(35274,{batchId:o});ve(u.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:u.userId,batchId:o}),r.push(lo(this.serializer,u))}))}),j.waitFor(a).next(()=>r)}removeMutationBatch(e,t){return QC(e.he,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Xn(t.batchId)}),j.forEach(r,a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))}Xn(e){delete this.jn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return j.resolve();const r=IDBKeyRange.lowerBound(function(u){return[u]}(this.userId)),a=[];return ql(e).te({range:r},(o,u,d)=>{if(o[0]===this.userId){const p=si(o[1]);a.push(p)}else d.done()}).next(()=>{ve(a.length===0,56720,{er:a.map(o=>o.canonicalString())})})})}containsKey(e,t){return YC(e,this.userId,t)}tr(e){return WC(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:na,lastStreamToken:""})}}function YC(n,e,t){const r=Ep(e,t.path),a=r[1],o=IDBKeyRange.lowerBound(r);let u=!1;return ql(n).te({range:o,ee:!0},(d,p,m)=>{const[_,v,w]=d;_===e&&v===a&&(u=!0),m.done()}).next(()=>u)}function $s(n){return Jt(n,Dr)}function ql(n){return Jt(n,cu)}function WC(n){return Jt(n,Fh)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new No(0)}static ir(){return new No(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h9{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.sr(e).next(t=>{const r=new No(t.highestTargetId);return t.highestTargetId=r.next(),this._r(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.sr(e).next(t=>Te.fromTimestamp(new gt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.sr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.sr(e).next(a=>(a.highestListenSequenceNumber=t,r&&(a.lastRemoteSnapshotVersion=r.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this._r(e,a)))}addTargetData(e,t){return this.ar(e,t).next(()=>this.sr(e).next(r=>(r.targetCount+=1,this.ur(t,r),this._r(e,r))))}updateTargetData(e,t){return this.ar(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ul(e).delete(t.targetId)).next(()=>this.sr(e)).next(r=>(ve(r.targetCount>0,8065),r.targetCount-=1,this._r(e,r)))}removeTargets(e,t,r){let a=0;const o=[];return Ul(e).te((u,d)=>{const p=mh(d);p.sequenceNumber<=t&&r.get(p.targetId)===null&&(a++,o.push(this.removeTargetData(e,p)))}).next(()=>j.waitFor(o)).next(()=>a)}forEachTarget(e,t){return Ul(e).te((r,a)=>{const o=mh(a);t(o)})}sr(e){return NA(e).get($p).next(t=>(ve(t!==null,2888),t))}_r(e,t){return NA(e).put($p,t)}ar(e,t){return Ul(e).put(HC(this.serializer,t))}ur(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.sr(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Ro(t),a=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let o=null;return Ul(e).te({range:a,index:j1},(u,d,p)=>{const m=mh(d);md(t,m.target)&&(o=m,p.done())}).next(()=>o)}addMatchingKeys(e,t,r){const a=[],o=Ys(e);return t.forEach(u=>{const d=An(u.path);a.push(o.put({targetId:r,path:d})),a.push(this.referenceDelegate.addReference(e,r,u))}),j.waitFor(a)}removeMatchingKeys(e,t,r){const a=Ys(e);return j.forEach(t,o=>{const u=An(o.path);return j.waitFor([a.delete([r,u]),this.referenceDelegate.removeReference(e,r,o)])})}removeMatchingKeysForTargetId(e,t){const r=Ys(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(a)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),a=Ys(e);let o=Pe();return a.te({range:r,ee:!0},(u,d,p)=>{const m=si(u[1]),_=new he(m);o=o.add(_)}).next(()=>o)}containsKey(e,t){const r=An(t.path),a=IDBKeyRange.bound([r],[O1(r)],!1,!0);let o=0;return Ys(e).te({index:EE,ee:!0,range:a},([u,d],p,m)=>{u!==0&&(o++,m.done())}).next(()=>o>0)}Rt(e,t){return Ul(e).get(t).next(r=>r?mh(r):null)}}function Ul(n){return Jt(n,hu)}function NA(n){return Jt(n,wo)}function Ys(n){return Jt(n,du)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA="LruGarbageCollector",d9=1048576;function kA([n,e],[t,r]){const a=Re(n,t);return a===0?Re(e,r):a}class f9{constructor(e){this.cr=e,this.buffer=new nt(kA),this.lr=0}hr(){return++this.lr}Pr(e){const t=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();kA(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class XC{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){re(OA,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ta(t)?re(OA,"Ignoring IndexedDB error during garbage collection: ",t):await Ea(t)}await this.Ir(3e5)})}}class p9{constructor(e,t){this.Er=e,this.params=t}calculateTargetCount(e,t){return this.Er.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return j.resolve(jn.le);const r=new f9(t);return this.Er.forEachTarget(e,a=>r.Pr(a.sequenceNumber)).next(()=>this.Er.Ar(e,a=>r.Pr(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Er.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Er.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(PA)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),PA):this.Rr(e,t))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,t){let r,a,o,u,d,p,m;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),a=this.params.maximumSequenceNumbersToCollect):a=v,u=Date.now(),this.nthSequenceNumber(e,a))).next(v=>(r=v,d=Date.now(),this.removeTargets(e,r,t))).next(v=>(o=v,p=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(m=Date.now(),zl()<=ze.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${a} in `+(d-u)+`ms
	Removed ${o} targets in `+(p-d)+`ms
	Removed ${v} documents in `+(m-p)+`ms
Total Duration: ${m-_}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:o,documentsRemoved:v})))}}function JC(n,e){return new p9(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m9{constructor(e,t){this.db=e,this.garbageCollector=JC(this,t)}dr(e){const t=this.Vr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}Vr(e){let t=0;return this.Ar(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ar(e,t){return this.mr(e,(r,a)=>t(a))}addReference(e,t,r){return rp(e,r)}removeReference(e,t,r){return rp(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return rp(e,t)}gr(e,t){return function(a,o){let u=!1;return WC(a).ne(d=>YC(a,d,o).next(p=>(p&&(u=!0),j.resolve(!p)))).next(()=>u)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let o=0;return this.mr(e,(u,d)=>{if(d<=t){const p=this.gr(e,u).next(m=>{if(!m)return o++,r.getEntry(e,u).next(()=>(r.removeEntry(u,Te.min()),Ys(e).delete(function(v){return[0,An(v.path)]}(u))))});a.push(p)}}).next(()=>j.waitFor(a)).next(()=>r.apply(e)).next(()=>o)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return rp(e,t)}mr(e,t){const r=Ys(e);let a,o=jn.le;return r.te({index:EE},([u,d],{path:p,sequenceNumber:m})=>{u===0?(o!==jn.le&&t(new he(si(a)),o),o=m,a=p):o=jn.le}).next(()=>{o!==jn.le&&t(new he(si(a)),o)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function rp(n,e){return Ys(n).put(function(r,a){return{targetId:0,path:An(r.path),sequenceNumber:a}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this.changes=new rs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?j.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g9{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return ro(e).put(r)}removeEntry(e,t,r){return ro(e).delete(function(o,u){const d=o.path.toArray();return[d.slice(0,d.length-2),d[d.length-2],Xp(u),d[d.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.pr(e,r)))}getEntry(e,t){let r=ht.newInvalidDocument(t);return ro(e).te({index:Tp,range:IDBKeyRange.only(ah(t))},(a,o)=>{r=this.yr(t,o)}).next(()=>r)}wr(e,t){let r={size:0,document:ht.newInvalidDocument(t)};return ro(e).te({index:Tp,range:IDBKeyRange.only(ah(t))},(a,o)=>{r={document:this.yr(t,o),size:Zp(o)}}).next(()=>r)}getEntries(e,t){let r=Hn();return this.br(e,t,(a,o)=>{const u=this.yr(a,o);r=r.insert(a,u)}).next(()=>r)}Sr(e,t){let r=Hn(),a=new lt(he.comparator);return this.br(e,t,(o,u)=>{const d=this.yr(o,u);r=r.insert(o,d),a=a.insert(o,Zp(u))}).next(()=>({documents:r,Dr:a}))}br(e,t,r){if(t.isEmpty())return j.resolve();let a=new nt(LA);t.forEach(p=>a=a.add(p));const o=IDBKeyRange.bound(ah(a.first()),ah(a.last())),u=a.getIterator();let d=u.getNext();return ro(e).te({index:Tp,range:o},(p,m,_)=>{const v=he.fromSegments([...m.prefixPath,m.collectionGroup,m.documentId]);for(;d&&LA(d,v)<0;)r(d,null),d=u.getNext();d&&d.isEqual(v)&&(r(d,m),d=u.hasNext()?u.getNext():null),d?_.H(ah(d)):_.done()}).next(()=>{for(;d;)r(d,null),d=u.hasNext()?u.getNext():null})}getDocumentsMatchingQuery(e,t,r,a,o){const u=t.path,d=[u.popLast().toArray(),u.lastSegment(),Xp(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],p=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ro(e).J(IDBKeyRange.bound(d,p,!0)).next(m=>{o==null||o.incrementDocumentReadCount(m.length);let _=Hn();for(const v of m){const w=this.yr(he.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);w.isFoundDocument()&&(yd(t,w)||a.has(w.key))&&(_=_.insert(w.key,w))}return _})}getAllFromCollectionGroup(e,t,r,a){let o=Hn();const u=MA(t,r),d=MA(t,nr.max());return ro(e).te({index:F1,range:IDBKeyRange.bound(u,d,!0)},(p,m,_)=>{const v=this.yr(he.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);o=o.insert(v.key,v),o.size===a&&_.done()}).next(()=>o)}newChangeBuffer(e){return new y9(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return VA(e).get(Z_).next(t=>(ve(!!t,20021),t))}pr(e,t){return VA(e).put(Z_,t)}yr(e,t){if(t){const r=t9(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Te.min())))return r}return ht.newInvalidDocument(e)}}function ex(n){return new g9(n)}class y9 extends ZC{constructor(e,t){super(),this.vr=e,this.trackRemovals=t,this.Cr=new rs(r=>r.toString(),(r,a)=>r.isEqual(a))}applyChanges(e){const t=[];let r=0,a=new nt((o,u)=>Re(o.canonicalString(),u.canonicalString()));return this.changes.forEach((o,u)=>{const d=this.Cr.get(o);if(t.push(this.vr.removeEntry(e,o,d.readTime)),u.isValidDocument()){const p=vA(this.vr.serializer,u);a=a.add(o.path.popLast());const m=Zp(p);r+=m-d.size,t.push(this.vr.addEntry(e,o,p))}else if(r-=d.size,this.trackRemovals){const p=vA(this.vr.serializer,u.convertToNoDocument(Te.min()));t.push(this.vr.addEntry(e,o,p))}}),a.forEach(o=>{t.push(this.vr.indexManager.addToCollectionParentIndex(e,o))}),t.push(this.vr.updateMetadata(e,r)),j.waitFor(t)}getFromCache(e,t){return this.vr.wr(e,t).next(r=>(this.Cr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.vr.Sr(e,t).next(({documents:r,Dr:a})=>(a.forEach((o,u)=>{this.Cr.set(o,{size:u,readTime:r.get(o).readTime})}),r))}}function VA(n){return Jt(n,jh)}function ro(n){return Jt(n,Hp)}function ah(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function MA(n,e){const t=e.documentKey.path.toArray();return[n,Xp(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function LA(n,e){const t=n.path.toArray(),r=e.path.toArray();let a=0;for(let o=0;o<t.length-2&&o<r.length-2;++o)if(a=Re(t[o],r[o]),a)return a;return a=Re(t.length,r.length),a||(a=Re(t[t.length-2],r[r.length-2]),a||Re(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _9{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&Sh(r.mutation,a,qn.empty(),gt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Pe()){const a=ai();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(o=>{let u=fh();return o.forEach((d,p)=>{u=u.insert(d,p.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=ai();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Pe()))}populateOverlays(e,t,r){const a=[];return r.forEach(o=>{t.has(o)||a.push(o)}),this.documentOverlayCache.getOverlays(e,a).next(o=>{o.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,r,a){let o=Hn();const u=Ah(),d=function(){return Ah()}();return t.forEach((p,m)=>{const _=r.get(m.key);a.has(m.key)&&(_===void 0||_.mutation instanceof is)?o=o.insert(m.key,m):_!==void 0?(u.set(m.key,_.mutation.getFieldMask()),Sh(_.mutation,m,_.mutation.getFieldMask(),gt.now())):u.set(m.key,qn.empty())}),this.recalculateAndSaveOverlays(e,o).next(p=>(p.forEach((m,_)=>u.set(m,_)),t.forEach((m,_)=>{var v;return d.set(m,new _9(_,(v=u.get(m))!==null&&v!==void 0?v:null))}),d))}recalculateAndSaveOverlays(e,t){const r=Ah();let a=new lt((u,d)=>u-d),o=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(p=>{const m=t.get(p);if(m===null)return;let _=r.get(p)||qn.empty();_=d.applyToLocalView(m,_),r.set(p,_);const v=(a.get(d.batchId)||Pe()).add(p);a=a.insert(d.batchId,v)})}).next(()=>{const u=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),m=p.key,_=p.value,v=_C();_.forEach(w=>{if(!o.has(w)){const S=AC(t.get(w),r.get(w));S!==null&&v.set(w,S),o=o.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,v))}return j.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(u){return he.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):RE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(o=>{const u=a-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-o.size):j.resolve(ai());let d=uu,p=o;return u.next(m=>j.forEach(m,(_,v)=>(d<v.largestBatchId&&(d=v.largestBatchId),o.get(_)?j.resolve():this.remoteDocumentCache.getEntry(e,_).next(w=>{p=p.insert(_,w)}))).next(()=>this.populateOverlays(e,m,o)).next(()=>this.computeViews(e,p,m,Pe())).next(_=>({batchId:d,changes:yC(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new he(t)).next(r=>{let a=fh();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const o=t.collectionGroup;let u=fh();return this.indexManager.getCollectionParents(e,o).next(d=>j.forEach(d,p=>{const m=function(v,w){return new ns(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,p.child(o));return this.getDocumentsMatchingCollectionQuery(e,m,r,a).next(_=>{_.forEach((v,w)=>{u=u.insert(v,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,a){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,a))).next(u=>{o.forEach((p,m)=>{const _=m.getKey();u.get(_)===null&&(u=u.insert(_,ht.newInvalidDocument(_)))});let d=fh();return u.forEach((p,m)=>{const _=o.get(p);_!==void 0&&Sh(_.mutation,m,qn.empty(),gt.now()),yd(t,m)&&(d=d.insert(p,m))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v9{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,t){return j.resolve(this.Fr.get(t))}saveBundleMetadata(e,t){return this.Fr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Mt(a.createTime)}}(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.Mr.get(t))}saveNamedQuery(e,t){return this.Mr.set(t.name,function(a){return{name:a.name,query:ME(a.bundledQuery),readTime:Mt(a.readTime)}}(t)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E9{constructor(){this.overlays=new lt(he.comparator),this.Or=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ai();return j.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,o)=>{this.St(e,t,o)}),j.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Or.get(r);return a!==void 0&&(a.forEach(o=>this.overlays=this.overlays.remove(o)),this.Or.delete(r)),j.resolve()}getOverlaysForCollection(e,t,r){const a=ai(),o=t.length+1,u=new he(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,m=p.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===o&&p.largestBatchId>r&&a.set(p.getKey(),p)}return j.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let o=new lt((m,_)=>m-_);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let _=o.get(m.largestBatchId);_===null&&(_=ai(),o=o.insert(m.largestBatchId,_)),_.set(m.getKey(),m)}}const d=ai(),p=o.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((m,_)=>d.set(m,_)),!(d.size()>=a)););return j.resolve(d)}St(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const u=this.Or.get(a.largestBatchId).delete(r.key);this.Or.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new OE(t,r));let o=this.Or.get(t);o===void 0&&(o=Pe(),this.Or.set(t,o)),this.Or.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T9{constructor(){this.sessionToken=xt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(){this.Nr=new nt(ln.Br),this.Lr=new nt(ln.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,t){const r=new ln(e,t);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Qr(new ln(e,t))}$r(e,t){e.forEach(r=>this.removeReference(r,t))}Ur(e){const t=new he(new Be([])),r=new ln(t,e),a=new ln(t,e+1),o=[];return this.Lr.forEachInRange([r,a],u=>{this.Qr(u),o.push(u.key)}),o}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const t=new he(new Be([])),r=new ln(t,e),a=new ln(t,e+1);let o=Pe();return this.Lr.forEachInRange([r,a],u=>{o=o.add(u.key)}),o}containsKey(e){const t=new ln(e,0),r=this.Nr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ln{constructor(e,t){this.key=e,this.Gr=t}static Br(e,t){return he.comparator(e.key,t.key)||Re(e.Gr,t.Gr)}static kr(e,t){return Re(e.Gr,t.Gr)||he.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w9{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Jn=1,this.zr=new nt(ln.Br)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const o=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new PE(o,t,r,a);this.mutationQueue.push(u);for(const d of a)this.zr=this.zr.add(new ln(d.key,o)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return j.resolve(u)}lookupMutationBatch(e,t){return j.resolve(this.jr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.Hr(r),o=a<0?0:a;return j.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?na:this.Jn-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ln(t,0),a=new ln(t,Number.POSITIVE_INFINITY),o=[];return this.zr.forEachInRange([r,a],u=>{const d=this.jr(u.Gr);o.push(d)}),j.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Re);return t.forEach(a=>{const o=new ln(a,0),u=new ln(a,Number.POSITIVE_INFINITY);this.zr.forEachInRange([o,u],d=>{r=r.add(d.Gr)})}),j.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let o=r;he.isDocumentKey(o)||(o=o.child(""));const u=new ln(new he(o),0);let d=new nt(Re);return this.zr.forEachWhile(p=>{const m=p.key.path;return!!r.isPrefixOf(m)&&(m.length===a&&(d=d.add(p.Gr)),!0)},u),j.resolve(this.Jr(d))}Jr(e){const t=[];return e.forEach(r=>{const a=this.jr(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){ve(this.Yr(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return j.forEach(t.mutations,a=>{const o=new ln(a.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,t){const r=new ln(t,0),a=this.zr.firstAfterOrEqual(r);return j.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Yr(e,t){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const t=this.Hr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b9{constructor(e){this.Zr=e,this.docs=function(){return new lt(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),o=a?a.size:0,u=this.Zr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return j.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(t))}getEntries(e,t){let r=Hn();return t.forEach(a=>{const o=this.docs.get(a);r=r.insert(a,o?o.document.mutableCopy():ht.newInvalidDocument(a))}),j.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let o=Hn();const u=t.path,d=new he(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:m,value:{document:_}}=p.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||_E(V1(_),r)<=0||(a.has(_.key)||yd(t,_))&&(o=o.insert(_.key,_.mutableCopy()))}return j.resolve(o)}getAllFromCollectionGroup(e,t,r,a){ge(9500)}Xr(e,t){return j.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new I9(this)}getSize(e){return j.resolve(this.size)}}class I9 extends ZC{constructor(e){super(),this.vr=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.vr.addEntry(e,a)):this.vr.removeEntry(r)}),j.waitFor(t)}getFromCache(e,t){return this.vr.getEntry(e,t)}getAllFromCache(e,t){return this.vr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A9{constructor(e){this.persistence=e,this.ei=new rs(t=>Ro(t),md),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.ti=0,this.ni=new zE,this.targetCount=0,this.ri=No.rr()}forEachTarget(e,t){return this.ei.forEach((r,a)=>t(a)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ti&&(this.ti=t),j.resolve()}ar(e){this.ei.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ri=new No(t),this.highestTargetId=t),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,t){return this.ar(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.ar(t),j.resolve()}removeTargetData(e,t){return this.ei.delete(t.target),this.ni.Ur(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,r){let a=0;const o=[];return this.ei.forEach((u,d)=>{d.sequenceNumber<=t&&r.get(d.targetId)===null&&(this.ei.delete(u),o.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),j.waitFor(o).next(()=>a)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const r=this.ei.get(t)||null;return j.resolve(r)}addMatchingKeys(e,t,r){return this.ni.qr(t,r),j.resolve()}removeMatchingKeys(e,t,r){this.ni.$r(t,r);const a=this.persistence.referenceDelegate,o=[];return a&&t.forEach(u=>{o.push(a.markPotentiallyOrphaned(e,u))}),j.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ni.Ur(t),j.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ni.Wr(t);return j.resolve(r)}containsKey(e,t){return j.resolve(this.ni.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,t){this.ii={},this.overlays={},this.si=new jn(0),this.oi=!1,this.oi=!0,this._i=new T9,this.referenceDelegate=e(this),this.ai=new A9(this),this.indexManager=new u9,this.remoteDocumentCache=function(a){return new b9(a)}(r=>this.referenceDelegate.ui(r)),this.serializer=new qC(t),this.ci=new v9(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new E9,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ii[e.toKey()];return r||(r=new w9(t,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const a=new S9(this.si.next());return this.referenceDelegate.li(),r(a).next(o=>this.referenceDelegate.hi(a).next(()=>o)).toPromise().then(o=>(a.raiseOnCommittedEvent(),o))}Pi(e,t){return j.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,t)))}}class S9 extends L1{constructor(e){super(),this.currentSequenceNumber=e}}class Um{constructor(e){this.persistence=e,this.Ti=new zE,this.Ii=null}static Ei(e){return new Um(e)}get di(){if(this.Ii)return this.Ii;throw ge(60996)}addReference(e,t,r){return this.Ti.addReference(r,t),this.di.delete(r.toString()),j.resolve()}removeReference(e,t,r){return this.Ti.removeReference(r,t),this.di.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),j.resolve()}removeTarget(e,t){this.Ti.Ur(t.targetId).forEach(a=>this.di.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}li(){this.Ii=new Set}hi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.di,r=>{const a=he.fromPath(r);return this.Ai(e,a).next(o=>{o||t.removeEntry(a,Te.min())})}).next(()=>(this.Ii=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ai(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}ui(e){return 0}Ai(e,t){return j.or([()=>j.resolve(this.Ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Pi(e,t)])}}class em{constructor(e,t){this.persistence=e,this.Ri=new rs(r=>An(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=JC(this,t)}static Ei(e,t){return new em(e,t)}li(){}hi(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}Vr(e){let t=0;return this.Ar(e,r=>{t++}).next(()=>t)}Ar(e,t){return j.forEach(this.Ri,(r,a)=>this.gr(e,r,a).next(o=>o?j.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),o=a.newChangeBuffer();return a.Xr(e,u=>this.gr(e,u,t).next(d=>{d||(r++,o.removeEntry(u,Te.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.Ri.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,t,r){return this.Ri.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.Ri.set(t,e.currentSequenceNumber),j.resolve()}ui(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=bp(e.data.value)),t}gr(e,t,r){return j.or([()=>this.persistence.Pi(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.Ri.get(t);return j.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R9{constructor(e){this.serializer=e}q(e,t,r,a){const o=new Rm("createOrUpgrade",t);r<1&&a>=1&&(function(p){p.createObjectStore(pd)}(e),function(p){p.createObjectStore(Fh,{keyPath:qU}),p.createObjectStore(Dr,{keyPath:YI,autoIncrement:!0}).createIndex(mo,WI,{unique:!0}),p.createObjectStore(cu)}(e),UA(e),function(p){p.createObjectStore(ao)}(e));let u=j.resolve();return r<3&&a>=3&&(r!==0&&(function(p){p.deleteObjectStore(du),p.deleteObjectStore(hu),p.deleteObjectStore(wo)}(e),UA(e)),u=u.next(()=>function(p){const m=p.store(wo),_={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Te.min().toTimestamp(),targetCount:0};return m.put($p,_)}(o))),r<4&&a>=4&&(r!==0&&(u=u.next(()=>function(p,m){return m.store(Dr).J().next(v=>{p.deleteObjectStore(Dr),p.createObjectStore(Dr,{keyPath:YI,autoIncrement:!0}).createIndex(mo,WI,{unique:!0});const w=m.store(Dr),S=v.map(D=>w.put(D));return j.waitFor(S)})}(e,o))),u=u.next(()=>{(function(p){p.createObjectStore(fu,{keyPath:JU})})(e)})),r<5&&a>=5&&(u=u.next(()=>this.Vi(o))),r<6&&a>=6&&(u=u.next(()=>(function(p){p.createObjectStore(jh)}(e),this.mi(o)))),r<7&&a>=7&&(u=u.next(()=>this.fi(o))),r<8&&a>=8&&(u=u.next(()=>this.gi(e,o))),r<9&&a>=9&&(u=u.next(()=>{(function(p){p.objectStoreNames.contains("remoteDocumentChanges")&&p.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&a>=10&&(u=u.next(()=>this.pi(o))),r<11&&a>=11&&(u=u.next(()=>{(function(p){p.createObjectStore(Cm,{keyPath:ZU})})(e),function(p){p.createObjectStore(xm,{keyPath:e6})}(e)})),r<12&&a>=12&&(u=u.next(()=>{(function(p){const m=p.createObjectStore(Dm,{keyPath:o6});m.createIndex(tv,l6,{unique:!1}),m.createIndex($1,u6,{unique:!1})})(e)})),r<13&&a>=13&&(u=u.next(()=>function(p){const m=p.createObjectStore(Hp,{keyPath:$U});m.createIndex(Tp,GU),m.createIndex(F1,KU)}(e)).next(()=>this.yi(e,o)).next(()=>e.deleteObjectStore(ao))),r<14&&a>=14&&(u=u.next(()=>this.wi(e,o))),r<15&&a>=15&&(u=u.next(()=>function(p){p.createObjectStore(TE,{keyPath:t6,autoIncrement:!0}).createIndex(ev,n6,{unique:!1}),p.createObjectStore(Gp,{keyPath:r6}).createIndex(q1,i6,{unique:!1}),p.createObjectStore(Kp,{keyPath:s6}).createIndex(H1,a6,{unique:!1})}(e))),r<16&&a>=16&&(u=u.next(()=>{t.objectStore(Gp).clear()}).next(()=>{t.objectStore(Kp).clear()})),r<17&&a>=17&&(u=u.next(()=>{(function(p){p.createObjectStore(wE,{keyPath:c6})})(e)})),u}mi(e){let t=0;return e.store(ao).te((r,a)=>{t+=Zp(a)}).next(()=>{const r={byteSize:t};return e.store(jh).put(Z_,r)})}Vi(e){const t=e.store(Fh),r=e.store(Dr);return t.J().next(a=>j.forEach(a,o=>{const u=IDBKeyRange.bound([o.userId,na],[o.userId,o.lastAcknowledgedBatchId]);return r.J(mo,u).next(d=>j.forEach(d,p=>{ve(p.userId===o.userId,18650,"Cannot process batch from unexpected user",{batchId:p.batchId});const m=lo(this.serializer,p);return QC(e,o.userId,m).next(()=>{})}))}))}fi(e){const t=e.store(du),r=e.store(ao);return e.store(wo).get($p).next(a=>{const o=[];return r.te((u,d)=>{const p=new Be(u),m=function(v){return[0,An(v)]}(p);o.push(t.get(m).next(_=>_?j.resolve():(v=>t.put({targetId:0,path:An(v),sequenceNumber:a.highestListenSequenceNumber}))(p)))}).next(()=>j.waitFor(o))})}gi(e,t){e.createObjectStore(qh,{keyPath:XU});const r=t.store(qh),a=new UE,o=u=>{if(a.add(u)){const d=u.lastSegment(),p=u.popLast();return r.put({collectionId:d,parent:An(p)})}};return t.store(ao).te({ee:!0},(u,d)=>{const p=new Be(u);return o(p.popLast())}).next(()=>t.store(cu).te({ee:!0},([u,d,p],m)=>{const _=si(d);return o(_.popLast())}))}pi(e){const t=e.store(hu);return t.te((r,a)=>{const o=mh(a),u=HC(this.serializer,o);return t.put(u)})}yi(e,t){const r=t.store(ao),a=[];return r.te((o,u)=>{const d=t.store(Hp),p=function(v){return v.document?new he(Be.fromString(v.document.name).popFirst(5)):v.noDocument?he.fromSegments(v.noDocument.path):v.unknownDocument?he.fromSegments(v.unknownDocument.path):ge(36783)}(u).path.toArray(),m={prefixPath:p.slice(0,p.length-2),collectionGroup:p[p.length-2],documentId:p[p.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};a.push(d.put(m))}).next(()=>j.waitFor(a))}wi(e,t){const r=t.store(Dr),a=ex(this.serializer),o=new BE(Um.Ei,this.serializer.wt);return r.J().next(u=>{const d=new Map;return u.forEach(p=>{var m;let _=(m=d.get(p.userId))!==null&&m!==void 0?m:Pe();lo(this.serializer,p).keys().forEach(v=>_=_.add(v)),d.set(p.userId,_)}),j.forEach(d,(p,m)=>{const _=new cn(m),v=Mm.bt(this.serializer,_),w=o.getIndexManager(_),S=Lm.bt(_,this.serializer,w,o.referenceDelegate);return new tx(a,S,v,w).recalculateAndSaveOverlaysForDocumentKeys(new nv(t,jn.le),p).next()})})}}function UA(n){n.createObjectStore(du,{keyPath:YU}).createIndex(EE,WU,{unique:!0}),n.createObjectStore(hu,{keyPath:"targetId"}).createIndex(j1,QU,{unique:!0}),n.createObjectStore(wo)}const Gs="IndexedDbPersistence",b_=18e5,I_=5e3,A_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",nx="main";class FE{constructor(e,t,r,a,o,u,d,p,m,_,v=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.bi=o,this.window=u,this.document=d,this.Si=m,this.Di=_,this.Ci=v,this.si=null,this.oi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Fi=null,this.inForeground=!1,this.Mi=null,this.xi=null,this.Oi=Number.NEGATIVE_INFINITY,this.Ni=w=>Promise.resolve(),!FE.C())throw new te(Q.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new m9(this,a),this.Bi=t+nx,this.serializer=new qC(p),this.Li=new oi(this.Bi,this.Ci,new R9(this.serializer)),this._i=new r9,this.ai=new h9(this.referenceDelegate,this.serializer),this.remoteDocumentCache=ex(this.serializer),this.ci=new n9,this.window&&this.window.localStorage?this.ki=this.window.localStorage:(this.ki=null,_===!1&&Vt(Gs,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.qi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new te(Q.FAILED_PRECONDITION,A_);return this.Qi(),this.$i(),this.Ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ai.getHighestSequenceNumber(e))}).then(e=>{this.si=new jn(e,this.Si)}).then(()=>{this.oi=!0}).catch(e=>(this.Li&&this.Li.close(),Promise.reject(e)))}Ki(e){return this.Ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Li.U(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.bi.enqueueAndForget(async()=>{this.started&&await this.qi()}))}qi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ip(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Wi(e).next(t=>{t||(this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)))})}).next(()=>this.Gi(e)).next(t=>this.isPrimary&&!t?this.zi(e).next(()=>!1):!!t&&this.ji(e).next(()=>!0))).catch(e=>{if(Ta(e))return re(Gs,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return re(Gs,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.bi.enqueueRetryable(()=>this.Ni(e)),this.isPrimary=e})}Wi(e){return oh(e).get(Ol).next(t=>j.resolve(this.Hi(t)))}Ji(e){return ip(e).delete(this.clientId)}async Yi(){if(this.isPrimary&&!this.Zi(this.Oi,b_)){this.Oi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Jt(t,fu);return r.J().next(a=>{const o=this.Xi(a,b_),u=a.filter(d=>o.indexOf(d)===-1);return j.forEach(u,d=>r.delete(d.clientId)).next(()=>u)})}).catch(()=>[]);if(this.ki)for(const t of e)this.ki.removeItem(this.es(t.clientId))}}Ui(){this.xi=this.bi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.qi().then(()=>this.Yi()).then(()=>this.Ui()))}Hi(e){return!!e&&e.ownerId===this.clientId}Gi(e){return this.Di?j.resolve(!0):oh(e).get(Ol).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,I_)&&!this.ts(t.ownerId)){if(this.Hi(t)&&this.networkEnabled)return!0;if(!this.Hi(t)){if(!t.allowTabSynchronization)throw new te(Q.FAILED_PRECONDITION,A_);return!1}}return!(!this.networkEnabled||!this.inForeground)||ip(e).J().next(r=>this.Xi(r,I_).find(a=>{if(this.clientId!==a.clientId){const o=!this.networkEnabled&&a.networkEnabled,u=!this.inForeground&&a.inForeground,d=this.networkEnabled===a.networkEnabled;if(o||u&&d)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&re(Gs,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.oi=!1,this.ns(),this.xi&&(this.xi.cancel(),this.xi=null),this.rs(),this.ss(),await this.Li.runTransaction("shutdown","readwrite",[pd,fu],e=>{const t=new nv(e,jn.le);return this.zi(t).next(()=>this.Ji(t))}),this.Li.close(),this._s()}Xi(e,t){return e.filter(r=>this.Zi(r.updateTimeMs,t)&&!this.ts(r.clientId))}us(){return this.runTransaction("getActiveClients","readonly",e=>ip(e).J().next(t=>this.Xi(t,b_).map(r=>r.clientId)))}get started(){return this.oi}getGlobalsCache(){return this._i}getMutationQueue(e,t){return Lm.bt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new c9(e,this.serializer.wt.databaseId)}getDocumentOverlayCache(e){return Mm.bt(this.serializer,e)}getBundleCache(){return this.ci}runTransaction(e,t,r){re(Gs,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",o=function(p){return p===17?f6:p===16?d6:p===15?bE:p===14?Q1:p===13?K1:p===12?h6:p===11?G1:void ge(60245)}(this.Ci);let u;return this.Li.runTransaction(e,a,o,d=>(u=new nv(d,this.si?this.si.next():jn.le),t==="readwrite-primary"?this.Wi(u).next(p=>!!p||this.Gi(u)).next(p=>{if(!p)throw Vt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)),new te(Q.FAILED_PRECONDITION,M1);return r(u)}).next(p=>this.ji(u).next(()=>p)):this.cs(u).next(()=>r(u)))).then(d=>(u.raiseOnCommittedEvent(),d))}cs(e){return oh(e).get(Ol).next(t=>{if(t!==null&&this.Zi(t.leaseTimestampMs,I_)&&!this.ts(t.ownerId)&&!this.Hi(t)&&!(this.Di||this.allowTabSynchronization&&t.allowTabSynchronization))throw new te(Q.FAILED_PRECONDITION,A_)})}ji(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return oh(e).put(Ol,t)}static C(){return oi.C()}zi(e){const t=oh(e);return t.get(Ol).next(r=>this.Hi(r)?(re(Gs,"Releasing primary lease."),t.delete(Ol)):j.resolve())}Zi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Vt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Qi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Mi=()=>{this.bi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.qi()))},this.document.addEventListener("visibilitychange",this.Mi),this.inForeground=this.document.visibilityState==="visible")}rs(){this.Mi&&(this.document.removeEventListener("visibilitychange",this.Mi),this.Mi=null)}$i(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Fi=()=>{this.ns();const t=/(?:Version|Mobile)\/1[456]/;hR()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.bi.enterRestrictedMode(!0),this.bi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Fi))}ss(){this.Fi&&(this.window.removeEventListener("pagehide",this.Fi),this.Fi=null)}ts(e){var t;try{const r=((t=this.ki)===null||t===void 0?void 0:t.getItem(this.es(e)))!==null;return re(Gs,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Vt(Gs,"Failed to get zombied client id.",r),!1}}ns(){if(this.ki)try{this.ki.setItem(this.es(this.clientId),String(Date.now()))}catch(e){Vt("Failed to set zombie client id.",e)}}_s(){if(this.ki)try{this.ki.removeItem(this.es(this.clientId))}catch{}}es(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function oh(n){return Jt(n,pd)}function ip(n){return Jt(n,fu)}function jE(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.ls=r,this.hs=a}static Ps(e,t){let r=Pe(),a=Pe();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:a=a.add(o.doc.key)}return new qE(e,t.fromCache,r,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C9{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return hR()?8:U1(wt())>0?6:4}()}initialize(e,t){this.As=e,this.indexManager=t,this.Ts=!0}getDocumentsMatchingQuery(e,t,r,a){const o={result:null};return this.Rs(e,t).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Vs(e,t,a,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new C9;return this.fs(e,t,u).next(d=>{if(o.result=d,this.Is)return this.gs(e,t,u,d.size)})}).next(()=>o.result)}gs(e,t,r,a){return r.documentReadCount<this.Es?(zl()<=ze.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Bl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),j.resolve()):(zl()<=ze.DEBUG&&re("QueryEngine","Query:",Bl(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ds*a?(zl()<=ze.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Bl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(t))):j.resolve())}Rs(e,t){if(uA(t))return j.resolve(null);let r=Vn(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Wp(t,null,"F"),r=Vn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const u=Pe(...o);return this.As.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(p=>{const m=this.ps(t,d);return this.ys(t,m,u,p.readTime)?this.Rs(e,Wp(t,null,"F")):this.ws(e,m,t,p)}))})))}Vs(e,t,r,a){return uA(t)||a.isEqual(Te.min())?j.resolve(null):this.As.getDocuments(e,r).next(o=>{const u=this.ps(t,o);return this.ys(t,u,r,a)?j.resolve(null):(zl()<=ze.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Bl(t)),this.ws(e,u,t,k1(a,uu)).next(d=>d))})}ps(e,t){let r=new nt(mC(e));return t.forEach((a,o)=>{yd(e,o)&&(r=r.add(o))}),r}ys(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(a)>0)}fs(e,t,r){return zl()<=ze.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Bl(t)),this.As.getDocumentsMatchingQuery(e,t,nr.min(),r)}ws(e,t,r,a){return this.As.getDocumentsMatchingQuery(e,r,a).next(o=>(t.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="LocalStore",x9=3e8;class D9{constructor(e,t,r,a){this.persistence=e,this.bs=t,this.serializer=a,this.Ss=new lt(Re),this.Ds=new rs(o=>Ro(o),md),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tx(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ss))}}function ix(n,e,t,r){return new D9(n,e,t,r)}async function sx(n,e){const t=fe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(o=>(a=o,t.Fs(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],d=[];let p=Pe();for(const m of a){u.push(m.batchId);for(const _ of m.mutations)p=p.add(_.key)}for(const m of o){d.push(m.batchId);for(const _ of m.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(r,p).next(m=>({Ms:m,removedBatchIds:u,addedBatchIds:d}))})})}function P9(n,e){const t=fe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),o=t.Cs.newChangeBuffer({trackRemovals:!0});return function(d,p,m,_){const v=m.batch,w=v.keys();let S=j.resolve();return w.forEach(D=>{S=S.next(()=>_.getEntry(p,D)).next(U=>{const L=m.docVersions.get(D);ve(L!==null,48541),U.version.compareTo(L)<0&&(v.applyToRemoteDocument(U,m),U.isValidDocument()&&(U.setReadTime(m.commitVersion),_.addEntry(U)))})}),S.next(()=>d.mutationQueue.removeMutationBatch(p,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let p=Pe();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(p=p.add(d.batch.mutations[m].key));return p}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function ax(n){const e=fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ai.getLastRemoteSnapshotVersion(t))}function N9(n,e){const t=fe(n),r=e.snapshotVersion;let a=t.Ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=t.Cs.newChangeBuffer({trackRemovals:!0});a=t.Ss;const d=[];e.targetChanges.forEach((_,v)=>{const w=a.get(v);if(!w)return;d.push(t.ai.removeMatchingKeys(o,_.removedDocuments,v).next(()=>t.ai.addMatchingKeys(o,_.addedDocuments,v)));let S=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?S=S.withResumeToken(xt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):_.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(_.resumeToken,r)),a=a.insert(v,S),function(U,L,H){return U.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=x9?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(w,S,_)&&d.push(t.ai.updateTargetData(o,S))});let p=Hn(),m=Pe();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(o,_))}),d.push(ox(o,u,e.documentUpdates).next(_=>{p=_.xs,m=_.Os})),!r.isEqual(Te.min())){const _=t.ai.getLastRemoteSnapshotVersion(o).next(v=>t.ai.setTargetsMetadata(o,o.currentSequenceNumber,r));d.push(_)}return j.waitFor(d).next(()=>u.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,p,m)).next(()=>p)}).then(o=>(t.Ss=a,o))}function ox(n,e,t){let r=Pe(),a=Pe();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let u=Hn();return t.forEach((d,p)=>{const m=o.get(d);p.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!m.isValidDocument()||p.version.compareTo(m.version)>0||p.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):re(HE,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",p.version)}),{xs:u,Os:a}})}function O9(n,e){const t=fe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=na),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Eu(n,e){const t=fe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.ai.getTargetData(r,e).next(o=>o?(a=o,j.resolve(a)):t.ai.allocateTargetId(r).next(u=>(a=new $i(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.ai.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.Ss.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ss=t.Ss.insert(r.targetId,r),t.Ds.set(e,r.targetId)),r})}async function Tu(n,e,t){const r=fe(n),a=r.Ss.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!Ta(u))throw u;re(HE,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(a.target)}function tm(n,e,t){const r=fe(n);let a=Te.min(),o=Pe();return r.persistence.runTransaction("Execute query","readwrite",u=>function(p,m,_){const v=fe(p),w=v.Ds.get(_);return w!==void 0?j.resolve(v.Ss.get(w)):v.ai.getTargetData(m,_)}(r,u,Vn(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(u,d.targetId).next(p=>{o=p})}).next(()=>r.bs.getDocumentsMatchingQuery(u,e,t?a:Te.min(),t?o:Pe())).next(d=>(cx(r,pC(e),d),{documents:d,Ns:o})))}function lx(n,e){const t=fe(n),r=fe(t.ai),a=t.Ss.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",o=>r.Rt(o,e).next(u=>u?u.target:null))}function ux(n,e){const t=fe(n),r=t.vs.get(e)||Te.min();return t.persistence.runTransaction("Get new document changes","readonly",a=>t.Cs.getAllFromCollectionGroup(a,e,k1(r,uu),Number.MAX_SAFE_INTEGER)).then(a=>(cx(t,e,a),a))}function cx(n,e,t){let r=n.vs.get(e)||Te.min();t.forEach((a,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.vs.set(e,r)}async function k9(n,e,t,r){const a=fe(n);let o=Pe(),u=Hn();for(const m of t){const _=e.Bs(m.metadata.name);m.document&&(o=o.add(_));const v=e.Ls(m);v.setReadTime(e.ks(m.metadata.readTime)),u=u.insert(_,v)}const d=a.Cs.newChangeBuffer({trackRemovals:!0}),p=await Eu(a,function(_){return Vn(Lu(Be.fromString(`__bundle__/docs/${_}`)))}(r));return a.persistence.runTransaction("Apply bundle documents","readwrite",m=>ox(m,d,u).next(_=>(d.apply(m),_)).next(_=>a.ai.removeMatchingKeysForTargetId(m,p.targetId).next(()=>a.ai.addMatchingKeys(m,o,p.targetId)).next(()=>a.localDocuments.getLocalViewOfDocuments(m,_.xs,_.Os)).next(()=>_.xs)))}async function V9(n,e,t=Pe()){const r=await Eu(n,Vn(ME(e.bundledQuery))),a=fe(n);return a.persistence.runTransaction("Save named query","readwrite",o=>{const u=Mt(e.readTime);if(r.snapshotVersion.compareTo(u)>=0)return a.ci.saveNamedQuery(o,e);const d=r.withResumeToken(xt.EMPTY_BYTE_STRING,u);return a.Ss=a.Ss.insert(d.targetId,d),a.ai.updateTargetData(o,d).next(()=>a.ai.removeMatchingKeysForTargetId(o,r.targetId)).next(()=>a.ai.addMatchingKeys(o,t,r.targetId)).next(()=>a.ci.saveNamedQuery(o,e))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx="firestore_clients";function zA(n,e){return`${hx}_${n}_${e}`}const dx="firestore_mutations";function BA(n,e,t){let r=`${dx}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const fx="firestore_targets";function S_(n,e){return`${fx}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="SharedClientState";class nm{constructor(e,t,r,a){this.user=e,this.batchId=t,this.state=r,this.error=a}static qs(e,t,r){const a=JSON.parse(r);let o,u=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return u&&a.error&&(u=typeof a.error.message=="string"&&typeof a.error.code=="string",u&&(o=new te(a.error.code,a.error.message))),u?new nm(e,t,a.state,o):(Vt(Zr,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Rh{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static qs(e,t){const r=JSON.parse(t);let a,o=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(a=new te(r.error.code,r.error.message))),o?new Rh(e,r.state,a):(Vt(Zr,`Failed to parse target state for ID '${e}': ${t}`),null)}Qs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class rm{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static qs(e,t){const r=JSON.parse(t);let a=typeof r=="object"&&r.activeTargetIds instanceof Array,o=CE();for(let u=0;a&&u<r.activeTargetIds.length;++u)a=z1(r.activeTargetIds[u]),o=o.add(r.activeTargetIds[u]);return a?new rm(e,o):(Vt(Zr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class $E{constructor(e,t){this.clientId=e,this.onlineState=t}static qs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new $E(t.clientId,t.onlineState):(Vt(Zr,`Failed to parse online state: ${e}`),null)}}class yv{constructor(){this.activeTargetIds=CE()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class R_{constructor(e,t,r,a,o){this.window=e,this.bi=t,this.persistenceKey=r,this.Ks=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ws=this.Gs.bind(this),this.zs=new lt(Re),this.started=!1,this.js=[];const u=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=o,this.Hs=zA(this.persistenceKey,this.Ks),this.Js=function(p){return`firestore_sequence_number_${p}`}(this.persistenceKey),this.zs=this.zs.insert(this.Ks,new yv),this.Ys=new RegExp(`^${hx}_${u}_([^_]*)$`),this.Zs=new RegExp(`^${dx}_${u}_(\\d+)(?:_(.*))?$`),this.Xs=new RegExp(`^${fx}_${u}_(\\d+)$`),this.eo=function(p){return`firestore_online_state_${p}`}(this.persistenceKey),this.no=function(p){return`firestore_bundle_loaded_v2_${p}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ws)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.us();for(const r of e){if(r===this.Ks)continue;const a=this.getItem(zA(this.persistenceKey,r));if(a){const o=rm.qs(r,a);o&&(this.zs=this.zs.insert(o.clientId,o))}}this.ro();const t=this.storage.getItem(this.eo);if(t){const r=this.io(t);r&&this.so(r)}for(const r of this.js)this.Gs(r);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Js,JSON.stringify(e))}getAllActiveQueryTargets(){return this.oo(this.zs)}isActiveQueryTarget(e){let t=!1;return this.zs.forEach((r,a)=>{a.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this._o(e,"pending")}updateMutationState(e,t,r){this._o(e,t,r),this.ao(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(S_(this.persistenceKey,e));if(a){const o=Rh.qs(e,a);o&&(r=o.state)}}return t&&this.uo.$s(e),this.ro(),r}removeLocalQueryTarget(e){this.uo.Us(e),this.ro()}isLocalQueryTarget(e){return this.uo.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(S_(this.persistenceKey,e))}updateQueryState(e,t,r){this.co(e,t,r)}handleUserChange(e,t,r){t.forEach(a=>{this.ao(a)}),this.currentUser=e,r.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(e){this.lo(e)}notifyBundleLoaded(e){this.ho(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ws),this.removeItem(this.Hs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return re(Zr,"READ",e,t),t}setItem(e,t){re(Zr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){re(Zr,"REMOVE",e),this.storage.removeItem(e)}Gs(e){const t=e;if(t.storageArea===this.storage){if(re(Zr,"EVENT",t.key,t.newValue),t.key===this.Hs)return void Vt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.bi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ys.test(t.key)){if(t.newValue==null){const r=this.Po(t.key);return this.To(r,null)}{const r=this.Io(t.key,t.newValue);if(r)return this.To(r.clientId,r)}}else if(this.Zs.test(t.key)){if(t.newValue!==null){const r=this.Eo(t.key,t.newValue);if(r)return this.Ao(r)}}else if(this.Xs.test(t.key)){if(t.newValue!==null){const r=this.Ro(t.key,t.newValue);if(r)return this.Vo(r)}}else if(t.key===this.eo){if(t.newValue!==null){const r=this.io(t.newValue);if(r)return this.so(r)}}else if(t.key===this.Js){const r=function(o){let u=jn.le;if(o!=null)try{const d=JSON.parse(o);ve(typeof d=="number",30636,{mo:o}),u=d}catch(d){Vt(Zr,"Failed to read sequence number from WebStorage",d)}return u}(t.newValue);r!==jn.le&&this.sequenceNumberHandler(r)}else if(t.key===this.no){const r=this.fo(t.newValue);await Promise.all(r.map(a=>this.syncEngine.po(a)))}}}else this.js.push(t)})}}get uo(){return this.zs.get(this.Ks)}ro(){this.setItem(this.Hs,this.uo.Qs())}_o(e,t,r){const a=new nm(this.currentUser,e,t,r),o=BA(this.persistenceKey,this.currentUser,e);this.setItem(o,a.Qs())}ao(e){const t=BA(this.persistenceKey,this.currentUser,e);this.removeItem(t)}lo(e){const t={clientId:this.Ks,onlineState:e};this.storage.setItem(this.eo,JSON.stringify(t))}co(e,t,r){const a=S_(this.persistenceKey,e),o=new Rh(e,t,r);this.setItem(a,o.Qs())}ho(e){const t=JSON.stringify(Array.from(e));this.setItem(this.no,t)}Po(e){const t=this.Ys.exec(e);return t?t[1]:null}Io(e,t){const r=this.Po(e);return rm.qs(r,t)}Eo(e,t){const r=this.Zs.exec(e),a=Number(r[1]),o=r[2]!==void 0?r[2]:null;return nm.qs(new cn(o),a,t)}Ro(e,t){const r=this.Xs.exec(e),a=Number(r[1]);return Rh.qs(a,t)}io(e){return $E.qs(e)}fo(e){return JSON.parse(e)}async Ao(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.yo(e.batchId,e.state,e.error);re(Zr,`Ignoring mutation for non-active user ${e.user.uid}`)}Vo(e){return this.syncEngine.wo(e.targetId,e.state,e.error)}To(e,t){const r=t?this.zs.insert(e,t):this.zs.remove(e),a=this.oo(this.zs),o=this.oo(r),u=[],d=[];return o.forEach(p=>{a.has(p)||u.push(p)}),a.forEach(p=>{o.has(p)||d.push(p)}),this.syncEngine.bo(u,d).then(()=>{this.zs=r})}so(e){this.zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}oo(e){let t=CE();return e.forEach((r,a)=>{t=t.unionWith(a.activeTargetIds)}),t}}class px{constructor(){this.So=new yv,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,t,r){this.Do[e]=t}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new yv,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M9{vo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="ConnectivityMonitor";class jA{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){re(FA,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){re(FA,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sp=null;function _v(){return sp===null?sp=function(){return 268435456+Math.round(2147483648*Math.random())}():sp++,"0x"+sp.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="RestConnection",L9={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class U9{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Lo=t+"://"+e.host,this.ko=`projects/${r}/databases/${a}`,this.qo=this.databaseId.database===rv?`project_id=${r}`:`project_id=${r}&database_id=${a}`}Qo(e,t,r,a,o){const u=_v(),d=this.$o(e,t.toUriEncodedString());re(C_,`Sending RPC '${e}' ${u}:`,d,r);const p={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(p,a,o),this.Ko(e,d,p,r).then(m=>(re(C_,`Received RPC '${e}' ${u}: `,m),m),m=>{throw di(C_,`RPC '${e}' ${u} failed with error: `,m,"url: ",d,"request:",r),m})}Wo(e,t,r,a,o,u){return this.Qo(e,t,r,a,o)}Uo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mu}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,o)=>e[o]=a),r&&r.headers.forEach((a,o)=>e[o]=a)}$o(e,t){const r=L9[e];return`${this.Lo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z9{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="WebChannelConnection";class B9 extends U9{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,t,r,a){const o=_v();return new Promise((u,d)=>{const p=new A1;p.setWithCredentials(!0),p.listenOnce(S1.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case _p.NO_ERROR:const _=p.getResponseJson();re(bn,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(_)),u(_);break;case _p.TIMEOUT:re(bn,`RPC '${e}' ${o} timed out`),d(new te(Q.DEADLINE_EXCEEDED,"Request time out"));break;case _p.HTTP_ERROR:const v=p.getStatus();if(re(bn,`RPC '${e}' ${o} failed with status:`,v,"response text:",p.getResponseText()),v>0){let w=p.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const D=function(L){const H=L.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(H)>=0?H:Q.UNKNOWN}(S.status);d(new te(D,S.message))}else d(new te(Q.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new te(Q.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{s_:e,streamId:o,o_:p.getLastErrorCode(),__:p.getLastError()})}}finally{re(bn,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(a);re(bn,`RPC '${e}' ${o} sending request:`,a),p.send(t,"POST",m,r,15)})}a_(e,t,r){const a=_v(),o=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=x1(),d=C1(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Uo(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const _=o.join("");re(bn,`Creating RPC '${e}' stream ${a}: ${_}`,p);const v=u.createWebChannel(_,p);let w=!1,S=!1;const D=new z9({Go:L=>{S?re(bn,`Not sending because RPC '${e}' stream ${a} is closed:`,L):(w||(re(bn,`Opening RPC '${e}' stream ${a} transport.`),v.open(),w=!0),re(bn,`RPC '${e}' stream ${a} sending:`,L),v.send(L))},zo:()=>v.close()}),U=(L,H,X)=>{L.listen(H,K=>{try{X(K)}catch(oe){setTimeout(()=>{throw oe},0)}})};return U(v,dh.EventType.OPEN,()=>{S||(re(bn,`RPC '${e}' stream ${a} transport opened.`),D.t_())}),U(v,dh.EventType.CLOSE,()=>{S||(S=!0,re(bn,`RPC '${e}' stream ${a} transport closed`),D.r_())}),U(v,dh.EventType.ERROR,L=>{S||(S=!0,di(bn,`RPC '${e}' stream ${a} transport errored. Name:`,L.name,"Message:",L.message),D.r_(new te(Q.UNAVAILABLE,"The operation could not be completed")))}),U(v,dh.EventType.MESSAGE,L=>{var H;if(!S){const X=L.data[0];ve(!!X,16349);const K=X,oe=(K==null?void 0:K.error)||((H=K[0])===null||H===void 0?void 0:H.error);if(oe){re(bn,`RPC '${e}' stream ${a} received error:`,oe);const ae=oe.status;let le=function(A){const P=jt[A];if(P!==void 0)return CC(P)}(ae),x=oe.message;le===void 0&&(le=Q.INTERNAL,x="Unknown error status: "+ae+" with message "+oe.message),S=!0,D.r_(new te(le,x)),v.close()}else re(bn,`RPC '${e}' stream ${a} received:`,X),D.i_(X)}}),U(d,R1.STAT_EVENT,L=>{L.stat===W_.PROXY?re(bn,`RPC '${e}' stream ${a} detected buffering proxy`):L.stat===W_.NOPROXY&&re(bn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{D.n_()},0),D}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(){return typeof window<"u"?window:null}function Rp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(n){return new $6(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,t,r=1e3,a=1.5,o=6e4){this.bi=e,this.timerId=t,this.u_=r,this.c_=a,this.l_=o,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const t=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),a=Math.max(0,t-r);a>0&&re("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.h_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,a,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA="PersistentStream";class gx{constructor(e,t,r,a,o,u,d,p){this.bi=e,this.R_=r,this.V_=a,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new GE(e,t)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,t){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(t)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),t=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.m_===t&&this.B_(r,a)},r=>{e(()=>{const a=new te(Q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(a)})})}B_(e,t){const r=this.N_(this.m_);this.stream=this.k_(e,t),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(a=>{r(()=>this.L_(a))}),this.stream.onMessage(a=>{r(()=>++this.p_==1?this.q_(a):this.onNext(a))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return re(qA,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return t=>{this.bi.enqueueAndForget(()=>this.m_===e?t():(re(qA,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class F9 extends gx{constructor(e,t,r,a,o,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}k_(e,t){return this.connection.a_("Listen",e,t)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const t=Q6(this.serializer,e),r=function(o){if(!("targetChange"in o))return Te.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?Te.min():u.readTime?Mt(u.readTime):Te.min()}(e);return this.listener.Q_(t,r)}U_(e){const t={};t.database=dv(this.serializer),t.addTarget=function(o,u){let d;const p=u.target;if(d=Qp(p)?{documents:LC(o,p)}:{query:UC(o,p).gt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=PC(o,u.resumeToken);const m=cv(o,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Te.min())>0){d.readTime=vu(o,u.snapshotVersion.toTimestamp());const m=cv(o,u.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const r=W6(this.serializer,e);r&&(t.labels=r),this.F_(t)}K_(e){const t={};t.database=dv(this.serializer),t.removeTarget=e,this.F_(t)}}class j9 extends gx{constructor(e,t,r,a,o,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,t){return this.connection.a_("Write",e,t)}q_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const t=Y6(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.j_(r,t)}H_(){const e={};e.database=dv(this.serializer),this.F_(e)}G_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Yh(this.serializer,r))};this.F_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q9{}class H9 extends q9{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.J_=!1}Y_(){if(this.J_)throw new te(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,t,r,a){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Qo(e,hv(t,r),a,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(Q.UNKNOWN,o.toString())})}Wo(e,t,r,a,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Wo(e,hv(t,r),a,u,d,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(Q.UNKNOWN,u.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class $9{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Vt(t),this.ea=!1):re("OnlineStateTracker",t)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="RemoteStore";class G9{constructor(e,t,r,a,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=o,this.ca.vo(u=>{r.enqueueAndForget(async()=>{ba(this)&&(re(Oo,"Restarting streams for network reachability change."),await async function(p){const m=fe(p);m.aa.add(4),await Bu(m),m.la.set("Unknown"),m.aa.delete(4),await wd(m)}(this))})}),this.la=new $9(r,a)}}async function wd(n){if(ba(n))for(const e of n.ua)await e(!0)}async function Bu(n){for(const e of n.ua)await e(!1)}function zm(n,e){const t=fe(n);t._a.has(e.targetId)||(t._a.set(e.targetId,e),YE(t)?QE(t):ju(t).b_()&&KE(t,e))}function wu(n,e){const t=fe(n),r=ju(t);t._a.delete(e),r.b_()&&yx(t,e),t._a.size===0&&(r.b_()?r.v_():ba(t)&&t.la.set("Unknown"))}function KE(n,e){if(n.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ju(n).U_(e)}function yx(n,e){n.ha.Ke(e),ju(n).K_(e)}function QE(n){n.ha=new F6({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n._a.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),ju(n).start(),n.la.ta()}function YE(n){return ba(n)&&!ju(n).w_()&&n._a.size>0}function ba(n){return fe(n).aa.size===0}function _x(n){n.ha=void 0}async function K9(n){n.la.set("Online")}async function Q9(n){n._a.forEach((e,t)=>{KE(n,e)})}async function Y9(n,e){_x(n),YE(n)?(n.la.ia(e),QE(n)):n.la.set("Unknown")}async function W9(n,e,t){if(n.la.set("Online"),e instanceof DC&&e.state===2&&e.cause)try{await async function(a,o){const u=o.cause;for(const d of o.targetIds)a._a.has(d)&&(await a.remoteSyncer.rejectListen(d,u),a._a.delete(d),a.ha.removeTarget(d))}(n,e)}catch(r){re(Oo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await im(n,r)}else if(e instanceof Sp?n.ha.Xe(e):e instanceof xC?n.ha.ot(e):n.ha.nt(e),!t.isEqual(Te.min()))try{const r=await ax(n.localStore);t.compareTo(r)>=0&&await function(o,u){const d=o.ha.It(u);return d.targetChanges.forEach((p,m)=>{if(p.resumeToken.approximateByteSize()>0){const _=o._a.get(m);_&&o._a.set(m,_.withResumeToken(p.resumeToken,u))}}),d.targetMismatches.forEach((p,m)=>{const _=o._a.get(p);if(!_)return;o._a.set(p,_.withResumeToken(xt.EMPTY_BYTE_STRING,_.snapshotVersion)),yx(o,p);const v=new $i(_.target,p,m,_.sequenceNumber);KE(o,v)}),o.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(r){re(Oo,"Failed to raise snapshot:",r),await im(n,r)}}async function im(n,e,t){if(!Ta(e))throw e;n.aa.add(1),await Bu(n),n.la.set("Offline"),t||(t=()=>ax(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{re(Oo,"Retrying IndexedDB access"),await t(),n.aa.delete(1),await wd(n)})}function vx(n,e){return e().catch(t=>im(n,t,e))}async function Fu(n){const e=fe(n),t=fa(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:na;for(;X9(e);)try{const a=await O9(e.localStore,r);if(a===null){e.oa.length===0&&t.v_();break}r=a.batchId,J9(e,a)}catch(a){await im(e,a)}Ex(e)&&Tx(e)}function X9(n){return ba(n)&&n.oa.length<10}function J9(n,e){n.oa.push(e);const t=fa(n);t.b_()&&t.W_&&t.G_(e.mutations)}function Ex(n){return ba(n)&&!fa(n).w_()&&n.oa.length>0}function Tx(n){fa(n).start()}async function Z9(n){fa(n).H_()}async function ez(n){const e=fa(n);for(const t of n.oa)e.G_(t.mutations)}async function tz(n,e,t){const r=n.oa.shift(),a=NE.from(r,e,t);await vx(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Fu(n)}async function nz(n,e){e&&fa(n).W_&&await async function(r,a){if(function(u){return RC(u)&&u!==Q.ABORTED}(a.code)){const o=r.oa.shift();fa(r).D_(),await vx(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,a)),await Fu(r)}}(n,e),Ex(n)&&Tx(n)}async function HA(n,e){const t=fe(n);t.asyncQueue.verifyOperationInProgress(),re(Oo,"RemoteStore received new credentials");const r=ba(t);t.aa.add(3),await Bu(t),r&&t.la.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.aa.delete(3),await wd(t)}async function vv(n,e){const t=fe(n);e?(t.aa.delete(2),await wd(t)):e||(t.aa.add(2),await Bu(t),t.la.set("Unknown"))}function ju(n){return n.Pa||(n.Pa=function(t,r,a){const o=fe(t);return o.Y_(),new F9(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{jo:K9.bind(null,n),Jo:Q9.bind(null,n),Zo:Y9.bind(null,n),Q_:W9.bind(null,n)}),n.ua.push(async e=>{e?(n.Pa.D_(),YE(n)?QE(n):n.la.set("Unknown")):(await n.Pa.stop(),_x(n))})),n.Pa}function fa(n){return n.Ta||(n.Ta=function(t,r,a){const o=fe(t);return o.Y_(),new j9(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{jo:()=>Promise.resolve(),Jo:Z9.bind(null,n),Zo:nz.bind(null,n),z_:ez.bind(null,n),j_:tz.bind(null,n)}),n.ua.push(async e=>{e?(n.Ta.D_(),await Fu(n)):(await n.Ta.stop(),n.oa.length>0&&(re(Oo,`Stopping write stream with ${n.oa.length} pending writes`),n.oa=[]))})),n.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,t,r,a,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=o,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,o){const u=Date.now()+r,d=new WE(e,t,u,a,o);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qu(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),Ta(n))return new te(Q.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{static emptySet(e){return new Jl(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||he.comparator(t.key,r.key):(t,r)=>he.comparator(t.key,r.key),this.keyedMap=fh(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(!a.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Jl;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(){this.Ia=new lt(he.comparator)}track(e){const t=e.doc.key,r=this.Ia.get(t);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(t,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(t):e.type===1&&r.type===2?this.Ia=this.Ia.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(t,{type:2,doc:e.doc}):ge(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(t,e)}da(){const e=[];return this.Ia.inorderTraversal((t,r)=>{e.push(r)}),e}}class bu{constructor(e,t,r,a,o,u,d,p,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,a,o){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new bu(e,t,Jl.emptySet(t),u,r,a,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rz{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class iz{constructor(){this.queries=GA(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(t,r){const a=fe(t),o=a.queries;a.queries=GA(),o.forEach((u,d)=>{for(const p of d.Ra)p.onError(r)})})(this,new te(Q.ABORTED,"Firestore shutting down"))}}function GA(){return new rs(n=>fC(n),gd)}async function XE(n,e){const t=fe(n);let r=3;const a=e.query;let o=t.queries.get(a);o?!o.Va()&&e.ma()&&(r=2):(o=new rz,r=e.ma()?0:1);try{switch(r){case 0:o.Aa=await t.onListen(a,!0);break;case 1:o.Aa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const d=qu(u,`Initialization of query '${Bl(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,o),o.Ra.push(e),e.ga(t.onlineState),o.Aa&&e.pa(o.Aa)&&ZE(t)}async function JE(n,e){const t=fe(n),r=e.query;let a=3;const o=t.queries.get(r);if(o){const u=o.Ra.indexOf(e);u>=0&&(o.Ra.splice(u,1),o.Ra.length===0?a=e.ma()?0:1:!o.Va()&&e.ma()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function sz(n,e){const t=fe(n);let r=!1;for(const a of e){const o=a.query,u=t.queries.get(o);if(u){for(const d of u.Ra)d.pa(a)&&(r=!0);u.Aa=a}}r&&ZE(t)}function az(n,e,t){const r=fe(n),a=r.queries.get(e);if(a)for(const o of a.Ra)o.onError(t);r.queries.delete(e)}function ZE(n){n.fa.forEach(e=>{e.next()})}var Ev,KA;(KA=Ev||(Ev={})).ya="default",KA.Cache="cache";class eT{constructor(e,t,r){this.query=e,this.wa=t,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new bu(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ba?this.Da(e)&&(this.wa.next(e),t=!0):this.va(e,this.onlineState)&&(this.Ca(e),t=!0),this.Sa=e,t}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let t=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),t=!0),t}va(e,t){if(!e.fromCache||!this.ma())return!0;const r=t!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const t=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ca(e){e=bu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==Ev.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oz{constructor(e,t){this.Ma=e,this.byteLength=t}xa(){return"metadata"in this.Ma}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.serializer=e}Bs(e){return li(this.serializer,e)}Ls(e){return e.metadata.exists?MC(this.serializer,e.document,!1):ht.newNoDocument(this.Bs(e.metadata.name),this.ks(e.metadata.readTime))}ks(e){return Mt(e)}}class lz{constructor(e,t,r){this.Oa=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=wx(e)}Na(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ma.namedQuery)this.queries.push(e.Ma.namedQuery);else if(e.Ma.documentMetadata){this.documents.push({metadata:e.Ma.documentMetadata}),e.Ma.documentMetadata.exists||++t;const r=Be.fromString(e.Ma.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ma.document&&(this.documents[this.documents.length-1].document=e.Ma.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ba(e){const t=new Map,r=new QA(this.serializer);for(const a of e)if(a.metadata.queries){const o=r.Bs(a.metadata.name);for(const u of a.metadata.queries){const d=(t.get(u)||Pe()).add(o);t.set(u,d)}}return t}async complete(){const e=await k9(this.localStore,new QA(this.serializer),this.documents,this.Oa.id),t=this.Ba(this.documents);for(const r of this.queries)await V9(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,La:this.collectionGroups,ka:e}}}function wx(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.key=e}}class Ix{constructor(e){this.key=e}}class Ax{constructor(e,t){this.query=e,this.qa=t,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=Pe(),this.mutatedKeys=Pe(),this.Ua=mC(e),this.Ka=new Jl(this.Ua)}get Wa(){return this.qa}Ga(e,t){const r=t?t.za:new $A,a=t?t.Ka:this.Ka;let o=t?t.mutatedKeys:this.mutatedKeys,u=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((_,v)=>{const w=a.get(_),S=yd(this.query,v)?v:null,D=!!w&&this.mutatedKeys.has(w.key),U=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let L=!1;w&&S?w.data.isEqual(S.data)?D!==U&&(r.track({type:3,doc:S}),L=!0):this.ja(w,S)||(r.track({type:2,doc:S}),L=!0,(p&&this.Ua(S,p)>0||m&&this.Ua(S,m)<0)&&(d=!0)):!w&&S?(r.track({type:0,doc:S}),L=!0):w&&!S&&(r.track({type:1,doc:w}),L=!0,(p||m)&&(d=!0)),L&&(S?(u=u.add(S),o=U?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{Ka:u,za:r,ys:d,mutatedKeys:o}}ja(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const o=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const u=e.za.da();u.sort((_,v)=>function(S,D){const U=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Vt:L})}};return U(S)-U(D)}(_.type,v.type)||this.Ua(_.doc,v.doc)),this.Ha(r),a=a!=null&&a;const d=t&&!a?this.Ja():[],p=this.$a.size===0&&this.current&&!a?1:0,m=p!==this.Qa;return this.Qa=p,u.length!==0||m?{snapshot:new bu(this.query,e.Ka,o,u,e.mutatedKeys,p===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:d}:{Ya:d}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new $A,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(t=>this.qa=this.qa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.qa=this.qa.delete(t)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=Pe(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const t=[];return e.forEach(r=>{this.$a.has(r)||t.push(new Ix(r))}),this.$a.forEach(r=>{e.has(r)||t.push(new bx(r))}),t}Xa(e){this.qa=e.Ns,this.$a=Pe();const t=this.Ga(e.documents);return this.applyChanges(t,!0)}eu(){return bu.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Ia="SyncEngine";class uz{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class cz{constructor(e){this.key=e,this.tu=!1}}class hz{constructor(e,t,r,a,o,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.nu={},this.ru=new rs(d=>fC(d),gd),this.iu=new Map,this.su=new Set,this.ou=new lt(he.comparator),this._u=new Map,this.au=new zE,this.uu={},this.cu=new Map,this.lu=No.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function dz(n,e,t=!0){const r=Bm(n);let a;const o=r.ru.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),a=o.view.eu()):a=await Sx(r,e,t,!0),a}async function fz(n,e){const t=Bm(n);await Sx(t,e,!0,!1)}async function Sx(n,e,t,r){const a=await Eu(n.localStore,Vn(e)),o=a.targetId,u=n.sharedClientState.addLocalQueryTarget(o,t);let d;return r&&(d=await tT(n,e,o,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&zm(n.remoteStore,a),d}async function tT(n,e,t,r,a){n.Pu=(v,w,S)=>async function(U,L,H,X){let K=L.view.Ga(H);K.ys&&(K=await tm(U.localStore,L.query,!1).then(({documents:x})=>L.view.Ga(x,K)));const oe=X&&X.targetChanges.get(L.targetId),ae=X&&X.targetMismatches.get(L.targetId)!=null,le=L.view.applyChanges(K,U.isPrimaryClient,oe,ae);return Tv(U,L.targetId,le.Ya),le.snapshot}(n,v,w,S);const o=await tm(n.localStore,e,!0),u=new Ax(e,o.Ns),d=u.Ga(o.documents),p=Ed.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",a),m=u.applyChanges(d,n.isPrimaryClient,p);Tv(n,t,m.Ya);const _=new uz(e,t,u);return n.ru.set(e,_),n.iu.has(t)?n.iu.get(t).push(e):n.iu.set(t,[e]),m.snapshot}async function pz(n,e,t){const r=fe(n),a=r.ru.get(e),o=r.iu.get(a.targetId);if(o.length>1)return r.iu.set(a.targetId,o.filter(u=>!gd(u,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await Tu(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&wu(r.remoteStore,a.targetId),Iu(r,a.targetId)}).catch(Ea)):(Iu(r,a.targetId),await Tu(r.localStore,a.targetId,!0))}async function mz(n,e){const t=fe(n),r=t.ru.get(e),a=t.iu.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),wu(t.remoteStore,r.targetId))}async function gz(n,e,t){const r=sT(n);try{const a=await function(u,d){const p=fe(u),m=gt.now(),_=d.reduce((S,D)=>S.add(D.key),Pe());let v,w;return p.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=Hn(),U=Pe();return p.Cs.getEntries(S,_).next(L=>{D=L,D.forEach((H,X)=>{X.isValidDocument()||(U=U.add(H))})}).next(()=>p.localDocuments.getOverlayedDocuments(S,D)).next(L=>{v=L;const H=[];for(const X of d){const K=U6(X,v.get(X.key).overlayedDocument);K!=null&&H.push(new is(X.key,K,iC(K.value.mapValue),mt.exists(!0)))}return p.mutationQueue.addMutationBatch(S,m,H,d)}).next(L=>{w=L;const H=L.applyToLocalDocumentSet(v,U);return p.documentOverlayCache.saveOverlays(S,L.batchId,H)})}).then(()=>({batchId:w.batchId,changes:yC(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(u,d,p){let m=u.uu[u.currentUser.toKey()];m||(m=new lt(Re)),m=m.insert(d,p),u.uu[u.currentUser.toKey()]=m}(r,a.batchId,t),await ss(r,a.changes),await Fu(r.remoteStore)}catch(a){const o=qu(a,"Failed to persist write");t.reject(o)}}async function Rx(n,e){const t=fe(n);try{const r=await N9(t.localStore,e);e.targetChanges.forEach((a,o)=>{const u=t._u.get(o);u&&(ve(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?u.tu=!0:a.modifiedDocuments.size>0?ve(u.tu,14607):a.removedDocuments.size>0&&(ve(u.tu,42227),u.tu=!1))}),await ss(t,r,e)}catch(r){await Ea(r)}}function YA(n,e,t){const r=fe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.ru.forEach((o,u)=>{const d=u.view.ga(e);d.snapshot&&a.push(d.snapshot)}),function(u,d){const p=fe(u);p.onlineState=d;let m=!1;p.queries.forEach((_,v)=>{for(const w of v.Ra)w.ga(d)&&(m=!0)}),m&&ZE(p)}(r.eventManager,e),a.length&&r.nu.Q_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yz(n,e,t){const r=fe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r._u.get(e),o=a&&a.key;if(o){let u=new lt(he.comparator);u=u.insert(o,ht.newNoDocument(o,Te.min()));const d=Pe().add(o),p=new vd(Te.min(),new Map,new lt(Re),u,d);await Rx(r,p),r.ou=r.ou.remove(o),r._u.delete(e),iT(r)}else await Tu(r.localStore,e,!1).then(()=>Iu(r,e,t)).catch(Ea)}async function _z(n,e){const t=fe(n),r=e.batch.batchId;try{const a=await P9(t.localStore,e);rT(t,r,null),nT(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ss(t,a)}catch(a){await Ea(a)}}async function vz(n,e,t){const r=fe(n);try{const a=await function(u,d){const p=fe(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let _;return p.mutationQueue.lookupMutationBatch(m,d).next(v=>(ve(v!==null,37113),_=v.keys(),p.mutationQueue.removeMutationBatch(m,v))).next(()=>p.mutationQueue.performConsistencyCheck(m)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(m,_,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,_)).next(()=>p.localDocuments.getDocuments(m,_))})}(r.localStore,e);rT(r,e,t),nT(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ss(r,a)}catch(a){await Ea(a)}}async function Ez(n,e){const t=fe(n);ba(t.remoteStore)||re(Ia,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(u){const d=fe(u);return d.persistence.runTransaction("Get highest unacknowledged batch id","readonly",p=>d.mutationQueue.getHighestUnacknowledgedBatchId(p))}(t.localStore);if(r===na)return void e.resolve();const a=t.cu.get(r)||[];a.push(e),t.cu.set(r,a)}catch(r){const a=qu(r,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function nT(n,e){(n.cu.get(e)||[]).forEach(t=>{t.resolve()}),n.cu.delete(e)}function rT(n,e,t){const r=fe(n);let a=r.uu[r.currentUser.toKey()];if(a){const o=a.get(e);o&&(t?o.reject(t):o.resolve(),a=a.remove(e)),r.uu[r.currentUser.toKey()]=a}}function Iu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.iu.get(e))n.ru.delete(r),t&&n.nu.Tu(r,t);n.iu.delete(e),n.isPrimaryClient&&n.au.Ur(e).forEach(r=>{n.au.containsKey(r)||Cx(n,r)})}function Cx(n,e){n.su.delete(e.path.canonicalString());const t=n.ou.get(e);t!==null&&(wu(n.remoteStore,t),n.ou=n.ou.remove(e),n._u.delete(t),iT(n))}function Tv(n,e,t){for(const r of t)r instanceof bx?(n.au.addReference(r.key,e),Tz(n,r)):r instanceof Ix?(re(Ia,"Document no longer in limbo: "+r.key),n.au.removeReference(r.key,e),n.au.containsKey(r.key)||Cx(n,r.key)):ge(19791,{Iu:r})}function Tz(n,e){const t=e.key,r=t.path.canonicalString();n.ou.get(t)||n.su.has(r)||(re(Ia,"New document in limbo: "+t),n.su.add(r),iT(n))}function iT(n){for(;n.su.size>0&&n.ou.size<n.maxConcurrentLimboResolutions;){const e=n.su.values().next().value;n.su.delete(e);const t=new he(Be.fromString(e)),r=n.lu.next();n._u.set(r,new cz(t)),n.ou=n.ou.insert(t,r),zm(n.remoteStore,new $i(Vn(Lu(t.path)),r,"TargetPurposeLimboResolution",jn.le))}}async function ss(n,e,t){const r=fe(n),a=[],o=[],u=[];r.ru.isEmpty()||(r.ru.forEach((d,p)=>{u.push(r.Pu(p,e,t).then(m=>{var _;if((m||t)&&r.isPrimaryClient){const v=m?!m.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(m){a.push(m);const v=qE.Ps(p.targetId,m);o.push(v)}}))}),await Promise.all(u),r.nu.Q_(a),await async function(p,m){const _=fe(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>j.forEach(m,w=>j.forEach(w.ls,S=>_.persistence.referenceDelegate.addReference(v,w.targetId,S)).next(()=>j.forEach(w.hs,S=>_.persistence.referenceDelegate.removeReference(v,w.targetId,S)))))}catch(v){if(!Ta(v))throw v;re(HE,"Failed to update sequence numbers: "+v)}for(const v of m){const w=v.targetId;if(!v.fromCache){const S=_.Ss.get(w),D=S.snapshotVersion,U=S.withLastLimboFreeSnapshotVersion(D);_.Ss=_.Ss.insert(w,U)}}}(r.localStore,o))}async function wz(n,e){const t=fe(n);if(!t.currentUser.isEqual(e)){re(Ia,"User change. New user:",e.toKey());const r=await sx(t.localStore,e);t.currentUser=e,function(o,u){o.cu.forEach(d=>{d.forEach(p=>{p.reject(new te(Q.CANCELLED,u))})}),o.cu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ss(t,r.Ms)}}function bz(n,e){const t=fe(n),r=t._u.get(e);if(r&&r.tu)return Pe().add(r.key);{let a=Pe();const o=t.iu.get(e);if(!o)return a;for(const u of o){const d=t.ru.get(u);a=a.unionWith(d.view.Wa)}return a}}async function Iz(n,e){const t=fe(n),r=await tm(t.localStore,e.query,!0),a=e.view.Xa(r);return t.isPrimaryClient&&Tv(t,e.targetId,a.Ya),a}async function Az(n,e){const t=fe(n);return ux(t.localStore,e).then(r=>ss(t,r))}async function Sz(n,e,t,r){const a=fe(n),o=await function(d,p){const m=fe(d),_=fe(m.mutationQueue);return m.persistence.runTransaction("Lookup mutation documents","readonly",v=>_.Hn(v,p).next(w=>w?m.localDocuments.getDocuments(v,w):j.resolve(null)))}(a.localStore,e);o!==null?(t==="pending"?await Fu(a.remoteStore):t==="acknowledged"||t==="rejected"?(rT(a,e,r||null),nT(a,e),function(d,p){fe(fe(d).mutationQueue).Xn(p)}(a.localStore,e)):ge(6720,"Unknown batchState",{Eu:t}),await ss(a,o)):re(Ia,"Cannot apply mutation batch with id: "+e)}async function Rz(n,e){const t=fe(n);if(Bm(t),sT(t),e===!0&&t.hu!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),a=await WA(t,r.toArray());t.hu=!0,await vv(t.remoteStore,!0);for(const o of a)zm(t.remoteStore,o)}else if(e===!1&&t.hu!==!1){const r=[];let a=Promise.resolve();t.iu.forEach((o,u)=>{t.sharedClientState.isLocalQueryTarget(u)?r.push(u):a=a.then(()=>(Iu(t,u),Tu(t.localStore,u,!0))),wu(t.remoteStore,u)}),await a,await WA(t,r),function(u){const d=fe(u);d._u.forEach((p,m)=>{wu(d.remoteStore,m)}),d.au.Kr(),d._u=new Map,d.ou=new lt(he.comparator)}(t),t.hu=!1,await vv(t.remoteStore,!1)}}async function WA(n,e,t){const r=fe(n),a=[],o=[];for(const u of e){let d;const p=r.iu.get(u);if(p&&p.length!==0){d=await Eu(r.localStore,Vn(p[0]));for(const m of p){const _=r.ru.get(m),v=await Iz(r,_);v.snapshot&&o.push(v.snapshot)}}else{const m=await lx(r.localStore,u);d=await Eu(r.localStore,m),await tT(r,xx(m),u,!1,d.resumeToken)}a.push(d)}return r.nu.Q_(o),a}function xx(n){return dC(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Cz(n){return function(t){return fe(fe(t).persistence).us()}(fe(n).localStore)}async function xz(n,e,t,r){const a=fe(n);if(a.hu)return void re(Ia,"Ignoring unexpected query state notification.");const o=a.iu.get(e);if(o&&o.length>0)switch(t){case"current":case"not-current":{const u=await ux(a.localStore,pC(o[0])),d=vd.createSynthesizedRemoteEventForCurrentChange(e,t==="current",xt.EMPTY_BYTE_STRING);await ss(a,u,d);break}case"rejected":await Tu(a.localStore,e,!0),Iu(a,e,r);break;default:ge(64155,t)}}async function Dz(n,e,t){const r=Bm(n);if(r.hu){for(const a of e){if(r.iu.has(a)&&r.sharedClientState.isActiveQueryTarget(a)){re(Ia,"Adding an already active target "+a);continue}const o=await lx(r.localStore,a),u=await Eu(r.localStore,o);await tT(r,xx(o),u.targetId,!1,u.resumeToken),zm(r.remoteStore,u)}for(const a of t)r.iu.has(a)&&await Tu(r.localStore,a,!1).then(()=>{wu(r.remoteStore,a),Iu(r,a)}).catch(Ea)}}function Bm(n){const e=fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bz.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yz.bind(null,e),e.nu.Q_=sz.bind(null,e.eventManager),e.nu.Tu=az.bind(null,e.eventManager),e}function sT(n){const e=fe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_z.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vz.bind(null,e),e}function Pz(n,e,t){const r=fe(n);(async function(o,u,d){try{const p=await u.getMetadata();if(await function(S,D){const U=fe(S),L=Mt(D.createTime);return U.persistence.runTransaction("hasNewerBundle","readonly",H=>U.ci.getBundleMetadata(H,D.id)).then(H=>!!H&&H.createTime.compareTo(L)>=0)}(o.localStore,p))return await u.close(),d._completeWith(function(S){return{taskState:"Success",documentsLoaded:S.totalDocuments,bytesLoaded:S.totalBytes,totalDocuments:S.totalDocuments,totalBytes:S.totalBytes}}(p)),Promise.resolve(new Set);d._updateProgress(wx(p));const m=new lz(p,o.localStore,u.serializer);let _=await u.du();for(;_;){const w=await m.Na(_);w&&d._updateProgress(w),_=await u.du()}const v=await m.complete();return await ss(o,v.ka,void 0),await function(S,D){const U=fe(S);return U.persistence.runTransaction("Save bundle","readwrite",L=>U.ci.saveBundleMetadata(L,D))}(o.localStore,p),d._completeWith(v.progress),Promise.resolve(v.La)}catch(p){return di(Ia,`Loading bundle failed with ${p}`),d._failWith(p),Promise.resolve(new Set)}})(r,e,t).then(a=>{r.sharedClientState.notifyBundleLoaded(a)})}class Wh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Td(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,t){return null}fu(e,t){return null}Vu(e){return ix(this.persistence,new rx,e.initialUser,this.serializer)}Ru(e){return new BE(Um.Ei,this.serializer)}Au(e){return new px}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wh.provider={build:()=>new Wh};class Nz extends Wh{constructor(e){super(),this.cacheSizeBytes=e}mu(e,t){ve(this.persistence.referenceDelegate instanceof em,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new XC(r,e.asyncQueue,t)}Ru(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new BE(r=>em.Ei(r,t),this.serializer)}}class Dx extends Wh{constructor(e,t,r){super(),this.gu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.gu.initialize(this,e),await sT(this.gu.syncEngine),await Fu(this.gu.remoteStore),await this.persistence.Ki(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Vu(e){return ix(this.persistence,new rx,e.initialUser,this.serializer)}mu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new XC(r,e.asyncQueue,t)}fu(e,t){const r=new FU(t,this.persistence);return new BU(e.asyncQueue,r)}Ru(e){const t=jE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new FE(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,mx(),Rp(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Au(e){return new px}}class Oz extends Dx{constructor(e,t){super(e,t,!1),this.gu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.gu.syncEngine;this.sharedClientState instanceof R_&&(this.sharedClientState.syncEngine={yo:Sz.bind(null,t),wo:xz.bind(null,t),bo:Dz.bind(null,t),us:Cz.bind(null,t),po:Az.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ki(async r=>{await Rz(this.gu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Au(e){const t=mx();if(!R_.C(t))throw new te(Q.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=jE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new R_(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Xh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>YA(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wz.bind(null,this.syncEngine),await vv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iz}()}createDatastore(e){const t=Td(e.databaseInfo.databaseId),r=function(o){return new B9(o)}(e.databaseInfo);return function(o,u,d,p){return new H9(o,u,d,p)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,o,u,d){return new G9(r,a,o,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>YA(this.syncEngine,t,0),function(){return jA.C()?new jA:new M9}())}createSyncEngine(e,t){return function(a,o,u,d,p,m,_){const v=new hz(a,o,u,d,p,m);return _&&(v.hu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const o=fe(a);re(Oo,"RemoteStore shutting down."),o.aa.add(5),await Bu(o),o.ca.shutdown(),o.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Xh.provider={build:()=>new Xh};function XA(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kz{constructor(e,t){this.wu=e,this.serializer=t,this.metadata=new _n,this.buffer=new Uint8Array,this.bu=function(){return new TextDecoder("utf-8")}(),this.Su().then(r=>{r&&r.xa()?this.metadata.resolve(r.Ma.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ma)}`))},r=>this.metadata.reject(r))}close(){return this.wu.cancel()}async getMetadata(){return this.metadata.promise}async du(){return await this.getMetadata(),this.Su()}async Su(){const e=await this.Du();if(e===null)return null;const t=this.bu.decode(e),r=Number(t);isNaN(r)&&this.vu(`length string (${t}) is not valid number`);const a=await this.Cu(r);return new oz(JSON.parse(a),e.length+r)}Fu(){return this.buffer.findIndex(e=>e===123)}async Du(){for(;this.Fu()<0&&!await this.Mu(););if(this.buffer.length===0)return null;const e=this.Fu();e<0&&this.vu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cu(e){for(;this.buffer.length<e;)await this.Mu()&&this.vu("Reached the end of bundle when more is expected.");const t=this.bu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}vu(e){throw this.wu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Mu(){const e=await this.wu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vz{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new te(Q.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(a,o){const u=fe(a),d={documents:o.map(v=>Qh(u.serializer,v))},p=await u.Wo("BatchGetDocuments",u.serializer.databaseId,Be.emptyPath(),d,o.length),m=new Map;p.forEach(v=>{const w=K6(u.serializer,v);m.set(w.key.toString(),w)});const _=[];return o.forEach(v=>{const w=m.get(v.toString());ve(!!w,55234,{key:v}),_.push(w)}),_}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new zu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const a=he.fromPath(r);this.mutations.push(new DE(a,this.precondition(a)))}),await async function(r,a){const o=fe(r),u={writes:a.map(d=>Yh(o.serializer,d))};await o.Qo("Commit",o.serializer.databaseId,Be.emptyPath(),u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ge(50498,{xu:e.constructor.name});t=Te.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new te(Q.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Te.min())?mt.exists(!1):mt.updateTime(t):mt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Te.min()))throw new te(Q.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return mt.updateTime(t)}return mt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mz{constructor(e,t,r,a,o){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=a,this.deferred=o,this.Ou=r.maxAttempts,this.y_=new GE(this.asyncQueue,"transaction_retry")}Nu(){this.Ou-=1,this.Bu()}Bu(){this.y_.E_(async()=>{const e=new Vz(this.datastore),t=this.Lu(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(a=>{this.ku(a)}))}).catch(r=>{this.ku(r)})})}Lu(e){try{const t=this.updateFunction(e);return!fd(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ku(e){this.Ou>0&&this.qu(e)?(this.Ou-=1,this.asyncQueue.enqueueAndForget(()=>(this.Bu(),Promise.resolve()))):this.deferred.reject(e)}qu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!RC(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="FirestoreClient";class Lz{constructor(e,t,r,a,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=cn.UNAUTHENTICATED,this.clientId=N1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{re(pa,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(re(pa,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=qu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function x_(n,e){n.asyncQueue.verifyOperationInProgress(),re(pa,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async a=>{r.isEqual(a)||(await sx(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function JA(n,e){n.asyncQueue.verifyOperationInProgress();const t=await aT(n);re(pa,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>HA(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,a)=>HA(e.remoteStore,a)),n._onlineComponents=e}async function aT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(pa,"Using user provided OfflineComponentProvider");try{await x_(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===Q.FAILED_PRECONDITION||a.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;di("Error using user provided cache. Falling back to memory cache: "+t),await x_(n,new Wh)}}else re(pa,"Using default OfflineComponentProvider"),await x_(n,new Nz(void 0));return n._offlineComponents}async function jm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(pa,"Using user provided OnlineComponentProvider"),await JA(n,n._uninitializedComponentsProvider._online)):(re(pa,"Using default OnlineComponentProvider"),await JA(n,new Xh))),n._onlineComponents}function Px(n){return aT(n).then(e=>e.persistence)}function oT(n){return aT(n).then(e=>e.localStore)}function Nx(n){return jm(n).then(e=>e.remoteStore)}function lT(n){return jm(n).then(e=>e.syncEngine)}function Uz(n){return jm(n).then(e=>e.datastore)}async function Au(n){const e=await jm(n),t=e.eventManager;return t.onListen=dz.bind(null,e.syncEngine),t.onUnlisten=pz.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=fz.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=mz.bind(null,e.syncEngine),t}function zz(n){return n.asyncQueue.enqueue(async()=>{const e=await Px(n),t=await Nx(n);return e.setNetworkEnabled(!0),function(a){const o=fe(a);return o.aa.delete(0),wd(o)}(t)})}function Bz(n){return n.asyncQueue.enqueue(async()=>{const e=await Px(n),t=await Nx(n);return e.setNetworkEnabled(!1),async function(a){const o=fe(a);o.aa.add(0),await Bu(o),o.la.set("Offline")}(t)})}function Fz(n,e){const t=new _n;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await function(m,_){const v=fe(m);return v.persistence.runTransaction("read document","readonly",w=>v.localDocuments.getDocument(w,_))}(a,o);d.isFoundDocument()?u.resolve(d):d.isNoDocument()?u.resolve(null):u.reject(new te(Q.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(d){const p=qu(d,`Failed to get document '${o} from cache`);u.reject(p)}}(await oT(n),e,t)),t.promise}function Ox(n,e,t={}){const r=new _n;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,p,m){const _=new Fm({next:w=>{_.yu(),u.enqueueAndForget(()=>JE(o,v));const S=w.docs.has(d);!S&&w.fromCache?m.reject(new te(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&p&&p.source==="server"?m.reject(new te(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(w)},error:w=>m.reject(w)}),v=new eT(Lu(d.path),_,{includeMetadataChanges:!0,Fa:!0});return XE(o,v)}(await Au(n),n.asyncQueue,e,t,r)),r.promise}function jz(n,e){const t=new _n;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const d=await tm(a,o,!0),p=new Ax(o,d.Ns),m=p.Ga(d.documents),_=p.applyChanges(m,!1);u.resolve(_.snapshot)}catch(d){const p=qu(d,`Failed to execute query '${o} against cache`);u.reject(p)}}(await oT(n),e,t)),t.promise}function kx(n,e,t={}){const r=new _n;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,d,p,m){const _=new Fm({next:w=>{_.yu(),u.enqueueAndForget(()=>JE(o,v)),w.fromCache&&p.source==="server"?m.reject(new te(Q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(w)},error:w=>m.reject(w)}),v=new eT(d,_,{includeMetadataChanges:!0,Fa:!0});return XE(o,v)}(await Au(n),n.asyncQueue,e,t,r)),r.promise}function qz(n,e){const t=new Fm(e);return n.asyncQueue.enqueueAndForget(async()=>function(a,o){fe(a).fa.add(o),o.next()}(await Au(n),t)),()=>{t.yu(),n.asyncQueue.enqueueAndForget(async()=>function(a,o){fe(a).fa.delete(o)}(await Au(n),t))}}function Hz(n,e,t,r){const a=function(u,d){let p;return p=typeof u=="string"?yE().encode(u):u,function(_,v){return new kz(_,v)}(function(_,v){if(_ instanceof Uint8Array)return XA(_,v);if(_ instanceof ArrayBuffer)return XA(new Uint8Array(_),v);if(_ instanceof ReadableStream)return _.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(p),d)}(t,Td(e));n.asyncQueue.enqueueAndForget(async()=>{Pz(await lT(n),a,r)})}function $z(n,e){return n.asyncQueue.enqueue(async()=>function(r,a){const o=fe(r);return o.persistence.runTransaction("Get named query","readonly",u=>o.ci.getNamedQuery(u,a))}(await oT(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(n,e,t){if(!t)throw new te(Q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Mx(n,e,t,r){if(e===!0&&r===!0)throw new te(Q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function eS(n){if(!he.isDocumentKey(n))throw new te(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function tS(n){if(he.isDocumentKey(n))throw new te(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qm(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ge(12329,{type:typeof n})}function Xe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new te(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qm(n);throw new te(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Lx(n,e){if(e<=0)throw new te(Q.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux="firestore.googleapis.com",nS=!0;class rS{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ux,this.ssl=nS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:nS;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=KC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<d9)throw new te(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Mx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new te(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new te(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new te(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bd{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xU;switch(r.type){case"firstParty":return new OU(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ZA.get(t);r&&(re("ComponentProvider","Removing Datastore"),ZA.delete(t),r.terminate())}(this),Promise.resolve()}}function Gz(n,e,t,r={}){var a;const o=(n=Xe(n,bd))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;o.host!==Ux&&o.host!==d&&di("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},o),{host:d,ssl:!1,emulatorOptions:r});if(!ia(p,u)&&(n._setSettings(p),r.mockUserToken)){let m,_;if(typeof r.mockUserToken=="string")m=r.mockUserToken,_=cn.MOCK_USER;else{m=Qk(r.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new te(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new cn(v)}n._authCredentials=new DU(new P1(m,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn=class zx{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zx(this.firestore,e,this._query)}},Tt=class Bx{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ra(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bx(this.firestore,e,this._key)}},ra=class Fx extends Mn{constructor(e,t,r){super(e,t,Lu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new he(e))}withConverter(e){return new Fx(this.firestore,e,this._path)}};function jx(n,e,...t){if(n=Ae(n),uT("collection","path",e),n instanceof bd){const r=Be.fromString(e,...t);return tS(r),new ra(n,null,r)}{if(!(n instanceof Tt||n instanceof ra))throw new te(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Be.fromString(e,...t));return tS(r),new ra(n.firestore,null,r)}}function Kz(n,e){if(n=Xe(n,bd),uT("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new te(Q.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Mn(n,null,function(r){return new ns(Be.emptyPath(),r)}(e))}function sm(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=N1.newId()),uT("doc","path",e),n instanceof bd){const r=Be.fromString(e,...t);return eS(r),new Tt(n,null,new he(r))}{if(!(n instanceof Tt||n instanceof ra))throw new te(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Be.fromString(e,...t));return eS(r),new Tt(n.firestore,n instanceof ra?n.converter:null,new he(r))}}function qx(n,e){return n=Ae(n),e=Ae(e),(n instanceof Tt||n instanceof ra)&&(e instanceof Tt||e instanceof ra)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function Hx(n,e){return n=Ae(n),e=Ae(e),n instanceof Mn&&e instanceof Mn&&n.firestore===e.firestore&&gd(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="AsyncQueue";class sS{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new GE(this,"async_queue_retry"),this.ju=()=>{const r=Rp();r&&re(iS,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const t=Rp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const t=Rp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const t=new _n;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Ta(e))throw e;re(iS,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const t=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,Vt("INTERNAL UNHANDLED ERROR: ",aS(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=t,t}enqueueAfterDelay(e,t,r){this.Ju(),this.zu.indexOf(e)>-1&&(t=0);const a=WE.createAndSchedule(this,e,t,r,o=>this.Xu(o));return this.Uu.push(a),a}Ju(){this.Ku&&ge(47125,{ec:aS(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const t of this.Uu)if(t.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Uu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const t=this.Uu.indexOf(e);this.Uu.splice(t,1)}}function aS(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const a=t;for(const o of r)if(o in a&&typeof a[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Qz{constructor(){this._progressObserver={},this._taskCompletionResolver=new _n,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yz=-1;let Lt=class extends bd{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new sS,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sS(e),this._firestoreClient=void 0,await e}}};function Sn(n){if(n._terminated)throw new te(Q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$x(n),n._firestoreClient}function $x(n){var e,t,r;const a=n._freezeSettings(),o=function(d,p,m,_){return new g6(d,p,m,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Vx(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new Lz(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}function Wz(n,e){di("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return Gx(n,Xh.provider,{build:r=>new Dx(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function Xz(n){di("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();Gx(n,Xh.provider,{build:t=>new Oz(t,e.cacheSizeBytes)})}function Gx(n,e,t){if((n=Xe(n,Lt))._firestoreClient||n._terminated)throw new te(Q.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new te(Q.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},$x(n)}function Jz(n){if(n._initialized&&!n._terminated)throw new te(Q.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new _n;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!oi.C())return Promise.resolve();const a=r+nx;await oi.delete(a)}(jE(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Zz(n){return function(t){const r=new _n;return t.asyncQueue.enqueueAndForget(async()=>Ez(await lT(t),r)),r.promise}(Sn(n=Xe(n,Lt)))}function eB(n){return zz(Sn(n=Xe(n,Lt)))}function tB(n){return Bz(Sn(n=Xe(n,Lt)))}function nB(n,e){const t=Sn(n=Xe(n,Lt)),r=new Qz;return Hz(t,n._databaseId,e,r),r}function rB(n,e){return $z(Sn(n=Xe(n,Lt)),e).then(t=>t?new Mn(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pi(xt.fromBase64String(e))}catch(t){throw new te(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pi(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ma=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==a[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iB=/^__.*__$/;class sB{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,t,this.fieldTransforms):new Uu(e,this.data,t,this.fieldTransforms)}}class Kx{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new is(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Qx(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{oc:n})}}class $m{constructor(e,t,r,a,o,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,o===void 0&&this._c(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new $m(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ac({path:r,cc:!1});return a.lc(e),a}hc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ac({path:r,cc:!1});return a._c(),a}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return am(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(Qx(this.oc)&&iB.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class aB{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Td(e)}dc(e,t,r,a=!1){return new $m({oc:e,methodName:t,Ec:r,path:pt.emptyPath(),cc:!1,Ic:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uo(n){const e=n._freezeSettings(),t=Td(n._databaseId);return new aB(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Gm(n,e,t,r,a,o={}){const u=n.dc(o.merge||o.mergeFields?2:0,e,t,a);yT("Data must be an object, but it was:",u,r);const d=Xx(r,u);let p,m;if(o.merge)p=new qn(u.fieldMask),m=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const v of o.mergeFields){const w=bv(e,v,t);if(!u.contains(w))throw new te(Q.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Zx(_,w)||_.push(w)}p=new qn(_),m=u.fieldTransforms.filter(v=>p.covers(v.field))}else p=null,m=u.fieldTransforms;return new sB(new yn(d),p,m)}class Id extends Lo{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Id}}function Yx(n,e,t){return new $m({oc:3,Ec:e.settings.Ec,methodName:n._methodName,cc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class hT extends Lo{_toFieldTransform(e){return new _d(e.path,new yu)}isEqual(e){return e instanceof hT}}class dT extends Lo{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=Yx(this,e,!0),r=this.Ac.map(o=>zo(o,t)),a=new Co(r);return new _d(e.path,a)}isEqual(e){return e instanceof dT&&ia(this.Ac,e.Ac)}}class fT extends Lo{constructor(e,t){super(e),this.Ac=t}_toFieldTransform(e){const t=Yx(this,e,!0),r=this.Ac.map(o=>zo(o,t)),a=new xo(r);return new _d(e.path,a)}isEqual(e){return e instanceof fT&&ia(this.Ac,e.Ac)}}class pT extends Lo{constructor(e,t){super(e),this.Rc=t}_toFieldTransform(e){const t=new _u(e.serializer,EC(e.serializer,this.Rc));return new _d(e.path,t)}isEqual(e){return e instanceof pT&&this.Rc===e.Rc}}function mT(n,e,t,r){const a=n.dc(1,e,t);yT("Data must be an object, but it was:",a,r);const o=[],u=yn.empty();wa(r,(p,m)=>{const _=_T(e,p,t);m=Ae(m);const v=a.hc(_);if(m instanceof Id)o.push(_);else{const w=zo(m,v);w!=null&&(o.push(_),u.set(_,w))}});const d=new qn(o);return new Kx(u,d,a.fieldTransforms)}function gT(n,e,t,r,a,o){const u=n.dc(1,e,t),d=[bv(e,r,t)],p=[a];if(o.length%2!=0)throw new te(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)d.push(bv(e,o[w])),p.push(o[w+1]);const m=[],_=yn.empty();for(let w=d.length-1;w>=0;--w)if(!Zx(m,d[w])){const S=d[w];let D=p[w];D=Ae(D);const U=u.hc(S);if(D instanceof Id)m.push(S);else{const L=zo(D,U);L!=null&&(m.push(S),_.set(S,L))}}const v=new qn(m);return new Kx(_,v,u.fieldTransforms)}function Wx(n,e,t,r=!1){return zo(t,n.dc(r?4:3,e))}function zo(n,e){if(Jx(n=Ae(n)))return yT("Unsupported field value:",e,n),Xx(n,e);if(n instanceof Lo)return function(r,a){if(!Qx(a.oc))throw a.Tc(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Tc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(a);o&&a.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,a){const o=[];let u=0;for(const d of r){let p=zo(d,a.Pc(u));p==null&&(p={nullValue:"NULL_VALUE"}),o.push(p),u++}return{arrayValue:{values:o}}}(n,e)}return function(r,a){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return EC(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=gt.fromDate(r);return{timestampValue:vu(a.serializer,o)}}if(r instanceof gt){const o=new gt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vu(a.serializer,o)}}if(r instanceof Hm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pi)return{bytesValue:PC(a.serializer,r._byteString)};if(r instanceof Tt){const o=a.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw a.Tc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:VE(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof cT)return function(u,d){return{mapValue:{fields:{[IE]:{stringValue:AE},[pu]:{arrayValue:{values:u.toArray().map(m=>{if(typeof m!="number")throw d.Tc("VectorValues must only contain numeric values.");return xE(d.serializer,m)})}}}}}}(r,a);throw a.Tc(`Unsupported field value: ${qm(r)}`)}(n,e)}function Xx(n,e){const t={};return Y1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wa(n,(r,a)=>{const o=zo(a,e.uc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Jx(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof Hm||n instanceof pi||n instanceof Tt||n instanceof Lo||n instanceof cT)}function yT(n,e,t){if(!Jx(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=qm(t);throw r==="an object"?e.Tc(n+" a custom object"):e.Tc(n+" "+r)}}function bv(n,e,t){if((e=Ae(e))instanceof ma)return e._internalPath;if(typeof e=="string")return _T(n,e);throw am("Field path arguments must be of type string or ",n,!1,void 0,t)}const oB=new RegExp("[~\\*/\\[\\]]");function _T(n,e,t){if(e.search(oB)>=0)throw am(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ma(...e.split("."))._internalPath}catch{throw am(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function am(n,e,t,r,a){const o=r&&!r.isEmpty(),u=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(o||u)&&(p+=" (found",o&&(p+=` in field ${r}`),u&&(p+=` in document ${a}`),p+=")"),new te(Q.INVALID_ARGUMENT,d+n+p)}function Zx(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t,r,a,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lB(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Km("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class lB extends Jh{data(){return super.data()}}function Km(n,e){return typeof e=="string"?_T(n,e):e instanceof ma?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new te(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vT{}class Ad extends vT{}function Ks(n,e,...t){let r=[];e instanceof vT&&r.push(e),r=r.concat(t),function(o){const u=o.filter(p=>p instanceof ET).length,d=o.filter(p=>p instanceof Qm).length;if(u>1||u>0&&d>0)throw new te(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const a of r)n=a._apply(n);return n}class Qm extends Ad{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Qm(e,t,r)}_apply(e){const t=this._parse(e);return nD(e._query,t),new Mn(e.firestore,e.converter,uv(e._query,t))}_parse(e){const t=Uo(e.firestore);return function(o,u,d,p,m,_,v){let w;if(m.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new te(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){lS(v,_);const D=[];for(const U of v)D.push(oS(p,o,U));w={arrayValue:{values:D}}}else w=oS(p,o,v)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||lS(v,_),w=Wx(d,u,v,_==="in"||_==="not-in");return Fe.create(m,_,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function uB(n,e,t){const r=e,a=Km("where",n);return Qm._create(a,r,t)}class ET extends vT{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ET(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,o){let u=a;const d=o.getFlattenedFilters();for(const p of d)nD(u,p),u=uv(u,p)}(e._query,t),new Mn(e.firestore,e.converter,uv(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class TT extends Ad{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new TT(e,t)}_apply(e){const t=function(a,o,u){if(a.startAt!==null)throw new te(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new te(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Kh(o,u)}(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,function(a,o){const u=a.explicitOrderBy.concat([o]);return new ns(a.path,a.collectionGroup,u,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,t))}}function cB(n,e="asc"){const t=e,r=Km("orderBy",n);return TT._create(r,t)}class Ym extends Ad{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Ym(e,t,r)}_apply(e){return new Mn(e.firestore,e.converter,Wp(e._query,this._limit,this._limitType))}}function hB(n){return Lx("limit",n),Ym._create("limit",n,"F")}function dB(n){return Lx("limitToLast",n),Ym._create("limitToLast",n,"L")}class Wm extends Ad{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Wm(e,t,r)}_apply(e){const t=tD(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,o,a.endAt)}(e._query,t))}}function fB(...n){return Wm._create("startAt",n,!0)}function pB(...n){return Wm._create("startAfter",n,!1)}class Xm extends Ad{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Xm(e,t,r)}_apply(e){const t=tD(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,o)}(e._query,t))}}function mB(...n){return Xm._create("endBefore",n,!1)}function gB(...n){return Xm._create("endAt",n,!0)}function tD(n,e,t,r){if(t[0]=Ae(t[0]),t[0]instanceof Jh)return function(o,u,d,p,m){if(!p)throw new te(Q.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${d}().`);const _=[];for(const v of Xl(o))if(v.field.isKeyField())_.push(So(u,p.key));else{const w=p.data.field(v.field);if(Pm(w))throw new te(Q.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const S=v.field.canonicalString();throw new te(Q.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${S}' (used as the orderBy) does not exist.`)}_.push(w)}return new da(_,m)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const a=Uo(n.firestore);return function(u,d,p,m,_,v){const w=u.explicitOrderBy;if(_.length>w.length)throw new te(Q.INVALID_ARGUMENT,`Too many arguments provided to ${m}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const S=[];for(let D=0;D<_.length;D++){const U=_[D];if(w[D].field.isKeyField()){if(typeof U!="string")throw new te(Q.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${m}(), but got a ${typeof U}`);if(!RE(u)&&U.indexOf("/")!==-1)throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${m}() must be a plain document ID, but '${U}' contains a slash.`);const L=u.path.child(Be.fromString(U));if(!he.isDocumentKey(L))throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${m}() must result in a valid document path, but '${L}' is not because it contains an odd number of segments.`);const H=new he(L);S.push(So(d,H))}else{const L=Wx(p,m,U);S.push(L)}}return new da(S,v)}(n._query,n.firestore._databaseId,a,e,t,r)}}function oS(n,e,t){if(typeof(t=Ae(t))=="string"){if(t==="")throw new te(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RE(e)&&t.indexOf("/")!==-1)throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Be.fromString(t));if(!he.isDocumentKey(r))throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return So(n,new he(r))}if(t instanceof Tt)return So(n,t._key);throw new te(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qm(t)}.`)}function lS(n,e){if(!Array.isArray(n)||n.length===0)throw new te(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function nD(n,e){const t=function(a,o){for(const u of a)for(const d of u.getFlattenedFilters())if(o.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new te(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class wT{convertValue(e,t="none"){switch(ca(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return wa(e,(a,o)=>{r[a]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,a;const o=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[pu].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(u=>dt(u.doubleValue));return new cT(o)}convertGeoPoint(e){return new Hm(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Nm(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Hh(e));default:return null}}convertTimestamp(e){const t=Xi(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Be.fromString(e);ve(jC(r),9688,{name:e});const a=new ua(r.get(1),r.get(3)),o=new he(r.popFirst(5));return a.isEqual(t)||Vt(`Document ${o} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class yB extends wT{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Zi=class extends Jh{constructor(e,t,r,a,o,u){super(e,t,r,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Km("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Ch=class extends Zi{data(e={}){return super.data(e)}},ga=class{constructor(e,t,r,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new go(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ch(this._firestore,this._userDataWriter,r.key,r,new go(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,o){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(d=>{const p=new Ch(a._firestore,a._userDataWriter,d.doc.key,d.doc,new go(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>o||d.type!==3).map(d=>{const p=new Ch(a._firestore,a._userDataWriter,d.doc.key,d.doc,new go(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let m=-1,_=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),_=u.indexOf(d.doc.key)),{type:_B(d.type),doc:p,oldIndex:m,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function _B(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:n})}}function rD(n,e){return n instanceof Zi&&e instanceof Zi?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ga&&e instanceof ga&&n._firestore===e._firestore&&Hx(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vB(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt);return Ox(Sn(e),n._key).then(t=>bT(e,n,t))}class Bo extends wT{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function EB(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Bo(e);return Fz(t,n._key).then(a=>new Zi(e,r,n._key,a,new go(a!==null&&a.hasLocalMutations,!0),n.converter))}function TB(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt);return Ox(Sn(e),n._key,{source:"server"}).then(t=>bT(e,n,t))}function wB(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Bo(e);return eD(n._query),kx(t,n._query).then(a=>new ga(e,r,n,a))}function bB(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Bo(e);return jz(t,n._query).then(a=>new ga(e,r,n,a))}function IB(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Bo(e);return kx(t,n._query,{source:"server"}).then(a=>new ga(e,r,n,a))}function uS(n,e,t){n=Xe(n,Tt);const r=Xe(n.firestore,Lt),a=Jm(n.converter,e,t);return Sd(r,[Gm(Uo(r),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,mt.none())])}function cS(n,e,t,...r){n=Xe(n,Tt);const a=Xe(n.firestore,Lt),o=Uo(a);let u;return u=typeof(e=Ae(e))=="string"||e instanceof ma?gT(o,"updateDoc",n._key,e,t,r):mT(o,"updateDoc",n._key,e),Sd(a,[u.toMutation(n._key,mt.exists(!0))])}function AB(n){return Sd(Xe(n.firestore,Lt),[new zu(n._key,mt.none())])}function SB(n,e){const t=Xe(n.firestore,Lt),r=sm(n),a=Jm(n.converter,e);return Sd(t,[Gm(Uo(n.firestore),"addDoc",r._key,a,n.converter!==null,{}).toMutation(r._key,mt.exists(!1))]).then(()=>r)}function iD(n,...e){var t,r,a;n=Ae(n);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||wv(e[u])||(o=e[u],u++);const d={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(wv(e[u])){const v=e[u];e[u]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[u+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[u+2]=(a=v.complete)===null||a===void 0?void 0:a.bind(v)}let p,m,_;if(n instanceof Tt)m=Xe(n.firestore,Lt),_=Lu(n._key.path),p={next:v=>{e[u]&&e[u](bT(m,n,v))},error:e[u+1],complete:e[u+2]};else{const v=Xe(n,Mn);m=Xe(v.firestore,Lt),_=v._query;const w=new Bo(m);p={next:S=>{e[u]&&e[u](new ga(m,w,v,S))},error:e[u+1],complete:e[u+2]},eD(n._query)}return function(w,S,D,U){const L=new Fm(U),H=new eT(S,L,D);return w.asyncQueue.enqueueAndForget(async()=>XE(await Au(w),H)),()=>{L.yu(),w.asyncQueue.enqueueAndForget(async()=>JE(await Au(w),H))}}(Sn(m),_,d,p)}function RB(n,e){return qz(Sn(n=Xe(n,Lt)),wv(e)?e:{next:e})}function Sd(n,e){return function(r,a){const o=new _n;return r.asyncQueue.enqueueAndForget(async()=>gz(await lT(r),a,o)),o.promise}(Sn(n),e)}function bT(n,e,t){const r=t.docs.get(e._key),a=new Bo(n);return new Zi(n,a,e._key,r,new go(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CB={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xB=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Uo(e)}set(e,t,r){this._verifyNotCommitted();const a=Js(e,this._firestore),o=Jm(a.converter,t,r),u=Gm(this._dataReader,"WriteBatch.set",a._key,o,a.converter!==null,r);return this._mutations.push(u.toMutation(a._key,mt.none())),this}update(e,t,r,...a){this._verifyNotCommitted();const o=Js(e,this._firestore);let u;return u=typeof(t=Ae(t))=="string"||t instanceof ma?gT(this._dataReader,"WriteBatch.update",o._key,t,r,a):mT(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(u.toMutation(o._key,mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Js(e,this._firestore);return this._mutations=this._mutations.concat(new zu(t._key,mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(Q.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Js(n,e){if((n=Ae(n)).firestore!==e)throw new te(Q.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DB{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Uo(e)}get(e){const t=Js(e,this._firestore),r=new yB(this._firestore);return this._transaction.lookup([t._key]).then(a=>{if(!a||a.length!==1)return ge(24041);const o=a[0];if(o.isFoundDocument())return new Jh(this._firestore,r,o.key,o,t.converter);if(o.isNoDocument())return new Jh(this._firestore,r,t._key,null,t.converter);throw ge(18433,{doc:o})})}set(e,t,r){const a=Js(e,this._firestore),o=Jm(a.converter,t,r),u=Gm(this._dataReader,"Transaction.set",a._key,o,a.converter!==null,r);return this._transaction.set(a._key,u),this}update(e,t,r,...a){const o=Js(e,this._firestore);let u;return u=typeof(t=Ae(t))=="string"||t instanceof ma?gT(this._dataReader,"Transaction.update",o._key,t,r,a):mT(this._dataReader,"Transaction.update",o._key,t),this._transaction.update(o._key,u),this}delete(e){const t=Js(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PB=class extends DB{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Js(e,this._firestore),r=new Bo(this._firestore);return super.get(e).then(a=>new Zi(this._firestore,r,t._key,a._document,new go(!1,!1),t.converter))}};function NB(n,e,t){n=Xe(n,Lt);const r=Object.assign(Object.assign({},CB),t);return function(o){if(o.maxAttempts<1)throw new te(Q.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,u,d){const p=new _n;return o.asyncQueue.enqueueAndForget(async()=>{const m=await Uz(o);new Mz(o.asyncQueue,m,d,u,p).Nu()}),p.promise}(Sn(n),a=>e(new PB(n,a)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OB(){return new Id("deleteField")}function kB(){return new hT("serverTimestamp")}function VB(...n){return new dT("arrayUnion",n)}function MB(...n){return new fT("arrayRemove",n)}function LB(n){return new pT("increment",n)}(function(e,t=!0){(function(a){Mu=a})(_a),oa(new ci("firestore",(r,{instanceIdentifier:a,options:o})=>{const u=r.getProvider("app").getImmediate(),d=new Lt(new PU(r.getProvider("auth-internal")),new kU(u,r.getProvider("app-check-internal")),function(m,_){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new te(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ua(m.options.projectId,_)}(u,a),u);return o=Object.assign({useFetchStreams:t},o),d._setSettings(o),d},"PUBLIC").setMultipleInstances(!0)),Or(BI,FI,e),Or(BI,FI,"esm2017")})();const UB="@firebase/firestore-compat",zB="0.3.46";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new te("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(){if(typeof Uint8Array>"u")throw new te("unimplemented","Uint8Arrays are not available in this environment.")}function dS(){if(!p6())throw new te("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Zh{constructor(e){this._delegate=e}static fromBase64String(e){return dS(),new Zh(pi.fromBase64String(e))}static fromUint8Array(e){return hS(),new Zh(pi.fromUint8Array(e))}toBase64(){return dS(),this._delegate.toBase64()}toUint8Array(){return hS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(n){return BB(n,["next","error","complete"])}function BB(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FB{enableIndexedDbPersistence(e,t){return Wz(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Xz(e._delegate)}clearIndexedDbPersistence(e){return Jz(e._delegate)}}class sD{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ua||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&di("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){Gz(this._delegate,e,t,r)}enableNetwork(){return eB(this._delegate)}disableNetwork(){return tB(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Mx("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Zz(this._delegate)}onSnapshotsInSync(e){return RB(this._delegate,e)}get app(){if(!this._appCompat)throw new te("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Su(this,jx(this._delegate,e))}catch(t){throw On(t,"collection()","Firestore.collection()")}}doc(e){try{return new Er(this,sm(this._delegate,e))}catch(t){throw On(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Nn(this,Kz(this._delegate,e))}catch(t){throw On(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return NB(this._delegate,t=>e(new aD(this,t)))}batch(){return Sn(this._delegate),new oD(new xB(this._delegate,e=>Sd(this._delegate,e)))}loadBundle(e){return nB(this._delegate,e)}namedQuery(e){return rB(this._delegate,e).then(t=>t?new Nn(this,t):null)}}class Zm extends wT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zh(new pi(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Er.forKey(t,this.firestore,null)}}function jB(n){RU(n)}class aD{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Zm(e)}get(e){const t=yo(e);return this._delegate.get(t).then(r=>new ed(this._firestore,new Zi(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const a=yo(e);return r?(IT("Transaction.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=yo(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=yo(e);return this._delegate.delete(t),this}}class oD{constructor(e){this._delegate=e}set(e,t,r){const a=yo(e);return r?(IT("WriteBatch.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=yo(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=yo(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ko{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Ch(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new td(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=ko.INSTANCES;let a=r.get(e);a||(a=new WeakMap,r.set(e,a));let o=a.get(t);return o||(o=new ko(e,new Zm(e),t),a.set(t,o)),o}}ko.INSTANCES=new WeakMap;class Er{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Zm(e)}static forPath(e,t,r){if(e.length%2!==0)throw new te("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Er(t,new Tt(t._delegate,r,new he(e)))}static forKey(e,t,r){return new Er(t,new Tt(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Su(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Su(this.firestore,jx(this._delegate,e))}catch(t){throw On(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ae(e),e instanceof Tt?qx(this._delegate,e):!1}set(e,t){t=IT("DocumentReference.set",t);try{return t?uS(this._delegate,e,t):uS(this._delegate,e)}catch(r){throw On(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?cS(this._delegate,e):cS(this._delegate,e,t,...r)}catch(a){throw On(a,"updateDoc()","DocumentReference.update()")}}delete(){return AB(this._delegate)}onSnapshot(...e){const t=lD(e),r=uD(e,a=>new ed(this.firestore,new Zi(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return iD(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=EB(this._delegate):(e==null?void 0:e.source)==="server"?t=TB(this._delegate):t=vB(this._delegate),t.then(r=>new ed(this.firestore,new Zi(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Er(this.firestore,e?this._delegate.withConverter(ko.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function On(n,e,t){return n.message=n.message.replace(e,t),n}function lD(n){for(const e of n)if(typeof e=="object"&&!Iv(e))return e;return{}}function uD(n,e){var t,r;let a;return Iv(n[0])?a=n[0]:Iv(n[1])?a=n[1]:typeof n[0]=="function"?a={next:n[0],error:n[1],complete:n[2]}:a={next:n[1],error:n[2],complete:n[3]},{next:o=>{a.next&&a.next(e(o))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(r=a.complete)===null||r===void 0?void 0:r.bind(a)}}class ed{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Er(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return rD(this._delegate,e._delegate)}}class td extends ed{data(e){const t=this._delegate.data(e);return this._delegate._converter||CU(t!==void 0,"Document in a QueryDocumentSnapshot should exist"),t}}class Nn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Zm(e)}where(e,t,r){try{return new Nn(this.firestore,Ks(this._delegate,uB(e,t,r)))}catch(a){throw On(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Nn(this.firestore,Ks(this._delegate,cB(e,t)))}catch(r){throw On(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Nn(this.firestore,Ks(this._delegate,hB(e)))}catch(t){throw On(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Nn(this.firestore,Ks(this._delegate,dB(e)))}catch(t){throw On(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Nn(this.firestore,Ks(this._delegate,fB(...e)))}catch(t){throw On(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Nn(this.firestore,Ks(this._delegate,pB(...e)))}catch(t){throw On(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Nn(this.firestore,Ks(this._delegate,mB(...e)))}catch(t){throw On(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Nn(this.firestore,Ks(this._delegate,gB(...e)))}catch(t){throw On(t,"endAt()","Query.endAt()")}}isEqual(e){return Hx(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=bB(this._delegate):(e==null?void 0:e.source)==="server"?t=IB(this._delegate):t=wB(this._delegate),t.then(r=>new Av(this.firestore,new ga(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=lD(e),r=uD(e,a=>new Av(this.firestore,new ga(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return iD(this._delegate,t,r)}withConverter(e){return new Nn(this.firestore,e?this._delegate.withConverter(ko.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class qB{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new td(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Av{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Nn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new td(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new qB(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new td(this._firestore,r))})}isEqual(e){return rD(this._delegate,e._delegate)}}class Su extends Nn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Er(this.firestore,e):null}doc(e){try{return e===void 0?new Er(this.firestore,sm(this._delegate)):new Er(this.firestore,sm(this._delegate,e))}catch(t){throw On(t,"doc()","CollectionReference.doc()")}}add(e){return SB(this._delegate,e).then(t=>new Er(this.firestore,t))}isEqual(e){return qx(this._delegate,e._delegate)}withConverter(e){return new Su(this.firestore,e?this._delegate.withConverter(ko.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function yo(n){return Xe(n,Tt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(...e){this._delegate=new ma(...e)}static documentId(){return new AT(pt.keyField().canonicalString())}isEqual(e){return e=Ae(e),e instanceof ma?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{static serverTimestamp(){const e=kB();return e._methodName="FieldValue.serverTimestamp",new ho(e)}static delete(){const e=OB();return e._methodName="FieldValue.delete",new ho(e)}static arrayUnion(...e){const t=VB(...e);return t._methodName="FieldValue.arrayUnion",new ho(t)}static arrayRemove(...e){const t=MB(...e);return t._methodName="FieldValue.arrayRemove",new ho(t)}static increment(e){const t=LB(e);return t._methodName="FieldValue.increment",new ho(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HB={Firestore:sD,GeoPoint:Hm,Timestamp:gt,Blob:Zh,Transaction:aD,WriteBatch:oD,DocumentReference:Er,DocumentSnapshot:ed,Query:Nn,QueryDocumentSnapshot:td,QuerySnapshot:Av,CollectionReference:Su,FieldPath:AT,FieldValue:ho,setLogLevel:jB,CACHE_SIZE_UNLIMITED:Yz};function $B(n,e){n.INTERNAL.registerComponent(new ci("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(r,a)},"PUBLIC").setServiceProps(Object.assign({},HB)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GB(n){$B(n,(e,t)=>new sD(e,t,new FB)),n.registerVersion(UB,zB)}GB(Nu);const KB={apiKey:"AIzaSyDu7buUixDsYfky1S9MTP1ruit7IIxIrNc",authDomain:"mini-blog2025.firebaseapp.com",projectId:"mini-blog2025",storageBucket:"mini-blog2025.firebasestorage.app",messagingSenderId:"482734152598",appId:"1:482734152598:web:f31773336518f30a609bb7"},QB=Nu.initializeApp(KB),Gl=QB.firestore(),YB=ue.div`
  width: 100%;
  height: 300px;
  background-image: ${({BannerImg:n})=>n?`url(${n})`:"url(/Banner.png)"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f3f3f3;
  border-bottom: 1px solid #d9d9d9;
`;function ST({img:n}){return $.jsx(YB,{BannerImg:n})}const WB=ue.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`,XB=ue.div`
    height: 100vh;
    position: fixed;
`,JB=ue.div`
    flex-direction: column;
    flex-grow: 1;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding-left: 72px;
    min-width: 1600px;
`,ZB=ue.div`
    padding: 72px 0px 172px 0px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 24px;
`,e5=ue.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
`;ue.div`   
    display: flex;
    gap: 12px;
    padding: 12px 0px;
`;const t5=ue.div`
    & > h1{
        font-size: 20px;
        color: #666666;
    }
`,n5=ue.div`
    width: 100%;
    display:flex;
    justify-content: flex-start;
    padding-bottom: 12px;
`;function r5(n){const e=xu(),[t,r]=W.useState([]),[a,o]=W.useState("전체"),[u,d]=W.useState([]);return W.useEffect(()=>{let p=[];Gl.collection("post").get().then(m=>{m.forEach(_=>{p.push(_.data())}),r(p)})},[]),W.useEffect(()=>{const p=t.filter(m=>a==="전체"?!0:m.category===a);d(p)},[a,t]),$.jsxs(WB,{children:[$.jsx(XB,{children:$.jsx(zv,{})}),$.jsxs(JB,{children:[$.jsx(ST,{}),$.jsxs(ZB,{children:[$.jsx(e5,{children:$.jsx("h1",{children:"메인페이지"})}),$.jsx(n5,{children:$.jsx(t5,{children:$.jsx("h1",{children:a})})}),$.jsx(wk,{posts:t,selectedCategory:a,setSelectedCategory:o}),$.jsx(Lk,{posts:u,itemClicked:p=>{e(`/post/${p.id}`)}})]})]})]})}const i5=ue.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`,s5=ue.h1`
    font-size: 16px;
    color: #444444;
`,a5=ue.textarea`
    background-color: #fff;
    width: 100%;
    height: ${n=>n.height}px;
    line-height: 1.5;
    font-size: ${n=>n.size}px;
    outline: none;
    resize: none;
    border: 0.5px solid #d9d9d9;
    padding: 12px;
    font-weight: ${n=>n.weight};
    color: #444444;
    overflow: scroll-Y;

    &::placeholder {
        color: #999999;
        font-size: ${n=>n.placeholderSize}px; /* 필요하면 사이즈 다르게 */
        font-weight: 500;
    }
`;function Sv(n){const{placeholder:e,height:t,weight:r,value:a,onChange:o,size:u,title:d,placeholderSize:p}=n;return $.jsxs(i5,{children:[$.jsx(s5,{children:d}),$.jsx(a5,{weight:r,placeholder:e,placeholderSize:p||20,size:u||20,height:t||20,value:a,onChange:o})]})}const o5=ue.div`
`,l5=ue.h1`
    font-size: 16px;
    color: #444444;
    margin-bottom: 12px;
`,u5=ue.div`
    padding: 12px;
    background-color: #f8f8f8;
    display: flex;
    gap: 8px;
    min-height: 50px;
    margin-bottom: 4px;
    border: 0.5px solid #d9d9d9;
`,c5=ue.span`
    background-color: #EEEEEE;
    color: #444444;
    font-size: 14px;
    padding: 6px 8px;
    border-radius: 2px;
    font-weight: 700;
    &:hover{
      background-color: #FF2E1A;
      color: #fff;
    }
`,h5=ue.input.attrs({type:"text"})`
    width: 100%;
    outline: none;
    resize: none;
    border: 0.5px solid #d9d9d9;
    padding: 12px;

    &::placeholder {    
        color: #888888;
        font-size: 16px;
        font-weight: 500;
    }
`;function d5({tags:n,setTags:e}){const[t,r]=W.useState(""),a=u=>{u.key==="Enter"&&(u.preventDefault(),t.trim()&&(e([...n,t.trim()]),r("")))},o=u=>{const d=n.filter((p,m)=>m!==u);e(d)};return $.jsxs(o5,{children:[$.jsx(l5,{children:"해시태그"}),$.jsx(u5,{children:n.map((u,d)=>$.jsxs(c5,{onClick:()=>o(d),children:["#",u]},d))}),$.jsx(h5,{value:t,onChange:u=>r(u.target.value),onKeyDown:a,placeholder:"해시태그를 입력하고 엔터를 눌러주세요."})]})}const f5=ue.select`
    width: 220px;
    padding: 12px;
`,p5=ue.div`
    display: flex;
    flex-direction: column;
`,m5=ue.h1`
    font-size: 16px;
    color: #444444;
    margin-bottom: 12px;
`;function g5(n){const{value:e,onChange:t}=n;return $.jsxs(p5,{children:[$.jsx(m5,{children:"카테고리"}),$.jsxs(f5,{value:e,onChange:t,children:[$.jsx("option",{value:"일상 공유",children:"일상 공유"}),$.jsx("option",{value:"정보 공유",children:"정보 공유"}),$.jsx("option",{value:"메모장",children:"메모장"}),$.jsx("option",{value:"편지",children:"편지"})]})]})}const y5=ue.div``,_5=ue.h1`
  font-size: 16px;
  color: #444444;
  margin-bottom: 12px;
`,v5=ue.div`
background-color: #f8f8f8;
display: flex;
padding: 12px;
gap: 4px;
cursor: pointer;
width: fit-content;
border-radius: 2px;
border: 0.5px solid #d9d9d9;
`,E5=ue.img`
  width: 300px;
  margin-top: 12px;
  border-radius: 8px;
  cursor: pointer;

    &:hover {
    animation: shake 0.5s ease-in-out;
    }

    @keyframes shake {
        0% { transform: translateX(0); }
        20% { transform: translateX(-5px); }
        40% { transform: translateX(5px); }
        60% { transform: translateX(-5px); }
        80% { transform: translateX(5px); }
        100% { transform: translateX(0); }
    }
`;function T5({image:n,setImage:e}){const t=W.useRef(),r=()=>{t.current.click()},a=u=>{let d=new FileReader;d.readAsDataURL(u.target.files[0]),d.onload=p=>{e(p.target.result)}},o=()=>{window.confirm("이미지를 삭제할까요?")&&e(null)};return $.jsxs(y5,{children:[$.jsx(_5,{children:"이미지 업로드"}),$.jsxs(v5,{onClick:r,children:[$.jsx("i",{className:"fa-regular fa-image"})," 여기를 눌러 첨부할 파일을 선택해주세요."]}),$.jsx("input",{ref:t,type:"file",accept:"image/*",style:{display:"none"},onChange:a}),n&&$.jsx(E5,{src:n,alt:"미리보기",onClick:o})]})}const w5=ue.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`,b5=ue.div`
    height: 100vh;
    position: fixed;
`,I5=ue.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-left: 72px;
    // align-items: center;

    & > img{
        width: 300px; 
    }
`,A5=ue.div`
    width: 1440px;
    display: flex;
    flex-direction: column;
    padding: 72px 0px 172px 0px;
    gap: 36px;
`,S5=ue.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;ue.img`
    width: 300px;
`;function R5(){const n=xu(),[e,t]=W.useState(null),[r,a]=W.useState(""),[o,u]=W.useState(""),[d,p]=W.useState("일상 공유"),[m,_]=W.useState([]),v=()=>{let w=new Date().getTime().toString();const S=new Date,D=S.toLocaleDateString(),U=S.toLocaleTimeString();Gl.collection("post").doc(w).set({id:w,title:r,content:o,comments:[],image:e,category:d,date:D,time:U,hashtag:m}).then(()=>{alert("글이 등록되었습니다."),n("/")})};return $.jsxs(w5,{children:[$.jsx(b5,{children:$.jsx(zv,{})}),$.jsxs(I5,{children:[$.jsx(ST,{}),$.jsxs(A5,{children:[$.jsxs(S5,{children:[$.jsx("h1",{children:"글작성페이지"}),$.jsx(Bv,{onClick:w=>{v()}})]}),$.jsx(g5,{value:d,onChange:w=>p(w.target.value)}),$.jsx(Sv,{weight:"700",placeholder:"제목을 적어주세요.",placeholderSize:"22",title:"제목",size:"22",height:"56",value:r,onChange:w=>a(w.target.value)}),$.jsx(Sv,{weight:"400",placeholder:"본문을 적어주세요.",placeholderSize:"18",title:"본문",size:"18",height:"424",value:o,onChange:w=>u(w.target.value)}),$.jsx(d5,{tags:m,setTags:_}),$.jsx(T5,{image:e,setImage:t})]})]})]})}const C5=ue.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`,x5=ue.p`
    font-size: 16px;
    color: #888888;
`,D5=ue.h3`
    font-size: 32px;
    font-weight: 700;
    color: #222222;    
`,P5=ue.p`
    white-space: pre-line;
    font-size: 18px;
    line-height: 1.5;
`,N5=ue.img`
    margin-top: 20px;
    max-width: 400px;
    border-radius: 8px;
`,O5=ue.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
`,k5=ue.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    gap: 12px;
    padding-bottom: 24px;
    border-bottom: 1px solid #d9d9d9;
`,V5=ue.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    gap: 12px;
`,M5=ue.p`
    font-size: 16px;
    color: #888888;
`,L5=ue.div`
    display: flex;
    gap: 8px;
    flexWrap: wrap;
    padding: 72px 0px 0px 0px;
`,U5=ue.span`
    padding: 6px 12px;
    background-color: #eeeeee;
    border-radius: 8px;
    color: #444444;
    width: fit-content;
    gap: 8px;
    font-weight:600;
    font-size: 16px;
`;function z5(n){const{post:e,handleDelete:t}=n,r=new Date;return`${r.getFullYear()}`,r.getMonth()+1,`${r.getDate()}`,$.jsxs(C5,{children:[$.jsxs("div",{children:[$.jsxs(O5,{children:[$.jsx(x5,{children:e.category}),$.jsx(D5,{children:e.title})]}),$.jsxs(k5,{children:[$.jsxs(V5,{children:[$.jsx(iR,{name:"박줴민"}),$.jsx(M5,{children:e.date})]}),$.jsx(Bv,{type:"delete",title:"삭제",icon:"fa-solid fa-trash",onClick:t})]})]}),e.image&&$.jsx(N5,{src:e.image,alt:"업로드된 이미지"}),$.jsx(P5,{children:e.content}),$.jsx(L5,{children:e.hashtag&&e.hashtag.map((a,o)=>$.jsxs(U5,{children:["#",a]},o))})]})}const B5=ue.div`
    border-bottom: 1px solid #d9d9d9;
    padding: 12px;
`,F5=ue.p`
    font-size: 16px;
    padding: 4px 36px;
    color: #666666;
`,j5=ue.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    gap: 12px;
    padding-bottom: 8px;
`,q5=ue.p`
    font-size: 16px;
    color: #888888;
`;function H5(n){const{comment:e}=n;new Date().getTime().toString();const t=e.time;return $.jsxs(B5,{children:[$.jsxs(j5,{children:[$.jsx(iR,{name:"익명의 비둘기"}),$.jsx(q5,{children:t})]}),$.jsx(F5,{children:e.content})]})}const fS=ue.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
`,$5=ue.div`
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;

    font-size: 16px;
    color: #d9d9d9;
    font-weight: 400;
`;function G5(n){const{comments:e}=n,t=e.map((r,a)=>$.jsx(H5,{comment:r},r.id));return!e||e.length===0?$.jsx(fS,{children:$.jsx($5,{children:"댓글이 없습니다. 댓글을 입력해 주세요."})}):$.jsx(fS,{children:t})}const K5=ue.div`
display: flex;
width: 100%;
justify-content: space-between;
padding-top:36px;
`,pS=ue.div`
padding: 12px 24px;
border-radius: 4px;
width: 200px;
color: #fff;
background-color: #ffffff;
border: 0.5px solid #d9d9d9;
cursor: pointer;

&:hover{
  background-color: #eeeeee;
}

& > p{
  font-size: 14px;
  color: #888888;
  margin-bottom: 4px;
}

& > h1{
  font-size: 15px;
  color: #444444;
  font-weight: 500;

  white-space: nowrap;     
  overflow: hidden;          
  text-overflow: ellipsis; 
}
`;function Q5({currentPost:n,allPosts:e}){const[t,r]=W.useState(null),a=xu();W.useEffect(()=>{const d=e.findIndex(p=>p.id===n.id);r(d)},[n,e]);const o=t>0?e[t-1]:null,u=t<e.length-1?e[t+1]:null;return $.jsxs(K5,{children:[$.jsxs(pS,{onClick:()=>o&&a(`/post/${o.id}`),children:[$.jsx("p",{children:"이전글 보기"}),$.jsx("h1",{children:o?o.title:"이전 글이 없습니다."})]}),$.jsxs(pS,{onClick:()=>u&&a(`/post/${u.id}`),children:[$.jsx("p",{children:"다음글 보기"}),$.jsx("h1",{children:u?u.title:"다음 글이 없습니다."})]})]})}const Y5=ue.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 12px 16px;
    border-radius: 2px;

    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
    background-color:#f3f3f3;
    }
`,W5=ue.span`
    display: flex;
    gap: 12px;
    align-items: center;
`,X5=ue.span`
    width: 80px;
    display:flex;
    
    & > p{
        font-size: 14px;
        padding: 4px 6px;
        background-color: #eeeeee;
    }
`,J5=ue.span`
    font-weight: 400;
    font-size: 16px;
    color: #222222;
    width: 240px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Z5=ue.span`
    font-size: 16px;
    color: #888888;
`;function eF(n){const{post:e,onClick:t}=n;return!e||!e.title?null:$.jsxs(Y5,{onClick:t,children:[$.jsxs(W5,{children:[$.jsx(X5,{children:$.jsx("p",{children:e.category})}),$.jsx(J5,{children:e.title})]}),$.jsx(Z5,{children:e.date})]})}const tF=ue.div`
   display: flex;
   flex-direction: column;
   gap: 12px;
   margin-top: 72px;
   padding: 24px 0px;
`,nF=ue.div`
    width: 100%;
    background-color: #f8f8f8;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 12px 16px;
    border-radius: 2px;

    border-bottom: 1px solid #d9d9d9;
`,rF=ue.span`
    display: flex;
    gap: 12px;
    align-items: center;
`,iF=ue.span`
    width: 80px;
    display:flex;
      
    & > p{
        font-size: 16px;
        padding: 4px 6px;
        color: #888888;
    }
`,mS=ue.span`
    font-size: 16px;
    color: #888888;
`,sF=ue.h1`
    font-size: 20   px;
    color: #444444;
`;function aF(n){const{posts:e,itemClicked:t}=n,a=[...e].sort((o,u)=>u.id-o.id).map((o,u)=>$.jsx(eF,{post:o,onClick:d=>t(o)},o.id));return $.jsxs(tF,{children:[$.jsx(sF,{children:"전체글 목록"}),$.jsxs(nF,{children:[$.jsxs(rF,{children:[$.jsx(iF,{children:$.jsx("p",{children:"카테고리"})}),$.jsx(mS,{children:"제목"})]}),$.jsx(mS,{children:"작성 일시"})]}),a]})}const oF=ue.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`,lF=ue.div`
    height: 100vh;
    position: fixed;
`,uF=ue.div`
    flex-grow: 1;
    display: flex;
    height: 100%;
    justify-content: center;
    padding-left: 72px;
    flex-direction: column;
    align-items: center;
`,cF=ue.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    padding-top: 24px;

    border-top: 1px solid #d9d9d9;
`,hF=ue.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 72px 0px 172px 0px;
    gap: 24px;
`,dF=ue.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`,fF=ue.div`
    font-size: 16px;
    font-weight: 600;
    color: #444444;
    width: 100%;
    text-align: left;
`;function pF(){const n=xu(),e=EN().id,[t,r]=W.useState([]);W.useEffect(()=>{Gl.collection("post").get().then(_=>{let v=[];_.forEach(w=>{v.push(w.data())}),r(v)})},[]);const[a,o]=W.useState({id:0,title:"",content:"",comments:[]});W.useEffect(()=>{Gl.collection("post").doc(e).get().then(_=>{o(_.data())})},[e]);const[u,d]=W.useState(""),p=()=>{let _=new Date().getTime().toString(),w=new Date().toLocaleString("ko-KR"),S=a.comments;S.push({id:`${e}_${_}`,content:u,time:w}),Gl.collection("post").doc(e).update({comments:S}).then(()=>{alert("댓글이 등록되었습니다"),d("")})},m=()=>{window.confirm("정말로 삭제하시겠습니까?")&&Gl.collection("post").doc(e).delete().then(()=>{alert("게시글이 삭제되었습니다."),n("/")})};return $.jsxs(oF,{children:[$.jsx(lF,{children:$.jsx(zv,{})}),$.jsxs(uF,{children:[$.jsx(ST,{img:a.image}),$.jsxs(hF,{children:[$.jsx(z5,{handleDelete:m,post:a}),$.jsxs(dF,{children:[$.jsx(Q5,{currentPost:a,allPosts:t}),$.jsxs(cF,{children:[$.jsxs(fF,{children:["댓글 ",$.jsx("span",{style:{color:"#FF0051",fontWeight:"bold"},children:a.comments.length})]}),$.jsx(Sv,{placeholderSize:"16",placeholder:"댓글을 적어주세요.",height:"100",size:"16",value:u,onChange:_=>{d(_.target.value)}}),$.jsx(Bv,{title:"댓글 작성",onClick:_=>p(_.target.value)})]}),$.jsx(G5,{comments:a.comments})]}),$.jsx(aF,{posts:t,itemClicked:_=>{window.scrollTo(0,0),n(`/post/${_.id}`)}})]})]})]})}function mF(){const{pathname:n}=ya();return W.useEffect(()=>{window.scrollTo(0,0)},[n]),null}HP.createRoot(document.getElementById("root")).render($.jsxs(sO,{children:[$.jsx(mF,{}),$.jsxs(VN,{children:[$.jsx(ap,{index:!0,element:$.jsx(r5,{})}),$.jsx(ap,{path:"/write",element:$.jsx(R5,{})}),$.jsx(ap,{path:"/post/:id",element:$.jsx(pF,{})})]})]}));
