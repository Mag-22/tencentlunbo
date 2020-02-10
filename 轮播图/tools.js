function move( obj, attr , target , speed , callback ){
	//关闭上一个定时器
	clearInterval(obj.timer);
	//获取元素当前位置
	var current=parseInt(getstyle(obj,attr));
	if(current>target){
		speed=-speed;
	}
	obj.timer=setInterval(function(){
		var oldvalue=parseInt(getstyle(obj,attr));
		var newvalue=oldvalue+speed;
		if((speed<0&&newvalue<target)||(speed>0&&newvalue>target))
		newvalue=target;
		obj.style[attr]=newvalue+"px";
		if(newvalue==target){
			clearInterval(obj.timer);
			callback&&callback();
		}
	},30);
}
function getstyle(obj,name){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[name];
	}else{
	return obj.currentstyle[name]
	}
}