import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const r=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]"),e=document.querySelector("body");r.addEventListener("click",d);a.addEventListener("click",c);function d(t){t.currentTarget.disabled=!0,a.disabled=!1,l()}function n(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}let o=null;function l(){e.style.background=n(),o=setInterval(()=>{e.style.background=n()},1e3)}function c(t){t.currentTarget.disabled=!0,r.disabled=!1,clearInterval(o)}
//# sourceMappingURL=commonHelpers.js.map