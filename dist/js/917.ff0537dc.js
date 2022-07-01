"use strict";(self["webpackChunksoaplement"]=self["webpackChunksoaplement"]||[]).push([[917],{3714:function(e,t,l){function a(e){const t=parseInt(e,10);return`${t.toFixed(0).replace(/./g,((e,t,l)=>t&&"."!==e&&(l.length-t)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function s(e){const t=new Date(1e3*e);return t.toLocaleDateString()}l.d(t,{A:function(){return a},h:function(){return s}})},8917:function(e,t,l){l.r(t),l.d(t,{default:function(){return Ae}});var a=l(3396),s=l(9242),o=l(7139);const i=(0,a._)("h2",{class:"font-monospace"},"Products",-1),d={class:"d-grid d-flex justify-content-end"},r={class:"table table-borderless"},n=(0,a._)("thead",{class:"bg-dark text-white"},[(0,a._)("tr",{class:"align-middle text-center"},[(0,a._)("th",{scope:"col",class:"d-none d-lg-table-cell border border-2 border-white"},"Picture"),(0,a._)("th",{scope:"col",class:"border border-2 border-white"},"Title"),(0,a._)("th",{scope:"col",class:"d-none d-sm-table-cell border border-2 border-white"},"Category"),(0,a._)("th",{scope:"col",class:"d-none d-lg-table-cell border border-2 border-white"},"Description"),(0,a._)("th",{scope:"col",class:"d-none d-sm-table-cell border border-2 border-white"},"Price"),(0,a._)("th",{scope:"col",class:"border border-2 border-white"},"Sale Price"),(0,a._)("th",{scope:"col",class:"border border-2 border-white"},"Status"),(0,a._)("th",{scope:"col",class:"border border-2 border-white"},"Edit")])],-1),c={class:"d-none d-lg-table-cell w-50"},m={class:"row"},u={class:"col-6"},p=["src"],b={class:"col-6"},h=["src"],_={class:"d-none d-sm-table-cell"},g={class:"d-none d-lg-table-cell"},f={class:"d-none d-sm-table-cell"},I={key:0,class:"text-success"},v={key:1,class:"text-danger"},w=["onClick"],y=(0,a._)("i",{class:"fa-solid fa-pen-to-square text-info"},null,-1),x=[y];function U(e,t,l,y,U,k){const M=(0,a.up)("isLoading"),V=(0,a.up)("ProductModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a.Wm)(M,{active:U.isLoading},null,8,["active"]),(0,a._)("div",d,[(0,a._)("button",{class:"btn btn-light rounded-1 mb-3 text-end",onClick:t[0]||(t[0]=(0,s.iM)((t=>e.openModal(!0)),["prevent"]))},"Add")]),(0,a._)("table",r,[n,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(U.products,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id,class:"mb-3"},[(0,a._)("td",c,[(0,a._)("div",m,[(0,a._)("div",u,[(0,a._)("img",{src:t.mainImageUrl,alt:"picture",class:"img-fluid"},null,8,p)]),(0,a._)("div",b,[(0,a._)("img",{src:t.mainImageUrl2,alt:"picture",class:"img-fluid"},null,8,h)])])]),(0,a._)("td",null,(0,o.zw)(t.title),1),(0,a._)("td",_,(0,o.zw)(t.category),1),(0,a._)("td",g,(0,o.zw)(t.description),1),(0,a._)("td",f,(0,o.zw)(k.currency(t.origin_price)),1),(0,a._)("td",null,(0,o.zw)(k.currency(t.price)),1),t.is_enabled?((0,a.wg)(),(0,a.iD)("td",I,"Available")):((0,a.wg)(),(0,a.iD)("td",v,"Invalid")),(0,a._)("td",{onClick:l=>e.openModal(!1,t),role:"button",class:"text-center"},x,8,w)])))),128))])]),(0,a.Wm)(V,{ref:"modal",item:U.tempItem,onUpdateItem:k.updateItem,onDeleteItem:k.deleteItem},null,8,["item","onUpdateItem","onDeleteItem"])],64)}const k={class:"modal",tabindex:"-1",ref:"modal",id:"editModal"},M={class:"modal-dialog modal-xl"},V={class:"modal-content"},D={class:"modal-header bg-primary text-white"},C={class:"modal-title"},F=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),$={class:"modal-body"},P={class:"row"},W={class:"col-md-6"},q={class:"mb-3"},S=(0,a._)("label",{for:"title",class:"form-label"},"Title",-1),z={class:"row gx-4"},L={class:"mb-3 col-sm-6 col-md-3"},R=(0,a._)("label",{for:"category",class:"form-label"},"Category",-1),A={class:"mb-3 col-sm-6 col-md-3"},Z=(0,a._)("label",{for:"price",class:"form-label"},"Unit",-1),H={class:"mb-3 col-sm-6 col-md-3"},N=(0,a._)("label",{for:"origin_price",class:"form-label"},"Price",-1),T={class:"mb-3 col-sm-6 col-md-3"},E=(0,a._)("label",{for:"price",class:"form-label"},"Special offer",-1),Y=(0,a._)("hr",null,null,-1),j={class:"mb-3"},B=(0,a._)("label",{for:"content",class:"form-label"},"Characteristic",-1),K={class:"mb-3"},O=(0,a._)("label",{for:"content",class:"form-label"},"Content",-1),G={class:"mb-3"},J=(0,a._)("label",{for:"description",class:"form-label"},"Description",-1),Q={class:"mb-3"},X=(0,a._)("label",{for:"content",class:"form-label"},"How to use",-1),ee={class:"mb-3"},te={class:"form-check"},le=(0,a._)("label",{class:"form-check-label",for:"is_enabled"},"Available",-1),ae=(0,a._)("hr",null,null,-1),se={class:"col-md-6"},oe={class:"mb-3"},ie=(0,a._)("label",{for:"image",class:"form-label"},"Upload an pictures by url",-1),de={class:"mb-3"},re=(0,a._)("label",{for:"customFile",class:"form-label"},"or upload pictures",-1),ne=["src"],ce={class:"mb-3"},me=(0,a._)("label",{for:"image",class:"form-label"},"Upload an pictures by url",-1),ue={class:"mb-3"},pe=(0,a._)("label",{for:"customFile",class:"form-label"},"or upload pictures",-1),be=["src"],he={class:"modal-footer"},_e={key:0,type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},ge={key:1,type:"button",class:"btn btn-outline-danger","data-bs-toggle":"modal",href:"#deleteModal"},fe=(0,a._)("button",{type:"submit",class:"btn btn-primary"},"Confirm",-1),Ie={class:"modal fade",id:"deleteModal",tabindex:"-1",ref:"deleteModal"},ve={class:"modal-dialog modal-dialog-centered"},we={class:"modal-content"},ye=(0,a._)("div",{class:"modal-header bg-danger"},[(0,a._)("h5",{class:"modal-title"},"Delete Item"),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),xe={class:"modal-body"},Ue=(0,a.Uk)(" Are you sure to delete "),ke={class:"fw-bold text-uppercase"},Me={class:"modal-footer"},Ve=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-toggle":"modal","data-bs-target":"#editModal"},"Back",-1);function De(e,t,l,i,d,r){const n=(0,a.up)("Field"),c=(0,a.up)("ErrorMessage"),m=(0,a.up)("Form");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",k,[(0,a._)("div",M,[(0,a._)("div",V,[(0,a._)("div",D,[(0,a._)("h5",C,(0,o.zw)(e.tempItem.status)+" Product",1),F]),(0,a.Wm)(m,{onSubmit:r.onSubmit},{default:(0,a.w5)((()=>[(0,a._)("div",$,[(0,a._)("div",P,[(0,a._)("div",W,[(0,a._)("div",q,[S,(0,a.Wm)(n,{type:"text",class:"form-control",id:"title",name:"title",modelValue:e.tempItem.title,"onUpdate:modelValue":t[0]||(t[0]=t=>e.tempItem.title=t),rules:r.validateRequired},null,8,["modelValue","rules"]),(0,a.Wm)(c,{name:"title",class:"text-warning"})]),(0,a._)("div",z,[(0,a._)("div",L,[R,(0,a.Wm)(n,{type:"text",class:"form-control",id:"category",name:"category",modelValue:e.tempItem.category,"onUpdate:modelValue":t[1]||(t[1]=t=>e.tempItem.category=t),rules:r.validateRequired},null,8,["modelValue","rules"]),(0,a.Wm)(c,{name:"category",class:"text-warning"})]),(0,a._)("div",A,[Z,(0,a.Wm)(n,{type:"text",class:"form-control",id:"unit",name:"unit",modelValue:e.tempItem.unit,"onUpdate:modelValue":t[2]||(t[2]=t=>e.tempItem.unit=t),rules:r.validateRequired},null,8,["modelValue","rules"]),(0,a.Wm)(c,{name:"unit",class:"text-warning"})]),(0,a._)("div",H,[N,(0,a.Wm)(n,{type:"number",class:"form-control",id:"origin_price",name:"origin_price",modelValue:e.tempItem.origin_price,"onUpdate:modelValue":t[3]||(t[3]=t=>e.tempItem.origin_price=t),modelModifiers:{number:!0},rules:r.validateRequired},null,8,["modelValue","rules"]),(0,a.Wm)(c,{name:"origin_price",class:"text-warning"})]),(0,a._)("div",T,[E,(0,a.Wm)(n,{type:"number",class:"form-control",id:"price",name:"price",modelValue:e.tempItem.price,"onUpdate:modelValue":t[4]||(t[4]=t=>e.tempItem.price=t),modelModifiers:{number:!0},rules:r.validateRequired},null,8,["modelValue","rules"]),(0,a.Wm)(c,{name:"price",class:"text-warning"})])]),Y,(0,a._)("div",j,[B,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":t[5]||(t[5]=t=>e.tempItem.characteristic=t)},null,512),[[s.nr,e.tempItem.characteristic]])]),(0,a._)("div",K,[O,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":t[6]||(t[6]=t=>e.tempItem.content=t)},null,512),[[s.nr,e.tempItem.content]])]),(0,a._)("div",G,[J,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":t[7]||(t[7]=t=>e.tempItem.description=t)},null,512),[[s.nr,e.tempItem.description]])]),(0,a._)("div",Q,[X,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":t[8]||(t[8]=t=>e.tempItem.use=t)},null,512),[[s.nr,e.tempItem.use]])]),(0,a._)("div",ee,[(0,a._)("div",te,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[9]||(t[9]=t=>e.tempItem.is_enabled=t)},null,512),[[s.e8,e.tempItem.is_enabled]]),le])]),ae]),(0,a._)("div",se,[(0,a._)("div",oe,[ie,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":t[10]||(t[10]=t=>e.tempItem.mainImageUrl=t),required:""},null,512),[[s.nr,e.tempItem.mainImageUrl]])]),(0,a._)("div",de,[re,(0,a._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[11]||(t[11]=(...e)=>r.uploadFile&&r.uploadFile(...e))},null,544)]),e.tempItem.mainImageUrl?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"img-fluid",alt:"product image",src:e.tempItem.mainImageUrl},null,8,ne)):(0,a.kq)("",!0),(0,a._)("div",ce,[me,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":t[12]||(t[12]=t=>e.tempItem.mainImageUrl2=t),required:""},null,512),[[s.nr,e.tempItem.mainImageUrl2]])]),(0,a._)("div",ue,[pe,(0,a._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[13]||(t[13]=(...e)=>r.uploadFile&&r.uploadFile(...e))},null,544)]),e.tempItem.mainImageUrl?((0,a.wg)(),(0,a.iD)("img",{key:1,class:"img-fluid",alt:"product image",src:e.tempItem.mainImageUrl2},null,8,be)):(0,a.kq)("",!0)])])]),(0,a._)("div",he,["new"===e.tempItem.status?((0,a.wg)(),(0,a.iD)("button",_e,"Close")):((0,a.wg)(),(0,a.iD)("button",ge,"Delete")),fe])])),_:1},8,["onSubmit"])])])],512),(0,a._)("div",Ie,[(0,a._)("div",ve,[(0,a._)("div",we,[ye,(0,a._)("div",xe,[Ue,(0,a._)("span",ke,(0,o.zw)(e.tempItem.title),1)]),(0,a._)("div",Me,[Ve,(0,a._)("button",{class:"btn btn-danger",onClick:t[14]||(t[14]=(...t)=>e.deleteItem&&e.deleteItem(...t))},"Delete")])])])],512)],64)}var Ce=l(5842),Fe=l(5708),$e={mixins:[Ce.Z],components:{Form:Fe.l0,Field:Fe.gN,ErrorMessage:Fe.Bc},methods:{onSubmit(e){this.updateItem()},validateRequired(e){return!!e||"This field is required"},uploadFile(){const e=this.$refs.fileInput.files[0],t=new FormData;t.append("file-to-upload",e);const l="https://vue3-course-api.hexschool.io/api/h513h/admin/upload";this.$http.post(l,t).then((e=>{e.data.success&&(this.tempItem.imageUrl=e.data.imageUrl)}))},updateItem(){this.$emit("update-item",this.tempItem)}}},Pe=l(89);const We=(0,Pe.Z)($e,[["render",De]]);var qe=We,Se=l(7646),ze=l(3714),Le={mixins:[Se.Z],components:{ProductModal:qe},data(){return{products:{},tempItem:{},isNew:!1,isLoading:!0}},methods:{currency:ze.A,date:ze.h,getProducts(){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/h513h/products/all";this.$http.get(e).then((e=>{this.isLoading=!1,this.products=e.data.products.reverse()})).catch((e=>{console.log(e)}))},updateItem(e){console.log(e),this.tempItem=e;let t="https://vue3-course-api.hexschool.io/api/h513h/admin/product",l="post";this.isNew||(t=`https://vue3-course-api.hexschool.io/api/h513h/admin/product/${e.id}`,l="put");const a=this.$refs.modal;this.$http[l](t,{data:this.tempItem}).then((e=>{a.hideModal(),e.data.success?(this.getProducts(),this.emitter.emit("push-message",{style:"success",title:"Succeeded!",content:"Renewed Product List!"})):this.emitter.emit("push-message",{style:"danger",title:"Failed",content:"There are some problems..."})}))},deleteItem(e){this.temItem=e;const t=`https://vue3-course-api.hexschool.io/api/h513h/admin/product/${e.id}`;this.$http.delete(t,{data:this.tempItem}).then((e=>{const t=this.$refs.modal;t.hideModal(),this.getProducts()}))}},created(){this.getProducts()}};const Re=(0,Pe.Z)(Le,[["render",U]]);var Ae=Re},5842:function(e,t,l){l.d(t,{Z:function(){return d}});var a=l(7972),s=l.n(a),o={emits:["update-item","delete-item"],props:{item:{type:Object,default(){return{}}}},watch:{item(){this.tempItem=this.item}},data(){return{modal:{},tempItem:{}}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide(),this.deleteModal.hide()},deleteItem(){this.$emit("delete-item",this.tempItem)}},mounted(){this.modal=new(s())(this.$refs.modal),this.deleteModal=new(s())(this.$refs.deleteModal)}};const i=o;var d=i},7646:function(e,t,l){l.d(t,{Z:function(){return o}});var a={methods:{openModal(e,t){e?(this.tempItem={},this.tempItem.status="new"):(this.tempItem={...t},this.tempItem.status="edit"),this.isNew=e;const l=this.$refs.modal;l.showModal()}}};const s=a;var o=s}}]);
//# sourceMappingURL=917.ff0537dc.js.map