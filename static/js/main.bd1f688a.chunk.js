(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(5),c=a.n(i),s=(a(16),a(2)),r=a(7),d=a(11),o="ADD_RATE",l="DELETE",u="EDIT",j="CHECKED",b=function(e){var t=e.id;return{type:l,payload:{id:t}}},h="ID",f=function(e){var t=e.id,a=e.value;return{type:h,payload:{id:t,value:a}}},p=Object(r.a)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return[].concat(Object(d.a)(e),[t.payload]);case u:return e.map((function(e){return e.id!==t.payload.id?e:{name:t.payload.value,id:e.id,isImportant:e.isImportant,isChecked:e.isChecked,date:e.date}}));case l:return e.filter((function(e){return e.id!==t.payload.id}));case j:return e.map((function(e){return e.id!==t.payload.id?e:{name:e.name,id:e.id,isImportant:e.isImportant,isChecked:!e.isChecked,date:e.date,finishDate:t.payload.finishDate}}));default:return console.warn("Nie mamy akcji typu ".concat(t.type)),e}},test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{id:t.payload.id,isVisible:t.payload.value};default:return console.warn("Nie mamy akcji typu ".concat(t.type)),e}}}),m=Object(r.b)(p),O=a(3),v=(a(21),a(0)),x=function(e){var t=e.validateInput,a=Object(n.useState)(""),i=Object(O.a)(a,2),c=i[0],r=i[1],d=Object(n.useState)(""),l=Object(O.a)(d,2),u=l[0],j=l[1],b=Object(n.useState)(!1),h=Object(O.a)(b,2),f=h[0],p=h[1],m=Object(s.b)(),x=Object(s.c)((function(e){return e.tasks})),k=(new Date).toISOString().slice(0,10),y="".concat(parseInt(k.slice(0,4))+1,"-12-31"),C=Object(n.useState)(0),g=Object(O.a)(C,2),I=g[0],N=g[1];return Object(v.jsxs)("div",{className:"add_container",children:[Object(v.jsx)("input",{value:c,onChange:function(e){r(e.currentTarget.value)},type:"text",placeholder:"Enter your task"}),Object(v.jsx)("button",{className:"".concat(f?"activeButtonImportant":null," buttonImportant"),onClick:function(){p(!f)},children:f?Object(v.jsxs)("div",{children:[" ",Object(v.jsx)("p",{children:"Zadanie priorytetowe"})," ",Object(v.jsx)("i",{className:"fas fa-exclamation-circle"})]}):Object(v.jsx)("p",{children:"Zadanie normalne"})}),Object(v.jsxs)("div",{className:"dateContainer",children:[Object(v.jsx)("p",{children:"Do kiedy zrobi\u0107:"})," ",Object(v.jsx)("input",{type:"date",min:k,max:y,value:u,onChange:function(e){j(e.currentTarget.value)}})]}),Object(v.jsx)("button",{className:"buttonAdd",onClick:function(){var e=t(c,x);if(0===u.length)return alert("Wybierz dat\u0119 ko\u0144ca zadania");e&&(m(function(e){var t=e.name,a=e.id,n=e.isImportant,i=e.date;return{type:o,payload:{name:t,id:a,isImportant:n,isChecked:!1,date:i}}}({name:e,id:I,isImportant:f,isChecked:!1,date:u})),N(I+1));f&&p(!f),r("")},children:Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Dodaj zadanie"}),Object(v.jsx)("i",{className:"far fa-plus-square"})]})})]})},k=(a(23),function(e){var t=e.name,a=e.id,n=e.isImportant,i=e.date,c=Object(s.b)(),r=n?"important":null;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"task",children:[Object(v.jsxs)("p",{className:r,children:[t," (zrobi\u0107 do:",i,")"]})," ",Object(v.jsx)("button",{onClick:function(){c(b({id:a}))},children:Object(v.jsx)("i",{className:"far fa-trash-alt"})}),Object(v.jsx)("button",{onClick:function(){var e=new Date((new Date).getTime()).toLocaleString();c(function(e){var t=e.id,a=e.finishDate;return{type:j,payload:{id:t,finishDate:a}}}({id:a,finishDate:e}))},children:Object(v.jsx)("i",{className:"far fa-check-square"})}),Object(v.jsx)("button",{onClick:function(){c(f({id:a,value:!0}))},children:Object(v.jsx)("i",{className:"far fa-edit"})})]})})}),y=(a(24),function(e){var t=e.name,a=e.isImportant,n=e.isChecked,i=e.date,c=e.finishDate,r=e.id,d=Object(s.b)(),o=a?"important":null,l=n?"checked":null;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"task",children:[Object(v.jsxs)("p",{className:"".concat(o," ").concat(l),children:[t," (zrobi\u0107 do:",i,") - wykonano:",c]})," ",Object(v.jsx)("button",{onClick:function(){d(b({id:r}))},children:Object(v.jsx)("i",{className:"far fa-trash-alt"})})]})})}),C=(a(25),function(e){var t=e.getId,a=e.setIsChecked,n=Object(s.c)((function(e){return e.tasks})),i=n.filter((function(e){return e.isChecked}));i.length>=2&&i.sort((function(e,t){return e.finishDate<t.finishDate?1:e.finishDate>t.finishDate?-1:0}));var c=n.filter((function(e){return!e.isChecked}));c.length>=2&&c.sort((function(e,t){return(e=e.name.toLowerCase())<(t=t.name.toLowerCase())?-1:e>t?1:0}));var r=c.map((function(e){var n=e.name,i=e.id,c=e.isImportant,s=e.isChecked,r=e.date;return Object(v.jsx)(k,{name:n,id:i,getId:t,isImportant:c,isChecked:s,setIsChecked:a,date:r},i)})),d=i.map((function(e){var t=e.name,a=e.id,n=e.isImportant,i=e.isChecked,c=e.date,s=e.finishDate;return Object(v.jsx)(y,{name:t,id:a,isImportant:n,isChecked:i,date:c,finishDate:s},a)}));return Object(v.jsxs)("div",{className:"taskList_container",children:[Object(v.jsx)("div",{className:"numberOfTasks",children:Object(v.jsxs)("p",{children:["Liczba zada\u0144:"," ",Object(v.jsx)("span",{className:"tasksCounter",children:n.length})]})}),Object(v.jsx)("p",{className:"activeTasks",children:"Aktywne zadania:"}),Object(v.jsx)("div",{children:r}),n.length?Object(v.jsxs)("div",{children:[" ",Object(v.jsx)("p",{children:d.length?"Zadania zako\u0144czone:":"Nie zrobi\u0142e\u015b jeszcze \u017cadnego zadania"})]}):null,i.length>5&&Object(v.jsx)("span",{style:{fontSize:10},children:"wy\u015bwietlonych jest jedynie 5 ostatnich zada\u0144"}),d.slice(0,5)]})}),g=(a(26),function(e){var t=e.validateInput,a=Object(s.c)((function(e){return e.tasks})),i=Object(s.c)((function(e){return e.test})),c=Object(s.b)(),r=Object(n.useState)(""),d=Object(O.a)(r,2),o=d[0],l=d[1];return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"blurWrapper ".concat(i.isVisible?"show":""),children:Object(v.jsxs)("div",{className:"formWrapper",children:[Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t(o,a);if(""===i.id)return alert("najpierw wybierz zadanie do edycji!");n&&(c(function(e){var t=e.id,a=e.value;return{type:u,payload:{id:t,value:a}}}({id:i.id,value:n})),c(f({id:null,isVisible:!1})),l(""))},name:"send",children:[Object(v.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},value:o,type:"text"}),Object(v.jsx)("button",{className:"saveButton",children:Object(v.jsx)("i",{className:"far fa-save"})})]}),Object(v.jsx)("button",{className:"quit",onClick:function(){c(f({id:null,isVisible:!1}))},children:Object(v.jsx)("i",{className:"far fa-times-circle"})})]})})})}),I=(a(27),function(){var e=function(e,t){var a=e.replace(">","").replace("<","").trim();a.length<3?(alert("Zadanie musi sk\u0142ada\u0107 si\u0119 z minimum 3 znak\xf3w"),a=""):t.find((function(e){return e.name.toLowerCase().trim()===a.toLowerCase()}))&&(alert("To zadanie ju\u017c jest"),a="");return a};return Object(v.jsx)(s.a,{store:m,children:Object(v.jsxs)("div",{children:[Object(v.jsx)(x,{validateInput:e}),Object(v.jsx)(C,{}),Object(v.jsx)(g,{validateInput:e})]})})});c.a.render(Object(v.jsx)(I,{}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.bd1f688a.chunk.js.map