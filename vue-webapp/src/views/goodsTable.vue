<template>
  
  <div>
      <input type="text" autocomplete="off" class="el-input__inner" placeholder="查询商品">
      <el-button type="primary" @click="getGoodsTable">查询</el-button>
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
        width="100">
        </el-table-column>

        <el-table-column
        prop="gdescribe"
        label="商品描述"
        width="150">
        </el-table-column>

        <el-table-column
        prop="gprice"
        label="商品价格"
        width="100">
        </el-table-column>


        <el-table-column
        prop="gsale"
        label="销量"
        width="100">
        </el-table-column>

    
        <el-table-column
        prop="gdate"
        label="上架日期"
        :formatter="dateFormat"
        width="100">
        </el-table-column>

        <!-- <el-table-column
        prop="discount"
        label="打折"
        width="100">
        </el-table-column> -->

        <el-table-column
        prop="glocation"
        label="商品位置"
        width="100">
        </el-table-column>

        <el-table-column
        prop="gperson"
        label="发布人员"
        width="100">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini" 
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
    </el-table>


    <el-dialog
      title="修改商品信息"
      :visible.sync="dialogVisible"
      width="30%"
     >
     <div>
       <div class="el-form-item">
         <label class="el-form-item__label" style="width: 80px;">商品名</label>
         <div class="el-form-item__content" style="margin-left: 80px;">
           <div class="el-input"><!---->
              <input type="text" autocomplete="off" class="el-input__inner" v-model="this.goodsname">
           </div><!---->
          </div>
        </div>

        <div class="el-form-item">
         <label class="el-form-item__label" style="width: 80px;">商品描述</label>
         <div class="el-form-item__content" style="margin-left: 80px;">
           <div class="el-input"><!---->
              <input type="text" autocomplete="off" class="el-input__inner" v-model="this.goodsdescribe">
           </div><!---->
          </div>
        </div>

         <div class="el-form-item">
         <label class="el-form-item__label" style="width: 80px;">商品价格</label>
         <div class="el-form-item__content" style="margin-left: 80px;">
           <div class="el-input"><!---->
              <input type="text" autocomplete="off" class="el-input__inner" v-model="this.goodsprice">
           </div><!---->
          </div>
        </div>

        <div class="el-form-item">
         <label class="el-form-item__label" style="width: 80px;">商品位置</label>
         <div class="el-form-item__content" style="margin-left: 80px;">
           <div class="el-input"><!---->
              <input type="text" autocomplete="off" class="el-input__inner" v-model="this.goodslocation">
           </div><!---->
          </div>
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
  export default {
    data() {
      return {
        tableData: [{
          gid: '',
          gname: '毛巾',
          gdescribe: '轻柔，好用',
          gprice: '15',
          gsale: 100,
          comment: '99%',
          gdate: '2016-05-01',
          discount: 9,
          glocation: '三楼304',
          gperson: '李四'
        }, ],
         dialogVisible: false,
         listIndex: '',
         editObj:[{}],
         goodsname:'',
         goodsdescribe:'',
         goodsnlocation:'',
         goodsprice:'',
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
          // console.log(_this.tableData)
        })
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
      // 管理员修改商品
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

       this.dialogVisible = false;
     },
      // 格式化日期
      dateFormat(row, column) {
        let date = row[column.property];
        let d = new Date(date);
        let time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' 
        + d.getDate();
        return time;
      }  
    }
  }
</script>

<style lang="less">
.el-input__inner {
  width: 200px;
  margin-right: 15px;
}
.upd-p {
  padding-bottom: 10px;
  
}
</style>
