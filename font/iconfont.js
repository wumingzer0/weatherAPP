(function(window){var svgSprite='<svg><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M921.703661 973.32997c-9.824763 0-19.679202-3.756557-27.191292-11.268648L605.889879 673.439856c-11.838629-11.838629-14.662955-29.92659-7.031137-44.799322l4.777817-9.253758c0.690732-1.382487 1.502213-2.734274 2.373047-3.996011 28.364001-41.764196 43.326784-90.61888 43.326784-141.27663 0-138.903583-113.003703-251.906264-251.906264-251.906264-138.872884 0-251.876588 113.003703-251.876588 251.906264 0 138.872884 113.003703 251.876588 251.876588 251.876588 21.272489 0 38.458917 17.216103 38.458917 38.458917s-17.186428 38.458917-38.458917 38.458917c-181.298136 0-328.794421-147.496286-328.794421-328.794421 0-181.298136 147.496286-328.824097 328.794421-328.824097 181.328835 0 328.824097 147.526985 328.824097 328.824097 0 58.769498-15.473413 115.737978-44.949748 165.975149l267.591501 267.590478c15.023158 15.023158 15.023158 39.36045 0 54.383608C941.383886 969.573413 931.528424 973.32997 921.703661 973.32997z"  ></path></symbol><symbol id="icon-sousuo1" viewBox="0 0 1024 1024"><path d="M711.703273 678.795636l165.841454 165.841455a23.249455 23.249455 0 1 1-32.907636 32.907636l-165.841455-165.841454A324.561455 324.561455 0 0 1 465.454545 791.272727c-179.944727 0-325.818182-145.873455-325.818181-325.818182S285.509818 139.636364 465.454545 139.636364s325.818182 145.873455 325.818182 325.818181c0 81.594182-29.998545 156.183273-79.569454 213.341091zM465.454545 744.727273c154.228364 0 279.272727-125.044364 279.272728-279.272728S619.682909 186.181818 465.454545 186.181818 186.181818 311.226182 186.181818 465.454545s125.044364 279.272727 279.272727 279.272728z" fill="#21A3DD" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)