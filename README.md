# Exercicios_JS_Ford

---

### 1-Desafio!

Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é Equilátero,  Isósceles  ou  Escaleno. 
Sendo    que:    
− Triângulo    Equilátero:    possui    os    3    lados    iguais.
 − Triângulo    Isóscele:    possui    2    lados    iguais.
 − Triângulo    Escaleno:    possui    3    lados    diferentes.

entrada de dados
= informar as 3 medidas de um triangulo

processamento
= verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
= para isso temos que utilizar os operadores lógicos && || ! 

saida de dados
= informar se o triangulo é equilátero, escaleno ou isócele
= motrar a saída do programa na console

---

### 2-Desafio!

Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o
valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).

entrada de dados
-determinar se o cliente é 1- cliente, 2- funcionário e 3-vip
-informar o total da compra 

processamento de dados
-usar a estrutura switch case para determinar se é cliente, funcionário ou vip

saída de dados
-se for cliente não haverá desconto
-se for funcionário terá 10% de desconto
-se for vip terá 5% de desconto

entrada de dados
-determinar se o cliente é 1- cliente, 2- funcionário e 3-vip

---

### 3-Desafio!

Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.

entrada de dados
-informar os dois times de futebol
-informar o placar do jogo

processamento
-realizar a validação através das estruturas condicionais
-verificar se os times ganharam, perderam ou empataram

saida
-informar o resultado do jogo de futebol

---

### 4-Desafio!

Um posto está vendendo combustíveis com a seguinte tabela de descontos:

Álcool:
-até 20 litros, desconto de 3% por litro Álcool
-acima de 20 litros, desconto de 5% por litro

Gasolina:
-até 20 litros, desconto de 4% por litro Gasolina
-acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado
da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente
sabendo-se que o preço do litro da gasolina é R$ 5,30 e o preço do litro do álcool é R$ 4,90.

Dica: utilize switch case, operadores lógicos e relacionais e estrutura de condição para otimizar o algorítimo.

entrada de dados
-selecionar se deseja abastecer com alcool ou com gasolina;
-selecionar a quantidade de litros que o usuário deseja;

processamento de dados
-switch case para gasolina ou alcool

saida de dados
-mostrar a porcentagem de desconto se for alcool ou se for gasolina

---

### 5-Desafio!

Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o
preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o
desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:

-Se quantidade <= 5 o desconto será de 2%
-Se quantidade > 5 e quantidade <=10 o desconto será de 3%
-Se quantidade > 10 o desconto será de 5%

Dica: utilize if / else if / else

entrada de dados
= criar variável para receber o nome do produto 
= perguntar ao usuário qual vai ser a quantidade de produtos
= perguntar o preço unitário do produto

processamento de dados
= realizar o calculo do total da quantidade do produto * valor unitário do produto 
= realidar o calculo do desconto com base na quantidade de produtos que o usuário vai comprar

saída de dados
= mostrar a saída dos produtos que ela escolher e a quantidade e o preço de cada produto
= mostrar também o desconto de cada produto

---

### 6-Desafio!

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