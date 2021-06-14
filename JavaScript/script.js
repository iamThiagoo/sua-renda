/*Iniciando minha variáveis*/
let rendaPorMes;
let aguaPorMes;
let luzPorMes;
let mercadoPorMes;
let habitacaoPorMes;
let wifiPorMes;
let televisaoPorMes;
let telefonePorMes;
let saudePorMes;
let impostoPorMes;
let veiculoPorMes;
let despesasPessoaisPorMes;
let lazerPorMes;

function resultado(){
    rendaPorMes = document.getElementById("rendaMensal").value;
    aguaPorMes = document.getElementById("aguaMensal").value;
    luzPorMes = document.getElementById("energiaMensal").value;
    mercadoPorMes = document.getElementById("mercadoMensal").value;
    habitacaoPorMes = document.getElementById("habitacaoMensal").value;
    wifiPorMes = document.getElementById("wifiMensal").value;
    televisaoPorMes = document.getElementById("TVMensal").value;
    telefonePorMes = document.getElementById("telefoneMensal").value;
    saudePorMes = document.getElementById("saudeMensal").value;
    impostoPorMes = document.getElementById("impostoMensal").value;
    veiculoPorMes = document.getElementById("automovelMensal").value;
    despesasPessoaisPorMes = document.getElementById("despesasPessoaisMensal").value;
    lazerPorMes = document.getElementById("lazerMensal").value;
    console.log(`Seu salário é de R$${rendaPorMes} por mês.`);
    let somaDosGastosMensal = Number(aguaPorMes) + Number(luzPorMes); 
    let lucroMensal = Number(rendaPorMes) - somaDosGastosMensal;
    console.log(`Seu gasto total durante o mês é de R$${somaDosGastosMensal} e seu lucro é de R$${lucroMensal} reais ao mês.`);
    console.log(typeof(somaDosGastosMensal));
    console.log(typeof(lucroMensal));
}

