console.log("exercicio 11:");
console.log("-----------------------------")
/*11.Número:
positivo
negativo
zero*/

const numero1:number = -13;

if(numero1>0){
    console.log("O número é positivo");
} else if(numero1<0){
    console.log("O número é Negativo");
} else {
    console.log("O número é 0")
}

console.log("-----------------------------")
console.log("exercicio 12:");
console.log("-----------------------------")
/*12.Sistema de notas:
= 7 aprovado
= 5 recuperação
< 5 reprovado*/

const nota:number = 6.7

if(nota >= 7){
    console.log("Aprovado");
}else if(nota>=5 || nota<=6.9){
    console.log("Recuperação");
}else{
    console.log("Reprovado!");
}

console.log("-----------------------------")
console.log("exercicio 13:");
console.log("-----------------------------")
/*
13.Verifique se usuário é admin.
*/
const admin:boolean = false;

if(admin){
    console.log("usuario é admin!");
}else{
    console.log("acesso negado, usuario não é admin!");
}

console.log("-----------------------------")
console.log("exercicio 14:");
console.log("-----------------------------")
/*14.Simule login:
senha correta
senha errada*/

const senha:number = 123456;
const tentativa:number = 123456;

if(senha === tentativa){
    console.log("Senha correta, acesso liberado!");
}else{
    console.log("Senha incorreta, acesso negado!");
}



console.log("-----------------------------")
console.log("exercicio 15:");
console.log("-----------------------------")
/*15.Classifique idade:
criança
adulto
idoso*/

const idade:number = 65;

if(idade<18){
    console.log("Criança");
}else if (idade>=18 && idade<64){
    console.log("Adulto");
}else{
    console.log("Idoso");
}