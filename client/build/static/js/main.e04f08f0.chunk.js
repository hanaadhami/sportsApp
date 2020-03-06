(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{128:function(e,t,a){e.exports=a(244)},133:function(e,t,a){},244:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),o=a.n(s),c=(a(133),a(11)),i=a(12),l=a(18),u=a(17),m=a(19),h=a(78),p=a.n(h),g=a(113),d=a.n(g),b=a(20),f=a(29),E=a(270),v=a(277),y=a(273),j=function(){function e(){Object(c.a)(this,e)}return Object(i.a)(e,null,[{key:"authenticateUser",value:function(e){localStorage.setItem("token",e)}},{key:"isUserAuthenticated",value:function(){return null!==localStorage.getItem("token")}},{key:"deauthenticateUser",value:function(){localStorage.removeItem("token")}},{key:"getToken",value:function(){return localStorage.getItem("token")}}]),e}(),O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.toggleAuthenticateStatus()}},{key:"render",value:function(){return r.a.createElement(E.a,{className:"container"},r.a.createElement(v.a,{title:"React Application",subtitle:"This is the home page."}),j.isUserAuthenticated()?r.a.createElement(y.a,{style:{fontSize:"16px",color:"green"}},"Welcome to the Sports App! "):r.a.createElement(y.a,{style:{fontSize:"16px",color:"green"}},"You are not logged in."))}}]),t}(r.a.Component),S=a(57),k=function(e){var t=e.component,a=Object(S.a)(e,["component"]);return r.a.createElement(f.b,Object.assign({},a,{render:function(e){return j.isUserAuthenticated()?r.a.createElement(t,Object.assign({},e,a)):r.a.createElement(f.a,{to:{pathname:"/",state:{from:e.location}}})}}))},A=function(e){var t=e.component,a=Object(S.a)(e,["component"]);return r.a.createElement(f.b,Object.assign({},a,{render:function(e){return j.isUserAuthenticated()?r.a.createElement(f.a,{to:{pathname:"/",state:{from:e.location}}}):r.a.createElement(t,Object.assign({},e,a))}}))},w=function(e){var t=e.component,a=Object(S.a)(e,["component"]);return r.a.createElement(f.b,Object.assign({},a,{render:function(e){return r.a.createElement(t,Object.assign({},e,a))}}))},N=a(5),x=a.n(N),C=a(275),T=a(274),D=function(e){var t=e.onSubmit,a=e.onChange,n=e.errors,s=e.successMessage,o=e.user;e.toggleAuthenticateStatus;return r.a.createElement(E.a,{className:"container"},r.a.createElement("form",{action:"/",onSubmit:t},r.a.createElement("h2",{className:"card-heading"},"Login"),s&&r.a.createElement("p",{className:"success-message"},s),n.summary&&r.a.createElement("p",{className:"error-message"},n.summary),r.a.createElement("div",{className:"field-line"},r.a.createElement(T.a,{floatingLabelText:"Email",name:"email",errorText:n.email,onChange:a,value:o.email})),r.a.createElement("div",{className:"field-line"},r.a.createElement(T.a,{floatingLabelText:"Password",type:"password",name:"password",onChange:a,errorText:n.password,value:o.password})),r.a.createElement("div",{className:"button-line"},r.a.createElement(C.a,{type:"submit",label:"Log in",primary:!0})),r.a.createElement(y.a,null,"Don't have an account? ",r.a.createElement(b.b,{to:"/signup"},"Create one"),".")))},U=a(56),M=a.n(U),L=function(e){return M.a.post("/auth/login",e)},I=function(e){return M.a.post("/auth/signup",e)},R=function(e){return M.a.get("/api/dashboard",{headers:{Authorization:"bearer ".concat(e)}})},z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={errors:{},successMessage:"",user:{email:"",password:""}},a.processForm=function(e){e.preventDefault();var t=a.state.user,n=t.email,r=t.password;L({email:n,password:r}).then((function(e){j.authenticateUser(e.data.token),a.props.toggleAuthenticateStatus(),a.props.history.push("/dashboard")})).catch((function(e){var t=e.response,n=t.data.errors?t.data.errors:{};n.summary=t.data.message,a.setState({errors:n})}))},a.changeUser=function(e){var t=e.target.name,n=a.state.user;n[t]=e.target.value,a.setState({user:n})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("successMessage"),t="";e&&(t=e,localStorage.removeItem("successMessage")),this.setState({successMessage:t})}},{key:"componentWillUnmount",value:function(){this.setState({errors:{}})}},{key:"render",value:function(){return r.a.createElement(D,{onSubmit:this.processForm,onChange:this.changeUser,errors:this.state.errors,successMessage:this.state.successMessage,user:this.state.user})}}]),t}(r.a.Component);z.contextTypes={router:x.a.object.isRequired};var F=z,q=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){j.deauthenticateUser(),this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Logging out..."))}}]),t}(r.a.Component);q.contextTypes={router:x.a.object.isRequired};var W=q,J=function(e){var t=e.onSubmit,a=e.onChange,n=e.errors,s=e.user;return r.a.createElement(E.a,{className:"container"},r.a.createElement("form",{action:"/",onSubmit:t},r.a.createElement("h2",{className:"card-heading"},"Sign Up"),n.summary&&r.a.createElement("p",{className:"error-message"},n.summary),r.a.createElement("div",{className:"field-line"},r.a.createElement(T.a,{floatingLabelText:"Name",name:"name",errorText:n.name,onChange:a,value:s.name})),r.a.createElement("div",{className:"field-line"},r.a.createElement(T.a,{floatingLabelText:"Email",name:"email",errorText:n.email,onChange:a,value:s.email})),r.a.createElement("div",{className:"field-line"},r.a.createElement(T.a,{floatingLabelText:"Password",type:"password",name:"password",onChange:a,errorText:n.password,value:s.password})),r.a.createElement("div",{className:"button-line"},r.a.createElement(C.a,{variant:"contained",color:"primary"},"Create your account")),r.a.createElement(y.a,null,"Already have an account? ",r.a.createElement(b.b,{to:"/login"},"Log in"))))},P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={errors:{},user:{email:"",name:"",password:""}},a.processForm=function(e){e.preventDefault();var t=a.state.user,n=t.name,r=t.email,s=t.password;I({name:n,email:r,password:s}).then((function(e){localStorage.setItem("successMessage",e.data.message),a.props.history.push("/login"),a.setState({errors:{}})})).catch((function(e){var t=e.response,n=t.data.errors?t.data.errors:{};n.summary=t.data.message,a.setState({errors:n})}))},a.changeUser=function(e){var t=e.target.name,n=a.state.user;n[t]=e.target.value,a.setState({user:n})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(J,{onSubmit:this.processForm,onChange:this.changeUser,errors:this.state.errors,user:this.state.user})}}]),t}(r.a.Component);P.contextTypes={router:x.a.object.isRequired};var Y=P,B=function(e){var t=e.secretData,a=e.user;return r.a.createElement(E.a,{className:"container"},r.a.createElement(v.a,{title:"Dashboard",subtitle:"You should get access to this page only after authentication."}),t&&r.a.createElement(y.a,{style:{fontSize:"16px",color:"green"}},"Welcome ",r.a.createElement("strong",null,a.name),"!",r.a.createElement("br",null),t))},G=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={secretData:"",user:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;R(j.getToken()).then((function(t){e.setState({secretData:t.data.message,user:t.data.user})}))}},{key:"render",value:function(){return r.a.createElement(B,{secretData:this.state.secretData,user:this.state.user})}}]),t}(r.a.Component),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={authenticated:!1},a.toggleAuthenticateStatus=function(){a.setState({authenticated:j.isUserAuthenticated()})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.toggleAuthenticateStatus()}},{key:"render",value:function(){return r.a.createElement(d.a,{muiTheme:p()()},r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"top-bar"},r.a.createElement("div",{className:"top-bar-left"},r.a.createElement(b.b,{to:"/"},"React App")),this.state.authenticated?r.a.createElement("div",{className:"top-bar-right"},r.a.createElement(b.b,{to:"/dashboard"},"Dashboard"),r.a.createElement(b.b,{to:"/logout"},"Log out")):r.a.createElement("div",{className:"top-bar-right"},r.a.createElement(b.b,{to:"/login"},"Log in"),r.a.createElement(b.b,{to:"/signup"},"Sign up"))),r.a.createElement(w,{exact:!0,path:"/",component:O,toggleAuthenticateStatus:this.toggleAuthenticateStatus}),r.a.createElement(k,{path:"/dashboard",component:G}),r.a.createElement(A,{path:"/login",component:F,toggleAuthenticateStatus:this.toggleAuthenticateStatus}),r.a.createElement(A,{path:"/signup",component:Y}),r.a.createElement(f.b,{path:"/logout",component:W}))))}}]),t}(n.Component);o.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.e04f08f0.chunk.js.map