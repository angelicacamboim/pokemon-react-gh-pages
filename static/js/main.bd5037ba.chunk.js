(this["webpackJsonppokemon-react"]=this["webpackJsonppokemon-react"]||[]).push([[0],{53:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(29),a=n.n(o),i=n(18),s=n(17),l=n(6),d=n(21),b=n(22),j=n(3);function h(){return Object(j.jsxs)("footer",{className:"text-center text-lg-start bg-light text-muted",children:[Object(j.jsxs)("section",{className:"d-flex justify-content-center justify-content-lg-between p-4 border-bottom",children:[Object(j.jsx)("div",{className:"me-5 d-none d-lg-block",children:Object(j.jsx)("span",{children:"Get connected with us on social networks:"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{href:"https://www.linkedin.com/in/angelicabayer/",target:"_blank",className:"me-4 text-reset",rel:"noreferrer",children:Object(j.jsx)(d.a,{size:"2x",icon:b.b})}),Object(j.jsx)("a",{href:"https://github.com/angelicacamboim",target:"_blank",className:"me-4 text-reset",rel:"noreferrer",children:Object(j.jsx)(d.a,{size:"2x",icon:b.a})})]})]}),Object(j.jsx)("div",{className:"text-center p-4",children:"Made with \u2764\ufe0f by Angelica"})]})}var m=n(54),f=n(55),x=n(56),u=n(57),g=n.p+"static/media/logo.0be7a113.svg",O=n(30),p=n.n(O),k=n(11),v=n(34);function w(e){var t=Object(r.useContext)(k.a),n=t.colors,c=t.title;return Object(j.jsx)("header",{className:"d-flex flex-row shadow-sm p-1 mb-3 border-bottom border-white",children:Object(j.jsxs)(m.a,{tag:f.a,className:"justify-content-between",expand:"md",children:[Object(j.jsx)(x.a,{href:"/",children:Object(j.jsx)("img",{src:g,alt:"Logo",width:"130px"})}),Object(j.jsx)(u.a,{children:Object(j.jsx)(p.a,{onChange:e.toggleTheme,checked:"light"===c,checkedIcon:!1,uncheckedIcon:!1,height:10,width:40,handleDiameter:20,offColor:Object(v.a)(.15,n.secundary),onColor:n.primary})})]})})}var y,N,z,S,F=n(60),I=n(61),C=n(13),J=n(58),E=n(59),B=(Object(k.d)(J.a)(y||(y=Object(C.a)(["\n  background: linear-gradient(#F0FFF0, ",");\n\n"])),(function(e){return e.color})),Object(k.d)(E.a)(N||(N=Object(C.a)(["\n  background-color: ",";\n"])),(function(e){return e.theme.colors.secundary})),Object(k.d)(s.b)(z||(z=Object(C.a)(["\nbackground-color: ",';\n\t-moz-user-select: none;\n\ttext-transform: capitalize;\n\tcolor: #fff;\n\tcursor: pointer;\n\tdisplay: inline-block;\n\tfont-size: 16px;\n\tfont-weight: 400;\n\tletter-spacing: 1px;\n\tline-height: 0;\n\tmargin-bottom: 0;\n\tpadding: 30px 44px;\n\tborder-radius: 5px;\n\tcursor: pointer;\n\ttransition: color 0.4s linear;\n\tposition: relative;\n\tz-index: 1;\n\tborder: 0;\n\toverflow: hidden;\n\tmargin: 0;\n\ttext-decoration: none;\n\n  &:before {\n    color: #fff;\n    content: "";\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #d62514;\n\tz-index: 1;\n\tborder-radius: 5px;\n\ttransition: transform 0.5s;\n\ttransition-timing-function: ease;\n\ttransform-origin: 0 0;\n\ttransition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);\n\ttransform: scaleX(0)\n  }\n&:hover:before {\n  transform: scaleX(1);\n\tcolor: #fff !important;\n\tz-index: -1\n}\n&:hover{\n\tcolor: #fff !important;\n\n}\n&:focus {\n  outline: 0;\n\tbox-shadow: none\n}\n'])),(function(e){return e.theme.colors.primary}))),D=n.p+"static/media/banner.72f3f006.svg";function M(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("main",{className:"m-0",style:{height:"100vh"},children:Object(j.jsx)(f.a,{children:Object(j.jsxs)(F.a,{lg:"2",md:"1",className:"d-flex align-items-center",children:[Object(j.jsxs)(I.a,{className:"mt-5",children:[Object(j.jsx)("h1",{children:"Find all your favorite Pokemon"}),Object(j.jsx)("p",{className:"mt-5 mb-5",children:"You can know the type of Pokemon, its strengths, disadvantages and abilities"}),Object(j.jsx)(B,{to:"/pokemon-react/pokedex",children:"See pokemons"})]}),Object(j.jsx)(I.a,{className:"d-none d-lg-block d-md-block",children:Object(j.jsx)("img",{src:D,alt:"Banner",width:"500px",height:"428px"})})]})})})})}var P=Object(k.c)(S||(S=Object(C.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  body {\n    background: ",";\n    font-size: 14px;\n    color: ",";\n    font-family: sans-serif;\n  }\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text})),T={title:"light",colors:{primary:"#D93E30",secundary:"#fffafa",background:"#f7f7f7",text:"#000000"}},X={title:"dark",colors:{primary:"#333333",secundary:"#292929",background:"#1c1c1c",text:"#fff"}};var _=function(e,t){var n=Object(r.useState)((function(){var n=localStorage.getItem(e);return n?JSON.parse(n):t})),c=Object(i.a)(n,2),o=c[0],a=c[1];return Object(r.useEffect)((function(){localStorage.setItem(e,JSON.stringify(o))}),[e,o]),[o,a]};function A(){var e=_("theme",T),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(j.jsx)(k.b,{theme:n,children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(P,{}),Object(j.jsx)(w,{toggleTheme:function(){r("light"===(null===n||void 0===n?void 0:n.title)?X:T)}}),Object(j.jsx)(l.c,{children:Object(j.jsx)(l.a,{component:M})}),Object(j.jsx)(h,{})]})})}n(51),n(52);a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.bd5037ba.chunk.js.map