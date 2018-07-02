<template>
    <div class="rule" ref="root">
        <header class="header">
            <div class="back" @click="back"></div>
            <h2>答题规则</h2>
        </header>
    </div>
</template>

<script>
import native from '~/plugins/native';

export default {
    layout: 'mobile',
    head() {
        return {
            title: "答题规则",
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        this.setMinHeight();
    },
    methods: {
        back() {
            native.closeWebview();
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

<style lang="less" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .9rem;
    z-index: 1000;
    background: #FF9C59;
    h2 {
        font-size: .36rem;
        color: #fff;
        line-height: .9rem;
        margin: 0;
        text-align: center;
        font-weight: normal;
    }

    .back {
        width: .36rem;
        height: .28rem;
        background: url("~assets/img/hybird/common/back-white.png") no-repeat;
        background-size: 100%;
        position: absolute;
        top: .3rem;
        left: .24rem;
    }
}

</style>


