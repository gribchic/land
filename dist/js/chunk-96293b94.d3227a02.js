(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96293b94"],{"38fc":function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"block-video",on:{click:e.openVideoPopup}},[i("img",{staticClass:"img-fluid",attrs:{alt:"video",src:e.model.imageURL}}),i("button",{staticClass:"y-button",attrs:{"aria-label":"Play"}},[i("svg",{attrs:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"}},[i("path",{staticClass:"y-button-bg",attrs:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#f00"}}),i("path",{attrs:{d:"M 45,24 27,14 27,34",fill:"#fff"}})])]),i("modal-video",{attrs:{id:"video-"+e._uid,"video-url":e.model.videoURL}})],1)},a=[],n=i("fad0"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-modal",{attrs:{id:e.id,"hide-footer":!0,"hide-header":!0,size:"xl",centered:""}},[e._t("default",[i("b-button",{on:{click:e.close}},[e._v(" × ")]),i("div",{staticClass:"embed-responsive embed-responsive-16by9"},[i("iframe",{attrs:{src:e.videoUrl+"?autoplay=1",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])],2)},s=[],d={name:"ModalVideo",props:{id:{type:String},videoUrl:{type:String}},methods:{close:function(){this.$bvModal.hide(this.id)}}},c=d,l=(i("fb5d"),i("2877")),u=Object(l["a"])(c,r,s,!1,null,"4ced563e",null),m=u.exports,f={name:"BlockVideo",components:{ModalVideo:m},props:{model:{type:n["a"]}},methods:{openVideoPopup:function(){this.$bvModal.show("video-".concat(this._uid))}}},p=f,h=(i("93c8"),Object(l["a"])(p,o,a,!1,null,"9f99f640",null));t["a"]=h.exports},"75b6":function(e,t,i){},"781f":function(e,t,i){e.exports=i.p+"img/promo-video-ecbsv.6453160f.jpg"},"91db":function(e,t,i){},"93c8":function(e,t,i){"use strict";var o=i("75b6"),a=i.n(o);a.a},fad0:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var o=i("d4ec"),a=function e(t){Object(o["a"])(this,e),this.imageURL=t.imageURL,this.videoURL=t.videoURL}},fb5d:function(e,t,i){"use strict";var o=i("91db"),a=i.n(o);a.a},ff51:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._m(0),i("article",[i("block-video",{staticClass:"float-left mr-md-4 mb-4 mb-md-0",attrs:{model:e.videoPromoModel}}),i("p",[e._v(" IDValidation.com Awarded Social Security Administration Agreement to provide eCBSV services. ")]),i("p",[e._v(' eCBSV is a service that will help to reduce synthetic identity fraud. The service will be marketed to the financial services industry and other "permitted entities" as defined by the law. ')]),i("p",[e._v(" IDValidation.com / Computer Information Development, LLC is pleased to announce that it has been selected by the Social Security Administration to be part of the initial rollout for the Electronic Consent Based Social Security Number Verification (eCBSV) service. The roll out of this new service from SSA is currently scheduled for June of 2020 and the test phase will last for approximately six months. During the roll out period, the agreement limits the number of clients the company can take on to 20. Because of this restriction, the company is being very selective in offering the service to clients. ")]),i("p",[e._v(' "eCBSV is an important addition to the suite of identity verification services that we are able to offer due to our government relationships," said Paul Campione, IDV\'s CEO. "Our vision is to provide companies with affordable tools that are easy to use and which end identity theft and employment fraud. eCBSV fits quite nicely with this vision." In addition to the company\'s relationship with the SSA, IDV also has agreements with the IRS and Department of Homeland Security. ')]),i("p",[e._v(" For more information on eCBSV, contact IDValidation directly "),i("a",{attrs:{href:"mailto:Lou@IDValidation.net"}},[e._v("Lou@IDValidation.net")]),e._v(" or by calling "),i("adaptive-phone-number",{attrs:{"phone-number":"2628856187"}}),e._v(". ")],1),i("hr"),i("div",[i("p",[e._v("About IDValidation/Computer Information Development, LLC:")]),i("p",{staticClass:"font-italic"},[e._v(" IDValidation, founded in 2001, is a wholly owned subsidiary of Computer Information Development, LLC, headquartered in Arcadia, CA. The company sells a comprehensive suite of identity verification services. ")]),i("p",[e._v(" Press Contact: Lou Perez, IDValidation/Computer Information Development, LLC. Phone "),i("adaptive-phone-number",{attrs:{"phone-number":"2628856187"}}),e._v("."),i("br"),e._v("713 W Duarte Rd., Arcadia, CA 91007. "),i("a",{attrs:{href:"mailto:Lou@IDValidation.net"}},[e._v("Lou@IDValidation.net")])],1)])],1)])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"mb-5"},[i("h2",[e._v("IDValidation.com Awarded Social Security Administration Agreement to provide eCBSV services.")]),i("div",{staticClass:"text-intro"},[e._v(" Tuesday, September 17, 2019 ")])])}],n=i("fad0"),r=i("38fc"),s=i("2598"),d={name:"ServiceECBSV",components:{AdaptivePhoneNumber:s["a"],BlockVideo:r["a"]},created:function(){this.videoPromoModel=new n["a"]({imageURL:"".concat(i("781f")),videoURL:"https://www.youtube.com/embed/5M05ZwFGEWs"})}},c=d,l=i("2877"),u=Object(l["a"])(c,o,a,!1,null,"31a24ba8",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-96293b94.d3227a02.js.map