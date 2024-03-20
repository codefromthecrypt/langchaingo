(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47,918],{2373:t=>{t.exports={content:'package main\n\nimport (\n\t"fmt"\n\t"log"\n\n\t"github.com/tmc/langchaingo/prompts"\n)\n\nfunc main() {\n\tprompt := prompts.PromptTemplate{\n\t\tTemplate:       "{{.foo}}{{.bar}}",\n\t\tInputVariables: []string{"bar"},\n\t\tPartialVariables: map[string]any{\n\t\t\t"foo": "foo",\n\t\t},\n\t\tTemplateFormat: prompts.TemplateFormatGoTemplate,\n\t}\n\tresult, err := prompt.Format(map[string]any{\n\t\t"bar": "baz",\n\t})\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\tfmt.Println(result)\n}\n',imports:[]}},770:t=>{t.exports={content:'package main\n\nimport (\n\t"fmt"\n\t"log"\n\t"time"\n\n\t"github.com/tmc/langchaingo/prompts"\n)\n\nfunc main() {\n\tprompt := prompts.PromptTemplate{\n\t\tTemplate:       "Tell me a {{.adjective}} joke about the day {{.date}}",\n\t\tInputVariables: []string{"adjective"},\n\t\tPartialVariables: map[string]any{\n\t\t\t"date": func() string {\n\t\t\t\treturn time.Now().Format("January 02, 2006")\n\t\t\t},\n\t\t},\n\t\tTemplateFormat: prompts.TemplateFormatGoTemplate,\n\t}\n\tresult, err := prompt.Format(map[string]any{\n\t\t"adjective": "funny",\n\t})\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\tfmt.Println(result)\n}\n',imports:[]}},2351:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var n=a(7294),r=a(9179);function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}function l(t){var{children:e}=t,a=o(t,["children"]);return"string"==typeof e?n.createElement(r.Z,a,e):(console.log(e),n.createElement(n.Fragment,null,n.createElement(r.Z,a,e.content)))}},5997:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>h,default:()=>v,frontMatter:()=>c,metadata:()=>f,toc:()=>g});a(7294);var n=a(3905),r=a(2351),o=a(2373),l=a.n(o),i=a(770),p=a.n(i);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function m(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function u(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const c={sidebar_label:"Partial Values"},h="Partial Values",f={unversionedId:"modules/model_io/prompts/prompt_templates/partial_values",id:"modules/model_io/prompts/prompt_templates/partial_values",title:"Partial Values",description:'It can often make sense to "partial" a prompt template - eg pass in a subset of the required values, as to create a new prompt template which expects only the remaining subset of values.',source:"@site/docs/modules/model_io/prompts/prompt_templates/partial_values.mdx",sourceDirName:"modules/model_io/prompts/prompt_templates",slug:"/modules/model_io/prompts/prompt_templates/partial_values",permalink:"/langchaingo/docs/modules/model_io/prompts/prompt_templates/partial_values",draft:!1,editUrl:"https://github.com/tmc/langchaingo/edit/main/docs/docs/modules/model_io/prompts/prompt_templates/partial_values.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Partial Values"},sidebar:"sidebar",previous:{title:"Prompt Templates",permalink:"/langchaingo/docs/modules/model_io/prompts/prompt_templates/"},next:{title:"Models",permalink:"/langchaingo/docs/modules/model_io/models/"}},d={},g=[{value:"Partial With Strings",id:"partial-with-strings",level:2},{value:"Partial With Functions",id:"partial-with-functions",level:2}],b={toc:g},y="wrapper";function v(t){var{components:e}=t,a=u(t,["components"]);return(0,n.kt)(y,m(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){s(t,e,a[e])}))}return t}({},b,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"partial-values"},"Partial Values"),(0,n.kt)("p",null,'It can often make sense to "partial" a prompt template - eg pass in a subset of the required values, as to create a new prompt template which expects only the remaining subset of values.'),(0,n.kt)("p",null,"LangChain supports this in two ways:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Partial formatting with string values.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Partial formatting with functions that return string values."))),(0,n.kt)("p",null,"These two different ways support different use cases. In the examples below, we go over the motivations for both use cases as well as how to do it in LangChain."),(0,n.kt)("h2",{id:"partial-with-strings"},"Partial With Strings"),(0,n.kt)("p",null,"One common use case for wanting to partial a prompt template is if you get some of the variables before others.\nFor example, suppose you have a prompt template that requires two variables, foo and baz.\nIf you get the foo value early on in the chain, but the baz value later, it can be annoying to wait until you have both variables in the same place to pass them to the prompt template.\nInstead, you can partial the prompt template with the foo value, and then pass the partialed prompt template along and just use that.\nBelow is an example of doing this:"),(0,n.kt)(r.Z,{language:"go",mdxType:"CodeBlock"},l()),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"foobaz\n")),(0,n.kt)("h2",{id:"partial-with-functions"},"Partial With Functions"),(0,n.kt)("p",null,"The other common use is to partial with a function. The use case for this is when you have a variable you know that you always want to fetch in a common way.\nA prime example of this is with date or time. Imagine you have a prompt which you always want to have the current date.\nYou can't hard code it in the prompt, and passing it along with the other input variables is a bit annoying.\nIn this case, it's very handy to be able to partial the prompt with a function that always returns the current date."),(0,n.kt)(r.Z,{language:"go",mdxType:"CodeBlock"},p()),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Tell me a funny joke about the day June 28, 2023\n")))}v.isMDXComponent=!0}}]);