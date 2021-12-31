<!--
 * @Author: your name
 * @Date: 2021-12-30 19:19:23
 * @LastEditTime: 2021-12-31 16:18:28
 * @LastEditors: Please set LastEditors
 * @Description: 引用块
 * @FilePath: /notion/widgets/src/components/setting/SvgTime.vue
-->
<template>
  <div class="container wrapper">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="样式">
        <el-radio-group v-model="mode">
          <el-radio
            :label="m.key"
            v-for="(m, index) in mode_list"
            :key="`quote-${index}`"
            >{{m.label}}</el-radio
          >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="链接🔗">
        <el-link
          type="primary"
          icon="el-icon-document-copy"
          v-clipboard:copy="`${link}/${mode}`"
          v-clipboard:success="handleCopy"
          >复制链接</el-link
        >
      </el-form-item>
      <el-form-item label="预览">
        <div class="prev">
          <today :style-mode="mode" />
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Today from "../../widget/Today.vue";
export default {
  components: { Today },
  data() {
    return {
      form: {},
      mode: 'w',
      content: "自定义文案",
      mode_list: [
        {
          id: 0,
          key: 'w',
          label: "白色卡片",
        },
        {
          id: 1,
          key: 'b',
          label: "黑色卡片",
        },
      ],
      link: this.$global_path + "/wid/today",
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
.prev {
  // width: 6rem;
  // height: 8rem;
  outline: none;
  border: none;
}
</style>
