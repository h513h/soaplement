"use strict";(self["webpackChunksoaplement"]=self["webpackChunksoaplement"]||[]).push([[299],{8299:function(s,e,n){n.r(e),n.d(e,{default:function(){return b}});var o=n(3396),t=n(9242);const a={class:"container"},r={class:"row vh-100 justify-content-center align-items-center"},l={class:"col col-lg-5"},i=(0,o._)("h1",{class:"mb-5 font-monospace"},"Sign In",-1),c={class:"d-flex flex-column justify-content-end"},u={class:"form-floating mb-3"},d=(0,o._)("label",{for:"floatingInput"},"Email address",-1),p={class:"form-floating mb-4"},m=(0,o._)("label",{for:"floatingPassword"},"Password",-1);function f(s,e,n,f,h,g){return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",r,[(0,o._)("div",l,[i,(0,o._)("form",c,[(0,o._)("div",u,[(0,o.wy)((0,o._)("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com","onUpdate:modelValue":e[0]||(e[0]=s=>h.user.username=s)},null,512),[[t.nr,h.user.username]]),d]),(0,o._)("div",p,[(0,o.wy)((0,o._)("input",{type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=s=>h.user.password=s)},null,512),[[t.nr,h.user.password]]),m]),(0,o._)("button",{type:"submit",class:"btn btn-primary",onClick:e[2]||(e[2]=(0,t.iM)(((...s)=>g.signIn&&g.signIn(...s)),["prevent"]))},"Sign In")])])])])}var h={data(){return{user:{username:"",password:""}}},methods:{signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(s,this.user).then((s=>{if(s.data.success){const{token:e,expired:n}=s.data;document.cookie=`hexToken=${e}; expires=${new Date(n)}`,this.$router.push("/dashboard/manageproducts")}}))}}},g=n(89);const w=(0,g.Z)(h,[["render",f]]);var b=w}}]);
//# sourceMappingURL=299.45ce8aeb.js.map