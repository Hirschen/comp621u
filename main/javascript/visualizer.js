

function animationLoop(){
	id = setInterval("loop()",3000);
	document.getElementById("ani").disabled=true;
	document.getElementById("clear").disabled=true;
};

function loop(){
	var d1 = $("#from_date").data("dateinput");
	var d2 = $("#to_date").data("dateinput");

	//DO WHATEVER!


	d1.addDay(1);	
	if(d1.getValue() > (d2.getValue()-1)){
		//Stops animation
		clearInterval(id);
		document.getElementById("ani").disabled=false;
		document.getElementById("clear").disabled=false;
	}
}
