"use strict";(self.webpackChunkunit_demo_cra=self.webpackChunkunit_demo_cra||[]).push([[794],{704:(n,e,t)=>{t.d(e,{zt:()=>f,I0:()=>p,v9:()=>g});var r=t(294),u=r.createContext(null),c=function(n){n()},o=function(){return c},i={notify:function(){},get:function(){return[]}};function a(n,e){var t,r=i;function u(){a.onStateChange&&a.onStateChange()}function c(){t||(t=e?e.addNestedSub(u):n.subscribe(u),r=function(){var n=o(),e=null,t=null;return{clear:function(){e=null,t=null},notify:function(){n((function(){for(var n=e;n;)n.callback(),n=n.next}))},get:function(){for(var n=[],t=e;t;)n.push(t),t=t.next;return n},subscribe:function(n){var r=!0,u=t={callback:n,next:null,prev:t};return u.prev?u.prev.next=u:e=u,function(){r&&null!==e&&(r=!1,u.next?u.next.prev=u.prev:t=u.prev,u.prev?u.prev.next=u.next:e=u.next)}}}}())}var a={addNestedSub:function(n){return c(),r.subscribe(n)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:u,isSubscribed:function(){return Boolean(t)},trySubscribe:c,tryUnsubscribe:function(){t&&(t(),t=void 0,r.clear(),r=i)},getListeners:function(){return r}};return a}var s="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;const f=function(n){var e=n.store,t=n.context,c=n.children,o=(0,r.useMemo)((function(){var n=a(e);return{store:e,subscription:n}}),[e]),i=(0,r.useMemo)((function(){return e.getState()}),[e]);s((function(){var n=o.subscription;return n.onStateChange=n.notifyNestedSubs,n.trySubscribe(),i!==e.getState()&&n.notifyNestedSubs(),function(){n.tryUnsubscribe(),n.onStateChange=null}}),[o,i]);var f=t||u;return r.createElement(f.Provider,{value:o},c)};function v(){return(0,r.useContext)(u)}function d(n){void 0===n&&(n=u);var e=n===u?v:function(){return(0,r.useContext)(n)};return function(){return e().store}}t(679),t(864),t(462);var b=d();function l(n){void 0===n&&(n=u);var e=n===u?b:d(n);return function(){return e().dispatch}}var p=l(),h=function(n,e){return n===e};function S(n){void 0===n&&(n=u);var e=n===u?v:function(){return(0,r.useContext)(n)};return function(n,t){void 0===t&&(t=h);var u=e(),c=function(n,e,t,u){var c,o=(0,r.useReducer)((function(n){return n+1}),0)[1],i=(0,r.useMemo)((function(){return a(t,u)}),[t,u]),f=(0,r.useRef)(),v=(0,r.useRef)(),d=(0,r.useRef)(),b=(0,r.useRef)(),l=t.getState();try{if(n!==v.current||l!==d.current||f.current){var p=n(l);c=void 0!==b.current&&e(p,b.current)?b.current:p}else c=b.current}catch(n){throw f.current&&(n.message+="\nThe error may be correlated with this previous error:\n"+f.current.stack+"\n\n"),n}return s((function(){v.current=n,d.current=l,b.current=c,f.current=void 0})),s((function(){function n(){try{var n=t.getState();if(n===d.current)return;var r=v.current(n);if(e(r,b.current))return;b.current=r,d.current=n}catch(n){f.current=n}o()}return i.onStateChange=n,i.trySubscribe(),n(),function(){return i.tryUnsubscribe()}}),[t,i]),c}(n,t,u.store,u.subscription);return(0,r.useDebugValue)(c),c}}var y,g=S();y=t(935).unstable_batchedUpdates,c=y}}]);