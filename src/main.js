import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles.css'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
// Vue.use(ElementUI)

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// new Vue({
//   el:'#app',
//   render: h => h(App)
// })

app.$store.dispatch("fetchIsLikedGroup")
