console.log("exercicio 26:");
console.log("-----------------------------")
//26.[1,2,3,4,5]→ pegar > 2 e dobrar

let list:number[] = [1,2,3,4,5];
let seldouble = list.filter((num) => num === 2).map((num2) => num2 *2);

console.log(seldouble);

console.log("-----------------------------")
console.log("exercicio 27:");
console.log("-----------------------------")
//["ana","joao","maria"]→ nomes com mais de 4 letras

let nomes:string[] = ["ana","joao","maria"];
let nomemaior4 = nomes.filter((nome) => nome.length >= 4);

console.log(nomemaior4);

console.log("-----------------------------")
console.log("exercicio 28:");
console.log("-----------------------------")
/*28.Usuários:
→ maiores de idade
→ retornar nomes*/

type usuario = {
    nome:string;
    idade:number;
};

const usuarios: usuario[] =[
    { nome: 'vitor', idade:27},
    { nome: 'giovanna', idade:29},
    { nome: 'ana', idade:16},
    { nome: 'clara', idade:55},
    { nome: 'marcos', idade:9},
    { nome: 'teresa', idade:3},
]

const maioresIdade = usuarios.filter((usuario) => usuario.idade >= 18)

maioresIdade.forEach(usuario => {
    console.log(usuario.nome);
});

console.log("-----------------------------")
console.log("exercicio 29:");
console.log("-----------------------------")
/*29.Produtos:
→ preço > 100
→ aplicar desconto*/

type produto = {
    nome:string;
    preco:number;
}

const produtos: produto[] = [
    {nome:"batata", preco:5.00},
    {nome:"hamburguer", preco:9.00},
    {nome:"alface", preco:3.00},
    {nome:"bife", preco:25.00},
    {nome:"pimentão", preco:12.00},
    {nome:"salsa", preco:9.00},
    {nome:"bala", preco:1.00}
];

const produtodesconto = produtos
.filter((produto)=> produto.preco > 5)
.map((produto) => ({
    nome: produto.nome,
    preco: produto.preco * 0.80}));

produtodesconto.forEach(produto => {
    console.log(`${produto.nome}: ${produto.preco}`);
});

console.log("-----------------------------")
console.log("exercicio 30:");
console.log("-----------------------------")
/*30.Pedidos:→ pegar pedidos de cliente específico*/

type pedido = {
    cliente:string;
    comanda:number;
}

const pedidos: pedido[] = [
    {cliente:"hagee",comanda:10},
    {cliente:"clara",comanda:11},
    {cliente:"hagee",comanda:12},
    {cliente:"clara",comanda:13},
    {cliente:"clara",comanda:14},
    {cliente:"hagee",comanda:15},
    {cliente:"jorge",comanda:16},
    {cliente:"hagee",comanda:17},
    {cliente:"maicon",comanda:18}
];

const clienteEspecifico = pedidos.filter((cliente) => cliente.cliente === "hagee");

console.log(clienteEspecifico);