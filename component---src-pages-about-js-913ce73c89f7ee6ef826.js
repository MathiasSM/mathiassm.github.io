(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return c});var a=n(0),r=n.n(a),i=n(224),o=n(219);t.default=function(e){var t=e.data.indexContent,n=t.frontmatter,a=n.title,c=n.shareTitle,l=n.description,u=n.shareDescription,d=t.html;return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:a,description:l,og:{title:c||a,type:"blog",description:u||l}}),r.a.createElement("main",null,r.a.createElement("h1",null,a),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:d}})))};var c="1236916378"},216:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=new(n(232))({baseFontSize:16,baseLineHeight:1.5,scaleRatio:2,googleFonts:[{name:"Roboto Slab",styles:["700"]},{name:"Roboto",styles:["400","400i","700","700i"]}],headerFontFamily:["Roboto Slab","Helvetica","sans-serif"],bodyFontFamily:["Roboto","Helvetica","sans-serif"],headerGray:20,headerGrayHue:"warm",bodyGray:20,bodyGrayHue:"cool",headerWeight:700,bodyWeight:400,boldWeight:700}),r=a.rhythm;a.scale},217:function(e,t,n){"use strict";n(30),n(31),n(17),n(51);var a=n(215),r={bigdesktop:1824,desktop:992,tablet:768,phone:376},i=Object.keys(r).reduce(function(e,t){return e[t]=function(){return Object(a.b)(["@media (min-width:","rem){",";}"],r[t]/16,a.b.apply(void 0,arguments))},e},{});t.a=i;Object.keys(r).reduce(function(e,t){return e[t]=function(){return Object(a.b)(["@media (max-width:","rem){",";}"],r[t]/16,a.b.apply(void 0,arguments))},e},{})},218:function(e,t,n){"use strict";n(16);var a=n(223),r=n(95),i=n(0),o=n.n(i),c=function(e){return e};t.a=function(e,t){void 0===e&&(e=c);return function(n){var i=Object.assign({},n);return o.a.createElement(r.StaticQuery,{query:"454252036",render:function(n){var a=e(n.site.siteMetadata.color);return o.a.createElement(t,Object.assign({color:a},i))},data:a})}}},219:function(e,t,n){"use strict";n(30),n(31),n(17),n(51),n(16);var a=n(0),r=n.n(a),i=n(18),o=n(231),c=n.n(o);var l=function(e){var t=e.lang,n=void 0===t?"en":t,a=e.title,i=e.description,o=e.og,l=e.location,u=l.origin,d=l.pathname,s=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["lang","title","description","og","location"]),f=Object.assign({},o);f.title=f.title||a,f.description=f.description||i;var m=[],g=function(e,t){var n=r.a.createElement("meta",{key:e,property:"og:"+e,content:t});m.push(n)};return Object.keys(f).forEach(function(e){var t=f[e];if(Array.isArray(t))for(var n=0;n<t.length;n+=1)g(e,t[n]);else g(e,t)}),r.a.createElement(c.a,s,n&&r.a.createElement("html",{lang:n}),a&&r.a.createElement("title",null,a),m,r.a.createElement("meta",{property:"og:url",content:""+u+d}))};l.defaultProps={og:{}};t.a=function(e){return r.a.createElement(i.Location,null,function(t){var n=t.location;return r.a.createElement(l,Object.assign({location:n},e))})}},220:function(e){e.exports={data:{site:{siteMetadata:{entryPoint:"/about"}}}}},221:function(e){e.exports={data:{site:{siteMetadata:{title:"MathiasSM",subtitle:"Computer Science Student",description:"Personal site, portfolio and blog",owner:"Mathias San Miguel",since:2013,now:2019,sections:[{title:"Blog",path:"/blog"},{title:"Showcase",path:"/showcase"},{title:"Contact",path:"/contact"}]}},social:{profiles:[{node:{profile:{title:"Twitter",href:"https://twitter.com/mathiassm",username:"@mathiassm",description:"Wanna chat?"}}},{node:{profile:{title:"Github",href:"https://Github.com/mathiassm",username:"MathiasSM",description:"Wanna code?"}}},{node:{profile:{title:"LinkedIn",href:"https://linkedin.com/in/mathiassm",username:"mathiassm",description:"Wanna hire?"}}}]}}}},222:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj4KICAgIDxnIGZpbGw9IiNmZmYiPgogICAgICAgIDxyZWN0IHdpZHRoPSI1MCIgIGhlaWdodD0iMjAwIiB4PSIwIiAgIHk9IjAiICAgcng9IjEwIiByeT0iOCIgLz4KICAgICAgICA8cmVjdCB3aWR0aD0iNTAiICBoZWlnaHQ9IjgwIiAgeD0iMTUwIiB5PSIxMjAiIHJ4PSIxMCIgcnk9IjgiIC8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjUwIiAgaGVpZ2h0PSI0MCIgIHg9IjE1MCIgeT0iNjAiICByeD0iMTAiIHJ5PSI4IiAvPgogICAgICAgIDxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iNDAiICB4PSIwIiAgIHk9IjAiICAgcng9IjEwIiByeT0iOCIgLz4KICAgICAgICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQwIiAgeD0iMCIgICB5PSIxMjAiIHJ4PSIxMCIgcnk9IjgiIC8+CiAgICA8L2c+Cjwvc3ZnPgo="},223:function(e){e.exports={data:{site:{siteMetadata:{color:{primary:{black:"#0e3964",dark:"#0053ad",pure:"#207fdf",light:"#69aeff",white:"#e5ebf9"},secondary:{black:"#724c00",dark:"#c67b00",pure:"#ffaa00",light:"#ffdc4a",white:"#fff0e4"},accent:{black:"#64390e",dark:"#a75300",pure:"#df8020",light:"#ffb051",white:"#f9ebe5"}}}}}}},224:function(e,t,n){"use strict";n(16);var a=n(221),r=n(95),i=n(0),o=n.n(i),c=(n(136),n(215)),l=n(217),u=n(219),d=n(220),s=n(222),f=n.n(s),m=n(218),g=n(216);function p(){var e=v(["\n    flex: 2 1 0;\n    align-items: flex-end;\n  "]);return p=function(){return e},e}function h(){var e=v(["\n    height: auto;\n    margin: 0 auto;\n    min-width: unset;\n  "]);return h=function(){return e},e}function b(){var e=v(["\n    margin-left: 0;\n    text-align:center;\n  "]);return b=function(){return e},e}function w(){var e=v(["\n    flex-direction: column;\n    align-items: stretch;\n    > * {flex: 0 1 auto;}\n  "]);return w=function(){return e},e}function v(e,t){return t||(t=e.slice(0)),e.raw=t,e}var y=Object(m.a)(function(e){return e.primary.pure},c.c.div.withConfig({displayName:"logo__Wrapper",componentId:"sc-1w8ztgp-0"})(["background:",";&,a{color:white;}padding:"," 1rem;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;align-content:center;",";"],function(e){return e.color},Object(g.a)(1),l.a.desktop(w()))),I=Object(c.c)(r.Link).withConfig({displayName:"logo__HomeLink",componentId:"sc-1w8ztgp-1"})(["font-weight:bold;font-size:",";grid-area:title;text-align:left;margin-left:1rem;",";"],Object(g.a)(1),l.a.desktop(b())),j=c.c.div.withConfig({displayName:"logo__Subtitle",componentId:"sc-1w8ztgp-2"})(["font-weight:bold;text-align:center;width:100%;grid-area:subtitle;"]),C=c.c.img.withConfig({displayName:"logo__LogoImg",componentId:"sc-1w8ztgp-3"})(["height:100%;max-width:40%;max-height:100%;min-width:",";padding:0;margin:0;",";"],Object(g.a)(3),l.a.desktop(h())),k=Object(c.c)(r.Link).withConfig({displayName:"logo__LogoLink",componentId:"sc-1w8ztgp-4"})(["grid-area:logo;display:flex;flex-direction:row;",";"],l.a.desktop(p())),E=function(e){var t=e.title;return o.a.createElement(r.StaticQuery,{query:"3114293043",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{to:e.site.siteMetadata.entryPoint,title:"Go home"},o.a.createElement(C,{src:f.a,alt:""})),o.a.createElement(I,{to:e.site.siteMetadata.entryPoint},t))},data:d})},A=function(e){var t=e.title,n=e.subtitle,a=e.className;return o.a.createElement(y,{className:a},o.a.createElement(E,{title:t}),o.a.createElement(j,null,n))};function O(){var e=_(["\n      padding: ",";\n    "]);return O=function(){return e},e}function x(){var e=_(["\n      padding: "," 1em;\n      flex-direction: column;\n    "]);return x=function(){return e},e}function _(e,t){return t||(t=e.slice(0)),e.raw=t,e}var M=Object(m.a)(function(e){return e.primary.pure},c.c.nav.withConfig({displayName:"menu__MenuNav",componentId:"sc-1pbjgzz-0"})(["background:",";display:flex;align-items:center;justify-content:center;margin:0;width:100%;text-align:center;font-weight:bold;a{color:white;}",";"],function(e){return e.color},l.a.tablet(x(),Object(g.a)(1)))),N=Object(m.a)(function(e){return{accent:e.accent.pure,primary:e.primary.pure}},Object(c.c)(function(e){var t=Object.assign({},e);return o.a.createElement(r.Link,t)}).attrs({activeClassName:"nav-active"}).withConfig({displayName:"menu__MenuLink",componentId:"sc-1pbjgzz-1"})(["font-size:1.2em;margin:0;width:100%;padding:",";&:hover{background:white;color:",";}&.","{background:white;color:",";}&.",":hover{color:",";}",";"],Object(g.a)(.5),function(e){return e.color.primary},"nav-active",function(e){return e.color.accent},"nav-active",function(e){return e.color.accent},l.a.desktop(O(),Object(g.a)(.5)))),S=function(e){var t=e.sections,n=e.className;return o.a.createElement(M,{className:n},t.map(function(e){var t=e.path,n=e.title;return o.a.createElement(N,{key:n,to:t,partiallyActive:!0},n)}))},H=c.c.footer.withConfig({displayName:"footer__Footer",componentId:"sc-116yf0p-0"})(["margin-top:",";"],Object(g.a)(2)),P=function(e){var t=e.owner,n=e.since,a=e.now;return o.a.createElement(H,null,t+" © "+n+"-"+a)};function L(){var e=D([""]);return L=function(){return e},e}function G(){var e=D(["\n    padding: "," 5rem;\n  "]);return G=function(){return e},e}function z(){var e=D(["\n    padding: "," 3rem;\n  "]);return z=function(){return e},e}function D(e,t){return t||(t=e.slice(0)),e.raw=t,e}var W=c.c.div.withConfig({displayName:"content__ContentDiv",componentId:"un7mf3-0"})(["padding:",";overflow-y:auto;"," "," ",""],Object(g.a)(1),l.a.tablet(z(),Object(g.a)(1)),l.a.desktop(G(),Object(g.a)(1)),l.a.bigdesktop(L())),B=function(e){var t=e.owner,n=e.since,a=e.now,r=e.children,i=e.className;return o.a.createElement(W,{id:"content",className:i},r,o.a.createElement(P,{owner:t,since:n,now:a}))},R=n(226),T=n(228),Z=n(229),q=n(230);function F(){var e=K([""]);return F=function(){return e},e}function Q(){var e=K([""]);return Q=function(){return e},e}function J(){var e=K(["\n      a {color: white}\n      background: ",";\n    "]);return J=function(){return e},e}function K(e,t){return t||(t=e.slice(0)),e.raw=t,e}var V={Twitter:R.a,Github:T.a,Medium:Z.a,LinkedIn:q.a},U=Object(m.a)(function(e){return e.primary.pure},c.c.ul.withConfig({displayName:"social__SocialList",componentId:"sc-1wcqm09-0"})(["margin:0;padding:1rem;display:flex;justify-content:space-evenly;align-items:flex-end;a{color:inherit}list-style:none;"," "," ",""],l.a.tablet(J(),function(e){return e.color}),l.a.desktop(Q()),l.a.bigdesktop(F()))),Y=function(e){var t=e.profiles,n=e.className;return o.a.createElement(U,{className:n},t.map(function(e){var t=e.node.profile,n=t.title,a=t.href,r=t.username,i=t.description,l=Object(c.c)(V[n]).withConfig({displayName:"social__SocialIcon",componentId:"sc-1wcqm09-1"})(["padding:"," 0 0;"],Object(g.a)(.5));return o.a.createElement("li",{key:n},o.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",title:i},o.a.createElement(l,{height:"50px",title:r})))}))},X=n(233),$=n.n(X);function ee(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    // Body\n    body, html {\n      height: 100%;\n      margin: 0;\n      overflow: auto;\n    }\n    #___gatsby {\n      height: 100%;\n      & > * {\n        height: 100%;\n      }\n    }\n\n    // Links\n    a {\n      text-decoration: none;\n\n      color: ",";\n      p & {\n        &:visited {\n          color: ",";\n        }\n\n        // Add external-link icon\n        &[href^=http]::after {\n          height:auto;\n          width:1em;\n          display:inline-block;\n          margin-left: .5em;\n          content: url(",');\n          opacity: .1;\n        }\n        &:hover[href^=http]::after,\n        &:active[href^=http]::after {\n          opacity: .8;\n        }\n      }\n    }\n\n    // Print\n    @media print   {\n      a::after {\n        content: " [" attr(href) "] ";\n      }\n    }\n\n    // Table rows\n    tbody tr{\n      &:nth-child(odd) {\n        background-color: ',";\n      }\n      &:nth-child(even){\n        background-color: ","\n      }\n    }\n\n    blockquote.quoted {\n      position: relative;\n      &::before {\n        position: absolute;\n        left: -",";\n        line-height: ",";\n        font-size: ",";\n        content: open-quote;\n\n      }\n    }\n\n    // Preformatted/code\n    pre {\n      overflow-x: auto;\n      max-width: 100%;\n    }\n"]);return ee=function(){return e},e}var te=Object(m.a)(function(e){return{normal:e.accent.pure,visited:e.accent.dark,oddRow:e.secondary.white,evenRow:"white"}},Object(c.a)(ee(),function(e){return e.color.normal},function(e){return e.color.visited},$.a,function(e){return e.color.oddRow},function(e){return e.color.evenRow},Object(g.a)(1),Object(g.a)(2),Object(g.a)(2)));function ne(){var e=ie(["\n    max-width: 1920px;\n    justify-content: center;\n    grid-template-columns: 1fr 3fr;"]);return ne=function(){return e},e}function ae(){var e=ie([" "]);return ae=function(){return e},e}function re(){var e=ie(['\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 3fr 2fr 1fr;\n    grid-template-areas: "header content"\n                         "menu   content"\n                         "social content";']);return re=function(){return e},e}function ie(e,t){return t||(t=e.slice(0)),e.raw=t,e}var oe=Object(c.c)(A).withConfig({displayName:"layout__GriddedLogo",componentId:"wvh3p8-0"})(["grid-area:header;"]),ce=Object(c.c)(S).withConfig({displayName:"layout__GriddedMenu",componentId:"wvh3p8-1"})(["grid-area:menu;"]),le=Object(c.c)(B).withConfig({displayName:"layout__GriddedContent",componentId:"wvh3p8-2"})(["overflow-y:scroll;-webkit-overflow-scrolling:touch;scroll-behavior:smooth;grid-area:content;"]),ue=Object(c.c)(Y).withConfig({displayName:"layout__GriddedSocial",componentId:"wvh3p8-3"})(["grid-area:social;"]),de=c.c.div.withConfig({displayName:"layout__Grid",componentId:"wvh3p8-4"})(["display:block;height:100%;"," "," ",""],l.a.tablet(re()),l.a.desktop(ae()),l.a.bigdesktop(ne())),se=function(e){var t=e.children,n=e.data,a=n.site.siteMetadata,r=n.social;return o.a.createElement(de,null,o.a.createElement(u.a,Object.assign({defaultTitle:a.title+" - "+a.description,titleTemplate:"%s - "+a.title,og:{type:"website",site_name:a.title}},a)),o.a.createElement(oe,a),o.a.createElement(ce,a),o.a.createElement(le,a,t),o.a.createElement(ue,r))};t.a=function(e){var t=e.children;return o.a.createElement(r.StaticQuery,{query:"2564787907",render:function(e){return o.a.createElement(se,{data:e},o.a.createElement(te,null),t)},data:a})}}}]);
//# sourceMappingURL=component---src-pages-about-js-913ce73c89f7ee6ef826.js.map