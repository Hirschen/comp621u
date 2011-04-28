<?php

function fetch_data_by_date($startdate, $enddate) {
	try
	{
		$db=new PDO('sqlite:post_coordinates.db');

		$result=$db->query("select * from post_coordinates where POST_CREATED_AT between '".$startdate." 00:00:00' and '".$enddate." 23:59:59.999999' limit 100");
		$db = NULL; // close db connection
		// return json_encode($result);
		return $result;
	}
	catch(PDOException $e) {
		print 'Exception : '.$e->getMessage();
	}

}

$result = fetch_data_by_date("2004-09-01", "2004-09-31");
foreach($result as $row) {
	echo json_encode($row);
}
?>


