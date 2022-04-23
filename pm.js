function myFunction(){
    var un =document.forms["myForm"]["email"].value;
    var pw =document.forms["myForm"]["YearGroup"].value;
    if((un.includes("@ashesi.edu.gh") && pw>=2022 && pw<=2025)){
        window.location.href="index.html";
    }
    else{
        alert("Invalid Username and password");
       
    }
}