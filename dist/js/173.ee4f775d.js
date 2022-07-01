(self["webpackChunksoaplement"]=self["webpackChunksoaplement"]||[]).push([[173],{8803:function(e,t,s){s(1703),
/*!
  * Bootstrap toast.js v5.2.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(t,n){e.exports=n(s(1437),s(4130),s(1884),s(9069))}(0,(function(e,t,s,n){"use strict";const o=e=>e&&"object"===typeof e&&"default"in e?e:{default:e},a=o(t),i=o(s),l="toast",c="bs.toast",r=`.${c}`,u=`mouseover${r}`,d=`mouseout${r}`,m=`focusin${r}`,h=`focusout${r}`,_=`hide${r}`,f=`hidden${r}`,g=`show${r}`,p=`shown${r}`,b="fade",v="hide",w="show",k="showing",y={animation:"boolean",autohide:"boolean",delay:"number"},$={animation:!0,autohide:!0,delay:5e3};class T extends i.default{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return $}static get DefaultType(){return y}static get NAME(){return l}show(){const t=a.default.trigger(this._element,g);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(b);const s=()=>{this._element.classList.remove(k),a.default.trigger(this._element,p),this._maybeScheduleHide()};this._element.classList.remove(v),e.reflow(this._element),this._element.classList.add(w,k),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const e=a.default.trigger(this._element,_);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(v),this._element.classList.remove(k,w),a.default.trigger(this._element,f)};this._element.classList.add(k),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(w),super.dispose()}isShown(){return this._element.classList.contains(w)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){a.default.on(this._element,u,(e=>this._onInteraction(e,!0))),a.default.on(this._element,d,(e=>this._onInteraction(e,!1))),a.default.on(this._element,m,(e=>this._onInteraction(e,!0))),a.default.on(this._element,h,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=T.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}return n.enableDismissTrigger(T),e.defineJQueryPlugin(T),T}))},9069:function(e,t,s){s(6699),
/*!
  * Bootstrap component-functions.js v5.2.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,n){n(t,s(4130),s(1437))}(0,(function(e,t,s){"use strict";const n=e=>e&&"object"===typeof e&&"default"in e?e:{default:e},o=n(t),a=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,a=e.NAME;o.default.on(document,n,`[data-bs-dismiss="${a}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),s.isDisabled(this))return;const o=s.getElementFromSelector(this)||this.closest(`.${a}`),i=e.getOrCreateInstance(o);i[t]()}))};e.enableDismissTrigger=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}))},5173:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return re}});var n=s(3396),o=s(9242);const a={class:"container mt-5"},i={class:"row"},l={class:"col-lg-2 d-lg-inline-block"},c={class:"d-lg-none text-end"},r={class:"dropdown"},u=(0,n._)("button",{class:"btn btn-lg dropdown-toggle",type:"button",id:"dropdownMenu","data-bs-toggle":"dropdown","aria-expanded":"false"},null,-1),d={class:"dropdown-menu","aria-labelledby":"dropdownMenu"},m={class:"nav-item mb-2"},h=(0,n._)("i",{class:"fa-brands fa-pagelines me-2"},null,-1),_=(0,n.Uk)("Products"),f={class:"nav-item mb-2"},g=(0,n._)("i",{class:"fa-solid fa-sack-dollar me-2"},null,-1),p=(0,n.Uk)("Order"),b={class:"nav-item mb-2"},v=(0,n._)("i",{class:"fa-solid fa-piggy-bank me-2"},null,-1),w=(0,n.Uk)("Coupons"),k={class:"nav-item mb-2"},y=(0,n._)("i",{class:"fa-solid fa-door-open me-2"},null,-1),$=(0,n.Uk)("Sign out"),T=[y,$],I={class:"d-none d-lg-inline-block"},M=(0,n._)("img",{src:"https://cdn-icons-png.flaticon.com/512/2750/2750801.png",alt:"logo",class:"img-fluid"},null,-1),x={class:"nav flex-column"},C={class:"nav-item mb-2"},S=(0,n._)("i",{class:"fa-brands fa-pagelines me-2"},null,-1),D=(0,n.Uk)("Products"),L={class:"nav-item mb-2"},E=(0,n._)("i",{class:"fa-solid fa-sack-dollar me-2"},null,-1),U=(0,n.Uk)("Order"),W={class:"nav-item mb-2"},A=(0,n._)("i",{class:"fa-solid fa-piggy-bank me-2"},null,-1),P=(0,n.Uk)("Coupons"),j={class:"nav-item mb-2"},K=(0,n._)("i",{class:"fa-solid fa-door-open me-2"},null,-1),N=(0,n.Uk)("Sign out"),O=[K,N],H={class:"col-lg-10"},Z={class:"mt-3 position-relative"};function q(e,t,s,y,$,K){const N=(0,n.up)("router-link"),q=(0,n.up)("ToastMessages"),z=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",i,[(0,n._)("div",l,[(0,n._)("div",c,[(0,n._)("div",r,[u,(0,n._)("ul",d,[(0,n._)("li",m,[(0,n.Wm)(N,{class:"dropdown-item",to:"/dashboard/manageproducts"},{default:(0,n.w5)((()=>[h,_])),_:1})]),(0,n._)("li",f,[(0,n.Wm)(N,{class:"dropdown-item",to:"/dashboard/manageorders"},{default:(0,n.w5)((()=>[g,p])),_:1})]),(0,n._)("li",b,[(0,n.Wm)(N,{class:"dropdown-item",to:"/dashboard/managecoupons"},{default:(0,n.w5)((()=>[v,w])),_:1})]),(0,n._)("li",k,[(0,n._)("a",{class:"dropdown-item",onClick:t[0]||(t[0]=(0,o.iM)(((...e)=>K.logout&&K.logout(...e)),["prevent"])),role:"button"},T)])])])]),(0,n._)("div",I,[M,(0,n._)("ul",x,[(0,n._)("li",C,[(0,n.Wm)(N,{class:"nav-link text-dark",to:"/dashboard/manageproducts"},{default:(0,n.w5)((()=>[S,D])),_:1})]),(0,n._)("li",L,[(0,n.Wm)(N,{class:"nav-link text-dark",to:"/dashboard/manageorders"},{default:(0,n.w5)((()=>[E,U])),_:1})]),(0,n._)("li",W,[(0,n.Wm)(N,{class:"nav-link text-dark",to:"/dashboard/managecoupons"},{default:(0,n.w5)((()=>[A,P])),_:1})]),(0,n._)("li",j,[(0,n._)("a",{class:"nav-link",onClick:t[1]||(t[1]=(0,o.iM)(((...e)=>K.logout&&K.logout(...e)),["prevent"])),role:"button"},O)])])])]),(0,n._)("div",H,[(0,n._)("div",Z,[(0,n.Wm)(q)]),(0,n.Wm)(z)])])])}const z={class:"toast-container position-absolute pe-3 top-0 end-0"};function Q(e,t,s,o,a,i){const l=(0,n.up)("Toast");return(0,n.wg)(),(0,n.iD)("div",z,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.message,((e,t)=>((0,n.wg)(),(0,n.j4)(l,{key:t,msg:e},null,8,["msg"])))),128))])}var Y=s(7139);const F={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},G={class:"toast-header"},J={class:"me-auto"},R=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1);function V(e,t,s,o,a,i){return(0,n.wg)(),(0,n.iD)("div",F,[(0,n._)("div",G,[(0,n._)("span",{class:(0,Y.C_)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,n._)("strong",J,(0,Y.zw)(s.msg.title),1),R])],512)}var B=s(8803),X=s.n(B),ee={props:["msg"],mounted(){const e=this.$refs.toast,t=new(X())(e,{delay:6e3});t.show()}},te=s(89);const se=(0,te.Z)(ee,[["render",V]]);var ne=se,oe={components:{Toast:ne},data(){return{message:[]}},mounted(){this.emitter.on("push-message",(e=>{const{style:t="success",title:s,content:n}=e;this.message.push({style:t,title:s,content:n}),console.log(this.message)}))}};const ae=(0,te.Z)(oe,[["render",Q]]);var ie=ae,le={components:{ToastMessages:ie},methods:{logout(){const e="https://vue3-course-api.hexschool.io/logout";this.$http.post(e).then((e=>{e.data.success&&(document.cookie=`hexToken=;expires= ${new Date(0).toGMTString()}`,this.$router.push("/login"))}))}},created(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`${e}`;const t="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(t,this.user).then((e=>{e.data.success||this.$router.push("/login")}))}};const ce=(0,te.Z)(le,[["render",q]]);var re=ce}}]);
//# sourceMappingURL=173.ee4f775d.js.map