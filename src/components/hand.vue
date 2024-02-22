<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter() // 使用 useRouter 获取路由对象

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const goToVupbody = () => {
  router.push('/vupbody'); // 替换为你的 VupHelp 路由路径
}

const goToDocumentation = () => {
  router.push('/documentation'); // 替换为你的文档路由路径
}

const goToVuphelp = () => {
  router.push('/vuphelp'); // 替换为你的 VupHelp 路由路径
}

const goTostatement = () =>{
  router.push('/stateme')
}
</script>

<template>
    <!-- 这个div在顶栏上方暂时空位之后需要添加功能后可以使用 -->
  <div class="h-6"></div>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1" @click="goToVupbody">VupHelp</el-menu-item>
    <el-menu-item index="4" @click="goToDocumentation">文档</el-menu-item>
    <!-- <el-sub-menu index="2">
      <template #title>待写入</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
    <!-- 待更新  @click="goToVuphelp"  -->
    <el-menu-item index="3" @click="goToVuphelp" disabled>请求帮助</el-menu-item>
    <el-menu-item index="2" @click="goTostatement">声明</el-menu-item>
  
  </el-menu>

 
</template>



<style scoped>
</style>
