(this["webpackJsonpScrambledEggs-SprintPlanning"]=this["webpackJsonpScrambledEggs-SprintPlanning"]||[]).push([[0],{20:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(6),l=t.n(r),i=t(5),o=t(7),s={info:{teamName:"Scrambled Eggs",date:Date.now()},mates:{cataldo:{name:"Cataldo",d:10,h:0,efficiency:50},lisa:{name:"Lisa",d:6,h:0,efficiency:80},dennis:{name:"Dennis",d:10,h:0,efficiency:80},beatrice:{name:"Beatrice",d:10,h:0,efficiency:80},davideP:{name:"Davide P.",d:10,h:0,efficiency:30},alberto:{name:"Alberto",d:10,h:0,efficiency:80},federico:{name:"Federico",d:10,h:0,efficiency:80},niccolo:{name:"Niccol\xf2",d:6,h:0,efficiency:80},noman:{name:"Noman",d:10,h:0,efficiency:80},perla:{name:"Perla",d:5,h:0,efficiency:80}},groups:{frontend:{name:"Front-end",mates:["cataldo","lisa","dennis","beatrice"],emergency:20},backend:{name:"Back-end",mates:["davideP","alberto","federico","niccolo","perla","noman"],emergency:20}}},u=t(4),m=t(1),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_TEAM":return Object(m.a)({},a.mates);case"SET_DAYS":var t=Object(m.a)({},e[a.id]);return t.d=a.days,Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},a.id,t));case"SET_HOURS":var n=Object(m.a)({},e[a.id]);return n.h=a.hours,Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},a.id,n));case"SET_EFFICIENCY":var c=Object(m.a)({},e[a.id]);return c.efficiency=a.efficiency,Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},a.id,c));case"ADD_MATE":var r=Object(m.a)({},e);return r[a.id]={name:a.name,d:0,h:0,efficiency:100},Object(m.a)({},r);case"DELETE_MATE":var l=Object(m.a)({},e);return delete l[a.id],Object(m.a)({},l);default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_TEAM":return Object(m.a)({},a.info);default:return e}},p=t(2),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_TEAM":return Object(m.a)({},a.groups);case"SET_EMERGENCY":var t=Object(m.a)({},e[a.groupId]);return t.emergency=a.emergency,Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},a.groupId,t));case"ADD_MATE":var n=Object(m.a)({},e[a.groupId]);return n.mates.push(a.id),Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},a.groupId,n));case"DELETE_MATE":var c=Object(m.a)({},e);return Object(p.forEach)(c,(function(e,t){Object(p.remove)(e.mates,(function(e){return e===a.id})),0===e.mates.length&&delete c[t]})),Object(m.a)({},c);default:return e}};var g=t(22),v=t(23),h=t(26),b=t(25),O=t(3),y=t.n(O),N=t(9),j=t.n(N),S=(t(20),t(8));t(49),t(50);var C=Object(i.b)((function(e,a){return{mate:e.mates[a.id]}}),(function(e){return{setDays:function(a,t){return e(function(e,a){return{type:"SET_DAYS",id:e,days:a}}(a,t))},setHours:function(a,t){return e(function(e,a){return{type:"SET_HOURS",id:e,hours:a}}(a,t))},setEfficiency:function(a,t){return e(function(e,a){return{type:"SET_EFFICIENCY",id:e,efficiency:a}}(a,t))},deleteMate:function(a){return e(function(e){return{type:"DELETE_MATE",id:e}}(a))}}}))((function(e){var a=e.id,t=e.edit,n=e.emergency,r=e.mate,l=e.setDays,i=e.setHours,o=e.setEfficiency,s=e.deleteMate,u=(8*r.d+r.h)*r.efficiency/100*(100-n)/100;return c.a.createElement("div",{className:"teammate"},c.a.createElement("div",{className:"column"},t&&c.a.createElement(y.a,{iconName:"times",className:"minus",onClick:function(){return s(a)}}),r.name,c.a.createElement("span",{className:"hours4every"},"(",parseInt(u)," h)")),c.a.createElement("div",{className:"column"},c.a.createElement("input",{type:"number",defaultValue:r.d,min:0,max:100,onChange:function(e){var t=e.target.value?parseFloat(e.target.value):parseFloat(0);0<=t&&l(a,t)}}),c.a.createElement("span",null,"d"),c.a.createElement("input",{type:"number",defaultValue:r.h,min:0,max:100,onChange:function(e){var t=e.target.value?parseFloat(e.target.value):parseFloat(0);0<=t&&i(a,t)}}),c.a.createElement("span",null,"h")),c.a.createElement("div",{className:"column"},c.a.createElement("input",{type:"number",defaultValue:r.efficiency,min:0,max:100,onChange:function(e){var t=e.target.value?parseFloat(e.target.value):parseFloat(0);0<=t&&t<=100&&o(a,t)}}),c.a.createElement("span",null,"%")))})),M=t(24),T=t.n(M);function w(e,a,t){var n=0;return Object(p.forEach)(a,(function(a){if(e[a]){var t=e[a],c=(t.h+8*t.d)*t.efficiency/100;n+=c}})),n*(100-t)/100}function D(e,a){var t=document.getElementById(e).clientWidth+10,n=document.getElementById(e).clientHeight+5,c=window.scrollY;window.scrollTo(0,0);var r=T()(document.querySelector("#".concat(e)),{width:t,height:n});return window.scrollTo(0,c),r.then((function(t){var n=t.toDataURL();if(!a)return n;var c=document.createElement("a"),r=new Date;c.download="sprintPlanning_".concat(e,"_").concat(r.getFullYear(),"-").concat(r.getMonth()+1,"-").concat(r.getDate()),c.href=n,c.click()}))}t(51);function _(e){var a=e.isModalOpen,t=e.closeModal,n=e.screenshot;return c.a.createElement(j.a,{className:"screenshotModal",overlayClassName:"overlayScreenshotModal",isOpen:a,onClose:t,onRequestClose:t},c.a.createElement(y.a,{iconName:"times",className:"closeScreenshotModal",onClick:t}),c.a.createElement("img",{src:n,alt:"generated screenshot"}))}var I=Object(i.b)((function(e,a){return{allMates:e.mates,name:e.groups[a.groupId].name,mates:e.groups[a.groupId].mates,emergency:e.groups[a.groupId].emergency,date:e.info.date}}),(function(e){return{setEmergency:function(a,t){return e(function(e,a){return{type:"SET_EMERGENCY",groupId:e,emergency:a}}(a,t))},addMate:function(a,t,n){return e(function(e,a,t){return{type:"ADD_MATE",id:e,name:a,groupId:t}}(a,t,n))}}}))((function(e){var a=e.groupId,t=e.mates,r=e.name,l=e.emergency,i=e.allMates,o=(e.date,e.setEmergency),s=e.addMate,u=Object(n.useState)(!1),m=Object(S.a)(u,2),d=m[0],f=m[1],E=Object(n.useState)(!1),g=Object(S.a)(E,2),v=g[0],h=g[1],b=Object(n.useState)(null),O=Object(S.a)(b,2),N=O[0],j=O[1],M=Object(n.useState)(!1),T=Object(S.a)(M,2),I=T[0],k=T[1],F=Object(n.useRef)(void 0);Object(n.useEffect)((function(){var e=Object(p.map)(t,(function(e){if(Object(p.find)(i,(function(a,t){return t===e})))return c.a.createElement(C,{key:e,id:e,edit:v,emergency:l})}));f(e)}),[i,t,l,v]);var A=function(){for(var e=F.current.value.toLocaleLowerCase();Object(p.find)(i,(function(a,t){return t===e}));)e+="_";s(e,F.current.value,a),F.current.value=""},R=w(i,t,l);return c.a.createElement("div",{id:r.toLowerCase().replace("-",""),className:"hoursPlanning"},c.a.createElement("div",{className:"title-end"},c.a.createElement("h3",null,r),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(y.a,{iconName:"download",className:"icon",onClick:function(){return D(r.toLowerCase().replace("-",""),!0)}}),c.a.createElement(y.a,{iconName:"camera",className:"icon",onClick:function(){D(r.toLowerCase().replace("-",""),!1).then((function(e){j(e),k(!0)}))}}),c.a.createElement(y.a,{iconName:"pencil-alt",className:"icon",onClick:function(){return h((function(e){return!e}))}}))),c.a.createElement("div",{className:"tableHeader"},c.a.createElement("span",{className:"column name"},"Nome"),c.a.createElement("span",{className:"column"},"Ore lavorative"),c.a.createElement("span",{className:"column"},"Efficienza"),c.a.createElement("span",{className:"column"},"Emergenza")),c.a.createElement("div",{className:"tableContent"},c.a.createElement("div",{className:"team"},d),c.a.createElement("div",{className:"column emergency"},c.a.createElement("span",null,"-"),c.a.createElement("input",{type:"number",defaultValue:l,min:0,max:100,onChange:function(e){var t=e.target.value?parseFloat(e.target.value):parseFloat(0);0<=t&&t<=100&&o(a,t)}}),c.a.createElement("span",null,"%"))),v&&c.a.createElement("div",{className:"add"},c.a.createElement(y.a,{iconName:"plus-circle",className:"plus",onClick:A}),c.a.createElement("input",{type:"text",ref:F,onKeyDown:function(e){return"Enter"===e.key?A():void 0}})),c.a.createElement("div",{className:"total"},c.a.createElement("p",null,"Totale: ",parseInt(R)," h")),c.a.createElement(_,{isModalOpen:I,closeModal:function(){return k(!1)},screenshot:N}))})),k=t.p+"static/media/egg.ef2d65bb.png";function F(e){var a=new Date(e.date);return c.a.createElement("div",{className:"heading"},c.a.createElement("img",{src:k,alt:"egg"}),c.a.createElement("div",null,c.a.createElement("h1",null,e.teamName),c.a.createElement("h2",null,"Sprint Planning"),c.a.createElement("h3",null,"".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate()))),c.a.createElement("img",{src:k,alt:"egg"}))}j.a.setAppElement("#root");var A=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).fileRef=c.a.createRef(),e.fileReader=new FileReader,e.state={fileJSON:null,image:null,isModalOpen:!1},e._importClick=function(){return e.fileRef.current.click()},e._onChangeFile=function(a){a.stopPropagation(),a.preventDefault();var t=a.target.files[0];e.fileReader.readAsText(t)},e._showScreenshot=function(){D("print",!1).then((function(a){e.setState({image:a}),e.setState({isModalOpen:!0})}))},e}return Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fileReader.onload=function(a){try{var t=JSON.parse(a.target.result);e.setState((function(){return{fileJSON:t}}))}catch(n){console.error(n)}},this.fileReader.onerror=function(e){return console.error(e)}}},{key:"componentWillUpdate",value:function(e,a,t){if(this.state.fileJSON!==a.fileJSON)if(a.fileJSON.hasOwnProperty("people")){var n=function(e){var a={teamName:e.teamName||"DreamTeam",date:e.date||Date.now()},t=e.people,n={};if(e.hasOwnProperty("groups"))n=e.groups;else{var c=[];Object(p.forEach)(t,(function(e,a){return c.push(a)})),n={group1:{name:e.teamName||"Team",mates:c,emergency:0}}}return{info:a,groups:n,mates:t}}(a.fileJSON),c=n.info,r=n.groups,l=n.mates;this.props.setTeam(c,r,l)}else console.error("Invalid json")}},{key:"render",value:function(){var e=this,a=this.props,t=a.teamName,r=a.groups,l=a.mates,i=a.date,o=Object(p.map)(r,(function(e,a){return c.a.createElement(I,{groupId:a,key:a})})),s=0;return Object(p.forEach)(r,(function(e){s+=w(l,e.mates,e.emergency)})),c.a.createElement("div",{className:"page",id:"print"},c.a.createElement(F,{teamName:t,date:i}),c.a.createElement("div",{className:"actionIcons"},c.a.createElement("div",{className:"action",onClick:this._importClick},c.a.createElement(y.a,{iconName:"upload",className:"actionIcon"}),c.a.createElement("span",null,"Upload JSON"),c.a.createElement("input",{type:"file",accept:".json",ref:this.fileRef,style:{display:"none"},onChange:this._onChangeFile})),c.a.createElement("div",{className:"action",onClick:this._showScreenshot},c.a.createElement(y.a,{iconName:"camera",className:"actionIcon"}),c.a.createElement("span",null,"Show PNG")),c.a.createElement("div",{className:"action",onClick:function(){return D("print",!0)}},c.a.createElement(y.a,{iconName:"download",className:"actionIcon"}),c.a.createElement("span",null,"Download as PNG"))),c.a.createElement("div",{className:"sprintPlanning"},c.a.createElement(n.Fragment,null,o),c.a.createElement("div",{className:"recap"},"Totale: ",parseInt(s)," h")),c.a.createElement(_,{isModalOpen:this.state.isModalOpen,closeModal:function(){return e.setState({isModalOpen:!1})},screenshot:this.state.image}))}}]),t}(c.a.Component),R=Object(i.b)((function(e){return{teamName:e.info.teamName,mates:e.mates,groups:e.groups,date:e.info.date}}),(function(e){return{setTeam:function(a,t,n){return e(function(e,a,t){return{type:"SET_TEAM",info:e,groups:a,mates:t}}(a,t,n))}}}))(A);var P=function(){var e=function(){var e=Object(o.b)({info:f,mates:d,groups:E});return Object(o.c)(e,s)}();return c.a.createElement(i.a,{store:e},c.a.createElement(R,null))};t(52);l.a.render(c.a.createElement(P,null),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.3e3d4d0f.chunk.js.map