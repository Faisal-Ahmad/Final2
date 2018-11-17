<html>
	<head>
	</head>
	<body>
		<div align="center">
		<h1 style="color:green;">Your Entered Informations: </h1><br/>
		<?php
			echo "<h3>FirstName : ".$_POST["fname"]."</h3>";
			echo "<h3>LastName : ".$_POST["lname"]."</h3>";
			echo "<h3>Email : ".$_POST["email"]."</h3>";
			echo "<h3>Phone : ".$_POST["phone"]."</h3>";
			echo "<h3>Password : ".$_POST["password"]."</h3>";
		?>
		</div>
	</body>	
</html>