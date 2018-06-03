<template>
<div v-show="flag">
<el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
     <el-table-column
      prop="aname"
      label="用户名"
      sortable
      width="150">
    </el-table-column>

    <el-table-column
      prop="asex"
      label="性别"
      width="150">
    </el-table-column>

    <el-table-column
      prop="aemail"
      label="邮箱"
      width="180">
    </el-table-column>


    <el-table-column
      prop="abirth"
      label="生日"
      :formatter="dateFormat"
      sortable
      width="180">
    </el-table-column>
  
    <el-table-column label="操作">
      <template slot-scope="scope">
        <!-- <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
  
</template>

<script>
import {timeFor} from '../util/util'

  export default {
    data() {
      return {
        tableData: [{
          aname: '王小虎',
          asex: '男',
          aemail: '844863123@qq.com',
          abirth: '2016-05-02',
        }],
        userName: '',
        flag: true,
      }
    },
    mounted() {
      this.getName();
      this.queryUser();
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },

      getName() {
           let name = this.$route.query.nameTra;
           this.userName = name;
            if(name == ' ' || name == undefined || name == '用户') {
              this.$message.error('没有操作权限!')
              this.flag = false;
            }
            else {
                this.queryUser();
                this.flag = true;
			          console.log(name);
            }
           
       },

      queryUser() {
        let url = '/api/query_admin';
        let _this = this;
        this.$http.get(url, {
        },{}).then(function(data) {
          let info = data.data.data;
          _this.tableData = info;
        })
      },

      handleDelete(index, row) {
        console.log(row.aid)
        let url = '/api/del_admin'
        this.$http.post(url, {
          aid : row.aid,
        }, {}).then(function(data) {
          let num = data.data.code;
          console.log(num + 'num')
          if(num == 1) {
            this.$message.success('删除成功');
            this.queryUser();
          } else {
            this.$message.success('删除失败');
          }
        })
      },

      dateFormat(row, column) {
        let date = row[column.property];
        return timeFor(date);
        // let d = new Date(date);
        // let time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' 
        // + d.getDate();
        // return time;
      } 
    }
  }
</script>