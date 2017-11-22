<template>
  <div>
  	<button @click="back">back</button>
    <text class="text" @click="jump('home')">Hello World!</text>
    <text class="text" @click="jump('me')">hello me</text>
    <router-view></router-view>
  </div>
</template>
<style>
.text {
  font-size: 40px;
  color: #ff0000
}
</style>
<script>
	export default{
		
		methods:{
			jump(e){
				this.$router.push(e);
			},
			back(){
				this.$router.back();
			}
		}
	}
</script>