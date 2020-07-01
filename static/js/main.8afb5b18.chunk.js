(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=(a(13),a(14),a(15),a(1)),o=a(2),s=a(5),u=a(3),m=a(4),p=(a(16),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(b,null),r.a.createElement(E,null),r.a.createElement(h,null),r.a.createElement(v,null))}}]),a}(r.a.Component)),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Information"},r.a.createElement("div",{class:"Me"},r.a.createElement("h1",{className:"Name"},"Ivailo Hristov"),r.a.createElement("h2",{className:"Title"},"Full-Stack Web Developer")),r.a.createElement("div",{className:"Contacts"},r.a.createElement("p",null,r.a.createElement("span",null,"Phone:"),"+359 877 676 887"),r.a.createElement("p",null,r.a.createElement("span",null,"Mail:"),"ivailohristov1990@gmail.com"),r.a.createElement("a",{target:"_blank",href:"https://github.com/HristovCodes"},r.a.createElement("span",null,"Github:"),"github.com/HristovCodes/")))}}]),a}(r.a.Component),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Skills"},r.a.createElement("ul",{className:"Category"},r.a.createElement("li",{className:"Header"},"Languages"),r.a.createElement("li",null,"C#"),r.a.createElement("li",null,"SQL"),r.a.createElement("li",null,"HTML5"),r.a.createElement("li",null,"CSS3"),r.a.createElement("li",null,"ES6"),r.a.createElement("li",null,"SCSS/SASS")),r.a.createElement("ul",{className:"Category"},r.a.createElement("li",{className:"Header"},"Frameworks"),r.a.createElement("li",null,"Asp.Net"),r.a.createElement("li",null,"Entity Framework"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Tailwind")),r.a.createElement("ul",{className:"Category"},r.a.createElement("li",{className:"Header"},"Other"),r.a.createElement("li",null,"Git"),r.a.createElement("li",null,"WebPack"),r.a.createElement("li",null,"Figma")))}}]),a}(r.a.Component),h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Projects"},r.a.createElement(d,{name:"Pellio",languages:["C#","EF","HTML","CSS","ES6"],description:"Asp.Net Core e-commerce web app develepod using Asp.Net Core, EF Core and MSSQLServer for the database."}))}}]),a}(r.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Links"})}}]),a}(r.a.Component),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=r.a.createElement("div",{className:"Languages"},this.props.languages.map((function(e){return r.a.createElement("p",{className:"Lang"},e)})));return r.a.createElement("div",{className:"Card"},r.a.createElement("p",{className:"PrjName"},this.props.name),r.a.createElement("p",{className:"Description"},this.props.description),e)}}]),a}(r.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).changeTabToHome=n.changeTabToHome.bind(Object(s.a)(n)),n.state={tab:p},n}return Object(o.a)(a,[{key:"changeTabToHome",value:function(){this.setState({tab:p})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Tab"},r.a.createElement("div",{className:"Nav"},r.a.createElement(j,{onBtnPress:this.changeTabToHome,name:"Home"})),r.a.createElement(O,{tab:this.state.tab}))}}]),a}(r.a.Component),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(s.a)(n)),n}return Object(o.a)(a,[{key:"handleClick",value:function(e){this.props.onBtnPress(e.target.value)}},{key:"render",value:function(){return r.a.createElement("button",{onClick:this.handleClick},this.props.name)}}]),a}(r.a.Component),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(this.props.tab,{title:this.props.title,content:this.props.content})}}]),a}(r.a.Component),C=f;var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.8afb5b18.chunk.js.map