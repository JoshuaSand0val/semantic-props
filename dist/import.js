function e(e){const t=["--2xs-breakpoint","--xs-breakpoint","--sm-breakpoint","--md-breakpoint","--lg-breakpoint","--xl-breakpoint","--2xl-breakpoint","--3xl-breakpoint"];new ResizeObserver((()=>{const n=e.style.minInlineSize,o=getComputedStyle(e).getPropertyValue("inline-size");for(const n of t)e.style.minInlineSize=`min(var(${n}) - ${o}, ${o})`,"0px"!==getComputedStyle(e).getPropertyValue("min-inline-size")?e.classList.remove(n):e.classList.add(n);e.style.minInlineSize=n})).observe(e)}function t(e){const t=matchMedia("(prefers-color-scheme: dark)"),n=e.closest(".--semantic:is(.--light-color, .--dark-color)"),o=()=>{const o=n?n.classList.contains("--dark-color"):t.matches;e.classList.remove(o?"--light-color":"--dark-color"),e.classList.add(o?"--dark-color":"--light-color")};t.addEventListener("change",o),o()}
/**
 * Adds custom property classes to all Semantic Props elements.
 * @type {Function}
 * @preserve
 */function n(){const n=n=>{for(const o of[n,...n.getElementsByTagName("*")])o.classList.contains("--semantic")&&(e(o),t(o))};n(document.documentElement);new MutationObserver((e=>{for(const t of e)t.oldValue&&t.oldValue.includes("--semantic")||n(t.target)})).observe(document.documentElement,{subtree:!0,childList:!0,attributeFilter:["class"],attributeOldValue:!0})}"undefined"!=typeof window&&addEventListener("DOMContentLoaded",n);export{n as default};
