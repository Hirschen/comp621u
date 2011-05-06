<?php
function fetch_data_by_date($date) {
	try
	{
		$db=new PDO('sqlite:post_coordinates.db');
		$result=$db->query("select * from post_coordinates where POST_CREATED_AT between '".$date." 00:00:00' and '".$date." 23:59:59.999999'");
		$db = NULL; // close db connection
		$array = $result->fetchAll(PDO::FETCH_ASSOC);
		unset($result);
		$json = json_encode($array);
		echo $json;
	}
	catch(PDOException $e) {
		print 'Exception : '.$e->getMessage();
	}

}

fetch_data_by_date($_GET["date"]);

function get_thread_nr($startdate, $enddate) {
	try
	{
		$db=new PDO('sqlite:post_coordinates.db');
		$result=$db->query("select count(*) from post_coordinates where POST_CREATED_AT between '".$startdate." 00:00:00' and '".$enddate." 23:59:59.999999'");
		$db = NULL; // close db connection
		$array = $result->fetchAll(PDO::FETCH_ASSOC);
		unset($result);
		$json = json_encode($array);
		echo $json;
	}
	catch(PDOException $e) {
		print 'Exception : '.$e->getMessage();
	}
}

?>


