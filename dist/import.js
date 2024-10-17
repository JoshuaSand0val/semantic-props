function o(o,r){void 0===r&&(r={});var c=r.insertAt;if(o&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===c&&e.firstChild?e.insertBefore(a,e.firstChild):e.appendChild(a),a.styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o))}}function r(o){const r=["--2xs-breakpoint","--xs-breakpoint","--sm-breakpoint","--md-breakpoint","--lg-breakpoint","--xl-breakpoint","--2xl-breakpoint","--3xl-breakpoint"],c=(()=>{const c=o.getAttribute("style")??"";o.style.backgroundImage=r.map((()=>"linear-gradient(#0000, #0000)")).join(","),o.style.backgroundSize=r.map((o=>`var(${o})`)).join(",");const e=getComputedStyle(o).getPropertyValue("background-size").split(",");return o.setAttribute("style",c),e.map((o=>parseInt(o)))})();new ResizeObserver((e=>{for(const a of e){const e=a.borderBoxSize[0].inlineSize;for(let a=0;a<r.length;a++)o.classList.toggle(r[a],e>=c[a])}})).observe(o)}function c(o){const r=matchMedia("(prefers-color-scheme: dark)"),c=()=>{const c=getComputedStyle(o).getPropertyValue("color-scheme");return/normal|(?=.*light)(?=.*dark)/.test(c)?r.matches:/dark/.test(c)},e=()=>{o.classList.remove(c()?"--light-color":"--dark-color"),o.classList.add(c()?"--dark-color":"--light-color")};r.addEventListener("change",e),e()}
/**
 * Activates Semantic Props elements, adding custom property classes.
 * @type {Function}
 * @preserve
 */function e(){const o=o=>{for(const e of[o,...o.getElementsByTagName("*")])e.matches(".--semantic")&&(r(e),c(e))};o(document.documentElement),new MutationObserver((r=>{for(const{target:c,oldValue:e}of r)e&&e.includes("--semantic")||o(c)})).observe(document.documentElement,{subtree:!0,childList:!0,attributeFilter:["class"],attributeOldValue:!0})}o(':where(:root,.--semantic){--2xs-breakpoint:180px;--xs-breakpoint:240px;--sm-breakpoint:360px;--md-breakpoint:480px;--lg-breakpoint:768px;--xl-breakpoint:1024px;--2xl-breakpoint:1440px;--3xl-breakpoint:1600px}:where(:root,.--semantic){--theme-color:#e9eff5;--primary-color:#26a9f1;--secondary-color:#76828b;--success-color:#52b766;--danger-color:#ca5553;--warning-color:#ffd985;--info-color:#00d4f8;--1st-bg-color-lightness:1.00;--2nd-bg-color-lightness:0.95;--3rd-bg-color-lightness:0.90;--1st-color-lightness:0.55;--2nd-color-lightness:0.45;--3rd-color-lightness:0.35;--text-color:var(--theme-color-900);--theme-color-50:oklch(from var(--theme-color) 95% c h);--theme-color-100:oklch(from var(--theme-color) 90% c h);--theme-color-200:oklch(from var(--theme-color) 80% c h);--theme-color-300:oklch(from var(--theme-color) 70% c h);--theme-color-400:oklch(from var(--theme-color) 60% c h);--theme-color-500:oklch(from var(--theme-color) 50% c h);--theme-color-600:oklch(from var(--theme-color) 40% c h);--theme-color-700:oklch(from var(--theme-color) 30% c h);--theme-color-800:oklch(from var(--theme-color) 20% c h);--theme-color-900:oklch(from var(--theme-color) 10% c h);--theme-color-950:oklch(from var(--theme-color) 5% c h);--1st-theme-bg-color:oklch(from var(--theme-color) var(--1st-bg-color-lightness) c h);--2nd-theme-bg-color:oklch(from var(--theme-color) var(--2nd-bg-color-lightness) c h);--3rd-theme-bg-color:oklch(from var(--theme-color) var(--3rd-bg-color-lightness) c h);--1st-theme-color:oklch(from var(--theme-color) var(--1st-color-lightness) c h);--2nd-theme-color:oklch(from var(--theme-color) var(--2nd-color-lightness) c h);--3rd-theme-color:oklch(from var(--theme-color) var(--3rd-color-lightness) c h);--primary-color-50:oklch(from var(--primary-color) 95% c h);--primary-color-100:oklch(from var(--primary-color) 90% c h);--primary-color-200:oklch(from var(--primary-color) 80% c h);--primary-color-300:oklch(from var(--primary-color) 70% c h);--primary-color-400:oklch(from var(--primary-color) 60% c h);--primary-color-500:oklch(from var(--primary-color) 50% c h);--primary-color-600:oklch(from var(--primary-color) 40% c h);--primary-color-700:oklch(from var(--primary-color) 30% c h);--primary-color-800:oklch(from var(--primary-color) 20% c h);--primary-color-900:oklch(from var(--primary-color) 10% c h);--primary-color-950:oklch(from var(--primary-color) 5% c h);--1st-primary-bg-color:oklch(from var(--primary-color) var(--1st-bg-color-lightness) c h);--2nd-primary-bg-color:oklch(from var(--primary-color) var(--2nd-bg-color-lightness) c h);--3rd-primary-bg-color:oklch(from var(--primary-color) var(--3rd-bg-color-lightness) c h);--1st-primary-color:oklch(from var(--primary-color) var(--1st-color-lightness) c h);--2nd-primary-color:oklch(from var(--primary-color) var(--2nd-color-lightness) c h);--3rd-primary-color:oklch(from var(--primary-color) var(--3rd-color-lightness) c h);--secondary-color-50:oklch(from var(--secondary-color) 95% c h);--secondary-color-100:oklch(from var(--secondary-color) 90% c h);--secondary-color-200:oklch(from var(--secondary-color) 80% c h);--secondary-color-300:oklch(from var(--secondary-color) 70% c h);--secondary-color-400:oklch(from var(--secondary-color) 60% c h);--secondary-color-500:oklch(from var(--secondary-color) 50% c h);--secondary-color-600:oklch(from var(--secondary-color) 40% c h);--secondary-color-700:oklch(from var(--secondary-color) 30% c h);--secondary-color-800:oklch(from var(--secondary-color) 20% c h);--secondary-color-900:oklch(from var(--secondary-color) 10% c h);--secondary-color-950:oklch(from var(--secondary-color) 5% c h);--1st-secondary-bg-color:oklch(from var(--secondary-color) var(--1st-bg-color-lightness) c h);--2nd-secondary-bg-color:oklch(from var(--secondary-color) var(--2nd-bg-color-lightness) c h);--3rd-secondary-bg-color:oklch(from var(--secondary-color) var(--3rd-bg-color-lightness) c h);--1st-secondary-color:oklch(from var(--secondary-color) var(--1st-color-lightness) c h);--2nd-secondary-color:oklch(from var(--secondary-color) var(--2nd-color-lightness) c h);--3rd-secondary-color:oklch(from var(--secondary-color) var(--3rd-color-lightness) c h);--success-color-50:oklch(from var(--success-color) 95% c h);--success-color-100:oklch(from var(--success-color) 90% c h);--success-color-200:oklch(from var(--success-color) 80% c h);--success-color-300:oklch(from var(--success-color) 70% c h);--success-color-400:oklch(from var(--success-color) 60% c h);--success-color-500:oklch(from var(--success-color) 50% c h);--success-color-600:oklch(from var(--success-color) 40% c h);--success-color-700:oklch(from var(--success-color) 30% c h);--success-color-800:oklch(from var(--success-color) 20% c h);--success-color-900:oklch(from var(--success-color) 10% c h);--success-color-950:oklch(from var(--success-color) 5% c h);--1st-success-bg-color:oklch(from var(--success-color) var(--1st-bg-color-lightness) c h);--2nd-success-bg-color:oklch(from var(--success-color) var(--2nd-bg-color-lightness) c h);--3rd-success-bg-color:oklch(from var(--success-color) var(--3rd-bg-color-lightness) c h);--1st-success-color:oklch(from var(--success-color) var(--1st-color-lightness) c h);--2nd-success-color:oklch(from var(--success-color) var(--2nd-color-lightness) c h);--3rd-success-color:oklch(from var(--success-color) var(--3rd-color-lightness) c h);--danger-color-50:oklch(from var(--danger-color) 95% c h);--danger-color-100:oklch(from var(--danger-color) 90% c h);--danger-color-200:oklch(from var(--danger-color) 80% c h);--danger-color-300:oklch(from var(--danger-color) 70% c h);--danger-color-400:oklch(from var(--danger-color) 60% c h);--danger-color-500:oklch(from var(--danger-color) 50% c h);--danger-color-600:oklch(from var(--danger-color) 40% c h);--danger-color-700:oklch(from var(--danger-color) 30% c h);--danger-color-800:oklch(from var(--danger-color) 20% c h);--danger-color-900:oklch(from var(--danger-color) 10% c h);--danger-color-950:oklch(from var(--danger-color) 5% c h);--1st-danger-bg-color:oklch(from var(--danger-color) var(--1st-bg-color-lightness) c h);--2nd-danger-bg-color:oklch(from var(--danger-color) var(--2nd-bg-color-lightness) c h);--3rd-danger-bg-color:oklch(from var(--danger-color) var(--3rd-bg-color-lightness) c h);--1st-danger-color:oklch(from var(--danger-color) var(--1st-color-lightness) c h);--2nd-danger-color:oklch(from var(--danger-color) var(--2nd-color-lightness) c h);--3rd-danger-color:oklch(from var(--danger-color) var(--3rd-color-lightness) c h);--warning-color-50:oklch(from var(--warning-color) 95% c h);--warning-color-100:oklch(from var(--warning-color) 90% c h);--warning-color-200:oklch(from var(--warning-color) 80% c h);--warning-color-300:oklch(from var(--warning-color) 70% c h);--warning-color-400:oklch(from var(--warning-color) 60% c h);--warning-color-500:oklch(from var(--warning-color) 50% c h);--warning-color-600:oklch(from var(--warning-color) 40% c h);--warning-color-700:oklch(from var(--warning-color) 30% c h);--warning-color-800:oklch(from var(--warning-color) 20% c h);--warning-color-900:oklch(from var(--warning-color) 10% c h);--warning-color-950:oklch(from var(--warning-color) 5% c h);--1st-warning-bg-color:oklch(from var(--warning-color) var(--1st-bg-color-lightness) c h);--2nd-warning-bg-color:oklch(from var(--warning-color) var(--2nd-bg-color-lightness) c h);--3rd-warning-bg-color:oklch(from var(--warning-color) var(--3rd-bg-color-lightness) c h);--1st-warning-color:oklch(from var(--warning-color) var(--1st-color-lightness) c h);--2nd-warning-color:oklch(from var(--warning-color) var(--2nd-color-lightness) c h);--3rd-warning-color:oklch(from var(--warning-color) var(--3rd-color-lightness) c h);--info-color-50:oklch(from var(--info-color) 95% c h);--info-color-100:oklch(from var(--info-color) 90% c h);--info-color-200:oklch(from var(--info-color) 80% c h);--info-color-300:oklch(from var(--info-color) 70% c h);--info-color-400:oklch(from var(--info-color) 60% c h);--info-color-500:oklch(from var(--info-color) 50% c h);--info-color-600:oklch(from var(--info-color) 40% c h);--info-color-700:oklch(from var(--info-color) 30% c h);--info-color-800:oklch(from var(--info-color) 20% c h);--info-color-900:oklch(from var(--info-color) 10% c h);--info-color-950:oklch(from var(--info-color) 5% c h);--1st-info-bg-color:oklch(from var(--info-color) var(--1st-bg-color-lightness) c h);--2nd-info-bg-color:oklch(from var(--info-color) var(--2nd-bg-color-lightness) c h);--3rd-info-bg-color:oklch(from var(--info-color) var(--3rd-bg-color-lightness) c h);--1st-info-color:oklch(from var(--info-color) var(--1st-color-lightness) c h);--2nd-info-color:oklch(from var(--info-color) var(--2nd-color-lightness) c h);--3rd-info-color:oklch(from var(--info-color) var(--3rd-color-lightness) c h)}@supports (color:color(display-p3 0 0 0%)){:where(:root,.--semantic){--warning-color:#ffd985;--info-color:#00d4f8}@media (color-gamut:p3){:where(:root,.--semantic){--warning-color:color(display-p3 1 0.85113 0.48103);--info-color:color(display-p3 0.34249 0.82025 0.96595)}}}:where(:root,.--semantic):where(.--dark-color){--1st-bg-color-lightness:0.25;--2nd-bg-color-lightness:0.20;--3rd-bg-color-lightness:0.15}:where(:root,.--semantic):where(.--dark-color){--1st-color-lightness:0.85;--2nd-color-lightness:0.75;--3rd-color-lightness:0.65}:where(:root,.--semantic):where(.--dark-color){--text-color:var(--theme-color-100)}:root:where(:not(.--semantic)){--2xs-font:clamp(0.475rem,0.7312rem + -0.2562cqi,0.7023rem);--xs-font:clamp(0.6331rem,0.81rem + -0.1769cqi,0.7901rem);--sm-font:clamp(0.844rem,0.8946rem + -0.0506cqi,0.8889rem);--md-font:clamp(1rem,0.9842rem + 0.1408cqi,1.125rem);--lg-font:clamp(1.125rem,1.0775rem + 0.4221cqi,1.4996rem);--xl-font:clamp(1.2656rem,1.1727rem + 0.8263cqi,1.999rem);--2xl-font:clamp(1.4238rem,1.2665rem + 1.3981cqi,2.6647rem);--3xl-font:clamp(1.6018rem,1.3546rem + 2.1974cqi,3.552rem);--4xl-font:clamp(1.802rem,1.4303rem + 3.3045cqi,4.7348rem);--smaller-font:0.75019em;--larger-font:1.333em;--3xs-size:clamp(0.25rem,0.2421rem + 0.0704cqi,0.3125rem);--2xs-size:clamp(0.5rem,0.4921rem + 0.0704cqi,0.5625rem);--xs-size:clamp(0.75rem,0.7342rem + 0.1408cqi,0.875rem);--sm-size:clamp(1rem,0.9842rem + 0.1408cqi,1.125rem);--md-size:clamp(1.5rem,1.4762rem + 0.2113cqi,1.6875rem);--lg-size:clamp(2rem,1.9683rem + 0.2817cqi,2.25rem);--xl-size:clamp(3rem,2.9525rem + 0.4225cqi,3.375rem);--2xl-size:clamp(4rem,3.9366rem + 0.5634cqi,4.5rem);--3xl-size:clamp(6rem,5.9049rem + 0.8451cqi,6.75rem);--3xs-2xs-size:clamp(0.25rem,0.2104rem + 0.3521cqi,0.5625rem);--2xs-xs-size:clamp(0.5rem,0.4525rem + 0.4225cqi,0.875rem);--xs-sm-size:clamp(0.75rem,0.7025rem + 0.4225cqi,1.125rem);--sm-md-size:clamp(1rem,0.9129rem + 0.7746cqi,1.6875rem);--md-lg-size:clamp(1.5rem,1.4049rem + 0.8451cqi,2.25rem);--lg-xl-size:clamp(2rem,1.8257rem + 1.5493cqi,3.375rem);--xl-2xl-size:clamp(3rem,2.8099rem + 1.6901cqi,4.5rem);--2xl-3xl-size:clamp(4rem,3.6514rem + 3.0986cqi,6.75rem);--content-margin-size:clamp(1rem,0.5563rem + 3.9437cqi,4.5rem);--z-underlay:-1000;--z-overlay:1000;--z-dropdown:2000;--z-sticky:3000;--z-fixed:4000;--z-backdrop:5000;--z-modal:6000;--z-popup:7000;--z-tooltip:8000;--z-important:9000}:where(:root,.--semantic){--font:Seravek,"Gill Sans Nova",Ubuntu,Calibri,"DejaVu Sans",source-sans-pro,sans-serif;--monospace-font:ui-monospace,"Cascadia Code","Source Code Pro",Menlo,Consolas,"DejaVu Sans Mono",monospace;--display-font:Avenir,Montserrat,Corbel,"URW Gothic",source-sans-pro,sans-serif;--brand-font:Didot,"Bodoni MT","Noto Serif Display","URW Palladio L",P052,Sylfaen,serif;--font-leading:1.6;--display-font-leading:1.2;--regular-font:400;--thin-font:200;--bold-font:600;--heavy-font:900;--font-scale-ratio:1.125;--2xs-font:max(var(--xs-font)/var(--font-scale-ratio),0.5625rem);--xs-font:max(var(--sm-font)/var(--font-scale-ratio),0.6875rem);--sm-font:max(var(--md-font)/var(--font-scale-ratio),0.8125rem);--md-font:0.875rem;--lg-font:calc(var(--md-font)*var(--font-scale-ratio));--xl-font:calc(var(--lg-font)*var(--font-scale-ratio));--2xl-font:calc(var(--xl-font)*var(--font-scale-ratio));--3xl-font:calc(var(--2xl-font)*var(--font-scale-ratio));--4xl-font:calc(var(--3xl-font)*var(--font-scale-ratio));--smaller-font:calc(1em/var(--font-scale-ratio));--larger-font:calc(1em*var(--font-scale-ratio))}:where(:root,.--semantic):where(.--sm-breakpoint){--font-scale-ratio:1.200}:where(:root,.--semantic):where(.--lg-breakpoint){--font-scale-ratio:1.250}:where(:root,.--semantic):where(.--xl-breakpoint){--font-scale-ratio:1.333}:where(:root,.--semantic):where(.--sm-breakpoint){--md-font:1rem}:where(:root,.--semantic):where(.--2xl-breakpoint){--md-font:1.125rem}:where(.--semantic){--bottom-layer:-1000;--relative-layer:1000;--absolute-layer:2000;--sticky-layer:3000;--fixed-layer:4000;--top-layer:5000}:where(:root,.--semantic){--safe-top:env(safe-area-inset-top);--safe-right:env(safe-area-inset-right);--safe-bottom:env(safe-area-inset-bottom);--safe-left:env(safe-area-inset-left);--safe:var(--safe-top) var(--safe-right) var(--safe-bottom) var(--safe-left);--safe-x:0 var(--safe-right) 0 var(--safe-left);--safe-y:var(--safe-top) 0 var(--safe-bottom) 0;--safe-header:var(--safe-top) var(--safe-right) 0 var(--safe-left);--safe-main:var(--safe-x);--safe-footer:0 var(--safe-right) var(--safe-bottom) var(--safe-left)}:where(:root,.--semantic){--size-scale-ratio:1.618;--3xs-size:calc(var(--2xs-size)/var(--size-scale-ratio));--2xs-size:calc(var(--xs-size)/var(--size-scale-ratio));--xs-size:calc(var(--sm-size)/var(--size-scale-ratio));--sm-size:calc(var(--md-size)/var(--size-scale-ratio));--md-size:1.618rem;--lg-size:calc(var(--md-size)*var(--size-scale-ratio));--xl-size:calc(var(--lg-size)*var(--size-scale-ratio));--2xl-size:calc(var(--xl-size)*var(--size-scale-ratio));--3xl-size:calc(var(--2xl-size)*var(--size-scale-ratio));--responsive-size:var(--sm-size)}:where(:root,.--semantic):where(.--sm-breakpoint){--responsive-size:var(--md-size)}:where(:root,.--semantic):where(.--lg-breakpoint){--responsive-size:var(--lg-size)}:where(:root,.--semantic):where(.--xl-breakpoint){--responsive-size:var(--xl-size)}:where(:root,.--semantic){--swift-timing:75ms;--fast-timing:150ms;--normal-timing:300ms;--steady-timing:500ms;--slow-timing:750ms}'),"undefined"!=typeof window&&addEventListener("DOMContentLoaded",e);o(":where(.--semantic){--theme-color:#e9eff5;--primary-color:#26a9f1;--secondary-color:#76828b;--success-color:#52b766;--danger-color:#de3b40;--warning-color:#ebb517;--info-color:#00d4f8;--color:var(--theme-color);--color-50:oklch(from var(--color) 95% c h);--color-100:oklch(from var(--color) 90% c h);--color-200:oklch(from var(--color) 80% c h);--color-300:oklch(from var(--color) 70% c h);--color-400:oklch(from var(--color) 60% c h);--color-500:oklch(from var(--color) 50% c h);--color-600:oklch(from var(--color) 40% c h);--color-700:oklch(from var(--color) 30% c h);--color-800:oklch(from var(--color) 20% c h);--color-900:oklch(from var(--color) 10% c h);--color-950:oklch(from var(--color) 5% c h);--text-color:oklch(from var(--color) 10% 0.01 h);--lightest-ui-color:var(--color-50);--lighter-ui-color:var(--color-100);--light-ui-color:var(--color-200);--lightest-color:var(--color-300);--lighter-color:var(--color-400);--light-color:var(--color-500);--dark-ui-color:var(--color-800);--darker-ui-color:var(--color-900);--darkest-ui-color:var(--color-950);--dark-color:var(--color-500);--darker-color:var(--color-600);--darkest-color:var(--color-700);--1st-ui-color:var(--lightest-ui-color);--2nd-ui-color:var(--lighter-ui-color);--3rd-ui-color:var(--light-ui-color);--1st-color:var(--dark-color);--2nd-color:var(--darker-color);--3rd-color:var(--darkest-color)}@supports (color:color(display-p3 0 0 0%)){:where(.--semantic){--info-color:#00d4f8}@media (color-gamut:p3){:where(.--semantic){--info-color:color(display-p3 0.34249 0.82025 0.96595)}}}@media (prefers-color-scheme:dark){:where(.--semantic){--text-color:oklch(from var(--color) 90% 0.01 h)}}@media (prefers-color-scheme:dark){:where(.--semantic){--1st-ui-color:var(--dark-ui-color);--2nd-ui-color:var(--darker-ui-color);--3rd-ui-color:var(--darkest-ui-color);--1st-color:var(--lightest-color);--2nd-color:var(--lighter-color);--3rd-color:var(--light-color)}}");o(":where(.--semantic){--2xs-container:180px;--xs-container:240px;--sm-container:360px;--md-container:480px;--lg-container:768px;--xl-container:1024px;--2xl-container:1440px;--3xl-container:1600px;--4xl-container:1920px}");var a=(o,r,c)=>`calc(${o} + (${r} - ${o}) * ${c})`,l="undefined"==typeof window?()=>{}:o=>{const r=(()=>{const o=document.createElement("style");return document.head.append(o),o.sheet})(),c=r.cssRules[r.insertRule(":where(.--semantic) {}")];for(const[r,e]of Object.entries(o))"function"==typeof e?e((o=>{c.style.setProperty(r,`${o}`)})):c.style.setProperty(r,`${e}`)};const s={},t={"3xs":0,"2xs":180,xs:240,sm:360,md:480,lg:768,xl:1024,"2xl":1440,"3xl":1600,"4xl":1920},n=(o,r,c)=>Math.min(Math.max((r-o)/(c-o),0),1);for(const[o,r]of Object.entries(t))for(const[c,e]of Object.entries(t))r>=e||Object.assign(s,{[`--inline-${o}-to-${c}`](o){addEventListener("resize",(()=>o(n(r,innerWidth,e)))),dispatchEvent(new Event("resize"))},[`--block-${o}-to-${c}`](o){addEventListener("resize",(()=>o(n(r,innerHeight,e)))),dispatchEvent(new Event("resize"))}});l(s),l({"--font":"Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif","--monospace-font":"ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace","--display-font":"Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif","--brand-font":"Didot, 'Bodoni MT', 'Noto Serif Display', 'URW Palladio L', P052, Sylfaen, serif","--font-leading":1.6,"--display-font-leading":1.2,"--regular-font":400,"--thin-font":200,"--bold-font":600,"--heavy-font":900,"--font-scale-ratio":a(1.125,1.333,"var(--inline-3xs-to-2xl)"),"--2xs-font":"max(var(--xs-font) / var(--font-scale-ratio), 0.5625rem)","--xs-font":"max(var(--sm-font) / var(--font-scale-ratio), 0.6875rem)","--sm-font":"max(var(--md-font) / var(--font-scale-ratio), 0.8125rem)","--md-font":a("0.875rem","1.125rem","var(--inline-3xs-to-2xl)"),"--lg-font":"calc(var(--md-font) * var(--font-scale-ratio))","--xl-font":"calc(var(--lg-font) * var(--font-scale-ratio))","--2xl-font":"calc(var(--xl-font) * var(--font-scale-ratio))","--3xl-font":"calc(var(--2xl-font) * var(--font-scale-ratio))","--4xl-font":"calc(var(--3xl-font) * var(--font-scale-ratio))","--smaller-font":"calc(1em / var(--font-scale-ratio))","--larger-font":"calc(1em * var(--font-scale-ratio))"});o(":where(.--semantic){--bottom-layer:-1000;--relative-layer:1000;--absolute-layer:2000;--sticky-layer:3000;--fixed-layer:4000;--top-layer:5000}"),l({"--pointer-x"(o){addEventListener("pointermove",(r=>o(`${r.clientX}px`)))},"--pointer-y"(o){addEventListener("pointermove",(r=>o(`${r.clientY}px`)))}});o(":where(.--semantic){--safe-top:env(safe-area-inset-top);--safe-right:env(safe-area-inset-right);--safe-bottom:env(safe-area-inset-bottom);--safe-left:env(safe-area-inset-left);--safe:var(--safe-top) var(--safe-right) var(--safe-bottom) var(--safe-left);--safe-x:0 var(--safe-right) 0 var(--safe-left);--safe-y:var(--safe-top) 0 var(--safe-bottom) 0;--safe-header:var(--safe-top) var(--safe-right) 0 var(--safe-left);--safe-main:var(--safe-x);--safe-footer:0 var(--safe-right) var(--safe-bottom) var(--safe-left)}"),l({"--size-scale-ratio":1.618,"--3xs-size":"calc(var(--2xs-size) / var(--size-scale-ratio))","--2xs-size":"calc(var(--xs-size) / var(--size-scale-ratio))","--xs-size":"calc(var(--sm-size) / var(--size-scale-ratio))","--sm-size":"calc(var(--md-size) / var(--size-scale-ratio))","--md-size":"1.618rem","--lg-size":"calc(var(--md-size) * var(--size-scale-ratio))","--xl-size":"calc(var(--lg-size) * var(--size-scale-ratio))","--2xl-size":"calc(var(--xl-size) * var(--size-scale-ratio))","--3xl-size":"calc(var(--2xl-size) * var(--size-scale-ratio))","--responsive-size":a("var(--3xs-size)","var(--xl-size)","var(--inline-3xs-to-2xl)")});o(":where(.--semantic){--swift-time:75ms;--fast-time:150ms;--normal-time:300ms;--steady-time:500ms;--slow-time:750ms}");export{e as default};
