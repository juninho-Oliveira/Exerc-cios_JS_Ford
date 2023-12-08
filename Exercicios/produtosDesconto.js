// Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o
// preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o
// desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:

// - Se quantidade <= 5 o desconto será de 2%
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%

// Dica: utilize if / else if / else

//entrada de dados
// = criar variável para receber o nome do produto 
// = perguntar ao usuário qual vai ser a quantidade de produtos
// = perguntar o preço unitário do produto

//processamento de dados
// = realizar o calculo do total da quantidade do produto * valor unitário do produto 
// = realidar o calculo do desconto com base na quantidade de produtos que o usuário vai comprar

//saída de dados
// = mostrar a saída dos produtos que ela escolher e a quantidade e o preço de cada produto
// = mostrar também o desconto de cada produto

const nomeDoProduto = "veja ";
const quantidadeDoProduto = 5;
const precoUnitario = 5.55;
const total = quantidadeDoProduto * precoUnitario
let desconto = 0;
let resu = 0;

if(quantidadeDoProduto <= 5) {
    // - Se quantidade <= 5 o desconto será de 2%
    desconto = (total * 2/100) 
    resu = total - desconto
    console.log(`Nome do Produto: ${nomeDoProduto}, quantidade do produto: ${quantidadeDoProduto}, preço do produto: ${precoUnitario} e desconto: ${desconto.toFixed(2)} `);
    console.log(`Total a pagar: R$ ${resu.toFixed(2)}`);

} else if (quantidadeDoProduto <= 10) {
    // - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
    desconto = (total * 3/100) 
    resu = total - desconto
    console.log(`Nome do Produto: ${nomeDoProduto}, quantidade do produto: ${quantidadeDoProduto}, preço do produto: ${precoUnitario} e desconto: ${desconto.toFixed(2)} `);
    console.log(`Total a pagar: R$ ${resu.toFixed(2)}`);

} else {
    // - Se quantidade > 10 o desconto será de 5%

    desconto = (total * 5/100) 
    resu = total - desconto
    console.log(`Nome do Produto: ${nomeDoProduto}, quantidade do produto: ${quantidadeDoProduto}, preço do produto: ${precoUnitario} e desconto: ${desconto.toFixed(2)} `);
    console.log(`Total a pagar: R$ ${resu.toFixed(2)}`);
}
