import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router";
import "ant-design-vue/dist/antd.css";
import store from "./store";
const app = createApp(App);

app.use(router).use(Antd).use(store);

app.mount("#app");
