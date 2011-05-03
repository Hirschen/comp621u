<?php
function fetch_data_by_date($date) {
	try
	{
		echo $date;
		$db=new PDO('sqlite:post_coordinates.db');
		$result=$db->query("select * from post_coordinates where POST_CREATED_AT between '".$date." 00:00:00' and '".$date." 23:59:59.999999' limit 100");
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

fetch_data_by_date($_GET["date"]);

?>


