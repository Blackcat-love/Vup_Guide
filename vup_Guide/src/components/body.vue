<script lang="ts" setup>


</script>
<!-- 走马灯 -->
<template>
    <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
<!-- 走马灯结束 -->
<!-- 内容 -->
<div class="container">
    <el-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
    <el-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
    <el-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
</div>
    
</template>


<style scoped>
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/* 内容卡片 */
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center; /* 设为 center 来水平居中 */
}

.box-card {
  width: 100%;
  margin-top: 20px; /* 调整盒子之间的垂直间距 */
}

</style>
