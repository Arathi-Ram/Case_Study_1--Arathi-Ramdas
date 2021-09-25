window.onload = function(){
    var loginForm = document.getElementById("login-form");
var user = document.getElementById("userName");
var pass = document.getElementById("Pass");
var parent = document.getElementById("login-form-control")

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    validate(navigate);
});
function navigate() {  
    window.location.replace("mainPg.html");
}

function validate(callback) {
    const userValue = user.value;
    const passValue = pass.value;
    const small = document.getElementById("Error");
    small.innerText = ""; //try to work this out

    if(userValue == "admin" && passValue == "12345"){
        callback();
        console.log("correct email/password");
    }
    else{
        console.log("Error!")
        //  small.innerText = "Invalid Username / Password!";
    }

}
// end of Login Section------------------------------------


}