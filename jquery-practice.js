$(document).ready(function() {

    // basic button and making background color in jquery
    var button = document.createElement("button")
    button.innerText = "click me"
    document.body.append(button)
    $("body").css("background-color", "green")
    $(button).click(function() {
        alert("ive been clicked")
    });

    // ajax call to json placeholder
    $.ajax("https://jsonplaceholder.typicode.com/users")
    .done(function(data) {
        console.log("much success", data)
    })
    .fail(function(err) {
        console.log("something broke!", err)
    })

    $.post("https://jsonplaceholder.typicode.com/posts", {
        name: "Nick",
        city: "Dallas",
        state: "Texas",
        street: "3403 Mcneil Street"
    })
    .done(function(data) {
        console.log(data)
    })
    .fail(function(err) {
        console.log(err)
    })








})