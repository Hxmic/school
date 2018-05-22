<template>
    <div>
        <div class="">
            <video src="`${video}`" alt="" class="video">
        </div>
        <div class="img" v-for="item in active" :key="item">
            <a href="item.push">
                <img :src="item.img" alt="">
            </a>
        </div>
    </div>
</template>


<style lang="less">

.video {
    width: 500px;
    height: 300px;
    margin-left: 250px;
}
.img {
    margin-top: 15px;
   margin-left: 320px;
    img {
        
        margin-left: 10px;
         width: 100px;
        height: 100px;
    }
}

</style>

