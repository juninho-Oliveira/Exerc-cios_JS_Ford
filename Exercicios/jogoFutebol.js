// Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.

//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo

//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram

//saida
// = informar o resultado do jogo de futebol
const nomeTime = prompt('Digite o nome do primeiro time:')
let time1 = prompt(`Digite quantos gols fez o ${nomeTime}`)

const nomeTime2 = prompt('Digite o nome do segundo time:')
let time2 = prompt(`Digite quantos gols fez o ${nomeTime2}`)

function resultado(nomeTime, time1, nomeTime2, time2) {
    if (time1 > time2) {
        console.log(`Time ${nomeTime}, ganhou por ${time1} X ${time2} Do time ${nomeTime2}`)
    } else if (time2 > time1) {
        console.log(`Time ${nomeTime2}, ganhou por ${time2} X ${time1} Do time ${nomeTime}`)
    } else {
        console.log(`Os times ${nomeTime} e ${nomeTime2} empataram ${time2} X ${time1}`)
    }
}


resultado(nomeTime, time1, nomeTime2, time2)