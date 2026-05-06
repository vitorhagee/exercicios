console.log("-----------------------------")
console.log("exercicio 16:");
console.log("-----------------------------")

for(let i = 1; i<=10; i++){
    console.log(i);
}

console.log("-----------------------------")
console.log("exercicio 17:");
console.log("-----------------------------")

for(let i = 0; i<=20; i++){
    if(i%2 != 0){
        continue;
    }
    console.log(i);
}

console.log("-----------------------------")
console.log("exercicio 18:");
console.log("-----------------------------")

let cont:number = 0;

while(cont<=10){
    console.log(cont);
    cont ++;
}

console.log("-----------------------------")
console.log("exercicio 19:");
console.log("-----------------------------")

let nomes:string[] = ["vitor","rafael","matheus"];

for(let nome of nomes){
    console.log(nome);
}

console.log("-----------------------------")
console.log("exercicio 20:");
console.log("-----------------------------")
let soma:number = 0;
let numeros:number[] = [1,2,3,4,5,6,7,8,9,10]

for(let num of numeros){
  soma += num;
}
console.log(soma);