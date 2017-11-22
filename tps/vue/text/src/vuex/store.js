import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
	count:'hello vue',
	count_second:'hello angular',
	pwd:'12'
}

const mutations={
	first(){
		alert(1);
	},
	cc(){
		alert(11);
	},
	aa(){
		alert('asdfgh')
	}
}

const getters={
	hello:state=>state.count_second,
	world:state=>state.count,
	pwds:state=>state.pwd
}

export default new Vuex.Store({
	state,
	mutations,
	getters
})