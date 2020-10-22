(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{122:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/model_instantiation-df3ceee619a123516d502c227b2fda60.png"},123:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/posterior_sampling-1937e2dc0972fed130bb0c90853078b1.png"},124:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/pll-98ede5fa163a212266019a4a26a600f5.png"},67:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return p}));var n=t(2),s=t(6),i=(t(0),t(85)),r={id:"introduction",title:"Introduction"},o={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"What is PPL Bench?",source:"@site/../docs/introduction.md",slug:"/introduction",permalink:"/docs/introduction",editUrl:"https://github.com/facebookresearch/pplbench/edit/master/website/../docs/introduction.md",version:"current",sidebar:"someSidebar",next:{title:"Getting Started",permalink:"/docs/getting_started"}},c=[{value:"What is PPL Bench?",id:"what-is-ppl-bench",children:[{value:"Model Instantiation and Data Generation",id:"model-instantiation-and-data-generation",children:[]},{value:"PPL Implementation and Posterior Sampling",id:"ppl-implementation-and-posterior-sampling",children:[]},{value:"Evaluation of Posterior Samples",id:"evaluation-of-posterior-samples",children:[]}]},{value:"Using PPL Bench",id:"using-ppl-bench",children:[]},{value:"Purpose of PPL Bench",id:"purpose-of-ppl-bench",children:[]}],m={rightToc:c};function p(e){var a=e.components,r=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,r,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-ppl-bench"},"What is PPL Bench?"),Object(i.b)("p",null,"PPL Bench is a new benchmark framework for evaluating the performance of probabilistic programming languages (PPLs)."),Object(i.b)("h3",{id:"model-instantiation-and-data-generation"},"Model Instantiation and Data Generation"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Model Instantiation and Data Generation ",src:t(122).default})),Object(i.b)("p",null,"A model with all it's parameters set to certain values is referred to as a model instance.\nWe then use the generative model to generate two sets of data - train data and test data.\nThis process of data generation is performed independent of any PPL."),Object(i.b)("h3",{id:"ppl-implementation-and-posterior-sampling"},"PPL Implementation and Posterior Sampling"),Object(i.b)("p",null,Object(i.b)("img",{alt:"PPL Implementation and Posterior Sampling ",src:t(123).default})),Object(i.b)("p",null,"The training data is passed to various PPL implementations to perform inference."),Object(i.b)("h3",{id:"evaluation-of-posterior-samples"},"Evaluation of Posterior Samples"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Evaluation of Posterior Samples",src:t(124).default})),Object(i.b)("p",null,"We compute Predictive Log Likelihood on the test data using posterior samples obtained from each PPL. We also compute other common evalutation metrics such as effective sample size, ",Object(i.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(i.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("msub",{parentName:"mrow"},Object(i.b)("mi",{parentName:"msub"},"r"),Object(i.b)("mrow",{parentName:"msub"},Object(i.b)("mi",{parentName:"mrow"},"h"),Object(i.b)("mi",{parentName:"mrow"},"a"),Object(i.b)("mi",{parentName:"mrow"},"t")))),Object(i.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"r_{hat}")))),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.58056em",verticalAlign:"-0.15em"}})),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.02778em"}}),"r"),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.33610799999999996em"}}),Object(i.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"-0.02778em",marginRight:"0.05em"}}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight"}),"h"),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight"}),"a"),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight"}),"t"))))),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(i.b)("span",{parentName:"span"}))))))))))," and inference time."),Object(i.b)("h2",{id:"using-ppl-bench"},"Using PPL Bench"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Comparing model performance across PPLs"),Object(i.b)("li",{parentName:"ul"},"Comparing the effectiveness of inference algorithms across models"),Object(i.b)("li",{parentName:"ul"},"Evaluating new inference algorithms")),Object(i.b)("h2",{id:"purpose-of-ppl-bench"},"Purpose of PPL Bench"),Object(i.b)("p",null,"The purpose of PPL Bench as a probabilistic programming benchmark is two-fold."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"To provide researchers with a framework to evaluate improvements in PPLs in a standardized setting."),Object(i.b)("li",{parentName:"ol"},"To enable users to pick the PPL that is most suited for their modelling application.")),Object(i.b)("p",null,"Typically, comparing different ML systems requires duplicating huge segments of work: generating data, running analysis, determining predictive performance, and comparing across implementations. PPL Bench automates nearly all of this workflow."))}p.isMDXComponent=!0}}]);