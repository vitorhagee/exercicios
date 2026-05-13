console.log("-----------------------------")
console.log("exercicio 46 e 47:");
console.log("-----------------------------")
//46.Crie função async.47.Use await.

function espera(ms:number): Promise<string>{
    return new Promise((resolve) =>{
        setTimeout(() => {
           resolve("terminou"); 
        }, ms);
    });
}

async function executar(){
    console.log("iniciando...");
    const resultado = await espera(1000);
    console.log(resultado);
}

executar();

console.log("-----------------------------")
console.log("exercicio 48:");
console.log("-----------------------------")
//48.simule delay

function delay(ms:number) : Promise<void>{
    return new Promise(resolve =>{
        setTimeout(resolve,ms);
    });
}

async function simudelay(){
    console.log("inicio!");
    await delay(1000);
    console.log("passaram 2 segundos!");
}

simudelay();


console.log("-----------------------------")
console.log("exercicio 49:");
console.log("-----------------------------")
//49.Use try/catch. 50.Simule o erro

function somase(n1:any,n2:any){
    try{
        if(
            typeof n1 !== "number" ||
            typeof n2 !== "number"
        ){
            throw new Error(
                "os valores informados não são numeros"
            )
        }

        let somados:number = n1 + n2;
        return somados;
    }catch(erro){
        if(erro instanceof Error){
            return erro.message;
        }
    }
}

console.log(somase(1,4));