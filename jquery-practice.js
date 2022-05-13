$(document).ready(function () {

    // basic button and making background color in jquery
    var button = document.createElement("button")

    // creating html elements

    let form = document.createElement("form")
    let name = document.createElement("h1")
    let email = document.createElement("p")
    let div = document.createElement("div")
    button.innerText = "click me"
    // appending the form with input foelds
    form.append(button)

    // appending the body of the document
    document.body.append(form)
    document.body.append(div)
   
    $("body").css("color", "yellow")
    $(button).click(function (e) {
        e.preventDefault()
        alert("ive been clicked")

        let nameInput = document.querySelector("#name")
        let cityInput = document.querySelector("#email")

        $.post("https://jsonplaceholder.typicode.com/posts", {
            name: nameInput.value,
            city: cityInput.value,
            // state: "Texas",
            // street: "3403 Mcneil Street"
        })
            .done(function (data) {
                console.log(data)
            })
            .fail(function (err) {
                console.log(err)
            })

        form.append(nameInput)
        form.append(cityInput)
    });



    // ajax call to json placeholder
    $.ajax("https://jsonplaceholder.typicode.com/users")
        .done(function (data) {
            console.log("much success", data)
            data.map(function (data) {
                name.innerText = data.name
                email.innerText = data.email
                div.append(name, email)
            })

        })
        .fail(function (err) {
            console.log("something broke!", err)
        })











})