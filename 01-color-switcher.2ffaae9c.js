const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let n=null;function a(o){t.disabled=!0,e.disabled=!1}function l(){o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{a(boolean),n=setInterval(l,1e3)})),e.addEventListener("click",(()=>{a(boolean),clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.2ffaae9c.js.map