


var code ; //在全局定义验证码   
//产生验证码  
window.onload = function nnnCode(){  
     code = "";   
     var codeLength = 4;//验证码的长度  
     var checkCode = document.getElementById("code");   
     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
     'S','T','U','V','W','X','Y','Z');//随机数  
     for(var i = 0; i < codeLength; i++) {//循环操作  
        var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
        code += random[index];//根据索引取得随机数加到code上  
    }  
    checkCode.value = code;//把code值赋给验证码  
}  



function check(){

if(document.register.regID.value==""){
	alert("用户名不能为空！");
	document.register.regID.focus();
	return false;}
	



var fisrtL=document.register.regID.value.charCodeAt(0);
var str=document.register.regID.value;
if(12<str.length || str.length<6){
	alert("请输入6~12位用户名！！");
	document.register.regID.focus();
	return false;}
if(fisrtL<97 || fisrtL>123){
	alert("用户名必须以英文字母开头！");
	document.register.regID.focus();
	return false;}

var eaddr=document.register.emailadd.value;

if(document.register.emailadd.value==""){
	alert("Email不能为空！");
	document.register.emailadd.focus();
	return false;}

/**********************************************
if (!/[^@]+@\w+/.test(eaddr)){	//利用正则表达式对Email格式进行判断
       

	alert("Email填写错误！");
  
	document.register.emailadd.focus();
  
	return false;}
***********************************************/

if (eaddr.indexOf("@") == -1 || eaddr.indexOf(".") == -1 || eaddr.indexOf("@") > eaddr.lastIndexOf(".")) {	
	alert("Email填写错误!！");
	document.register.emailadd.focus();
  
	return false;
	}


var cellph=document.register.cellphone.value;

if(!/^\d{11}$/.test(cellph)){
	alert("手机号码必须为11位数字！");
	document.register.cellphone.focus();
	return false;}

    var inputCode = document.getElementById("checkCode").value.toUpperCase(); //取得输入的验证码并转化为大写        
    if(inputCode.length <= 0) { //若输入的验证码长度为0  
        alert("请输入验证码！"); //则弹出请输入验证码  
	document.register.checkCode.focus();
	return false;
    }         
    else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时  
        alert("验证码输入错误！@_@"); //则弹出验证码输入错误  
        nnnCode();//刷新验证码  
        document.getElementById("input").value = "";//清空文本框  
	document.register.checkCode.focus();
	return false;
    }         
    else { //输入正确时  
        alert("^-^"); //弹出^-^  
    }   



}
