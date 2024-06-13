(function(c,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],r):(c=typeof globalThis<"u"?globalThis:c||self,r(c.Vue3WebComponentWrapper={},c.Vue))})(this,function(c,r){"use strict";var z=Object.defineProperty;var W=(c,r,b)=>r in c?z(c,r,{enumerable:!0,configurable:!0,writable:!0,value:b}):c[r]=b;var f=(c,r,b)=>(W(c,typeof r!="symbol"?r+"":r,b),b);/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */process.env.NODE_ENV!=="production"&&Object.freeze({}),process.env.NODE_ENV!=="production"&&Object.freeze([]);const b=Object.assign,g=Array.isArray,T=e=>typeof e=="string",P=e=>{const l=Object.create(null);return t=>l[t]||(l[t]=e(t))},x=/-(\w)/g,w=P(e=>e.replace(x,(l,t)=>t?t.toUpperCase():"")),D=/\B([A-Z])/g,v=P(e=>e.replace(D,"-$1").toLowerCase()),S=e=>{const l=T(e)?Number(e):NaN;return isNaN(l)?e:l};/*! #__NO_SIDE_EFFECTS__ */function A(e,l,t){const s=r.defineComponent(e);class n extends O{constructor(i){super(s,i,l,t)}}return f(n,"def",s),n}const R=typeof HTMLElement<"u"?HTMLElement:class{};class O extends R{constructor(t,s={},n={shadowRoot:!0},o){super();f(this,"_instance",null);f(this,"_connected",!1);f(this,"_resolved",!1);f(this,"_numberProps",null);f(this,"_styles");f(this,"_slots",{});f(this,"_ob",null);this._def=t,this._props=s,this._config=n,this._root&&o?o(this._createVNode(),this._root):(this._config.shadowRoot!==!1&&this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}get _root(){return this._config.shadowRoot?this.shadowRoot:this}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,r.nextTick(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),r.render(null,this._root),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);this._ob=new MutationObserver(n=>{for(const o of n)this._setAttr(o.attributeName)}),this._ob.observe(this,{attributes:!0});const t=(n,o=!1)=>{const{props:i}=n,u=this._collectNestedStyles(n);let y;if(i&&!g(i))for(const p in i){const _=i[p];(_===Number||_&&_.type===Number)&&(p in this._props&&(this._props[p]=S(this._props[p])),(y||(y=Object.create(null)))[w(p)]=!0)}if(this._numberProps=y,o&&this._resolveProps(n),!this._config.shadowRoot){this._slots={};for(const p of Array.from(this.children)){const _=p.getAttribute("slot")||"default";this._slots[_]||(this._slots[_]=[]),this._slots[_].push(r.h(p.tagName.toLowerCase(),{},p.innerHTML))}this.replaceChildren()}this._applyStyles(u),this._update()},s=this._def.__asyncLoader;s?s().then(n=>t(n,!0)):t(this._def)}_resolveProps(t){const{props:s}=t,n=g(s)?s:Object.keys(s||{});for(const o of Object.keys(this))o[0]!=="_"&&n.includes(o)&&this._setProp(o,this[o],!0,!1);for(const o of n.map(w))Object.defineProperty(this,o,{get(){return this._getProp(o)},set(i){this._setProp(o,i)}})}_setAttr(t){let s=this.hasAttribute(t)?this.getAttribute(t):void 0;const n=w(t);this._numberProps&&this._numberProps[n]&&(s=S(s)),this._setProp(n,s,!1)}_getProp(t){return this._props[t]}_setProp(t,s,n=!0,o=!0){s!==this._props[t]&&(this._props[t]=s,o&&this._instance&&this._update(),n&&(s===!0?this.setAttribute(v(t),""):typeof s=="string"||typeof s=="number"?this.setAttribute(v(t),s+""):s||this.removeAttribute(v(t))))}_update(){r.render(this._createVNode(),this._root)}_createVNode(){const t=r.createVNode(this._def,b({},this._props),this._slots);return this._instance||(t.ce=s=>{this._instance=s,s.isCE=!0;const n=(i,u)=>{this.dispatchEvent(new CustomEvent(i,{detail:u}))};s.emit=(i,...u)=>{n(i,u),v(i)!==i&&n(v(i),u)};let o=this;for(;o=o&&(o.parentNode||o.host);)if(o instanceof O){s.parent=o._instance,s.provides=o._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(s=>{const n=document.createElement("style");n.textContent=s,this._root.appendChild(n)})}_collectNestedStyles(t){let s=t.styles??[];return t.components&&Object.values(t.components).forEach(n=>{s=s.concat(this._collectNestedStyles(n))}),s}}const H=e=>{for(;(e==null?void 0:e.nodeType)!==1;){if(!e.parentElement)throw new Error("No parent element found, the rootComponent must be wrapped in a HTML element (e.g. <template><div> app content </div></template>)");e=e.parentElement}return e};function B(e){return"on"+e.charAt(0).toUpperCase()+e.slice(1)}const V=({rootComponent:e,plugins:l,cssFrameworkStyles:t,VueDefineCustomElement:s,h:n,createApp:o,getCurrentInstance:i,elementName:u,disableRemoveStylesOnUnmount:y,disableShadowDOM:p})=>(p?A:s)({styles:[t],props:{...e.props,modelValue:{type:[String,Number,Boolean,Array,Object]}},emits:e==null?void 0:e.emits,setup(C,{slots:M}){var L;const N=[...(e==null?void 0:e.emits)||[],"update:modelValue"],h=o();if(h.component("app-root",e),e.provide){const a=typeof e.provide=="function"?e.provide():e.provide;Object.keys(a).forEach(d=>{h.provide(d,a[d])})}h.mixin({mounted(){var d;const a=m=>{m!=null&&m.length&&(this.__style=document.createElement("style"),this.__style.innerText=m.join().replace(/\n/g,""),H(this.$el).prepend(this.__style))};if(a((d=this.$)==null?void 0:d.type.styles),this.$options.components)for(const m of Object.values(this.$options.components))a(m.styles)},unmounted(){var a;y||(a=this.__style)==null||a.remove()}}),h.use(l);const E=i();if(Object.assign(E.appContext,h._context),Object.assign(E.provides,h._context.provides),process.env.NODE_ENV==="development"&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__){const a=document.querySelector(u);h._container=a,h._instance=E;const d={Comment:Symbol("v-cmt"),Fragment:Symbol("v-fgt"),Static:Symbol("v-stc"),Text:Symbol("v-txt")};window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("app:init",h,h.version,d),window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue=h}const $=N==null?void 0:N.reduce((a,d)=>{const m=B(d);return a[m]=U=>{E.emit(d,U)},a},{}),K=(L=e==null?void 0:e.namedSlots)==null?void 0:L.reduce((a,d)=>(a[d]=()=>n("slot",{name:d}),a),{});return()=>n(e,{...C,...$},{default:()=>n("slot"),...K,...M})}},p&&{shadowRoot:!1}),j=({elementName:e,rootComponent:l,plugins:t,cssFrameworkStyles:s,VueDefineCustomElement:n,h:o,createApp:i,getCurrentInstance:u,disableRemoveStylesOnUnmount:y=!1,disableShadowDOM:p=!1})=>{if(!l){console.warn("No root component provided. Please provide a root component to create a web component.");return}if(!e){console.warn("No element name provided. Please provide an element name to create a web component.");return}if(!n){console.warn("No VueDefineCustomElement provided. Please provide a VueDefineCustomElement to create a web component.");return}if(!o){console.warn("No h provided. Please provide an h to create a web component.");return}if(!i){console.warn("No createApp provided. Please provide a createApp to create a web component.");return}if(!u){console.warn("No getCurrentInstance provided. Please provide a getCurrentInstance to create a web component.");return}const _=V({rootComponent:l,plugins:t,cssFrameworkStyles:s,VueDefineCustomElement:n,h:o,createApp:i,getCurrentInstance:u,elementName:e,disableRemoveStylesOnUnmount:y,disableShadowDOM:p});customElements.define(e,_)};c.createWebComponent=j,c.default=j,c.defineCustomElement=V,c.defineCustomElementSFC=A,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
