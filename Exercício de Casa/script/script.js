function exibirDados(event) {
    event.preventDefault();

    let pegaTitulo = document.getElementById('title').value;
    let pegaSubtitulo = document.getElementById('subtitle').value;
    let pegaAuthor = document.getElementById('author').value;
    let pegaPages = document.getElementById('pages').value;
    let pegaDate = document.getElementById('date').value;
    let pegaIsbn = document.getElementById('isbn').value;
    let dataInsercao = new Date().toLocaleDateString('pt-br');
    let horaInsercao = new Date().toLocaleTimeString('pt-br');

    if (pegaTitulo === "" || pegaAuthor === "" || pegaPages === "" || pegaDate === "" || pegaIsbn === "") {
        alert("Campo obrigatório não preenchido")
    } else {
        document.getElementById('texto').innerHTML += `
    <tr >
        <td> ${pegaTitulo} </td>
        <td> ${pegaSubtitulo} </td>
        <td> ${pegaAuthor}</td>
        <td> ${pegaPages}</td>
        <td> ${pegaDate} </td>
        <td>${pegaIsbn}</td>
        <td> ${dataInsercao} - ${horaInsercao}</td>
        <td> <button class="delete">Remover</button></td>
    </tr>
    `
        limparCampo();

    }
}

function limparCampo() {

    document.getElementById('title').value = "";
    document.getElementById('subtitle').value = "";
    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";
    document.getElementById('date').value = "";
    document.getElementById('isbn').value = "";

}

document.getElementById('texto').addEventListener('click', function removerLinha(event) {
    if (event.target.className === "delete") {
        let botao = event.target.parentElement;
        botao.parentElement.remove();
    }
})


//UMA OUTRA FORMA DE REALIZAR A MESMA FUNCUINALIDADE ACIMA



/*
function exibirDados(event) {
    event.preventDefault();

    let pegaTitulo = document.getElementById('title').value;
    let pegaSubtitulo = document.getElementById('subtitle').value;
    let pegaAuthor = document.getElementById('author').value;
    let pegaPages = document.getElementById('pages').value;
    let pegaDate = document.getElementById('date').value;
    let pegaIsbn = document.getElementById('isbn').value;
    let dataInsercao = new Date().toLocaleDateString('pt-br');
    let horaInsercao = new Date().toLocaleTimeString('pt-br');

    

       let lista = document.getElementById('texto');
       let tr = document.createElement('tr');
       let td = document.createElement('td');
       td.textContent = pegaTitulo;
       tr.appendChild(td);
       let tdSubtitulo = document.createElement('td');
       tdSubtitulo.textContent = pegaSubtitulo;
       tr.appendChild(tdSubtitulo);
       let tdAuthor = document.createElement('td');
       tdAuthor.textContent = pegaAuthor;
       tr.appendChild(tdAuthor);
       let tdPages = document.createElement('td');
       tdPages.textContent = pegaPages;
       tr.appendChild(tdPages);
       let tdDate = document.createElement('td');
       tdDate.textContent = pegaDate;
       tr.appendChild(tdDate);
       let tdIsbn = document.createElement('td');
       tdIsbn.textContent = pegaIsbn;
       tr.appendChild(tdIsbn);
       let tdInsercao = document.createElement('td');
       tdInsercao.textContent = (`${dataInsercao}, ${horaInsercao}`);
       tr.appendChild(tdInsercao);
       let tdButton = document.createElement('td')
       tdButton.appendChild(criarButao());
       tr.appendChild(tdButton);

       lista.appendChild(tr);
}


function criarButao() {

    let botao = document.createElement("button");
    botao.textContent = "Remover";


    botao.addEventListener('click', function(event) {
        let buttonRetornado = event.target;
        let colunaButton = buttonRetornado.parentNode;
        let linhaButton = colunaButton.parentNode;
        linhaButton.remove();

    })
    return botao;
}

*/