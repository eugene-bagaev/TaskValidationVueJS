(function(e){function t(t){for(var a,o,l=t[0],i=t[1],c=t[2],d=0,f=[];d<l.length;d++)o=l[d],s[o]&&f.push(s[o][0]),s[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(f.length)f.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,l=1;l<r.length;l++){var i=r[l];0!==s[i]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},s={app:0},n=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),s=r("bb71");r("da64");a["a"].use(s["a"],{iconfont:"md"});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("StartPage")],1)},o=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"sandbox",dark:e.dark}},[r("Header",{on:{changeTheme:function(t){e.dark=!e.dark}}}),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{lg2:""}}),r("v-flex",{attrs:{lg8:""}},[r("v-card",{staticStyle:{"min-height":"100%","margin-bottom":"30px"}},[r("v-container",[r("div",{staticStyle:{"min-height":"100%","padding-top":"50px",position:"relative"}},[r("AlertComponent"),r("CallbackSpinner"),r("UsersTable"),r("Results"),r("FilesCmp")],1)])],1)],1),r("v-flex",{attrs:{lg2:""}})],1),r("Footer")],1)},i=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-container",[r("v-select",{attrs:{multiple:"",items:Array.from(e.groups).sort(function(e,t){return e-t}),label:"Выберите номер группы"},scopedSlots:e._u([{key:"prepend-item",fn:function(){return[r("v-list-tile",{attrs:{ripple:""},on:{click:e.toggle}},[r("v-list-tile-action",[r("v-checkbox",{model:{value:e.allSelected,callback:function(t){e.allSelected=t},expression:"allSelected"}})],1),r("v-list-tile-content",[r("v-list-tile-title",[e._v("Select All")])],1)],1),r("v-divider",{staticClass:"mt-2"})]},proxy:!0}]),model:{value:e.currentGroups,callback:function(t){e.currentGroups=t},expression:"currentGroups"}})],1),r("v-card-title",[e._v("\n        Группы: "+e._s(0===e.currentGroups.length?"все группы":e.currentGroups.join(", "))+"\n        "),r("v-spacer"),r("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),r("v-data-table",{staticClass:"elevation-1",attrs:{"disable-initial-sort":"",headers:e.usersTableHeaders,items:e.getCurrentUsers(),search:e.search},scopedSlots:e._u([{key:"items",fn:function(t){return[r("td",[e._v(e._s(t.item.index+1))]),r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.item.checked,expression:"props.item.checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.item.checked)?e._i(t.item.checked,null)>-1:t.item.checked},on:{change:function(r){var a=t.item.checked,s=r.target,n=!!s.checked;if(Array.isArray(a)){var o=null,l=e._i(a,o);s.checked?l<0&&e.$set(t.item,"checked",a.concat([o])):l>-1&&e.$set(t.item,"checked",a.slice(0,l).concat(a.slice(l+1)))}else e.$set(t.item,"checked",n)}}})]),r("td",{staticClass:"text-xs-left"},[r("a",{attrs:{href:"https://login.salesforce.com/?un="+t.item.userName+"&pw="+t.item.password,target:"_blank"}},[e._v("\n                    "+e._s(t.item.userName)+"\n                ")])]),r("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.fio))]),r("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.group))])]}}])}),r("div",{staticStyle:{float:"right"}},[r("v-btn",{attrs:{color:"info"},on:{click:e.getAllUsersInfo}},[e._v("Show Results for all users")]),r("v-btn",{attrs:{color:"info"},on:{click:e.getSelectedUsersInfo}},[e._v("Show Results for selected users")]),r("v-btn",{attrs:{color:"info"},on:{click:e.refresh}},[e._v("Refresh")])],1)],1)},u=[],d=(r("6762"),r("2fdb"),r("4f7f"),r("ac6a"),r("5df3"),r("1c4c"),r("55dd"),window.location.href.includes("localhost")?"http://localhost:8080/getUsers":"https://task-validation-lc.herokuapp.com/getUsers"),f=window.location.href.includes("localhost")?"http://localhost:8080/usersInfo":"https://task-validation-lc.herokuapp.com/usersInfo",h=window.location.href.includes("localhost")?"http://localhost:8080/userFile":"https://task-validation-lc.herokuapp.com/userFile",p="Не найден файл",m="You must select at least 1 user",v="Количество ошибок - ",g="#EF5350",b={name:"UsersTable",data:function(){return{users:[],usersTableHeaders:[{text:"#",value:"index",sortable:!1,align:"left"},{text:"Select User",value:"checked",sortable:!1},{text:"Login",value:"userName",sortable:!1},{text:"User name",value:"fio",sortable:!1},{text:"Group",value:"group",sortable:!1}],search:"",groups:[""],currentGroups:[],allSelected:!1}},created:function(){this.getUsersCreds()},methods:{toggle:function(){this.allSelected?this.currentGroups=Array.from(this.groups).sort(function(e,t){return e-t}):this.currentGroups=[]},getUsersCreds:function(){var e=this;this.$root.$emit("setState",!0),this.$http.get(d).then(function(t){var r=[];t.body.forEach(function(t,a){e.users.push({index:a,userName:t.userName,password:t.password,checked:!1,group:t.group,fio:t.fio}),r.push(t.group)}),e.groups=new Set(r),e.$root.$emit("setState",!1)})},getCurrentUsers:function(){var e=this;return 0===this.currentGroups.length?this.users:this.users.filter(function(t){return e.currentGroups.includes(t.group)})},refresh:function(){this.users=[],this.getUsersCreds()},getAllUsersInfo:function(){var e=[];this.getCurrentUsers().forEach(function(t){e.push(t.userName)}),this.getResults(e)},getSelectedUsersInfo:function(){var e=[];this.getCurrentUsers().forEach(function(t){t.checked&&e.push(t.userName)}),this.getResults(e)},getResults:function(e){0===e.length?this.$root.$emit("setAlert",m,"error"):e.includes("")?this.$root.$emit("setAlert","Выбраны пользователи без логинов","error"):this.$root.$emit("runCallback",this.$http.post(f,e.join(";")),"getUserResults")}}},x=b,y=r("2877"),_=r("6544"),k=r.n(_),w=r("8336"),S=r("b0af"),R=r("12b2"),C=r("ac7c"),V=r("a523"),$=r("8fea"),T=r("ce7e"),E=r("ba95"),O=r("40fe"),j=r("5d23"),A=r("b56d"),F=r("9910"),U=r("2677"),M=Object(y["a"])(x,c,u,!1,null,"086a0258",null),L=M.exports;k()(M,{VBtn:w["a"],VCard:S["a"],VCardTitle:R["a"],VCheckbox:C["a"],VContainer:V["a"],VDataTable:$["a"],VDivider:T["a"],VListTile:E["a"],VListTileAction:O["a"],VListTileContent:j["a"],VListTileTitle:j["b"],VSelect:A["a"],VSpacer:F["a"],VTextField:U["a"]});var N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.showResults?r("div",{staticStyle:{"padding-top":"50px"}},[r("v-text-field",{attrs:{"append-icon":"search",label:"Введите имя пользователя","single-line":"","hide-details":""},model:{value:e.userForSearch,callback:function(t){e.userForSearch=t},expression:"userForSearch"}}),0===Object.keys(e.userResults).filter(function(t){return t.includes(e.userForSearch)}).length?r("div",{staticStyle:{"padding-top":"30px"}},[e._v("\n        No users\n    ")]):e._e(),e._l(e.userResults,function(t,a,s){return r("div",{key:s},[a.includes(e.userForSearch)?r("div",{staticStyle:{"padding-top":"30px"}},[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",[e._v(e._s(a))])],1),e.usersErrors[a]?e._l(e.usersErrors[a],function(t,a){return r("v-alert",{key:a,attrs:{value:!0,color:"error",icon:"warning"}},[e._v("\n                    "+e._s(t)+"\n                ")])}):e._e(),e.usersErrors[a]?e._e():r("v-data-table",{staticClass:"elevation-1",attrs:{"disable-initial-sort":"",headers:e.userResultsHeaders,items:t},scopedSlots:e._u([{key:"items",fn:function(t){return[r("td",{attrs:{bgcolor:"ERROR"==t.item.status?e.errorColor:""}},[e._v(e._s(t.item.index))]),r("td",{attrs:{bgcolor:"ERROR"==t.item.status?e.errorColor:""}},[t.item.resultsList.length>0?r("v-btn",{attrs:{outline:"",fab:"",small:""},on:{click:function(r){return e.showMetadataResults(t.item)}}},[r("v-icon",[e._v("list")])],1):e._e(),e._v("\n                        "+e._s(t.item.nameMetadata)+"\n                        "),t.item.showResultsList?r("table",e._l(t.item.resultsList,function(t,a){return r("tr",{key:a},[r("td",{attrs:{bgcolor:"ERROR"==t.status?e.errorColor:""}},[e._v(e._s(t.message))])])}),0):e._e()],1),r("td",{attrs:{bgcolor:"ERROR"==t.item.status?e.errorColor:""}},[e._v(e._s(t.item.status))]),r("td",{attrs:{bgcolor:"ERROR"==t.item.status?e.errorColor:""}},[e._v(e._s(t.item.message))]),r("td",{attrs:{bgcolor:"ERROR"==t.item.status?e.errorColor:""}},[t.item.message.includes(e.notFound)||t.item.nameMetadata.includes("Test")?e._e():r("v-btn",{on:{click:function(r){return e.showFile(a,t.item.nameMetadata)}}},[e._v("\n                            View file\n                        ")])],1)]}},{key:"footer",fn:function(){return[r("td",{attrs:{colspan:e.userResultsHeaders.length}},[r("strong",{staticStyle:{float:"right"}},[e._v("\n                            "+e._s(e.getReport(t))+"\n                        ")])])]},proxy:!0}],null,!0)})],2):e._e()])})],2):e._e()},D=[],P={name:"Results",data:function(){return{showResults:!1,userResults:[],userResultsHeaders:[{text:"#",value:"index",sortable:!1},{text:"Metadata File",value:"nameMetadata"},{text:"Status",value:"status"},{text:"Message",value:"message"},{text:"View file",value:"file"}],notFound:p,errorColor:g,usersErrors:{},userForSearch:""}},mounted:function(){var e=this;this.$root.$on("getUserResults",function(t){console.log(t);var r={},a=function(a){var s=[];t[a].forEach(function(r){if(null===r.nameMetadata){var n=e.usersErrors[a];n||(n=[r.message]),e.usersErrors[a]=n}else if(0===s.filter(function(e){return e.nameMetadata===r.nameMetadata}).length){var o=t[a].filter(function(e){return e.nameMetadata===r.nameMetadata}),l=o.filter(function(e){return"ERROR"===e.status}),i=v+l.length;1===l.length&&l[0].message.includes(p)&&(i=l[0].message,o=[]);var c=0===l.length?"SUCCESS":"ERROR";s.push({index:s.length+1,nameMetadata:r.nameMetadata,status:c,message:i,resultsList:o,showResultsList:!1})}}),r[a]=s};for(var s in t)a(s);e.userResults=r,e.showResults=!0})},methods:{showFile:function(e,t){this.$root.$emit("runCallback",this.$http.post(h,e+";"+t),"setUserFile")},showMetadataResults:function(e){e.showResultsList=!e.showResultsList,"ERROR"!==e.status&&""!==e.status||(e.status="ERROR"===e.status?"":"ERROR")},getReport:function(e){var t=e.filter(function(e){return 0!==e.resultsList.length}),r=t.filter(function(e){return"SUCCESS"===e.status}).length;t=t.length-r;var a=e.length-t-r;return"Заданий выполнено без ошибок: "+r+", Заданий выполнено с ошибками: "+t+", Заданий не выполнено: "+a}}},G=P,H=r("0798"),I=r("132d"),B=r("71d9"),q=r("2a7f"),J=Object(y["a"])(G,N,D,!1,null,"32251018",null),Y=J.exports;k()(J,{VAlert:H["a"],VBtn:w["a"],VDataTable:$["a"],VIcon:I["a"],VTextField:U["a"],VToolbar:B["a"],VToolbarTitle:q["a"]});var Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-toolbar",{attrs:{"clipped-left":e.primaryDrawer.clipped,app:"",absolute:"",fixed:""}},[r("v-toolbar-title",[e._v("Task Checker")]),r("v-spacer"),r("div",{staticStyle:{float:"right"}},[r("br"),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-switch",{attrs:{primary:"",label:"Dark"},on:{change:e.chooseTheme}})],1)],1)],1)],1)},z=[],K={name:"Header",data:function(){return{drawers:["Default (no property)","Permanent","Temporary"],primaryDrawer:{model:!1,type:"Default (no property)",clipped:!0,floating:!0,mini:!1},showDrawer:!1}},methods:{chooseTheme:function(){this.$emit("changeTheme")}}},W=K,X=r("0e8f"),Z=r("b73d"),ee=Object(y["a"])(W,Q,z,!1,null,"8e77f3aa",null),te=ee.exports;k()(ee,{VFlex:X["a"],VSpacer:F["a"],VSwitch:Z["a"],VToolbar:B["a"],VToolbarTitle:q["a"]});var re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-alert",{attrs:{dismissible:"",type:e.alertType},model:{value:e.showAlert,callback:function(t){e.showAlert=t},expression:"showAlert"}},[e._v("\n        "+e._s(e.message)+"\n    ")])],1)},ae=[],se={name:"AlertComponent",data:function(){return{showAlert:!1,message:"",alertType:"error"}},mounted:function(){var e=this;this.$root.$on("setAlert",function(t,r){e.message=t,e.alertType=r,e.showAlert=!0})}},ne=se,oe=Object(y["a"])(ne,re,ae,!1,null,"f0f19fe4",null),le=oe.exports;k()(oe,{VAlert:H["a"]});var ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-xs-center"},[r("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.callbackState,callback:function(t){e.callbackState=t},expression:"callbackState"}},[r("v-card",{attrs:{color:"primary",dark:""}},[r("v-card-text",[e._v("\n                Please stand by\n                "),r("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1),r("div",{staticStyle:{"text-align":"center"}},[r("v-btn",{attrs:{color:"error"},on:{click:function(t){e.callbackState=!1}}},[e._v("Cancel")])],1)],1)],1)],1)},ce=[],ue={name:"CallbackSpinner",data:function(){return{callbackState:!1,promise:null}},mounted:function(){var e=this;this.$root.$on("setState",function(t){e.callbackState=t}),this.$root.$on("runCallback",function(t,r){e.callbackState=!0,e.promise=t,t.then(function(a){e.callbackState&&e.promise===t&&(e.$root.$emit(r,a.body),e.callbackState=!1)},function(t){e.$root.$emit("setAlert",t.body.message,"error"),e.$root.$emit("setState",!1)})})}},de=ue,fe=r("99d9"),he=r("169a"),pe=r("8e36"),me=Object(y["a"])(de,ie,ce,!1,null,"7edf9fb1",null),ve=me.exports;k()(me,{VBtn:w["a"],VCard:S["a"],VCardText:fe["a"],VDialog:he["a"],VProgressLinear:pe["a"]});var ge=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",{attrs:{inset:e.footer.inset,app:""}},[r("span",{staticClass:"px-3"},[e._v("© "+e._s((new Date).getFullYear()))])])},be=[],xe={name:"FooterCmp",data:function(){return{footer:{inset:!1}}}},ye=xe,_e=r("553a"),ke=Object(y["a"])(ye,ge,be,!1,null,"cac5e19c",null),we=ke.exports;k()(ke,{VFooter:_e["a"]});var Se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"","justify-center":""}},[r("v-dialog",{attrs:{"max-width":"1200",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",[e._v("close")])],1),r("v-toolbar-title",[e._v(e._s(e.fileOwner))])],1),r("v-subheader",[e._v(e._s(e.fileName))]),r("div",{staticStyle:{"padding-left":"40px"},attrs:{id:"fileContent"}})],1)],1)],1)},Re=[],Ce={name:"FilesComponent",data:function(){return{dialog:!1,fileName:"",fileOwner:""}},mounted:function(){var e=this;this.$root.$on("setUserFile",function(t){document.getElementById("fileContent").innerHTML=t.content,e.fileName=t.fileName,e.fileOwner=t.fileOwner,e.dialog=!0})}},Ve=Ce,$e=r("a722"),Te=r("e0c7"),Ee=Object(y["a"])(Ve,Se,Re,!1,null,"5ff7b7e3",null),Oe=Ee.exports;k()(Ee,{VBtn:w["a"],VCard:S["a"],VDialog:he["a"],VIcon:I["a"],VLayout:$e["a"],VSubheader:Te["a"],VToolbar:B["a"],VToolbarTitle:q["a"]});var je={components:{UsersTable:L,Results:Y,Header:te,AlertComponent:le,CallbackSpinner:ve,Footer:we,FilesCmp:Oe},data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}],dark:!0}}},Ae=je,Fe=r("7496"),Ue=Object(y["a"])(Ae,l,i,!1,null,null,null),Me=Ue.exports;k()(Ue,{VApp:Fe["a"],VCard:S["a"],VContainer:V["a"],VFlex:X["a"],VLayout:$e["a"]});var Le={name:"App",components:{StartPage:Me},data:function(){return{}}},Ne=Le,De=Object(y["a"])(Ne,n,o,!1,null,null,null),Pe=De.exports;k()(De,{VApp:Fe["a"]});var Ge=r("28dd");a["a"].use(Ge["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(Pe)}}).$mount("#app")}});
//# sourceMappingURL=app.d887df0a.js.map