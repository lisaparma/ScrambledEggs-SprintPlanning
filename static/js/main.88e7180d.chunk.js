(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/egg.cee197da.png"},30:function(e,t,a){},33:function(e,t,a){e.exports=a(51)},38:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),i=(a(38),a(24)),l=a(10),s=a(11),u=a(13),m=a(14),d=a(16),p=a(15),f=a(8),E=a.n(f),g=a(4),v=a(22),h=a.n(v),y=(a(30),a(26)),O=a.n(y);function b(e){var t=new Date(e.date);return r.a.createElement("div",{className:"heading"},r.a.createElement("img",{src:O.a,alt:"egg"}),r.a.createElement("div",null,r.a.createElement("h1",null,e.teamName),r.a.createElement("h2",null,"Sprint Planning"),r.a.createElement("h3",null,"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()))),r.a.createElement("img",{src:O.a,alt:"egg"}))}a(48),a(49);var N=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r)))._onChangeD=function(t){var a=t.target.value?parseFloat(t.target.value):parseFloat(0);0<=a&&e.props.setDays(e.props.id,a)},e._onChangeH=function(t){var a=t.target.value?parseFloat(t.target.value):parseFloat(0);0<=a&&e.props.setHours(e.props.id,a)},e._onChangeEff=function(t){var a=t.target.value?parseFloat(t.target.value):parseFloat(0);0<=a&&a<=100&&e.props.setEfficiency(e.props.id,a)},e._onMinusClick=function(){e.props.deleteMate(e.props.id)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.mate,a=e.edit;return r.a.createElement("div",{className:"teammate"},r.a.createElement("div",{className:"column"},a&&r.a.createElement(E.a,{iconName:"times",className:"minus",onClick:this._onMinusClick}),t.name),r.a.createElement("div",{className:"column"},r.a.createElement("input",{type:"number",value:t.d,min:0,max:100,onChange:this._onChangeD}),r.a.createElement("span",null,"d"),r.a.createElement("input",{type:"number",value:t.h,min:0,max:100,onChange:this._onChangeH}),r.a.createElement("span",null,"h")),r.a.createElement("div",{className:"column"},r.a.createElement("input",{type:"number",value:t.efficiency,min:0,max:100,onChange:this._onChangeEff}),r.a.createElement("span",null,"%")))}}]),a}(r.a.Component),_=Object(l.b)(function(e,t){return{mate:e.mates[t.id]}},function(e){return{setDays:function(t,a){return e(function(e,t){return{type:"SET_DAYS",id:e,days:t}}(t,a))},setHours:function(t,a){return e(function(e,t){return{type:"SET_HOURS",id:e,hours:t}}(t,a))},setEfficiency:function(t,a){return e(function(e,t){return{type:"SET_EFFICIENCY",id:e,efficiency:t}}(t,a))},deleteMate:function(t){return e(function(e){return{type:"DELETE_MATE",id:e}}(t))}}})(N);function j(e,t,a){var n=0;return Object(g.forEach)(t,function(t){if(e[t]){var a=e[t],r=(a.h+8*a.d)*a.efficiency/100;n+=r}}),n*(100-a)/100}var C=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).inputRef=r.a.createRef(),e.state={editMode:!1},e._onChangeEmergency=function(t){var a=t.target.value?parseFloat(t.target.value):parseFloat(0);0<=a&&a<=100&&e.props.setEmergency(e.props.groupId,a)},e._editMode=function(){e.setState(function(e){return{editMode:!e.editMode}})},e._onKeyDown=function(t){"Enter"===t.key&&e._onPlusClick()},e._screen=function(t){h()(document.querySelector("#".concat(t))).then(function(a){var n=a.toDataURL(),r=document.createElement("a"),c=new Date(e.props.date);r.download="sprintPlanning_".concat(t,"_").concat(c.getFullYear(),"-").concat(c.getMonth()+1,"-").concat(c.getDate()),r.href=n,r.click()})},e._onPlusClick=function(){for(var t=e.inputRef.current.value.toLocaleLowerCase();Object(g.find)(e.props.allMates,function(e,a){return a===t});)t+="_";e.props.addMate(t,e.inputRef.current.value,e.props.groupId),e.inputRef.current.value=""},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.editMode,n=t.inputName,c=this.props,o=c.mates,i=c.name,l=c.emergency,s=c.allMates,u=[];Object(g.forEach)(o,function(e){Object(g.find)(s,function(t,a){return a===e})&&u.push(r.a.createElement(_,{key:e,id:e,edit:a}))});var m=j(s,o,l);return r.a.createElement("div",{id:i.toLowerCase().replace("-",""),className:"hoursPlanning"},r.a.createElement("div",{className:"title-end"},r.a.createElement("h3",null,i),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(E.a,{iconName:"camera",className:"icon",onClick:function(){return e._screen(i.toLowerCase().replace("-",""))}}),r.a.createElement(E.a,{iconName:"pencil-alt",className:"icon",onClick:this._editMode}))),r.a.createElement("div",{className:"tableHeader"},r.a.createElement("span",{className:"column name"},"Nome"),r.a.createElement("span",{className:"column"},"Ore lavorative"),r.a.createElement("span",{className:"column"},"Efficienza"),r.a.createElement("span",{className:"column"},"Emergenza")),r.a.createElement("div",{className:"tableContent"},r.a.createElement("div",{className:"team"},u),r.a.createElement("div",{className:"column emergency"},r.a.createElement("span",null,"-"),r.a.createElement("input",{type:"number",value:l,min:0,max:100,onChange:this._onChangeEmergency}),r.a.createElement("span",null,"%"))),a&&r.a.createElement("div",{className:"add"},r.a.createElement(E.a,{iconName:"plus-circle",className:"plus",onClick:this._onPlusClick}),r.a.createElement("input",{type:"text",value:n,ref:this.inputRef,onKeyDown:this._onKeyDown})),r.a.createElement("div",{className:"total"},r.a.createElement("p",null,"Totale: ",parseInt(m)," h")))}}]),a}(r.a.Component),w=Object(l.b)(function(e,t){return{allMates:e.mates,name:e.groups[t.groupId].name,mates:e.groups[t.groupId].mates,emergency:e.groups[t.groupId].emergency,date:e.info.date}},function(e){return{setEmergency:function(t,a){return e(function(e,t){return{type:"SET_EMERGENCY",groupId:e,emergency:t}}(t,a))},addMate:function(t,a,n){return e(function(e,t,a){return{type:"ADD_MATE",id:e,name:t,groupId:a}}(t,a,n))}}})(C),D=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).fileRef=r.a.createRef(),e.state={fileJSON:null},e.fileReader=new FileReader,e._importClick=function(){e.fileRef.current.click()},e._onChangeFile=function(t){t.stopPropagation(),t.preventDefault();var a=t.target.files[0];e.fileReader.readAsText(a)},e._downloadClick=function(){h()(document.querySelector("#print")).then(function(t){var a=t.toDataURL(),n=document.createElement("a"),r=new Date(e.props.date);n.download="sprintPlanning_".concat(r.getFullYear(),"-").concat(r.getMonth()+1,"-").concat(r.getDate()),n.href=a,n.click()})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.fileReader.onload=function(t){try{var a=JSON.parse(t.target.result);e.setState(function(){return{fileJSON:a}})}catch(n){console.error(n)}},this.fileReader.onerror=function(e){console.error(e)}}},{key:"componentWillUpdate",value:function(e,t,a){if(this.state.fileJSON!==t.fileJSON)if(t.fileJSON.hasOwnProperty("people")){var n=function(e){var t={teamName:e.teamName||"DreamTeam",date:e.date||Date.now()},a=e.people,n={};if(e.hasOwnProperty("groups"))n=e.groups;else{var r=[];Object(g.forEach)(a,function(e,t){return r.push(t)}),n={group1:{name:e.teamName||"Team",mates:r,emergency:0}}}return{info:t,groups:n,mates:a}}(t.fileJSON),r=n.info,c=n.groups,o=n.mates;this.props.setTeam(r,c,o)}else console.error("Invalid json")}},{key:"render",value:function(){var e=this.props,t=e.teamName,a=e.groups,c=e.mates,o=e.date,i=Object(g.map)(a,function(e,t){return r.a.createElement(w,{groupId:t,key:t})}),l=0;return Object(g.forEach)(a,function(e){l+=j(c,e.mates,e.emergency)}),r.a.createElement("div",{className:"page",id:"print"},r.a.createElement(b,{teamName:t,date:o}),r.a.createElement("div",{className:"actionIcons"},r.a.createElement("div",{className:"action",onClick:this._importClick},r.a.createElement(E.a,{iconName:"upload",className:"actionIcon"}),r.a.createElement("span",null,"Upload JSON"),r.a.createElement("input",{type:"file",accept:".json",ref:this.fileRef,style:{display:"none"},onChange:this._onChangeFile})),r.a.createElement("div",{className:"action",onClick:this._downloadClick},r.a.createElement(E.a,{iconName:"download",className:"actionIcon"}),r.a.createElement("span",null,"Download as PNG"))),r.a.createElement("div",{className:"sprintPlanning"},r.a.createElement(n.Fragment,null,i),r.a.createElement("div",{className:"recap"},"Totale: ",parseInt(l)," h")))}}]),a}(r.a.Component),S=Object(l.b)(function(e){return{teamName:e.info.teamName,mates:e.mates,groups:e.groups,date:e.info.date}},function(e){return{setTeam:function(t,a,n){return e(function(e,t,a){return{type:"SET_TEAM",info:e,groups:t,mates:a}}(t,a,n))}}})(D),T={MAIN:"/ScrambledEggs-SprintPlanning/"};var k=function(){return[r.a.createElement(s.a,{path:T.MAIN,exact:!0,component:S,key:"homepage"})]},M=a(18),I=a(9),R=a(2),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEAM":return Object(R.a)({},t.mates);case"SET_DAYS":var a=Object(R.a)({},e[t.id]);return a.d=t.days,Object(R.a)(Object(R.a)({},e),{},Object(I.a)({},t.id,a));case"SET_HOURS":var n=Object(R.a)({},e[t.id]);return n.h=t.hours,Object(R.a)(Object(R.a)({},e),{},Object(I.a)({},t.id,n));case"SET_EFFICIENCY":var r=Object(R.a)({},e[t.id]);return r.efficiency=t.efficiency,Object(R.a)(Object(R.a)({},e),{},Object(I.a)({},t.id,r));case"ADD_MATE":var c=Object(R.a)({},e);return c[t.id]={name:t.name,d:0,h:0,efficiency:100},Object(R.a)({},c);case"DELETE_MATE":var o=Object(R.a)({},e);return delete o[t.id],Object(R.a)({},o);default:return e}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEAM":return Object(R.a)({},t.info);default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEAM":return Object(R.a)({},t.groups);case"SET_EMERGENCY":var a=Object(R.a)({},e[t.groupId]);return a.emergency=t.emergency,Object(R.a)(Object(R.a)({},e),{},Object(I.a)({},t.groupId,a));case"ADD_MATE":var n=Object(R.a)({},e[t.groupId]);return n.mates.push(t.id),Object(R.a)(Object(R.a)({},e),{},Object(I.a)({},t.groupId,n));case"DELETE_MATE":var r=Object(R.a)({},e);return Object(g.forEach)(r,function(e,a){Object(g.remove)(e.mates,function(e){return e===t.id}),0===e.mates.length&&delete r[a]}),Object(R.a)({},r);default:return e}},L={info:{teamName:"Scrambled Eggs",date:Date.now()},mates:{cataldo:{name:"Cataldo",d:10,h:0,efficiency:50},lisa:{name:"Lisa",d:6,h:0,efficiency:80},dennis:{name:"Dennis",d:10,h:0,efficiency:80},davideP:{name:"Davide P.",d:10,h:0,efficiency:80},alberto:{name:"Alberto",d:10,h:0,efficiency:80},federico:{name:"Federico",d:10,h:0,efficiency:80},niccolo:{name:"Niccol\xf2",d:10,h:0,efficiency:80}},groups:{frontend:{name:"Front-end",mates:["cataldo","lisa","dennis"],emergency:20},backend:{name:"Back-end",mates:["davideP","alberto","federico","niccolo"],emergency:20}}};var x=function(){var e=function(){var e=Object(M.b)({info:F,mates:A,groups:P});return Object(M.c)(e,L,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())}();return r.a.createElement(l.a,{store:e},r.a.createElement(i.a,null,r.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.88e7180d.chunk.js.map