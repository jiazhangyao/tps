<template>
  <div class="hello">
    <h2>country</h2>
    <ul>
      <li><router-link to="/countrys/hello">france</router-link></li>
      <li><router-link to="/countrys/world">germany</router-link></li>
    </ul>
    <h3 @click='cc'>{{hello}}</h3>
    <h4>{{world}}</h4>
    <h1 @click="aa">world</h1>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  name: 'Headers',
  data () {
    return {
    }
  },
  computed:{
   ...mapGetters(["hello","world"])
  
  },
  methods:{
     ...mapMutations(['cc','aa']),
    
  },
  mounted(){
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	
</style>
