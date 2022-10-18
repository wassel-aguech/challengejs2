let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let email = document.getElementById("email");
let pass = document.getElementById("mpass1");
let passconf = document.getElementById("mpass2");



function register() {

    var formValid = true;
    if (nom.value == "") {
        nom.classList.add("is-invalid");
        nom.classList.remove("is-valid")
        formValid = false
    } else {
        nom.classList.add("is-valid");
        nom.classList.remove("is-invalid");

    }

    if (prenom.value == "") {
        prenom.classList.add("is-invalid");
        prenom.classList.remove("is-valid");
        formValid = false
    } else {
        prenom.classList.add("is-valid");
        prenom.classList.remove("is-invalid");

    }

    if (email.value == "" || email.value.indexOf("@") == -1) {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        formValid = false
    } else {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");

    }

    if (pass.value == "") {
        pass.classList.add("is-invalid");
        pass.classList.remove("is-valid");

        formValid = false
    } else {
        pass.classList.add("is-valid");
        pass.classList.remove("is-invalid");

    }
    if (passconf.value !== pass.value || passconf.value == "") {
        passconf.classList.add("is-invalid");
        passconf.classList.remove("is-valid");

        formValid = false
    } else {
        passconf.classList.add("is-valid");
        passconf.classList.remove("is-invalid");
    }
    if (formValid) {
        let data = {
            nom: nom.value,
            prenom: prenom.value,
            email: email.value,
            pass: pass.value,
        }
        var users = JSON.parse(localStorage.getItem('users')) || []
        console.log(data);
        users.push(data)
        localStorage.setItem("users", JSON.stringify(users))

    } else {
        alert('invalid form')
    }
}



document.getElementById("btn").addEventListener("click", register);