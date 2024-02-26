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
</template>

<style scoped></style>
