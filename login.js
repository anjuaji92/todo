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
        alert("Either usr or pwd is invalid");
        return false;
    }
}

//todos
        document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);
    
        function fetchUserData(){
            fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(response => response.json())
                .then(json => console.log(json))
        }
    