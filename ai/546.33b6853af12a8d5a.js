(self.webpackChunkai=self.webpackChunkai||[]).push([[546],{7546:(it,P,I)=>{I.r(P),I.d(P,{Attribute:()=>m,EventContract:()=>$e,EventContractContainer:()=>Ie,EventDispatcher:()=>Ye,EventInfoWrapper:()=>d,EventPhase:()=>x,bootstrapAppScopedEarlyEventContract:()=>Je,clearAppScopedEarlyEventContract:()=>tt,getActionCache:()=>$,getAppScopedQueuedEventInfos:()=>ze,isCaptureEventType:()=>v,isEarlyEventType:()=>ne,registerAppScopedDispatcher:()=>Ze,registerDispatcher:()=>xe,removeAllAppScopedEventListeners:()=>et});const m={JSACTION:"jsaction"},l={JSACTION:"__jsaction",OWNER:"__owner"},M={};function U(t){return t[l.JSACTION]}function $(t){const e=U(t)??{};return A(t,e),e}function A(t,e){t[l.JSACTION]=e}const Z=["mouseenter","mouseleave","pointerenter","pointerleave"],_=["focus","blur","error","load","toggle"],v=t=>_.indexOf(t)>=0,te=["click","dblclick","focusin","focusout","keydown","keyup","keypress","mouseover","mouseout","submit","touchstart","touchend","touchmove","touchcancel","auxclick","change","compositionstart","compositionupdate","compositionend","beforeinput","input","select","copy","cut","paste","mousedown","mouseup","wheel","contextmenu","dragover","dragenter","dragleave","drop","dragstart","dragend","pointerdown","pointermove","pointerup","pointercancel","pointerover","pointerout","gotpointercapture","lostpointercapture","ended","loadedmetadata","pagehide","pageshow","visibilitychange","beforematch"].concat(_),ne=t=>te.indexOf(t)>=0;function se(t,e){t.removeEventListener?t.removeEventListener(e.eventType,e.handler,e.capture):t.detachEvent&&t.detachEvent(`on${e.eventType}`,e.handler)}let R=typeof navigator<"u"&&/Macintosh/.test(navigator.userAgent);typeof navigator<"u"&&!/Opera/.test(navigator.userAgent)&&navigator,typeof navigator<"u"&&(/MSIE/.test(navigator.userAgent)||navigator),typeof navigator<"u"&&!/Opera|WebKit/.test(navigator.userAgent)&&navigator;const Pe=typeof navigator<"u"&&/iPhone|iPad|iPod/.test(navigator.userAgent);class Ie{constructor(e){this.element=e,this.handlerInfos=[]}addEventListener(e,n){Pe&&(this.element.style.cursor="pointer"),this.handlerInfos.push(function ie(t,e,n){let r=!1;return v(e)&&(r=!0),t.addEventListener(e,n,r),{eventType:e,handler:n,capture:r}}(this.element,e,n(this.element)))}cleanUp(){for(let e=0;e<this.handlerInfos.length;e++)se(this.element,this.handlerInfos[e]);this.handlerInfos=[]}}function u(t){return t.eventType}function S(t,e){t.eventType=e}function h(t){return t.event}function k(t,e){t.event=e}function b(t){return t.targetElement}function K(t,e){t.targetElement=e}function V(t){return t.eic}function T(t){return t.eia}function B(t,e,n){t.eia=[e,n]}function C(t){t.eia=void 0}function f(t){return t[1]}function F(t,e){t.eirp=e}function Y(t){return t.eir}function H(t,e){t.eir=e}function G(t){return{eventType:t.eventType,event:t.event,targetElement:t.targetElement,eic:t.eic,eia:t.eia,timeStamp:t.timeStamp,eirp:t.eirp,eiack:t.eiack,eir:t.eir}}function X(t,e,n,r,s,o,c,E){return{eventType:t,event:e,targetElement:n,eic:r,timeStamp:s,eia:o,eirp:c,eiack:E}}class d{constructor(e){this.eventInfo=e}getEventType(){return u(this.eventInfo)}setEventType(e){S(this.eventInfo,e)}getEvent(){return h(this.eventInfo)}setEvent(e){k(this.eventInfo,e)}getTargetElement(){return b(this.eventInfo)}setTargetElement(e){K(this.eventInfo,e)}getContainer(){return V(this.eventInfo)}setContainer(e){!function Me(t,e){t.eic=e}(this.eventInfo,e)}getTimestamp(){return function Ue(t){return t.timeStamp}(this.eventInfo)}setTimestamp(e){!function _e(t,e){t.timeStamp=e}(this.eventInfo,e)}getAction(){const e=T(this.eventInfo);if(e)return{name:e[0],element:e[1]}}setAction(e){e?B(this.eventInfo,e.name,e.element):C(this.eventInfo)}getIsReplay(){return function Le(t){return t.eirp}(this.eventInfo)}setIsReplay(e){F(this.eventInfo,e)}getResolved(){return Y(this.eventInfo)}setResolved(e){H(this.eventInfo,e)}clone(){return new d(G(this.eventInfo))}}const De={},we=/\s*;\s*/;class be{constructor({syntheticMouseEventSupport:e=!1,clickModSupport:n=!0}={}){this.a11yClickSupport=!1,this.clickModSupport=!0,this.updateEventInfoForA11yClick=void 0,this.preventDefaultForA11yClick=void 0,this.populateClickOnlyAction=void 0,this.syntheticMouseEventSupport=e,this.clickModSupport=n}resolveEventType(e){this.clickModSupport&&"click"===u(e)&&function ae(t){return R&&t.metaKey||!R&&t.ctrlKey||function ce(t){return 2===t.which||null==t.which&&4===t.button}(t)||t.shiftKey}(h(e))?S(e,"clickmod"):this.a11yClickSupport&&this.updateEventInfoForA11yClick(e)}resolveAction(e){Y(e)||(this.populateAction(e,b(e)),H(e,!0))}resolveParentAction(e){const n=T(e),r=n&&f(n);C(e);const s=r&&this.getParentNode(r);s&&this.populateAction(e,s)}populateAction(e,n){let r=n;for(;r&&r!==V(e)&&(r.nodeType===Node.ELEMENT_NODE&&this.populateActionOnElement(r,e),!T(e));)r=this.getParentNode(r);const s=T(e);if(s&&(this.a11yClickSupport&&this.preventDefaultForA11yClick(e),this.syntheticMouseEventSupport&&("mouseenter"===u(e)||"mouseleave"===u(e)||"pointerenter"===u(e)||"pointerleave"===u(e))))if(function fe(t,e,n){const r=t.relatedTarget;return("mouseover"===t.type&&"mouseenter"===e||"mouseout"===t.type&&"mouseleave"===e||"pointerover"===t.type&&"pointerenter"===e||"pointerout"===t.type&&"pointerleave"===e)&&(!r||r!==n&&!n.contains(r))}(h(e),u(e),f(s))){const o=function de(t,e){const n={};for(const r in t){if("srcElement"===r||"target"===r)continue;const o=t[r];"function"!=typeof o&&(n[r]=o)}return n.type="mouseover"===t.type?"mouseenter":"mouseout"===t.type?"mouseleave":"pointerover"===t.type?"pointerenter":"pointerleave",n.target=n.srcElement=e,n.bubbles=!1,n}(h(e),f(s));k(e,o),K(e,f(s))}else C(e)}getParentNode(e){const n=e[l.OWNER];if(n)return n;const r=e.parentNode;return"#document-fragment"===r?.nodeName?r?.host??null:r}populateActionOnElement(e,n){const r=this.parseActions(e),s=r[u(n)];void 0!==s&&B(n,s,e),this.a11yClickSupport&&this.populateClickOnlyAction(e,n,r)}parseActions(e){let n=U(e);if(!n){const r=e.getAttribute(m.JSACTION);if(r){if(n=function J(t){return M[t]}(r),!n){n={};const s=r.split(we);for(let o=0;o<s.length;o++){const c=s[o];if(!c)continue;const E=c.indexOf(":"),O=-1!==E,nt=O?c.substr(0,E).trim():"click",rt=O?c.substr(E+1).trim():c;n[nt]=rt}!function z(t,e){M[t]=e}(r,n)}A(e,n)}else n=De,A(e,n)}return n}addA11yClickSupport(e,n,r){this.a11yClickSupport=!0,this.updateEventInfoForA11yClick=e,this.preventDefaultForA11yClick=n,this.populateClickOnlyAction=r}}var N=function(t){return t[t.I_AM_THE_JSACTION_FRAMEWORK=0]="I_AM_THE_JSACTION_FRAMEWORK",t}(N||{});class Ke{constructor(e,{actionResolver:n,eventReplayer:r}={}){this.dispatchDelegate=e,this.eventReplayScheduled=!1,this.replayEventInfoWrappers=[],this.actionResolver=n,this.eventReplayer=r}dispatch(e){const n=new d(e);this.actionResolver?.resolveEventType(e),this.actionResolver?.resolveAction(e);const r=n.getAction();r&&function Ve(t,e){return"A"===t.tagName&&("click"===e.getEventType()||"clickmod"===e.getEventType())}(r.element,n)&&function oe(t){t.preventDefault?t.preventDefault():t.returnValue=!1}(n.getEvent()),this.eventReplayer&&n.getIsReplay()?this.scheduleEventInfoWrapperReplay(n):this.dispatchDelegate(n)}scheduleEventInfoWrapperReplay(e){this.replayEventInfoWrappers.push(e),!this.eventReplayScheduled&&(this.eventReplayScheduled=!0,Promise.resolve().then(()=>{this.eventReplayScheduled=!1,this.eventReplayer(this.replayEventInfoWrappers)}))}}const j=Symbol.for("propagationStopped"),x={REPLAY:101};class Ye{constructor(e,n=!0){this.dispatchDelegate=e,this.clickModSupport=n,this.actionResolver=new be({clickModSupport:n}),this.dispatcher=new Ke(r=>{this.dispatchToDelegate(r)},{actionResolver:this.actionResolver})}dispatch(e){this.dispatcher.dispatch(e)}dispatchToDelegate(e){for(e.getIsReplay()&&function Xe(t){const e=t.getEvent(),n=t.getTargetElement(),r=e.preventDefault.bind(e);p(e,"target",n),p(e,"eventPhase",x.REPLAY),p(e,"preventDefault",()=>{throw r(),new Error("`preventDefault` called during event replay.")}),p(e,"composedPath",()=>{throw new Error("`composedPath` called during event replay.")})}(e),function He(t){const e=t.getEvent(),n=t.getEvent().stopPropagation.bind(e),r=()=>{e[j]=!0,n()};p(e,"stopPropagation",r),p(e,"stopImmediatePropagation",r)}(e);e.getAction();){if(je(e),v(e.getEventType())&&e.getAction().element!==e.getTargetElement()||(this.dispatchDelegate(e.getEvent(),e.getAction().name),e.getEvent()[j]))return;this.actionResolver.resolveParentAction(e.eventInfo)}}}function je(t){const e=t.getEvent(),n=t.getAction()?.element;n&&p(e,"currentTarget",n,{configurable:!0})}function p(t,e,n,{configurable:r=!1}={}){Object.defineProperty(t,e,{value:n,configurable:r})}function xe(t,e){t.ecrd(n=>{e.dispatch(n)},N.I_AM_THE_JSACTION_FRAMEWORK)}function y(t,e,n){for(let r=0;r<e.length;r++){const s=e[r];(n?t.etc:t.et).push(s),t.c.addEventListener(s,t.h,n)}}function q(t){t&&(Q(t.c,t.et,t.h),Q(t.c,t.etc,t.h,!0))}function Q(t,e,n,r){for(let s=0;s<e.length;s++)t.removeEventListener(e[s],n,r)}let $e=(()=>{class t{static{this.MOUSE_SPECIAL_SUPPORT=!1}constructor(n){this.eventHandlers={},this.browserEventTypeToExtraEventTypes={},this.dispatcher=null,this.queuedEventInfos=[],this.containerManager=n}handleEvent(n,r,s){const o=X(n,r,r.target,s,Date.now());this.handleEventInfo(o)}handleEventInfo(n){if(!this.dispatcher)return F(n,!0),void this.queuedEventInfos?.push(n);this.dispatcher(n)}addEvent(n,r){if(n in this.eventHandlers||!this.containerManager||!t.MOUSE_SPECIAL_SUPPORT&&Z.indexOf(n)>=0)return;const s=(c,E,O)=>{this.handleEvent(c,E,O)};this.eventHandlers[n]=s;const o=function re(t){return"mouseenter"===t?"mouseover":"mouseleave"===t?"mouseout":"pointerenter"===t?"pointerover":"pointerleave"===t?"pointerout":t}(r||n);if(o!==n){const c=this.browserEventTypeToExtraEventTypes[o]||[];c.push(n),this.browserEventTypeToExtraEventTypes[o]=c}this.containerManager.addEventListener(o,c=>E=>{s(n,E,c)})}replayEarlyEvents(n=window._ejsa){n&&(this.replayEarlyEventInfos(n.q),q(n),delete window._ejsa)}replayEarlyEventInfos(n){for(let r=0;r<n.length;r++){const s=n[r],o=this.getEventTypesForBrowserEventType(s.eventType);for(let c=0;c<o.length;c++){const E=G(s);S(E,o[c]),this.handleEventInfo(E)}}}getEventTypesForBrowserEventType(n){const r=[];return this.eventHandlers[n]&&r.push(n),this.browserEventTypeToExtraEventTypes[n]&&r.push(...this.browserEventTypeToExtraEventTypes[n]),r}handler(n){return this.eventHandlers[n]}cleanUp(){this.containerManager.cleanUp(),this.containerManager=null,this.eventHandlers={},this.browserEventTypeToExtraEventTypes={},this.dispatcher=null,this.queuedEventInfos=[]}registerDispatcher(n,r){this.ecrd(n,r)}ecrd(n,r){if(this.dispatcher=n,this.queuedEventInfos?.length){for(let s=0;s<this.queuedEventInfos.length;s++)this.handleEventInfo(this.queuedEventInfos[s]);this.queuedEventInfos=null}}}return t})();function Je(t,e,n,r,s=window){const o=function W(t){const e=[],n=s=>{e.push(s)};return{c:t,q:e,et:[],etc:[],d:n,h:s=>{n(X(s.type,s,s.target,t,Date.now()))}}}(t);s._ejsas||(s._ejsas={}),s._ejsas[e]=o,y(o,n),y(o,r,!0)}function ze(t,e=window){return function We(t){return t?.q??[]}(e._ejsas?.[t])}function Ze(t,e,n,r=window){!function qe(t,e){t&&(t.d=e)}(r._ejsas?.[e],n)}function et(t,e=window){q(e._ejsas?.[t])}function tt(t,e=window){e._ejsas&&(e._ejsas[t]=void 0)}}}]);