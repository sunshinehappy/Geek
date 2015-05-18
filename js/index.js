/***********极客网图片介绍轮播图***********/
var oScroll = document.getElementById("scroll");
	var oScroll_ul = oScroll.getElementsByTagName("ul")[0];
	var oScroll_li = oScroll_ul.getElementsByTagName("li");
		oScroll_ul.style.width = oScroll_li[0].offsetWidth*oScroll_li.length + "px"; 
	var flag = "left"; 
	function DY_scroll( wraper, prev, next, img, speed, or ){ 
	  	var wraper = $( wraper ); 
		var prev = $( prev ); 
	    var next = $( next ); 
		var img = $( img ).find( 'ul' ); 
		var w = img.find( 'li' ).outerWidth( true ); 
		var s = speed; 
		next.click( function(){ 
			img.animate( {'margin-left':-w}, function(){ 
				img.find( 'li' ).eq( 0 ).appendTo( img ); 
				img.css( {'margin-left':0} ); 
			} ); 
	      	flag = "left"; 
		} ); 
	   	prev.click( function(){ 
			img.find( 'li:last' ).prependTo( img ); 
			img.css( {'margin-left':-w} ); 
			img.animate( {'margin-left':0} ); 
			flag = "right"; 
	 	} ); 
		if ( or == true ){ 
	  		ad = setInterval( function(){ 
				flag == "left" ? next.click() : prev.click();
			}, s*1000); 
	  		wraper.hover( function(){
				clearInterval( ad );
			},function(){
				ad = setInterval( function(){
					flag == "left" ? next.click() : prev.click();
				}, s*1000);
			} ); 
	  	} 
	} 
DY_scroll( '.scroll', '.leftbtn', '.rightbtn', '.scroll', 3, true );// true为自动播放，不加此参数或false就默认不自动 




/*****************运动框架*****************/	
function startMove( obj, attr, iTarget ){
	clearInterval( obj.timer );
	obj.timer=setInterval( function (){
		var cur = 0;
		if( attr == "opacity" ){
			cur = parseFloat( getStyle( obj, attr ) )*100;
		}
		else{
			cur = parseInt( getStyle( obj, attr ) );
		}
		var speed = ( iTarget-cur )/3;
		speed = speed>0? Math.ceil(speed) : Math.floor( speed );
		if( cur == iTarget ){
			clearInterval( obj.timer );
		}
		else{
			if( attr == "opacity" ){
				obj.style.filter = "alpha( opacity: + 'cur+speed' )";
				obj.style.opacity = ( cur + speed )/100;
			}
			else{
		        obj.style[attr] = cur + speed + "px";
			}
		}
	},30);
}
/**************获取元素外部样式框架****************/	
function getStyle( obj, attr ){

	if ( obj.currentStyle ){   //IE 
	
		return obj.currentStyle[attr];
	  
	} else {   //非IE
	
		return getComputedStyle( obj, false )[attr];
	  
	}
}
/***********成员介绍动画函数***********/
window.onload = function() {
	var amember_intro_img = document.getElementsByName( "member_intro_img" );
	var amember_intro = document.getElementById( "member_intro" );
	var amember_intro_div = amember_intro.getElementsByTagName( "div" );
	
	for(var i=0; i<amember_intro_img.length; i++){
		amember_intro_img[i].onmousemove = function(){
			
			startMove( this.nextSibling, "height", 0);
			getStyle( this.nextSibling, "display");
			this.nextSibling.style.display = "none";
			
		};
		amember_intro_img[i].onmouseout=function(){
			
			startMove( this.nextSibling,"height", 30 );
			getStyle( this.nextSibling, "display" );
			this.nextSibling.style.display = "block";
			
		};
	}
};

