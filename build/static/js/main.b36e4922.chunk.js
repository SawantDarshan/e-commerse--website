(this["webpackJsonpe-commerce-website"]=this["webpackJsonpe-commerce-website"]||[]).push([[0],{138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(12),c=n.n(r),i=n(7),s=n.n(i),o=n(11),u=n(14),l=n(173),j=n(175),d=n(57),b=n(176),p=n(177),m=n(178),h=n(15),x=n(22),O=n.p+"static/media/logo.59372181.jpg",f=n(10),g=n(170),v=n(18),y=Object(g.a)((function(e){return{appBar:Object(f.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(f.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(f.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}})),k=n(2),w=function(e){var t=e.totalItems,n=y(),a=Object(h.f)();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(l.a,{position:"fixed",className:n.appBar,color:"inherit",children:Object(k.jsxs)(j.a,{children:[Object(k.jsxs)(d.a,{to:"/",component:x.b,variant:"h6",className:n.title,color:"inherit",children:[Object(k.jsx)("img",{src:O,alt:"commerce.js",height:"25px",className:n.image})," ","e-commerce app"]}),Object(k.jsx)("div",{className:n.grow}),"/"===a.pathname&&Object(k.jsx)("div",{className:n.button,children:Object(k.jsx)(b.a,{component:x.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(k.jsx)(p.a,{badgeContent:t,color:"secondary",children:Object(k.jsx)(m.a,{})})})})]})})})},C=n(184),S=n(179),_=n(180),N=n(181),B=n(182),T=n(183),E=Object(g.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),q=function(e){var t=e.product,n=e.onAddToCart,a=E();return Object(k.jsxs)(S.a,{className:a.root,children:[Object(k.jsx)(_.a,{className:a.media,image:t.image.url,title:t.name}),Object(k.jsxs)(N.a,{children:[Object(k.jsxs)("div",{className:a.cardContent,children:[Object(k.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.name.slice(0,10)+"..."}),Object(k.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.price.formatted_with_symbol})]}),Object(k.jsx)(d.a,{dangerouslySetInnerHTML:{__html:t.description.slice(0,25)+"..."},color:"textSecondary"})]}),Object(k.jsx)(B.a,{disableSpacing:!0,className:a.cardActions,children:Object(k.jsx)(b.a,{"aria-label":"Add to Cart",onClick:function(){return n(t.id,1)},children:Object(k.jsx)(T.a,{})})})]})},R=Object(g.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},root:{flexGrow:1}}})),A=function(e){var t=e.products,n=e.onAddToCart,a=R();return Object(k.jsxs)("main",{className:a.content,children:[Object(k.jsx)("div",{className:a.toolbar}),Object(k.jsx)(C.a,{container:!0,justifyContent:"center",spacing:4,children:t.map((function(e){var t;return Object(k.jsx)(C.a,(t={item:!0},Object(f.a)(t,"item",!0),Object(f.a)(t,"xs",12),Object(f.a)(t,"sm",6),Object(f.a)(t,"md",4),Object(f.a)(t,"lg",3),Object(f.a)(t,"children",Object(k.jsx)(q,{product:e,onAddToCart:n})),t),e.id)}))})]})},F=n(185),L=Object(g.a)((function(){return{media:{minHeight:200},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),I=function(e){var t=e.item,n=e.onUpdateCartQty,a=(e.onRemoveFromCart,L());return Object(k.jsxs)(S.a,{className:"cart-item",children:[Object(k.jsx)(_.a,{image:t.image.url,alt:t.name,className:a.media}),Object(k.jsxs)(N.a,{className:a.cardContent,children:[Object(k.jsx)(d.a,{variant:"h4",children:t.name}),Object(k.jsx)(d.a,{variant:"h5",children:t.line_total.formatted_with_symbol})]}),Object(k.jsxs)(B.a,{className:a.cardActions,children:[Object(k.jsxs)("div",{className:a.buttons,children:[Object(k.jsx)(F.a,{type:"button",size:"small",onClick:function(){n(t.id,t.quantity-1)},children:"-"}),Object(k.jsxs)(d.a,{children:["\xa0",t.quantity,"\xa0"]}),Object(k.jsx)(F.a,{type:"button",size:"small",onClick:function(){n(t.id,t.quantity+1)},children:"+"})]}),Object(k.jsx)(F.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){},children:"Remove"})]})]})},z=n(186),D=Object(g.a)((function(e){var t;return{toolbar:e.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(t={minWidth:"150px"},Object(f.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(f.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),P=function(e){var t=e.cart,n=e.handleEmptyCart,a=e.handleRemoveFromCart,r=e.handleUpdateCartQty,c=D(),i=function(){return Object(k.jsxs)(d.a,{variant:"subtitle1",children:["You have no items in your shopping cart,",Object(k.jsx)(x.b,{to:"/",className:c.link,children:"Start Adding Some"})]})},s=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(C.a,{container:!0,spacing:3,children:t.line_items.map((function(e){return Object(k.jsx)(C.a,{item:!0,xs:12,sm:4,children:Object(k.jsx)(I,{item:e,onUpdateCartQty:r,onRemoveFromCart:a})},e.id)}))}),Object(k.jsxs)("div",{className:c.cardDetails,children:[Object(k.jsxs)(d.a,{variant:"h4",children:["Subtotal:",t.subtotal.formatted_with_symbol]}),Object(k.jsxs)("div",{children:[Object(k.jsx)(F.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:function(){return n()},children:"Empty cart"}),Object(k.jsx)(F.a,{component:x.b,to:"/checkout",className:c.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})};return t.line_items?Object(k.jsxs)(z.a,{children:[Object(k.jsx)("div",{className:c.toolbar}),Object(k.jsx)(d.a,{className:c.title,variant:"h3",gutterBottom:!0,children:"Your Shopping Cart"}),t.line_items.length?Object(k.jsx)(s,{}):Object(k.jsx)(i,{})]}):"...Loading"},Q=n(189),W=n(193),J=n(194),H=n(84),U=n(201),G=n(195),V=n(197),K=n(50),M=n(81),Y=n(187),Z=n(139),X=n(188),$=function(e){var t=e.checkoutToken;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(d.a,{variant:"h6",gutterBottom:!0,children:"Order summary"}),Object(k.jsxs)(Y.a,{disablePadding:!0,children:[t.live.line_items.map((function(e){return Object(k.jsxs)(Z.a,{style:{padding:"10px 0"},children:[Object(k.jsx)(X.a,{primary:e.name,secondary:"Quantity: ".concat(e.quantity)}),Object(k.jsx)(d.a,{variant:"body2",children:e.line_total.formatted_with_symbol})]},e.name)})),Object(k.jsxs)(Z.a,{style:{padding:"10px 0"},children:[Object(k.jsx)(X.a,{primary:"Total"}),Object(k.jsx)(d.a,{variant:"subtitle1",style:{fontWeight:700},children:t.live.subtotal.formatted_with_symbol})]})]})]})},ee=Object(M.a)("pk_test_51JuHQuSA1dChhkTKvA9nzCxCm1gEtDLzKoyd9lY5X2SdSNPxTVkHVQ46o5pjNZtKx6acHVajQOPUh7IgJLl8ZBbq00mEJkyNBJ"),te=function(e){var t=e.checkoutToken,n=e.next,a=e.back,r=e.shippingData,c=e.onCaptureCheckout,i=function(){var e=Object(o.a)(s.a.mark((function e(a,i,o){var u,l,j,d,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o&&i){e.next=3;break}return e.abrupt("return");case 3:return u=i.getElement(K.CardElement),e.next=6,o.createPaymentMethod({type:"card",card:u});case 6:l=e.sent,j=l.error,d=l.paymentMethod,j?console.log("[error]",j):(b={line_items:t.live.line_items,customer:{firstname:r.firstName,lastname:r.lastName,email:r.email},shipping:{name:"International",street:r.address1,town_city:r.city,county_state:r.shippingSubdivision,postal_zip_code:r.zip,country:r.shippingCountry},fulfillment:{shipping_method:r.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:d.id}}},c(t.id,b),n());case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)($,{checkoutToken:t}),Object(k.jsx)(Q.a,{}),Object(k.jsx)(d.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(k.jsx)(K.Elements,{stripe:ee,children:Object(k.jsx)(K.ElementsConsumer,{children:function(e){var n=e.elements,r=e.stripe;return Object(k.jsxs)("form",{onSubmit:function(e){return i(e,n,r)},children:[Object(k.jsx)(K.CardElement,{}),Object(k.jsx)("br",{})," ",Object(k.jsx)("br",{}),Object(k.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(k.jsx)(F.a,{variant:"outlined",onClick:a,children:"Back"}),Object(k.jsxs)(F.a,{type:"submit",variant:"contained",disabled:!r,color:"primary",children:["Pay ",t.live.subtotal.formatted_with_symbol]})]})]})}})})]})},ne=n(51),ae=n(200),re=n(196),ce=n(192),ie=n(45),se=n(82),oe=new(n.n(se).a)("pk_test_35603a73a45431ea505df850bef74a5767a22024b1e76",!0),ue=n(198);var le=function(e){var t=e.name,n=e.label,a=e.required,r=Object(ie.d)().control;return Object(k.jsx)(C.a,{item:!0,xs:12,sm:6,children:Object(k.jsx)(ie.a,{render:function(){return Object(k.jsx)(ue.a,{defaultValue:"",control:r,fullWidth:!0,name:t,label:n,required:a})}})})},je=function(e){var t=e.checkoutToken,n=e.next,r=Object(ie.c)(),c=Object(a.useState)([]),i=Object(u.a)(c,2),l=i[0],j=i[1],b=Object(a.useState)(""),p=Object(u.a)(b,2),m=p[0],h=p[1],O=Object(a.useState)([]),f=Object(u.a)(O,2),g=f[0],v=f[1],y=Object(a.useState)(""),w=Object(u.a)(y,2),S=w[0],_=w[1],N=Object(a.useState)([]),B=Object(u.a)(N,2),T=B[0],E=B[1],q=Object(a.useState)(""),R=Object(u.a)(q,2),A=R[0],L=R[1],I=Object.entries(l).map((function(e){var t=Object(u.a)(e,2);return{id:t[0],label:t[1]}})),z=Object.entries(g).map((function(e){var t=Object(u.a)(e,2);return{id:t[0],label:t[1]}})),D=T.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})),P=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.services.localeListShippingCountries(t);case 2:a=e.sent,r=a.countries,console.log(r),j(r),h(Object.keys(r)[0]);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.services.localeListSubdivisions(t);case 2:n=e.sent,a=n.subdivisions,v(a),_(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a,r,c=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:null,e.next=3,oe.checkout.getShippingOptions(t,{country:n,region:a});case 3:r=e.sent,E(r),L(r[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){P(t.id)}),[t]),Object(a.useEffect)((function(){m&&Q(m)}),[m]),Object(a.useEffect)((function(){S&&W(t.id,m,S)}),[S]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(d.a,{variant:"h6",gutterBottom:!0,children:"Shipping address"}),Object(k.jsx)(ie.b,Object(ne.a)(Object(ne.a)({},r),{},{children:Object(k.jsxs)("form",{onSubmit:r.handleSubmit((function(e){return n(Object(ne.a)(Object(ne.a)({},e),{},{shippingCountry:m,shippingOption:A,shippingSubdivision:S}))})),children:[Object(k.jsxs)(C.a,{container:!0,spacing:3,children:[Object(k.jsx)(le,{required:!0,name:"firstName",label:"First name"}),Object(k.jsx)(le,{required:!0,name:"lastName",label:"Last name"}),Object(k.jsx)(le,{required:!0,name:"address1",label:"Address line 1"}),Object(k.jsx)(le,{required:!0,name:"email",label:"Email"}),Object(k.jsx)(le,{required:!0,name:"city",label:"City"}),Object(k.jsx)(le,{required:!0,name:"zip",label:"Zip / Postal code"}),Object(k.jsxs)(C.a,{item:!0,xs:12,sm:6,children:[Object(k.jsx)(ae.a,{children:"Shipping Country"}),Object(k.jsx)(re.a,{value:m,fullWidth:!0,onChange:function(e){return h(e.target.value)},children:I.map((function(e){return Object(k.jsx)(ce.a,{value:e.id,children:e.label},e.id)}))})]}),Object(k.jsxs)(C.a,{item:!0,xs:12,sm:6,children:[Object(k.jsx)(ae.a,{children:"Shipping Subdivisions"}),Object(k.jsx)(re.a,{value:S,fullWidth:!0,onChange:function(e){return _(e.target.value)},children:z.map((function(e){return Object(k.jsx)(ce.a,{value:e.id,children:e.label},e.id)}))})]}),Object(k.jsxs)(C.a,{item:!0,xs:12,sm:6,children:[Object(k.jsx)(ae.a,{children:"Shipping Options"}),Object(k.jsx)(re.a,{value:A,fullWidth:!0,onChange:function(e){return L(e.target.value)},children:D.map((function(e){return Object(k.jsx)(ce.a,{value:e.id,children:e.label},e.id)}))})]})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(k.jsx)(F.a,{component:x.b,to:"/cart",variant:"outlined",children:"Back To Cart"}),Object(k.jsx)(F.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})}))]})},de=Object(g.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(f.a)({marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(f.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(f.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),be=["Shipping address","Payment Details"],pe=function(e){var t=e.cart,n=e.order,r=e.onCaptureCheckout,c=e.error,i=Object(a.useState)(0),l=Object(u.a)(i,2),j=l[0],b=l[1],p=Object(a.useState)(null),m=Object(u.a)(p,2),h=m[0],O=m[1],f=Object(a.useState)({}),g=Object(u.a)(f,2),v=g[0],y=g[1],w=de();Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.checkout.generateToken(t.id,{type:"cart"});case 3:n=e.sent,O(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var C=function(){return b((function(e){return e+1}))},S=function(){return b((function(e){return e-1}))},_=function(e){y(e),C()},N=function(){return 0===j?Object(k.jsx)(je,{checkoutToken:h,next:_}):Object(k.jsx)(te,{checkoutToken:h,shippingData:v,back:S,next:C,onCaptureCheckout:r})},B=function(){return n.customer?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{children:[Object(k.jsxs)(d.a,{variant:"h5",children:["Thank you for your purchase, ",n.customer.firstname," ",n.customer.lastname,"!"]}),Object(k.jsx)(Q.a,{className:w.divider}),Object(k.jsxs)(d.a,{variant:"subtitle2",children:["Order ref: ",n.customer_reference]})]}),Object(k.jsx)("br",{}),Object(k.jsx)(F.a,{component:x.b,variant:"outlined",type:"button",to:"/",children:"Back to home"})]}):Object(k.jsx)("div",{className:w.spinner,children:Object(k.jsx)(W.a,{})})};return c&&(B=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(d.a,{variant:"h5",children:["Error: ",c]}),Object(k.jsx)("br",{}),Object(k.jsx)(F.a,{component:x.b,variant:"outlined",type:"button",to:"/",children:"Back to home"})]})}),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(J.a,{}),Object(k.jsx)("div",{className:w.toolbar}),Object(k.jsx)("main",{className:w.layout,children:Object(k.jsxs)(H.a,{className:w.paper,children:[Object(k.jsx)(d.a,{variant:"h4",align:"center",children:"Checkout"}),Object(k.jsx)(U.a,{activeStep:j,className:w.stepper,children:be.map((function(e){return Object(k.jsx)(G.a,{children:Object(k.jsx)(V.a,{children:e})},e)}))}),j===be.length?Object(k.jsx)(B,{}):h&&Object(k.jsx)(N,{})]})})]})},me=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),i=Object(u.a)(c,2),l=i[0],j=i[1],d=Object(a.useState)({}),b=Object(u.a)(d,2),p=b[0],m=b[1],O=Object(a.useState)(""),f=Object(u.a)(O,2),g=f[0],v=f[1],y=function(){var e=Object(o.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.products.list();case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.cart.retrieve();case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.cart.add(t,n);case 2:a=e.sent,j(a.cart);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.cart.update(t,{quantity:n});case 2:a=e.sent,j(a.cart);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.cart.remove(t);case 2:n=e.sent,j(n.cart);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.cart.empty();case 2:t=e.sent,j(t.cart);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.cart.refresh();case 2:t=e.sent,console.log(t),j(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe.checkout.capture(t,n);case 3:a=e.sent,m(a),T(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),v(e.t0.data.error.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){y(),C()}),[]),Object(k.jsx)(x.a,{children:Object(k.jsxs)("div",{children:[Object(k.jsx)(w,{totalItems:l.total_items}),Object(k.jsxs)(h.c,{children:[Object(k.jsx)(h.a,{exact:!0,path:"/",children:Object(k.jsx)(A,{products:n,onAddToCart:S})}),Object(k.jsx)(h.a,{exact:!0,path:"/cart",children:Object(k.jsx)(P,{cart:l,handleEmptyCart:B,handleRemoveFromCart:N,handleUpdateCartQty:_})}),Object(k.jsx)(h.a,{exact:!0,path:"/checkout",children:Object(k.jsx)(pe,{cart:l,order:p,onCaptureCheckout:E,error:g})})]})]})})};c.a.render(Object(k.jsx)(me,{}),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.b36e4922.chunk.js.map