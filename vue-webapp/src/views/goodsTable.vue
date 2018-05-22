<template>
  
  <div>
      <input type="text" autocomplete="off" class="el-input__inner" placeholder="查询商品">
      <el-button type="primary" @click="onSubmit">查询</el-button>
      <!-- <button></button> -->
    <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}"
        >
        <el-table-column
        prop="name"
        label="商品名"
        sortable
        width="100">
        </el-table-column>

        <el-table-column
        prop="price"
        label="商品价格"
        width="100">
        </el-table-column>

        <el-table-column
        prop="description"
        label="商品描述"
        width="150">
        </el-table-column>

        <el-table-column
        prop="sale"
        label="销量"
        width="100">
        </el-table-column>

    
        <el-table-column
        prop="datetime"
        label="上架日期"
        width="100">
        </el-table-column>

        <el-table-column
        prop="discount"
        label="打折"
        width="100">
        </el-table-column>

        <el-table-column
        prop="location"
        label="商品位置"
        width="100">
        </el-table-column>

        <el-table-column
        prop="person"
        label="发布人员"
        width="100">
        </el-table-column>

        <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
        </template>
        </el-table-column>
    </el-table>
  </div>

  
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '毛巾',
          price: '15',
          description: '轻柔，好用',
          sale: 100,
          comment: '99%',
          datetime: '2016-05-01',
          discount: 9,
          location: '三楼304',
          person: '李四'
        }, {
          name: '电视机',
          price: '3499',
          description: '好用实惠',
          sale: 9999,
          comment: '100%',
          datetime: '2016-05-01',
          discount: 9.5,
          location: '一楼109',
          person: 'admin'
        }, {
          name: '电脑',
          price: '9876',
          description: '便携式',
          sale: 123,
          comment: '89%',
          datetime: '2017-05-01',
          discount: 8,
          location: '六楼620',
          person: '张三'
        }, {
          name: '咖啡',
          price: '15',
          description: '解乏',
          sale: 999,
          comment: '99%',
          datetime: '2018-05-01',
          discount: 0,
          location: '二楼204',
          person: '李四'
        },]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>

<style lang="less">
.el-input__inner {
  width: 200px;
  margin-right: 15px;
}
</style>
