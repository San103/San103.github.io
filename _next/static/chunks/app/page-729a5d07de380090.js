(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6048:(e,t,a)=>{Promise.resolve().then(a.bind(a,1852))},1852:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>en});var s=a(5289),r=a(8956),l=a(3337),i=a(4677),n=a(2151);function o(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.m6)((0,i.W)(t))}let c=e=>{let{number:t=20}=e,[a,r]=(0,l.useState)([]);return(0,l.useEffect)(()=>{r([...Array(t)].map(()=>({top:-5,left:Math.floor(Math.random()*window.innerWidth)+"px",animationDelay:1*Math.random()+.2+"s",animationDuration:Math.floor(8*Math.random()+2)+"s"})))},[t]),(0,s.jsx)(s.Fragment,{children:[...a].map((e,t)=>(0,s.jsx)("span",{className:o("pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"),style:e,children:(0,s.jsx)("div",{className:"pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent"})},t))})};function d(e){let{children:t,className:a,...r}=e;return(0,s.jsx)("button",{className:o("group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50","before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]","bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]","dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",a),...r,children:t})}function x(e){let{width:t=16,height:a=16,x:r=0,y:i=0,cx:n=1,cy:c=1,cr:d=1,className:x,...h}=e,m=(0,l.useId)();return(0,s.jsxs)("svg",{"aria-hidden":"true",className:o("pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",x),...h,children:[(0,s.jsx)("defs",{children:(0,s.jsx)("pattern",{id:m,width:t,height:a,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse",x:r,y:i,children:(0,s.jsx)("circle",{id:"pattern-circle",cx:n,cy:c,r:d})})}),(0,s.jsx)("rect",{width:"100%",height:"100%",strokeWidth:0,fill:"url(#".concat(m,")")})]})}var h=a(6651),m=a(5063),u=a(6688);let p=e=>{let{children:t,width:a="fit-content",boxColor:r,duration:i}=e,n=(0,h._)(),o=(0,h._)(),c=(0,l.useRef)(null),d=(0,m.Y)(c,{once:!0});return(0,l.useEffect)(()=>{d?(o.start("visible"),n.start("visible")):(o.start("hidden"),n.start("hidden"))},[d,n,o]),(0,s.jsxs)("div",{ref:c,style:{position:"relative",width:a,overflow:"hidden"},children:[(0,s.jsx)(u.E.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",animate:n,transition:{duration:i||.5,delay:.25},children:t}),(0,s.jsx)(u.E.div,{variants:{hidden:{left:0},visible:{left:"100%"}},initial:"hidden",animate:o,transition:{duration:i||.5,ease:"easeIn"},style:{position:"absolute",top:4,bottom:4,left:0,right:0,zIndex:20,background:r||"#5046e6"}})]})},f={src:"/_next/static/media/orange.c693effa.svg",height:181,width:169,blurWidth:0,blurHeight:0},g={src:"/_next/static/media/github.f04dd277.svg",height:96,width:98,blurWidth:0,blurHeight:0},v={src:"/_next/static/media/gradient.1bbe175e.png",height:1232,width:2880,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAACVBMVEVAculFkvBGkfWGEypcAAAAA3RSTlMEFym6TnD4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAF0lEQVR4nGNgYGBgZGJiZAADRhgDxAMAAMwAC59C44EAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},b=e=>{let{id:t,x:a,y:r,color:l,delay:i,scale:n}=e;return(0,s.jsx)(u.E.svg,{className:"pointer-events-none absolute z-20",initial:{opacity:0,left:a,top:r},animate:{opacity:[0,1,0],scale:[0,n,0],rotate:[75,120,150]},transition:{duration:.8,repeat:1/0,delay:i},width:"21",height:"21",viewBox:"0 0 21 21",children:(0,s.jsx)("path",{d:"M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z",fill:l})},t)},j=e=>{let{text:t,colors:a={first:"#9E7AFF",second:"#FE8BBB"},className:r,sparklesCount:i=10,...n}=e,[c,d]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=()=>{let e="".concat(100*Math.random(),"%"),t="".concat(100*Math.random(),"%"),s=Math.random()>.5?a.first:a.second,r=2*Math.random(),l=1*Math.random()+.3,i=10*Math.random()+5;return{id:"".concat(e,"-").concat(t,"-").concat(Date.now()),x:e,y:t,color:s,delay:r,scale:l,lifespan:i}};d(Array.from({length:i},e));let t=setInterval(()=>{d(t=>t.map(t=>t.lifespan<=0?e():{...t,lifespan:t.lifespan-.1}))},100);return()=>clearInterval(t)},[a.first,a.second]),(0,s.jsx)("div",{className:o("text-6xl font-bold",r),...n,style:{"--sparkles-first-color":"".concat(a.first),"--sparkles-second-color":"".concat(a.second)},children:(0,s.jsxs)("span",{className:"relative inline-block",children:[c.map(e=>(0,s.jsx)(b,{...e},e.id)),(0,s.jsx)("strong",{children:t})]})})};var w=a(4631),y=a(1919),N=a(1180),k=a(7969);let A=(0,w.j)("supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex h-[58px] w-max gap-2 rounded-2xl border p-2 backdrop-blur-md"),C=l.forwardRef((e,t)=>{let{className:a,children:r,magnification:i=60,distance:n=140,direction:c="bottom",...d}=e,x=(0,y.c)(1/0);return(0,s.jsx)(u.E.div,{ref:t,onMouseMove:e=>x.set(e.pageX),onMouseLeave:()=>x.set(1/0),...d,className:o(A({className:a}),{"items-start":"top"===c,"items-center":"middle"===c,"items-end":"bottom"===c}),children:l.Children.map(r,e=>l.isValidElement(e)&&e.type===_?l.cloneElement(e,{...e.props,mouseX:x,magnification:i,distance:n}):e)})});C.displayName="Dock";let _=e=>{let{size:t,magnification:a=60,distance:r=140,mouseX:i,className:n,children:c,...d}=e,x=(0,l.useRef)(null),h=(0,N.H)(i,e=>{var t,a;let s=null!==(a=null===(t=x.current)||void 0===t?void 0:t.getBoundingClientRect())&&void 0!==a?a:{x:0,width:0};return e-s.x-s.width/2}),m=(0,N.H)(h,[-r,0,r],[40,a,40]),p=(0,k.q)(m,{mass:.1,stiffness:150,damping:12});return(0,s.jsx)(u.E.div,{ref:x,style:{width:p},className:o("flex aspect-square cursor-pointer items-center justify-center rounded-full",n),...d,children:c})};function L(){return(0,s.jsx)("div",{className:"relative",children:(0,s.jsxs)(C,{direction:"middle",children:[(0,s.jsx)(_,{children:(0,s.jsx)(S.gitHub,{className:"size-6",onClick:()=>window.open("https://github.com/San103","_blank")})}),(0,s.jsx)(_,{children:(0,s.jsx)(S.linkedin,{className:"size-6"})}),(0,s.jsx)(_,{children:(0,s.jsx)(S.x,{className:"size-6"})}),(0,s.jsx)(_,{children:(0,s.jsx)(S.facebook,{className:"size-6"})}),(0,s.jsx)(_,{children:(0,s.jsx)(S.instagram,{className:"size-6"})})]})})}_.displayName="DockIcon";let S={gitHub:e=>(0,s.jsx)("svg",{viewBox:"0 0 438.549 438.549",...e,children:(0,s.jsx)("path",{fill:"#ffff",d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"})}),x:e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",fill:"#ffff",viewBox:"0 0 50 50",...e,children:(0,s.jsx)("path",{d:"M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"})}),linkedin:e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",fill:"#ffff",viewBox:"0 0 50 50",...e,children:(0,s.jsx)("path",{d:"M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"})}),instagram:e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",fill:"#ffff",viewBox:"0 0 50 50",...e,children:(0,s.jsx)("path",{d:"M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"})}),facebook:e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 50 50",fill:"#ffff",...e,children:(0,s.jsx)("path",{d:"M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"})})};var M=a(6058),E=a(7920);let z=function(e){let{width:t=40,height:a=40,x:r=-1,y:i=-1,strokeDasharray:n="0",squares:c,className:d,...x}=e,h=(0,l.useId)();return(0,s.jsxs)("svg",{"aria-hidden":"true",className:o("pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",d),...x,children:[(0,s.jsx)("defs",{children:(0,s.jsx)("pattern",{id:h,width:t,height:a,patternUnits:"userSpaceOnUse",x:r,y:i,children:(0,s.jsx)("path",{d:"M.5 ".concat(a,"V.5H").concat(t),fill:"none",strokeDasharray:n})})}),(0,s.jsx)("rect",{width:"100%",height:"100%",strokeWidth:0,fill:"url(#".concat(h,")")}),c&&(0,s.jsx)("svg",{x:r,y:i,className:"overflow-visible",children:c.map((e,r)=>{let[l,i]=e;return(0,s.jsx)("rect",{strokeWidth:"0",width:t-1,height:a-1,x:l*t+1,y:i*a+1},"".concat(l,"-").concat(i,"-").concat(r))})})]})};var I=a(8060),R=a(2982);let D={containerProps:{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",paddingTop:40}},options:{reverse:!0,depth:1,wheelZoom:!1,imageScale:2,activeCursor:"default",tooltip:"native",initial:[.1,-.1],clickToFront:500,tooltipDelay:0,outlineColour:"#0000",maxSpeed:.04,minSpeed:.02}},B=(e,t)=>(0,R.lB)({icon:e,bgHex:"light"===t?"#f3f2ef":"#080510",fallbackHex:"light"===t?"#6e6e73":"#ffffff",minContrastRatio:"dark"===t?2:1.2,size:42,aProps:{href:void 0,target:void 0,rel:void 0,onClick:e=>e.preventDefault()}});function T(e){let{iconSlugs:t}=e,[a,r]=(0,l.useState)(null),{theme:i}=(0,I.F)(),[n,o]=(0,l.useState)(!1);(0,l.useEffect)(()=>{o(!0),(0,R.qU)({slugs:t}).then(r)},[t]);let c=(0,l.useMemo)(()=>a&&n?Object.values(a.simpleIcons).map(e=>B(e,i||"light")):null,[a,i,n]);return n?(0,s.jsx)(R.ZJ,{...D,children:(0,s.jsx)(s.Fragment,{children:c})}):null}let F=["typescript","javascript","react","android","html5","css3","laravel","vuedotjs","redux","tailwindcss","antdesign","php","apache","adobephotoshop","adobeillustrator","nextdotjs","redis","mariadb","mysql","firebase","nginx","docker","git","github","androidstudio","figma"];function H(){return(0,s.jsx)("div",{className:"flex z-10 size-full max-w-lg items-center justify-center overflow-hidden rounded-lg pb-20",children:(0,s.jsx)(T,{iconSlugs:F})})}let O=e=>{let{children:t,progress:a,range:r}=e,l=(0,N.H)(a,r,[0,1]);return(0,s.jsxs)("span",{className:"xl:lg-3 relative mx-1 lg:mx-2.5",children:[(0,s.jsx)("span",{className:"absolute opacity-30 leading-tight",children:t}),(0,s.jsx)(u.E.span,{style:{opacity:l},className:"text-slate-300 dark:text-white leading-tight",children:t})]})},V=e=>{let{text:t,className:a}=e,r=(0,l.useRef)(null),{scrollYProgress:i}=(0,E.v)({target:r}),n=t.split(" ");return(0,s.jsx)("div",{ref:r,className:o("relative z-0 h-[170vh] ",a),children:(0,s.jsxs)("div",{className:"sticky top-0 mx-auto flex h-[45%] max-w-full items-center bg-transparent px-[1rem] py-[5rem] ",children:[(0,s.jsx)(z,{squares:[[4,4],[5,1],[8,2],[5,3],[5,5],[10,10],[12,15],[15,10],[10,15],[15,10],[10,15],[15,10]],className:o("[mask-image:radial-gradient(450px_circle_at_center,white,transparent)]","inset-x-60 inset-y-[-60%] h-[200%] skew-y-12")}),(0,s.jsxs)("div",{className:"flex items-center justify-center w-full ",children:[(0,s.jsx)("div",{className:"w-full md:w-1/2",children:(0,s.jsx)("p",{ref:r,className:"flex italic flex-wrap p-5 text-2xl font-bold text-black/15 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl",children:n.map((e,t)=>{let a=t/n.length,r=a+1/n.length;return(0,s.jsx)(O,{progress:i,range:[a,r],children:e},t)})})}),(0,s.jsxs)("div",{className:"w-full md:w-1/4 flex justify-center flex-col ",children:[(0,s.jsx)(H,{}),(0,s.jsx)("div",{className:"space-x-3 text-white max-w-96 ",children:(0,s.jsxs)("ul",{className:"list-disc marker:text-red-600 flex flex-wrap space-x-10 leading-relaxed text-sm uppercase justify-center",children:[(0,s.jsx)("li",{children:"Laravel"}),(0,s.jsx)("li",{children:"Vue js"}),(0,s.jsx)("li",{children:"Next js"}),(0,s.jsx)("li",{children:"React js"}),(0,s.jsx)("li",{children:"Typescript"}),(0,s.jsx)("li",{children:"Javascript"}),(0,s.jsx)("li",{children:"Redux"}),(0,s.jsx)("li",{children:"Html5"}),(0,s.jsx)("li",{children:"Github"}),(0,s.jsx)("li",{children:"Tailwind"}),(0,s.jsx)("li",{children:"Php"}),(0,s.jsx)("li",{children:"CSS3"}),(0,s.jsx)("li",{children:"Adobe Photoshop"}),(0,s.jsx)("li",{children:"Adobe Illustrator"})]})})]})]})]})})};var U=a(6867),G=a(2006),W=a(7761);let P=e=>{let{children:t,className:a}=e;return(0,s.jsx)("div",{className:o("grid w-full auto-rows-[22rem] grid-cols-3 gap-4",a),children:t})},Z=e=>{let{name:t,className:a,background:r,Icon:l,description:i,href:n,cta:c}=e;return(0,s.jsxs)("div",{className:o("group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl","transform-gpu bg-black [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",a),children:[(0,s.jsx)("div",{children:r}),(0,s.jsxs)("div",{className:"pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10",children:[(0,s.jsx)(l,{className:"h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"}),(0,s.jsx)("h3",{className:"text-xl font-semibold  text-neutral-300",children:t}),(0,s.jsx)("p",{className:"max-w-lg text-neutral-400",children:i})]}),(0,s.jsx)("div",{className:o("pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"),children:(0,s.jsxs)("a",{href:n,children:[c,(0,s.jsx)(M.LZ3,{className:"ml-2 h-4 w-4"})]})}),(0,s.jsx)("div",{className:"pointer-events-none absolute inset-0 transform-gpu transition-all duration-300  group-hover:bg-neutral-800/10"})]},t)},q=[{Icon:M.zPP,name:"Expense Tracker (React Native)",description:"2022-2023 - A tracker app where users can track their income and expenses and view their income prediction for the next month.",href:"https://github.com/San103/Expense-Tracker-React-Native",cta:"Learn more",className:"col-span-3 lg:col-span-1",background:(0,s.jsx)(function(e){let{className:t,reverse:a,pauseOnHover:r=!1,children:l,vertical:i=!1,repeat:n=4,...c}=e;return(0,s.jsx)("div",{...c,className:o("group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",{"flex-row":!i,"flex-col":i},t),children:Array(n).fill(0).map((e,t)=>(0,s.jsx)("div",{className:o("flex shrink-0 justify-around [gap:var(--gap)]",{"animate-marquee flex-row":!i,"animate-marquee-vertical flex-col":i,"group-hover:[animation-play-state:paused]":r,"[animation-direction:reverse]":a}),children:l},t))})},{pauseOnHover:!0,className:"absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "})},{Icon:G.Z,name:"Bank Reconciliation System Admin Side( React - Typescript )",description:"2023-2024 - Implemented CORS routing for Laravel BRS to track users activity",href:"#",cta:"Learn more",className:"col-span-3 lg:col-span-2"},{Icon:W.Z,name:"GC - Gift Check ( Laravel )",description:"2024 - A system manages gift check transactions for private company",href:"#",cta:"Learn more",className:"col-span-3 lg:col-span-2"},{Icon:M.Que,name:"Rice Identifier - (Java - Python)",description:"2021-2022 - An image processing application made with heart for my capstone project, this was made using Java language in android studio",className:"col-span-3 lg:col-span-1",href:"#",cta:"Learn more"}];function Y(){return(0,s.jsx)(P,{children:q.map((e,t)=>{let{name:a,className:r,background:l,Icon:i,description:n,href:o,cta:c}=e;return(0,s.jsx)(Z,{name:a,className:r,background:l,Icon:i,description:n,href:o,cta:c},t)})})}var J=a(9429);let X={initial:{"--x":"100%",scale:.8},animate:{"--x":"-100%",scale:1},whileTap:{scale:.95},transition:{repeat:1/0,repeatType:"loop",repeatDelay:1,type:"spring",stiffness:20,damping:15,mass:2,scale:{type:"spring",stiffness:200,damping:5,mass:.5}}},K=e=>{let{children:t,className:a,...r}=e;return(0,s.jsxs)(u.E.button,{...X,...r,className:o("relative rounded-lg px-6 py-2 border font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",a),children:[(0,s.jsx)("span",{className:"relative block size-full text-sm uppercase tracking-wide font-light text-[rgb(255,255,255,90%)]",style:{maskImage:"linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))"},children:t}),(0,s.jsx)("span",{style:{mask:"linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",maskComposite:"exclude"},className:"absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"})]})};function Q(e){let{onSubmitSuccess:t,onSubmitError:a}=e,[r,i]=(0,l.useState)(""),[n,o]=(0,l.useState)(""),[c,d]=(0,l.useState)(""),x=(0,J.useRouter)(),h=async e=>{e.preventDefault(),(await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,subject:n,message:c})})).ok?(i(""),o(""),d(""),t(),x.push("/")):a()};return(0,s.jsx)("section",{className:"",id:"contact",children:(0,s.jsxs)("div",{className:"py-8 lg:py-16 px-4 mx-auto max-w-screen-md",children:[(0,s.jsx)("h2",{className:"mb-4 text-4xl tracking-tight font-extrabold text-center text-white",children:"Contact Us"}),(0,s.jsx)("p",{className:"mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl",children:"Feel free to get in touch for project inquiries, collaboration opportunities, or any questions you may have. I’m always excited to connect!"}),(0,s.jsxs)("form",{className:"space-y-8",onSubmit:h,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-300",children:"Your email"}),(0,s.jsx)("input",{value:r,onChange:e=>i(e.target.value),type:"email",id:"email",className:"shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light",placeholder:"iamhandsome@gmail.com",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"subject",className:"block mb-2 text-sm font-medium text-gray-300",children:"Subject"}),(0,s.jsx)("input",{value:n,onChange:e=>o(e.target.value),type:"text",id:"subject",className:"block p-3 w-full text-sm  rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light",placeholder:"Let us know how we can help you",required:!0})]}),(0,s.jsxs)("div",{className:"sm:col-span-2",children:[(0,s.jsx)("label",{htmlFor:"message",className:"block mb-2 text-sm font-medium text-gray-400",children:"Your message"}),(0,s.jsx)("textarea",{value:c,onChange:e=>d(e.target.value),id:"message",rows:6,className:"block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500",placeholder:"Leave a comment..."})]}),(0,s.jsx)(K,{children:"Send Message"})]})]})})}var $=a(2615);let ee=l.memo(e=>{let{className:t,children:a,delay:r=5e3,setStatus:i}=e,[n,o]=(0,l.useState)(!1),[c,d]=(0,l.useState)(!0),x=l.Children.toArray(a);(0,l.useEffect)(()=>{o(!0);let e=setTimeout(()=>{d(!1),o(!1),i()},r);return()=>clearTimeout(e)},[r,i]);let h=(0,l.useMemo)(()=>c&&n?x:[],[c,n,x]);return(0,s.jsx)("div",{className:"flex flex-col items-center gap-4 ".concat(t),children:(0,s.jsx)($.M,{children:h.map(e=>(0,s.jsx)(et,{children:e},e.key))})})});function et(e){let{children:t}=e;return(0,s.jsx)(u.E.div,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1,originY:0},exit:{scale:0,opacity:0},transition:{type:"spring",stiffness:350,damping:40},layout:!0,className:"mx-auto w-full",children:t})}function ea(e){let{status:t,setStatus:a}=e;return(0,s.jsx)("div",{className:"absolute flex justify-center w-full pt-5",children:(0,s.jsx)(ee,{delay:5e3,setStatus:a,children:(0,s.jsx)("figure",{className:o("relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4","transition-all duration-200 ease-in-out hover:scale-[103%]","transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"),children:(0,s.jsxs)("div",{className:"flex flex-row items-center gap-3",children:[(0,s.jsx)("div",{className:"flex size-10 items-center justify-center rounded-2xl",style:{backgroundColor:"success"==t?"#15B392":"#C62E2E"},children:(0,s.jsx)("span",{className:"text-lg",children:"\uD83D\uDCAC"})}),(0,s.jsxs)("div",{className:"flex flex-col overflow-hidden",children:[(0,s.jsx)("figcaption",{className:"flex flex-row items-center whitespace-pre text-lg font-medium text-white ",children:"success"===t?(0,s.jsx)("span",{className:"text-sm sm:text-lg",children:"Submitted SuccessFully!"}):(0,s.jsx)("span",{className:"text-sm sm:text-lg",children:"Submission Failed!"})}),(0,s.jsx)("p",{className:"text-sm font-normal text-white/60",children:"Sent Success"})]})]})})})})}ee.displayName="AnimatedList";let es="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),er=e=>Math.floor(Math.random()*e);function el(e){let{text:t,duration:a=800,framerProps:r={initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:3}},className:i,animateOnLoad:n=!0}=e,[c,d]=(0,l.useState)(t.split("")),[x,h]=(0,l.useState)(!1),m=(0,l.useRef)(0),p=(0,l.useRef)(!0);return(0,l.useEffect)(()=>{let e=setInterval(()=>{if(!n&&p.current){clearInterval(e),p.current=!1;return}m.current<t.length?(d(e=>e.map((e,a)=>" "===e?e:a<=m.current?t[a]:es[er(26)])),m.current=m.current+.1):(h(!1),clearInterval(e))},a/(10*t.length));return()=>clearInterval(e)},[t,a,x,n]),(0,s.jsxs)("span",{className:"overflow-hidden flex cursor-default scale-100",onMouseEnter:()=>{m.current=0,h(!0)},children:["Hi, I'm\xa0",(0,s.jsx)($.M,{mode:"wait",children:c.map((e,t)=>(0,s.jsx)(u.E.h1,{className:o("font-mono"," "===e?"w-3":"",i),...r,children:e.toUpperCase()},t))})]})}let ei=()=>window.open("https://github.com/San103","_blank");function en(){let[e,t]=(0,l.useState)(null);return(0,s.jsxs)("main",{className:"",children:[e&&(0,s.jsx)(ea,{status:e,setStatus:()=>{t(null)}}),(0,s.jsxs)("div",{className:"flex w-full flex-col md:flex-row items-center justify-center md:shadow-xl ",children:[(0,s.jsx)(c,{number:20}),(0,s.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col overflow-hidden h-full justify-center pl-32",children:[(0,s.jsx)(p,{boxColor:"#ffff",duration:.5,children:(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:"text-[3.5rem] font-semibold text-white",children:(0,s.jsx)(el,{className:"text-white",text:"San Palban"})})})}),(0,s.jsx)(p,{boxColor:"#ffff",duration:.5,children:(0,s.jsx)("h2",{className:"mt-[.5rem] text-[1rem]",children:(0,s.jsx)("span",{className:"text-white",children:"FULLSTACK SOFTWARE ENGINEER"})})}),(0,s.jsx)(p,{boxColor:"#ffff",duration:.5,children:(0,s.jsx)("p",{className:"text-white pt-8",children:"As a dedicated software engineer, I design intuitive and user-friendly interfaces that empower businesses to harness the full potential of their data. Our platform provides real-time insights, analytics, and visualizations to help you make informed decisions and drive operational efficiency."})}),(0,s.jsxs)("div",{className:"mt-10 flex space-x-8",children:[(0,s.jsxs)(d,{onClick:ei,children:[" ",(0,s.jsx)(r.default,{className:"mr-3",src:g,alt:"GitHub Logo",width:20,height:20}),"View on Github!"]}),(0,s.jsx)("a",{className:"flex items-center justify-center cursor-pointer",href:"#expertise",children:(0,s.jsxs)("div",{className:o("group rounded-full bg-orange-600 text-base text-white py-3 px-7 flex items-center"),children:[(0,s.jsx)("span",{className:"text-white",children:"✨ Explore More"}),(0,s.jsx)(M.LZ3,{className:"text-white ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"})]})})]})]}),(0,s.jsx)("div",{className:"w-full md:w-1/2 flex flex-col items-center justify-center relative bottom-12 pointer-events-none",children:(0,s.jsxs)("div",{className:"relative w-[800px] h-[50rem]",children:[(0,s.jsx)(r.default,{className:"absolute top-10 rotate-180",src:v,alt:"profile",width:1080,height:90}),(0,s.jsx)(r.default,{className:"absolute top-44 rotate-180",src:v,alt:"profile",width:1080,height:90}),(0,s.jsx)(r.default,{className:"absolute bottom-10 rotate-270",src:v,alt:"profile",width:1080,height:90}),(0,s.jsx)(r.default,{className:"absolute bottom-10 z-0 left-1/2 -translate-x-1/2",src:f,alt:"profile",width:480,height:90}),(0,s.jsx)(x,{className:o("[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]")}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(r.default,{className:"relative left-1/2 -translate-x-1/2 top-0",src:"/images/profile.png",alt:"profile",width:420,height:90,priority:!0}),(0,s.jsxs)("div",{className:"w-full text-center",children:[(0,s.jsx)(j,{text:"INNOVATE",colors:{first:"red",second:"white"},className:"text-white tracking-wider text-7xl"}),(0,s.jsx)("span",{className:"text-white text-xl",children:"BEYOND LIMITS!"})]})]})]})}),(0,s.jsxs)("div",{className:"absolute bottom-0 flex flex-col justify-center items-center space-y-6",children:[(0,s.jsx)(L,{}),(0,s.jsx)(U.Z,{className:"size-8 text-white animate-bounce-slow"})]})]}),(0,s.jsx)("div",{className:"text-sm flex flex-col items-center justify-start min-h-96",id:"expertise",children:(0,s.jsx)(V,{text:'" A passionate software engineer who transforms complex problems into elegant solutions. With expertise in various technologies, I build robust, scalable, and innovative applications that drive growth.\uD83E\uDD70"'})}),(0,s.jsxs)("div",{className:" p-32 flex justify-center items-center flex-col my-32 space-y-10 ",children:[(0,s.jsxs)("div",{className:"text-center space-y-5",children:[(0,s.jsx)("span",{className:"pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10",children:"Projects"}),(0,s.jsx)("p",{className:"text-white/50",children:"Awesome services I offered for my clients"})]}),(0,s.jsx)(Y,{})]}),(0,s.jsx)(Q,{onSubmitSuccess:()=>{t("success")},onSubmitError:()=>{t("error")}})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[792,381,65,793,519,744],()=>t(6048)),_N_E=e.O()}]);