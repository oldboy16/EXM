var elInp = document.querySelector(".inp")
var elText = document.querySelector(".text")
function fn(){
    var inp = elInp.value 
    var text = elText.value
    if (inp != inp.toLowerCase()){
        elText.textContent = "Tasdiqlandi!"
        elText.style.color = "green"
        elInp.style.borderBottom = "2px solid green"
    }else{
        elText.textContent = "Katta harf kiriting!"
        elText.style.color = "red"
        elInp.style.borderBottom = "2px solid red"
        elInp.value = ""
    }
}