<template>
  <div class="hello">
    <headers></headers>
    <mains></mains>
  </div>
</template>

<script>
import Headers from './main/Headers'
import Mains from './main/Mains'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello vue',
    }
  },
  components:{
    Headers,
    Mains
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
  
</style>
