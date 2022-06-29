const hamburger =document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n =>
     n.addEventListener("click",()=>{
         hamburger.classList.remove("active");
         navMenu.classList.remove("active");

}))

const details=["","",""]
function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var confirm=document.getElementById("Cpassword").value;
    if((password.length>=8)&&(confirm===password)){
        alert("Successfully Registered");

    }
    else{
        alert("Password should be minimum of 8 Characters");
    }
    
}