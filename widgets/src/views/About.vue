<!--
 * @Author: your name
 * @Date: 2021-12-30 11:41:28
 * @LastEditTime: 2022-01-05 15:42:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /notion/widgets/src/views/About.vue
-->
<template>
  <div class="about">
    <!-- <iframe
    id="bili-iframe"
      src="https://space.bilibili.com/19225439/fans/fans"
    /> -->
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    const _this = this;
    this.$nextTick(function() {
      setTimeout(function() {
        let _html = $('#bili-iframe').content;
        console.log(_html)
        // _this.loaded()
      }, 5000)
    })
  },
  methods: {
    loaded() {
      let allUp = [],
        pageIndex = 1,
        num = 0,
        putData = () => {
          let onePage = [];

          $(".cover").each((i, item) => {
            let data0 = {
              name: $(".fans-name")[i].innerHTML,
              id: item.pathname.replace(/\//g, ""),
            }; // ID用户名

            let data1 = $.ajax({
              url: `https://api.bilibili.com/x/space/acc/info?mid=${data0.id}&jsonp=jsonp`,
              async: false,
              xhrFields: { withCredentials: true },
            }); // 个人信息

            num++; // num+1

            console.log(data0)

            onePage.push(data0); // 将data0对象添加到onePage数组里

            // console.log(
            //   ` ${num} ${data0.id} ${data0.name} ${user00} ${user01} ${user02} ${user03} ${user04} ${user05} ${user06} ${user07} ${user08} ${user09} ${user10} ${user11} ${user12} ${user13} ${user14} ${user15} ${user16} ${user17} ${user18} ${user19} ${user20} ${user21} ${user22} ${user23} ${user24} ${user25} ${user26} ${user27} ${user28} `
            // );

            if (i === $(".cover").length - 1) {
              allUp.push(onePage);

              if ($(".be-pager-next")[0].classList.length === 1) {
                pageIndex++;
                $(".be-pager-next").click();
                setTimeout(() => {
                  putData();
                }, 100);
              } else {
                console.log("已完成");
              }
            }
          });
        };

      putData();
      console.log(allUp)
    },
  },
};
</script>
<style lang="less" scoped>
iframe {
  width: 100%;
  height: 100vh;
}
</style>
