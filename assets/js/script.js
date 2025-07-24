const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const counter = document.querySelector('#txtMessage')
const message = document.querySelector("#message")

formulario.addEventListener('submit', function (event) {

    event.preventDefault();

    const campoNome = document.querySelector('#name');
    const txtNome = document.querySelector('#txtNome');

    if (campoNome.value.length < 3) {
        txtNome.innerHTML = 'O Nome deve ter no minimo 3 caracteres.';
        campoNome.focus();
        return;
    } else {
        txtNome.innerHTML = '';
    }

    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    if (!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = 'Digite um E-mail válido.';
        campoEmail.focus();
        return;
    } else {
        txtEmail.innerHTML = '';
    }

    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');

    if (campoSubject.value.length < 5) {
        txtSubject.innerHTML = 'O Assunto deve ter no minimo 5 caracteres.';
        campoSubject.focus();
        return;
    } else {
        txtSubject.innerHTML = '';
    }

    const campoMessage = document.querySelector('#message');

    window.alert("Formulário Enviado com Sucesso!");

    campoNome.value = ''
    campoEmail.value = ''
    campoSubject.value = ''
    campoMessage.value = ''

});

function countMessage() {
    let value = message.value.length
    counter.innerHTML = `${value} / 144`
}