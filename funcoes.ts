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

console.log("-----------------------------")
console.log("exercicio 38:");
console.log("-----------------------------")
//38.função parouimpar

function parimpar(a:number):string{
    if(a % 2 === 0){
        return "Par"
    }else {
        return "Impar"
    };
};

console.log(parimpar(23));

console.log("-----------------------------")
console.log("exercicio 39:");
console.log("-----------------------------")
//39.função somar array


function somaarray(a:number[]):number{
    let some = a.reduce((a,b) => {return a+b},0 );
    return some;
}

let arraynumeros:number[] = [1,2,3,4,5,6,7,8,9,10];
console.log(somaarray(arraynumeros));


console.log("-----------------------------")
console.log("exercicio 40:");
console.log("-----------------------------")
//40. função filtrar usuarios

type usuario = {
    nome:string;
    idade:number;
    cargo:string;
    cpf?:string;
};

let usuarios:usuario[] = [
    {nome:'Vitor', idade:27, cargo:'analista'} ,
    {nome:'antunes', idade:26, cargo:'faturista'} ,
    {nome:'magrini', idade:18, cargo:'analista'} ,
    {nome:'adriano', idade:8, cargo:'carteiro'} ,
    {nome:'carla', idade:16, cargo:'jogador'} ,
    {nome:'samara', idade:65, cargo:'analista'} ,
    {nome:'murilo', idade:13, cargo:'designer'} ,
];

function filtrausuario(u:usuario[],cargo:string):usuario[]{

   return u.filter((usuario) => usuario.cargo === cargo);
}   

console.log(filtrausuario(usuarios,"faturista"));