let username = document.getElementById("username");
let password = document.getElementById("password");



let count = 0;

function contact(){
    window.open("https://google.com");
}


function btn(){
    if(username.value == "student" && password.value == "password"){
        window.open("https://google.com" , "_parent");
    }else{
        let message = document.querySelector(".wrong").innerHTML = "Wrong username or password! Try again";
        count++
    }
    if (count == 3){
        username.style.display = "none";
        password.style.display = "none";
        let message = document.querySelector(".wrong").innerHTML = "You had 5 attemps you can't sign in";
        let help = document.querySelector(".submit").onclick = contact();
        let help1 = document.querySelector(".submit").innerHTML = "contact us"
    }
}






