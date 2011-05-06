<?php

function get_thread_nr($startdate, $enddate) {
	try
	{
		$db=new PDO('sqlite:post_coordinates.db');
		$result=$db->query("select * from post_coordinates where POST_CREATED_AT between '".$startdate." 00:00:00' and '".$enddate." 23:59:59.999999'");
		$db = NULL; // close db connection
		$rows = $result->fetchAll();
		$row_count = count($rows);
		echo $row_count;
	}
	catch(PDOException $e) {
		print 'Exception : '.$e->getMessage();
	}

}

get_thread_nr($_GET["s_date"], $_GET["e_date"]);

?>