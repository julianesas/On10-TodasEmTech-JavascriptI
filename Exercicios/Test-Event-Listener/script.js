document.getElementById('acoesBotao').addEventListener('click', function acionarBotao() {
    const mudarCorTitulo = document.querySelector('.meu-titulo').style.color = "blue";

    const mudarParagrafo = document.querySelector('#meuNome').innerHTML += "E eu tenho 26 anos. "

    const mudaSpan = document.querySelector('span').style.textDecoration = "underline";
})