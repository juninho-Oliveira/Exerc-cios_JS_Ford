// Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é Equilátero,  Isósceles  ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.

//entrada de dados
// = informar as 3 medidas de um triangulo

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console

let lado1 = 60;
let lado2 = 60;
let lado3 = 60;


function ladosDoTriangulo(lado1, lado2, lado3) {

    if (lado1 === lado2 && lado2 === lado3) {
        console.log(`É Triângulo Equilátero com 3 lados iguais!`)
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log(`É Triângulo Isóscele com 2 lados iguais!`)
    } else {
        console.log(`É Triângulo Escaleno com 3 lados diferentes!`)
    }
};

ladosDoTriangulo(lado1,lado2,lado3)
