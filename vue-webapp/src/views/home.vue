<template>
  <el-row class="container" style="heitht: 100%">
	  <v-header ></v-header>
    
  </el-row>
</template>

<script>

import headerNav from '@/components/headerNav'
export default {
  
  components: {
	  'v-header' : headerNav
  }
}
</script>
