<?php
	require("config.php");
	$keywords=$_POST['keywords'];
	$result=mysqli_query($con,"select title from wwww");
	if (!$result) {
		die('can not read data:' .mysqli_error($con));
	  }
	echo "<h2> Mysql where</h2>";
	echo "<table border='1'><tr><td>ID</td><td>name</td><td>email</td>";
	while ($row=mysqli_fetch_array($result)) {
		echo "<tr><td>{$row['id']}</td>";
		echo "<td>{$row['name']}<?td>";
		echo "<td>{$row['email']}<?td>";
		echo "</tr>";
	  }  
	echo "</table>";
?>