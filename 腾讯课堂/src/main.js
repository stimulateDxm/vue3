//引入的不再是Vue构造函数，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
//创建应用实例对象--app（类似于之前的vue2中的vm,但是app比vm更“轻”
createApp(App).mount('#app')

//app.mount('#app')//挂载

