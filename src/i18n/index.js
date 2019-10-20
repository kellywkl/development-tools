import Vue from 'vue' // 引入Vue
import VueI18n from 'vue-i18n' // 引入i18n
import locale from 'element-ui/lib/locale' // 引入element 国际化配置

import CN from './locales/zh-CH' // 自定义中文语言文件
import EN from './locales/en-US' // 自定义英文语言文件

Vue.use(VueI18n) // 混入Vue
// 创建实例并且挂在自定义语言包
const i18n = new VueI18n({
  locale: 'cn', // 默认语言为中文
  messages: {
    cn: CN,
    en: EN
  }
})
locale.i18n((key, value) => i18n.t(key, value)) // 把element 的语言包挂在到i18n中
export default i18n // 导出实例
