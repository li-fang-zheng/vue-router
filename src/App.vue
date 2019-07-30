<template>
  <div id="app">
    hello app!
    <div>
      <router-link
        v-for="item in navs"
        :key="item.id"
        :to="item.path"
        active-class="abc"
      >{{item.title}}</router-link>
    </div> 
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  
  .abc{
    color:red;
  }
</style>

<script>
export default {
  data(){
    return{
      navs:[
        {id:1,title:"首页",path:"/home"},
        {id:2,title:"列表",path:"/list"},
        {id:3,title:"我的",path:"/mine"},
      ]
    }
  },
  mounted(){
    console.log(this)
  }
}
</script>
