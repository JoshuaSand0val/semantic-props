function e(e){const t=["--2xs-breakpoint","--xs-breakpoint","--sm-breakpoint","--md-breakpoint","--lg-breakpoint","--xl-breakpoint","--2xl-breakpoint","--3xl-breakpoint"],o=(()=>{const o=e.getAttribute("style")??"";e.style.backgroundImage=t.map((()=>"linear-gradient(#0000, #0000)")).join(","),e.style.backgroundSize=t.map((e=>`var(${e})`)).join(",");const n=getComputedStyle(e).getPropertyValue("background-size").split(",");return e.setAttribute("style",o),n.map((e=>parseInt(e)))})();new ResizeObserver((n=>{for(const r of n){const n=r.borderBoxSize[0].inlineSize;for(let r=0;r<t.length;r++)e.classList.toggle(t[r],n>=o[r])}})).observe(e)}function t(e){const t=matchMedia("(prefers-color-scheme: dark)"),o=()=>{const o=getComputedStyle(e).getPropertyValue("color-scheme");return/normal|(?=.*light)(?=.*dark)/.test(o)?t.matches:/dark/.test(o)},n=()=>{e.classList.remove(o()?"--light-color":"--dark-color"),e.classList.add(o()?"--dark-color":"--light-color")};t.addEventListener("change",n),n()}
/**
 * Activates Semantic Props elements, adding custom property classes.
 * @type {Function}
 * @preserve
 */function o(){const o=o=>{for(const n of[o,...o.getElementsByTagName("*")])n.matches(".--semantic")&&(e(n),t(n))};o(document.documentElement);new MutationObserver((e=>{for(const{target:t,oldValue:n}of e)n&&n.includes("--semantic")||o(t)})).observe(document.documentElement,{subtree:!0,childList:!0,attributeFilter:["class"],attributeOldValue:!0})}"undefined"!=typeof window&&addEventListener("DOMContentLoaded",o);export{o as default};