import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{t as l}from"./assets/vendor-5b681ac7.js";const e=document.querySelector(".feedback-form"),o=a=>{a.preventDefault();const m=a.target,s={email:m.elements.email.value,message:m.elements.message.value};(s.email===""||s.message==="")&&window.alert("All fields must be filled!"),console.log(s),localStorage.removeItem("feedback-form-state"),e.reset()},t={email:"",message:"",...JSON.parse(localStorage.getItem("feedback-form-state"))};e.elements.email.value=t.email;e.elements.message.value=t.message;const r=a=>{a.target,t.email=e.elements.email.value,t.message=e.elements.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))};e.addEventListener("submit",l(o,500));e.addEventListener("input",r);
//# sourceMappingURL=commonHelpers3.js.map
