<!--
 * @Author: your name
 * @Date: 2021-12-30 16:33:58
 * @LastEditTime: 2021-12-30 16:55:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /notion/widgets/src/components/setting/Quarterly.vue
-->
<template>
  <div class="container wrapper">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="设置年份">
        <el-date-picker
          v-model="form.year"
          type="year"
          format="yyyy"
          value-format="yyyy"
          placeholder="选择年"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="预览">
        <iframe :src="`${link}?year=${form.year}`"></iframe>
      </el-form-item>
      <el-form-item label="链接🔗">
        <el-link
          type="primary"
          icon="el-icon-document-copy"
          v-clipboard:copy="`${link}?year=${form.year}`"
          v-clipboard:success="handleCopy"
          >复制链接</el-link
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        year: "2022",
      },
      link: "https://httishere.github.io/notion-widget/quarterly-progress.html",
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
  width: 100%;
  height: 200px;
  outline: none;
  border: none;
}
</style>
