	function ShowDate(Elements)
{
		var temp; 
		var m_names = new Array("1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月");
				var d_names = new Array("星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日");
				
				var datetime = new Date()
				var hours = datetime.getHours()//datetime时间操作函数get()方法可返回时间的某时字段。 
				var minutes = datetime.getMinutes()//get()方法可返回时间的某时字段
				var sec = datetime.getSeconds()
				var day = datetime.getDay()
				var month = datetime.getMonth()
				var date = datetime.getDate()
				var year = datetime.getFullYear()
				
   temp = year + "年" + m_names[month]  + date  + "日 " + d_names[day]+"  " + " "//显示出来
				Elements.innerHTML = temp;
}
function ShowTime(Elements)
{
		var temp = "";
				var datetime = new Date()
				var hours = datetime.getHours()//get()方法可返回时间的某时字段
				var minutes = datetime.getMinutes()
				var sec = datetime.getSeconds()
				if (minutes < 10){
				minutes = "0" + minutes
				}
				if (sec<10){
				sec="0" +sec
				}
	
				temp = temp+" " + hours + ":" + minutes + ":" + sec + ""//显示出来
				Elements.innerHTML = temp;  
//这个Elements代表(表格)的id
		window.setTimeout("ShowTime(" + Elements.id + ")",1000)   //这里Elements.name或Elements.id不是Elements
}
			// JavaScript Document