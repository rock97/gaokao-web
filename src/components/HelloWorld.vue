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
      <!--<el-col :span="3">-->
        <!--<el-select-->
          <!--v-model="schoolName"-->
          <!--multiple-->
          <!--filterable-->
          <!--remote-->
          <!--reserve-keyword-->
          <!--placeholder="请输入院校名称"-->
          <!--:remote-method="seachSchool"-->
          <!--:loading="loading">-->
          <!--<el-option-->
            <!--v-for="item in optionsSchoolName"-->
            <!--:key="item.value"-->
            <!--:label="item.label"-->
            <!--:value="item.value">-->
          <!--</el-option>-->
        <!--</el-select>-->
      <!--</el-col>-->
      <el-col :span="4">
        <el-input  v-model="schoolName" placeholder="请输入院校"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input  v-model="subjectName" placeholder="请输入专业"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input  v-model="localProvinceName" placeholder="请输入考生所在地"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input  v-model="score" placeholder="高考成绩"></el-input>
      </el-col>
      <el-col :span="1">
        <el-button icon="el-icon-search" circle v-on:click='loadData'></el-button>
      </el-col>
    </el-row>
    <el-table
      height="700"
      ref="filterTable"
      :data="tableData"
      style="width: 100%"
      slot="append"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disabled">
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
        width="80">
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
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[20, 50, 100, 200]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>export default {
  data () {
    return {
      options: [{
        value: '',
        label: '全部年份'
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
      optionsSchoolName: [],
      schoolName:'',
      loading: false,
      year: '',
      subjectName:'',
      localProvinceName:'',
      score:'',
      pageIndex:1,
      pageSize:20,
      total:0,
      currentPage:1
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
    seachSchool(query) {
      if (query != '') {
        this.$axios.post('/score/findSchoolName', {
          name: query
        }).then((response) => {
          console.log(response)
          this.optionsSchoolName = response.data
        })
      }
    },
    load() {
      this.$axios.post('/score/find',{
        schoolName: this.schoolName,
        subjectName: this.subjectName,
        localProvinceName: this.localProvinceName,
        score: this.score,
        year: this.year,
        pageSize:this.pageSize,
        pageIndex:this.pageIndex
      }).then((response) =>{
        this.tableData = response.data.data;
        this.total = response.data.total;
        this.pageSize = response.data.pageSize;
        this.pageIndex = response.data.pageIndex;
      });
    },
    loadData() {
      this.currentPage = 1;
      this.pageIndex = 1
      this.load()
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val
      this.load()
    },
    handleCurrentChange(val) {
      this.pageIndex = val
      console.log(`当前页: ${val}`);
      this.load()
    }
  },
  computed: {
    noMore () {
      return this.count >= 20
    },
    disabled () {
      return this.loading || this.noMore
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
    background-color: #f9fafc;
  }

</style>
