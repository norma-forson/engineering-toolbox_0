function myFunction(){
    var un =document.forms["myForm"]["name"].value;
    var pw =document.forms["myForm"]["Pass"].value;
    if((un == "student" && pw=="1234")){
        window.location.href="index.html";
    }
    else{
        alert("Invalid Username and password");
       
    }
}