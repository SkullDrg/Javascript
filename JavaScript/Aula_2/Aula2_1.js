let x = prompt("Type a number");
let text;

function Answer() {
    document.getElementById("answer").innerHTML = x;

    if (x <= 10) {
        text = "The number is small";
        document.getElementById("number").innerHTML = text;
    } else {
        text = "The number is large";
        document.getElementById("number").innerHTML = text;
    }
}