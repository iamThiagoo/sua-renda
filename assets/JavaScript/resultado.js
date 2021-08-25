document.querySelector("#botaoCalcular").addEventListener("click", () => {
    mostraContainer();
    resultados();
})

function mostraContainer(){
    document.querySelector("#div-resultado").style.display = "block";
}

function resultados(){
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

    const somaDosGastosMensal =  Number(aguaPorMes) + Number(luzPorMes) + Number(mercadoPorMes) + Number(habitacaoPorMes) + Number(internetPorMes) + Number(televisaoPorMes) + Number(telefonePorMes) + Number(saudePorMes) + Number(impostoPorMes) + Number(veiculoPorMes) + Number(despesasPessoaisPorMes) + Number(lazerPorMes); 
    const lucroMensal = Number(rendaPorMes) - somaDosGastosMensal;

    resultadoLucroMensal(lucroMensal);
    resultadoSomaMensal(somaDosGastosMensal);

    aguaTotal(aguaPorMes);
    luzTotal(luzPorMes);
    mercadoTotal(mercadoPorMes);
    habitacaoTotal(habitacaoPorMes);
    internetTotal(internetPorMes);
    televisaoTotal(telefonePorMes);
    telefoneTotal(telefonePorMes);
    saudeTotal(saudePorMes);
    impostoTotal(impostoPorMes);
    veiculoTotal(veiculoPorMes);
    despesasPessoaisTotal(despesasPessoaisPorMes);
    lazerTotal(lazerPorMes);

    rendaPorAno(rendaPorMes);    
    gastoPorAno(somaDosGastosMensal);
    lucroAoAno(rendaPorAno(rendaPorMes), gastoPorAno(somaDosGastosMensal));
}

/* =====> Resultados do Mês <==== */
function resultadoLucroMensal(lucro){
    let resultadoMensal = document.querySelector("#saldoDoMes");
    if(lucro > 0 ){
        resultadoMensal.innerText = `Seu mês fecha ANIMADO com um SALDO POSITIVO de  ${lucro} reais.`;
    }
    else if(lucro === 0){
        resultadoMensal.innerText = `Seu mês fecha ZERADO!`;
    }
    else{
        resultadoMensal.innerText = `Seu mês fecha TRISTE com um SALDO NEGATIVO de  ${lucro} reais.`;
    }   
}

function resultadoSomaMensal(gastosMensal){
    let somaMensal = document.querySelector("#somaDosGastosDoMes");
    somaMensal.innerText = `O seu gasto mensal é de ${gastosMensal} reais.`;
    if(gastosMensal === 0){
        somaMensal.innerText = `O seu gasto mensal está ZERADO!`;
    }      
}

/* ===> Gastos ao Ano por categoria <=== */
function mediaAnualPorCategoria(categoria){
    return categoria * 12;
}

function aguaTotal(valor){
    const aguaAnual = mediaAnualPorCategoria(valor);
    const textoAguaAnual = document.querySelector("#aguaPorAno");
    textoAguaAnual.innerHTML = `🌊 Gasto com <b>ÁGUA</b>: R$ ${aguaAnual}`; 
    if(aguaAnual === 0) textoAguaAnual.innerHTML = `🌊 Gasto com <b>ÁGUA</b>: sem gasto ou não preenchido.`;
}

function luzTotal(valor){
    const luzAnual = mediaAnualPorCategoria(valor);
    const textoLuzAnual = document.querySelector("#luzPorAno");
    textoLuzAnual.innerHTML = `⚡ Gasto com <b>LUZ</b>: R$ ${luzAnual}`; 
    if(luzAnual === 0) textoLuzAnual.innerHTML = `⚡ Gasto com <b>LUZ</b>: sem gasto ou não preenchido.`;
}

function mercadoTotal(valor){
    let mercadoAnual = mediaAnualPorCategoria(valor);
    let textoMercadoAnual = document.querySelector("#mercadoPorAno");
    textoMercadoAnual.innerHTML = `🏪 Gasto com <b>MERCADO</b>: R$ ${mercadoAnual}`;
    if(mercadoAnual === 0) textoMercadoAnual.innerHTML = `🏪 Gasto com <b>MERCADO</b>: sem gasto ou não preenchido.`;
}

function habitacaoTotal(valor){
    let habitacaoAnual = mediaAnualPorCategoria(valor);
    let textoHabitacaoAnual = document.querySelector("#habitacaoPorAno");
    textoHabitacaoAnual.innerHTML = `🏠 Gasto com <b>HABITAÇÃO</b>: R$ ${habitacaoAnual}`;
    if(habitacaoAnual === 0) textoHabitacaoAnual.innerHTML = `🏠 Gasto com <b>HABITAÇÃO</b>: sem gasto ou não preenchido.`;
}

function internetTotal(valor){
    let internetAnual = mediaAnualPorCategoria(valor);
    let textoInternetAnual = document.querySelector("#internetPorAno");
    textoInternetAnual.innerHTML = `🌐 Gasto com <b>INTERNET</b>: R$ ${internetAnual}`;
    if(internetAnual === 0) textoInternetAnual.innerHTML = `🌐 Gasto com <b>INTERNET</b>: sem gasto ou não preenchido.`;
}   

function televisaoTotal(valor){
    let televisaoAnual = mediaAnualPorCategoria(valor);
    let textoTelevisaoAnual = document.querySelector("#televisaoPorAno");
    textoTelevisaoAnual.innerHTML = `📺 Gasto com <b>TV</b>: R$ ${televisaoAnual}`;
    if(televisaoAnual === 0) textoTelevisaoAnual.innerHTML = `📺 Gasto com <b>TV</b>: sem gasto ou não preenchido.`;
}

