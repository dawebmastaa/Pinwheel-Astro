import{r as m}from"./index.26f5e802.js";import{h as a}from"./textConverter.40085d3b.js";import{m as x}from"./marked.esm.cdc2cd67.js";import{A as h}from"./index.eef6451e.js";import{j as e}from"./jsx-runtime.47a19089.js";import"./index.b4cca991.js";const N=({integrations:i,categories:n})=>{const[t,l]=m.useState(""),c=t?i.filter(s=>s.data.categories.includes(t)):i;return e.jsx("section",{className:"section pt-0",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row justify-center",children:e.jsx("div",{className:"lg:col-10",children:e.jsxs("ul",{className:"integration-tab filter-list flex flex-wrap items-center justify-center",children:[e.jsx("li",{children:e.jsx("span",{className:`filter-btn ${t?void 0:"filter-btn-active"} btn btn-sm cursor-pointer`,onClick:()=>l(""),children:"All Categories"})}),n.map((s,r)=>e.jsx("li",{onClick:()=>l(s),children:e.jsx("span",{className:`filter-btn ${t===s?"filter-btn-active":void 0} btn btn-sm cursor-pointer`,children:a(s)})},`category-${r}`))]})})}),e.jsx("div",{className:"integration-tab-items row mt-10",children:c.map((s,r)=>e.jsx("div",{className:"integration-tab-item mb-8 md:col-6 lg:col-4",children:e.jsxs("div",{className:"rounded-xl bg-white px-10 pb-8 pt-11 shadow-lg",children:[e.jsxs("div",{className:"integration-card-head flex items-center space-x-4",children:[e.jsx("img",{src:s.data.image,alt:""}),e.jsxs("div",{children:[e.jsx("h4",{className:"h4",children:a(s.data.name)}),s.data.categories.map((o,d)=>e.jsx("span",{className:"font-medium",children:a(o)},d))]})]}),e.jsx("div",{className:"my-5 border-y border-border py-5",children:e.jsx("p",{dangerouslySetInnerHTML:{__html:x.parseInline(s.data.excerpt.slice(0,80))}})}),e.jsxs("a",{className:"group inline-flex items-center font-semibold text-dark hover:text-primary",href:`/integrations/${s.slug}`,children:["View integration",e.jsx(h,{className:"ml-1.5 text-xl font-bold duration-300 group-hover:ml-3"})]})]})},r))})]})})};export{N as default};
