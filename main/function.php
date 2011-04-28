<?php

function fetch_data_by_date($date) {
	try
	{
		$db=new PDO('sqlite:post_coordinates.db');

		$result=$db->query("select * from post_coordinates where POST_CREATED_AT between '".$date." 00:00:00' and '".$date." 23:59:59.999999' limit 100");
		$db = NULL; // close db connection
		$array = $result->fetchAll(PDO::FETCH_ASSOC);
		unset($result);
		return json_encode($array);
	}
	catch(PDOException $e) {
		print 'Exception : '.$e->getMessage();
	}

}

echo fetch_data_by_date("2004-09-01", "2004-09-31");

?>


