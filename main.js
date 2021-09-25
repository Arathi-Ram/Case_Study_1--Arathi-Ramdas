//  ONLY FOR TESTING. NOT ACTUAL JS FILE


function test(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status == 200){
            var response = JSON.parse(this.responseText);
            let output = "";

            for(i=0;i<response.length;i++){
                

                if(response[i].completed === true){
                    output += "<input type = 'checkbox' checked disabled >  "+ response[i].title + "<hr>";
                }
                else{
                    output += "<input class = 'checkcls' type = 'checkbox' onchange = 'todoCheck();' >  "+ response[i].title + "<hr>";
                }
                
            }
            document.getElementById("demo").innerHTML = output;

            
            
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

test();

//Promise concept for 5 tasks completed.....
function todoCheck(){
    var dataInput = document.querySelectorAll(".checkcls");
    count = 0
    for(let k=0;k<dataInput.length;k++){
        if(dataInput[k].checked === true){
            count++;
        }
    }

    return new Promise(function(resolve,reject){
        if(count === 5){
            resolve();
        }
    });
}
todoCheck().then(function(){
    console.log("Congrats! You have completed 5 Todo Tasks")
    // alert("Congrats! You have completed 5 Todo Tasks");
});







