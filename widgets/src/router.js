/*
 * @Author: your name
 * @Date: 2021-12-30 11:41:28
 * @LastEditTime: 2021-12-31 16:24:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /notion/widgets/src/router.js
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "/",
          name: "time",
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/Times.vue"),
        },
        {
          path: "/others",
          name: "others",
          component: () =>
            import(/* webpackChunkName: "about" */ "./components/Others.vue"),
        },
      ],
    },
    {
      path: "/wid/quote_pic/:mode?",
      name: "quote_pic",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./widget/QuoteWithPic.vue"),
    },
    {
      path: "/wid/title/:title?",
      name: "title",
      component: () =>
        import(/* webpackChunkName: "about" */ "./widget/Title.vue"),
    },
    {
      path: "/wid/history-today",
      name: "history-today",
      component: () =>
        import(/* webpackChunkName: "about" */ "./widget/HistoryToday.vue"),
    },
    {
      path: "/wid/today/:mode?",
      name: "today",
      component: () =>
        import(/* webpackChunkName: "about" */ "./widget/Today.vue"),
    },
  ],
});
