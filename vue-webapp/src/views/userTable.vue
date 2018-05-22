<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
     <el-table-column
      prop="name"
      label="用户名"
      sortable
      width="150">
    </el-table-column>

    <el-table-column
      prop="sex"
      label="性别"
      width="150">
    </el-table-column>

    <el-table-column
      prop="email"
      label="邮箱"
      width="180">
    </el-table-column>


    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
   
    

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          sex: '男',
          email: '844863123@qq.com',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: 'wang',
          email: '844863123@qq.com',
          sex: '男',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          sex: '男',
          email: '844863123@qq.com',
          name: '李四',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          sex: '女',
          email: '844863123@qq.com',
          name: 'root',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>