// Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.

//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo

//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram

//saida
// = informar o resultado do jogo de futebol
const nomeTime = "São Paulo"
let time1 = 3

const nomeTime2 = "corinthians"
let time2 = 3

if(time1 > time2) {
    console.log(`Time ${nomeTime}, ganhou por ${time1} X ${time2} Do time ${nomeTime2}`)
} else if (time2 > time1) {
    console.log(`Time ${nomeTime2}, ganhou por ${time1} X ${time2} Do time ${nomeTime}`)
} else {
    console.log(`Os times ${nomeTime} e ${nomeTime2} empataram ${time2} X ${time1}`)
}