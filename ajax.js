function ajax()
{
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function()
    {
        if(this.readyState==4&&this.status==200)
        {
            var response=JSON.parse(this.responseText);
            console.log(response);
            var output="";
            for(var i=0;i<response.length;i++)
            {
                output +='<input type="checkbox" name="tname" value="'+response[i].completed;+'">'+response[i].title +'<br></input>';
            }
            document.getElementById("demo").innerHTML=output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}