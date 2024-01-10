/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(i,t,s)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,$=u.trustedTypes,m=$?$.emptyScript:"",f=u.reactiveElementPolyfillSupport,_=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},g=(t,e)=>!a(t,e),A={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:g};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&h(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const n=i?.call(this);o.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),o=t.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i,this[i]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??g)(i?o:this[t],e))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[_("elementProperties")]=new Map,b[_("finalized")]=new Map,f?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const v=globalThis,E=v.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,C="?"+w,P=`<${C}>`,H=document,T=()=>H.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,k="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,O=/>/g,j=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,z=/"/g,I=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),D=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),W=new WeakMap,V=H.createTreeWalker(H,129);function Y(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":"",r=R;for(let e=0;e<s;e++){const s=t[e];let a,h,c=-1,l=0;for(;l<s.length&&(r.lastIndex=l,h=r.exec(s),null!==h);)l=r.lastIndex,r===R?"!--"===h[1]?r=N:void 0!==h[1]?r=O:void 0!==h[2]?(I.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=j):void 0!==h[3]&&(r=j):r===j?">"===h[0]?(r=o??R,c=-1):void 0===h[1]?c=-2:(c=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?j:'"'===h[3]?z:L):r===z||r===L?r=j:r===N||r===O?r=R:(r=j,o=void 0);const d=r===j&&t[e+1].startsWith("/>")?" ":"";n+=r===R?s+P:c>=0?(i.push(a),s.slice(0,c)+x+s.slice(c)+w+d):s+w+(-2===c?e:d)}return[Y(t,n+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[h,c]=J(t,e);if(this.el=K.createElement(h,s),V.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=V.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(x)){const e=c[n++],s=i.getAttribute(t).split(w),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?Q:"?"===r[1]?tt:"@"===r[1]?et:G}),i.removeAttribute(t)}else t.startsWith(w)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(I.test(i.tagName)){const t=i.textContent.split(w),e=t.length-1;if(e>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),V.nextNode(),a.push({type:2,index:++o});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(w,t+1));)a.push({type:7,index:o}),t+=w.length-1}o++}}static createElement(t,e){const s=H.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===D)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const n=U(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=X(t,o._$AS(t,e.values),o,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??H).importNode(e,!0);V.currentNode=i;let o=V.nextNode(),n=0,r=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new F(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=s[++r]}n!==a?.index&&(o=V.nextNode(),n++)}return V.currentNode=H,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class F{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),U(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==D&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==q&&U(this._$AH)?this._$AA.nextSibling.data=t:this.$(H.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(Y(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Z(i,this),s=t.u(this.options);t.p(e),this.$(s),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new K(t)),e}T(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new F(this.k(T()),this.k(T()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=X(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==D,n&&(this._$AH=t);else{const i=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=X(this,i[s+r],e,r),a===D&&(a=this._$AH[r]),n||=!U(a)||a!==this._$AH[r],a===q?t=q:t!==q&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!i&&this.O(t)}O(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends G{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===q?void 0:t}}class tt extends G{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class et extends G{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??q)===D)return;const s=this._$AH,i=t===q&&s!==q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==q&&(s===q||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const it=v.litHtmlPolyfillSupport;it?.(K,F),(v.litHtmlVersions??=[]).push("3.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ot extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new F(e.insertBefore(T(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}}ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.0.2");class rt extends ot{static styles=n`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; 
      background-color: black;
    }

    .container {
      position: relative;
    }

    .honeycomb-container, .arc-container {
      position: absolute;
      bottom: 15px;
      right: 16px;
      left: 150px;
      transform: translateX(-100%);
  }

    .message-example {
      font-size: 40px;
      cursor: pointer;
      transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
      color: #fff;
      background-color: #505050;
      border-radius: 10px;
      padding: 15px;
      position: relative;
    }

    .message-example:hover {
      transform: translateY(-10px);
      color: #ff8c00; /* Change color on hover */
    }

    .honeycomb-emoji {
      font-size: 24px;
      position: absolute;
      display: none;
      transition: transform 0.25s ease-in-out; /* Adjust the duration as needed */
    }

    .honeycomb-container.show-honeycomb .honeycomb-emoji {
      display: block;
      width: 25px;
      height: 25px;
      background-color: rgba(255, 255, 255, 0.5);
      border: 0.5px solid rgba(255, 255, 255, 0.3);
      border-radius: 100%;
      margin: 5px;
      padding-left: 4px;
      font-size: 16px;
      cursor: pointer;
      text-align: center;
    }

    .arc-emoji {
      font-size: 16px;
      position: absolute;
      opacity: 0; /* Start with translucent */
    }
    
    .arc-emoji.visible {
      opacity: 1; /* Transition to fully opaque when the 'visible' class is added */
      transform: scale(1); /* Add a scale transformation for the sliding effect */
    }
    
    .arc-container.show-arc .arc-emoji {
      display: block;
      width: 25px;
      height: 25px;
      background-color: rgba(255, 255, 255, 0.5);
      border: 0.5px solid rgba(255, 255, 255, 0.3);
      border-radius: 100%;
      padding-left: 4px;
      font-size: 16px;
      cursor: pointer;
      text-align: center;
    }
    
    .honeycomb-container:hover .honeycomb-emoji {
      display: block;
    }


    // honeycomb-emoji honeycomb-1, class for one specific honeycomb, add :hover to see arc emojis appear

  `;handleClick(){const t=this.shadowRoot.querySelector(".honeycomb-container");t.innerHTML="";const e=[1,2,3,4,5,6].map((e=>{const s=document.createElement("button");return s.className=`honeycomb-emoji honeycomb-${e}`,s.innerHTML=["😅","😭","😡","😐","😴","😁"][e-1],s.addEventListener("click",(()=>this.handleHoneycombEmojiClick(e))),t.appendChild(s),s}));t.classList.add("show-honeycomb"),setTimeout((()=>{e.forEach(((t,e)=>{const s=Math.PI/3*e,i=28*Math.cos(s),o=-28*Math.sin(s);t.style.transform=`translate(${i}px, ${o}px)`}))}),100);const s=this.shadowRoot.querySelector(".arc-container");s.innerHTML="",s.classList.remove("show-arc")}handleHoneycombEmojiClick(t){const e=this.shadowRoot.querySelector(".arc-container");e.innerHTML="";const s=[["😅","😅","😅"],["😭","😭","😭"],["😡","😡","😡"],["😐","😐","😐"],["😴","😴","😴"],["😁","😁","😁"]][t-1].map(((s,i)=>{const o=document.createElement("button");return o.className=`arc-emoji arc-${t} arc-sub-${i}`,o.innerHTML=s,o.addEventListener("click",(()=>this.handleArcEmojiClick(o.cloneNode(!0)))),e.appendChild(o),o}));e.classList.add("show-arc");const i=[{x:45,y:5},{x:25,y:-30},{x:-15,y:-30},{x:-35,y:5},{x:-15,y:40},{x:25,y:40}];setTimeout((()=>{s.forEach(((e,s)=>{const o=Math.PI/3*s+(t-2)*(Math.PI/3),n=1===s?27:26,{x:r,y:a}=i[t-1],h=n*Math.cos(o),c=-n*Math.sin(o);e.style.transform=`translate(${r+h}px, ${a+c}px)`,e.classList.add("visible")}))}),100)}handleArcEmojiClick(t){const e=this.shadowRoot.querySelector(".honeycomb-container"),s=e.getBoundingClientRect(),i=s.left,o=s.top,n=t.getBoundingClientRect(),r=n.left,a=n.top,h=10+i+window.scrollX-r,c=window.innerHeight-100+o+window.scrollY-a;t.style.transition="transform 0.5s ease-in-out, opacity 1s ease-in-out, scale 0.5s ease-in-out",t.style.transform=`translate(${h}px, ${c}px) scale(1)`,t.style.opacity="1";Array.from(e.querySelectorAll(".arc-emoji")).forEach((e=>{e!==t&&(e.style.transition="transform 0.5s ease-in-out, opacity 1s ease-in-out, scale 0.5s ease-in-out",e.style.transform="translate(0, 0) scale(0)",e.style.opacity="0")}))}render(){return B`
      <div class="container">
        <div class="message-example" @click="${this.handleClick}">message</div>
        <div class="honeycomb-container">
          <!-- Your honeycomb emojis will be added here -->
        </div>
        <div class="arc-container">
          <!-- Your arc emojis will be added here -->
        </div>
      </div>
    `}}customElements.define("emoji-honeycomb",rt);
