function e(e){const o=["--2xs-breakpoint","--xs-breakpoint","--sm-breakpoint","--md-breakpoint","--lg-breakpoint","--xl-breakpoint","--2xl-breakpoint","--3xl-breakpoint"],t=new ResizeObserver((e=>{for(const t of e){const e=t.target;e.classList.remove(...o);for(const s of o){const o=getComputedStyle(e).getPropertyValue(s);t.borderBoxSize[0].inlineSize>=parseFloat(o)&&e.classList.add(s)}}}));t.observe(e)}function o(e){const o=["--light-color","--dark-color"],t=matchMedia("(prefers-color-scheme: dark)"),s=()=>{e.classList.remove(...o);const s=(()=>{const o=e.closest(".--light-color, .--dark-color");return null!==o?o.classList.contains("--dark-color"):t.matches})();e.classList.add(s?"--dark-color":"--light-color")};o.some((o=>e.classList.contains(o)))||(t.addEventListener("change",s),s())}
/**
 * Adds custom property classes to all Semantic Props elements.
 * @type {Function}
 * @preserve
 */function t(){const t=()=>{for(const t of document.querySelectorAll(".--semantic"))e(t),o(t)};t();new MutationObserver(t).observe(document.documentElement,{subtree:!0,childList:!0})}"undefined"!=typeof window&&addEventListener("DOMContentLoaded",t);export{t as default};
