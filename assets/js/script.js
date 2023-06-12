let nome = window.document.getElementById ('nome')
let telefone = window.document.getElementById ('telefone')
let email = window.document.getElementById ('email')

nome.style.width = "71%"
telefone.style.width = "71%"
email.style.width = "71%"


function validaNome() {
    let txtNome = document.querySelector("#txtNome");

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome muito curto";
        txtNome.style.color = "red";
    } else {
        txtNome.innerHTML = "✔";
        txtNome.style.color = "green";
        nome = true;
    }

function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = "red";
        emailOk = false;
    } else {
        txtEmail.innerHTML = "✔";
        txtEmail.style.color = "green";
        emailOk = true;
    }
}

function validarEmail2() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.match(regex)) {
        txtEmail.innerHTML = "✔";
        txtEmail.style.color = "green";
        emailOk = true;
    } else {
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = "red";
        emailOk = false;
    }
}
}