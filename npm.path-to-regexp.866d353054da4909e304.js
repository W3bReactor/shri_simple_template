(self.webpackChunkunit_demo_cra=self.webpackChunkunit_demo_cra||[]).push([[922],{779:(e,t,r)=>{var n=r(826);e.exports=function e(t,r,i){return n(r)||(i=r||i,r=[]),i=i||{},t instanceof RegExp?function(e,t){var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return c(e,t)}(t,r):n(t)?function(t,r,n){for(var i=[],o=0;o<t.length;o++)i.push(e(t[o],r,n).source);return c(new RegExp("(?:"+i.join("|")+")",f(n)),r)}(t,r,i):function(e,t,r){return s(o(e,r),t,r)}(t,r,i)},e.exports.parse=o,e.exports.compile=function(e,t){return p(o(e,t),t)},e.exports.tokensToFunction=p,e.exports.tokensToRegExp=s;var i=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function o(e,t){for(var r,n=[],o=0,a=0,p="",c=t&&t.delimiter||"/";null!=(r=i.exec(e));){var f=r[0],s=r[1],h=r.index;if(p+=e.slice(a,h),a=h+f.length,s)p+=s[1];else{var g=e[a],d=r[2],x=r[3],v=r[4],m=r[5],w=r[6],E=r[7];p&&(n.push(p),p="");var y=null!=d&&null!=g&&g!==d,k="+"===w||"*"===w,b="?"===w||"*"===w,R=r[2]||c,$=v||m;n.push({name:x||o++,prefix:d||"",delimiter:R,optional:b,repeat:k,partial:y,asterisk:!!E,pattern:$?l($):E?".*":"[^"+u(R)+"]+?"})}}return a<e.length&&(p+=e.substr(a)),p&&n.push(p),n}function a(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function p(e,t){for(var r=new Array(e.length),i=0;i<e.length;i++)"object"==typeof e[i]&&(r[i]=new RegExp("^(?:"+e[i].pattern+")$",f(t)));return function(t,i){for(var o="",p=t||{},u=(i||{}).pretty?a:encodeURIComponent,l=0;l<e.length;l++){var c=e[l];if("string"!=typeof c){var f,s=p[c.name];if(null==s){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(n(s)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(s)+"`");if(0===s.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<s.length;h++){if(f=u(s[h]),!r[l].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===h?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?encodeURI(s).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):u(s),!r[l].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');o+=c.prefix+f}}else o+=c}return o}}function u(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function c(e,t){return e.keys=t,e}function f(e){return e&&e.sensitive?"":"i"}function s(e,t,r){n(t)||(r=t||r,t=[]);for(var i=(r=r||{}).strict,o=!1!==r.end,a="",p=0;p<e.length;p++){var l=e[p];if("string"==typeof l)a+=u(l);else{var s=u(l.prefix),h="(?:"+l.pattern+")";t.push(l),l.repeat&&(h+="(?:"+s+h+")*"),a+=h=l.optional?l.partial?s+"("+h+")?":"(?:"+s+"("+h+"))?":s+"("+h+")"}}var g=u(r.delimiter||"/"),d=a.slice(-g.length)===g;return i||(a=(d?a.slice(0,-g.length):a)+"(?:"+g+"(?=$))?"),a+=o?"$":i&&d?"":"(?="+g+"|$)",c(new RegExp("^"+a,f(r)),t)}}}]);