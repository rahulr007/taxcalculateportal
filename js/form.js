function validation1()
{
var fname=document.signup.fname.value;
var lname=document.signup.lname.value;
var pwd=document.signup.pwd.value;
var conPwd=document.signup.cpd.value;
var gender=document.signup.gender.value;
var mail=document.signup.mail.value;
var i=0;
var c=0;
var check=0;

if(fname=="")
{
alert("please enter first name");
return false;
}
if(lname=="")
{
alert("please enter last name");
return false;
}
if(pwd=="")
{
alert("please enter password");
return false;
}
if(pwd.length<8)
{
alert("password atleast contain 8 characters");
return false;
}
for(i=0;i<pwd.length;i++)
{
   c=pwd.charAt(i);
   if((c>='A' && c<='Z')||(c>='a' && c<='z')||(c>='0' && c<='9'))
   {
   check=1;  
   }
	
   else
   {
    alert("Enter only alphabets and digits in password");
    return false;
   }
   
}

if(conPwd=="")
{
alert("please enter confirm password");
return false;
}

if(conPwd!=pwd)
{
alert("password mismatch");
return false;
}

if(gender=="")
{
alert("gender not select");
return false;
}
if(mail=="")
{
alert("mail id not entered");
return false;
}

if(check==1)
{
alert("Account Created Successfully!");
return true;
}


}
