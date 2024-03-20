(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20,918],{4303:e=>{e.exports={content:'// Set the VERTEX_PROJECT env var to your GCP project with Vertex AI APIs\n// enabled. Set VERTEX_LOCATION to a GCP location (region); if you\'re not sure\n// about the location, set us-central1\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\t"log"\n\t"os"\n\n\t"github.com/tmc/langchaingo/llms"\n\t"github.com/tmc/langchaingo/llms/googleai/vertex"\n)\n\nfunc main() {\n\tctx := context.Background()\n\tproject := os.Getenv("VERTEX_PROJECT")\n\tlocation := os.Getenv("VERTEX_LOCATION")\n\tllm, err := vertex.New(ctx, vertex.WithCloudProject(project), vertex.WithCloudLocation(location))\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\n\tprompt := "Who was the second person to walk on the moon?"\n\tanswer, err := llms.GenerateFromSinglePrompt(ctx, llm, prompt)\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\n\tfmt.Println(answer)\n}\n',imports:[]}},2351:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(7294),r=n(9179);function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function i(e){var{children:t}=e,n=l(e,["children"]);return"string"==typeof t?o.createElement(r.Z,n,t):(console.log(t),o.createElement(o.Fragment,null,o.createElement(r.Z,n,t.content)))}},5342:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>O,frontMatter:()=>m,metadata:()=>d,toc:()=>g});n(7294);var o=n(3905),r=n(2351),l=n(4303),i=n.n(l);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const m={sidebar_label:"Vertex AI"},u="Vertex AI",d={unversionedId:"modules/model_io/models/llms/Integrations/vertexai",id:"modules/model_io/models/llms/Integrations/vertexai",title:"Vertex AI",description:"To use the Vertex AI LLM you need to set the google project ID.",source:"@site/docs/modules/model_io/models/llms/Integrations/vertexai.mdx",sourceDirName:"modules/model_io/models/llms/Integrations",slug:"/modules/model_io/models/llms/Integrations/vertexai",permalink:"/langchaingo/docs/modules/model_io/models/llms/Integrations/vertexai",draft:!1,editUrl:"https://github.com/tmc/langchaingo/edit/main/docs/docs/modules/model_io/models/llms/Integrations/vertexai.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Vertex AI"},sidebar:"sidebar",previous:{title:"OpenAI",permalink:"/langchaingo/docs/modules/model_io/models/llms/Integrations/openai"},next:{title:"Chat Models",permalink:"/langchaingo/docs/modules/model_io/models/chat/"}},p={},g=[],b={toc:g},f="wrapper";function O(e){var{components:t}=e,n=c(e,["components"]);return(0,o.kt)(f,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vertex-ai"},"Vertex AI"),(0,o.kt)("p",null,"To use the Vertex AI LLM you need to set the google project ID.\nYou can do this by setting the GOOGLE_CLOUD_PROJECT environment variable or giving it as a variaic option when creating the wrapper."),(0,o.kt)(r.Z,{language:"go",mdxType:"CodeBlock"},i()))}O.isMDXComponent=!0}}]);