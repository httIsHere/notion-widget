<!--
 * @Author: your name
 * @Date: 2021-12-31 09:13:52
 * @LastEditTime: 2022-01-04 17:23:10
 * @LastEditors: Please set LastEditors
 * @Description: 历史上的今天
 * @FilePath: /notion/widgets/src/widget/HistoryToday.vue
-->
<template>
  <div class="container wrapper his-today">
    <h2><em>-</em>{{year}} / {{month}} / {{day}}<em>-</em></h2>
    <el-timeline :reverse="true">
      <el-timeline-item
        v-for="(activity, index) in list"
        :key="index"
        :timestamp="activity.year"
        :color="index%2===0?'teal':''"
        placement="top"
      >
        <p v-html="activity.title"></p>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      year: "",
      month: "",
      day: "",
    };
  },
  mounted() {
    const _this = this;
    let _today = new Date(),
      month,
      day;
    this.year = _today.getFullYear();
    (month = _today.getMonth() + 1), (day = _today.getDate());
    month = month > 9 ? month : `0${month}`;
    day = day > 9 ? day : `0${day}`;
    (_this.month = month), (_this.day = day);
    this.getHisToday(month);
  },
  methods: {
    getHisToday(month) {
      let _date = `${this.month}${this.day}`;
      let today_list = localStorage.getItem(`his_${_date}`);
      if(today_list){
          this.list = JSON.parse(today_list);
          return
      }
      const _this = this;
      _this.$axios
        .get(`https://baike.baidu.com/cms/home/eventsOnHistory/${month}.json`)
        .then((res) => {
          let data = res.data;
          _this.formatData(data[month]);
        });
    },
    formatData(data) {
      let _date = `${this.month}${this.day}`;
      let list = data[_date];
      this.list = list;
      localStorage.setItem(`his_${_date}`, JSON.stringify(list));
    },
  },
};
</script>
<style lang="less" scoped>
.container {padding: .666667rem;}
h2 {text-align: center; margin: 0;margin-bottom: .666667rem; font-family: cursive; font-size: .96rem;
    em {color: teal; font-size: .96rem; margin: 0 .266667rem;}
}
</style>