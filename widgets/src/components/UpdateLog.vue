<!--
 * @Author: your name
 * @Date: 2021-12-30 15:28:30
 * @LastEditTime: 2021-12-31 17:42:50
 * @LastEditors: Please set LastEditors
 * @Description: 更新记录
 * @FilePath: /notion/widgets/src/components/UpdateLog.vue
-->
<template>
  <div class="block">
    <el-timeline>
      <router-link :to="{name: 'today'}">hhh</router-link>
      <h4>更新日志：</h4>
      <el-timeline-item
        :timestamp="item.date"
        placement="top"
        v-for="(item) in logs"
        :key="item.date"
        :icon="item.icon"
        :type="item.type"
      >
      {{ item.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logs: [
        // {
        //   date: "2022/01/03",
        //   author: "httishere",
        //   content: "HTT组件库正式上线！！",
        //   icon: "el-icon-success",
        //   type: "warning",
        // },
        {
          date: "2021/12/31",
          author: "httishere",
          content: "新增组件“历史上的今天”和“今日诗词”",
          icon: "el-icon-success",
          type: "success",
          link: {name: 'today'}
        },
        {
          date: "2021/12/30",
          author: "httishere",
          content: "基本组件汇总，动态时钟实现",
          icon: "el-icon-success",
          type: "success",
          link: null
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.block {
  padding: 50px 0;
}
.content {
  line-height: 1.2;
}
</style>
