

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
	// var latlng = new google.maps.LatLng(23.659619, 18.929443);
	//TROLOLOLOLO

	var jsonobj = getData(d1.getValue());


	//var latlng = new google.maps.LatLng();


	d1.addDay(1);	
	if(d1.getValue() > (d2.getValue()-1)){
		//Stops animation when date reached the end date
		clearInterval(setIntHandler);
		document.getElementById("ani").disabled=false;
		document.getElementById("clear").disabled=false;
	}
}

function getData(date)
{
	var jsonobj="";
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
	    	return jsonobj=xmlhttp.responseText;
	    }
	}
	xmlhttp.open("GET",("function.php?date="+date),true);
	xmlhttp.send();
}
