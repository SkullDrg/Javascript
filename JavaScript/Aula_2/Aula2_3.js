let num = prompt("Type here a number")
let month = num
let text = ""

function Myfunction() {
    switch (Number(month)) {
        case 1:
            text = "January"
            document.getElementById("answer").innerHTML = text
            break
        case 2:
            text = "February"
            document.getElementById("answer").innerHTML = text
            break
        case 3:
            text = "March"
            document.getElementById("answer").innerHTML = text
            break
        case 4:
            text = "April"
            document.getElementById("answer").innerHTML = text
            break
        case 5:
            text = "May"
            document.getElementById("answer").innerHTML = text
            break
        case 6:
            text = "June"
            document.getElementById("answer").innerHTML = text
            break
        case 7:
            text = "July"
            document.getElementById("answer").innerHTML = text
            break
        case 8:
            text = "August"
            document.getElementById("answer").innerHTML = text
            break
        case 9:
            text = "September"
            document.getElementById("answer").innerHTML = text
            break
        case 10:
            text = "October"
            document.getElementById("answer").innerHTML = text
            break
        case 11:
            text = "November"
            document.getElementById("answer").innerHTML = text
            break
        case 12:
            text = "December"
            document.getElementById("answer").innerHTML = text
            break
        default:
            document.getElementById("answer").innerHTML = "Ivalid month, please refresh the page and try again."
    }
}