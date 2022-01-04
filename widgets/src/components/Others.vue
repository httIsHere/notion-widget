<template>
  <div class="container wrapper">
    <el-row :gutter="20">
      <el-col :span="8" v-for="item in times" :key="item.id">
        <div>
        <el-badge value="新" class="item" :hidden="!item.is_new">
          <el-card shadow="hover" style="margin-bottom: 10px">
            <el-descriptions :column="2">
              <div slot="title">
                <img :src="item.cover" alt="" class="image" @click="handlePreview(item)" />
              </div>
              <el-descriptions-item label="名称">
                <el-tag size="small">{{ item.tag }}</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="风格">
                <el-tag
                  size="small"
                  type="warning"
                  v-for="s in item.style"
                  :key="s"
                  style="margin-right: 5px"
                  >{{ s }}</el-tag
                >
              </el-descriptions-item>
              <el-descriptions-item label="备注">
                <el-tag size="small" type="danger">{{ item.note }}</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="使用">
                <template v-if="item.link_type === 'copy'">
                  <el-link
                    type="primary"
                    icon="el-icon-document-copy"
                    v-clipboard:copy="item.link"
                    v-clipboard:success="handleCopy"
                    >复制链接</el-link
                  >
                </template>
                <template v-else-if="item.link_type === 'setting'">
                  <el-link
                    type="danger"
                    icon="el-icon-edit"
                    @click.stop="handleSettingModal(item)"
                    >{{ item.link_label }}</el-link
                  >
                </template>
              </el-descriptions-item>
              <el-descriptions-item label="用法">{{
                item.use
              }}</el-descriptions-item>
            </el-descriptions>
          </el-card>
        </el-badge>
        </div>
      </el-col>
    </el-row>
    <!-- 自定义Dialog -->
    <el-dialog
      :title="currentItem && currentItem.tag"
      :visible.sync="show_setting_modal"
      width="700px"
      :before-close="handleModalClose"
    >
      <component :is="currentComponent"></component>
    </el-dialog>
    <!-- 预览 -->
    <el-dialog
      title="组件预览"
      :visible.sync="show_preview"
      width="600px"
      :before-close="handleModalClose"
    >
      <img :src="currentItem && currentItem.cover" alt="" class="preview-cover" />
    </el-dialog>
  </div>
</template>
<script>
import Quote from "./setting/Quote.vue";
import Today from "./setting/Today.vue";
export default {
  components: {
    quote: Quote,
    today: Today
  },
  data() {
    return {
      times: [
        {
          id: 3,
          cover: 'https://gitee.com/httishere/blog-image/raw/master/img/today.jpg',
          style: ["黑白", "随机"],
          tag: "今日诗词",
          note: "无需参数",
          link: "today",
          link_type: "setting",
          link_label: "选择不同样式",
          use: "自定义链接后嵌入Notion",
          is_new: true,
        },
        // {
        //   id: 2,
        //   cover:
        //     "https://gitee.com/httishere/blog-image/raw/master/img/20211231103209.png",
        //   style: ["时间轴"],
        //   tag: "历史上的今天",
        //   note: "需带参数",
        //   link: this.$global_path + "/wid/history-today",
        //   link_type: "copy",
        //   use: "复制链接后嵌入Notion",
        //   is_new: true,
        // },
        {
          id: 1,
          cover:
            "https://gitee.com/httishere/blog-image/raw/master/img/20211230194341.png",
          style: ["多样式", "英文"],
          tag: "引用块",
          note: "需带参数",
          link: "quote",
          link_type: "setting",
          link_label: "选择不同样式",
          use: "自定义链接后嵌入Notion",
        },
      ],
      show_setting_modal: false,
      currentItem: null,
      currentComponent: "today",
      show_preview: false,
    };
  },
  methods: {
    handleCopy() {
      this.$message({
        message: "复制成功，快去Notion体验一下吧",
        type: "success",
      });
    },
    handleSettingModal(item) {
      this.currentItem = item;
      this.currentComponent = item.link;
      this.show_setting_modal = true;
    },
    handleModalClose() {
      this.currentItem = null;
      this.currentComponent = null;
      this.show_setting_modal = false;
      this.show_preview = false;
    },
    handlePreview(item) {
      this.currentItem = item;
      this.show_preview = true;
    },
  },
};
</script>
<style lang="less" scoped>
.image {
  width: 100%;
  display: block;
  height: 160px;
  object-fit: contain;
}
.el-descriptions__title {
  width: 100%;
}
.preview-cover { width: 100%;}
</style>
