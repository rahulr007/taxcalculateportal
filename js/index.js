function validation1()
{

var uname=document.login.username.value;
var pwd=document.login.password.value;

if(uname=="")
{
alert("Please enter username !!");
return false;
}
if(pwd=="")
{
alert("Please enter password!!");
return false;
}
if(uname=="admin" && pwd=="admin")
{
return true;
}
else
{
alert("Either username or password mismatch!!");
return false;
}
}

