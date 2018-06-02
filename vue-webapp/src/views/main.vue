<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="新品推广" name="first">
      
    </el-tab-pane>
    <el-tab-pane label="打折促销商品" name="second">
        <el-carousel :interval="4000" type="card" >
            <el-carousel-item v-for="item in dataImg" :key="item">
                <img src="../assets/goodsimg/second.jpg" alt="">
                <img src="../assets/goodsimg/first.jpg" alt="">
                <img src="../assets/goodsimg/three.jpg" alt="">
            </el-carousel-item>
        </el-carousel>
    </el-tab-pane>
  </el-tabs>
</template>
<script>


  export default {
    data() {
      return {
        activeName: 'second',
        dataImg: [
            {
                url: '/static/img/first.jpg'
            },
            {
                url: '/static/img/second.jpg'
            },
            {
                url: '../assets/goodsimg/first.jpg'
            }
        ]
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