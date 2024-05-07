let icon = document.getElementById("manheru");
console.log(icon);
icon.onclick = function(){
    document.body.classList.toggle("tashe");
    // if(document.body.classList.contains("tashe")){
    //     icon.src = "./image/sun.png";
    // }else{
    //     icon.src = "./image/moon.png";
    // }
}