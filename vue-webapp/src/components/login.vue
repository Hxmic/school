<template>
  <div class="login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model.number="ruleForm2.username"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button @click="resetForm('ruleForm2')">注册</el-button>
            </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(() => {
        if (Number.isInteger(value)) {
          callback(new Error("用户名不能为数字"));
        } else {
          callback();
        }
      }, 0);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {

        username: '',
        pass: "",      
    },
      rules2: {
        username: [{ validator: checkName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        
      }
    };
  },
  methods: {
    submitForm(formName) {
        var url="/api/signin";
        var _this = this;
        this.$refs[formName].validate(valid => {
            if(valid) {
                this.$http.post(url,{
                    username: _this.ruleForm2.username,
                },{}).then(function(data) {
                    let lenArray = data.data
                    //let len = lenArray.data.length;
                    let name = _this.ruleForm2.username;
                    console.log(lenArray[count(username)]);
                    // for(let i = 0; i < len; i++) {
                    //     // if(lenArray[i])
                    //     if(lenArray.data[i].username === name) {
                    //         _this.$router.push('/test');
                    //     }
                    //     else {
                    //         return false;
                    //     }
                    // }
                },function(response){
                    console.log(response);
                })
            } else {
                // alert('请填写完整信息');
                return false;
            }
            
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.login {
    // margin: 10% auto 0 auto;
    width: 500px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 60%;
    margin-top: -250px;
    margin-left: -250px;
}
.el-input {
    // width: 250px;
}
</style>

