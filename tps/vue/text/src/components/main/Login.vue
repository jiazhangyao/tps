<template>
  <div class="hello">
   <input type="text" v-model='pwd' placeholder="hello vue">
   <h2>{{pwd}}</h2>
   <button @click="btn">submmit</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Login',
  data(){
    return{
      pwd:''
    }
  },
  computed:{
    ...mapGetters(['pwds'])
  },
  methods:{
    btn(){
      if(this.pwd===this.pwds){
        this.$router.replace('/countrys')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	
</style>
