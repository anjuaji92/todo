var usr=document.getElementById("usr");
var pwd=document.getElementById("pwd");
function validate()
{
    if(usr.value==""||pwd.value=="")
    {
        alert("Fields can't be empty");
        return false;
    }
    else{
        return true;
    }
}
function validate2()
{
    if(usr.value=="admin" && pwd.value=="12345")
    {
        return true;
    }
    else{
        alert("Either username or password is invalid");
        return false;
    }
}

