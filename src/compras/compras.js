const calcularTotal = (ferramentasDisponiveis, listaDeCompras) => {
    const quantidadeListaFerramentas = ferramentasDisponiveis.length;
    const quantidadeListaCompras = listaDeCompras.length;

    let valorTotalCompras = 0;
    let ferramentasCompradas = [];

    verificarTamanhoDaLista(quantidadeListaFerramentas, quantidadeListaCompras);

    for(let i = 0; i < quantidadeListaFerramentas; i++ ) {
        for(let c = 0; c < quantidadeListaCompras; c++) {
            if(ferramentasDisponiveis[i].nome == listaDeCompras[c]) {
                valorTotalCompras = valorTotalCompras + ferramentasDisponiveis[i].preco;
                ferramentasCompradas.push(ferramentasDisponiveis[i].nome);
            }
        }
    }

    return retornarMensagemFinal(ferramentasCompradas, valorTotalCompras);
}

const verificarTamanhoDaLista = (quantidadeListaFerramentas, quantidadeListaCompras) => {
    if(quantidadeListaFerramentas == 0 || quantidadeListaCompras == 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }
}

const retornarMensagemFinal = (ferramentasCompradas, valorTotalCompras) => {
    if(ferramentasCompradas.length == 0) {
        throw new Error("Nenhuma ferramenta desejada encontrada.");
    } else {
        return `O valor a pagar pelas ferramentas (${ferramentasCompradas.join(", ")}) é R$ ${valorTotalCompras.toFixed(2)}`;
    }
}

module.exports = {
    calcularTotal
}