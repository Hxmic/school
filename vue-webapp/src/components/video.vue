<template>
    <div class="video">
        
        <el-select v-model="value" placeholder="选择商家" @change="getActive">
            <el-option
            v-for="item in tableData"
            :key="item.cname"
            :label="item.cname"
            :value="item.cname">
            </el-option>
        </el-select>

        <div class="v-movie">
            <img :src="`${this.active}`" alt="">
            <video :src="`${this.video}`" style="width:600px;min-height:400px" class="movie" controls autoplay></video>
            <img :src="`${this.active1}`" alt="">
        </div>
        
    </div>
</template>


<script>
export default {
    data() {
        return {
            tableData: [{
                cid: '',
                cname: '毛巾',
                clocation: '三楼304',
                cinfo: '',
                cimportant: '',
                cactive: '',
                cvideo: '',
                cactive1: '',
            }, ],
             tableData1: [{
                cid: '',
                cname: '毛巾',
                clocation: '三楼304',
                cinfo: '',
                cimportant: '',
                cactive: '',
                cvideo: '',
                cactive1: '',
            }, ],
            value: '佳佳乐',
            active: '',
            video: '',
            active1: '',
        }
    },

    created() {
        this.getMerchant();
        this.getActive();
    },
    methods: {
        getMerchant() {
            let _this = this;
            let url = '/api/query_allactive'
            this.$http.get(url, {
            },{}).then(function(data) {
                let info = data.data.data;
                _this.tableData = info;
            })
        },

        getActive() {
            console.log(this.value)
            let _this = this;
            let url = '/api/query_avtive';
            this.$http.post(url, {
            cname: _this.value,
                    // location: this.qlocation
            },{}).then(function(data) {
                console.log(data)
                let info = data.data[0];
                _this.tableData1 = info;
                _this.active = info.cactive;
                _this.active1 = info.cactive1;
                _this.video = info.cvideo;
            })

        }
    }
}
</script>

<style lang="less">
.video {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .movie {
       width:600px;
       min-height:400px;
       padding: 5px 10px;
    }
    img {
       
        width: 200px;
        min-height: 400px;
    }
}
</style>

