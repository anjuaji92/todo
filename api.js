
function check()
{
    var mypromise=new Promise(function(resolve,reject){
        var c=0;
        var t=0;
        var i=0;
        for(i=0;i<200;i++){
            if(todo[i].checked){
                c++;
            
            }
            else{
                t++;
               
            }
        }
        if(t-c==10){
            resolve();
        }
        else{
            reject(t-c);
        }
    })
    mypromise.then(function(){
       document.getElementById("lead").innerHTML=" Congrats!! 5 Tasks have been Successfully Completed " ;
        alert("Congrats!! 5 Tasks have been Successfully Completed ");

    });
}

var todo=[]
var i=0;
function ajax()
{
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function()
{
 if(this.readyState==4&&this.status==200)
 {
     var response=JSON.parse(this.responseText);
     var output="";
     var x="";
     for(i=0;i<response.length;i++)
     {
        x+='<input type="checkbox"  value="<li>"'+response[i].title +'"</li>'+response[i].title +'<br></input>';
       //console.log(response[i].complet
       todo[i]=x;
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
}

