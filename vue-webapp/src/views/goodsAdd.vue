<template>
    <div class="add-input" v-show="flag">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            
            <!-- <div>{{orderInfo}}</div> -->
            
            <el-form-item label="商品名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            
            <el-form-item label="打折" prop="discount">
                <el-input v-model="ruleForm.discount"></el-input>
            </el-form-item>

            <el-form-item label="商品价格" prop="price">
                <el-input v-model="ruleForm.price"></el-input>
            </el-form-item>

            <el-form-item label="商品销量" prop="sale">
                <el-input v-model="ruleForm.sale"></el-input>
            </el-form-item>

            <el-form-item label="商品位置" prop="location">
                <el-input v-model="ruleForm.location"></el-input>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确认添加</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
            </el-form>
    </div>
</template>


<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          discount: '',
          price: '',
          sale: '',
          location: '',
          time: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入商品名', trigger: 'blur' },
          ],
        
           discount: [
            { required: true, message: '请输入商品描述', trigger: 'blur' },
          ],

           price: [
            { required: true, message: '请输入商品价格', trigger: 'blur' },
          ],

           sale: [
            { required: true, message: '请输入商品销量', trigger: 'blur' },
          ],

          location: [
            { required: true, message: '请输入商品位置', trigger: 'change' }
          ],
        },
        flag: true,
      };
    },
    created() {
      this.getName();
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url = '/api/add_goods';
                this.$http.post(url, {
                  name: this.ruleForm.name,
                  discount: this.ruleForm.discount,
                  location: this.ruleForm.location,
                  price: this.ruleForm.price,
                  sale: this.ruleForm.sale,
                  date: this.ruleForm.time
                },{}).then(function(data) {
                  console.log(data.body.code);
                  if(data.body.code == 0) {
                    this.$message.error('添加失败');
                  } else {
                    this.$message({
                      message: '添加成功',
                      type: 'success'
                    });
                  }
                })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

       getName() {
           let name = this.$route.query.nameTra;
          //  this.userName = name;
           console.log(name);
            if(name == ' ' || name == undefined || name == '用户' ) {
              this.$message.error('没有操作权限!')
              this.flag = false;
            }
            else {
                this.flag = true;
            }
           
       },

      // 获取参数
			getParams() {
				let name = this.$route.query.username;
				this.userName = name;
			},

      // 获取当前时间
      getCurrentTime() {
            let dateTime = new Date();
            let year = dateTime.getFullYear();
            let month = dateTime.getMonth() + 1;
            let day = dateTime.getDate();
            let time = year + '-' + month+ '-' + day;
            this.ruleForm.time = time;

      }
    },
    mounted() {
        this.getCurrentTime();
    },
    
  }
</script>

<style lang="less">
.add-input {
  width: 600px;
  margin: 0 auto;
}
</style>
