<!--
 * @Author: your name
 * @Date: 2021-12-30 14:34:17
 * @LastEditTime: 2022-01-05 11:39:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /notion/widgets/src/components/Times.vue
-->
<template>
  <div class="container wrapper">
    <el-row :gutter="20">
      <el-col :span="8" v-for="item in times" :key="item.id">
        <el-badge value="新" class="item" :hidden="!item.is_new">
          <el-card
            shadow="hover"
            style="margin-bottom: 10px"
            @click="handleSettingModal(item)"
          >
            <el-descriptions :column="2">
              <div slot="title">
                <img :src="item.cover" alt="" class="image" />
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
              <el-descriptions-item label="链接🔗">
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
                    @click="handleSettingModal(item)"
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
      </el-col>
    </el-row>
    <!-- 自定义Dialog -->
    <el-dialog
      :title="currentItem && currentItem.tag"
      :visible.sync="show_setting_modal"
      width="800px"
      :before-close="handleModalClose"
    >
      <component :is="currentComponent"></component>
    </el-dialog>
  </div>
</template>
<script>
import Quarterly from "./setting/Quarterly.vue";
import DayMatter from "./setting/DayMatter.vue";
import CalendarByWeek from "./setting/CalendarByWeek.vue";
import SvgTime from "./setting/SvgTime.vue";
import MulDays from "./setting/mul-days.vue";
export default {
  components: {
    quarterly: Quarterly,
    dayMatter: DayMatter,
    calendarByWeek: CalendarByWeek,
    svgTime: SvgTime,
    mulDays: MulDays,
  },
  data() {
    return {
      times: [
        {
          id: 11,
          cover:
            "https://gitee.com/httishere/blog-image/raw/master/img/20220105113554.png",
          style: ["卡片"],
          tag: "多项倒计时",
          note: "可设置多项倒计时",
          link: "mul-days",
          link_type: "setting",
          link_label: "去自定义",
          use: "自定义链接后嵌入Notion",
          is_new: true,
        },
        {
          id: 10,
          cover:
            "https://gitee.com/httishere/blog-image/raw/master/img/Xnip2022-01-04_16-02-47.jpg",
          style: ["colorful"],
          tag: "纵向时间进度条",
          note: "无需参数",
          link: "https://httishere.github.io/notion-widget/new/progress-vertical.html",
          link_type: "copy",
          use: "复制链接直接嵌入Notion",
          is_new: true,
        },
        {
          id: 9,
          cover:
            "https://gitee.com/httishere/blog-image/raw/master/img/Xnip2022-01-04_16-02-18.jpg",
          style: ["colorful"],
          tag: "时间进度条",
          note: "无需参数",
          link: "https://httishere.github.io/notion-widget/new/progress.html",
          link_type: "copy",
          use: "复制链接直接嵌入Notion",
          is_new: true,
        },
        {
          id: 8,
          cover:
            "https://gitee.com/httishere/blog-image/raw/master/img/20220104112833.png",
          style: ["简约"],
          tag: "周进度",
          note: "无需参数",
          link: "https://httishere.github.io/notion-widget/new/week-ceils.html",
          link_type: "copy",
          use: "复制链接直接嵌入Notion",
          is_new: true,
        },
        {
          id: 7,
          cover:
            "https://gitee.com/httishere/blog-image/raw/master/img/20220104111624.png",
          style: ["黑白"],
          tag: "年度格子",
          note: "无需参数",
          link: "https://httishere.github.io/notion-widget/new/year-block.html",
          link_type: "copy",
          use: "复制链接直接嵌入Notion",
          is_new: true,
        },
        {
          id: 6,
          cover:
            "https://gitee.com/httishere/blog-image/raw/master/img/QQ20211230-182424-HD%20(1).gif",
          style: ["colorful"],
          tag: "动画缤纷时钟",
          note: "无需参数",
          link: "svgTime",
          link_type: "setting",
          link_label: "自定义模式",
          use: "复制链接直接嵌入Notion",
          is_new: true,
        },
        {
          id: 1,
          cover:
            "https://gitee.com/httishere/blog-image/raw/master/img/20211230144940.png",
          style: ["简约", "黑白"],
          tag: "进度时钟",
          note: "无需参数",
          link: "https://httishere.github.io/notion-widget/progress.html",
          link_type: "copy",
          use: "复制链接直接嵌入Notion",
        },
        {
          id: 2,
          cover:
            "https://gitee.com/httishere/blog-image/raw/master/img/20211230151833.png",
          style: ["简约"],
          tag: "季度进度条",
          note: "可带参数",
          link: "quarterly",
          link_type: "setting",
          link_label: "去自定义",
          use: "自定义链接后嵌入Notion",
        },
        {
          id: 3,
          cover:
            "https://gitee.com/httishere/blog-image/raw/master/img/20211230170132.png",
          style: ["简约"],
          tag: "日历",
          note: "无需参数",
          link: "https://httishere.github.io/notion-widget/calendar.html",
          link_type: "copy",
          use: "复制链接直接嵌入Notion",
        },
        {
          id: 4,
          cover:
            "https://gitee.com/httishere/blog-image/raw/master/img/%E6%9C%AA%E5%91%BD%E5%90%8D52.jpg",
          style: ["渐变", "黑白"],
          tag: "倒数日",
          note: "需带参数",
          link: "dayMatter",
          link_type: "setting",
          link_label: "去自定义",
          use: "自定义链接后嵌入Notion",
        },
        {
          id: 5,
          cover:
            "https://gitee.com/httishere/blog-image/raw/master/img/20211230174314.png",
          style: ["简约"],
          tag: "范围日历",
          note: "需带参数，小跨度",
          link: "calendarByWeek",
          link_type: "setting",
          link_label: "去自定义",
          use: "自定义链接后嵌入Notion",
        },
      ],
      show_setting_modal: true,
      currentItem: null,
      currentComponent: "mulDays",
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
      console.log(item);
      if (item.link_type !== "setting") return;
      this.currentItem = item;
      this.currentComponent = item.link;
      this.show_setting_modal = true;
    },
    handleModalClose() {
      this.currentItem = null;
      this.currentComponent = null;
      this.show_setting_modal = false;
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
</style>
