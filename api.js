function ajax()
{
    var xhttp=new.XMLHttpRequest();
    xhttp.onreadystatechang=function()
    {
        if(this.readyState==4&&this.status==200)
        {
            var response=JSON.parse(this.response);
            var output="";
            for(var i=0;i<response.length;i++)
            {
                output+="<li>"+respo[i].title+"</li>";
            }
            document.getElementById("demo").innerHTML=output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}