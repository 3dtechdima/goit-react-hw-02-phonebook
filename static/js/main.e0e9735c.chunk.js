(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a,c,r,o,s=n(0),i=n(14),l=n.n(i),u=n(4),b=n(12),m=n(5),j=n(6),d=n(8),h=n(7),f=n(2),p=n(3),O=p.a.section(a||(a=Object(f.a)(["\n  .contactItem {\n    list-style: none;\n  }\n"]))),g=n(1),x=function(t){var e=t.contactsToRender,n=t.onDelete;return Object(g.jsx)(O,{children:Object(g.jsx)("ul",{children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(g.jsxs)("li",{className:"contactItem","data-id":c,children:["".concat(e,": ").concat(a),Object(g.jsx)("button",{type:"button",onClick:function(){return n(c)},children:"Delete"})]},c)}))})})},C=p.a.section(c||(c=Object(f.a)(["\n  display: grid;\n\n  .filterInput {\n    border-radius: 15px;\n    margin: 0 auto;\n    width: 180px;\n    text-align: center;\n  }\n"]))),v=function(t){var e=t.onChange,n=t.filterStr;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(C,{children:[Object(g.jsx)("label",{children:"Find contacts by name"}),Object(g.jsx)("input",{className:"filterInput",type:"filter",name:"filter",onChange:e,value:n,autoComplete:"off"})]})})},w=n(30),y=p.a.section(r||(r=Object(f.a)(["\n  text-align: center;\n  .contactsForm {\n    display: grid;\n  }\n  .contactsFormBtn {\n    margin: auto;\n    width: 100px;\n  }\n  .contactsFormLabel {\n    margin: 10px;\n  }\n  .contactsFormInput {\n    border-radius: 15px;\n    margin: auto;\n    width: 200px;\n    margin-bottom: 20px;\n  }\n"]))),F=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(u.a)({},a,c))},t.onSubmit=function(e){e.preventDefault();var n=t.state,a={name:n.name,number:n.number,id:Object(w.a)()};t.props.getNewContact(a),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(g.jsx)(y,{children:Object(g.jsxs)("form",{className:"contactsForm",onSubmit:this.onSubmit,children:[Object(g.jsx)("label",{children:"Name "}),Object(g.jsx)("input",{className:"contactsFormInput",onChange:this.onChange,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off"}),Object(g.jsx)("label",{className:"contactsFormLabel",children:"Number "}),Object(g.jsx)("input",{className:"contactsFormInput",onChange:this.onChange,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,autoComplete:"off"}),Object(g.jsx)("button",{className:"contactsFormBtn",type:"submit",children:"Add contact"})]})})}}]),n}(s.Component),N=F;function S(t,e){t.forEach((function(t){if(t.name.toLowerCase()===e.name.toLowerCase())throw alert("".concat(t.name," is already in contacts.")),Error;if(t.number.toLowerCase()===e.number.toLowerCase())throw alert("".concat(t.number," is already in contacts.")),Error}))}var A=p.a.section(o||(o=Object(f.a)(["\n  color: #0044ffc9;\n  text-align: center;\n"]))),I=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.newContact=function(e){try{S(t.state.contacts,e)}catch(n){return}t.setState((function(t){return{contacts:[].concat(Object(b.a)(t.contacts),[e])}}))},t.onChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(u.a)({},a,c))},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.Delete=function(e){var n=e,a=t.state.contacts.filter((function(t){return n!==t.id}));t.setState({contacts:Object(b.a)(a)})},t}return Object(j.a)(n,[{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(A,{children:[Object(g.jsx)("h2",{children:"Phonebook"}),Object(g.jsx)(N,{getNewContact:this.newContact}),Object(g.jsx)("h2",{children:"Contacts"}),Object(g.jsx)(v,{onChange:this.onChange,filterStr:this.state.filter}),this.getFilteredContacts().length>0&&Object(g.jsx)(x,{contactsToRender:this.getFilteredContacts(),onDelete:this.Delete})]})})}}]),n}(s.Component),L=I;n(27);l.a.render(Object(g.jsx)(L,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.e0e9735c.chunk.js.map