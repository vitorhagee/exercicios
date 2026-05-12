console.log("-----------------------------")
console.log("exercicio 41:");
console.log("-----------------------------")
//41. Pegue:nome/idade de objeto.

type pessoaFisica = {
    nome:string;
    idade:number;
    cpf?:string;
}

let pessoas:pessoaFisica[] = [
    {nome:"vitor farias",idade:27,cpf:"389.063.038-31"},
    {nome:"Santana",idade:16,cpf:"389.773.055-31"},
    {nome:"Castro",idade:31,cpf:"382.775.038-41"},
    {nome:"Juliana",idade:55,cpf:"345.663.021-29"},
    {nome:"Firmina",idade:14,cpf:"355.066.089-34"},
    {nome:"Caramela",idade:9,cpf:"120.035.048-12"},
    {nome:"Silvia",idade:12,cpf:"093.647.138-22"}
]

console.log("-----------------------------")
console.log("exercicio 42:");
console.log("-----------------------------")
//42. Pegue:nome/idade do primeiro objeto.

const a = pessoas[0];
const {nome,idade} = a!;
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);


console.log("-----------------------------")
console.log("exercicio 43:");
console.log("-----------------------------")
//43.Use destructuring no map.


const mappeado = pessoas.map((pessoa) => ({
    nome:pessoa.nome,
    idade:pessoa.idade,
    cpf: "123.456.789-31"
}));

mappeado.forEach(pessoa => {
    console.log(pessoa.nome);
    console.log(pessoa.idade);
    console.log(pessoa.cpf);
});


console.log("-----------------------------")
console.log("exercicio 44:");
console.log("-----------------------------")
//Renomeie: const { nome: nomeUsuario }

const muda = {
    nome:'santana da silva'
}

const {nome:nomeusuario} = muda;

console.log(nomeusuario);

console.log("-----------------------------")
console.log("exercicio 44:");
console.log("-----------------------------")
//Use destructuring em função:

function mostrar ({nome}:pessoaFisica){
        console.log(nome);
}

mostrar(pessoas[2]!);