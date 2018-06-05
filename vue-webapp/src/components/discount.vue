<template>
    <div>
        
        <!-- <el-select v-model="value" placeholder="请选择" @change="getFloor">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select> -->

        <input type="text" autocomplete="off" class="el-input__inner el-put-goods" placeholder="折扣" v-model="qdiscount">

        <el-button type="primary" @click="queryFloor">折扣查询</el-button>

        <div class="first">
            <div class="f-left box-f" v-for="(item,index) in tableData" :key="index">
                <div>
                    <p >{{item.gname}}</p>
                    <img :src="`${item.gimg}`" alt="">
                    <span>位置：{{item.glocation}}</span> <br>
                    <span>折扣：{{item.gdiscount}}折</span>
                </div>
            </div>
        </div>
        

    </div>
  
</template>


<script>
  export default {
    data() {
      return {
        options: [
            {
                value: '0',
                label: '0(0折即不打折)'
            },
            {
                value: '1',
                label: '1'
            }, {
                value: '2',
                label: '2'
            }, {
                value: '3',
                label: '3'
            }, {
                value: '4',
                label: '4'
            } ,
            {
                value: '5',
                label: '5'
            }, {
                value: '6',
                label: '6'
            }, {
                value: '7',
                label: '7'
            }, {
                value: '8',
                label: '8'
            } ,
            {
                value: '9',
                label: '9'
            }, 
         
         ],
        value: '',
        parentMsg: '',
        qname: '',
        floor: '0',
        qdiscount: '',
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
                let url = '/api/query_discount';
                    this.$http.post(url, {
                    discount: _this.qdiscount,
                    // location: this.qlocation
                },{}).then(function(data) {
                    let info = data.data.data;
                    if(info.length > 0 ) {
                        _this.tableData = info;
                    } else {
                        this.$message.warning('该项数据为空')
                        _this.tableData = info;
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
