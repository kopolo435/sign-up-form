const password=document.querySelector("#password");
const conPassword=document.querySelector("#conPassword");
const errorMsg=document.querySelector("#password+ span.errorMsg");
const form=document.querySelector("form");
const leftBar=document.querySelector(".leftBar");

conPassword.addEventListener("input",()=>{
    if(password.value!=conPassword.value){
        if(!(conPassword.value)){
            password.classList.remove("error");
            conPassword.classList.remove("error");
            errorMsg.textContent="";
        }else{
            password.classList.add("error");
            conPassword.classList.add("error");
            errorMsg.textContent="* Passwords do not match";
        }

    }
    else{
        if(password.classList || !(conPassword.value)){
            password.classList.remove("error");
            conPassword.classList.remove("error");
            errorMsg.textContent="";
        }
    }
})

form.addEventListener("submit",()=>{
    if(errorMsg.textContent){
        Event.preventDefault();
    }
})

window.addEventListener("DOMContentLoaded",()=>{
    if(leftBar.offsetWidth>300){
        console.log(leftBar.offsetWidth);
        leftBar.style.height="25vh";
    }
})