let age = prompt("Enter your age")
let text = ""

function Myfunction() {
    if (Number(age) < 18) {
        text = "You're underage"
        alert (text)
    } else if (Number(age) == 18) {
        text = "You've just reached the adulthood"
        alert (text)
    } else {
        text = "You're an adult"
        alert (text)
    }
}