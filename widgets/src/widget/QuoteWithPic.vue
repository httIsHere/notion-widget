<!--
 * @Author: your name
 * @Date: 2021-12-30 20:01:35
 * @LastEditTime: 2021-12-30 21:51:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /notion/widgets/src/widget/QuoteWithPic.vue
-->
<template>
    <div class="container wrapper">
        <img :src="images[mode]" alt="" class="bg">
        <div class="inner">如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以如果可以</div>
    </div>
</template>
<script>
import test_img from "../assets/WechatIMG1124.jpeg";
export default {
    data() {
        return {
            images: [test_img],
            mode: 0
        }
    }
}
</script>
<style lang="less" scoped>
.container {position: relative; height: 100vh; width: 100vw; z-index: 1;
    .inner {width: 100%; height: 100%; background: rgba(0,0,0,0.2); color: #ffffff;
        font-size: .64rem; display: flex; align-items: center;justify-content: center;
        box-sizing: border-box;padding: .4rem; text-align: center;
    }
}
.bg {position: absolute; width: 100%; height: 100%; object-fit: cover; z-index: -1;}
</style>