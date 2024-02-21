<script setup>
import hand from "./components/hand.vue"
import bod from "./components/body.vue"
</script>

<template>
<hand></hand>
<div class="top">
      <!-- 渲染视图 -->
        <router-view></router-view>
    </div>
    <p style="text-align: center;">本网站内容使用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议(CC BY-NC-SA 4.0)</a> 进行许可。</p>
</template>

<style scoped>


</style>
