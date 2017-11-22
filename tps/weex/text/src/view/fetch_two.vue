<template>
  <div class="wrapper">
   <!--  <div class="group">
     <text class="title">Weex Star :</text>
     <text class="count">{{weexStar}}</text>
   </div>
   <div class="group">
     <text class="title">Vue Star :</text>
     <text class="count">{{vueStar}}</text>
    
   </div> -->
    <div class="group">
      <text>{{values1}}</text>
    </div>
    <div class="group">
      <text>{{values2}}</text>
    </div>
    <div class="group">
      <text>{{values3}}</text>
    </div>
    <div v-for="img in imageList">
        <!-- image class="image" resize="cover" :src="img.url"></image> -->
        <text>{{img.id}}</text>
      </div>
    
    <hello></hello>
    <slide></slide>
    <video></video>
  </div>
</template>
<script>
  import hello from './view/hello.vue';
  import slide from './view/slide.vue';
  import video from './view/video.vue';
  var stream = weex.requireModule('stream');
  
  export default {
    components:{hello,slide,video},
    data () {
      return {
        weexStar: 'unknown',
        vueStar: 'unknown',
        values1:'',
        values2:'',
        values3:'',
        imageList:null
      }
    },
    methods: {
      getStarCount (repo, callback) {
        return stream.fetch({
          method: 'GET',
          type:'json',
          url: 'http://jsonplaceholder.typicode.com'+repo
        }, callback)
      }
    },
    created () {
      this.getStarCount('/photos',res=>{
        this.imageList=res.data;
        console.log('world');
        console.log(res.data.length);
        console.log(this.imageList);
        console.log('hello');
        /*this.values1=res.data.id;
        this.values2=res.data.title;
        this.values3=res.data.body;*/
      })
      /*this.getStarCount('alibaba/weex', res => {
        this.weexStar = res.ok ? res.data.id : '(network error)'
      })
      this.getStarCount('vuejs/vue', res => {
        this.vueStar = res.ok ? res.data.stargazers_count : '(network error)'
      })*/
    }
  }
</script>
<style scoped>
  .wrapper {
    
  }
  .group {
    
   
  }
  .title {
    font-size: 45px;
    color: #888888;
  }
  .count {
    font-size: 45px;
    font-weight: bold;
    margin-left: 12px;
    color: #41B883;
  }
</style>