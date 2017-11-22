<template>
  <div class="wrapper">
    <text class="button" @click="jump">Jump</text>
    <text class="button" @click="world">world</text>
  </div>
</template>
<script>
  var navigator = weex.requireModule('navigator');
  var modal = weex.requireModule('modal');
  import hello from './hello.vue';
  export default {
    methods: {
      jump (event) {
        console.log(event.type)
        navigator.push({
          url: 'http://www.baidu.com',
          animated: "true"
        }, e => {
          modal.toast({ message: 'ok'})
        })
      },
      world(e){
        console.log(e.type);
      }
    }
  };
</script>
<style scoped>
  .wrapper {
    flex-direction: column;
    justify-content: center;
  }
  .button {
    font-size: 60px;
    width: 450px;
    text-align: center;
    margin-top: 30px;
    margin-left: 150px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-width: 2px;
    border-style: solid;
    color: #666666;
    border-color: #DDDDDD;
    background-color: #F5F5F5
  }
</style>