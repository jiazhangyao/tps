<template>
	<div>
		<text @click="clickTypePost()">hello weex</text>
		<text>{{this.$route.params.id}}</text>
		<text>{{getResult}}</text>
	</div>
</template>

<script>
var stream = weex.requireModule('stream');
var modal = weex.requireModule('modal')
export default{
data(){
		return{
			getResult:''
		}
},

methods:{

	toParams(obj) {
        var param = ""
        for(const name in obj) {
            if(typeof obj[name] != 'function') {
                param += "&" + name + "=" + encodeURI(obj[name])
            }
        }
        return param.substring(1)
    },
    clickTypePost:function(){
    		this.getResult="world";
                var me = this;
                stream.fetch({
                    method:"POST",
                    type:'json',
                    dataType:'jsonp',
                    url:'http://www.kuaidi100.com/query',
                   
//                    body:'type=shentong&postid=3333557693903',
                    body:this.toParams(
                            {
                                type:'shentong',
                                postid:'3333557693903',
                            })
//
//                    body:JSON.stringify({
//
//                        type:'shentong',
//                        postid:'3333557693903',
//                    }),


                }, function(ret) {
                    if(!ret.ok){
                        me.getResult = "request failed";
                        modal.toast({
                            'message': "失败",
                            'duration': 2.0
                        })
                    }else{
                        console.log('get---------:'+JSON.stringify(ret.data));
                        me.getResult = JSON.stringify(ret);

                        modal.toast({
                            message: JSON.stringify(ret.data),
                            duration: 2.0
                        })
                    }
                },function(progress) {
//                    JSON.stringify(progress.length);
                })
            }
}
}
</script>

<style>
	
</style>