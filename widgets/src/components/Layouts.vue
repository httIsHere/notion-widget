<!--
 * @Author: your name
 * @Date: 2021-12-30 11:49:06
 * @LastEditTime: 2021-12-31 13:58:47
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /notion/widgets/src/components/Layouts.vue
-->
<template>
  <el-container>
    <el-header class="debby" style="border-bottom: 1px solid #f3f3f3;">HTTISHERE Notion Widgets</el-header>
    <el-container>
      <el-aside width="200px"><update-log/></el-aside>
      <el-main>
        <el-container>
          <el-header>
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              :router="true"
              @select="handleSelect"
            >
              <el-menu-item index="/">时间组件</el-menu-item>
              <el-menu-item index="2" disabled>效率组件</el-menu-item>
              <el-menu-item index="others">其他组件</el-menu-item>
              <el-menu-item index="formula" disabled>Notion 公式</el-menu-item>
            </el-menu>
          </el-header>
          <el-main>
            <slot></slot>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import UpdateLog from "../components/UpdateLog.vue";
export default {
  components: { UpdateLog },
  data() {
    return {
      activeIndex: this.$route.name,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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
  font-size: .64rem;
  font-weight: bold;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
  // text-align: center;
  // line-height: 200px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  // text-align: center;
  // line-height: 160px;
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
