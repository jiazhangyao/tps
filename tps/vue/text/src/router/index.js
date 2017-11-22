import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Headers from '@/components/main/Headers'
import France from '@/components/main/Mains'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
    },
    {
    	path:'/countrys',
    	name:'France',
    	component:France
    }
  ]
})
