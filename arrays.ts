console.log("exercicio 21:");
console.log("-----------------------------")

let lista:number[] = [1,2,3,4,5,6]

console.log(lista);
lista.push(8);
console.log(lista);
lista.pop();
console.log(lista);

console.log("-----------------------------")
console.log("exercicio 22:");
console.log("-----------------------------")

let numeros:number[] = [1,2,3,4,5,6];
let dobrados:number[] = numeros.map((num:number) => num * 2);

console.log("numeros:",numeros);
console.log("dobrados:",dobrados);

console.log("-----------------------------")
console.log("exercicio 23:");
console.log("-----------------------------")

let numeros2:number[] = [1,2,3,4,5,6,7,8,9,10];

let filtrado1:number[] = numeros2.filter((num) => num >= 10);

console.log(filtrado1);


console.log("-----------------------------")
console.log("exercicio 24:");
console.log("-----------------------------")

let numeros3:number[] = [1,2,3,4,5,6,7,8,9,10];
let filtrado2 = numeros3.find((num) => num <= 5);

console.log(filtrado2)

console.log("-----------------------------")
console.log("exercicio 25:");
console.log("-----------------------------")

let numeros4:number[] = [1,2,3,4,5,6,7,8,9,10];
let soma:number = numeros4.reduce((a,b) => {
    return a + b;
}, 0);

console.log(soma);