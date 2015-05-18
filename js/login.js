function sure(){
	var oButton1=document.getElementById("username1");
	var oButton2=document.getElementById("password1");
    var num1=oButton1.value;
    var num2=oButton2.value;
	if(num1==""||num2==""){
		alert("用户名或密码不能为空");
		return false;
	}
	else{
		return true;
	}
}
