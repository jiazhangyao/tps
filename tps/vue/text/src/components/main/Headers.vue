<template>
  <div class="hello">
    <div class="wrap">
      <Swipe>
        <SwipeItem>
        	<div class="swipe_imgs">
        		<img src="/static/11.png">
        	</div>
        </SwipeItem>
        <SwipeItem>
        	<div class="swipe_imgs">
        		<img src="/static/11.jpg">
        	</div>
        </SwipeItem>
      </Swipe>
    </div>
  </div>
</template>

<script>
import {Swipe,SwipeItem} from 'vue-swipe'
import 'vue-swipe/dist/vue-swipe.css'
export default {
  name: 'Headers',
  data () {
    return {
     
    }
  },
  mounted(){
  	
  },
  components:{
  	Swipe,
    SwipeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.wrap{
		height:200px;
		.swipe_imgs{
			text-align:center;
		}
	}
</style>
