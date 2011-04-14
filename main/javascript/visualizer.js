

function animationLoop(){
	//DONT FUCK WITH THIS!
	var speed = parseInt(document.getElementById("speed").value);
	setIntHandler = setInterval("loop()",speed);
	document.getElementById("ani").disabled=true;
	document.getElementById("clear").disabled=true;
};

function loop(){
	var d1 = $("#from_date").data("dateinput");
	var d2 = $("#to_date").data("dateinput");

	//DO WHATEVER! 

	//TROLOLOLOLO

	d1.addDay(1);	
	if(d1.getValue() > (d2.getValue()-1)){
		//Stops animation when date reached the end date
		clearInterval(setIntHandler);
		document.getElementById("ani").disabled=false;
		document.getElementById("clear").disabled=false;
	}
}
