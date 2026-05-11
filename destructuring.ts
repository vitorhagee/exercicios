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


