<template>
    <div class="add-input" v-show="flag">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            
            <!-- <div>{{orderInfo}}</div> -->
            
             <el-form-item label="头像" prop="img">
                <img src="../assets/group-head-img.png" alt="">
            </el-form-item>

            <el-form-item label="名字" prop="name" >
                <el-input v-model="ruleForm.name" class="name"></el-input>
            </el-form-item>

            <el-form-item label="性别" prop="sex">
                 <el-radio-group v-model="sexSelect">
                  <el-radio :label="1">男</el-radio>
                  <el-radio :label="2">女</el-radio>
                </el-radio-group>
            </el-form-item>

             <el-form-item label="邮箱" prop="email" >
                <el-input v-model="ruleForm.email" class="name"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pwd" >
                <el-input type="password" v-model="ruleForm.pwd" class="name" hidden></el-input>
            </el-form-item>

            <el-form-item label="生日" prop="birth">
                 <el-date-picker
                  v-model="timeValue"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitUser('ruleForm')">确认修改</el-button>
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
          email: '',
          pwd: '',
          birth: '',
          img: '',
          sex: '',
        },
        rules: {
          name: [
            { required: true, message: '名字不可以为空', trigger: 'blur' },
          ],

           email: [
            { required: true, message: '邮箱不可以为空', trigger: 'blur' },
          ],

           pwd: [
            { required: true, message: '密码不可以为空', trigger: 'blur' },
          ],
        },
        userName: '',
        timeValue: '',
        sexSelect: 1,
        indexId: '',
        sexInput: '',
        flag: true,
      };
    },
    mounted() {
      this.getName();
      // this.getParams();
      
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      // getParams() {
			// 	let name = this.$route.query.username;
      //   this.userName = name;
      //    if(name == ' ' || name == undefined || name == '用户') {
      //         this.$message.error('返回登录查看个人信息!')
      //         this.flag = false;
      //       }
      //       else {
      //           this.getUserInfo();
      //           this.flag = true;
			//           console.log(name);
      //       }
      // },
       getName() {
           let name = this.$route.query.nameTra;
           this.userName = name;
           console.log(name);
            if(name == ' ' || name == undefined || name == '用户' ) {
              this.$message.error('返回登录查看个人信息!')
              this.flag = false;
            }
            else {
                this.flag = true;
                this.getUserInfo();
            }
           
       },
      getUserInfo() {
        let url = '/api/query_uname';
        let _this = this;
        this.$http.post(url, {
          aname: _this.userName,
        }, {}).then(function(data) {
          let info = data.data[0];
          _this.ruleForm.name = info.aname;
          if(info.asex == '男') {
            this.sexSelect = 1;
          } else {
            this.sexSelect = 2;
          }
          _this.timeValue = info.abirth.slice(0,10)
          _this.ruleForm.email = info.aemail;
          _this.ruleForm.pwd = info.apwd;
          _this.indexId = info.aid;
          // console.log(data.data[0]);
        })
      },
      submitUser(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url = '/api/upd_admin';
            let _this = this;
             if(this.sexSelect == 1) {
              _this.sexInput = '男'
            } else {
              _this.sexInput = '女'
            }
            this.$http.post(url, {
              name: _this.ruleForm.name,
              sex: _this.sexInput,
              pwd: _this.ruleForm.pwd,
              birth: _this.timeValue,
              email: _this.ruleForm.email,
              aid: _this.indexId
            },{}).then(function(data) {
              let mark = data.body.code;
                if(mark == 1) {
                  this.$message.success('修改成功');
                } else {
                  this.$message.error('修改失败');
                }
            })
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
      resetUser(formName) {
        this.$refs[formName].resetFields();
      },
    }
  }
</script>

<style lang="less">
.add-input {
  width: 600px;
  margin: 0 auto;

  img {
    width: 200px;
    height: 200px;
  }
  .name {
    width: 220px
  }
}
</style>