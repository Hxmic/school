<template>



<div>
    <el-button type="primary" @click="addMerchant" v-show="mark">添加商家</el-button>
    
    <div v-show="flag" class="mer">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
             <el-form-item label="商家名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="商家位置" prop="location">
                <el-input v-model="ruleForm.location"></el-input>
            </el-form-item>

            <el-form-item label="主营业务" prop="important">
                <el-input v-model="ruleForm.important"></el-input>
            </el-form-item>

            <el-form-item label="活动" prop="active">
                <el-input v-model="ruleForm.active"></el-input>
            </el-form-item>

            <el-form-item label="活动视频" prop="video">
                <el-input v-model="ruleForm.video" aria-placeholder="video.mp4"></el-input>
            </el-form-item>

            <el-form-item label="活动1" prop="active1">
                <el-input v-model="ruleForm.active1"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确认添加</el-button>
                <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
        </el-form>

        

        <!-- <label for="">用户名</label>
        <input type="text" autocomplete="off" class="el-input__inner el-put-name" placeholder="用户名" v-model="uname"> -->
    </div>
    

    <div v-show="mark">
        <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
            >
            <el-table-column
                prop="cname"
                label="商铺名"
                sortable
                width="150">
            </el-table-column>

            <el-table-column
                prop="clocation"
                label="商家位置"
                width="150">
            </el-table-column>

            <el-table-column
                prop="cimportant"
                label="主要业务"
                width="150">
            </el-table-column>

             <el-table-column
                prop="cactive"
                label="活动"
                width="150">
            </el-table-column>

            <el-table-column
                prop="cvideo"
                label="视频简介"
                width="150">
            </el-table-column>

            <el-table-column
                prop="cactive1"
                label="视频简介"
                width="150">
            </el-table-column>

            
            <el-table-column label="操作" >
                <template slot-scope="scope" v-show="operateFlag">
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
        </div>


        <div v-show="noMark">
            
             <input type="text" autocomplete="off" class="el-input__inner el-put-name" placeholder="商铺名" v-model="qname">
      <!-- <input type="text" autocomplete="off" class="el-input__inner el-put-name" placeholder="最低折扣）" v-model="qdiscount">
       -->
            <el-button type="primary" @click="queryMer">商铺查询</el-button>

            <el-table
                :data="tableData"
                style="width: 100%"
                :default-sort = "{prop: 'date', order: 'descending'}"
                >
                <el-table-column
                    prop="cname"
                    label="商家名"
                    sortable
                    width="200">
                </el-table-column>

                <el-table-column
                    prop="clocation"
                    label="商家位置"
                    width="200">
                </el-table-column>

                <el-table-column
                    prop="cimportant"
                    label="主要业务"
                    width="200">
                </el-table-column>

                    <el-table-column label="" >
                    <template slot-scope="scope" v-show="operateFlag">
                
                    </template>
                </el-table-column>

                </el-table>
        </div>


          <el-dialog
      title="修改商品信息"
      :visible.sync="dialogVisible"
      width="30%"
     >
     <div>
       <div class="el-form-item">
          <label class="el-form-item__label" style="width: 80px;">商铺名</label>
          <input type="text" class="el-input__inner w-input" v-model="name">
          <!-- <input type="text" v-model="goodsname"> -->
       </div>
       
       <div class="el-form-item">
          <label class="el-form-item__label" style="width: 80px;">活动</label>
          <input type="text" class="el-input__inner w-input" v-model="active">
       </div>

       <div class="el-form-item">
          <label class="el-form-item__label" style="width: 80px;">视频介绍</label>
          <input type="text" class="el-input__inner w-input" v-model="video">
       </div>

        <div class="el-form-item">
          <label class="el-form-item__label" style="width: 80px;">推广</label>
          <input type="text" class="el-input__inner w-input" v-model="active1">
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
          cname: '',
          clocation: '',
          cimportant: '',
          active: '',
          cvideo: '',
          active1: '',
        }],

        ruleForm: {
          name: '',
          location: '',
          important: '',
          avtive: '',
          active1: '',
          video: '',
        },

        rules: {
          name: [
            { required: true, message: '请输入商家名称', trigger: 'blur' },
          ],
        
           location: [
            { required: true, message: '请输入商家位置', trigger: 'blur' },
          ],

           important: [
            { required: true, message: '请输入商家主营业务', trigger: 'blur' },
          ],
        },
        mark: true,
        flag: false,
        noMark: true,
        lUrl: 'http://localhost/',
        dialogVisible: false,
        name: '',
        active: '',
        video: '',
        active1: '',
        listIndex: '',
        editObj:[{}],
        qname: '',
      }
    },
    mounted() {
      this.getName();
      this.queryMerchant();
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },

      queryMer() {
        let _this = this;
        let url = '/api/query_merchant';
        if(this.qname == '') {
          this.$message.error('查询数据不能为空');
        } else{
            this.$http.post(url, {
            name: this.qname,
            // location: this.qlocation
          },{}).then(function(data) {
            let info = data.data.data;
            _this.tableData = info;
          })
        }
      },

       getName() {
           let name = this.$route.query.nameTra;
          //  this.userName = name;
            if(name == ' ' || name == undefined || name == '用户' ) {
              this.mark = false;
              this.noMark = true;
            }
            else {
                this.mark = true;
                this.noMark = false;
            }
           
       },

      queryMerchant() {
        let url = '/api/sel_merchant';
        let _this = this;
        this.$http.get(url, {
        },{}).then(function(data) {
          let info = data.data.data;
          _this.tableData = info;
        })
      },

      addMerchant() {
          let name = this.$route.query.nameTra;
          if(name == ' ' || name == undefined || name == '用户' ) {
              this.$message.error('没有操作权限')
          } else {
              this.mark = false;
              this.flag = true;
          }

          
      },

       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            let  activeA = this.lUrl + this.ruleForm.active;
            let activeB = this.lUrl + this.ruleForm.active1;
            let video = this.lUrl + this.ruleForm.video;
          if (valid) {
            var url = '/api/add_merchant';
                this.$http.post(url, {
                  name: this.ruleForm.name,
                  location: this.ruleForm.location,
                  important: this.ruleForm.important,
                  active: activeA,
                  active1: activeB,
                  video: video
                },{}).then(function(data) {
                  if(data.body.code == 0) {
                    this.$message.error('添加失败');
                  } else {
                       this.mark = true;
                       this.flag = false;
                       this.$refs[formName].resetFields();
                        this.$message({
                            message: '添加成功',
                            type: 'success'
                        });
                        this.queryMerchant();
                  }
                })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
         this.mark = true;
          this.flag = false;
      },

      handleDelete(index, row) {
        let url = '/api/del_merchant'
        this.$http.post(url, {
          cid : row.cid,
        }, {}).then(function(data) {
          let num = data.data.code;
          if(num == 1) {
            this.$message.success('删除成功');
            this.queryMerchant();
          } else {
            this.$message.success('删除失败');
          }
        })
      },


       // 弹出修改品牌商铺的模态框
     handleEdit(index, row) {
      
       this.listIndex = row.cid;
       this.editObj = row;
       // 此处报为先定义的错误
       this.name = row.cname;
       this.active = row.cactive;
       this.video = row.cvideo;
       this.active1 = row.cactive1;
       
       
       this.dialogVisible = true;
     },
     // 确认修改商铺
     editConfirm() {

       let _this = this;
       let url = 'api/upd_merchant';
       this.$http.post(url, {
         name: _this.name,
         active: _this.active,
         video: _this.video,
         active1: _this.active1,
         cid: _this.listIndex
       },{}).then(function(data) {
         let mark = data.body.code;
         if(mark == 1) {
           this.$message.success('修改成功');
           this.queryMerchant();

         } else {
           this.$message.error('修改失败');
         }
       })
       this.dialogVisible = false;
     },

    }
  }
</script>

<style lang="less">
.mer {
    display: block;
    margin: 0 auto;
    width: 600px;
}


</style>
