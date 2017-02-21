var operator = "";

function num(val) {
	document.getElementById('input').value += val;
}

function btnPlus() {
	getNum();

	document.getElementById('input').value = "";

	operator = "1";
}

function btnMinus() {
	getNum();

	document.getElementById('input').value = "";

	operator = "2";
}

function btnDivide() {
	getNum();

	document.getElementById('input').value = "";

	operator = "3";
}

function btnTimes() {
	getNum();

	document.getElementById('input').value = "";

	operator = "4";
}


function btnEquals() {
	getNum2();

	var ans1 = document.getElementById('getal1').innerText;
	var ans2 = document.getElementById('getal2').innerText;

	if (operator == "1") {
		var ans = +ans1 + +ans2;
		ans = ans.toFixed(1);
	}

	if (operator == "2") {
		var ans = +ans1 - +ans2;
		ans = ans.toFixed(1);
	}

	if (operator == "3") {
		var ans = +ans1 / +ans2;
	}

	if (operator == "4") {
		var ans = +ans1 * +ans2;
	}

	document.getElementById('input').value = ans;
}

function getNum() {
   var get1 = document.getElementById("input").value;
   document.getElementById("getal1").innerText = get1;
}

function getNum2() {
	var get2 = document.getElementById("input").value;
	document.getElementById("getal2").innerText = get2;
}

function btnClear() {
	document.getElementById('input').value = "";
}