let text = prompt("Write something");
let length = text.length

function Myfunction () {
    if (length <= 20) {
        document.getElementById("answer").innerHTML = "It's a small text";
    } else if (length > 20 && length <= 30) {
        document.getElementById("answer").innerHTML = "It's a medium size text";
    } else if (length > 30 && length <= 40) {
        document.getElementById("answer").innerHTML = "It's a large text";
    } else {
        document.getElementById("answer").innerHTML = "Not gonna count the size of it";
    }
}