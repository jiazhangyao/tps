<template>
  <div class="wrapper">
    <div>
       <text>{{texts}}</text>
    </div>
  </div>
</template>
<script>
  var stream = weex.requireModule('stream');

  export default {
    
    data(){
      return{
        texts:''
      }
    },
    created () {
      stream.fetch({
          method: 'GET',
          type:'json',
          url: '../../assets/data/data.json'
        }, res=>{
          this.texts=res.data.name;
        })
    }
  }
</script>
<style scoped>

</style>