<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="商场平面图" name="main">
      <img src="../assets/dao.jpg" alt="" class="img">
    </el-tab-pane>

    <el-tab-pane label="活动推广" name="first">
       <VIDEO></VIDEO> 
    </el-tab-pane>

    <el-tab-pane label="打折促销" name="second">
       <DISCOUNT></DISCOUNT>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import VIDEO from '@/components/video'
import DISCOUNT from '@/components/discount'

  export default {
    components: { VIDEO, DISCOUNT },
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
    .img {
        min-width: 600px;
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