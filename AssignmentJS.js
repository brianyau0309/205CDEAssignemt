function MouseOver_Category(x) {
	if (x == "C") {
		document.getElementById("demo").innerHTML = "Chinese Food!"
	}else if (x == "E") {
		document.getElementById("demo").innerHTML = "Europe Food!"
	}else if (x == "J") {
		document.getElementById("demo").innerHTML = "Japanese Food!"
	}else if (x == "O") {
		document.getElementById("demo").innerHTML = "Other Food!"
	}
}
function MouseOut_Category() {
	document.getElementById("demo").innerHTML = "CooKinGdom"
}