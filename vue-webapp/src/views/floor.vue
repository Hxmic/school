<template>
    <div>
        
        <el-select v-model="value" placeholder="请选择" @change="getFloor">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>

        <input type="text" autocomplete="off" class="el-input__inner el-put-goods" placeholder="商品名" v-model="qname">

        <el-button type="primary" @click="queryGoodsInfo">商品查询</el-button>

        <div class="first">
            <div class="f-left box-f" v-for="(item,index) in tableData" :key="index">
                <div>
                    <p >{{item.gname}}</p>
                    <img :src="`${item.gimg}`" alt="">
                    <span>位置：{{item.glocation}}</span> <br>
                    <span>售价：{{item.gprice}}元</span>
                </div>
            </div>
        </div>
        

    </div>
  
</template>


<script>
  export default {
    data() {
      return {
        options: [{
            value: '一楼',
            label: '一楼'
         }, {
            value: '二楼',
            label: '二楼'
         }, {
            value: '三楼',
            label: '三楼'
         }, {
            value: '四楼',
            label: '四楼'
         }],
        value: '',
        parentMsg: '',
        qname: '',
        floor: '一楼',
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
        }, ]
      }
    },
    created() {
        this.getFloor();
        
    },
    methods: {
        getFloor() {
            this.floor = this.value;
            this.queryFloor();
        },
         queryFloor() {
                let _this = this;
                let url = '/api/query_floor';
                    this.$http.post(url, {
                    location: _this.floor,
                    // location: this.qlocation
                },{}).then(function(data) {
                    let info = data.data.data;
                    _this.tableData = info;
                })
         },

         queryGoodsInfo() {
            let _this = this;
            let url = '/api/query_locg';
                this.$http.post(url, {
                name: this.qname,
                location: this.floor
            },{}).then(function(data) {
                let info = data.data.data;
                let len = info.length;
                console.log(info.length)
                if( len > 0) {
                    _this.tableData = info;
                } else {
                    _this.tableData = info;
                    _this.$message.warning('该项商品为空');
                }
                

                

            })       
        },

    }
  }
</script>

<style lang="less">
.el-put-goods {
    width: 200px;
    margin-left: 15px;
    margin-right: 15px;
}

.first {
  display: flex;
//   justify-content: center;
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
