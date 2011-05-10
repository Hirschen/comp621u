function checkThreads(){
	var number = fetchNrThreads();
	document.getElementById("thread_count").value = number;
}

function fetchNrThreads(){
	var d1 = $("#from_date").data("dateinput");
	var d2 = $("#to_date").data("dateinput");
	var query = ("count.php?s_date="+d1.getValue("yyyy-mm-dd")+"&e_date="+d2.getValue("yyyy-mm-dd"))
	var jsonobj = $.ajax({
			type: "GET",
			url: query,
			dataType: "text",
			async: false
	});
	return parseInt(jsonobj.responseText);
}

var span = 0;

function animationLoop(){
	deleteOverlays();
	var d1 = $("#from_date").data("dateinput");
	var d2 = $("#to_date").data("dateinput");
	if(d1.getValue() > (d2.getValue())-1){
		return;
	}
	// DONT FUCK WITH THIS!
	var speed = parseInt(document.getElementById("speed").value);
	setIntHandler = setInterval("loop()",speed);
	document.getElementById("ani").disabled=true;
	document.getElementById("clear").disabled=true;
	//span = fetchNrThreads();
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
	
	if(jsonobj.responseText != ""){
		var response = jsonobj.responseText;
		var str1 = '{"posts": ';
		var str2 = '}';
		var jsonString = str1 + response + " " + str2;
		//alert(jsonString);
		var jsonArr = JSON.parse(jsonString);
		var latlng;

		$.each(jsonArr.posts,function(i,post){
			if((post.LAT != null) && (post.LNG != null)){
				latlng = new google.maps.LatLng(post.LAT, post.LNG);
		 		updateCircle(latlng, span);
			}
		});
	}
	else{
		alert("NULL WTF!! on "+d1.getValue("yyyy-mm-dd"));
	}


	d1.addDay(1);	
	if(d1.getValue() > (d2.getValue()-1)){
		//Stops animation when date reached the end date
		clearInterval(setIntHandler);
		document.getElementById("ani").disabled=false;
		document.getElementById("clear").disabled=false;
	}
}
