(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),l=(a(13),a(4)),s=a(7),i=a(1),u=a(3),m=a(2),d=(a(14),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).render=function(){return o.a.createElement("tr",null,o.a.createElement("td",null,e.props.item.action),o.a.createElement("td",null,o.a.createElement("input",{type:"checkbox",checked:e.props.item.done,onChange:function(){return e.props.callback(e.props.item)}})))},e}return a}(o.a.Component)),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updateNewTextValue=function(e){n.setState({newItemText:e.target.value})},n.createNewTodo=function(){n.props.callback(n.state.newItemText),n.setState({newItemText:""})},n.render=function(){return o.a.createElement("div",{className:"my-1"},o.a.createElement("input",{className:"form-control",value:n.state.newItemText,onChange:n.updateNewTextValue}),o.a.createElement("button",{className:"btn btn-primary mt-1",onClick:n.createNewTodo},"Add"))},n.state={newItemText:""},n}return a}(o.a.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).render=function(){return o.a.createElement("h4",{className:"bg-success text-white text-center p-2"},e.props.name,"'s To Do List (",e.props.tasks.filter((function(e){return!e.done})).length," items to do)")},e}return a}(o.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).render=function(){return o.a.createElement("div",{className:"form-check"},o.a.createElement("input",{className:"form-check-input",type:"checkbox",checked:e.props.isChecked,onChange:function(t){return e.props.callback(t.target.checked)}}),o.a.createElement("label",{className:"form-check-label"},"Show ",e.props.description))},e}return a}(o.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updateNewTextValue=function(e){n.setState({newItemText:e.target.value})},n.createNewTodo=function(e){n.state.todoItems.find((function(t){return t.action===e}))||n.setState({todoItems:[].concat(Object(s.a)(n.state.todoItems),[{action:e,done:!1}])},(function(){return localStorage.setItem("todos",JSON.stringify(n.state))}))},n.changeStateData=function(){n.setState({userName:"Berkel"===n.state.userName?"Ibk":"Berkel"})},n.toggleTodo=function(e){return n.setState({todoItems:n.state.todoItems.map((function(t){return t.action===e.action?Object(l.a)(Object(l.a)({},t),{},{done:!t.done}):t}))})},n.todoTableRows=function(e){return n.state.todoItems.filter((function(t){return t.done===e})).map((function(e){return o.a.createElement(d,{key:e.action,item:e,callback:n.toggleTodo})}))},n.componentDidMount=function(){var e=localStorage.getItem("todos");n.setState(null!=e?JSON.parse(e):{userName:"Berkel",todoItems:[{action:"Pray",done:!0},{action:"Workout",done:!1},{action:"See a friend",done:!1},{action:"Study JavaScript",done:!0}],showCompleted:!0})},n.render=function(){return o.a.createElement("div",null,o.a.createElement(h,{name:n.state.userName,tasks:n.state.todoItems}),o.a.createElement("div",{className:"container-fluid"},o.a.createElement(p,{callback:n.createNewTodo}),o.a.createElement("table",{className:"table table-striped table-bordered"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Done"))),o.a.createElement("tbody",null,n.todoTableRows(!1))),o.a.createElement("div",{className:"bg-secondary text-white text-center p-2"},o.a.createElement(f,{description:"Completed Tasks",isChecked:n.state.showCompleted,callback:function(e){return n.setState({showCompleted:e})}})),n.state.showCompleted&&o.a.createElement("table",{className:"table table-striped table-bordered"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Done"))),o.a.createElement("tbody",null,n.todoTableRows(!0)))))},n.state={userName:"Berkel",todoItems:[{action:"Pray",done:!0},{action:"Workout",done:!1},{action:"See a friend",done:!1},{action:"Study JavaScript",done:!0}],showCompleted:!0},n}return a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.61daaec8.chunk.js.map