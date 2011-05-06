

function animationLoop(){
	// DONT FUCK WITH THIS!
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
	// addCircle(latlng);

	//var jsonobj = getData(d1.getValue("yyyy-mm-dd"));
	var query = ("function.php?date="+d1.getValue("yyyy-mm-dd"))
	// $.get("function.php?date=2004-06-07", function(data){
	// 	alert("Data Loaded: " + data);
	// 	});
	var jsonobj = $.ajax({
			type: "GET",
			url: query,
			dataType: "json",
			async: false
	});

	
	var latlng;
	$.each(jsonobj.responseText,function(i,post){
	 latlng = new google.maps.LatLng(post.lat, post.lng);
	 addCircle(latlng);
	});


	d1.addDay(1);	
	if(d1.getValue() > (d2.getValue()-1)){
		//Stops animation when date reached the end date
		clearInterval(setIntHandler);
		document.getElementById("ani").disabled=false;
		document.getElementById("clear").disabled=false;
	}
}