import { createRouter, createWebHashHistory } from "vue-router";
import HomeLayout from "../layout/homeLayout.vue";
import ZaloMainPage from "../pages/zalo/mainPage.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeLayout,
      children: [
        {
          path: "zalo",
          name: "zalo",
          component: ZaloMainPage,
          children: [
            {
              path: "add",
              name: "zaloAddTemplate",
              component: () => import("../pages/zaloAdd.vue"),
            },
            {
              path: "list",
              name: "zaloListTemplate",
              component: () => import("../pages/zaloPage.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
