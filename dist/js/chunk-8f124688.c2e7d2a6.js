(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f124688"],{"1a2d":function(t,e,n){"use strict";var a=n("bf6e"),i=n.n(a);i.a},"1a46":function(t,e,n){t.exports=n.p+"img/e-verify_logo.3bdda12a.svg"},"1bc0":function(t,e,n){t.exports=n.p+"img/parallax-talk-buisiness.a080fc2f.jpg"},"2f14":function(t,e,n){t.exports=n.p+"img/irs-logo.8aacf5e6.svg"},4393:function(t,e,n){},6457:function(t,e,n){t.exports=n.p+"img/affiliate-agent.0a539de4.jpg"},"6d6d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("partners-component")},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section-parallax",{attrs:{model:t.$options.parallaxModel}},[n("h1",{staticClass:"text-white"},[t._v(" Partners And Associations ")])]),n("section-partners"),n("section-talk-business")],1)},o=[],r=n("c463"),c=n("fe2c"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container page-section"},[t._m(0),n("div",{ref:"container",staticClass:"row"},t._l(t.partners,(function(t,e){return n("div",{key:e,staticClass:"col-lg-4 col-sm-6 mb-5"},[n("block-partner",{attrs:{model:t}})],1)})),0),n("hr",{staticClass:"mb-5"}),t._m(1)])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"mb-5"},[n("h2",{staticClass:"text-center"},[t._v("Our Partners, Associations & Affiliations")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media"},[a("img",{staticClass:"img-agent mr-3",attrs:{src:n("6457"),alt:"Affiliate Agent for IDValidation"}}),a("div",{staticClass:"media-body"},[a("h3",{staticClass:"mt-0"},[t._v("Affiliate Agent for IDValidation")]),t._v(" Join the battle against Fraud and ID Theft. You can be an Affiliate Agent for IDValidation services. Please click Contact Us. ")])])}],u=(n("4160"),n("159b"),n("9911"),n("d4ec")),p=function t(e){Object(u["a"])(this,t),this.imageURL=e.imageURL,this.link=e.link,this.title=e.title,this.content=e.content},m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"h-100",attrs:{"no-body":""}},[n("b-card-body",{on:{click:t.open}},[n("header",[n("img",{staticClass:"mb-3 d-inline-block",attrs:{src:t.model.imageURL,alt:"logo"}}),n("h3",{staticClass:"text-left mb-3"},[t._v(" "+t._s(t.model.title)+" ")])]),n("div",[t._v(" "+t._s(t.model.content)+" ")])])],1)},d=[],g={name:"BlockPartner",props:{model:{type:p}},methods:{open:function(t){t.target.href||window.open(this.model.link,"_blank")}}},h=g,v=(n("effc"),n("2877")),b=Object(v["a"])(h,m,d,!1,null,"3f844dea",null),x=b.exports,w=n("a5cf"),k={name:"SectionPartners",components:{BlockPartner:x},data:function(){return{partners:[]}},created:function(){this.partners.push(new p({imageURL:"".concat(n("ef1b")),link:"https://onfido.com/us/",title:"Onfido",content:"Identity verification at the speed of life. It's as simple as an ID and a selfie. Our document verification and facial biometrics technology lets your users verify themselves anywhere, anytime."}),new p({imageURL:"".concat(n("2f14")),link:"http://www.irs.gov/",title:"Internal Revenue Service",content:"IDValidation is a Participant in the IRS Form 4506T Income Tax Return Verification service from the Internal Revenue Service (IRS). We offer income and employer verification using IRS Form 4506T “Request for Transcript of Tax Return”."}),new p({imageURL:"".concat(n("73dd")),link:"http://www.ssa.gov/",title:"Internal Revenue Service",content:"The SSA delivers services through a nationwide network of over 1,400 sites such as regional and field offices, teleservice and processing centers."}),new p({imageURL:"".concat(n("1a46")),link:"http://www.formi9.com/",title:"Form I-9 Compliance",content:"We provide cutting proactive and preventative SAAS technology solutions and consulting services for Form I-9 and E-Verify compliance. Our team is uniquely positioned to materially assist employers in maximizing the benefits and cost savings inherent with electronic Form I-9 processing, automated right to work verifications (E-Verify), remote hire options, auditing, secure online storage, and consulting services to help employers achieve a compliant paperless process."}),new p({imageURL:"".concat(n("728a")),link:"https://thepbsa.org/",title:"Professional Background Screening Association",content:"Identity verification at the speed of life. It's as simple as an ID and a selfie. Our document verification and facial biometrics technology lets your users verify themselves anywhere, anytime."}))},mounted:function(){this.setAnimation()},methods:{setAnimation:function(){var t=this.$refs.container,e=t.children,n=new w["f"]({scrollTrigger:{trigger:t,start:"50px 90%"}});e.forEach((function(t,e){n.from(t,.5,{autoAlpha:0,y:150,ease:w["c"].easeOut},"-=0.4")}))}}},_=k,y=(n("af97"),Object(v["a"])(_,l,f,!1,null,"1031908a",null)),C=y.exports,I=n("e50b"),S={name:"PartnersComponent",components:{SectionTalkBusiness:I["a"],SectionPartners:C,SectionParallax:r["a"]},parallaxModel:new c["a"]({imageURL:"".concat(n("d9d0"))})},R=S,A=Object(v["a"])(R,s,o,!1,null,null,null),P=A.exports,L={name:"PagePartners",components:{PartnersComponent:P}},O=L,T=Object(v["a"])(O,a,i,!1,null,null,null);e["default"]=T.exports},"728a":function(t,e,n){t.exports=n.p+"img/pbsa-logo.ff96347b.svg"},"73dd":function(t,e,n){t.exports=n.p+"img/social-security-logo.fa5e9491.svg"},"857a":function(t,e,n){var a=n("1d80"),i=/"/g;t.exports=function(t,e,n,s){var o=String(a(t)),r="<"+e;return""!==n&&(r+=" "+n+'="'+String(s).replace(i,"&quot;")+'"'),r+">"+o+"</"+e+">"}},9911:function(t,e,n){"use strict";var a=n("23e7"),i=n("857a"),s=n("af03");a({target:"String",proto:!0,forced:s("link")},{link:function(t){return i(this,"a","href",t)}})},af03:function(t,e,n){var a=n("d039");t.exports=function(t){return a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},af97:function(t,e,n){"use strict";var a=n("4393"),i=n.n(a);i.a},bf6e:function(t,e,n){},cb79:function(t,e,n){},d9d0:function(t,e,n){t.exports=n.p+"img/parallax-partners.ccee54f4.jpg"},e50b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("section-parallax",{attrs:{model:t.$options.parallaxModel}},[n("header",{staticClass:"text-center"},[n("h2",{staticClass:"text-white"},[t._v("Let's talk Business")]),n("p",{staticClass:"text-intro mb-5 text-light"},[t._v("Talk to a Specialist")])]),n("call-block",{staticClass:"text-light",attrs:{"is-inline":!0}})],1)],1)},i=[],s=n("c463"),o=n("fe2c"),r=n("74b5"),c={name:"SectionTalkBusiness",components:{CallBlock:r["a"],SectionParallax:s["a"]},parallaxModel:new o["a"]({imageURL:"".concat(n("1bc0"))}),eMail:"support@support.net"},l=c,f=(n("1a2d"),n("2877")),u=Object(f["a"])(l,a,i,!1,null,"09b674b6",null);e["a"]=u.exports},ef1b:function(t,e,n){t.exports=n.p+"img/onfido-logo.a3519078.svg"},effc:function(t,e,n){"use strict";var a=n("cb79"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-8f124688.c2e7d2a6.js.map