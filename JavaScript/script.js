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

    let containerResultadoAnual = document.querySelector("#container-anual");
    containerResultadoAnual.style.display = "flex";
    containerResultadoAnual.style.justifyContent = "center";
    containerResultadoAnual.style.alignItems = "center";
    
    let aguaAnual = Number(aguaPorMes) * 12;
        let textoAguaAnual = document.querySelector("#aguaPorAno");
            textoAguaAnual.innerText = `Gasto com ÁGUA: R$ ${aguaAnual}`;    
            if(aguaAnual == 0){
                textoAguaAnual.innerText = `Gasto com ÁGUA: sem gasto ou não preenchido.`;
            }        

    let luzAnual = Number(luzPorMes) * 12;
        let textoLuzAnual = document.querySelector("#luzPorAno");
            textoLuzAnual.innerText = `Gasto com ENERGIA: R$ ${luzAnual}`;
            if(luzAnual == 0){
                textoLuzAnual.innerText = `Gasto com ENERGIA: sem gasto ou não preenchido.`;
            }     

    let mercadoAnual = Number(mercadoPorMes) * 12;
        let textoMercadoAnual = document.querySelector("#mercadoPorAno");
            textoMercadoAnual.innerText = `Gasto com MERCADO: R$ ${mercadoAnual}`;
            if(mercadoAnual == 0){ 
                textoMercadoAnual.innerText = `Gasto com MERCADO: sem gasto ou não preenchido.`;
            }     

    let habitacaoAnual = Number(habitacaoPorMes) * 12;
        let textoHabitacaoAnual = document.querySelector("#habitacaoPorAno");
            textoHabitacaoAnual.innerText = `Gasto com HABITAÇÃO: R$ ${habitacaoAnual}`;
            if(habitacaoAnual == 0){
                textoHabitacaoAnual.innerText = `Gasto com HABITAÇÃO: sem gasto ou não preenchido.`;
            }     

    let internetAnual = Number(internetPorMes) * 12;
        let textoInternetAnual = document.querySelector("#internetPorAno");
            textoInternetAnual.innerText = `Gasto com INTERNET: R$ ${internetAnual}`;
            if(internetAnual == 0){
                textoInternetAnual.innerText = `Gasto com INTERNET: sem gasto ou não preenchido.`;
            }     

    let televisaoAnual = Number(televisaoPorMes) * 12;
        let textoTelevisaoAnual = document.querySelector("#televisaoPorAno");
            textoTelevisaoAnual.innerText = `Gasto com TV: R$ ${televisaoAnual}`;
            if(televisaoAnual == 0){
                textoTelevisaoAnual.innerText = `Gasto com TV: sem gasto ou não preenchido.`;
            }     

    let telefoneAnual = Number(telefonePorMes) * 12;
        let textoTelefoneAnual = document.querySelector("#telefonePorAno");
            textoTelefoneAnual.innerText = `Gasto com TELEFONE: R$ ${telefoneAnual}`;
            if(telefoneAnual == 0){
                textoTelefoneAnual.innerText = `Gasto com TELEFONE: sem gasto ou não preenchido.`;
            }     

    let saudeAnual = Number(saudePorMes) * 12;
        let textoSaudeAnual = document.querySelector("#saudePorAno");
            textoSaudeAnual.innerText = `Gasto com SAÚDE: R$ ${saudeAnual}`;
            if(saudeAnual == 0){
                textoSaudeAnual.innerText = `Gasto com SAÚDE: sem gasto ou não preenchido.`;
            }     

    let impostoAnual = Number(impostoPorMes) * 12;
        let textoImpostoAnual = document.querySelector("#impostoPorAno");
            textoImpostoAnual.innerText = `Gasto com IMPOSTO: R$ ${impostoAnual}`;
            if(impostoAnual == 0){
                textoImpostoAnual.innerText = `Gasto com IMPOSTO: sem gasto ou não preenchido.`;
            }     

    let veiculoAnual = Number(veiculoPorMes) * 12;
        let textoVeiculoAnual = document.querySelector("#veiculoPorAno");
            textoVeiculoAnual.innerText = `Gasto com AUTOMÓVEL: R$ ${veiculoAnual}`;
            if(veiculoAnual == 0){
                textoVeiculoAnual.innerText = `Gasto com AUTOMÓVEL: sem gasto ou não preenchido.`;
            }     

    let despesasPessoaisAnual = Number(despesasPessoaisPorMes) * 12;
        let textoDespesasAnual = document.querySelector("#despesasPessoaisPorAno");
            textoDespesasAnual.innerText = `Gasto com DESPESAS PESSOAIS: R$ ${despesasPessoaisAnual}`;
            if(despesasPessoaisAnual == 0){
                textoDespesasAnual.innerText = `Gasto com DESPESAS PESSOAIS: sem gasto ou não preenchido.`;
            }     
    
    let lazerAnual = Number(lazerPorMes) * 12;
        let textoLazerAnual = document.querySelector("#lazerPorAno");
            textoLazerAnual.innerText = `Gasto com LAZER: R$ ${lazerAnual}`;
            if(lazerAnual == 0){
                textoLazerAnual.innerText = `Gasto com LAZER: sem gasto ou não preenchido.`;
            }     

    let rendaAnual = Number(rendaPorMes) * 12;
    let somaDosGastosAnual = Number(somaDosGastosMensal) * 12;
    let lucroAnual = rendaAnual - somaDosGastosAnual;
}

