let plus_sign = document.querySelector(".icon")
let plus_div_function = document.querySelector(".plus_div_function")
let top_icon = document.querySelectorAll(".top_icon")
let inbox_img = document.querySelector(".inbox_img")
let help_img = document.querySelector(".help_img")
let top_input = document.querySelector(".top_input")

console.log("dsdfsdsff")

plus_sign.addEventListener("click", function(){
    console.log("dfijnn")
    if (plus_div_function.style.display === "none"){
        plus_div_function.style.display = "block"
    }
    else{
        plus_div_function.style.display = "none"
    }
})