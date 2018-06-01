<template>
  <div class="first">
    <div class="f-left box-f" v-for="(item,index) in tableData" :key="index">
      <div>
        <p @click="queryFloor">{{item.gname}}</p>
        <img :src="`${item.gimg}`" alt="">
        <span>位置：{{item.glocation}}</span> <br>
        <span>售价：{{item.gprice}}元</span>
      </div>

     
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return{
      floor: '三楼',
      imgUrl: [{

      }],
      tableData: [{
          gid: '',
          gname: '毛巾',
          gdescribe: '轻柔，好用',
          gprice: '15',
          gsale: 100,
          comment: '99%',
          gdate: '2016-05-01',
          gdiscount: 9,
          glocation: '三楼304',
          gdiscount: '',
          gperson: '李四',
          gimg: '',
        }, ],
    }
  },
  created() {
    this.queryFloor();
  },
  methods: {
    queryFloor() {
        let _this = this;
        let url = '/api/query_floor';
            this.$http.post(url, {
            location: _this.floor,
            // location: this.qlocation
          },{}).then(function(data) {
            console.log(data);
            let info = data.data.data;
            
            _this.tableData = info;
            console.log(_this.tableData)
          })

       

      },
  }
}
</script>


<style lang="less">
.first {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  .box-f {
    margin: 20px;
    width: 200px;
    height: 330px;
    // border: 1px solid red;
    border:1px solid #BFBFBF;
    box-shadow:0px 0px  10px 5px #aaa;


    
    img {
      width: 200px;
      height: 250px;
    }
    p {
      text-align: center;
      padding: 5px;
      font: 700 16px Arial,"microsoft yahei";
      color: #666;
    }

    span {
      color: #666;
      padding: 3px;
    }
  }
}
</style>

