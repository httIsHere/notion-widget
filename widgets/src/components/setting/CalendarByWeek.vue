<!--
 * @Author: your name
 * @Date: 2021-12-30 17:24:07
 * @LastEditTime: 2021-12-30 18:08:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /notion/widgets/src/components/setting/DayMatter.html
-->
<template>
  <div class="container wrapper">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="日期范围">
        <el-date-picker
          v-model="form.day"
          type="daterange"
          align="right"
          unlink-panels
          format="yyyy/MM/dd"
          value-format="yyyy/MM/dd"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </el-form-item>
      <template v-if="form.day.length > 0">
        <el-form-item :label="`预览`">
          <iframe
            :src="`${link}?start=${form.day[0]}&end=${form.day[1]}`"
          ></iframe>
        </el-form-item>
        <el-form-item label="链接🔗">
          <el-link
            type="primary"
            icon="el-icon-document-copy"
            v-clipboard:copy="`${link}?start=${form.day[0]}&end=${form.day[1]}`"
            v-clipboard:success="handleCopy"
            >复制链接</el-link
          >
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        day: [],
      },
      link: "https://httishere.github.io/notion-widget/calendarByWeek.html",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now();
        },
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
    };
  },
  methods: {
    handleCopy() {
      this.$message({
        message: "复制成功，快去Notion体验一下吧",
        type: "success",
      });
    },
  },
};
</script>
<style lang="less" scoped>
iframe {
  width: 620px;
  height: 320px;
  outline: none;
  border: none;
}
</style>
