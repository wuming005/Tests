


var code ; //��ȫ�ֶ�����֤��   
//������֤��  
window.onload = function nnnCode(){  
     code = "";   
     var codeLength = 4;//��֤��ĳ���  
     var checkCode = document.getElementById("code");   
     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
     'S','T','U','V','W','X','Y','Z');//�����  
     for(var i = 0; i < codeLength; i++) {//ѭ������  
        var index = Math.floor(Math.random()*36);//ȡ���������������0~35��  
        code += random[index];//��������ȡ��������ӵ�code��  
    }  
    checkCode.value = code;//��codeֵ������֤��  
}  



function check(){

if(document.register.regID.value==""){
	alert("�û�������Ϊ�գ�");
	document.register.regID.focus();
	return false;}
	



var fisrtL=document.register.regID.value.charCodeAt(0);
var str=document.register.regID.value;
if(12<str.length || str.length<6){
	alert("������6~12λ�û�������");
	document.register.regID.focus();
	return false;}
if(fisrtL<97 || fisrtL>123){
	alert("�û���������Ӣ����ĸ��ͷ��");
	document.register.regID.focus();
	return false;}

var eaddr=document.register.emailadd.value;

if(document.register.emailadd.value==""){
	alert("Email����Ϊ�գ�");
	document.register.emailadd.focus();
	return false;}

/**********************************************
if (!/[^@]+@\w+/.test(eaddr)){	//����������ʽ��Email��ʽ�����ж�
       

	alert("Email��д����");
  
	document.register.emailadd.focus();
  
	return false;}
***********************************************/

if (eaddr.indexOf("@") == -1 || eaddr.indexOf(".") == -1 || eaddr.indexOf("@") > eaddr.lastIndexOf(".")) {	
	alert("Email��д����!��");
	document.register.emailadd.focus();
  
	return false;
	}


var cellph=document.register.cellphone.value;

if(!/^\d{11}$/.test(cellph)){
	alert("�ֻ��������Ϊ11λ���֣�");
	document.register.cellphone.focus();
	return false;}

    var inputCode = document.getElementById("checkCode").value.toUpperCase(); //ȡ���������֤�벢ת��Ϊ��д        
    if(inputCode.length <= 0) { //���������֤�볤��Ϊ0  
        alert("��������֤�룡"); //�򵯳���������֤��  
	document.register.checkCode.focus();
	return false;
    }         
    else if(inputCode != code ) { //���������֤�����������֤�벻һ��ʱ  
        alert("��֤���������@_@"); //�򵯳���֤���������  
        nnnCode();//ˢ����֤��  
        document.getElementById("input").value = "";//����ı���  
	document.register.checkCode.focus();
	return false;
    }         
    else { //������ȷʱ  
        alert("^-^"); //����^-^  
    }   



}
