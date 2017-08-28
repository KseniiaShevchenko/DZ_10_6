
document.getElementById("btn1").onclick=MM;


function MM () {
	var a=document.getElementById('num').value;

	if (a>=0 && a<=3) {
		alert("Ваша надбавка - 0%");
	}
	else if (a>=4 && a<=10) {
		alert("Ваша надбавка - 10%");
	}
	else if (a>=11 && a<=20) {
		alert("Ваша надбавка - 20%");
	}
	else if (a>20) {
		alert("Ваша надбавка - 30%");
	}
	else {
		alert("Вы ввели неправильные данные");
	}
}

