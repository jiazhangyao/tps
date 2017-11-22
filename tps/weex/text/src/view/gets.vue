<template>
  <div class="wrapper">
    <text>{{htmls}}</text>
  </div>
</template>
<script>
  var stream = weex.requireModule('stream');
  console.log(2);
  export default {
    data (){ 
      return {
        htmls:''
      }
    },
    methods: {
      gets (req, callback) {
        return stream.fetch({
          method: 'GET',
          type:'json',
          url: 'http://jsonplaceholder.typicode.com'+req
        }, callback)
      }
    },
    created () {
      this.gets('/posts/1',res=>{
        console.log('world');
        console.log(res);
        this.htmls=res.data.id;
      })
    }
  }
</script>
<style scoped>
  
</style>