<?php

function get_thread_nr($startdate, $enddate) {
	try
	{
		$db=new PDO('sqlite:post_coordinates.db');
		$result=$db->query("select count(*) from post_coordinates where POST_CREATED_AT between '".$startdate." 00:00:00' and '".$enddate." 23:59:59.999999'");
		$db = NULL; // close db connection
		$array = $result->fetchAll(PDO::FETCH_ASSOC);
		unset($result);
		$json = json_encode($array);
		// $myFile = "testFile.txt";
		// $fh = fopen($myFile, 'w') or die("can't open file");
		// fwrite($fh, $json);
		// fwrite($fh, $date);
		// fclose($fh);
		echo $json;
	}
	catch(PDOException $e) {
		print 'Exception : '.$e->getMessage();
	}

}

get_thread_nr($_GET["s_date"], $_GET["e_date"]);

?>