<template>  
    <div class="Login">
        <form id="login_in">
            <input type="text"  placeholder="请输入用户名" v-model="usName"/><label for=""></label>
            <input type="password"  placeholder="请输入密码" v-model="usPsw"/>
            <input type="submit" class="sub_btn" @click="subLogin" value="登    录"/>
        </form>
    </div>
</template>
<script type="text/javascript">
export default{
    data() {
        return{
            usName: '',
            usPsw: ''
        } 
    },
    methods: {
        subLogin() {
            var url="/api/signin";
            this.$http.get(url,{
                // username: this.username,
                // userpsw: this.psw
            },{}).then(function(data){
                let lenArray = data.data.data;
                for(let i = 0; i< lenArray.length; i++) {
                  console.log( this.usName + '你是那个');

                  if(this.usName == lenArray[i].username) {
                    alert('正确')
                    return;
                  }
                }
            },function(response){
                // console.log(response);
            })
        },
    }
}
</script>
<style scoped>
    .Login a{
        text-decoration: none;
        color: #E23A6E;
    }
    .Login form{
        width: 100%;
        height: 100%;
    }
    .Login input{
        width: 50%;
        height: 40px;
        margin-top: 30px;
        border: 1px solid #E23A6E;
        border-radius: 20px;
        outline: none;
        font-family: "arial rounded mt bold";
        padding-left: 10px;
        font-size: 18px;
    }
    .sub_btn{
        cursor: pointer;
        background: none;
        color: #E23A6E;
    }
    .sub_btn:hover{
        background: #E23A6E;
        color: #FFFFFF;
    }
</style>