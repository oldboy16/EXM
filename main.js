var elInp = document.querySelector(".inp")
var elText = document.querySelector(".text")
function fn(){
    var inp = elInp.value 
    var text = elText.value
    if (inp != inp.toUpperCase()){
        elText.textContent = "Faqatgina katta harf kiriting !"
        elText.style.color = "red"
        elInp.style.borderBottom = "2px solid red"
    }else if (inp == inp.toUpperCase()){
        elText.textContent = "Togri kiritdingiz !"
        elText.style.color = "green"
        elInp.style.borderBottom = "2px solid green"
    }
    elInp.value = ""
}