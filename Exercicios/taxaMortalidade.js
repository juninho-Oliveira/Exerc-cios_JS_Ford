// A taxa de natalidade e a taxa de mortalidade são indicadores estatísticos de fundamental importância por ajudar a compreender aquilo que os especialistas chamam de dinâmica populacional e a entender sua relação com variáveis que influenciam o desenvolvimento, como qualidade de vida, migrações, , fatores socioeconômicos e localização. Sabendo disso, crie um programa que calcule os dois indicadores utilizando o comando switch.

// Observação : A taxa de natalidade é calculada pela seguinte fórmula: taxa de natalidade = (número de crianças nascidas x 1000) / número de habitantes;
// Enquanto que, a taxa de mortalidade = (números de óbitos x 1000) /número de habitantes.

//entrada de dados
// verificar o que o usuario vai querer calcular (natalidade ou mortalidade)
// determinar o número de crianças nascidas e o número de habitantes para natalidade
// determinar o número de óbitos e o número de habitantes para mortalidade

//processamento de dados
// realizar o calculo de natalidade e mortalidade 
// determinar com switch case se o usuario vai querer calcular natalidade ou mortalidade

//saída de dados
// imprimir na tela a taxa de mortalidade ou natalidade

const criancaNascidas = 30
const habitantes = 5000
const obitos = 10;

console.log('Digite M para calcular a taxa de Mortalidade e N para a taxa de natalidade')
const res = "M"

switch (res) {
    case "M":
        const mortalidade  = (obitos * 1000)/ habitantes;
        console.log(`O número de óbitos: ${obitos} e o número de habitantes ${habitantes} para mortalidade ${mortalidade}`) 
    break;

    case "N":
        const natalidade = (criancaNascidas * 1000)/ habitantes;
        console.log(`o número de crianças nascidas: ${criancaNascidas} e o número de habitante: ${habitantes} para natalidade: ${natalidade}`) 
    break;
}
