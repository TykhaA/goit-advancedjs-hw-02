import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as h,f as M}from"./assets/vendor-651d7991.js";const n=document.querySelector("button[data-start]"),c=document.querySelector(".value[data-days]"),l=document.querySelector(".value[data-hours]"),f=document.querySelector(".value[data-minutes]"),m=document.querySelector(".value[data-seconds]");n.disabled=!0;let s=null;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){s=e[0],T()}};h.settings({timeout:3e3,resetOnHover:!0,transitionIn:"flipInX",backgroundColor:"red",titleColor:"#fff",position:"topRight"});M("#datetime-picker",D);function T(){const e=Date.parse(new Date);Date.parse(s)<e?h.show({title:"Please choose a date in the future."}):n.disabled=!1}n.addEventListener("click",L);function v(){return Date.parse(s)-Date.parse(new Date)}function L(){const e=setInterval(i,1e3);n.disabled=!0;function i(){const o=v(),{days:u,hours:d,minutes:r,seconds:a}=H(o);if(o<=0){c.innerHTML="00",l.innerHTML="00",f.innerHTML="00",m.innerHTML="00",clearInterval(e);return}c.innerHTML=t(u),l.innerHTML=t(d),f.innerHTML=t(r),m.innerHTML=t(a)}}function t(e){return e.toString().padStart(2,"0")}function H(e){const r=Math.floor(e/864e5),a=Math.floor(e%864e5/36e5),p=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:a,minutes:p,seconds:y}}
//# sourceMappingURL=commonHelpers2.js.map
