# 此分支可用作 H5 页面的开发，以及手机端 h5 页面适配开发

# 一、创建项目

- npm install @vue/cli -g
- vue create webtemplate

# 二、安装 vant-UI 组件库

- npm install vant -S
- npm i babel-plugin-import -D //按需引入
- 在.babelrc 中添加配置

```
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
```

```
import { Overlay } from 'vant'
components: {
    [Overlay.name]: Overlay,
},
```

# 三、配置路由

- npm install vue-router -S

# 四、配置状态管理

- npm install vuex -S

# 五、配置 sass

- npm install sass-loader -D
- npm install node-sass -D

# 六、配置 axios

- npm install axios -S

# 七、安装 i18n 国际化

- npm install vue-i18n --save
- //在 i18n.js 中
  import Vue from 'vue';
  import VueI18n from 'vue-i18n';
  import zh from '@/i18n/zh';
  import en from '@/i18n/en';
  Vue.use(VueI18n);
  const messages = {
  zh, // 这是 zh: zh 的简写，后面同理
  en,
  };
  export default new VueI18n({
  locale: 'zh',
  messages,
  });
- //在 main.js 中
  import i18n from '@/utils/i18n';
  new App(
  i18n,
  ).$mount()
Vue.prototype.$i18nMsg = i18n.messages[i18n.locale] //挂载上去 this.\$i18nMsg.xxx 去访问
- 在 i18n 文件夹中
  zh.js
  en.js
  //this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh'

# 八、打包优化

- compression-webpack-plugin （1.4m==>800kb）需要配合 nginx 配置

```
compression-webpack-plugin 目前最新版是 7.1.0
npm i compression-webpack-plugin@5.0.1
```
