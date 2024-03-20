(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[379,918],{9361:e=>{e.exports={content:'// Set the VERTEX_PROJECT to your GCP project with Vertex AI APIs enabled.\n// Set VERTEX_LOCATION to a GCP location (region); if you\'re not sure about\n// the location, set us-central1\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\t"log"\n\t"os"\n\n\t"github.com/tmc/langchaingo/llms/googleai/vertex"\n)\n\nfunc main() {\n\tctx := context.Background()\n\tproject := os.Getenv("VERTEX_PROJECT")\n\tlocation := os.Getenv("VERTEX_LOCATION")\n\tllm, err := vertex.New(ctx, vertex.WithCloudProject(project), vertex.WithCloudLocation(location))\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\n\tembeddings, err := llm.CreateEmbedding(ctx, []string{"I am a human"})\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\tfmt.Println(embeddings)\n}\n',imports:[]}},4813:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(7294),o=n(6010),i=n(3605),c=n(1984),a=n(7785),l=n(2210);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d({href:e,children:t}){return r.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",s.cardContainer)},t)}function m({href:e,icon:t,title:n,description:i}){return r.createElement(d,{href:e},r.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:n},t," ",n),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:i},i))}function u({item:e}){const t=(0,i.Wl)(e);return t?r.createElement(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function p({item:e}){var t;const n=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var o;const c=(0,i.xz)(null!==(o=e.docId)&&void 0!==o?o:void 0);var l;return r.createElement(m,{href:e.href,icon:n,title:e.label,description:null!==(l=e.description)&&void 0!==l?l:null===(t=c)||void 0===t?void 0:t.description})}function g({item:e}){switch(e.type){case"link":return r.createElement(p,{item:e});case"category":return r.createElement(u,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function b({className:e}){const t=(0,i.jA)();return r.createElement(f,{items:t.items,className:e})}function f(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const c=(0,i.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},2351:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(7294),o=n(9179);function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e){var{children:t}=e,n=i(e,["children"]);return"string"==typeof t?r.createElement(o.Z,n,t):(console.log(t),r.createElement(r.Fragment,null,r.createElement(o.Z,n,t.content)))}},7061:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>y,frontMatter:()=>m,metadata:()=>p,toc:()=>b});n(7294);var r=n(3905),o=n(4813),i=n(2351),c=n(9361),a=n.n(c);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m={sidebar_position:3,hide_table_of_contents:!0,sidebar_label:"Embeddings"},u="Getting Started: Embeddings",p={unversionedId:"modules/model_io/models/embeddings/index",id:"modules/model_io/models/embeddings/index",title:"Getting Started: Embeddings",description:"Conceptual Guide",source:"@site/docs/modules/model_io/models/embeddings/index.mdx",sourceDirName:"modules/model_io/models/embeddings",slug:"/modules/model_io/models/embeddings/",permalink:"/langchaingo/docs/modules/model_io/models/embeddings/",draft:!1,editUrl:"https://github.com/tmc/langchaingo/edit/main/docs/docs/modules/model_io/models/embeddings/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,hide_table_of_contents:!0,sidebar_label:"Embeddings"},sidebar:"sidebar",previous:{title:"Integrations",permalink:"/langchaingo/docs/modules/model_io/models/chat/integrations"},next:{title:"Integrations",permalink:"/langchaingo/docs/modules/model_io/models/embeddings/integrations"}},g={},b=[{value:"Example",id:"example",level:2},{value:"Dig deeper",id:"dig-deeper",level:2}],f={toc:b},h="wrapper";function y(e){var{components:t}=e,n=d(e,["components"]);return(0,r.kt)(h,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-embeddings"},"Getting Started: Embeddings"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://python.langchain.com/docs/modules/data_connection/text_embedding"},"Conceptual Guide"))),(0,r.kt)("p",null,"Embeddings can be used to create a numerical representation of textual data. This numerical representation is useful because it can be used to find similar documents."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(i.Z,{language:"go",mdxType:"CodeBlock"},a()),(0,r.kt)("h2",{id:"dig-deeper"},"Dig deeper"),(0,r.kt)(o.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);