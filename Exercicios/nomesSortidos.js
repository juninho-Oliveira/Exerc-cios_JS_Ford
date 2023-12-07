// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes
// lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de
// pessoa (para efetuar uma busca) e depois escrever a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

let nomes = ['maria', 'julio', 'julia', 'bigode', 'pesso2', 'pesso3', 'pesso4', 'pesso5', 'pesso6', 'pesso7',]


function buscarNome(nome) {
    let pessoa = nomes.filter((ele) => ele === nome)

    if (nome == pessoa) {

        console.log(`Achei a pessoa que você procurava ela está com o nome registrado: ${pessoa}`)
    } else {
        console.log(`Pessoa ${nome} não encontrada no baco de dados `)
    }
}

buscarNome('julio')