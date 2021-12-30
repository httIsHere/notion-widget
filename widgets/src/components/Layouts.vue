<!--
 * @Author: your name
 * @Date: 2021-12-30 11:49:06
 * @LastEditTime: 2021-12-30 14:35:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /notion/widgets/src/components/Layouts.vue
-->
<template>
  <el-container>
    <el-header>HTTISHERE TOOL MGN</el-header>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :router="true"
        @select="handleSelect"
      >
        <el-menu-item index="time">时间相关</el-menu-item>
        <el-menu-item index="2">效率相关</el-menu-item>
        <el-menu-item index="3">其他</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "time",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
};
</script>
<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-size: 24px;
  font-weight: bold;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
.nav {
  width: 200px;
  position: fixed;
  top: 60px;
  bottom: 0;
  overflow-y: auto;
}
.el-menu {
  height: 100%;
}
</style>
