// Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
// Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o
// valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).

//entrada de dados
// = determinar se o cliente é 1- cliente, 2- funcionário e 3-vip
// = informar o total da compra 

//processamento de dados
// = usar a estrutura switch case para determinar se é cliente, funcionário ou vip

//saída de dados
// = se for cliente não haverá desconto
// = se for funcionário terá 10% de desconto
// = se for vip terá 5% de desconto

//entrada de dados
// = determinar se o cliente é 1- cliente, 2- funcionário e 3-vip

let cliente = 4
let produto = 100
let desconto = 0;


switch (cliente) {
    case 1:
        cliente = "Cliente"
        console.log(`Olá ${cliente}, você não tem descontos nas compras total a pagar: R$ ${produto}`)
    break;

    case 2:
        cliente = "funcionário"
        desconto = (produto*10)/100
        produto = produto-desconto
        console.log(`Olá ${cliente}, você tem 10% de descontos total da compra com ${desconto}% de desconto: R$ ${produto}`)
    break;

    case 3:
        cliente = "Vip"
        desconto = (produto*5)/100
        produto = produto-desconto
        console.log(`Olá ${cliente}, você tem 5% de descontos total da compra com ${desconto}% de desconto: R$ ${produto}`)
    break;

    default:
        console.log('Erro');
    break;
}
