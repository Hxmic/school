<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户名"
      sortable
      width="180">
    </el-table-column>
   
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        userName: '',
      }
    },
    mounted() {
      this.getParams();
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      getParams() {
				let name = this.$route.query.username;
        this.userName = name;
        console.log(name)
			},
    }
  }
</script>