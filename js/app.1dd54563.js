(function(t){function e(e){for(var s,a,o=e[0],c=e[1],u=e[2],d=0,m=[];d<o.length;d++)a=o[d],i[a]&&m.push(i[a][0]),i[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},i={app:0},r=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/veganfriendly-menus/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01e0":function(t,e,n){},"0431":function(t,e,n){},"49b6":function(t,e,n){"use strict";var s=n("01e0"),i=n.n(s);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav-bar"),n("router-view")],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[n("div",{staticClass:"navbar-end"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("\n        תפריטים\n      ")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/reviews"}},[t._v("\n        ביקורות\n      ")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/images"}},[t._v("\n        תמונות\n      ")])],1)])])},o=[],c={},u=c,l=n("2877"),d=Object(l["a"])(u,a,o,!1,null,null,null),m=d.exports,p={components:{navBar:m}},f=p,v=Object(l["a"])(f,i,r,!1,null,null,null),h=v.exports,_=(n("20d6"),n("96cf"),n("3b8d")),g=n("5176"),b=n.n(g),y=(n("7514"),n("db0c")),I=n.n(y),w=(n("55dd"),n("ac6a"),n("2f62")),C=n("f499"),x=n.n(C),S=n("bc3a"),k=n.n(S),$=(n("3e8f"),"https://app.vegan-friendly.co.il"),j="",O={login:"admin",password:"Fri3ndlyv3gaN"},R=314;function E(){return R++}function N(){return k.a.get("".concat($,"/admin/restaurants/list?hash=").concat(j)).then(function(t){var e=t.data;return e}).catch(function(t){return console.log(t)})}function P(){return k.a.post("".concat($,"/admin/login"),O).then(function(t){var e=t.data;j=e.hash}).catch(function(t){})}function M(t){return k.a.get("".concat($,"/admin/menu_items/list/").concat(t,"?hash=").concat(j)).then(function(t){var e=t.data;return e})}function D(){return k.a.get("".concat($,"/admin/menu_sections/list?hash=").concat(j)).then(function(t){var e=t.data;return e.sort(function(t,e){return t.position-e.position})})}function F(t,e){return k.a.post("".concat($,"/admin/menu_items/set?hash=").concat(j),{restaurant_id:+t,menu_items:x()(e)}).then(function(t){var e=t.data;return console.log(e),e})}var q={login:P,getRests:N,getRestItems:M,makeId:E,getSections:D,saveCanges:F};s["a"].use(w["a"]);var J=new w["a"].Store({state:{rests:[],selectedRest:null,restItems:[],sections:[]},mutations:{setRests:function(t,e){var n=e.rests;t.rests=n},setRest:function(t,e){var n=e.rest,s=e.items;t.selectedRest=n,t.restItems=s},setSections:function(t,e){var n=e.sections;t.sections=n},setItems:function(t,e){var n=e.restItems;t.restItems=n},addSection:function(t,e){var n=e.newSection;t.sections.push(n)},changeSectionName:function(t,e){var n=e.sectionIdx,s=e.section;t.sections[n].title=s.title},changeSection:function(t,e){var n=e.sectionIdx,s=e.section;t.restItems.forEach(function(e){e.section_id===s.id&&(e.section_id=t.sections[n].id)})}},getters:{rests:function(t){var e=t.rests;return e},rest:function(t){var e=t.selectedRest;return e},itemsForDisplay:function(t){var e=t.restItems,n=t.sections;return I()(e.reduce(function(t,e){if(t[e.section_id])t[e.section_id].items.push(e);else{var s=n.find(function(t){var n=t.id;return n===e.section_id});t[e.section_id]=b()({},s,{items:[e]})}return t},{})).sort(function(t,e){return t.position-e.position})},sections:function(t){var e=t.sections;return e}},actions:{loadRests:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(e){var n,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,q.getRests();case 3:s=t.sent,n({type:"setRests",rests:s});case 5:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),loadSections:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(e){var n,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,q.getSections();case 3:s=t.sent,s.sort(function(t,e){return t.position-e.position}),n({type:"setSections",sections:s});case 6:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),setRest:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(e,n){var s,i,r,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,i=e.state,r=n.restId,t.next=4,q.getRestItems(r);case 4:a=t.sent,o=i.rests.find(function(t){var e=t.id;return e===r}),s({type:"setRest",rest:o,items:a});case 7:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),saveCanges:function(){var t=Object(_["a"])(regeneratorRuntime.mark(function t(e,n){var s,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.state,i=n.restId,t.prev=2,t.next=5,q.saveCanges(i,s.restItems);case 5:console.log(s.restItems),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),console.log(t.t0);case 11:case"end":return t.stop()}},t,null,[[2,8]])}));function e(e,n){return t.apply(this,arguments)}return e}(),addSection:function(t){var e=t.commit,n=t.state,s=t.dispatch,i={id:q.makeId(),title:"",position:n.sections[n.sections.length-1].position+1};e({type:"addSection",newSection:i}),s({type:"addItem",sectionId:i.id})},deleteItem:function(t,e){var n=t.commit,s=t.state,i=e.itemId,r=s.restItems.filter(function(t){var e=t.id;return e!==i});n({type:"setItems",restItems:r})},addItem:function(t,e){var n=t.commit,s=t.state,i=e.sectionId,r={id:q.makeId(),section_id:i,title:"Item name",description:"item description",price:0},a=s.restItems.slice();a.push(r),n({type:"setItems",restItems:a})},deleteSection:function(t,e){var n=t.commit,s=t.state,i=e.sectionId,r=s.restItems.filter(function(t){var e=t.section_id;return e!==i});n({type:"setItems",restItems:r})},editItem:function(t,e){var n=t.commit,s=t.state,i=e.item,r=s.restItems.findIndex(function(t){var e=t.id;return i.id===e}),a=s.restItems.slice();a.splice(r,1,i),n({type:"setItems",restItems:a})},changeSectionName:function(t,e){var n=t.commit,s=t.state,i=e.section,r=s.sections.findIndex(function(t){var e=t.title;return e===i.title});-1===r?(r=s.sections.findIndex(function(t){var e=t.id;return e===i.id}),n({type:"changeSectionName",sectionIdx:r,section:i})):n({type:"changeSection",sectionIdx:r,section:i})}}}),T=n("8c4f"),B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"columns"},[n("restsPanel",{attrs:{restaurants:t.restaurants}}),n("router-view")],1)},z=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"is-one-quarter column"},[n("p",{staticClass:"panel-heading"},[t._v("restaurants")]),n("div",{staticClass:"panel-block"},[n("p",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"search"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._m(0)])]),t._l(t.restsToDisplay,function(e){return n("a",{key:e.id,staticClass:"panel-block rest-wrapper",on:{click:function(n){return t.openMenu(e.id)}}},[t._v("\n    "+t._s(e.name)+"\n    "),n("span",{staticClass:"panel-icon edit-icon",on:{click:function(n){return n.stopPropagation(),t.editMenu(e.id)}}},[t._v("ערוך")])])})],2)},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fas fa-search",attrs:{"aria-hidden":"true"}})])}],H=(n("6762"),n("2fdb"),n("7f7f"),{props:["restaurants"],data:function(){return{query:""}},methods:{openMenu:function(t){this.$router.push("/rest/".concat(t))},editMenu:function(t){this.$router.push("/rest/".concat(t,"/edit"))}},computed:{restsToDisplay:function(){var t=this;return this.restaurants.filter(function(e){var n=e.name;return n.includes(t.query)})}}}),K=H,L=(n("f94d"),Object(l["a"])(K,A,G,!1,null,"fafc6d76",null)),Q=L.exports,U={name:"menus-page",created:function(){var t=this;q.login().then(function(e){t.$store.dispatch("loadRests"),t.$store.dispatch("loadSections")})},components:{restsPanel:Q},computed:{restaurants:function(){return this.$store.getters.rests}}},V=U,W=Object(l["a"])(V,B,z,!1,null,"4cc447c6",null),X=W.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.rest&&t.itemsForDisplay?n("section",{staticClass:"column card"},[n("header",{staticClass:"panel-heading"},[n("span",[t._v("שם המסעדה: "+t._s(t.rest.name))]),t.isEditMode?n("button",{on:{click:function(e){return t.saveCanges()}}},[t._v("עדכן")]):t._e()]),t.isEditMode?n("div",[t._l(t.itemsForDisplay,function(t){return n("edit-section",{key:t.id,attrs:{section:t}})}),n("button",{staticClass:"add-category",on:{click:function(e){return t.addSection()}}},[n("span",[t._v("+")])])],2):n("div",t._l(t.itemsForDisplay,function(t){return n("menu-section",{key:t.id,attrs:{section:t}})}),1),n("div")]):t._e()},Z=[],tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h2",{staticClass:"title"},[t._v(t._s(t.section.title))]),t.section.items.length?n("div",[n("table",{staticClass:"table is-hoverable is-fullwidth"},[t._m(0),n("tbody",t._l(t.section.items,function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.description))]),n("td",[t._v(t._s(e.price))])])}),0)])]):n("h2",[t._v("אין מנות בקטגוריה זו")])])},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("שם המנה")]),n("th",[t._v("תיאור")]),n("th",[t._v("מחיר")])])])}],nt={props:["section"]},st=nt,it=(n("7625"),Object(l["a"])(st,tt,et,!1,null,"65e334c4",null)),rt=it.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"title-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.section.title,expression:"section.title"}],ref:"section-title",staticClass:"title",attrs:{list:"titles",placeholder:"הכנס שם קטגוריה"},domProps:{value:t.section.title},on:{change:function(e){return t.changeSectionName(t.section)},click:function(e){return t.clearSectionName()},input:function(e){e.target.composing||t.$set(t.section,"title",e.target.value)}}}),n("datalist",{staticClass:"title",attrs:{id:"titles"}},t._l(t.sections,function(t){return n("option",{key:t.id,domProps:{value:t.title}})}),0)]),t.section.items.length?n("div",[n("table",{staticClass:"table is-hoverable is-fullwidth"},[t._m(0),n("tbody",t._l(t.sectionItems,function(e){return n("tr",{key:e.id},[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"item.name"}],attrs:{type:"text",placeholder:"enter item name"},domProps:{value:e.name},on:{input:[function(n){n.target.composing||t.$set(e,"name",n.target.value)},function(n){return t.editItem(e)}]}})]),n("td",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"item.description"}],attrs:{type:"text",placeholder:"enter description"},domProps:{value:e.description},on:{input:[function(n){n.target.composing||t.$set(e,"description",n.target.value)},function(n){return t.editItem(e)}]}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"item.price"}],attrs:{type:"text",placeholder:"enter price"},domProps:{value:e.price},on:{input:[function(n){n.target.composing||t.$set(e,"price",n.target.value)},function(n){return t.editItem(e)}]}})]),n("a",{staticClass:"delete is-medium",on:{click:function(n){return t.deleteItem(e.id)}}})])}),0)])]):t._e(),n("button",{on:{click:function(e){return t.addItem()}}},[t._v("add item")]),n("button",{on:{click:function(e){return t.deleteSection()}}},[t._v("delete category")])])},ot=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("שם המנה")]),n("th",[t._v("תיאור")]),n("th",[t._v("מחיר")])])])}],ct=(n("3c43"),{props:["section"],data:function(){return{sectionItems:JSON.parse(x()(this.section.items))}},methods:{deleteItem:function(t){this.$store.dispatch({type:"deleteItem",itemId:t})},addItem:function(){this.$store.dispatch({type:"addItem",sectionId:this.section.id})},deleteSection:function(){this.$store.dispatch({type:"deleteSection",sectionId:this.section.id})},editItem:function(t){this.$store.dispatch({type:"editItem",item:t})},changeSectionName:function(t){this.$store.dispatch({type:"changeSectionName",section:t})},clearSectionName:function(){this.section.title=""}},computed:{sections:function(){return this.$store.getters.sections}},watch:{section:function(){this.sectionItems=JSON.parse(x()(this.section.items))}}}),ut=ct,lt=(n("71c5"),Object(l["a"])(ut,at,ot,!1,null,"63bb3f55",null)),dt=lt.exports,mt={created:function(){this.setMenu()},computed:{restId:function(){return this.$route.params.id},isEditMode:function(){return!!this.$route.params.edit},rest:function(){return this.$store.getters.rest},itemsForDisplay:function(){return JSON.parse(x()(this.$store.getters.itemsForDisplay))}},methods:{setMenu:function(){this.$store.dispatch({type:"setRest",restId:this.restId})},addSection:function(){this.$store.dispatch({type:"addSection"})},saveCanges:function(){this.$store.dispatch({type:"saveCanges",restId:this.restId})}},watch:{restId:function(){this.setMenu()}},components:{menuSection:rt,editSection:dt}},pt=mt,ft=(n("a268"),Object(l["a"])(pt,Y,Z,!1,null,"75cbc748",null)),vt=ft.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.reviews.length?n("section",t._l(t.reviews,function(e){return n("section",{key:e.id,staticClass:"column card"},[n("header",{staticClass:"panel-heading"},[n("span",[t._v("מזהה: "+t._s(458613))]),n("span",[t._v(t._s(e.user.name))]),n("span",[t._v(t._s(e.user.mail))])]),n("div",{staticClass:"card-content"},[n("div",{staticClass:"flex space-between"},[n("span",{staticClass:"rest-name"},[t._v("מסעדת "+t._s(e.restaurant_name))]),n("span",t._l(e.rating,function(t){return n("i",{key:t,staticClass:"fa fa-star"})}),0)]),n("div",{staticClass:"review-details"},[t._v(t._s(e.details))]),n("div",[t._v("\n        משתמש זה כתב "+t._s(e.user_reviews_num)+" תגובות בעבר\n        "),n("a",[t._v("לכל התגובות")])])]),t._m(0,!0)])}),0):t._e()},_t=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"card-footer"},[n("div",[t._v("מחק")]),n("div",[t._v("אשר")]),n("div",[t._v("אשר משתמש")]),n("div",[t._v("חסום משתמש")])])}],gt=n("795b"),bt=n.n(gt),yt=[{id:7,restaurant_name:"החתול הירוק",rating:4,user_id:3,details:"המלצר קרא לי מכוערת אבל האוכל היה טעים אז בסדר",user_reviews_num:5},{id:8,restaurant_name:"אלגריה",rating:5,user_id:3,details:"מושלםםםםם",user_reviews_num:5},{id:9,restaurant_name:"שאפל",rating:5,user_id:9,details:"המקום הכי טעים ומושלם שקיים בעולם כולו",user_reviews_num:3},{id:10,restaurant_name:"באנה",rating:1,user_id:4,details:"מעצבן אותי שאין להם שם אוכל בלי ירקות",user_reviews_num:1}],It=[{id:3,name:"קים קרדשיאן",mail:"kkw@gmail.com"},{id:9,name:"סטטיק",mail:"statboy@gmail.com"},{id:4,name:"בריטני ספירס",mail:"itsbritneybitch@gmail.com"}];function wt(){return bt.a.resolve(yt.map(function(t){return t.user=It.find(function(e){return e.id===t.user_id}),t}))}var Ct={getReviews:wt},xt={data:function(){return{reviews:[]}},created:function(){var t=this;Ct.getReviews().then(function(e){return t.reviews=e})}},St=xt,kt=(n("beaf"),Object(l["a"])(St,ht,_t,!1,null,"48a32875",null)),$t=kt.exports,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.photos.length?n("section",t._l(t.photos,function(e){return n("section",{key:e.id,staticClass:"column card"},[n("header",{staticClass:"panel-heading"},[n("span",[t._v("מזהה: "+t._s(458613))]),n("span",[t._v(t._s(e.user.name))]),n("span",[t._v(t._s(e.user.mail))])]),n("div",{staticClass:"card-content"},[n("div",[n("span",{staticClass:"rest-name"},[t._v("מסעדת "+t._s(e.restaurant_name))])]),n("div",{staticClass:"rest-photo",style:{backgroundImage:"url("+e.photo+")"}}),n("div",{staticClass:"photo-details"},[t._v(t._s(e.details))]),n("div",[t._v("\n        משתמש זה פרסם "+t._s(e.user_photos_num)+" תמונות בעבר\n        "),n("a",[t._v("לכל התמונות")])])]),t._m(0,!0)])}),0):t._e()},Ot=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"card-footer"},[n("div",[t._v("מחק")]),n("div",[t._v("אשר")]),n("div",[t._v("אשר משתמש")]),n("div",[t._v("חסום משתמש")])])}],Rt=[{id:7,restaurant_name:"החתול הירוק",user_id:3,photo:"https://vegansontop.co.il/wp-content/uploads/16358872_1772059819721821_1929122999_n.jpg",details:"פיצה טעימה",user_photos_num:5},{id:8,restaurant_name:"אלגריה",photo:"https://img.mako.co.il/2018/02/25/evabatia2_i.jpg",user_id:3,details:"מושלםםםםם",user_photos_num:5},{id:9,restaurant_name:"שאפל",photo:"https://www.vegan-friendly.co.il/img/pictures/thumb_1448969512_3403.jpg",user_id:9,details:"המקום הכי מושלם מי שלא שם לא קיים",user_photos_num:3},{id:10,restaurant_name:"באנה",photo:"https://static2.timeout.co.il/media/2017/06/sizes/DSF9957_P_wo_500_367.jpg",user_id:4,details:"מעצבן אותי שאין להם שם אוכל בלי ירקות",user_photos_num:1}],Et=[{id:3,name:"קים קרדשיאן",mail:"kkw@gmail.com"},{id:9,name:"סטטיק",mail:"statboy@gmail.com"},{id:4,name:"בריטני ספירס",mail:"itsbritneybitch@gmail.com"}];function Nt(){return bt.a.resolve(Rt.map(function(t){return t.user=Et.find(function(e){return e.id===t.user_id}),t}))}var Pt={getphotos:Nt},Mt={data:function(){return{photos:[]}},created:function(){var t=this;Pt.getphotos().then(function(e){return t.photos=e})}},Dt=Mt,Ft=(n("49b6"),Object(l["a"])(Dt,jt,Ot,!1,null,"8416823e",null)),qt=Ft.exports;s["a"].use(T["a"]);var Jt=new T["a"]({routes:[{path:"/",component:X,children:[{path:"rest/:id",component:vt},{path:"rest/:id/:edit",component:vt}]},{path:"/reviews",component:$t},{path:"/images",component:qt}]});n("abe2"),s["a"].config.productionTip=!1,new s["a"]({router:Jt,store:J,render:function(t){return t(h)}}).$mount("#app")},"71c5":function(t,e,n){"use strict";var s=n("0431"),i=n.n(s);i.a},7625:function(t,e,n){"use strict";var s=n("dd8a"),i=n.n(s);i.a},"7d07":function(t,e,n){},a268:function(t,e,n){"use strict";var s=n("7d07"),i=n.n(s);i.a},abe2:function(t,e,n){},beaf:function(t,e,n){"use strict";var s=n("f4b6"),i=n.n(s);i.a},c665:function(t,e,n){},dd8a:function(t,e,n){},f4b6:function(t,e,n){},f94d:function(t,e,n){"use strict";var s=n("c665"),i=n.n(s);i.a}});
//# sourceMappingURL=app.1dd54563.js.map