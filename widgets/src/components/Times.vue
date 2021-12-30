<!--
 * @Author: your name
 * @Date: 2021-12-30 14:34:17
 * @LastEditTime: 2021-12-30 15:16:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /notion/widgets/src/components/Times.vue
-->
<template>
  <div class="container wrapper">
    <el-row :gutter="20">
      <el-col :span="8" v-for="(item, index) in times" :key="item.id">
        <el-card shadow="hover">
          <el-descriptions>
            <div slot="title">
              <img
                :src="item.cover"
                alt=""
                class="image"
              />
            </div>
            <el-descriptions-item label="风格">
              <el-tag size="small" type="warning">{{item.style}}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="标签">
              <el-tag size="small">{{item.tag}}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="备注">
              <el-tag size="small" type="danger">{{item.note}}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="链接🔗">
              <el-link type="primary" :href="item.link">复制链接</el-link>
            </el-descriptions-item>
            <el-descriptions-item label="用法"
              >{{item.use}}</el-descriptions-item
            >
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      times: [
        {
          id: 1,
          cover: 'https://gitee.com/httishere/blog-image/raw/master/img/20211230144940.png',
          style: "简约",
          tag: "进度时钟",
          note: "无需参数",
          link: "https://httishere.github.io/notion-widget/progress.html",
          use: "链接直接嵌入Notion",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  height: 160px;
  object-fit: contain;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
