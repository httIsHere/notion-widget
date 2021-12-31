<!--
 * @Author: your name
 * @Date: 2021-12-30 21:57:16
 * @LastEditTime: 2021-12-30 22:25:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /notion/widgets/src/widget/Title.vue
-->
<template>
    <div class="container wrapper">
        <h2 class="mode-1" :data="text">{{text}}</h2>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text: 'PLANNER'
        }
    }
}
</script>
<style lang="less" scoped>
.container {width: 100%; height: 100vh;box-sizing: border-box;text-align: center; display: flex;justify-content: center; align-items:center;}
h2 {font-family: 'Debby'; font-size: 2.2rem; margin: 0; line-height: 1; position: relative; background-color: #ffffff;
    &::before {content: attr(data);font-family: 'Debby'; font-size: 2.5rem; opacity: .2; position: absolute;}
    &.mode-1 {
        &::before { left: 0; top: 0; transform: translateY(-40%); width:110%;}
    }
}
</style>