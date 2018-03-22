<template>
  <!-- <layout> -->
    <div class="dashboard-head" slot="content">
      <h2 class="title-h2">今日最新信息统计</h2>
      <div class="head-content">
        <div class="content-item">
            <div class="sale">
              <Card :bordered="true">
                  <p slot="title">总销售额</p>
                  <h1>¥<span id="num1">123456</span></h1>
              </Card>
            </div>
        </div>
         <div class="content-item">
            <div class="sale">
              <Card :bordered="true">
                  <p slot="title">总销售额</p>
                  <h1>¥<span id="num2">123456</span></h1>
              </Card>
            </div>
        </div>
         <div class="content-item">
            <div class="sale">
              <Card :bordered="true">
                  <p slot="title">总销售额</p>
                  <h1>¥<span id="num3">123456</span></h1>
              </Card>
            </div>
        </div>
         <div class="content-item">
            <div class="sale">
              <Card :bordered="true">
                  <p slot="title">总销售额</p>
                  <h1>¥<span id="num4">123456</span></h1>
              </Card>
            </div>
        </div>
      </div>
 <!-- 详细图表 -->
      <div class="dashboard-tabs">
        <h2 class="title-h2">详细信息统计表</h2>
        <div class="select-timer">
          <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
          <Button type="info">筛选</Button>
        </div>

        <div class="chart-wraper">
          <div class="chart-item">
            <div class="chart-content">
              <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
            </div>
          </div>
          <div class="chart-item">
            <div class="chart-content">
              <ve-line :data="chartData" :settings="chartSettings"></ve-line>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- </layout> -->
</template>

<script>
import CountUp from 'countup'

export default {
  name: 'Dashboard',
  data () {
    return {
      model1: ''
    }
  },
  mounted () {
    new CountUp('num1', 0, 123456, 1, 1).start()
    new CountUp('num2', 0, 123456, 1, 1.5).start()
    new CountUp('num3', 0, 123456, 1, 2).start()
    new CountUp('num4', 0, 123456, 1, 2.5).start()
  },
  methods: {
  },
  created () {
    this.chartData = {
      columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
      rows: [
        { 日期: '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, 占比: 0.12, 其他: 100 },
        { 日期: '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, 占比: 0.345, 其他: 100 },
        { 日期: '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, 占比: 0.7, 其他: 100 },
        { 日期: '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, 占比: 0.31, 其他: 100 },
        { 日期: '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, 占比: 0.12, 其他: 100 },
        { 日期: '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, 占比: 0.90, 其他: 100 }
      ]
    }
    this.chartSettings = {}
  }
}
</script>

<style scoped>

.chart-content{
  width: 100%;
  min-height: 400px;
}
.chart-wraper>.chart-item{
  width: 50%;
  float: left;
  box-sizing: border-box;
  padding: 10px;
}
.chart-wraper{
  width: 100%;
  height: 100px;

}
.select-timer{
  float: right;
  margin-top: -42px;
}
.title-h2 {
  margin: 20px 0;
}
.head-content {
  width: 100%;
  display: flex;
}
.content-item {
  flex: 1;
  margin: 0 20px;
}
.sale {
  background: #eee;
  padding: 5px;
}
.sale p {
  color: #c1c1c1;
}
</style>
