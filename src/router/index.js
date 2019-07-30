import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Home from "@/views/Home"
// import List from "@/views/List"
// import Mine from "@/views/Mine"

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
     {path:"/home",component:()=>import("@/views/Home")},
     {path:"/list",component:()=>import("@/views/List"),children:[
       {path:"",redirect:"guonei"},
       {path:"guonei",component:()=>import("@/views/Guonei"),name:'gn'},
       {path:"guoji",component:()=>import("@/views/Guoji"),name:'gj'},
     ]},
     {path:"/mine",component:()=>import("@/views/Mine")},
     {path:"/detail/:id",component:()=>import("@/views/Detail")}
  ]
})
