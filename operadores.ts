console.log("exercicio 6:");
console.log("-----------------------------")

let numero1:number = 10;
let numero2:number = 25;

if(numero1 > numero2){
    console.log("numero 1 é maior que o numero 2");
}else if(numero2 > numero1){
    console.log("numero 2 é maior que numero 1");
}else{
    console.log("ambos os numeros são iguais");
}

console.log("-----------------------------")
console.log("exercicio 7:");
console.log("-----------------------------")

let parOrImpar:number = 15
 
if(parOrImpar%2 === 0){
    console.log("O numero é par!");
}else{
    console.log("O numero é impar!");
}

console.log("-----------------------------")
console.log("exercicio 8:");
console.log("-----------------------------")

const num1: number = 10;
const num2:string = "10";
console.log(num1 == num2 as any);
console.log(num1 === num2 as any);


console.log("-----------------------------")
console.log("exercicio 9:");
console.log("-----------------------------")

let idade:number = 17

if(idade >= 18){
    console.log("Tem idade para dirigir!");
}else {
    console.log("ainda não possui idade para dirigir")
}

console.log("-----------------------------")
console.log("exercicio 10:");
console.log("-----------------------------")

let ingresso:boolean = false;
let nomeList:boolean = false;

if(ingresso || nomeList){
    console.log("Pode entrar!")
}else{
    console.log("entrada não permitida!")
}