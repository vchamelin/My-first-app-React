(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(9),c=n.n(r),s=(n(16),n(2)),i=n(7),l=n(10),o=n(3),u=n(4),j=n(6),b=n(5),d=(n(17),n(0)),m=function(e){var t=e.employees,n=e.increased;return Object(d.jsxs)("div",{className:"app-info",children:[Object(d.jsx)("h1",{children:"\u0423\u0447\u0451\u0442 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u0432 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),Object(d.jsxs)("h2",{children:["\u041e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432: ",t]}),Object(d.jsxs)("h2",{children:["\u041f\u0440\u0435\u043c\u0438\u044e \u043f\u043e\u043b\u0443\u0447\u0430\u0442: ",n]})]})},f=(n(19),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onUpdateSeatch=function(e){var t=e.target.value;a.setState({term:t}),a.props.onUpdateSeatch(t)},a.state={term:""},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsx)("input",{type:"text",className:"form-control search-imput",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430",value:this.state.term,onChange:this.onUpdateSeatch})}}]),n}(a.Component)),h=(n(20),function(e){var t=[{name:"all",label:"\u0412\u0441\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"},{name:"rise",label:"\u041d\u0430 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435"},{name:"moreThen1000",label:"\u0417/\u043f \u0431\u043e\u043b\u044c\u0448\u0435 1000$"}].map((function(t){var n=t.name,a=t.label,r=e.filter===n?"btn-light":"btn-outline-light";return Object(d.jsx)("button",{type:"button",className:"btn ".concat(r),onClick:function(){return e.onFilterSelect(n)},children:a},n)}));return Object(d.jsx)("div",{className:"btn-group",children:t})}),p=n(11),O=(n(21),function(e){var t=e.name,n=e.salary,a=e.onDelete,r=e.onToggleProp,c="list-group-item d-flex justify-content-between ";return e.increase&&(c+=" increase"),e.rise&&(c+=" like"),Object(d.jsxs)("li",{className:c,children:[Object(d.jsx)("span",{className:"list-group-item-label",onClick:r,"data-toggle":"rise",children:t}),Object(d.jsx)("input",{type:"text",className:"list-group-item-input",defaultValue:n+"$"}),Object(d.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(d.jsx)("button",{type:"button",className:"btn-cookie btn-sm ",onClick:r,"data-toggle":"increase",children:Object(d.jsx)("i",{className:"fas fa-cookie"})}),Object(d.jsx)("button",{type:"button",className:"btn-trash btn-sm ",onClick:a,children:Object(d.jsx)("i",{className:"fas fa-trash"})}),Object(d.jsx)("i",{className:"fas fa-star"})]})]})}),g=(n(22),["id"]),x=function(e){var t=e.data,n=e.onDelete,a=e.onToggleProp,r=t.map((function(e){var t=e.id,r=Object(p.a)(e,g);return Object(d.jsx)(O,Object(i.a)(Object(i.a)({},r),{},{onDelete:function(){return n(t)},onToggleProp:function(e){return a(t,e.currentTarget.getAttribute("data-toggle"))}}),t)}));return Object(d.jsx)("ul",{className:"app-list list-group",children:r})},v=(n(23),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",salary:""},e.onValueChange=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.state.name.length<3||!e.state.salary||(e.props.onAdd(e.state.name,e.state.salary),e.setState({name:"",salary:""}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.salary;return Object(d.jsxs)("div",{className:"app-add-form",children:[Object(d.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"}),Object(d.jsxs)("form",{className:"add-form d-flex",onSubmit:this.onSubmit,children:[Object(d.jsx)("input",{type:"text",className:"form-control new-post-label",placeholder:"\u041a\u0430\u043a \u0435\u0433\u043e \u0437\u043e\u0432\u0443\u0442?",name:"name",value:t,onChange:this.onValueChange}),Object(d.jsx)("input",{type:"number",className:"form-control new-post-label",placeholder:"\u0417/\u041f \u0432 $?",name:"salary",value:n,onChange:this.onValueChange}),Object(d.jsx)("button",{type:"submit",className:"btn btn-outline-light",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})}}]),n}(a.Component)),y=v,S=(n(24),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).deleteItem=function(e){a.setState((function(t){return{data:t.data.filter((function(t){return t.id!==e}))}}))},a.addItem=function(e,t){var n={name:e,salary:t,increase:!1,rise:!1,id:a.maxId++};a.setState((function(e){var t=e.data;return{data:[].concat(Object(l.a)(t),[n])}}))},a.onToggleProp=function(e,t){a.setState((function(n){return{data:n.data.map((function(n){return n.id===e?Object(i.a)(Object(i.a)({},n),{},Object(s.a)({},t,!n[t])):n}))}}))},a.searchEmp=function(e,t){return 0===t.length?e:e.filter((function(e){return e.name.indexOf(t)>-1}))},a.onUpdateSeatch=function(e){a.setState({term:e})},a.filterPost=function(e,t){switch(t){case"rise":return e.filter((function(e){return e.rise}));case"moreThen1000":return e.filter((function(e){return e.salary>1e3}));default:return e}},a.onFilterSelect=function(e){a.setState({filter:e})},a.state={data:[{name:"John C.",salary:800,increase:!1,rise:!0,id:1},{name:"Alex M.",salary:3e3,increase:!0,rise:!1,id:2},{name:"Carl W.",salary:500,increase:!1,rise:!1,id:3}],term:"",filter:"all"},a.maxId=4,a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.data,n=e.term,a=e.filter,r=t.length,c=t.filter((function(e){return e.increase})).length,s=this.filterPost(this.searchEmp(t,n),a);return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(m,{employees:r,increased:c}),Object(d.jsxs)("div",{className:"search-panel",children:[Object(d.jsx)(f,{onUpdateSeatch:this.onUpdateSeatch}),Object(d.jsx)(h,{filter:a,onFilterSelect:this.onFilterSelect})]}),Object(d.jsx)(x,{data:s,onDelete:this.deleteItem,onToggleProp:this.onToggleProp}),Object(d.jsx)(y,{onAdd:this.addItem})]})}}]),n}(a.Component));c.a.render(Object(d.jsx)(a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.c8a2970e.chunk.js.map