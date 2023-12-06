let x = prompt("Enter a value")
let i = ""
let demo = ""

function Myfunction() {
    for (i = Number(x); i >= 0; i--) {
        demo += i + "<br>"
    } document.getElementById("answer").innerHTML = demo
}