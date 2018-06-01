<template>
    <div class="">
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in dataImg" :key="item">
                <img :src="`${item.imgUrl}`" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>



import defaultPic1 from '@/assets/goodsimg/1.jpg'
import defaultPic2 from '@/assets/goodsimg/2.jpg'
import defaultPic3 from '@/assets/goodsimg/3.jpg'

export default {
    data() {
        return {
            dataImg: [{
                    imgUrl: defaultPic1
                },
                {
                    imgUrl: defaultPic2
                },
                {
                    imgUrl: defaultPic3
                },
            ],
            
        }
    },

    
    
}
</script>


<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  </style>