// JavaScript Document
//ʱ����Ч��
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
//�ж�������ںˣ���ȡ��ͬ�汾��ie��������Ӷ���ȡteam_copty.js��ʵ�ֲ�ͬҳ��Ч���������������
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