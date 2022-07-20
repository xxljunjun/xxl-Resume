import Vue from "vue";
import App from "./App.vue";
import router from "./router"; //配置路由
import store from "@/store/";
import "@/style/common.scss"; //引入全局样式
//按需引入element
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from 'element-ui';
import '@/style/element-variables.scss'
import i18n from './lang'  //国际化
Vue.use(ElementUI);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
