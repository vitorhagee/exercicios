console.log("exercicio 1:");
console.log("-----------------------------")
/*1.Crie:
nome (string)
idade (number)
estudando (boolean)
Mostre tudo no console.*/

let nome:string = "vitor hagee farias";
let idade:number = 27;
let est_civil:boolean = true;

console.log(`meu nome é ${nome}, tenho ${idade} anos, sou casado? ${est_civil}`);


console.log("-----------------------------")
console.log("exercicio 2:");
console.log("-----------------------------")

/*2.Crie dois números e faça:
soma
subtração
multiplicação
divisão*/
let numero1:number = 10;
let numero2:number = 15;
let soma:number = numero1+numero2;
let sub:number = numero1-numero2;
let mult:number = numero1*numero2;
let div:number = numero1/numero2;
let rest:number = numero1%numero2;
console.log(`os numeros são ${numero1} e ${numero2}.`);
console.log(`a soma de ambos é ${soma}`);
console.log(`a substração de ambos é ${sub}`);
console.log(`a multiplicação de ambos é ${mult}`);
console.log(`a divisão de ambos é ${div}`);
console.log(`o resto de um pelo outro é igual a ${rest}`);

console.log("-----------------------------")
console.log("exercicio 3:");
console.log("-----------------------------")
/*3.Crie uma variável que aceite:
string
ou number*/
let numero_string: number|string; 
numero_string = 'string';
console.log(`se for string: ${numero_string}`);
numero_string = 1234;
console.log(`se for numero: ${numero_string}`);


console.log("-----------------------------")
console.log("exercicio 4:");
console.log("-----------------------------")
/*4.Crie variável começando com null e depois atribua um valor.*/

let nulo:number | null = null;
console.log(nulo);
nulo = 10;
console.log(nulo); 

console.log("-----------------------------")
console.log("exercicio 5:");
console.log("-----------------------------")
/*5.Crie objeto produto:
nome
preço
disponível*/

interface produto{
    nome_produto : string;
    preço : number;
    disponivel: boolean;
}