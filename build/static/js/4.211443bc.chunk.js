(this.webpackJsonpruth=this.webpackJsonpruth||[]).push([[4],{109:function(n,e,t){"use strict";t.r(e);var i=t(5),a=t(84),r=t.n(a);function o(n,e,t,i,a,r,o){try{var c=n[r](o),s=c.value}catch(d){return void t(d)}c.done?e(s):Promise.resolve(s).then(i,a)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(i,a){var r=n.apply(e,t);function c(n){o(r,i,a,c,s,"next",n)}function s(n){o(r,i,a,c,s,"throw",n)}c(void 0)}))}}var s,d,h,l,p,x,u,f,j,m,g,b,w,y,O,v,k,L,S,_,z,E,N,A,H,I,F,G,P,T,M,q,C,D,R,V,B,W,Y,X,J,Z,Q,$,U,K,nn,en,tn,an,rn,on,cn,sn,dn=t(6),hn=t(66),ln=t(10),pn=t(31),xn=t(25),un=t(2),fn=dn.a.div(s||(s=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  margin: 80px 0;\n\n  @media only screen and (max-width: 650px) {\n    margin: 40px 0;\n  }\n"]))),jn=dn.a.div(d||(d=Object(i.a)(["\n  max-width: 1600px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  min-height: 500px;\n  height: 100%;\n"]))),mn=dn.a.div(h||(h=Object(i.a)(['\n  max-width: 350px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  min-height: 40px;\n  height: 100%;\n  padding: 16px;\n  position: relative;\n  @media only screen and (max-width: 650px) {\n    max-width: 180px;\n  }\n\n  ::after {\n    position: absolute;\n    content: "";\n    left: 0;\n    bottom: -4px;\n    width: 100%;\n    height: 6px;\n    background: ',";\n    border-radius: 0px;\n  }\n"])),ln.a.white),gn=Object(dn.a)(pn.e)(l||(l=Object(i.a)(["\n  color: ",";\n"])),ln.a.white),bn=dn.a.div(p||(p=Object(i.a)(["\n  margin: 64px auto;\n  max-width: 1278px;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 32px;\n  padding: 16px;\n  place-items: flex-start;\n  justify-content: flex-start;\n\n  grid-gap: 32px;\n  @media only screen and (max-width: 850px) {\n    grid-template-columns: repeat(2, 1fr);\n    place-items: center;\n    justify-content: center;\n  }\n  @media only screen and (max-width: 650px) {\n    margin: 40px 0;\n    place-items: center;\n    justify-content: center;\n    gap: 16px;\n    grid-gap: 16px;\n\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]))),wn=dn.a.div(x||(x=Object(i.a)(["\n  color: ",";\n\n  min-height: 300px;\n  width: 100%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  margin: 24px 0;\n  position: relative;\n\n  a {\n    position: absolute;\n    top: 0;\n    left: 0;\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"])),ln.a.white),yn=dn.a.img(u||(u=Object(i.a)(["\n  height: 500px;\n  max-height: 500px;\n  max-width: 400px;\n  width: 100%;\n  border-radius: 8px;\n  margin: 0 0 24px 0;\n  @media only screen and (max-width: 650px) {\n    height: 100%;\n    min-height: 250px;\n  }\n"]))),On=Object(dn.a)(pn.h)(f||(f=Object(i.a)(["\n  margin: 8px 0;\n  color: ",";\n"])),ln.a.white),vn=Object(dn.a)(pn.k)(j||(j=Object(i.a)(["\n  color: ",";\n"])),ln.a.gray),kn=dn.a.div(m||(m=Object(i.a)(["\n  min-height: 40px;\n  width: 100%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n"]))),Ln=Object(dn.a)(hn.a)(g||(g=Object(i.a)([""]))),Sn=function(){function n(){return(n=c(r.a.mark((function n(e){var t,i,a=arguments;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:{},n.next=3,fetch("https://api.hashnode.com/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:t})});case 3:return i=n.sent,n.abrupt("return",i.json());case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var e=Object(xn.useQuery)("ruth-blog",(function(){return function(e){return n.apply(this,arguments)}('\n    query GetUserArticles($page: Int!) {\n        user(username: "ikegah_ruth") {\n            publication {\n                posts(page: $page) {\n                    title\n                    brief\n                    slug\n                    dateAdded\n                    coverImage\n                }\n            }\n        }\n    }\n',{page:0})}),{cacheTime:1e4}).data;return console.log(e),Object(un.jsx)(fn,{children:Object(un.jsxs)(jn,{children:[Object(un.jsx)(mn,{children:Object(un.jsx)(gn,{children:"My Blog"})}),Object(un.jsx)(bn,{children:e&&e.data.user.publication.posts.slice(0,3).map((function(n,e){return Object(un.jsxs)(wn,{children:[Object(un.jsx)("a",{href:"https://ruthikegah.xyz/".concat(n.slug),target:"_blank",rel:"noopener noreferrer",children:" "}),Object(un.jsx)(yn,{src:n.coverImage,alt:"Ruth Ikegah"}),Object(un.jsx)(vn,{children:new Date("".concat(n.dateAdded)).toDateString()}),Object(un.jsx)(On,{children:n.title})]},e)}))}),Object(un.jsx)(kn,{children:Object(un.jsx)(Ln,{href:"https://ruthikegah.xyz/",target:"_blank",rel:"noopener noreferrer",children:"See full blog"})})]})})},_n=dn.a.div(b||(b=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  margin: 80px 0;\n\n  @media only screen and (max-width: 650px) {\n    margin: 40px 0;\n  }\n"]))),zn=dn.a.div(w||(w=Object(i.a)(["\n  max-width: 1600px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  min-height: 500px;\n  height: 100%;\n"]))),En=dn.a.div(y||(y=Object(i.a)(['\n  max-width: 350px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  min-height: 40px;\n  height: 100%;\n  padding: 16px;\n  position: relative;\n\n  ::after {\n    position: absolute;\n    content: "";\n    left: 0;\n    bottom: -4px;\n    width: 100%;\n    height: 6px;\n    background: ',";\n    border-radius: 0px;\n  }\n"])),ln.a.white),Nn=Object(dn.a)(pn.e)(O||(O=Object(i.a)(["\n  color: ",";\n"])),ln.a.white),An=dn.a.div(v||(v=Object(i.a)(["\n  margin: 64px 0;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0px;\n  grid-gap: 0px;\n  @media only screen and (max-width: 850px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media only screen and (max-width: 650px) {\n    margin: 40px 0;\n    place-items: center;\n    justify-content: center;\n\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]))),Hn=dn.a.div(k||(k=Object(i.a)(["\n  color: ",";\n  padding: 16px;\n  border: 1px solid ",";\n  min-height: 400px;\n  width: 100%;\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n"])),ln.a.white,ln.a.white),In=Object(dn.a)(pn.n)(L||(L=Object(i.a)(["\n  color: ",";\n"])),ln.a.secondary),Fn=Object(dn.a)(pn.f)(S||(S=Object(i.a)(["\n  margin: 8px 0;\n"]))),Gn=Object(dn.a)(pn.b)(_||(_=Object(i.a)([""]))),Pn=function(){return Object(un.jsx)(_n,{children:Object(un.jsxs)(zn,{children:[Object(un.jsx)(En,{children:Object(un.jsx)(Nn,{children:"What I do"})}),Object(un.jsx)(An,{children:[{number:"01",title:"Advocacy",text:"A Developer Advocate and GitHub Star. Sanjay is the head-chef here.He is extremely experienced and he is someone who can catch the vibe of people,the type of food to serve and he always makes sure that food is upto the mark and 'No halfway house in the quality of food you serve' is his main motto,says our head-ched Sanjay "},{number:"02",title:"Advocacy",text:"A Developer Advocate and GitHub Star. Sanjay is the head-chef here.He is extremely experienced and he is someone who can catch the vibe of people,the type of food to serve and he always makes sure that food is upto the mark and 'No halfway house in the quality of food you serve' is his main motto,says our head-ched Sanjay "},{number:"03",title:"Advocacy",text:"A Developer Advocate and GitHub Star. Sanjay is the head-chef here.He is extremely experienced and he is someone who can catch the vibe of people,the type of food to serve and he always makes sure that food is upto the mark and 'No halfway house in the quality of food you serve' is his main motto,says our head-ched Sanjay "},{number:"04",title:"Advocacy",text:"A Developer Advocate and GitHub Star. Sanjay is the head-chef here.He is extremely experienced and he is someone who can catch the vibe of people,the type of food to serve and he always makes sure that food is upto the mark and 'No halfway house in the quality of food you serve' is his main motto,says our head-ched Sanjay "}].map((function(n){return Object(un.jsxs)(Hn,{children:[Object(un.jsx)(In,{children:n.number}),Object(un.jsx)(Fn,{children:n.title}),Object(un.jsx)(Gn,{children:n.text})]},n.number)}))})]})})},Tn=t(17),Mn=t(67),qn=t(0),Cn=t(16),Dn=dn.a.div(z||(z=Object(i.a)(["\n  width: 100%;\n  min-height: 700px;\n  margin: 24px 0;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n  @media only screen and (max-width: 650px) {\n    min-height: 400px;\n  }\n"]))),Rn=dn.a.div(E||(E=Object(i.a)(['\n  max-width: 1280px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-areas: "Name Word";\n  align-items: center;\n\n  @media only screen and (max-width: 650px) {\n    grid-template-columns: repeat(1, 1fr);\n    grid-template-areas:\n      "Word"\n      "Name";\n  }\n']))),Vn=dn.a.div(N||(N=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  color: ",";\n  margin: 80px 0;\n  grid-area: Name;\n  max-width: 550px;\n  width: 100%;\n\n  @media only screen and (max-width: 650px) {\n    margin: 24px auto 0 auto;\n  }\n"])),ln.a.white),Bn=Object(dn.a)(pn.e)(A||(A=Object(i.a)(["\n  color: ",";\n  mix-blend-mode: ",";\n  position: relative;\n  z-index: 41;\n"])),ln.a.white,(function(n){return n.blend?"normal":"difference"})),Wn=dn.a.div(H||(H=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 16px 0;\n"]))),Yn=dn.a.span(I||(I=Object(i.a)(["\n  height: 8px;\n  max-width: 61px;\n  width: 100%;\n  background: ",";\n  margin: 40px 0 0 0;\n\n  @media only screen and (max-width: 650px) {\n    margin: 20px 0 0 0;\n    max-width: 15px;\n    width: 100%;\n  }\n"])),ln.a.white),Xn=Object(dn.a)(pn.e)(F||(F=Object(i.a)(["\n  color: ",";\n  mix-blend-mode: ",";\n  position: relative;\n  z-index: 41;\n"])),ln.a.white,(function(n){return n.blend?"normal":"difference"})),Jn=Object(dn.a)(pn.b)(G||(G=Object(i.a)(["\n  margin: 8px 0;\n  color: ",";\n  mix-blend-mode: difference;\n"])),ln.a.white),Zn=dn.a.div(P||(P=Object(i.a)(["\n  cursor: pointer;\n  max-width: 400px;\n  width: 100%;\n  transition: 0.4s ease-in-out;\n  svg {\n    transition: 0.4s ease-in-out;\n    max-width: 400px;\n    width: 100%;\n  }\n\n  :hover svg path {\n    fill: ",";\n    cursor: pointer;\n    transition: 0.4s ease-in-out;\n  }\n"])),ln.a.white),Qn=dn.a.div(T||(T=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  margin: 8px;\n  max-width: 400px;\n"]))),$n=dn.a.div(M||(M=Object(i.a)(['\n  grid-area: Word;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n\n  h1 {\n    color: #ffffff;\n\n    opacity: 0.3;\n    font-family: "Neue Machina Bold";\n    font-size: 96px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 1.3;\n    text-align: right;\n    margin: 24px 0;\n    @media only screen and (max-width: 650px) {\n      font-size: 32px;\n      text-align: center;\n      margin: 48px 0 0 0;\n    }\n  }\n']))),Un=function(){var n=Object(qn.useState)(!1),e=Object(Tn.a)(n,2),t=e[0],i=e[1],a=Object(qn.useState)(6),r=Object(Tn.a)(a,2),o=r[0],c=r[1];return Object(qn.useEffect)((function(){window.setInterval((function(){c((function(n){return n-1})),0===o&&i(!0)}),1e3)}),[o]),Object(un.jsxs)(Dn,{children:[Object(un.jsx)(Mn.a,{}),Object(un.jsxs)(Rn,{children:[Object(un.jsxs)(Vn,{children:[Object(un.jsx)(Bn,{blend:t,className:"main_title",children:"Ruth"}),Object(un.jsxs)(Wn,{children:[Object(un.jsx)(Yn,{}),Object(un.jsxs)(Qn,{children:[Object(un.jsx)(Xn,{blend:t,className:"main_title",children:"Ikegah"}),Object(un.jsx)(Jn,{children:"Vienna based art director and interface designer, with a strong focus on design systems and component libraries."}),Object(un.jsx)(Zn,{children:Object(un.jsx)(Cn.b,{to:"/about",children:Object(un.jsxs)("svg",{width:"295",height:"97",viewBox:"0 0 295 97",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(un.jsx)("path",{d:"M241 97H228C228 66.5 264.7 42 295 42V55.2C271.2 55.2 241 74.7 241 97Z",fill:"#FF007F"}),Object(un.jsx)("path",{d:"M295 55C264.7 55 228 30.5 228 0H241C241 22.2 271.2 41.8 295 41.8V55Z",fill:"#FF007F"}),Object(un.jsx)("path",{d:"M295 41.7998H0V55.1998H295V41.7998Z",fill:"#FF007F"})]})})})]})]})]}),Object(un.jsx)($n,{children:Object(un.jsx)("h1",{children:"Technical Content Manager "})})]})]})},Kn=t(72),ne=t.p+"static/media/ruth.b209388b.png",ee=dn.a.div(q||(q=Object(i.a)(["\n  width: 100%;\n"]))),te=Object(dn.a)(Kn.a)(C||(C=Object(i.a)([""]))),ie=dn.a.div(D||(D=Object(i.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 40px;\n  gap: 40px;\n  place-items: center;\n  justify-content: center;\n  align-items: center;\n  @media only screen and (max-width: 650px) {\n    grid-template-columns: repeat(1, 1fr);\n    grid-gap: 24px;\n    gap: 24px;\n  }\n"]))),ae=dn.a.div(R||(R=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),re=dn.a.img(V||(V=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  max-width: 600px;\n  max-height: 600px;\n  min-height: 250px;\n"]))),oe=dn.a.div(B||(B=Object(i.a)(["\n  display: grid;\n  grid-template-columns: 24px auto;\n  grid-gap: 10px;\n  gap: 10px;\n  align-items: flex-start;\n"]))),ce=dn.a.div(W||(W=Object(i.a)([""]))),se=dn.a.div(Y||(Y=Object(i.a)(["\n  height: 16px;\n  width: 16px;\n  background: ",";\n  border-radius: 50%;\n  margin: 8px 0 0 0;\n"])),ln.a.white),de=dn.a.div(X||(X=Object(i.a)(["\n  color: ",";\n  display: flex;\n  flex-direction: column;\n"])),ln.a.white),he=Object(dn.a)(pn.m)(J||(J=Object(i.a)([""]))),le=Object(dn.a)(pn.b)(Z||(Z=Object(i.a)(["\n  margin: 16px 0;\n"]))),pe=Object(dn.a)(hn.d)(Q||(Q=Object(i.a)(["\n  margin: 24px 0;\n"]))),xe=function(){return Object(un.jsx)(ee,{children:Object(un.jsx)(te,{children:Object(un.jsxs)(ie,{children:[Object(un.jsx)(ae,{children:Object(un.jsx)(re,{src:ne,alt:"Ruth"})}),Object(un.jsxs)(oe,{children:[Object(un.jsx)(ce,{children:Object(un.jsx)(se,{})}),Object(un.jsxs)(de,{children:[Object(un.jsx)(he,{children:"Hi, I'm Ruth Ikegah. I help people make the world better through quality software."}),Object(un.jsx)(le,{children:'A Developer Advocate and GitHub Star. Sanjay is the head-chef here.He is extremely experienced and he is someone who can catch the vibe of people,the type of food to serve and he always makes sure that food is upto the mark and "No halfway house in the quality of food you serve" is his main motto,says our head-ched Sanjay'}),Object(un.jsx)(Cn.b,{to:"/about",children:Object(un.jsx)(pe,{children:"Learn more about me"})})]})]})]})})})},ue=t(73),fe=t(69),je=t.n(fe),me=t(68),ge=t(74),be=dn.a.div($||($=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  margin: 80px 0;\n\n  @media only screen and (max-width: 650px) {\n    margin: 40px 0;\n  }\n"]))),we=dn.a.div(U||(U=Object(i.a)(["\n  max-width: 1600px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  min-height: 500px;\n  height: 100%;\n"]))),ye=dn.a.div(K||(K=Object(i.a)(['\n  max-width: 550px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  min-height: 40px;\n  height: 100%;\n  padding: 16px;\n  position: relative;\n  @media only screen and (max-width: 650px) {\n    max-width: 320px;\n  }\n\n  ::after {\n    position: absolute;\n    content: "";\n    left: 0;\n    bottom: -4px;\n    width: 100%;\n    height: 6px;\n    background: ',";\n    border-radius: 0px;\n  }\n"])),ln.a.white),Oe=Object(dn.a)(pn.e)(nn||(nn=Object(i.a)(["\n  color: ",";\n"])),ln.a.white),ve=dn.a.div(en||(en=Object(i.a)(["\n  margin: 64px auto;\n  max-width: 1278px;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 32px;\n  padding: 16px;\n  place-items: center;\n  justify-content: center;\n\n  grid-gap: 32px;\n\n  @media only screen and (max-width: 650px) {\n    margin: 40px 0;\n    place-items: center;\n    justify-content: center;\n    gap: 16px;\n    grid-gap: 16px;\n\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]))),ke=dn.a.div(tn||(tn=Object(i.a)(["\n  min-height: 40px;\n  width: 100%;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n"]))),Le=Object(dn.a)(hn.d)(an||(an=Object(i.a)([""]))),Se=function(){var n=Object(xn.useQuery)("home-works",(function(){return je.a.get(me.b)}),{cacheTime:1e4}),e=n.isLoading,t=n.data;return Object(un.jsx)(be,{children:Object(un.jsxs)(we,{children:[Object(un.jsx)(ye,{children:Object(un.jsx)(Oe,{children:"Selected work"})}),Object(un.jsxs)(ve,{children:[e&&[1,2].map((function(n,e){return Object(un.jsx)(ge.a,{})})),t&&t.data.map((function(n){return Object(un.jsx)(ue.a,{src:n.image,slug:"".concat(n.slug),title:n.title,label:n.label},n.id)}))]}),Object(un.jsx)(ke,{children:Object(un.jsx)(Cn.b,{to:"/works",children:Object(un.jsx)(Le,{children:"View more work"})})})]})})},_e=dn.a.div(rn||(rn=Object(i.a)(["\n  overflow: hidden;\n  position: absolute;\n  height: 100%;\n  height: calc(var(--vh, 1vh) * 100);\n  width: 100%;\n  z-index: 40;\n  left: 0;\n  top: 0;\n"]))),ze=dn.a.div(on||(on=Object(i.a)(["\n  position: absolute;\n  height: 100%;\n  height: calc(var(--vh, 1vh) * 100);\n  width: 100%;\n  z-index: 40;\n  left: 0;\n  top: 0;\n"]))),Ee=dn.a.div(cn||(cn=Object(i.a)(["\n  position: absolute;\n  height: 100%;\n  background: ",";\n  width: 34%;\n  z-index: 40;\n  left: 0;\n  top: 0;\n\n  &:nth-child(2) {\n    left: 33%;\n    background: ",";\n  }\n\n  &:nth-child(3) {\n    left: 66%;\n    background: ",";\n  }\n"])),ln.a.secondary,ln.a.secondary,ln.a.secondary),Ne=function(){return Object(un.jsx)(_e,{className:"overlay_body",children:Object(un.jsxs)(ze,{children:[Object(un.jsx)(Ee,{className:"overlay_top"}),Object(un.jsx)(Ee,{className:"overlay_top"}),Object(un.jsx)(Ee,{className:"overlay_top"})]})})},Ae=t(38),He=dn.a.div(sn||(sn=Object(i.a)([""])));e.default=function(){return Object(qn.useEffect)((function(){document.title="Home - Ruth Ikegah";var n=.1*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(n,"px")),Ae.a.timeline().from(".main_title",1.8,{opacity:0,y:70,ease:"power4.out",delay:1,skewY:7,stagger:{amount:.3}}).to(".overlay_top",1.8,{height:0,ease:"expo.inOut",stagger:{amount:.4}}).to(".overlay_body",.1,{display:"none"})})),Object(un.jsxs)(He,{children:[Object(un.jsx)(Ne,{}),Object(un.jsx)(Un,{}),Object(un.jsx)(xe,{}),Object(un.jsx)(Pn,{}),Object(un.jsx)(Se,{}),Object(un.jsx)(Sn,{})]})}},66:function(n,e,t){"use strict";t.d(e,"d",(function(){return h})),t.d(e,"a",(function(){return l})),t.d(e,"c",(function(){return p})),t.d(e,"b",(function(){return x}));var i,a,r,o,c=t(5),s=t(6),d=t(10),h=s.a.button(i||(i=Object(c.a)(['\n  height: 64px;\n  width: 100%;\n  max-width: 270px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 40px;\n  border: none;\n  outline: none;\n  font-family: "Inter";\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 18px;\n\n  padding: 23px 40px;\n  background: ',";\n  color: ",";\n  transition: all 0.3s ease-in;\n\n  :hover {\n    background: ",";\n  }\n  @media only screen and (max-width: 650px) {\n    font-size: 15px;\n  }\n"])),d.a.secondary,d.a.black,d.a.white),l=s.a.a(a||(a=Object(c.a)(['\n  height: 64px;\n  width: 100%;\n  max-width: 270px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 40px;\n  border: none;\n  outline: none;\n  font-family: "Inter";\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 18px;\n\n  padding: 23px 40px;\n  background: ',";\n  color: ",";\n  transition: all 0.3s ease-in;\n\n  :hover {\n    background: ",";\n  }\n  @media only screen and (max-width: 650px) {\n    font-size: 15px;\n  }\n"])),d.a.secondary,d.a.black,d.a.white),p=s.a.button(r||(r=Object(c.a)(['\n  height: 64px;\n  max-width: 500px;\n  width: 100%;\n\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 40px;\n  border: none;\n  outline: none;\n  font-family: "Inter";\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 18px;\n\n  padding: 23px 40px;\n  background: ',";\n  color: ",";\n  transition: all 0.3s ease-in;\n\n  :hover {\n    background: ",";\n  }\n  @media only screen and (max-width: 650px) {\n    font-size: 15px;\n  }\n"])),d.a.secondary,d.a.black,d.a.white),x=s.a.a(o||(o=Object(c.a)(['\n  height: 56px;\n  width: 100%;\n  max-width: 160px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 40px;\n  border: none;\n  outline: none;\n  font-family: "Inter";\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 18px;\n\n  padding: 23px 40px;\n  background: transparent;\n  color: ',";\n  border: 1px solid ",";\n  transition: all 0.3s ease-in;\n\n  :hover {\n    background: ",";\n    color: ",";\n  }\n  @media only screen and (max-width: 650px) {\n    font-size: 15px;\n  }\n"])),d.a.white,d.a.white,d.a.white,d.a.primary)},67:function(n,e,t){"use strict";var i,a,r,o,c,s,d,h,l,p,x,u,f,j=t(5),m=t(17),g=t(0),b=t(4),w=t(16),y=t(6),O=t(10),v=t(31),k=t.p+"static/media/logo.f5ae31b6.svg",L=t(2),S=y.a.nav(i||(i=Object(j.a)(["\n  position: absolute;\n  z-index: 40;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 64px;\n  background: transparent;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n"]))),_=y.a.div(a||(a=Object(j.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 16px;\n"]))),z=y.a.div(r||(r=Object(j.a)(["\n  position: fixed;\n  width: 48px;\n  height: 20px;\n  right: 16px;\n  top: 32px;\n  display: none;\n\n  z-index: 53;\n  @media only screen and (max-width: 800px) {\n    display: flex;\n  }\n"]))),E=y.a.div(o||(o=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 48px;\n  height: 20px;\n\n  cursor: pointer;\n  transition: 0.4s ease-in;\n"]))),N=y.a.span(c||(c=Object(j.a)(["\n  width: 48px;\n  height: 2px;\n  background: ",";\n  border-radius: 10px;\n  transition: 0.4s ease-in;\n  cursor: pointer;\n  transform: ",";\n"])),O.a.white,(function(n){return n.toggle?" rotate(45deg) translate(-5px,6px)":"rotate(0)"})),A=y.a.span(s||(s=Object(j.a)(["\n  width: 48px;\n  height: 2px;\n  transition: 0.4s ease-in;\n  background: ",";\n  margin: 4px 0;\n  border-radius: 10px;\n  cursor: pointer;\n  display: ",";\n"])),O.a.white,(function(n){return n.toggle?"none":"flex"})),H=y.a.span(d||(d=Object(j.a)(["\n  width: 48px;\n  height: 2px;\n  background: ",";\n  border-radius: 10px;\n  transition: 0.4s ease-in;\n  cursor: pointer;\n  transform: ",";\n"])),O.a.white,(function(n){return n.toggle?" rotate(-45deg) translate(-5px,-6px)":"rotate(0)"})),I=y.a.div(h||(h=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  a {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n  }\n"]))),F=y.a.img(l||(l=Object(j.a)(["\n  height: 40px;\n  width: 105px;\n"]))),G=Object(y.a)(v.n)(p||(p=Object(j.a)(["\n  color: ",";\n"])),O.a.white),P=y.a.div(x||(x=Object(j.a)(["\n  @media only screen and (max-width: 800px) {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    transition: 0.4s ease-in;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    padding: 24px;\n    background: ",";\n    z-index: 52;\n    transform: ",";\n    /* align-items: center; */\n  }\n"])),O.a.primary,(function(n){return n.toggle?"translateY(0px)":"translateY(-2000px)"})),T=y.a.ul(u||(u=Object(j.a)(["\n  display: flex;\n  flex-direction: row;\n  a {\n    margin: 8px;\n  }\n\n  @media only screen and (max-width: 800px) {\n    flex-direction: column;\n  }\n"]))),M=y.a.li(f||(f=Object(j.a)(["\n  height: 40px;\n  max-width: 209px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 40px;\n  padding: 11px 34px;\n  border: 0.5px solid ",";\n  transition: 0.4s ease-in;\n  color: ",';\n  font-family: "Neue Machina Bold";\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  background: transparent;\n\n  :hover {\n    color: ',";\n    background: ",";\n  }\n"])),O.a.white,O.a.white,O.a.primary,O.a.white);e.a=function(){var n=Object(g.useState)(!1),e=Object(m.a)(n,2),t=e[0],i=e[1],a=Object(b.e)();Object(g.useEffect)((function(){i(!1)}),[a]);return Object(L.jsx)(S,{children:Object(L.jsxs)(_,{children:[Object(L.jsx)(I,{children:Object(L.jsxs)(w.b,{to:"/",children:[Object(L.jsx)(F,{src:k,alt:"Ruth Ikegah Logo"}),Object(L.jsx)(G,{children:"Developer Advocate + GitHub Star "})]})}),Object(L.jsx)(P,{toggle:t,children:Object(L.jsxs)(T,{children:[Object(L.jsx)(w.c,{to:"/works",children:Object(L.jsx)(M,{children:"Work/Speaking"})}),Object(L.jsx)(w.c,{to:"/about",children:Object(L.jsx)(M,{children:"About"})}),Object(L.jsx)("a",{href:"https://ruthikegah.xyz/",target:"_blank",rel:"noopener noreferrer",children:Object(L.jsx)(M,{children:"Blog"})}),Object(L.jsx)(w.c,{to:"/contact",children:Object(L.jsx)(M,{children:"Contact"})})]})}),Object(L.jsx)(z,{onClick:function(){i(!t)},children:Object(L.jsxs)(E,{children:[Object(L.jsx)(N,{toggle:t}),Object(L.jsx)(A,{toggle:t}),Object(L.jsx)(H,{toggle:t})]})})]})})}},68:function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"d",(function(){return o})),t.d(e,"a",(function(){return c}));var i="https://api.ruthikegah.com/",a="".concat(i,"api/home-work/"),r="".concat(i,"api/work/"),o=function(n){return"".concat(i,"api/work/").concat(n,"/")},c="".concat(i,"api/contact/")},72:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var i,a=t(5),r=t(6).a.div(i||(i=Object(a.a)(["\n  max-width: 1280px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 16px;\n"])))},73:function(n,e,t){"use strict";var i,a,r,o,c,s,d,h,l,p=t(5),x=t(6),u=t(16),f=t(10),j=t(31),m=t(2),g=x.a.div(i||(i=Object(p.a)(["\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n\n  min-height: 250px;\n  height: 100%;\n  margin: 24px auto;\n"]))),b=x.a.div(a||(a=Object(p.a)(["\n  max-width: 120px;\n  width: 100%;\n  height: 34px;\n  border-radius: 40px;\n  padding: 10px, 16px, 10px, 16px;\n  border: 1px solid ",";\n  color: ",";\n  position: absolute;\n  z-index: 6;\n  top: 30px;\n  left: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),f.a.white,f.a.white),w=Object(x.a)(u.b)(r||(r=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  object-fit: cover;\n"]))),y=Object(x.a)(j.l)(o||(o=Object(p.a)(["\n  color: ",";\n"])),f.a.white),O=x.a.div(c||(c=Object(p.a)(['\n  max-width: 600px;\n  max-height: 400px;\n  min-height: 250px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n\n  ::after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.4);\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n  }\n']))),v=x.a.img(s||(s=Object(p.a)(["\n  max-width: 600px;\n  max-height: 400px;\n  min-height: 250px;\n  width: 100%;\n  height: 100%;\n"]))),k=Object(x.a)(j.f)(d||(d=Object(p.a)(["\n  margin: 32px 0 16px 0;\n  color: ",";\n"])),f.a.white),L=x.a.span(h||(h=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  color: ",";\n  transition: 0.5s ease-in;\n\n  :hover svg {\n    transform: rotate(45deg);\n  }\n  svg {\n    width: 24px;\n    height: 24px;\n    transition: 0.3s ease-in;\n    ",":hover & {\n      transform: rotate(45deg);\n    }\n  }\n"])),f.a.white,g),S=Object(x.a)(j.j)(l||(l=Object(p.a)(["\n  color: ",";\n\n  margin: 0 10px 0 0;\n"])),f.a.white);e.a=function(n){var e=n.slug,t=n.src,i=n.title,a=n.label;return Object(m.jsxs)(g,{children:[Object(m.jsx)(w,{to:"/work/".concat(e)}),Object(m.jsxs)(O,{children:[Object(m.jsx)(b,{children:Object(m.jsx)(y,{children:a})}),Object(m.jsx)(v,{src:t,alt:i})]}),Object(m.jsx)(k,{children:i}),Object(m.jsx)(u.b,{to:"/work/".concat(e),children:Object(m.jsxs)(L,{children:[Object(m.jsx)(S,{children:" View project"}),Object(m.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(m.jsx)("path",{d:"M7 17L17 7",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),Object(m.jsx)("path",{d:"M17 17V7H7",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})]})})]})}},74:function(n,e,t){"use strict";var i,a,r,o,c,s,d,h=t(5),l=(t(0),t(6)),p=t(2),x=l.a.div(i||(i=Object(h.a)(["\n  height: 350px;\n  width: 100%;\n  max-width: 400px;\n  background: #f2f2f2;\n  margin: 8px 0;\n  padding: 24px;\n  overflow: hidden;\n  position: relative;\n"]))),u=Object(l.b)(a||(a=Object(h.a)(["\n0%{\ntransform: translateX(-150%);\n}\n\n50%{\n    transform: translateX(-60%);\n}\n100%{\n    transform: translateX(150%);\n}\n"]))),f=l.a.div(r||(r=Object(h.a)(["\n  width: 100%;\n  top: 0;\n  left: 0;\n  height: 100%;\n  position: absolute;\n  animation: "," 1.5s infinite;\n"])),u),j=l.a.div(o||(o=Object(h.a)(["\n  width: 50%;\n  height: 100%;\n  transform: skewX(-20deg);\n  background: rgba(255, 255, 255, 0.8);\n"]))),m=l.a.div(c||(c=Object(h.a)(["\n  height: 180px;\n  width: 100%;\n  margin: 16px 0;\n  background: #ddd;\n"]))),g=l.a.div(s||(s=Object(h.a)(["\n  height: 30px;\n  margin: 8px 0;\n  width: 100%;\n  background: #ddd;\n"]))),b=l.a.div(d||(d=Object(h.a)(["\n  height: 10px;\n  width: 50%;\n  margin: 8px 0;\n  background: #ddd;\n"])));e.a=function(){return Object(p.jsxs)(x,{children:[Object(p.jsx)(m,{}),Object(p.jsx)(g,{}),Object(p.jsx)(b,{}),Object(p.jsx)(b,{}),Object(p.jsx)(f,{children:Object(p.jsx)(j,{})})]})}},84:function(n,e,t){n.exports=t(85)},85:function(n,e,t){var i=function(n){"use strict";var e,t=Object.prototype,i=t.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(n,e,t){return Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{s({},"")}catch(A){s=function(n,e,t){return n[e]=t}}function d(n,e,t,i){var a=e&&e.prototype instanceof j?e:j,r=Object.create(a.prototype),o=new z(i||[]);return r._invoke=function(n,e,t){var i=l;return function(a,r){if(i===x)throw new Error("Generator is already running");if(i===u){if("throw"===a)throw r;return N()}for(t.method=a,t.arg=r;;){var o=t.delegate;if(o){var c=L(o,t);if(c){if(c===f)continue;return c}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(i===l)throw i=u,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);i=x;var s=h(n,e,t);if("normal"===s.type){if(i=t.done?u:p,s.arg===f)continue;return{value:s.arg,done:t.done}}"throw"===s.type&&(i=u,t.method="throw",t.arg=s.arg)}}}(n,t,o),r}function h(n,e,t){try{return{type:"normal",arg:n.call(e,t)}}catch(A){return{type:"throw",arg:A}}}n.wrap=d;var l="suspendedStart",p="suspendedYield",x="executing",u="completed",f={};function j(){}function m(){}function g(){}var b={};b[r]=function(){return this};var w=Object.getPrototypeOf,y=w&&w(w(E([])));y&&y!==t&&i.call(y,r)&&(b=y);var O=g.prototype=j.prototype=Object.create(b);function v(n){["next","throw","return"].forEach((function(e){s(n,e,(function(n){return this._invoke(e,n)}))}))}function k(n,e){function t(a,r,o,c){var s=h(n[a],n,r);if("throw"!==s.type){var d=s.arg,l=d.value;return l&&"object"===typeof l&&i.call(l,"__await")?e.resolve(l.__await).then((function(n){t("next",n,o,c)}),(function(n){t("throw",n,o,c)})):e.resolve(l).then((function(n){d.value=n,o(d)}),(function(n){return t("throw",n,o,c)}))}c(s.arg)}var a;this._invoke=function(n,i){function r(){return new e((function(e,a){t(n,i,e,a)}))}return a=a?a.then(r,r):r()}}function L(n,t){var i=n.iterator[t.method];if(i===e){if(t.delegate=null,"throw"===t.method){if(n.iterator.return&&(t.method="return",t.arg=e,L(n,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=h(i,n.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var r=a.arg;return r?r.done?(t[n.resultName]=r.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=e),t.delegate=null,f):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function S(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function _(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function z(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(S,this),this.reset(!0)}function E(n){if(n){var t=n[r];if(t)return t.call(n);if("function"===typeof n.next)return n;if(!isNaN(n.length)){var a=-1,o=function t(){for(;++a<n.length;)if(i.call(n,a))return t.value=n[a],t.done=!1,t;return t.value=e,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:e,done:!0}}return m.prototype=O.constructor=g,g.constructor=m,m.displayName=s(g,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var e="function"===typeof n&&n.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,g):(n.__proto__=g,s(n,c,"GeneratorFunction")),n.prototype=Object.create(O),n},n.awrap=function(n){return{__await:n}},v(k.prototype),k.prototype[o]=function(){return this},n.AsyncIterator=k,n.async=function(e,t,i,a,r){void 0===r&&(r=Promise);var o=new k(d(e,t,i,a),r);return n.isGeneratorFunction(t)?o:o.next().then((function(n){return n.done?n.value:o.next()}))},v(O),s(O,c,"Generator"),O[r]=function(){return this},O.toString=function(){return"[object Generator]"},n.keys=function(n){var e=[];for(var t in n)e.push(t);return e.reverse(),function t(){for(;e.length;){var i=e.pop();if(i in n)return t.value=i,t.done=!1,t}return t.done=!0,t}},n.values=E,z.prototype={constructor:z,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!n)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=e)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function a(i,a){return c.type="throw",c.arg=n,t.next=i,a&&(t.method="next",t.arg=e),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),d=i.call(o,"finallyLoc");if(s&&d){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(n,e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc<=this.prev&&i.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===n||"continue"===n)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var o=r?r.completion:{};return o.type=n,o.arg=e,r?(this.method="next",this.next=r.finallyLoc,f):this.complete(o)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),f},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),_(t),f}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var t=this.tryEntries[e];if(t.tryLoc===n){var i=t.completion;if("throw"===i.type){var a=i.arg;_(t)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,i){return this.delegate={iterator:E(n),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=e),f}},n}(n.exports);try{regeneratorRuntime=i}catch(a){Function("r","regeneratorRuntime = r")(i)}}}]);
//# sourceMappingURL=4.211443bc.chunk.js.map