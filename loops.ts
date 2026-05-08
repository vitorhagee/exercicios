console.log("-----------------------------")
console.log("exercicio 16:");
console.log("-----------------------------")
//16.Imprima 1 → 10 com for.
for(let i = 1; i<=10; i++){
    console.log(i);
}

console.log("-----------------------------")
console.log("exercicio 17:");
console.log("-----------------------------")
//17.Mostre pares de 0 → 20.

for(let i = 0; i<=20; i++){
    if(i%2 != 0){
        continue;
    }
    console.log(i);
}

console.log("-----------------------------")
console.log("exercicio 18:");
console.log("-----------------------------")
//18.Use while: 10 → 0

let cont:number = 10;

while(cont>=0){
    console.log(cont);
    cont --;
}

console.log("-----------------------------")
console.log("exercicio 19:");
console.log("-----------------------------")
//19.Percorra array de nomes.

let nomes:string[] = ["vitor","rafael","matheus"];

for(let nome of nomes){
    console.log(nome);
}

console.log("-----------------------------")
console.log("exercicio 20:");
console.log("-----------------------------")
//20.Some números de um array.

let soma:number = 0;
let numeros:number[] = [1,2,3,4,5,6,7,8,9,10]

for(let num of numeros){
  soma += num;
}
console.log(soma);