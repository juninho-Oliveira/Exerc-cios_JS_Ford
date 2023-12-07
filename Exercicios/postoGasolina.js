// Um posto está vendendo combustíveis com a seguinte tabela de descontos:

// Álcool:
// . até 20 litros, desconto de 3% por litro Álcool
// . acima de 20 litros, desconto de 5% por litro

// Gasolina:
// . até 20 litros, desconto de 4% por litro Gasolina
// . acima de 20 litros, desconto de 6% por litro

// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado
// da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente
// sabendo-se que o preço do litro da gasolina é R$ 5,30 e o preço do litro do álcool é R$ 4,90.

// Dica: utilize switch case, operadores lógicos e relacionais e estrutura de condição para otimizar o algorítimo.

//entrada de dados
// = selecionar se deseja abastecer com alcool ou com gasolina;
// = selecionar a quantidade de litros que o usuário deseja;

//processamento de dados
// = switch case para gasolina ou alcool

//saida de dados
// = mostrar a porcentagem de desconto se for alcool ou se for gasolina



console.log('Digite A para Álcool e G Gasolina')
let escolha = "A"
const precoDoLitroG = 5.30 
const precoDoLitroA = 4.90
let litros = 0

switch (escolha) {
    case "A":
        console.log('-----Álcool-----');
        console.log('até 20 litros, desconto de 3% por litro Álcool');
        console.log('acima de 20 litros, desconto de 5% por litro');
        let totalLitros = 0;
        let desconto = 0; 
        let resu = 0;

        litros = 18 //prompt(Number('Digite quantos litros você quer ?'));
        if (litros == 20) {
            totalLitros = litros * precoDoLitroA
            desconto = (totalLitros * 3)/100
            resu = totalLitros - desconto;
            console.log(`O total sem o desconto é: R$ ${totalLitros.toFixed(2)} e com 3% de desconto ficou: R$ ${resu.toFixed(2)}`)
        } else if (litros > 20) {
            totalLitros = litros * precoDoLitroA
            desconto = (totalLitros * 5)/100
            resu = totalLitros - desconto;
            console.log(`O total sem o desconto é: R$ ${totalLitros.toFixed(2)} e com 5% de desconto ficou: R$ ${resu.toFixed(2)}`)
        } else {
            totalLitros = litros * precoDoLitroA
            console.log(`O total sem o desconto é: R$ ${totalLitros.toFixed(2)} `)
        }

    break;

    case "B":
        console.log('-----Gasolina-----');
        console.log('até 20 litros, desconto de 4% por litro Gasolina');
        console.log('acima de 20 litros, desconto de 6% por litro');
    break;

    default:
        console.log('Erro')
    break;
}