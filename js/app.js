$(document).ready(function(){
var arr=[]
$(".add").on("touchend",function(){
	$("input").animate({width:"100%"})
	$(".ok").animate({opacity:1},1000)
	
})

$(".cancel").on("touchend",function(){
	$("input").animate({width:0})
	$(".ok").animate({opacity:0},1000)
})

$(".fixb").on("touchend",function(){
	$(".help").slideToggle()
	
})

$(".ok").on("touchend",function(){
	var val=$("input").val()
	var 
	$("<li>"+$("input").val()+"</li>").appendTo($(".ul"))
	$("input").val("")
})







})
