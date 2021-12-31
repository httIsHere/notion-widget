<!--
 * @Author: your name
 * @Date: 2021-12-30 19:19:23
 * @LastEditTime: 2021-12-30 19:53:20
 * @LastEditors: Please set LastEditors
 * @Description: 引用块
 * @FilePath: /notion/widgets/src/components/setting/SvgTime.vue
-->
<template>
  <div class="container wrapper">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="引用样式">
        <el-radio-group v-model="mode">
          <el-radio
            :label="m.id"
            v-for="(m, index) in mode_list"
            :key="`quote-${index}`"
            >{{m.label}}</el-radio
          >
        </el-radio-group>
        <p style="color: orange">『注』：{{mode_list[mode].desc}}引用了特殊字体预览效果可能会有延迟。</p>
      </el-form-item>
      <el-form-item label="文案">
        <el-input
          v-model="content"
          type="textarea"
          maxlength="30"
          show-word-limit
          placeholder="请输入所需展示文案"
        ></el-input>
      </el-form-item>
      <el-form-item label="预览">
        <iframe :src="`${link}${mode_list[mode].key || ''}.html?text=${content}`"></iframe>
      </el-form-item>
      <el-form-item label="链接🔗">
        <el-link
          type="primary"
          icon="el-icon-document-copy"
          v-clipboard:copy="`${link}${mode_list[mode].key || ''}.html?text=${content}`"
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
      form: {},
      mode: 0,
      content: "自定义文案",
      mode_list: [
        {
          id: 0,
          key: 0,
          label: "乳白色字体",
          desc: "适合短分案，大字体，标题等。"
        },
        {
          id: 1,
          key: 2,
          label: "边框阴影文案",
          desc: "适合繁体和英文文案，中等字体，该字体无法识别部分简体字。"
        },
        {
          id: 2,
          key: 3,
          label: "细文字",
          desc: "适合繁体和英文文案，中等字体，该字体无法识别部分简体字。"
        },
        {
          id: 3,
          key: "-EN",
          label: "可爱英文手写体",
          desc: "仅适用于英文。"
        },
      ],
      link: "https://httishere.github.io/notion-widget/quote",
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
  height: 180px;
  outline: none;
  border: none;
}
</style>
