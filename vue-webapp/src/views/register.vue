<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">注册</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item prop="checkPassword">
      <el-input type="password" v-model="ruleForm2.checkPassword" auto-complete="off" placeholder="确认密码"></el-input>
    </el-form-item>
    <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
    <div class="remember"></div>

    <el-form-item style="width:100%;">
      <el-button type="success" style="float:left;width:40%"  @click.native.prevent="handleSubmit2" :loading="logining">确认注册</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
      <el-button  style="float:right;width:40%" @click="handleRegister">返回登录</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  data() {
      return {
        logining: false,
        ruleForm2: {
          account: '',
          checkPass: '',
          checkPassword: ''
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ],
          checkPassword: [
            { required: true, message: '请确认密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
  methods: {
    handleSubmit2() {
       var _this = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            var loginParams = { username: this.ruleForm2.account, 
                                password: this.ruleForm2.checkPass,
                                checkPass: this.ruleForm2.checkPassword};
           
            if( loginParams.password !== loginParams.checkPass) {
                this.$message.error('两次密码输入不一致');
            } else {
                var url = '/api/register';
                this.$http.post(url, {
                  username: loginParams.username,
                  password: loginParams.password
                },{}).then(function(data) {
                  console.log(data.body.code);
                  if(data.body.code == 0) {
                    this.$message.error('用户已存在');
                  } else {
                    this.$message({
                      message: '注册成功,请登录',
                      type: 'success'
                    });
                    this.$router.push('/login')
                  }
                })
            }
          } else {
            console.log('error submit!!');
            this.$message.error('请填写完整信息');
            return false;
          }
        });
    },
    handleRegister() {
     this.$router.push("/login")
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
      font-weight: bold;
      font-size: 18px;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>

