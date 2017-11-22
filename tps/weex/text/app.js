
// 第一步 导入根组件 
import foo from './src/foo.vue' 
// 第二步 导入路由文件
 import router from './router/router.js' 
 //第三步 给根组件一个id 
 foo.el = '#root' 
 //第四步给 给根组件设置路由 
 foo.router = router 
 // 第五步 创建Vue 对象 
 export default new Vue(foo); 
 // 第六步 指定一个路由入口
/*router.push('home')*/
