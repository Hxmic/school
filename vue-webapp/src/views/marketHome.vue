<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="商场主页" name="home">
        
        <div class="">
            <div class="welcome-head">
                <p>欢迎访问{{nameM}}</p>
            </div>
            
            <el-carousel indicator-position="outside" class="img-h">
                <el-carousel-item v-for="item in dataImg" :key="item" class="img-h">
                    <img :src="`${item.imgUrl}`" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>

    </el-tab-pane>
    <el-tab-pane label="一楼介绍" name="first">
        
        <p class="p-title">一楼主营食用商品</p>
        <firstComponent></firstComponent>
    </el-tab-pane>
    <el-tab-pane label="二楼介绍" name="second">
        <p class="p-title">二楼主营电子商品</p>
        <second-component></second-component>
    </el-tab-pane>
    <el-tab-pane label="三楼介绍" name="third">
        <p class="p-title">三楼主营服饰品</p>
        <third-component></third-component>  
    </el-tab-pane>
    <el-tab-pane label="四楼介绍" name="fourth">
        <p class="p-title">四楼主营生活用品</p>
        <fourComponent></fourComponent>
    </el-tab-pane>
    

  </el-tabs>
</template>

<script>
import homeComponent from '@/components/marketIntroduce/home'
import firstComponent from '@/components/marketIntroduce/first'
import secondComponent from '@/components/marketIntroduce/second'
import thirdComponent from '@/components/marketIntroduce/three'
import fourComponent from '@/components/marketIntroduce/four'

// 图片引入使用
import defaultPic1 from '@/assets/goodsimg/1.jpg'
import defaultPic2 from '@/assets/goodsimg/2.jpg'
import defaultPic3 from '@/assets/goodsimg/3.jpg'

export default {
    data() {
        return{
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
            activeName: 'home',
            nameM: '',

        }
    },

    created() {
        this.getName()
    },
    components: { homeComponent, firstComponent, secondComponent, thirdComponent, fourComponent},
    methods: {
       getName() {
           let name = this.$route.query.nameTra;
           let id = this.$route.query.marketId;
           let mName = this.$route.query.name;
           let mIntroduce = this.$route.query.introduce;
           let mImportant = this.$route.query.important;
           let mLocation = this.$route.query.location;
           let mPhone = this.$route.query.phone;

           this.nameM = mName;

            console.log(name)
            console.log(mName)
            console.log(mIntroduce)
            console.log(mImportant)
            console.log(mLocation)
            console.log(mPhone)

        },
        handleClick(tab, event) {
            // console.log(tab, event);
        }
    }
}
</script>

<style lang="less" scoped>
 .img-h {
        height: 400px;
        width: 100%;
    }
    img {
        height: 400px;
        width: 100%;
    }
    .p-title {
        text-align: center;
        font-family:"Trebuchet MS",Arial,Helvetica,sans-serif;
        font-size:32px;
        color:#999999;
            // line-height:25px;
        letter-spacing:5px
    }
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
  .welcome-head {
      display: block;
      margin: 0 auto;
      text-align: center;
      
      p {
            font-family:"Trebuchet MS",Arial,Helvetica,sans-serif;
            font-size:32px;
            color:#999999;
            // line-height:25px;
            letter-spacing:5px
            
      }
  }
</style>



