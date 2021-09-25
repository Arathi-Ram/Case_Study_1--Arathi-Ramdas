function display(){
  
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var response = JSON.parse(this.responseText);
                let output = "";
                for(let i=0;i<response.length;i++){
                    if(response[i].completed === true){
                        output += "<input type = 'checkbox' checked disabled > "+ response[i].title + "<hr>";

                    }
                    else{
                        output += "<input class = 'checkcls' type = 'checkbox' onchange = 'todoCheck();' > " + response[i].title + "<hr>";
                        
                    }

                }
                document.getElementById("demo").innerHTML = output;
            }
        }
        xhttp.open( "GET","https://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();
    
}

function todoCheck(){
    return new Promise(function(resolve,reject){
        var dataInputs = document.getElementsByClassName("checkcls");
        var counter = 0;
        for(i=0;i<dataInputs.length;i++){    
            if(dataInputs[i].checked === true){
                counter++;
            }
            
        }
        if(counter == 5){
            alert(`Congrats You have completed ${counter} tasks`);
            resolve(`Congrats You have completed ${counter} tasks`);
        }

    });
}

display();
todoCheck().then(function(s){ alert(s); })
   
