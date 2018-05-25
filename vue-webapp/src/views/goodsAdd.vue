<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="商品名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            
            <el-form-item label="商品描述" prop="describe">
                <el-input v-model="ruleForm.describe"></el-input>
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
          describe: '',
          price: '',
          sale: '',
          location: '',
          time: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入商品名', trigger: 'blur' },
          ],
        
           describe: [
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
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url = '/api/add_goods';
                this.$http.post(url, {
                  name: this.ruleForm.name,
                  describe: this.ruleForm.describe,
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
    }
  }
</script>