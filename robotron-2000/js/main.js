
const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
        
    })
})

 function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');
    if(operacao === '-'){
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }          
    
 }

 function atualizaEstatisticas(peca) {
    
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
 }


/*
1 Quero acessar cada botão do HTML
2 acessar cada input e identificalos
2 quero atribuir um botão específico para um input específico
2 Se o valor do botão for positivo quero adicionar 1 numero do valor do input
3 Se o valor do botão for negativo quero subtrair 1 numero do valor do input

Se o botão controle-ajuste for de braco e positivo, somar 1 para braço*/

/*
1 - criar uma lista de elementos
2 - criar um loop onde o elemento clicado 
3 - 
*/