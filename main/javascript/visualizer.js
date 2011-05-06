function checkThreads(){
	var d1 = $("#from_date").data("dateinput");
	var d2 = $("#to_date").data("dateinput");
	var query = ("count.php?s_date="+d1.getValue("yyyy-mm-dd")+"&e_date="+d2.getValue("yyyy-mm-dd"))
	var jsonobj = $.ajax({
			type: "GET",
			url: query,
			dataType: "text",
			async: false
	});
	document.getElementById("thread_count").value = parseInt(jsonobj.responseText);
}

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

	// create one circle
	// var latlng = new google.maps.LatLng(23.659619, 18.929443);

	//var jsonobj = getData(d1.getValue("yyyy-mm-dd"));
	var query = ("function.php?date="+d1.getValue("yyyy-mm-dd"));
	// $.get("function.php?date=2004-06-07", function(data){
	// 	alert("Data Loaded: " + data);
	// 	});
	var jsonobj = $.ajax({
			type: "GET",
			url: query,
			dataType: "json",
			async: false
	});

	var str1 = '{"posts": ';
	var str2 = '}';
	var jsonobj = JSON.parse(str1 + jsonobj.responseText + str2);
	var latlng;

	$.each(jsonobj.posts,function(i,post){
	 latlng = new google.maps.LatLng(post.LAT, post.LNG);
	 updateCircle(latlng);
	});


	d1.addDay(1);	
	if(d1.getValue() > (d2.getValue()-1)){
		//Stops animation when date reached the end date
		clearInterval(setIntHandler);
		document.getElementById("ani").disabled=false;
		document.getElementById("clear").disabled=false;
	}
}