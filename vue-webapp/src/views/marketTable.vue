<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
     <el-table-column
      prop="mname"
      label="商场名"
      sortable
      width="100">
    </el-table-column>

    <el-table-column
      prop="mintroduce"
      label="商场简介"
      width="240">
    </el-table-column>
    <el-table-column
      prop="mimportant"
      label="主营业务"
      width="240">
    </el-table-column>

    <el-table-column
      prop="mlocation"
      label="地址"
      width="240"
      >
    </el-table-column>

    <el-table-column
      prop="mphone"
      label="联系方式"
      width="150">
    </el-table-column>
   
    

    <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button @click="handleReq(scope.$index, scope.row)" type="text" size="small">访问主页</el-button>
        </template>
        </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          mname: '万达',
          mintroduce: '万达是一个独立的大商场',
          mimportant: '主要包含各种娱乐设施，以及电影院',
          mlocation: '吉林省吉林市龙潭区',
          mphone: '1234556777',
          
        }]
      }
    },
    created() {
      this.getName();
      this.getInfo();
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      getInfo() {
            let url = '/api/query_market';
            let _this = this;
            this.$http.get(url, {
            },{}).then(function(data) {
              let info = data.data.data;
              _this.tableData = info;
            })
      },

      handleReq(index, row) {
        this.$router.push({
            path: '/market_home',
            query: {
              marketId: row.mid,
              name: row.mname,
              introduce: row.mintroduce,
              important: row.mimportant,
              location: row.mlocation,
              phone: row.mphone
          }
        })
        // this.$router.push({
        //   paht: '/home/market_home'
        // })
        console.log(row.mid);
      },
       getName() {
           let name = this.$route.query.nameTra;
			     console.log(name);
       }
    }
  }
</script>