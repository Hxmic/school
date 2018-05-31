<template>
    <div>
        <p @click="getName">你好</p>
    </div>
</template>

<script>
export default {
    data() {
        return{
            
        }
    },

    created() {
        
    },

    methods: {
       getName() {
           let name = this.$route.query.nameTra;
			console.log(name);
       }
    }
}
</script>

