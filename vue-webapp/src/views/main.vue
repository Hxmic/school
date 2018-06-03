<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="商场平面图" name="main">
      商场平面图
    </el-tab-pane>

    <el-tab-pane label="活动推广模块" name="first">
       <VIDEO></VIDEO> 
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import VIDEO from '@/components/video'


  export default {
    components: { VIDEO },
    data() {
      return {
        activeName: 'main',
       
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style>
    img {
        width: 540px;
        height: 300px;
    }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>