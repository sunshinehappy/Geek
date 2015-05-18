// JavaScript Document
var JSON;
var PAGE;
var ROWS;
$(document).ready(function() {
	
	$.ajax({
		  type:'post',
		  url:'getJson_findAllProject',
		  contentType:'application/json',
		  success:function(response){
			  var obj = JSON.parse(response);
			  PAGE=Math.ceil(obj.total/9);
			  ROWS=obj.rows;
			  for(var i=1;i<=PAGE;i++){
				  $(".projectShow_a").append("<span>"+i+"</span>");
			  }
			  $(".projectShow_a span").click(function() {
					var cureentPage = $(this).text();
					goPage(cureentPage);
			  });
			  goPage(1);
			  
		  },
		  error:function() {
			alert('fail');
		  }
			  
	});  
    	
	
	$(".projectShow_a span").trigger('click');
 		
	function goPage(page) {
		var start=(page-1)*9;
		var end=start+9;
		$('#projectShow ul').empty();
		for(start;start<end&&start<ROWS.length;start++){
			$('#projectShow ul').append("<li><img src=\"images/project/"+ROWS[start].imgUrl+"\"/><a href=\""+ROWS[start].href+"\">"+ROWS[start].projectName+"</a></li>");
		}
			$('#projectShow li:odd').addClass('filter2');
			$('#projectShow li:even').addClass('filter1');
			$('#projectShow img').hide();
			$('#projectShow a').hover(function() {
						 $(this).css('opacity',0);
						 $(this).prev().fadeIn('slow');
				},function() {
						 if(this=='#projectShow li:odd'){
							  if($.support.opacity==true){
								 $(this).css('opacity',50);
							   }
							  else{
								  $(this).css('filter','alpha(opacity=50)');
							   }
						  }
					  else{
							  if($.support.opacity==true){
								  $(this).css('opacity',90);
							   }
							  else{
								  $(this).css('filter','alpha(opacity=90)');
							   }
					  }
					  $('#projectShow img').fadeOut('slow');
			});
	}
	
});
 
