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
                output +="<li>"+response[i].title +"</li>";
            }
            document.getElementById("demo").innerHTML=output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
output +='<input type="checkbox" id="checkbox1" checked="'+response[i].completed+'" value="<li>"'+response[i].completed +'"</li>'+response[i].title +'<br></input>';




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
              // output+='<input type="checkbox" checked='+response[i].completed+' value="<li>"'+response[i].title +'"</li>'+response[i].title +'<br></input>';
              //console.log(response[i].completed);
             // output+='<input type="checkbox" value="<li>"'+response[i].title+'"</li>'+response[i].title+'<br></input>';
        if(response[i].completed==true)
                {
                  output+='<input class="game" type="checkbox" checked diabled="disable" value="<li>"'+response[i].title+'"</li>'+response[i].title+'<br></input>';
                  console.log(output);
                }
                else{
                  output+='<input class="game" type="checkbox" value="<li>"'+response[i].title+'"</li>'+response[i].title+'<br></input>';
                   }
         }
               
            
            var dwrap=document.getElementById("demo");
            dwrap.innerHTML=output;
        
        }
        
       
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    var max_limit = 2; // Max Limit
$(document).ready(function (){
    $(".game:input:checkbox").each(function (index){
        this.checked = (".game:input:checkbox" < max_limit);
    }).change(function (){
        if ($(".game:input:checkbox:checked").length > max_limit){
            this.checked = false;
        }
    });
});
}
