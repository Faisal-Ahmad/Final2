function checkname()
	{
		var err1,err2="";
		var x =document.getElementsByName("fname")[0].value.trim();
		if(x.length==0)
		{
			document.getElementsByName("fname")[0].style.border="1px solid red";
			document.getElementById("corrfname").innerHTML="";
			err1="Invalid First Name";
			return false;
		}
		else
		{
			if(!/^[a-zA-Z' ']/.test(x))
			{
				document.getElementsByName("fname")[0].style.border="1px solid red";
				document.getElementById("corrfname").innerHTML="Only Letter allowed";
				document.getElementById("corrfname").style.color="red";
				return false;
			}
			else
			{
				document.getElementById("corrfname").innerHTML="<i class='fas fa-check'></i>";
				document.getElementById("corrfname").style.color="green";
				document.getElementsByName("fname")[0].style.border="1px solid green";
				return true;
			}
		}
		
	}
	function checklastname()
	{
		var x =document.getElementsByName("lname")[0].value.trim();
		if(x.length==0)
		{
			document.getElementsByName("lname")[0].style.border="1px solid red";
			document.getElementById("corrlname").innerHTML="";
			return false;
		}
		else
		{
			if(!/^[a-zA-Z' ']/.test(x))
			{
				document.getElementsByName("lname")[0].style.border="1px solid red";
				document.getElementById("corrlname").innerHTML="Only Letter allowed";
				document.getElementById("corrlname").style.color="red";
				return false;
			}
			else
			{
				document.getElementById("corrlname").innerHTML="<i class='fas fa-check'></i>";
				document.getElementById("corrlname").style.color="green";
				document.getElementsByName("lname")[0].style.border="1px solid green";
				return true;
			}
		}
		
	}
	function checklastname()
	{
		var x =document.getElementsByName("lname")[0].value.trim();
		if(x.length==0)
		{
			document.getElementsByName("lname")[0].style.border="1px solid red";
			document.getElementById("corrlname").innerHTML="";
			return false;
		}
		else
		{
			if(!/^[a-zA-Z' ']/.test(x))
			{
				document.getElementsByName("lname")[0].style.border="1px solid red";
				document.getElementById("corrlname").innerHTML="Only Letter allowed";
				document.getElementById("corrlname").style.color="red";
				return false;
			}
			else
			{
				document.getElementById("corrlname").innerHTML="<i class='fas fa-check'></i>";
				document.getElementById("corrlname").style.color="green";
				document.getElementsByName("lname")[0].style.border="1px solid green";
				return true;
			}
		}
		
	}
	function checkmail()
	{
		var x =document.getElementsByName("email")[0].value.trim();
		if(x.length==0)
		{
			document.getElementsByName("email")[0].style.border="1px solid red";
			document.getElementById("corremail").innerHTML="";
			return false;
		}
		else
		{
			if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(x))
			{
				document.getElementsByName("email")[0].style.border="1px solid red";
				document.getElementById("corremail").innerHTML="Invalid Email";
				document.getElementById("corremail").style.color="red";
				return false;
			}
			else
			{
				document.getElementById("corremail").innerHTML="<i class='fas fa-check'></i>";
				document.getElementById("corremail").style.color="green";
				document.getElementsByName("email")[0].style.border="1px solid green";
				return true;
			}
		}
		
	}
	function checkphone()
	{
		var x =document.getElementsByName("phone")[0].value.trim();
		if(x.length==0)
		{
			document.getElementsByName("phone")[0].style.border="1px solid red";
			document.getElementById("corrphone").innerHTML="";
			return false;
		}
		else
		{
			if(!isNaN(x) && x.length==11)
			{
				document.getElementById("corrphone").innerHTML="<i class='fas fa-check'></i>";
				document.getElementById("corrphone").style.color="green";
				document.getElementsByName("phone")[0].style.border="1px solid green";
				return true;
			}
			else
			{
				document.getElementsByName("phone")[0].style.border="1px solid red";
				document.getElementById("corrphone").innerHTML="Invalid Number";
				document.getElementById("corrphone").style.color="red";
				return false;
			}
		}
		
	}
	function checkpass()
	{
		var x =document.getElementsByName("password")[0].value.trim();
		if(x.length==0)
		{
			document.getElementsByName("password")[0].style.border="1px solid red";
			document.getElementById("corrpass").innerHTML="";
			return false;
		}
		else
		{
			if(!/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(x))
			{
				document.getElementsByName("password")[0].style.border="1px solid red";
				document.getElementById("corrpass").innerHTML="Minumun 8 Must an upper and special charater";
				document.getElementById("corrpass").style.color="red";
				return false;
			}
			else if(x.length>7)
			{
				document.getElementById("corrpass").innerHTML="<i class='fas fa-check'></i>";
				document.getElementById("corrpass").style.color="green";
				document.getElementsByName("password")[0].style.border="1px solid green";
				return true;
			}
		}
		
	}
	function checkcpass()
	{
		var x =document.getElementsByName("cpassword")[0].value.trim();
		if(x.length==0)
		{
			document.getElementsByName("cpassword")[0].style.border="1px solid red";
			document.getElementById("corrcpass").innerHTML="";
			return false;
		}
		else
		{
			if(x == document.getElementsByName("password")[0].value.trim())
			{
				document.getElementById("corrcpass").innerHTML="<i class='fas fa-check'></i>";
				document.getElementById("corrcpass").style.color="green";
				document.getElementsByName("cpassword")[0].style.border="1px solid green";
				return true;
			}
		
			else
			{
				document.getElementsByName("cpassword")[0].style.border="1px solid red";
				document.getElementById("corrcpass").innerHTML="Password Not Matched";
				document.getElementById("corrcpass").style.color="red";
				return false;
			}
		}
		
	}
	function check()
	{
		var fnameok =checkname();
		var lnameok = checklastname();
		var emailok = checkmail();
		var phoneok = checkphone();
		var passok = checkpass();
		var cpassok = checkcpass();
		if(fnameok == true && lnameok == true && emailok == true && phoneok == true && passok==true && cpassok==true)
		{
			return true;
		}
		else
		{
			return false;
		}
	}