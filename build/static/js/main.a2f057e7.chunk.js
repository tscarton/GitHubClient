(this["webpackJsonpdemo-ui"]=this["webpackJsonpdemo-ui"]||[]).push([[0],{38:function(e,t,a){e.exports=a(79)},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},67:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(14),c=a.n(l),o=(a(43),a(8)),i=a(9),s=a(11),u=a(12),m=(a(44),a(17)),p=a.n(m),h=a(34),d=(a(46),a(80)),f=a(82),E=a(88),b=a(83),v=a(84),g=a(36),y=a(85),k=a(86),N=a(87),O=a(20),j=a(18),S=a(35),w=a.n(S),C=(a(67),a(81)),I=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={list:[]},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props.list;e.list!==t&&t&&this.setState({list:t})}},{key:"render",value:function(){var e=this.state.list;return r.a.createElement(d.a,null,r.a.createElement(C.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Language"))),r.a.createElement("tbody",null,e.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.name)),r.a.createElement("td",null,e.language))})))))}}]),a}(r.a.Component),A=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).searchGithub=function(){var e=Object(h.a)(p.a.mark((function e(t){var a,r,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=n.state,r=a.token,l=a.repoName,n.setState({loading:!0}),w.a.get("http://localhost:5000/api/repositories?name="+l,{headers:{token:r,"Access-Control-Allow-Origin":"*"}}).then((function(e){var t=e.data;n.setState({repoList:t.repositories})})).catch((function(e){n.setState({error:!0}),setTimeout((function(){n.setState({error:!1})}),3e3)})).then((function(){n.setState({loading:!1})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={error:!1,loading:!1,repoName:"",errorMsg:"",black:!0,repoList:[]},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.loading,l=t.repoList;return r.a.createElement("div",{className:"Login"},r.a.createElement(d.a,{className:"App"},r.a.createElement("h3",null,"Search Github Repository"),r.a.createElement(f.a,{className:"form",onSubmit:this.searchGithub},r.a.createElement(E.a,{color:"danger",isOpen:a,className:"w-50 offset-sm-3"},"Error! Is the token valid?"),r.a.createElement(b.a,{className:"w-50 offset-sm-3"},r.a.createElement(v.a,{addonType:"prepend"},r.a.createElement(g.a,null,r.a.createElement(j.a,{icon:O.b}))),r.a.createElement(y.a,{type:"text",name:"token",id:"token",placeholder:"Github Access Token (Required)",required:!0,onChange:function(t){return e.setState({token:t.target.value})}})),r.a.createElement("br",null),r.a.createElement(b.a,{className:"w-50 offset-sm-3"},r.a.createElement(v.a,{addonType:"prepend"},r.a.createElement(g.a,null,r.a.createElement(j.a,{icon:O.a}))),r.a.createElement(y.a,{type:"text",name:"repoName",id:"repoName",placeholder:"Repository Name (Optional)",onChange:function(t){return e.setState({repoName:t.target.value})}})),r.a.createElement("br",null),r.a.createElement(k.a,{type:"btn",color:"primary",className:n?"showIcon":"hideIcon"},r.a.createElement(N.a,{animation:"border",variant:"light"})),r.a.createElement(k.a,{type:"submit",color:"primary",className:n?"hideIcon":"showIcon"},"Search"))),r.a.createElement("br",null),r.a.createElement(I,{list:l}))}}]),a}(r.a.Component),L=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,null))}}]),a}(r.a.Component);a(75);a(76).config(),c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a2f057e7.chunk.js.map