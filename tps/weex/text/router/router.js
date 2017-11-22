
import VueRouter from 'vue-router'  

import home from '../src/cm/home.vue' 
import me from '../src/cm/me.vue' 
import add from '../src/cm/add.vue'
import cc from '../src/view/slide.vue'
// 第三步 让Vue 使用 vue-router 当做自己的路由
 Vue.use(VueRouter) 
 // 第四步 创建路由对象 
 export default new VueRouter({ 
 // mode: 'abstract', 
 // weex 中只能使用 abstract 类型 默认可以不写 系统会自动设置为abstract 
 // 定义路由 
 routes: [ 
 	{ path: '/home', component: home}, 
 	{ path: '/me', component: me} ,
 	{ path: '/add/:id', component: add }, 
 	{ path: '/cc',component:cc}
 // { path: '/article/:url(.*)?', component: ArticleView }, 
 // { path: '/item/:id(\\d+)', component: CommentView }, 
 // { path: '/user/:id', component: UserView }, 
 // { path: '/', redirect: '/home' } 
 ]
 })

