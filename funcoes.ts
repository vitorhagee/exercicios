console.log("exercicio 36:");
console.log("-----------------------------")
//36.Função soma.

function soma (a:number,b:number):number {
    return a+b
} 

console.log(soma(4,5));


console.log("-----------------------------")
console.log("exercicio 37:");
console.log("-----------------------------")
//37.função saudação

function saudacao(a:number):string {
    if(a >= 6 && a<= 12){
        return "Bom dia!!";
    } else if(a>=13 && a<= 19){
        return "Boa tarde!!";
    }else if(a>= 20){
        return "Boa noite!";
    }else{
        return "horario invalido";
    }
};

console.log(saudacao(22));