function telefoneTotal(valor){
    let telefoneAnual = mediaAnualPorCategoria(valor);
    let textoTelefoneAnual = document.querySelector("#telefonePorAno");
    textoTelefoneAnual.innerHTML = `☎️ Gasto com <b>TELEFONE</b>: R$ ${telefoneAnual}`;
    if(telefoneAnual === 0) textoTelefoneAnual.innerHTML = `☎️ Gasto com <b>TELEFONE</b>: sem gasto ou não preenchido.`;
}

function saudeTotal(valor){
    let saudeAnual = mediaAnualPorCategoria(valor);
    let textoSaudeAnual = document.querySelector("#saudePorAno");
    textoSaudeAnual.innerHTML = `🩺 Gasto com <b>SAÚDE</b>: R$ ${saudeAnual}`;
    if(saudeAnual === 0) textoSaudeAnual.innerHTML = `🩺 Gasto com <b>SAÚDE</b>: sem gasto ou não preenchido.`;
}

function impostoTotal(valor){
    let impostoAnual = mediaAnualPorCategoria(valor);
    let textoImpostoAnual = document.querySelector("#impostoPorAno");
    textoImpostoAnual.innerHTML = `💰 Gasto com <b>IMPOSTO</b>: R$ ${impostoAnual}`;
    if(impostoAnual === 0) textoImpostoAnual.innerHTML = `💰 Gasto com <b>IMPOSTO</b>: sem gasto ou não preenchido.`;    
}

function veiculoTotal(valor){
    let veiculoAnual = mediaAnualPorCategoria(valor);
    let textoVeiculoAnual = document.querySelector("#veiculoPorAno");
    textoVeiculoAnual.innerHTML = `🚗 Gasto com <b>AUTOMÓVEL</b>: R$ ${veiculoAnual}`;
    if(veiculoAnual === 0) textoVeiculoAnual.innerHTML = `🚗 Gasto com <b>AUTOMÓVEL</b>: sem gasto ou não preenchido.`;     
}

function despesasPessoaisTotal(valor){
    let despesasPessoaisAnual = mediaAnualPorCategoria(valor);
    let textoDespesasAnual = document.querySelector("#despesasPessoaisPorAno");
    textoDespesasAnual.innerHTML = `💄 Gasto com <b>DESPESAS PESSOAIS</b>: R$ ${despesasPessoaisAnual}`;
    if(despesasPessoaisAnual === 0) textoDespesasAnual.innerHTML = `💄 Gasto com <b>DESPESAS PESSOAIS</b>: sem gasto ou não preenchido.`;   
}

function lazerTotal(valor){
    let lazerAnual = mediaAnualPorCategoria(valor);
    let textoLazerAnual = document.querySelector("#lazerPorAno");
    textoLazerAnual.innerHTML = `🍔 Gasto com <b>LAZER</b>: R$ ${lazerAnual}`;
    if(lazerAnual == 0) textoLazerAnual.innerHTML = `🍔 Gasto com <b>LAZER</b>: sem gasto ou não preenchido.`;
}

/* ====> DADOS FINAIS <==== */
function rendaPorAno(rendaMes){
    const rendaAnual = mediaAnualPorCategoria(rendaMes);
    let textoRendaAnual = document.querySelector("#rendaAnual");
    textoRendaAnual.innerHTML = `Sua <b>RENDA</b> anual gira em torno de R$ ${rendaAnual}`;
    if(rendaAnual > 0) textoRendaAnual.style.color = "#0C9FCA";
    else{
        textoRendaAnual.innerText = `Renda anual: [ERRO] Preencha os dados para ver o resultado!`;
        textoRendaAnual.style.fontColor = "#F00D25";
    }
    
    return rendaAnual;
}

function gastoPorAno(gastoMes){
    const somaDosGastosAnual = mediaAnualPorCategoria(gastoMes);
    let textoSomaAnual = document.querySelector("#somaDosGastosAnual");
    textoSomaAnual.innerHTML = `Seu <b>GASTO</b> anual gira em torno de R$ ${somaDosGastosAnual}`;
    textoSomaAnual.style.color = "#D80D22"; 
    if(somaDosGastosAnual === 0) textoSomaAnual.innerText = `Gasto anual: [ERRO] Preencha os dados para ver o resultado!`;

    return somaDosGastosAnual;
}

function lucroAoAno(rendaAnual, somaDosGastosAnual){
    let lucroAnual = rendaAnual - somaDosGastosAnual;
    let textoLucroAnual = document.querySelector("#lucroAnual");
    textoLucroAnual.innerHTML = `Seu <b>LUCRO</b> anual gira em torno de R$ ${lucroAnual}`;
    if(lucroAnual > 0) textoLucroAnual.style.color = "#19D327";
    else if(lucroAnual === 0){
        textoLucroAnual.innerHTML = `Seu <b>LUCRO</b> anual é IGUAL a 0 ou você NÃO preencheu sua renda ou seus gastos`;
        textoLucroAnual.style.color = "#0DBAEC";
    }
    else{
        textoLucroAnual.innerHTML = `Sua <b>PERDA</b> anual gira em torno de R$ ${lucroAnual}`;
        textoLucroAnual.style.color = "#D80D22";
    }
}

document.querySelector("#misterio").addEventListener("click", () => {
    alert(`Parece que você encontrou meu easter egg!!!`);
})