$(document).ready(function() {
    var button = document.createElement("button")
    button.innerText = "click me"
    document.body.append(button)
    $("body").css("background-color", "green")
    $(button).click(function() {
        alert("ive been clicked")
    })
})