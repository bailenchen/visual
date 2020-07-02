<template>
  <div id="app">
    <!-- 头部的盒子 -->
    <header>
      <h1>数据可视化-ECharts</h1>
      <div class="show-time">{{ time }}</div>
    </header>

    <!-- 页面主体部分 -->
    <section class="mainbox">
      <div class="column">
        <div class="panel bar">
          <h2>柱形图-就业行业</h2>
          <div class="chart"></div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h2>
            折线图-人员变化
            <a index="0" href="javacript:;">2019</a>
            <a index="1" href="javascript:;">2020</a>
          </h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h2>饼形图-年龄分布</h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <!-- no模块制作 -->
        <div class="no">
          <div class="no-hd">
            <ul>
              <li>125811</li>
              <li>100000</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>前端需求人数</li>
              <li>市场供应人数</li>
            </ul>
          </div>
        </div>
        <!-- 地图模块 -->
        <div class="map">
          <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>
          <div class="chart"></div>
        </div>
      </div>
      <div class="column">
        <div class="panel bar2">
          <h2>柱形图-技能掌握</h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line2">
          <h2>折线图-播放量</h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie2">
          <h2>饼形图-地区分布</h2>
          <div class="chart">图表</div>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { timeFormat } from '@/utils/utils.js'
import '@/utils/china.js'
import {
  echarts_1,
  echarts_2,
  echarts_3,
  echarts_4,
  echarts_5,
  echarts_6,
  echarts_7,
} from '@/utils/echarts.js'
export default {
  mounted() {
    echarts_1()
    echarts_2()
    echarts_3()
    echarts_4()
    echarts_5()
    echarts_6()
    echarts_7()
    this.renderTime()
  },
  data() {
    return {
      time: '0',
    }
  },

  methods: {
    renderTime() {
      timer ? clearTimeout(timer) : null

      var timeString = timeFormat({
        template: '{0}-{1}-{2} {3}:{4}:{5}',
      })

      this.time = timeString

      let timer = setTimeout(() => {
        this.renderTime()
      }, 1000)
    },
  },
}
</script>
<style>
#app {
  height: 100vh;
}
</style>
