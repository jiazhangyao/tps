const express=require('express')
const router=express.Router()
const http=require('http')
const cheerio=require('cheerio')
const request=require('request')

router.get('/',function(req,resp,next){
	http.get('http://www.baidu.com',function(res){
		var htmls=''
		res.setEncoding('utf-8')
		res.on('data',function(chunk){
			htmls +=chunk;
		})
		res.on('end',function(){
			let $=cheerio.load(htmls);
			let imgs=$('#lg').find('img').attr('src');
			resp.render('fetch',{h:imgs,c:'hello vue'})
		})
	})
	
})

router.post('/',function(req,res,next){
	res.send('hello react')
})

module.exports=router