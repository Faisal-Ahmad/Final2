<html>
<head>
	<title>Register</title>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
	<script src="myscript.js"></script>
</head>

<body>
	<br/><br/><br/>
	<form name="form1" method="post"  onsubmit="return check()" action="view.php">
		<table align="center">
            <tr>
                <td>FirstName :</td>
                <td>
				<input type="text" name="fname"/>
				<span id="corrfname"></span>
				</td>
            </tr>
            <tr>
                <td>LastName :</td>
                <td>
				<input type="text" name="lname" >
				<span id="corrlname"></span>
				</td>
            </tr>
            <tr>
				<td>Email</td>
				<td>
				<input type="text" name="email">
				<span id="corremail"></span>
				</td>
			</tr>
            <tr>
                <td>Phone Number</td>
                <td>
				<input type="text" name="phone">
				<span id="corrphone"></span>
				</td>
            </tr>
			<tr> 
				<td>Password</td>
				<td>
				<input type="password" name="password">
				<span id="corrpass"></span>
				</td>
			</tr>
			
			<tr> 
				<td>Confirm Password</td>
				<td>
				<input type="password" name="cpassword">
				<span id="corrcpass"></span>
				</td>
			</tr>
            <tr> 
				<td></td>
				<td>
				<input type="submit" value="Register">
				<input type="reset" value="clear">
				</td>
			</tr>
		</table>
	</form>
</body>
</html>