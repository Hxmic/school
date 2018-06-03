<template>
  
  <div>
      <input type="text" autocomplete="off" class="el-input__inner el-put-name" placeholder="商品名" v-model="qname">
      <input type="text" autocomplete="off" class="el-input__inner el-put-name" placeholder="最低折扣" v-model="qdiscount">
      
      <el-button type="primary" @click="queryGoodsInfo">商品查询</el-button>
      <el-button type="primary" @click="queryDisGoodsInfo">打折查询</el-button>
      <!-- <button></button> -->
    <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
        >
        <el-table-column
        prop="gname"
        label="商品名"
        sortable
        width="150">
        </el-table-column>

        <!-- <el-table-column
        prop="gdescribe"
        label="商品描述"
        width="150">
        </el-table-column> -->

        <el-table-column
        prop="gprice"
        label="商品价格"
        width="100">
        </el-table-column>


        <!-- <el-table-column
        prop="gsale"
        label="销量"
        width="100">
        </el-table-column> -->

    
        <el-table-column
        prop="gdate"
        label="上架日期"
        :formatter="dateFormat"
        sortable
        width="150">
        </el-table-column>

        <el-table-column
        prop="gdiscount"
        label="打折"
        width="100">
        </el-table-column>

        <el-table-column
        prop="glocation"
        label="商品位置"
        width="150">
        </el-table-column>

        <!-- <el-table-column
        prop="gperson"
        label="发布人员"
        width="150">
        </el-table-column> -->

       
    </el-table>


    <el-dialog
      title="修改商品信息"
      :visible.sync="dialogVisible"
      width="30%"
     >
     <div>
       <div class="el-form-item">
          <label class="el-form-item__label" style="width: 80px;">商品名</label>
          <input type="text" class="el-input__inner" v-model="goodsname">
          <!-- <input type="text" v-model="goodsname"> -->
       </div>
       
       <div class="el-form-item">
          <label class="el-form-item__label" style="width: 80px;">商品描述</label>
          <input type="text" class="el-input__inner" v-model="goodsdescribe">
       </div>

       <div class="el-form-item">
          <label class="el-form-item__label" style="width: 80px;">商品价格</label>
          <input type="text" class="el-input__inner" v-model="goodsprice">
       </div>

        <div class="el-form-item">
          <label class="el-form-item__label" style="width: 80px;">商品位置</label>
          <input type="text" class="el-input__inner" v-model="goodslocation">
       </div>
     </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editConfirm">修 改</el-button>
      </span>
    </el-dialog>

  </div> 

  
</template>


<script>
import {timeFor} from '../util/util'

  export default {

    data() {
      return {
        goodsname:'',
        goodsdescribe:'',
        goodslocation:'',
        goodsprice:'',
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
          gperson: '李四'
        }, ],
         dialogVisible: false,
         listIndex: '',
         editObj:[{}],
         qname: '',
         qlocation: '',
         qdiscount: '',
      }
    },
    mounted() {
      this.getGoodsTable();
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      // 获取商品信息
      getGoodsTable() {
        let _this = this;
        let url = '/api/sel_goods'
        this.$http.get(url, {
        },{}).then(function(data) {
          let info = data.data.data;
          _this.tableData = info;

        })
      },
      // 按条件查询商品
      queryGoodsInfo() {
        let _this = this;
        let url = '/api/query_goods';
        if(this.qname == '') {
          this.$message.error('查询数据不能为空');
        } else{
            this.$http.post(url, {
            name: this.qname,
            // location: this.qlocation
          },{}).then(function(data) {
            console.log(data);
            let info = data.data.data;
            console.log(info);
            _this.tableData = info;
          })
        }
       

      },
      // 打折促销查询
      queryDisGoodsInfo() {
         let _this = this;
        let url = '/api/query_disgoods';
        if(this.qname == '' ) {
          this.$message.error('查询数据不能为空');
        } else{
            this.$http.post(url, {
            name: this.qname,
            discount: this.qdiscount
            // location: this.qlocation
          },{}).then(function(data) {
            console.log(data);
            let info = data.data.data;
            console.log(info + 'info');
            _this.tableData = info;
          })
        }
       

      },
      // 管理员删除商品
      handleDelete(index, row) {
        let url = '/api/del_goods'
        this.$http.post(url, {
          gid : row.gid,
        }, {}).then(function(data) {
          this.getGoodsTable();
          let num = data.data.code;
          if(num == 1) {
            this.$message.success('删除成功');
            this.getGoodsTable();
          } else {
            this.$message.success('删除失败');
          }
        })
      },
      // 弹出修改商品的模态框
     handleEdit(index, row) {
      
       this.listIndex = row.gid;
       this.editObj = row;
       // 此处报为先定义的错误
       this.goodsname = row.gname;
       this.goodslocation = row.glocation;
       this.goodsdescribe = row.gdescribe;
       this.goodsprice = row.gprice;
       
       this.dialogVisible = true;
     },
     // 确认修改商品
     editConfirm() {
       let _this = this;
       let url = 'api/upd_goods';
       this.$http.post(url, {
         name: _this.goodsname,
         location: _this.goodslocation,
         describe: _this.goodsdescribe,
         price: _this.goodsprice,
         gid: _this.listIndex
       },{}).then(function(data) {
         let mark = data.body.code;
         if(mark == 1) {
           this.$message.success('修改成功');
           this.getGoodsTable();

         } else {
           this.$message.error('修改失败');
         }
       })
       this.dialogVisible = false;
     },
      // 格式化日期
      dateFormat(row, column) {
        let date = row[column.property];
        return timeFor(date);
        // let d = new Date(date);
        // let time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' 
        // + d.getDate();
        // return time;
      }  
    }
  }
</script>

<style lang="less">
.el-put-name {
  width: 200px;
  margin-right: 15px;
}
.upd-p {
  padding-bottom: 10px;
  
}
</style>
