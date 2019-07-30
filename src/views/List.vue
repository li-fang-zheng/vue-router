<template>
    <div class="list">
        list!!
        <div>
            <router-link :to="{name:'gn'}">国内</router-link>
            <router-link :to="{name:'gj'}">国际</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<style>

</style>

<script>
export default {
    
}
</script>
