window.onload = function() {

//	function getFloat() {
//		document.getElementById("basic-num-1").innerHTML.value;
//		document.getElementById("basic-num-2").innerHTML.value;
//	}
//	function getValue() {
//		document.getElementById("basic-operation").innerHTML.value;
//	}
	
	document.getElementById("basic-calc").addEventListener("click",basicCalc);
	document.getElementById("trip-calc").addEventListener("click",tripCalc);
	document.getElementById("bmi-calc").addEventListener("click", bmiUnits);
	

	function basicCalc() {
		var num1 = parseFloat(document.getElementById("basic-num-1").value);
		var num2 = parseFloat(document.getElementById("basic-num-2").value);
		var op = document.getElementById("basic-operation").value;
		var ans = null;

		if (op == "+") {
			ans = num1 + num2;
		}
		else if (op == "-") {
			ans = num1 - num2;
		}
		else if (op == "*") {
			ans = num1 * num2;
		}
		else if (op == "/") {
			ans = num1 / num2;
		}
		document.getElementById("basic-answer-alert").innerHTML = ans;
	}

	function tripCalc() {
		var distance = parseFloat(document.getElementById("trip-distance").value);
		var mpg = parseFloat(document.getElementById("trip-mpg").value);
		var cost = parseFloat(document.getElementById("trip-cost").value);
		var speed = parseFloat(document.getElementById("trip-speed").value);
		var tripAns = null;

		if (speed <= 60) {
			tripAns = distance / mpg * cost;
		}
		else if (speed > 60) {
			var mainTrip = distance / mpg * cost;
			//alter cost when speed over 60
			var alter = distance / (mpg - (speed - 60) * 2) * cost;
			tripAns = mainTrip - alter;  
		}
		document.getElementById("trip-answer-alert").innerHTML = ("The journey will cost you " + tripAns + " $'s");
	}

	function bmiUnits() {
		var mass = document.getElementById("bmi-mass").value;
		var height = document.getElementById("bmi-height").value;
		var lbs = null;
		var inches = null;
		var bmiAns = null;

		kgToLbs();
		mToInc();
		bmiCalc();
	}

	function bmiCalc(lbs, inches) {
		var bmiAns = (lbs / (inches x lbs)) * 703;
		document.getElementById("bmi-answer-alert").innerHTML = bmiAns;
	}	

	function kgToLbs(mass) {
		nearExact = mass/0.45359237;
		var lbs = Math.floor(nearExact);
		var oz = (nearExact - lbs) * 16;
			return lbs;
	}

	function mToInc(height) {
		nearExact = height*39.3700787;
		var inches = Math.floor(nearExact);
			return inches;
	}	 
	
	
}


 