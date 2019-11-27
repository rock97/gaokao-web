<template>
  <div class="hello">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-select id="year" v-model="value" placeholder="请选择年份">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-input id="schoolName" v-model="input" placeholder="请输入院校名称"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input id="subjectName" v-model="input" placeholder="请输入专业"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input id="score" v-model="input" placeholder="请输入高考成绩"></el-input>
      </el-col>
      <el-col :span="1">
        <el-button icon="el-icon-search" circle v-on:click='getScoreLine'></el-button>
      </el-col>
    </el-row>
    <el-table
      ref="filterTable"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="schoolName"
        label="高校"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="subjectName"
        label="专业"
        width="280">
      </el-table-column>
      <el-table-column
        prop="localProvinceName"
        label="生源地"
        width="180">
      </el-table-column>
      <el-table-column
        prop="studentType"
        label="科目类型"
        width="100">
      </el-table-column>
      <el-table-column
        prop="maxScore"
        label="最高分"
        sortable
        width="50">
      </el-table-column>
      <el-table-column
        prop="averageScore"
        label="平均分"
        sortable
        width="50">
      </el-table-column>
      <el-table-column
        prop="minScore"
        label="最低分"
        sortable
        width="50">
      </el-table-column>
      <el-table-column
        prop="year"
        label="年份"
        width="80"
        :filters="[{ text: '2014', value: '2014' }, { text: '2015', value: '2015' }, { text: '2016', value: '2016' }, { text: '2017', value: '2017' }, { text: '2018', value: '2018' }]"
        :filter-method="filterTag">
      </el-table-column>
    </el-table>
  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
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
      tableData: [],
      value: ''
    }
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date');
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.year == value;
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    getScoreLine() {
      this.$axios.post('/score/find',{
        schoolName: this.schoolName,
        subjectName: this.subjectName,
        localProvinceName: this.localProvinceName,
        score: this.score,
        year: this.year
      }).then((response) =>{
        this.tableData = response.data;
      });
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
