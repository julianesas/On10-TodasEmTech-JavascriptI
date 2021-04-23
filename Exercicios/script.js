function clicar() {
    let exibePreco = document.getElementById('preco').innerHTML = 'Preço do imóvel: R$ 500.000, 00';
}

function mostrarPreco() {
    document.getElementById('button').addEventListener('click', function message() {
        let exibeMessage = document.getElementById('preco2').innerHTML = 'Preço do imóvel: R$ 600.000,00';
    })
}

mostrarPreco();