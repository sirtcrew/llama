var chaiAsPromised=function(){"use strict";function t(t,e){return e instanceof Error&&t===e}function e(t,e){return e instanceof Error?t.constructor===e.constructor||t instanceof e.constructor:(e.prototype instanceof Error||e===Error)&&(t.constructor===e||t instanceof e)}function n(t,e){var n="string"==typeof t?t:t.message;return e instanceof RegExp?e.test(n):"string"==typeof e&&-1!==n.indexOf(e)}function o(t){var e="";if(void 0===t.name){var n=String(t).match(s);n&&(e=n[1])}else e=t.name;return e}function r(t){var e=t;return t instanceof Error?e=o(t.constructor):"function"==typeof t&&(e=o(t).trim()||o(new t)),e}function i(t){var e="";return t&&t.message?e=t.message:"string"==typeof t&&(e=t),e}var s=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/,c={compatibleInstance:t,compatibleConstructor:e,compatibleMessage:n,getMessage:i,getConstructorName:r},u=function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t){let e=c;t.exports=((n,o)=>{function r(t){return"function"!=typeof t.catch&&"function"==typeof t.always&&"function"==typeof t.done&&"function"==typeof t.fail&&"function"==typeof t.pipe&&"function"==typeof t.progress&&"function"==typeof t.state}function i(t){if("function"!=typeof t._obj.then)throw new TypeError(o.inspect(t._obj)+" is not a thenable.");if(r(t._obj))throw new TypeError("Chai as Promised is incompatible with thenables of jQuery<3.0.0, sorry! Please upgrade jQuery or use another Promises/A+ compatible library (see http://promisesaplus.com/).")}function s(t){return void 0===b?t:b(t)}function c(t,e){o.addMethod(y.prototype,t,function(){return i(this),e.apply(this,arguments)})}function u(t,e){o.addProperty(y.prototype,t,function(){return i(this),s(e.apply(this,arguments))})}function f(t,e){t.then(()=>e(),e)}function a(t,e,n){t.assert(!0,null,e,n.expected,n.actual)}function p(t,e,n){t.assert(!1,e,null,n.expected,n.actual)}function l(t){return"function"==typeof t.then?t:t._obj}function h(t){return t instanceof Error?t.toString():e.getConstructorName(t)}function d(e,n,r){if(!o.flag(n,"eventually"))return e.apply(n,r),n;const i=l(n).then(e=>{n._obj=e;o.flag(n,"eventually",!1);return r?t.exports.transformAsserterArgs(r):r}).then(t=>{e.apply(n,t);return n._obj});return t.exports.transferPromiseness(n,i),n}const y=n.Assertion;const m=n.assert;const b=o.proxify;o.checkError&&(e=o.checkError);const g=Object.getOwnPropertyNames(y.prototype);const w={};for(const t of g)w[t]=Object.getOwnPropertyDescriptor(y.prototype,t);u("fulfilled",function(){const e=l(this).then(t=>{a(this,"expected promise not to be fulfilled but it was fulfilled with #{act}",{actual:t});return t},t=>{p(this,"expected promise to be fulfilled but it was rejected with #{act}",{actual:h(t)});return t});return t.exports.transferPromiseness(this,e),this});u("rejected",function(){const e=l(this).then(t=>{p(this,"expected promise to be rejected but it was fulfilled with #{act}",{actual:t});return t},t=>{a(this,"expected promise not to be rejected but it was rejected with #{act}",{actual:h(t)});return t});return t.exports.transferPromiseness(this,e),this});c("rejectedWith",function(n,r,i){let s=null;const c=o.flag(this,"negate")||!1;if(void 0===n&&void 0===r&&void 0===i)return this.rejected;void 0!==i&&o.flag(this,"message",i),n instanceof RegExp||"string"==typeof n?(r=n,n=null):n&&n instanceof Error?s=n.toString():"function"==typeof n?s=e.getConstructorName(n):n=null;const u=Boolean(n&&r);let f="including";r instanceof RegExp&&(f="matching");const a=l(this).then(t=>{let e=null;let o=null;n?(e="expected promise to be rejected with #{exp} but it was fulfilled with #{act}",o=s):r&&(e=`expected promise to be rejected with an error ${f} #{exp} but `+`it was fulfilled with #{act}`,o=r);p(this,e,{expected:o,actual:t});return t},t=>{const o=n&&(n instanceof Error?e.compatibleInstance(t,n):e.compatibleConstructor(t,n));const i=r&&e.compatibleMessage(t,r);const a=h(t);c&&u?o&&i&&this.assert(!0,null,"expected promise not to be rejected with #{exp} but it was rejected with #{act}",s,a):(n&&this.assert(o,"expected promise to be rejected with #{exp} but it was rejected with #{act}","expected promise not to be rejected with #{exp} but it was rejected with #{act}",s,a),r&&this.assert(i,`expected promise to be rejected with an error ${f} #{exp} but got `+`#{act}`,`expected promise not to be rejected with an error ${f} #{exp}`,r,e.getMessage(t)));return t});return t.exports.transferPromiseness(this,a),this});u("eventually",function(){return o.flag(this,"eventually",!0),this});c("notify",function(t){return f(l(this),t),this});c("become",function(t,e){return this.eventually.deep.equal(t,e)});const x=g.filter(t=>"assert"!==t&&"function"==typeof w[t].value);x.forEach(t=>{y.overwriteMethod(t,t=>(function(){return d(t,this,arguments)}))});const j=g.filter(t=>"_obj"!==t&&"function"==typeof w[t].get);j.forEach(t=>{const e=y.prototype.__methods.hasOwnProperty(t);e?y.overwriteChainableMethod(t,t=>(function(){return d(t,this,arguments)}),t=>(function(){return d(t,this)})):y.overwriteProperty(t,t=>(function(){return s(d(t,this))}))});const v=Object.getOwnPropertyNames(m).filter(t=>"function"==typeof m[t]);m.isFulfilled=((t,e)=>new y(t,e).to.be.fulfilled);m.isRejected=((t,e,n,o)=>{const r=new y(t,o);return r.to.be.rejectedWith(e,n,o)});m.becomes=((t,e,n)=>m.eventually.deepEqual(t,e,n));m.doesNotBecome=((t,e,n)=>m.eventually.notDeepEqual(t,e,n));m.eventually={};v.forEach(t=>{m.eventually[t]=function(e){const r=Array.prototype.slice.call(arguments,1);let i;const s=arguments[m[t].length-1];"string"==typeof s&&(i=(t=>{throw new n.AssertionError(`${s}\n\nOriginal reason: ${o.inspect(t)}`)}));const c=e.then(e=>m[t].apply(m,[e].concat(r)),i);return c.notify=(t=>{f(c,t)}),c}})}),t.exports.transferPromiseness=((t,e)=>{t.then=e.then.bind(e)}),t.exports.transformAsserterArgs=(t=>t)}),f=u.transferPromiseness,a=u.transformAsserterArgs,p=Object.freeze({default:u,__moduleExports:u,transferPromiseness:f,transformAsserterArgs:a});return u||p}();
