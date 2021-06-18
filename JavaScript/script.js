function resultado(){
    let rendaPorMes = document.getElementById("rendaMensal").value;
    let aguaPorMes = document.getElementById("aguaMensal").value;
    let luzPorMes = document.getElementById("energiaMensal").value;
    let mercadoPorMes = document.getElementById("mercadoMensal").value;
    let habitacaoPorMes = document.getElementById("habitacaoMensal").value;
    let internetPorMes = document.getElementById("internetMensal").value;
    let televisaoPorMes = document.getElementById("TVMensal").value;
    let telefonePorMes = document.getElementById("telefoneMensal").value;
    let saudePorMes = document.getElementById("saudeMensal").value;
    let impostoPorMes = document.getElementById("impostoMensal").value;
    let veiculoPorMes = document.getElementById("automovelMensal").value;
    let despesasPessoaisPorMes = document.getElementById("despesasPessoaisMensal").value;
    let lazerPorMes = document.getElementById("lazerMensal").value;

    let somaDosGastosMensal = Number(aguaPorMes) + Number(luzPorMes) + Number(mercadoPorMes) + Number(habitacaoPorMes) + Number(internetPorMes) + Number(televisaoPorMes) + Number(telefonePorMes) + Number(saudePorMes) + Number(impostoPorMes) + Number(veiculoPorMes) + Number(despesasPessoaisPorMes) + Number(lazerPorMes); 
    let lucroMensal = Number(rendaPorMes) - Number(somaDosGastosMensal);

    let resultadoMensal = document.querySelector("#saldoDoMes");
    
    if(lucroMensal > 0 ){
        resultadoMensal.innerText = `Seu mês fecha feliz com um SALDO POSITIVO de  ${lucroMensal} reais.`;
    } 
    else if(lucroMensal == 0){
        resultadoMensal.innerText = `Seu mês fecha ZERADO!`;
    }
    else{
        resultadoMensal.innerText = `Seu mês fecha bem triste com um SALDO NEGATIVO de  ${lucroMensal} reais.`;
    }

    let somaMensal = document.querySelector("#somaDosGastosDoMes");
        somaMensal.innerText = `O seu gasto mensal é de ${somaDosGastosMensal} reais.`;
        if(somaDosGastosMensal == 0){
                somaMensal.innerText = `O seu gasto mensal está ZERADO!`;
            }

    let apareceContainerAoClicar = document.querySelector(".container-resultados");
    apareceContainerAoClicar.style.display = "flex";
    apareceContainerAoClicar.style.justifyContent = "space-around";
}

