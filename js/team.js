// JavaScript Document
//时间轴效果
$(function(){
	
	$(".img1").mouseover(function(){
		
		$(".year_1").css("display", "block");						  
	});	 
	$(".img1").mouseout(function(){
		$(".year_1").css("display", "none");						  
	});	
	$(".img2").mouseover(function(){
		$(".year_2").css("display", "block");						  
	});	 
	$(".img2").mouseout(function(){
		$(".year_2").css("display", "none");						  
	});	
});
//判断浏览器内核，获取不同版本的ie浏览器，从而获取team_copty.js，实现不同页面效果，解决兼容问题
var browser=navigator.appName;
var b_version=navigator.appVersion;
var version=b_version.split(";");
var trim_Version=version[1].replace(/[ ]/g,"");
var oLink_style=document.getElementById('link_style');
if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0")
{	alert('a');
	oLink_style.href="css/team-copy.css";
}
else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0")
{
	oLink_style.href="css/team-copy.css";
}
else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0")
{
	oLink_style.href="css/team-copy.css";
}
else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0")
{
	oLink_style.href="css/team-copy.css";
}