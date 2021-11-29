(self.webpackChunkdocs_datalbry_io=self.webpackChunkdocs_datalbry_io||[]).push([[771],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7344:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={},s={unversionedId:"Connectors/GitHub/OVERVIEW",id:"Connectors/GitHub/OVERVIEW",isDocsHomePage:!1,title:"Overview",description:"This document is giving you an overview of the DataLbry's GitHub Connector for version 0.0.1.",source:"@site/docs/Connectors/GitHub/OVERVIEW.mdx",sourceDirName:"Connectors/GitHub",slug:"/Connectors/GitHub/OVERVIEW",permalink:"/Connectors/GitHub/OVERVIEW",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/"},next:{title:"Overview",permalink:"/Connectors/JetBrains Space/OVERVIEW"}},c=[{value:"What is GitHub?",id:"what-is-github",children:[]},{value:"Obtaining Credentials",id:"obtaining-credentials",children:[]},{value:"Targeted Documents",id:"targeted-documents",children:[]}],u={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document is giving you an overview of the DataLbry's GitHub Connector for version ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.1"),"."),(0,a.kt)("h2",{id:"what-is-github"},"What is GitHub?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the\ndistributed version control and source code management (SCM) functionality of Git, plus its own features. It provides\naccess control and several collaboration features such as bug tracking, feature requests, task management, continuous\nintegration and wikis for every project."),(0,a.kt)("p",{parentName:"blockquote"},"-- ",(0,a.kt)("cite",null," ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/GitHub"},"https://en.wikipedia.org/wiki/GitHub")," "))),(0,a.kt)("h2",{id:"obtaining-credentials"},"Obtaining Credentials"),(0,a.kt)("p",null,"To be able to use this connector you need the to provide your ",(0,a.kt)("strong",{parentName:"p"},"personal access token"),". To do so, you first\nneed to log into your GitHub account at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/"},"https://github.com"),". Then you have to\nfollow ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"GitHub's official documentation on how to obtain your personal access token"),"\n."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you set your personal access key valid for only 7 days, then the connector will be able to load the data from GitHub\nfor only 7 days too."))),(0,a.kt)("p",null,"Lastly you have to give your personal access token all read/view permissions. Such that the connector can actually read\nthe data."),(0,a.kt)("h2",{id:"targeted-documents"},"Targeted Documents"),(0,a.kt)("p",null,"Currently, the following documents are targeted by the connector:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Logged in User"),(0,a.kt)("li",{parentName:"ul"},"Organizations"),(0,a.kt)("li",{parentName:"ul"},"Repositories of logged-in user and organizations"),(0,a.kt)("li",{parentName:"ul"},"Issues of repositories"),(0,a.kt)("li",{parentName:"ul"},"Releases of repositories")))}l.isMDXComponent=!0}}]);