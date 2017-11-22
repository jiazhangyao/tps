<template>
  <div>
    <headers></headers>
    <fetch></fetch>
  </div>
</template>

<script>
  import headers from './views/headers.vue'
  import fetch from './views/fetch.vue'
  export default{
    components:{
      headers,
      fetch
    }
  }
</script>

<style>
</style>