(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6ZY7":function(t,n,l){"use strict";l.r(n);var e=l("CcnG"),u=function(){return function(){}}(),i=l("y5Pl"),o=l("M+1Z"),s=l("JEFa"),r=l("fess"),c=l("pMnS"),a=l("aQxW"),d=l("NMrR"),b=l("KzlR"),p=l("i0AA"),m=l("Ip0R"),f=function(t){return t.CUSTOMERS_QUERY="[Customers] Query",t.CUSTOMERS_LOADED="[Customers] Fetched",t.CUSTOMERS_ADDED="[Customers] Added",t.CUSTOMERS_EDITED="[Customers] Edited",t.CUSTOMERS_DELETED="[Customers] Deleted",t.CUSTOMERS_ERROR="[Customers] Error",t}({}),h=function(){return function(){this.type=f.CUSTOMERS_QUERY}}(),O=function(){return function(t){this.payload=t,this.type=f.CUSTOMERS_LOADED}}(),D=function(){return function(t){this.payload=t,this.type=f.CUSTOMERS_ADDED}}(),y=function(){return function(t){this.payload=t,this.type=f.CUSTOMERS_EDITED}}(),g=function(){return function(t){this.payload=t,this.type=f.CUSTOMERS_DELETED}}(),E=function(){return function(t){this.payload=t,this.type=f.CUSTOMERS_ERROR}}(),j=l("yGQT"),S=Object(j.u)("customers"),v=Object(j.w)(S,function(t){return t.customers}),C=Object(j.w)(S,function(t){return t.isLoading}),R=(Object(j.w)(S,function(t){return t.error}),l("67Y/")),w=l("t9fZ"),M=l("d2bA"),_=l("h9cb"),T=function(){function t(t,n,l){this.modalService=t,this.store=n,this.afAuth=l,this.modalConfig={class:"modal-dialog-centered"}}return t.prototype.ngOnInit=function(){var t=this;this.isLoading$=this.store.select(C),this.customersSub=this.store.select(v).pipe(Object(R.a)(function(n){return t.user&&!n&&t.store.dispatch(new h),n})).subscribe(function(n){if(n&&0!==n.length){var l=Number(n[n.length-1].id);t.lastCustomerIndex=l}else t.lastCustomerIndex=0;t.customers=n})},Object.defineProperty(t.prototype,"user",{get:function(){return this.afAuth.auth.currentUser},enumerable:!0,configurable:!0}),t.prototype.ngOnDestroy=function(){this.customersSub&&this.customersSub.unsubscribe()},t.prototype.onAddCustomer=function(){var t=this;this.modalRef=this.modalService.show(_.a,this.modalConfig),this.modalRef.content.heading="Add new customer",this.modalRef.content.customer.id=this.lastCustomerIndex+1,this.modalRef.content.customerData.pipe(Object(w.a)(1)).subscribe(function(n){t.store.dispatch(new D({customer:n}))})},t.prototype.openEditCustomerModal=function(t){var n=this;this.modalRef=this.modalService.show(_.a,this.modalConfig),this.modalRef.content.heading="Edit customer",this.modalRef.content.customer={key:t.key,id:t.id||null,name:t.name||null,description:t.description||null},this.modalRef.content.customerData.pipe(Object(w.a)(1)).subscribe(function(t){n.store.dispatch(new y({customer:t}))})},t.prototype.openConfirmModal=function(t){var n=this;this.modalRef=this.modalService.show(M.a,this.modalConfig),this.modalRef.content.confirmation.pipe(Object(w.a)(1)).subscribe(function(l){l&&n.store.dispatch(new g({customer:t}))})},t.prototype.onCustomerEdit=function(t){this.openEditCustomerModal(t)},t.prototype.onCustomerDelete=function(t){this.openConfirmModal(t)},t}(),U=l("ZBkt"),x=e.rb({encapsulation:0,styles:[[""]],data:{}});function L(t){return e.Ob(0,[(t()(),e.tb(0,0,null,null,2,"div",[["class","mt-4 white"]],null,null,null,null,null)),(t()(),e.tb(1,0,null,null,1,"app-customers-list",[],null,[[null,"customerEdited"],[null,"customerDeleted"]],function(t,n,l){var e=!0,u=t.component;return"customerEdited"===n&&(e=!1!==u.onCustomerEdit(l)&&e),"customerDeleted"===n&&(e=!1!==u.onCustomerDelete(l)&&e),e},a.b,a.a)),e.sb(2,114688,null,0,d.a,[],{customers:[0,"customers"]},{customerDeleted:"customerDeleted",customerEdited:"customerEdited"})],function(t,n){t(n,2,0,n.component.customers)},null)}function A(t){return e.Ob(0,[(t()(),e.tb(0,0,null,null,3,"div",[["class","d-flex justify-content-center align-items-center"],["style","margin-top: 200px"]],null,null,null,null,null)),(t()(),e.tb(1,0,null,null,2,"div",[["class","spinner-grow text-primary"],["role","status"],["style","width: 4rem; height: 4rem;"]],null,null,null,null,null)),(t()(),e.tb(2,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(t()(),e.Mb(-1,null,["Loading..."]))],null,null)}function I(t){return e.Ob(0,[(t()(),e.tb(0,0,null,null,4,"div",[["class","white px-4 section-header"]],null,null,null,null,null)),(t()(),e.tb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(t()(),e.Mb(-1,null,["Songs list"])),(t()(),e.tb(3,0,null,null,1,"p",[["class","grey-text pt-3"]],null,null,null,null,null)),(t()(),e.Mb(-1,null,["Manage your songs list"])),(t()(),e.tb(5,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(t()(),e.tb(6,0,null,null,8,"div",[["class","media"]],null,null,null,null,null)),(t()(),e.tb(7,0,null,null,0,"img",[["alt","Generic placeholder image"],["class","d-flex align-self-center mr-3"],["src","https://mdbootstrap.com/img/Photos/Others/placeholder7.jpg"]],null,null,null,null,null)),(t()(),e.tb(8,0,null,null,6,"div",[["class","media-body"]],null,null,null,null,null)),(t()(),e.tb(9,0,null,null,1,"h5",[["class","mt-0 font-weight-bold"]],null,null,null,null,null)),(t()(),e.Mb(-1,null,["Center-aligned media"])),(t()(),e.tb(11,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),e.Mb(-1,null,["Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."])),(t()(),e.tb(13,0,null,null,1,"p",[["class","mb-0"]],null,null,null,null,null)),(t()(),e.Mb(-1,null,["Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."])),(t()(),e.tb(15,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(t()(),e.tb(16,0,null,null,10,"div",[["class","col-md-6"]],null,null,null,null,null)),(t()(),e.tb(17,0,null,null,9,"div",[["class","container-fluid pt-5 pb-5"]],null,null,null,null,null)),(t()(),e.tb(18,0,null,null,8,"div",[["class","pt-3 pb-5"]],null,null,null,null,null)),(t()(),e.tb(19,0,null,null,2,"button",[["color","primary"],["mdbBtn",""]],null,[[null,"click"]],function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.onAddCustomer()&&e),e},b.w,b.i)),e.sb(20,114688,null,0,p.gb,[e.k,e.E],{color:[0,"color"]},null),(t()(),e.Mb(-1,0,["Play"])),(t()(),e.ib(16777216,null,null,1,null,L)),e.sb(23,16384,null,0,m.k,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(t()(),e.ib(16777216,null,null,2,null,A)),e.sb(25,16384,null,0,m.k,[e.P,e.M],{ngIf:[0,"ngIf"]},null),e.Gb(131072,m.b,[e.h]),(t()(),e.tb(27,0,null,null,2,"div",[["class","col-md-6"]],null,null,null,null,null)),(t()(),e.tb(28,0,null,null,1,"div",[["style","margin-top: 50px;"]],null,null,null,null,null)),(t()(),e.tb(29,0,null,null,0,"iframe",[["allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"],["allowfullscreen",""],["class","youTubePlayer"],["height","315"],["id","videoPlayer"],["src","https://www.youtube.com/embed/hjgPCxO-ic0?enablejsapi=1"],["style","border-color: rgb(221, 44, 0);"],["width","560"]],null,null,null,null,null))],function(t,n){var l=n.component;t(n,20,0,"primary"),t(n,23,0,l.customers),t(n,25,0,e.Nb(n,25,0,e.Fb(n,26).transform(l.isLoading$)))},null)}function $(t){return e.Ob(0,[(t()(),e.tb(0,0,null,null,1,"app-customers",[],null,null,null,I,x)),e.sb(1,245760,null,0,T,[p.Y,j.n,U.a],null,null)],function(t,n){t(n,1,0)},null)}var k=e.pb("app-customers",T,$,{},{},[]),P=l("gIcY"),F=l("PCNd"),Y=l("ZYCi"),q=function(){return function(){}}(),N={customers:null,isLoading:!0,error:null};function G(t,n){switch(void 0===t&&(t=N),n.type){case f.CUSTOMERS_QUERY:return Object.assign({},t,{isLoading:!0});case f.CUSTOMERS_LOADED:return Object.assign({},t,{customers:n.payload.customers,isLoading:!1});case f.CUSTOMERS_ERROR:return Object.assign({},t,{isLoading:!1,error:n.payload.error});default:return t}}var Q=l("mrSG"),Z=l("jYNz"),J=l("/PH2"),z=l("15JJ"),K=l("9Z1F"),B=l("F/XL"),X=l("Xd88"),H=function(){function t(t,n,l){var e=this;this.actions$=t,this.customersService=n,this.store=l,this.query$=this.actions$.pipe(Object(Z.d)(f.CUSTOMERS_QUERY),Object(J.a)(this.store.pipe(Object(j.x)(X.e))),Object(z.a)(function(t){return e.customersService.get(t[1].uid).pipe(Object(R.a)(function(t){var n=t.map(function(t){var n=t.payload.key,l=t.payload.val();return{key:n,id:l.id,name:l.name,description:l.description}});return new O({customers:n})}),Object(K.a)(function(t){return Object(B.a)(new E({error:t}))}))})),this.added$=this.actions$.pipe(Object(Z.d)(f.CUSTOMERS_ADDED),Object(R.a)(function(t){return t.payload}),Object(J.a)(this.store.pipe(Object(j.x)(X.e))),Object(z.a)(function(t){return e.customersService.add(t[0].customer,t[1].uid)})),this.edit$=this.actions$.pipe(Object(Z.d)(f.CUSTOMERS_EDITED),Object(R.a)(function(t){return t.payload}),Object(J.a)(this.store.pipe(Object(j.x)(X.e))),Object(z.a)(function(t){return e.customersService.update(t[0].customer,t[1].uid).pipe(Object(K.a)(function(t){return Object(B.a)(new E({error:t}))}))})),this.delete$=this.actions$.pipe(Object(Z.d)(f.CUSTOMERS_DELETED),Object(R.a)(function(t){return t.payload}),Object(J.a)(this.store.pipe(Object(j.x)(X.e))),Object(z.a)(function(t){return e.customersService.delete(t[0].customer,t[1].uid)}))}return Object(Q.__decorate)([Object(Z.b)(),Object(Q.__metadata)("design:type",Object)],t.prototype,"query$",void 0),Object(Q.__decorate)([Object(Z.b)({dispatch:!1}),Object(Q.__metadata)("design:type",Object)],t.prototype,"added$",void 0),Object(Q.__decorate)([Object(Z.b)({dispatch:!1}),Object(Q.__metadata)("design:type",Object)],t.prototype,"edit$",void 0),Object(Q.__decorate)([Object(Z.b)({dispatch:!1}),Object(Q.__metadata)("design:type",Object)],t.prototype,"delete$",void 0),t}(),W=l("7dA5");l.d(n,"CustomersModuleNgFactory",function(){return V});var V=e.qb(u,[],function(t){return e.Cb([e.Db(512,e.j,e.bb,[[8,[i.a,o.a,s.a,r.a,c.a,k,b.c,b.d,b.b]],[3,e.j],e.x]),e.Db(4608,m.m,m.l,[e.u,[2,m.C]]),e.Db(4608,P.x,P.x,[]),e.Db(4608,P.d,P.d,[]),e.Db(4608,p.zb,p.zb,[]),e.Db(1073742336,m.c,m.c,[]),e.Db(1073742336,p.L,p.L,[]),e.Db(1073742336,p.K,p.K,[]),e.Db(1073742336,p.I,p.I,[]),e.Db(1073742336,P.w,P.w,[]),e.Db(1073742336,P.i,P.i,[]),e.Db(1073742336,P.s,P.s,[]),e.Db(1073742336,p.m,p.m,[]),e.Db(1073742336,p.p,p.p,[]),e.Db(1073742336,F.a,F.a,[]),e.Db(1073742336,Y.r,Y.r,[[2,Y.w],[2,Y.n]]),e.Db(1073742336,q,q,[]),e.Db(1073742336,p.Eb,p.Eb,[]),e.Db(1073742336,p.pc,p.pc,[]),e.Db(1024,j.E,function(){return[{}]},[]),e.Db(1024,j.j,function(){return[{key:"customers",reducerFactory:j.s,metaReducers:[],initialState:void 0}]},[]),e.Db(1024,j.F,j.L,[e.q,j.E,j.j]),e.Db(1024,j.D,function(){return[G]},[]),e.Db(1024,j.G,function(t){return[t]},[j.D]),e.Db(1024,j.b,function(t,n,l){return[j.M(t,n,l)]},[e.q,j.D,j.G]),e.Db(1073873408,j.o,j.o,[j.F,j.b,j.g,j.p]),e.Db(512,H,H,[Z.a,W.a,j.n]),e.Db(1024,Z.i,function(t){return[Z.e(t)]},[H]),e.Db(1073742336,Z.g,Z.g,[Z.f,Z.i,[2,j.p],[2,j.o]]),e.Db(1073742336,u,u,[]),e.Db(1024,Y.l,function(){return[[{path:"",component:T}]]},[])])})}}]);