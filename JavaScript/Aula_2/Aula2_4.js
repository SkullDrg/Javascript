let value = prompt ("Type here a value")
let text = ""

function Myfunction() {
    text = (Number(value)%2 == 0 ? "Evens" : "Odds")
    document.getElementById("answer").innerHTML = text
}