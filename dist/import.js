function e(e){const r=["--2xs-breakpoint","--xs-breakpoint","--sm-breakpoint","--md-breakpoint","--lg-breakpoint","--xl-breakpoint","--2xl-breakpoint","--3xl-breakpoint"],o=(()=>{const o=e.getAttribute("style")??"";e.style.backgroundImage=r.map((()=>"linear-gradient(#0000, #0000)")).join(","),e.style.backgroundSize=r.map((e=>`var(${e})`)).join(",");const a=getComputedStyle(e).getPropertyValue("background-size").split(",");return e.setAttribute("style",o),a.map((e=>parseInt(e)))})();new ResizeObserver((a=>{for(const t of a){const a=t.borderBoxSize[0].inlineSize;for(let t=0;t<r.length;t++)e.classList.toggle(r[t],a>=o[t])}})).observe(e)}function r(e){const r=matchMedia("(prefers-color-scheme: dark)"),o=()=>{const o=getComputedStyle(e).getPropertyValue("color-scheme");return/normal|(?=.*light)(?=.*dark)/.test(o)?r.matches:/dark/.test(o)},a=()=>{e.classList.remove(o()?"--light-color":"--dark-color"),e.classList.add(o()?"--dark-color":"--light-color")};r.addEventListener("change",a),a()}
/**
 * Activates Semantic Props elements, adding custom property classes.
 * @type {Function}
 * @preserve
 */function o(){const o=o=>{for(const a of[o,...o.getElementsByTagName("*")])a.matches(".--semantic")&&(e(a),r(a))};o(document.documentElement);new MutationObserver((e=>{for(const{target:r,oldValue:a}of e)a&&a.includes("--semantic")||o(r)})).observe(document.documentElement,{subtree:!0,childList:!0,attributeFilter:["class"],attributeOldValue:!0})}!function(e,r){void 0===r&&(r={});var o=r.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css","top"===o&&a.firstChild?a.insertBefore(t,a.firstChild):a.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}(':where(:root,.--semantic){--2xs-breakpoint:180px;--xs-breakpoint:240px;--sm-breakpoint:360px;--md-breakpoint:480px;--lg-breakpoint:768px;--xl-breakpoint:1024px;--2xl-breakpoint:1440px;--3xl-breakpoint:1600px}:where(.--semantic){--theme-color:#ebeff3;--primary-color:#26a9f1;--secondary-color:#76828b;--success-color:#52b766;--danger-color:#ca5553;--warning-color:#ffd985;--info-color:#00d4f8;--color:var(--theme-color);--lightest-color:hsl(from var(--color) h s 95%);--lighter-color:hsl(from var(--color) h s 90%);--light-color:hsl(from var(--color) h s 85%);--rich-color:hsl(from var(--color) h s 55%);--richer-color:hsl(from var(--color) h s 50%);--richest-color:hsl(from var(--color) h s 45%);--dark-color:hsl(from var(--color) h s 15%);--darker-color:hsl(from var(--color) h s 10%);--darkest-color:hsl(from var(--color) h s 5%);--first-color:var(--lightest-color);--second-color:var(--lighter-color);--third-color:var(--light-color);--font-color:oklch(from var(--second-color) calc(1 - l) c h);--vivid-color:oklch(from var(--second-color) calc(l - 0.5) 0.15 h)}@supports (color:color(display-p3 0 0 0%)){:where(.--semantic){--warning-color:#ffd985;--info-color:#00d4f8}@media (color-gamut:p3){:where(.--semantic){--warning-color:color(display-p3 1 0.85113 0.48103);--info-color:color(display-p3 0.34249 0.82025 0.96595)}}}@media (prefers-color-scheme:dark){:where(.--semantic){--first-color:var(--dark-color);--second-color:var(--darker-color);--third-color:var(--darkest-color)}}@media (prefers-color-scheme:dark){:where(.--semantic){--vivid-color:oklch(from var(--second-color) calc(l + 0.5) 0.15 h)}}:root:where(:not(.--semantic)){--2xs-font:clamp(0.475rem,0.7312rem + -0.2562cqi,0.7023rem);--xs-font:clamp(0.6331rem,0.81rem + -0.1769cqi,0.7901rem);--sm-font:clamp(0.844rem,0.8946rem + -0.0506cqi,0.8889rem);--md-font:clamp(1rem,0.9842rem + 0.1408cqi,1.125rem);--lg-font:clamp(1.125rem,1.0775rem + 0.4221cqi,1.4996rem);--xl-font:clamp(1.2656rem,1.1727rem + 0.8263cqi,1.999rem);--2xl-font:clamp(1.4238rem,1.2665rem + 1.3981cqi,2.6647rem);--3xl-font:clamp(1.6018rem,1.3546rem + 2.1974cqi,3.552rem);--4xl-font:clamp(1.802rem,1.4303rem + 3.3045cqi,4.7348rem);--smaller-font:0.75019em;--larger-font:1.333em;--3xs-size:clamp(0.25rem,0.2421rem + 0.0704cqi,0.3125rem);--2xs-size:clamp(0.5rem,0.4921rem + 0.0704cqi,0.5625rem);--xs-size:clamp(0.75rem,0.7342rem + 0.1408cqi,0.875rem);--sm-size:clamp(1rem,0.9842rem + 0.1408cqi,1.125rem);--md-size:clamp(1.5rem,1.4762rem + 0.2113cqi,1.6875rem);--lg-size:clamp(2rem,1.9683rem + 0.2817cqi,2.25rem);--xl-size:clamp(3rem,2.9525rem + 0.4225cqi,3.375rem);--2xl-size:clamp(4rem,3.9366rem + 0.5634cqi,4.5rem);--3xl-size:clamp(6rem,5.9049rem + 0.8451cqi,6.75rem);--3xs-2xs-size:clamp(0.25rem,0.2104rem + 0.3521cqi,0.5625rem);--2xs-xs-size:clamp(0.5rem,0.4525rem + 0.4225cqi,0.875rem);--xs-sm-size:clamp(0.75rem,0.7025rem + 0.4225cqi,1.125rem);--sm-md-size:clamp(1rem,0.9129rem + 0.7746cqi,1.6875rem);--md-lg-size:clamp(1.5rem,1.4049rem + 0.8451cqi,2.25rem);--lg-xl-size:clamp(2rem,1.8257rem + 1.5493cqi,3.375rem);--xl-2xl-size:clamp(3rem,2.8099rem + 1.6901cqi,4.5rem);--2xl-3xl-size:clamp(4rem,3.6514rem + 3.0986cqi,6.75rem);--content-margin-size:clamp(1rem,0.5563rem + 3.9437cqi,4.5rem);--z-underlay:-1000;--z-overlay:1000;--z-dropdown:2000;--z-sticky:3000;--z-fixed:4000;--z-backdrop:5000;--z-modal:6000;--z-popup:7000;--z-tooltip:8000;--z-important:9000}:where(:root,.--semantic){--font:Seravek,"Gill Sans Nova",Ubuntu,Calibri,"DejaVu Sans",source-sans-pro,sans-serif;--monospace-font:ui-monospace,"Cascadia Code","Source Code Pro",Menlo,Consolas,"DejaVu Sans Mono",monospace;--display-font:Avenir,Montserrat,Corbel,"URW Gothic",source-sans-pro,sans-serif;--brand-font:Didot,"Bodoni MT","Noto Serif Display","URW Palladio L",P052,Sylfaen,serif;--font-leading:1.6;--display-font-leading:1.2;--regular-font:400;--thin-font:200;--bold-font:600;--heavy-font:900;--font-scale-ratio:1.125;--2xs-font:max(var(--xs-font)/var(--font-scale-ratio),0.5625rem);--xs-font:max(var(--sm-font)/var(--font-scale-ratio),0.6875rem);--sm-font:max(var(--md-font)/var(--font-scale-ratio),0.8125rem);--md-font:0.875rem;--lg-font:calc(var(--md-font)*var(--font-scale-ratio));--xl-font:calc(var(--lg-font)*var(--font-scale-ratio));--2xl-font:calc(var(--xl-font)*var(--font-scale-ratio));--3xl-font:calc(var(--2xl-font)*var(--font-scale-ratio));--4xl-font:calc(var(--3xl-font)*var(--font-scale-ratio));--smaller-font:calc(1em/var(--font-scale-ratio));--larger-font:calc(1em*var(--font-scale-ratio))}:where(:root,.--semantic):where(.--sm-breakpoint){--font-scale-ratio:1.200}:where(:root,.--semantic):where(.--lg-breakpoint){--font-scale-ratio:1.250}:where(:root,.--semantic):where(.--xl-breakpoint){--font-scale-ratio:1.333}:where(:root,.--semantic):where(.--sm-breakpoint){--md-font:1rem}:where(:root,.--semantic):where(.--2xl-breakpoint){--md-font:1.125rem}:where(.--semantic){--bottom-layer:-1000;--relative-layer:1000;--absolute-layer:2000;--sticky-layer:3000;--fixed-layer:4000;--top-layer:5000}:where(:root,.--semantic){--safe-top:env(safe-area-inset-top);--safe-right:env(safe-area-inset-right);--safe-bottom:env(safe-area-inset-bottom);--safe-left:env(safe-area-inset-left);--safe:var(--safe-top) var(--safe-right) var(--safe-bottom) var(--safe-left);--safe-x:0 var(--safe-right) 0 var(--safe-left);--safe-y:var(--safe-top) 0 var(--safe-bottom) 0;--safe-header:var(--safe-top) var(--safe-right) 0 var(--safe-left);--safe-main:var(--safe-x);--safe-footer:0 var(--safe-right) var(--safe-bottom) var(--safe-left)}:where(:root,.--semantic){--size-scale-ratio:1.618;--3xs-size:calc(var(--2xs-size)/var(--size-scale-ratio));--2xs-size:calc(var(--xs-size)/var(--size-scale-ratio));--xs-size:calc(var(--sm-size)/var(--size-scale-ratio));--sm-size:calc(var(--md-size)/var(--size-scale-ratio));--md-size:1.618rem;--lg-size:calc(var(--md-size)*var(--size-scale-ratio));--xl-size:calc(var(--lg-size)*var(--size-scale-ratio));--2xl-size:calc(var(--xl-size)*var(--size-scale-ratio));--3xl-size:calc(var(--2xl-size)*var(--size-scale-ratio));--responsive-size:var(--sm-size)}:where(:root,.--semantic):where(.--sm-breakpoint){--responsive-size:var(--md-size)}:where(:root,.--semantic):where(.--lg-breakpoint){--responsive-size:var(--lg-size)}:where(:root,.--semantic):where(.--xl-breakpoint){--responsive-size:var(--xl-size)}:where(:root,.--semantic){--swift-timing:75ms;--fast-timing:150ms;--normal-timing:300ms;--steady-timing:500ms;--slow-timing:750ms}'),"undefined"!=typeof window&&addEventListener("DOMContentLoaded",o);export{o as default};
