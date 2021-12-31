<!--
 * @Author: your name
 * @Date: 2021-12-30 17:24:07
 * @LastEditTime: 2021-12-30 17:40:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /notion/widgets/src/components/setting/DayMatter.html
-->
<template>
  <div class="container wrapper">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="目标日">
        <el-date-picker
          v-model="form.day"
          type="date"
          format="yyyy/MM/dd"
          value-format="yyyy/MM/dd"
          placeholder="选择日期"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="目标名称">
        <el-input v-model="form.name" placeholder="目标名称不超过5个字"></el-input>
      </el-form-item>
      <el-card v-for="(item, index) in link" :key="`preview-${index}`" style="margin-bottom: 10px;">
        <el-form-item :label="`预览${index + 1}`">
          <iframe :src="`${item}?day=${form.day}&name=${form.name}`"></iframe>
        </el-form-item>
        <el-form-item label="链接🔗">
          <el-link
            type="primary"
            icon="el-icon-document-copy"
            v-clipboard:copy="`${item}?day=${form.day}&name=${form.name}`"
            v-clipboard:success="handleCopy"
            >复制链接</el-link
          >
        </el-form-item>
      </el-card>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        day: "2021/12/31",
        name: "2021结束",
      },
      link: [
        "https://httishere.github.io/notion-widget/days-matter2.html",
        "https://httishere.github.io/notion-widget/days-matter.html",
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now();
        },
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
  width: 320px;
  height: 320px;
  outline: none;
  border: none;
}
</style>
