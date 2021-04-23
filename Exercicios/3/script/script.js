/*Sequência lógica

1 - armazenar valores e-mail e botão


*/

document.querySelector('.button').addEventListener('click', function exibeEmail(event) {
    event.preventDefault();
    let email = document.querySelector('#newsInputEmail');
    let exibeMessage = document.querySelector('.mensagem');

    if (email.value === '') {
        exibeMessage.innerHTML = ("Preencha o campo de email");
        exibeMessage.style.color = "red";
    } else {
        exibeMessage.innerHTML = email.value;
        exibeMessage.style.color = "white";
    }
})



//evento para a exibição do texto na tela principal