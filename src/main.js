import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './styles.scss'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: { quote: 'Get my quote', compare: 'Compare plans', dashboard: 'Ops dashboard' },
    bm: { quote: 'Dapatkan sebut harga', compare: 'Bandingkan pelan', dashboard: 'Papan operasi' },
    zh: { quote: '获取报价', compare: '比较方案', dashboard: '运营仪表板' }
  }
})

createApp(App).use(createPinia()).use(i18n).mount('#app')
