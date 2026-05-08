console.log("exercicio 31:");
console.log("-----------------------------")
//31.Crie:type Usuario
//33.Adicione:cpf?: string


type usuario = {
    nome:string;
    idade:number;
    cargo:string;
    cpf?:string;
};

console.log("-----------------------------")
console.log("exercicio 32:");
console.log("-----------------------------")
//32.Crie array de usuários

let usuarios:usuario[] = [
    {nome:'Vitor', idade:27, cargo:'analista'} ,
    {nome:'antunes', idade:26, cargo:'faturista'} ,
    {nome:'magrini', idade:18, cargo:'analista'} ,
    {nome:'adriano', idade:8, cargo:'carteiro'} ,
    {nome:'carla', idade:16, cargo:'jogador'} ,
    {nome:'samara', idade:65, cargo:'analista'} ,
    {nome:'murilo', idade:13, cargo:'designer'} ,
];

console.log("-----------------------------")
console.log("exercicio 34:");
console.log("-----------------------------")
//34.Use destructuring.

const [a,b,c,d,e,f,g] = usuarios;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

console.log("-----------------------------")
console.log("exercicio 35:");
console.log("-----------------------------")
//35.Filtre maiores de idade.

const maioresIdade = usuarios.filter((usuarios) => usuarios.idade >= 18);
console.log(maioresIdade);