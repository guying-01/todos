$(document).ready(function(){
var arr=[]
var start=0
var end=0
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
if(localStorage.x){
	arr=JSON.parse(localStorage.x)
	for (i=0;i<arr.length;i++) {
		var done=(arr[i].status===1)?"done":"done1"
		if (done==="done") {
			$('<li>'+arr[i].name+'<div class='+done+'>已完成</div><div class="delete">删</div></li>').appendTo($(".ul"))
		    $(".done").eq($(this).index()).css("display","block")
		}
		else{
			$('<li>'+arr[i].name+'<div class='+done+'>已完成</div></li>').appendTo($(".ul"))
		}
		
	}
}

$(".ok").on("touchend",function(){
	var val=$("input").val()
	if (val=="") {
		return
	}
		var node={
		name:val,
		status:0
	}
	arr.push(node)
	localStorage.x=JSON.stringify(arr)
	$('<li>'+$("input").val()+'<div class="done">已完成</div></li>').appendTo($(".ul"))
	$("input").val("")
})

$(".ul").on("touchstart","li",function(e){
	start=e.originalEvent.changedTouches[0].clientX
	
})

$(".ul").on("touchend","li",function(e){
	var val=$("input").val()
	end=e.originalEvent.changedTouches[0].clientX
	if (end-start>50) {
		$(".done").eq($(this).index()).css("display","block")
		$(".delete").eq($(this).index()).css("display","block")
		arr[$(this).index()].status=1
		localStorage.x=JSON.stringify(arr)
	}
	if (end-start<-50) {
		$(".done").eq($(this).index()).css("display","none")
		arr[$(this).index()].status=0
		localStorage.x=JSON.stringify(arr)
	}	
})

$(".delete").on("touchend",function(){
	var dli=$(this).closest("li")
	dli.remove()
	arr.splice($(this).index(),1)
	localStorage.x=JSON.stringify(arr)
})


})
