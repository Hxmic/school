<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
     <el-table-column
      prop="name"
      label="商场名"
      sortable
      width="150">
    </el-table-column>

    <el-table-column
      prop="introduce"
      label="商场简介"
      width="150">
    </el-table-column>

  

    <el-table-column
      prop="important"
      label="主营业务"
      width="180">
    </el-table-column>

    <el-table-column
      prop="phone"
      label="联系方式"
      width="180">
    </el-table-column>
   
    <el-table-column
      prop="address"
      label="地址"
      :formatter="formatter">
    </el-table-column>

    <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">访问主页</el-button>
            
        </template>
        </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '万达',
          introduce: '万达是一个独立的大商场',
          phone: 13112341234,
          important: '主要包含各种娱乐设施，以及电影院',
          address: '吉林省吉林市龙潭区'
         
        }, {
          name: '一百货',
          introduce: '一百货是一个独立的大商场',
          phone: 13112341234,
          important: '主要售卖各种新颖的衣服',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          name: '百货大楼',
          introduce: '百货大楼',
          phone: 13112341234,
          important: '主要包含各种娱乐设施，以及电影院',
          address: '吉林市吉林市北华大学对过'
        }, {
          name: '万达',
          introduce: '万达是一个独立的大商场',
          phone: 13112341234,
          important: '主要包含各种娱乐设施，以及电影院',
          address: '上海市普陀区金沙江路 1517 弄'
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