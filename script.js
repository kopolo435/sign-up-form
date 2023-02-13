const password=document.querySelector("#password");
const conPassword=document.querySelector("#conPassword");

conPassword.addEventListener("input",()=>{
    if(password.value!=conPassword.value){
        password.classList.add("error");
        conPassword.classList.add("error");
    }
    else{
        if(password.classList){
            password.classList.remove("error");
            conPassword.classList.remove("error");
        }
    }
})