<template>
	<div>
	<div v-if='shows'>
		<h2 @click='back'>back</h2>

	法兰西共和国（法语：République française，英语：the French Republic），简称法国（France），是一个本土位于西欧的半总统共和制国家，海外领土包括南美洲和南太平洋的一些地区。
法国为欧洲国土面积第三大、西欧面积最大的国家，东与比利时、卢森堡、德国、瑞士、意大利接壤，南与西班牙、安道尔、摩纳哥接壤。本土地势东南高西北低，大致呈六边形，三面临水，南临地中海，西濒大西洋，西北隔英吉利海峡与英国相望，科西嘉岛是法国最大岛屿。[1] 
法国从中世纪末期开始成为欧洲大国之一，于17~18世纪路易十四统治时达到封建社会的鼎盛时期，在1789年爆发法国大革命之后，推翻君主专制政体，先后经历两次帝国和三次共和国，国力于19~20世纪时达到巅峰，[2]  在第二次世界大战前，法国是当时世界第二大殖民帝国，殖民地面积等于本土的20倍，成为20世纪人口最稠密的国家，二战后，建立法兰西第四共和国，1958年被夏尔·戴高乐建立的第五共和国所取代。在漫长的历史中，该国培养了不少对人类发展影响深远的著名文学家和思想家，此外还具有全球第四多的世界遗产。[2] 
法国是一个高度发达的资本主义国家。欧洲四大经济体之一，其国民拥有较高的生活水平和良好的社会保障制度，是联合国安理会五大常任理事国之一，也是欧盟和北约创始会员国、申根公约和八国集团成员国，和欧洲大陆主要的政治实体之一。
	</div>
	<div v-else>
		sdtfdg
	</div>
</div>
</template>

<script>
	export default{
		name:'France',
		data(){
			return{
				shows:false
			}
		},
		mounted(){
			let judge=this.$route.params.keyword;
			if(judge=='hello'){
				this.shows=true;
			}else{
				this.shows=false;
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>