<template>
  <div class="hello">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-select v-model="year" placeholder="请选择年份">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-input v-model="input" placeholder="请输入院校名称"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input v-model="input" placeholder="请输入专业"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input v-model="input" placeholder="请输入高考成绩"></el-input>
      </el-col>
      <el-col :span="4"> </el-col>
      <el-col :span="4"> </el-col>
      <el-col :span="4"> </el-col>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%"
      height="250">
      <el-table-column
        fixed
        prop="date"
        label="院校"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="专业"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="年份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="最高分"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="平均分"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="最低分"
        width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>export default {
  data () {
    return {
      options: [{
        value: '',
        label: '全部'
      }, {
        value: '2014',
        label: '2014'
      }, {
        value: '2015',
        label: '2015'
      }, {
        value: '2016',
        label: '2016'
      }, {
        value: '2017',
        label: '2017'
      }, {
        value: '2018',
        label: '2018'
      }, {
        value: '2019',
        label: '2019'
      }],
      year: ''
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
