import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as o}from"./assets/vendor-651d7991.js";document.querySelector(".form").addEventListener("submit",function(s){s.preventDefault();const t=document.querySelector('[name="delay"]').value,i=document.querySelector('[name="state"]:checked').value;new Promise((e,r)=>{setTimeout(()=>{i==="fulfilled"?e(t):r(t)},t)}).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise: ${e}`,position:"topRight"})}).catch(e=>{o.error({title:"Error",message:`❌ Rejected promise: ${e}`,position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map
