<template>
    <div class="winning" ref="root">

        <button @click="getPhoneInfo">获取</button>
        <div>
            <p>高度：<span>{{this.h}}</span> </p>
            <p>宽度：<span>{{this.w}}</span> </p>
            <p>UA: <span>{{this.UA}}</span></p>
        </div>
        
        <button @click="updPhoneInfo">上传</button>

    </div>
</template>
<script>

export default {
    layout: 'mobile',
    head() {
        return {
            title: '信息',
        }
    },
    data() {
        return {
           h: '',
           w: '',
           UA: '',
        //    name: ''
        }
    },
    mounted() {
    },
    methods: {

        getPhoneInfo() {
            let height = window.screen.height;
            let width = window.screen.width;
            let ua = navigator.userAgent;
            // let name = navigator.platform;
            this.h = height;
            this.w = width;
            this.UA = ua;
            // this.name = name;
        },

        updPhoneInfo() {
            let _this = this;
            var url = '/api/add_phoneinfo';
                this.$http.post(url, {
                  height: _this.h,
                  width: _this.w,
                  ua: _this.UA
                },{}).then(function(data) {
                //   console.log(data.body.code);
                  if(data.body.code == 0) {
                    alert('添加失败')
                  } else {
                    alert('添加成功')
                  }
                })
        },


        setMinHeight() {
            const root = this.$refs.root;

            if (root) {
                const height = root.offsetHeight;
                const screenHeight = document.documentElement.clientHeight;

                if (height < screenHeight) {
                    root.style.minHeight = screenHeight + 'px';
                }
            }
        },
    }
}
</script>

<style>

button {
    width: 50px;
    height: 25px;
}
p {
    font-size: 0.3rem;
}
span {
    font-size: 0.3rem;
}
</style>

  