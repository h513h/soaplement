"use strict";(self["webpackChunksoaplement"]=self["webpackChunksoaplement"]||[]).push([[728],{126:function(t,s,e){e.d(s,{Z:function(){return l}});var a={data(){return{isLoading:!0,isCartEmpty:!0,carts:{},sum:"",discountSum:"",renewItem:{},couponMessage:""}},methods:{getCarts(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/h513h/cart";this.$http.get(t).then((t=>{this.isLoading=!1,this.carts=t.data.data.carts,this.carts.length>0?(this.isCartEmpty=!1,this.getTotal()):this.isCartEmpty=!0}))},deleteItem(t){const s=`https://vue3-course-api.hexschool.io/api/h513h/cart/${t}`;this.$http.delete(s).then((t=>{this.getCarts()}))},getTotal(){const t=this.carts.reduce(((t,s)=>t+s.total),0);this.sum=t;const s=this.carts.reduce(((t,s)=>t+s.final_total),0);this.discountSum=s},renewQty(t,s,e,a){t?s+=1:s-=1,this.renewItem={product_id:a,qty:parseInt(s)};const o=this.renewItem;if(0===o.qty)this.deleteItem(e);else{const t=`https://vue3-course-api.hexschool.io/api/h513h/cart/${e}`;this.$http.put(t,{data:o}).then((t=>{this.getCarts()})).catch((t=>{console.log(t)}))}},useCoupon(t){const s={code:t},e="https://vue3-course-api.hexschool.io/api/h513h/coupon";this.$http.post(e,{data:s}).then((t=>{t.data.success?this.couponMessage="Applied successfully!":this.couponMessage="Sorry, this code is invalid...",this.getCarts()})).catch((t=>{console.log(t)}))},goToReceipt(){this.$router.push("/receipt")}},created(){this.getCarts(),this.emitter.on("renewCart",this.getCarts)}};const o=a;var l=o},5963:function(t,s,e){e.d(s,{Z:function(){return A}});var a=e(3396),o=e(7139);const l={class:"navbar navbar-expand-lg bg-light sticky-top"},n={class:"container-fluid"},i=(0,a.Uk)("Soaplement"),r=(0,a._)("button",{class:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",null,[(0,a._)("i",{class:"fa-solid fa-bars"})])],-1),c={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},d={class:"navbar-nav"},h=(0,a.Uk)("Products"),u=(0,a.Uk)("Wishlist"),p=(0,a._)("i",{class:"fa-solid fa-basket-shopping"},null,-1),m=(0,a._)("span",{class:"visually-hidden"},"New alerts",-1),v=[m];function _(t,s,e,m,_,g){const f=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",l,[(0,a._)("div",n,[(0,a.Wm)(f,{class:"navbar-brand font-monospace text-dark",to:"/"},{default:(0,a.w5)((()=>[i])),_:1}),r,(0,a._)("div",c,[(0,a._)("div",d,[(0,a.Wm)(f,{class:"nav-link text-center",to:"/products"},{default:(0,a.w5)((()=>[h])),_:1}),(0,a.Wm)(f,{class:"nav-link text-center",to:"/wishlist"},{default:(0,a.w5)((()=>[u])),_:1}),(0,a.Wm)(f,{class:"nav-link text-center position-relative",to:"/shoppingcart",modelValue:t.carts.length,"onUpdate:modelValue":s[0]||(s[0]=s=>t.carts.length=s)},{default:(0,a.w5)((()=>[p,(0,a._)("span",{class:(0,o.C_)(["position-absolute top-50 translate-middle p-1 bg-danger border border-light rounded-circle",{"d-none":t.isCartEmpty}])},v,2)])),_:1},8,["modelValue"])])])])])}var g=e(126),f={mixins:[g.Z]},b=e(89);const w=(0,b.Z)(f,[["render",_]]);var y=w,k=e(9242);const x={class:"p-sm-5 py-5 bg-primary"},C={class:"container"},$={class:"row justify-content-center"},I={class:"col-md-3 mb-3"},M=(0,a._)("h3",{class:"font-monospace text-center"},"Soaplement",-1),z={class:"ps-3"},T=(0,a.Uk)("Exclusive brand-new and long-lost favourite cosmetics that you can't get anywhere else "),U=(0,a._)("div",{class:"col-md-3 text-center mb-3"},[(0,a._)("h3",{class:"font-monospace"},"Contact Us"),(0,a._)("p",null,"serve@soaplement.com")],-1),N=(0,a._)("div",{class:"col-md-3 text-center"},[(0,a._)("h3",{class:"font-monospace"},"Follower Us"),(0,a._)("div",{class:"d-flex justify-content-center"},[(0,a._)("p",{class:"fs-5 me-3 d-inline-block hover-text-white",role:"button"},[(0,a._)("i",{class:"fa-brands fa-facebook"})]),(0,a._)("p",{class:"fs-5 me-3 hover-text-white",role:"button"},[(0,a._)("i",{class:"fa-brands fa-instagram-square"})]),(0,a._)("p",{class:"fs-5 hover-text-white",role:"button"},[(0,a._)("i",{class:"fa-brands fa-twitter-square"})])])],-1);function W(t,s,e,o,l,n){return(0,a.wg)(),(0,a.iD)("footer",x,[(0,a._)("div",C,[(0,a._)("div",$,[(0,a._)("div",I,[M,(0,a._)("p",z,[T,(0,a._)("a",{onClick:s[0]||(s[0]=(0,k.iM)(((...t)=>n.goToLogin&&n.goToLogin(...t)),["prevent"])),class:"btn btn-link"},"Login")])]),U,N])])])}var D={methods:{goToLogin(){this.$router.push("/login")}}};const E=(0,b.Z)(D,[["render",W]]);var L=E,Z={components:{Navbar:y,Footer:L}};const j=Z;var A=j},728:function(t,s,e){e.r(s),e.d(s,{default:function(){return N}});var a=e(3396),o=e(7139);const l=(0,a._)("div",{class:"vh-30 overflow-hidden"},[(0,a._)("img",{src:"https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",alt:"products list",class:"img-fluid"})],-1),n={class:"container my-3 my-sm-5 font-monospace"},i={class:"row justify-content-center mb-sm-3"},r={class:"col-lg-10"},c=(0,a.uE)('<h2 class="mb-3">Confirmation</h2><div class="row mb-3 justify-content-evenly text-center text-success"><div class="col-3"><div class="fs-4">●</div></div><div class="col-3"><div class="fs-4">●</div></div><div class="col-3"><div class="fs-4">●</div></div></div>',2),d={class:"table-responsive"},h={class:"table"},u=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col"},"Item"),(0,a._)("th",{scope:"col"},"Price"),(0,a._)("th",{scope:"col"},"Qty")])],-1),p={class:"align-middle"},m={class:"align-middle"},v={class:"align-middle"},_={class:"table mt-3"},g=(0,a._)("th",{scope:"row"},"Name",-1),f=(0,a._)("th",{scope:"row"},"Tel",-1),b=(0,a._)("th",{scope:"row"},"E-mail",-1),w=(0,a._)("th",{scope:"row"},"Address",-1),y=(0,a._)("th",{scope:"row"},"Note",-1),k={class:"text-center"},x=(0,a.Uk)(),C=(0,a._)("i",{class:"fa-solid fa-basket-shopping"},null,-1),$=(0,a.Uk)(" Go to pay");function I(t,s,e,I,M,z){const T=(0,a.up)("Navbar"),U=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(T),l,(0,a._)("div",n,[(0,a._)("div",i,[(0,a._)("div",r,[c,(0,a._)("div",d,[(0,a._)("table",h,[u,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(M.items,((t,s)=>((0,a.wg)(),(0,a.iD)("tr",{key:s},[(0,a._)("td",p,(0,o.zw)(t.product.title),1),(0,a._)("td",m,(0,o.zw)(t.final_total),1),(0,a._)("td",v,(0,o.zw)(t.qty),1)])))),128))])])]),(0,a._)("table",_,[(0,a._)("tbody",null,[(0,a._)("tr",null,[g,(0,a._)("td",null,(0,o.zw)(M.receipt.name),1)]),(0,a._)("tr",null,[f,(0,a._)("td",null,(0,o.zw)(M.receipt.tel),1)]),(0,a._)("tr",null,[b,(0,a._)("td",null,(0,o.zw)(M.receipt.email),1)]),(0,a._)("tr",null,[w,(0,a._)("td",null,(0,o.zw)(M.receipt.address),1)]),(0,a._)("tr",null,[y,(0,a._)("td",null,(0,o.zw)(M.order.message),1)])])]),(0,a._)("div",k,[(0,a._)("button",{class:"btn btn-primary",onClick:s[0]||(s[0]=(...t)=>z.checkOut&&z.checkOut(...t))},[(0,a._)("span",null,"Total: "+(0,o.zw)(M.order.total),1),x,C,$])])])])]),(0,a.Wm)(U)],64)}var M=e(5963),z={mixins:[M.Z],data(){return{orderId:{},order:{},items:{},receipt:{}}},methods:{getOrder(){const t=`https://vue3-course-api.hexschool.io/api/h513h/order/${this.orderId}`;this.$http.get(t).then((t=>{this.order=t.data.order,this.items=this.order.products,this.receipt=this.order.user})).catch((t=>{console.log(t)}))},checkOut(){const t=`https://vue3-course-api.hexschool.io/api/h513h/pay/${this.orderId}`;this.$http.post(t).then((t=>{this.$router.push("/thankyou")})).catch((t=>{console.log(t)}))}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},T=e(89);const U=(0,T.Z)(z,[["render",I]]);var N=U}}]);
//# sourceMappingURL=728.1156c834.js.map