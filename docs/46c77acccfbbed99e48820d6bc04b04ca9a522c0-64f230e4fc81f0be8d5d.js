(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"87v8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LARGER_DISPLAY_WIDTH="1600px",t.LARGE_DISPLAY_WIDTH="1280px",t.DEFAULT_WIDTH="980px",t.TABLET_WIDTH="768px",t.MOBILE_WIDTH="480px",t.LARGER_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1600px)",t.LARGE_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1280px)",t.DEFAULT_MEDIA_QUERY="@media only screen and (max-width:980px)",t.TABLET_MEDIA_QUERY="@media only screen and (max-width:768px)",t.MOBILE_MEDIA_QUERY="@media only screen and (max-width:480px)",t.MIN_LARGER_DISPLAY_MEDIA_QUERY="@media (min-width:1600px)",t.MIN_LARGE_DISPLAY_MEDIA_QUERY="@media (min-width:1280px)",t.MIN_DEFAULT_MEDIA_QUERY="@media (min-width:980px)",t.MIN_TABLET_MEDIA_QUERY="@media (min-width:768px)",t.MIN_MOBILE_MEDIA_QUERY="@media (min-width:480px)"},FM4x:function(e,t,r){var n=r("0711"),o=r("kXPx");e.exports=function(e,t){return o(e,n(t,1))}},FXmZ:function(e,t){function r(e){return!isNaN(parseFloat(e))&&isFinite(e)}e.exports=function(e,t,n){if(void 0===t&&(t=0),void 0===n&&(n=!1),"cool"===t?t=237:"slate"===t?t=122:"warm"===t&&(t=69),!r(t))throw new Error("Hue is not a number");if(!r(e))throw new Error("Lightness is not a number");e>100&&(e=100),e<0&&(e=0);var o=0;if(0!==t){o=19.92978+-.3651759*e+.001737214*Math.pow(e,2)}var i=0;return n?(i=e/100,e="100%,"):(i=(100-e)/100,e="0%,"),"hsla("+t+","+o+"%,"+e+i+")"}},I8XD:function(e,t){e.exports=function(e,t){t||(t=[0,""]),e=String(e);var r=parseFloat(e,10);return t[0]=r,t[1]=e.match(/[\d.\-\+]*\s*(.*)/)[1]||"",t}},IRcc:function(e,t,r){e.exports=r("c6h0")},TjRS:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"white",(function(){return Q})),r.d(n,"grayUltraLight",(function(){return q})),r.d(n,"grayExtraLight",(function(){return X})),r.d(n,"grayLight",(function(){return G})),r.d(n,"gray",(function(){return Z})),r.d(n,"grayDark",(function(){return J})),r.d(n,"grayExtraDark",(function(){return V})),r.d(n,"dark",(function(){return K})),r.d(n,"blueLight",(function(){return $})),r.d(n,"blue",(function(){return ee})),r.d(n,"skyBlue",(function(){return te})),r.d(n,"negative",(function(){return re}));var o=r("Fcif"),i=r("mK0O"),a=r("+I+c"),l=r("mwLw"),s=r.n(l),c=r("IRcc"),b=r.n(c),d=r("mXGw"),u=r("ZFoC"),f=r("/FXl"),m=r("Wbzz"),p=function(){try{var e=Object(m.c)("1635659820");return JSON.parse(e.doczDb.db)}catch(t){return console.error(t),console.error("Error when parsing docz database"),{}}};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"useDbQuery",filename:"node_modules/gatsby-theme-docz/src/hooks/useDbQuery.js"}});var y=r("aD51"),h=function(e){var t=e.children;return Object(y.c)(d.Fragment,null,t)},g=h;void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"Wrapper",filename:"node_modules/gatsby-theme-docz/src/wrapper.js"}});var O=r("zL5+"),j=r("PbS7"),_=r.n(j),v=r("lZ9J"),x=r.n(v),P=r("bkEr"),w=r.n(P),E=r("tYyd"),S=r.n(E),F=r("eEPp"),L=r.n(F);function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(r,!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I={fontFamily:"heading",lineHeight:"heading",fontWeight:"heading"},A={root:{fontFamily:"body",fontSize:2,fontWeight:"body",lineHeight:"body"},img:{maxWidth:"100%"},h1:L()({fontSize:5},I),h2:L()({fontSize:4},I),h3:L()({fontSize:3},I),h4:L()({fontSize:2},I),h5:L()({fontSize:1},I),h6:L()({fontSize:0},I),ul:{listStylePosition:"outside",listStyleImage:"none",ml:3},ol:{listStylePosition:"outside",listStyleImage:"none",ml:3},li:{mb:2,pl:0,ol:{my:2,ml:3},ul:{my:2,ml:3},p:{mb:2}},p:{},table:{borderCollapse:"collapse",width:"100%"},th:{textAlign:"left",borderBottom:"1px solid",px:2,py:1,":first-child":{pl:0},":last-child":{pr:0}},td:{textAlign:"left",borderBottom:"1px solid",px:2,py:1,mt:"-1px",":first-child":{pl:0},":last-child":{pr:0}},blockquote:{mx:3},hr:{border:0,borderBottom:"1px solid",mt:"-1px",mb:3},b:{fontWeight:"bold"},strong:{fontWeight:"bold"},code:{fontSize:"85%"},pre:{fontSize:"85%",padding:3}};[].concat(["h6","h5","h4","h3","h2","h1"],["ul","ol","p","pre","table","blockquote","img","hr"]).forEach((function(e){L()(A,z({},e,L()({padding:0,margin:0,marginBottom:3},A[e])))}));var M={baseFontSize:16,baseLineHeight:1.45,headerLineHeight:1.1,scaleRatio:2,googleFonts:[],headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],bodyFontFamily:["georgia","serif"],headerWeight:"bold",bodyWeight:"normal",boldWeight:"bold",includeNormalize:!0,blockMarginBottom:1},B=function(e){return parseFloat(e)},R=function(e,t){var r=B(e.rhythm(t.blockMarginBottom));return[0,1/4,.5,1,2,4,8].map((function(e){return e*r}))},T=["inherit","default","serif","sans-serif","monospace","fantasy","cursive","-apple-system","system-ui"],H=function(e){return T.includes(e)?e:"'".concat(e,"'")},W=function(e){return e.map(H).join(", ")},U=function(e,t){return{body:W(t.bodyFontFamily),heading:W(t.headerFontFamily)}},Y=function(e,t){var r=function(e){return function(t){return S()(t,e.scaleRatio)*e.baseFontSize}}(t);return[-.3,-.2,0,.4,.6,1].map(r)},C=function(e,t){return{body:t.baseLineHeight,heading:t.headerLineHeight}},N=function(e,t){return{body:t.bodyWeight,bold:t.boldWeight,heading:t.headerWeight}},Q="#FFFFFF";void 0!==Q&&Q&&Q===Object(Q)&&Object.isExtensible(Q)&&!Q.hasOwnProperty("__filemeta")&&Object.defineProperty(Q,"__filemeta",{configurable:!0,value:{name:"white",filename:"node_modules/gatsby-theme-docz/src/theme/colors.js"}});var q="#FCFBFA";void 0!==q&&q&&q===Object(q)&&Object.isExtensible(q)&&!q.hasOwnProperty("__filemeta")&&Object.defineProperty(q,"__filemeta",{configurable:!0,value:{name:"grayUltraLight",filename:"node_modules/gatsby-theme-docz/src/theme/colors.js"}});var X="#F5F6F7";void 0!==X&&X&&X===Object(X)&&Object.isExtensible(X)&&!X.hasOwnProperty("__filemeta")&&Object.defineProperty(X,"__filemeta",{configurable:!0,value:{name:"grayExtraLight",filename:"node_modules/gatsby-theme-docz/src/theme/colors.js"}});var G="#CED4DE";void 0!==G&&G&&G===Object(G)&&Object.isExtensible(G)&&!G.hasOwnProperty("__filemeta")&&Object.defineProperty(G,"__filemeta",{configurable:!0,value:{name:"grayLight",filename:"node_modules/gatsby-theme-docz/src/theme/colors.js"}});var Z="#67788a";void 0!==Z&&Z&&Z===Object(Z)&&Object.isExtensible(Z)&&!Z.hasOwnProperty("__filemeta")&&Object.defineProperty(Z,"__filemeta",{configurable:!0,value:{name:"gray",filename:"node_modules/gatsby-theme-docz/src/theme/colors.js"}});var J="#2D3747";void 0!==J&&J&&J===Object(J)&&Object.isExtensible(J)&&!J.hasOwnProperty("__filemeta")&&Object.defineProperty(J,"__filemeta",{configurable:!0,value:{name:"grayDark",filename:"node_modules/gatsby-theme-docz/src/theme/colors.js"}});var V="#1D2330";void 0!==V&&V&&V===Object(V)&&Object.isExtensible(V)&&!V.hasOwnProperty("__filemeta")&&Object.defineProperty(V,"__filemeta",{configurable:!0,value:{name:"grayExtraDark",filename:"node_modules/gatsby-theme-docz/src/theme/colors.js"}});var K="#13161F";void 0!==K&&K&&K===Object(K)&&Object.isExtensible(K)&&!K.hasOwnProperty("__filemeta")&&Object.defineProperty(K,"__filemeta",{configurable:!0,value:{name:"dark",filename:"node_modules/gatsby-theme-docz/src/theme/colors.js"}});var $="#e9f2fa";void 0!==$&&$&&$===Object($)&&Object.isExtensible($)&&!$.hasOwnProperty("__filemeta")&&Object.defineProperty($,"__filemeta",{configurable:!0,value:{name:"blueLight",filename:"node_modules/gatsby-theme-docz/src/theme/colors.js"}});var ee="#0B5FFF";void 0!==ee&&ee&&ee===Object(ee)&&Object.isExtensible(ee)&&!ee.hasOwnProperty("__filemeta")&&Object.defineProperty(ee,"__filemeta",{configurable:!0,value:{name:"blue",filename:"node_modules/gatsby-theme-docz/src/theme/colors.js"}});var te="#1FB6FF";void 0!==te&&te&&te===Object(te)&&Object.isExtensible(te)&&!te.hasOwnProperty("__filemeta")&&Object.defineProperty(te,"__filemeta",{configurable:!0,value:{name:"skyBlue",filename:"node_modules/gatsby-theme-docz/src/theme/colors.js"}});var re="#EB4D4B";void 0!==re&&re&&re===Object(re)&&Object.isExtensible(re)&&!re.hasOwnProperty("__filemeta")&&Object.defineProperty(re,"__filemeta",{configurable:!0,value:{name:"negative",filename:"node_modules/gatsby-theme-docz/src/theme/colors.js"}});var ne={plain:{fontFamily:"Inconsolata",color:"#d6deeb",backgroundColor:"#13161F"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]};"undefined"!=typeof styles&&styles&&styles===Object(styles)&&Object.isExtensible(styles)&&!styles.hasOwnProperty("__filemeta")&&Object.defineProperty(styles,"__filemeta",{configurable:!0,value:{name:"styles",filename:"node_modules/gatsby-theme-docz/src/theme/prism/dark.js"}}),"undefined"!=typeof plain&&plain&&plain===Object(plain)&&Object.isExtensible(plain)&&!plain.hasOwnProperty("__filemeta")&&Object.defineProperty(plain,"__filemeta",{configurable:!0,value:{name:"plain",filename:"node_modules/gatsby-theme-docz/src/theme/prism/dark.js"}});var oe={plain:{fontFamily:"Inconsolata",color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]};function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}"undefined"!=typeof styles&&styles&&styles===Object(styles)&&Object.isExtensible(styles)&&!styles.hasOwnProperty("__filemeta")&&Object.defineProperty(styles,"__filemeta",{configurable:!0,value:{name:"styles",filename:"node_modules/gatsby-theme-docz/src/theme/prism/light.js"}}),"undefined"!=typeof plain&&plain&&plain===Object(plain)&&Object.isExtensible(plain)&&!plain.hasOwnProperty("__filemeta")&&Object.defineProperty(plain,"__filemeta",{configurable:!0,value:{name:"plain",filename:"node_modules/gatsby-theme-docz/src/theme/prism/light.js"}});var le=ae(ae({},n),{},{primary:ee,text:J,muted:Z,link:ee,background:Q,border:G,sidebar:{bg:Q,navGroup:J,navLink:J,navLinkActive:ee,tocLink:Z,tocLinkActive:V},header:{bg:X,text:J,border:G,button:{bg:ee,color:Q}},props:{bg:q,text:J,highlight:ee,defaultValue:Z,descriptionText:J,descriptionBg:Q},playground:{bg:Q,border:G},blockquote:{bg:X,border:G,color:Z},prism:ae({},oe)});void 0!==le&&le&&le===Object(le)&&Object.isExtensible(le)&&!le.hasOwnProperty("__filemeta")&&Object.defineProperty(le,"__filemeta",{configurable:!0,value:{name:"light",filename:"node_modules/gatsby-theme-docz/src/theme/modes.js"}});var se=ae(ae({},n),{},{primary:te,text:X,muted:Z,link:te,background:V,border:J,sidebar:{bg:V,navGroup:Z,navLink:G,navLinkActive:te,tocLink:Z,tocLinkActive:G},header:{bg:K,text:G,border:J,button:{bg:te,color:Q}},props:{bg:K,text:Z,highlight:te,defaultValue:J,descriptionText:Z,descriptionBg:V},playground:{bg:K,border:J},blockquote:{bg:J,border:Z,color:Z},prism:ae({},ne)});void 0!==se&&se&&se===Object(se)&&Object.isExtensible(se)&&!se.hasOwnProperty("__filemeta")&&Object.defineProperty(se,"__filemeta",{configurable:!0,value:{name:"dark",filename:"node_modules/gatsby-theme-docz/src/theme/modes.js"}});var ce,be={dark:ne,light:oe};void 0!==oe&&oe&&oe===Object(oe)&&Object.isExtensible(oe)&&!oe.hasOwnProperty("__filemeta")&&Object.defineProperty(oe,"__filemeta",{configurable:!0,value:{name:"light",filename:"node_modules/gatsby-theme-docz/src/theme/prism/index.js"}}),void 0!==ne&&ne&&ne===Object(ne)&&Object.isExtensible(ne)&&!ne.hasOwnProperty("__filemeta")&&Object.defineProperty(ne,"__filemeta",{configurable:!0,value:{name:"dark",filename:"node_modules/gatsby-theme-docz/src/theme/prism/index.js"}});var de={Container:{p:4,maxWidth:1280},root:{fontSize:3,color:"text",bg:"background"},a:{color:"primary",textDecoration:"none","&:hover":{color:"secondary",textDecoration:"underline"}},h1:{fontSize:6},h2:{fontSize:5},h3:{fontSize:4},h4:{fontSize:3},h5:{fontSize:2},h6:{fontSize:1},li:{marginBottom:1},blockquote:{my:4,mx:0,py:3,px:4,bg:"blockquote.bg",borderLeft:function(e){return"5px solid "+e.colors.blockquote.border},color:"blockquote.color",fontStyle:"italic","> p":{m:0}},code:{fontFamily:"monospace"},inlineCode:{fontFamily:"monospace"},pre:{my:4,p:3,variant:"prism",textAlign:"left",fontFamily:"monospace",borderRadius:"radius"},table:(ce={width:"100%",my:4,borderCollapse:"separate",borderSpacing:0},ce[["th","td"]]={textAlign:"left",py:"4px",pr:"4px",pl:0,borderColor:"muted",borderBottomStyle:"solid"},ce),th:{verticalAlign:"bottom",borderBottomWidth:"2px"},td:{verticalAlign:"top",borderBottomWidth:"1px"},hr:{border:0,borderBottom:function(e){return"1px solid "+e.colors.border}}},ue=de;function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}void 0!==de&&de&&de===Object(de)&&Object.isExtensible(de)&&!de.hasOwnProperty("__filemeta")&&Object.defineProperty(de,"__filemeta",{configurable:!0,value:{name:"styles",filename:"node_modules/gatsby-theme-docz/src/theme/styles.js"}}),x.a.headerWeight=700;var pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=k({},M,{},e);t.baseFontSize=B(t.baseFontSize),t.rhythmUnit="px";var r=w()(t),n={};return r.options=t,n.space=R(r,t),n.fonts=U(0,t),n.fontSizes=Y(0,t),n.fontWeights=N(0,t),n.lineHeights=C(0,t),k({},n,{styles:A,typography:r})}(x.a),ye=_()(pe,{initialColorMode:"light",showLiveError:!0,showLivePreview:!0,showPlaygroundEditor:!0,showDarkModeSwitch:!0,showMarkdownEditButton:!0,useScopingInPlayground:!1,colors:me(me({},le),{},{modes:{dark:se}}),fonts:{monospace:"Inconsolata"},fontSizes:[12,14,16,20,24,32,48,64],fontWeights:{body:400,heading:700,bold:700},lineHeights:{body:1.5,heading:1.125},letterSpacings:{body:"normal",caps:"0.2em"},space:[0,4,8,16,32,48,64,80,100],radii:{square:0,radius:4,rounded:10},styles:ue,prism:be}),he=ye;void 0!==ye&&ye&&ye===Object(ye)&&Object.isExtensible(ye)&&!ye.hasOwnProperty("__filemeta")&&Object.defineProperty(ye,"__filemeta",{configurable:!0,value:{name:"__DOCZ_DUMMY_EXPORT_DEFAULT",filename:"node_modules/gatsby-theme-docz/src/theme/index.js"}});var ge=r("Y825"),Oe=Object(u.e)(he)((function(e){var t=e.children,r=Object(u.h)();return Object(O.h)(O.g,{theme:r.themeConfig},Object(O.h)(u.a,{components:ge.a},Object(O.h)(O.f.root,null,t)))})),je=Oe;void 0!==Oe&&Oe&&Oe===Object(Oe)&&Object.isExtensible(Oe)&&!Oe.hasOwnProperty("__filemeta")&&Object.defineProperty(Oe,"__filemeta",{configurable:!0,value:{name:"__DOCZ_DUMMY_EXPORT_DEFAULT",filename:"node_modules/gatsby-theme-docz/src/index.js"}});var _e=r("LcPu"),ve=function(e){var t=e.description,r=e.lang,n=e.meta,o=e.keywords,i=e.title,a=p(),l=i||a.config.title,s=t||a.config.description;return Object(y.c)(_e.Helmet,{title:l,titleTemplate:"%s | "+a.config.title,htmlAttributes:{lang:r},meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})};ve.defaultProps={lang:"en",meta:[],keywords:[]};var xe=ve;function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}void 0!==ve&&ve&&ve===Object(ve)&&Object.isExtensible(ve)&&!ve.hasOwnProperty("__filemeta")&&Object.defineProperty(ve,"__filemeta",{configurable:!0,value:{name:"SEO",filename:"node_modules/gatsby-theme-docz/src/base/Seo.js"}});var Ee=function(e){var t=e.children,r=e.entry,n=e.isTransclusion,o=Object(a.a)(e,["children","entry","isTransclusion"]),i=Object(u.g)(),l=i.notFound,s=i.layout,c=we(we({},o),{},{doc:r});return r||n?n?t:Object(y.c)(f.a,{components:i},Object(y.c)(g,null,Object(y.c)(s,c,t))):Object(y.c)(l,null)},Se=function(e){var t=e.children,r=Object(a.a)(e,["children"]),n=r.pageContext,i=p(),l=function(e,t){var r=t&&t.frontmatter&&"/"===t.frontmatter.route,n=b()("value.route","/");if(t&&!t.entry&&r)return e.entries.find(n);var o=s()("entry.filepath",t);return e.entries.find(b()("value.filepath",o))}(i,n),c=function(e,t){var r=e.entries,n=s()("_frontmatter.__filemeta.filename",t);return!t.pageContext&&r.includes(r.find(b()("value.filepath",n)))}(i,r);return Object(y.c)(d.Fragment,null,l&&Object(y.c)(xe,{title:l.value.name}),Object(y.c)(je,{db:i,currentEntry:l},Object(y.c)(Ee,Object(o.a)({},r,{entry:l,isTransclusion:c}),t)))};t.a=Se;void 0!==Se&&Se&&Se===Object(Se)&&Object.isExtensible(Se)&&!Se.hasOwnProperty("__filemeta")&&Object.defineProperty(Se,"__filemeta",{configurable:!0,value:{name:"Layout",filename:"node_modules/gatsby-theme-docz/src/base/Layout.js"}})},bkEr:function(e,t,r){var n=r("bn3L"),o=r("I8XD"),i=function(e){return o(e)[1]},a=function(e){return o(e)[0]},l={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},s=function(e,t){var r,o=n(t.baseFontSize),i=a(o(e,"px")),l=a(t.baseLineHeightInPx),s=a(o(t.minLinePadding,"px"));return(r=t.roundToNearestHalfLine?Math.ceil(2*i/l)/2:Math.ceil(i/l))*l-i<2*s&&(r+=t.roundToNearestHalfLine?.5:1),r},c=function(e){var t=n(e.baseFontSize);return function(r,n,o){null==r&&(r=1),null==n&&(n=e.baseFontSize),null==o&&(o=0);var l=r*a(e.baseLineHeightInPx)-o+"px",s=t(l,e.rhythmUnit,n);return"px"===i(s)&&(s=Math.floor(a(s))+i(s)),parseFloat(a(s).toFixed(5))+i(s)}};e.exports=function(e){var t=JSON.parse(JSON.stringify(l)),r=Object.assign({},t,e),o=n(r.baseFontSize);return i(r.baseLineHeight)?(a(o(r.baseFontSize,"px")),r.baseLineHeightInPx=o(r.baseLineHeight,"px")):r.baseLineHeightInPx=a(r.baseFontSize)*r.baseLineHeight+"px",{rhythm:c(r),establishBaseline:function(){return function(e){return n(e.baseFontSize),{fontSize:a(e.baseFontSize)/16*100+"%",lineHeight:e.baseLineHeight.toString()}}(r)},linesForFontSize:function(e){return s(e,r)},adjustFontSizeTo:function(e,t,o){return null==t&&(t="auto"),function(e,t,r,o){null==r&&(r=o.baseFontSize),"%"===i(e)&&(e=a(o.baseFontSize)*(a(e)/100)+"px");var l=n(o.baseFontSize);e=l(e,"px",r=l(r,"px"));var b=c(o);return"auto"===t&&(t=s(e,o)),{fontSize:l(e,o.rhythmUnit,r),lineHeight:b(t,r)}}(e,t,o,r)}}}},bn3L:function(e,t,r){var n=r("I8XD"),o=function(e){return n(e)[0]};e.exports=function(e){return null==e&&(e=e),function(t,r,i,a){null==i&&(i=e),null==a&&(a=i);var l=function(e){return n(e)[1]}(t);if(l===r)return t;var s=o(t);if("px"!==l)if("em"===l)s=o(t)*o(i);else if("rem"===l)s=o(t)*o(e);else{if("ex"!==l)return t;s=o(t)*o(i)*2}var c=s;if("px"!==r)if("em"===r)c=s/o(a);else if("rem"===r)c=s/o(e);else{if("ex"!==r)return t;c=s/o(a)/2}return parseFloat(c.toFixed(5))+r}}},c6h0:function(e,t,r){var n=r("+dZb")("matchesProperty",r("FM4x"));n.placeholder=r("IOY3"),e.exports=n},lZ9J:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=l(r("FXmZ")),i=r("87v8"),a=l(r("bkEr"));function l(e){return e&&e.__esModule?e:{default:e}}var s={title:"Moraga",baseFontSize:"18px",baseLineHeight:1.56,googleFonts:[{name:"Source Sans Pro",styles:["200","400","400i","700"]}],scaleRatio:2.5,headerFontFamily:["Source Sans Pro","sans-serif"],bodyFontFamily:["Source Sans Pro","sans-serif"],headerColor:"hsla(0,0%,0%,0.85)",bodyColor:"hsla(0,0%,0%,0.7)",headerWeight:"200",bodyWeight:400,boldWeight:700,overrideStyles:function(e,t){var r,l,s,c=e.scale,b=e.rhythm,d=(0,a.default)({baseFontSize:"16px",baseLineHeight:"24.88px"});return r={"h1 a,h2 a,h3 a,h4 a,h5 a,h6 a":{fontWeight:t.headerWeight},a:{fontWeight:400,color:"#419eda",textDecoration:"none"},"a:hover":{color:"#2a6496",textDecoration:"underline"},blockquote:n({},c(.2),{color:(0,o.default)(40),paddingLeft:b(3/4),marginLeft:0,borderLeft:b(1/4)+" solid "+(0,o.default)(87)})},l=i.TABLET_MEDIA_QUERY,s={html:n({},d.establishBaseline()),blockquote:{marginLeft:b(-3/4),marginRight:0,paddingLeft:b(.5)},table:n({},c(-.2))},l in r?Object.defineProperty(r,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[l]=s,r}};t.default=s},rT4v:function(e,t){var r=Object.prototype.toString;e.exports=function(e){return"number"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Number]"==r.call(e)}},tYyd:function(e,t,r){(function(){var t,n;t=r("rT4v"),n={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"augmented fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4},e.exports=function(e,r){var o;return null==e&&(e=0),null==r&&(r="golden"),o=t(r)?r:null!=n[r]?n[r]:n.golden,Math.pow(o,e)}}).call(this)}}]);
//# sourceMappingURL=46c77acccfbbed99e48820d6bc04b04ca9a522c0-64f230e4fc81f0be8d5d.js.map