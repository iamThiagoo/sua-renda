function resultados(){

    function mostraContainer(){
    let containerResultado = document.querySelector("#div-resultado");
    containerResultado.style.display = "block";
    } mostraContainer();

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

    const somaDosGastosMensal = () => Number(aguaPorMes) + Number(luzPorMes) + Number(mercadoPorMes) + Number(habitacaoPorMes) + Number(internetPorMes) + Number(televisaoPorMes) + Number(telefonePorMes) + Number(saudePorMes) + Number(impostoPorMes) + Number(veiculoPorMes) + Number(despesasPessoaisPorMes) + Number(lazerPorMes); 
    const lucroMensal = () => Number(rendaPorMes) - somaDosGastosMensal();
    
    // Resultados Mensal: Lucro e Soma dos Gastos
    (function resultadoLucroMensal(){
        let resultadoMensal = document.querySelector("#saldoDoMes");
        if(lucroMensal() > 0 ) resultadoMensal.innerText = `Seu mês fecha ANIMADO com um SALDO POSITIVO de  ${lucroMensal()} reais.`;
        else if(lucroMensal() === 0) resultadoMensal.innerText = `Seu mês fecha ZERADO!`;
        else resultadoMensal.innerText = `Seu mês fecha TRISTE com um SALDO NEGATIVO de  ${lucroMensal()} reais.`;
    } ());

    (function resultadoSomaMensal(){
        let somaMensal = document.querySelector("#somaDosGastosDoMes");
        somaMensal.innerText = `O seu gasto mensal é de ${somaDosGastosMensal()} reais.`;
        if(somaDosGastosMensal() === 0) somaMensal.innerText = `O seu gasto mensal está ZERADO!`;
    } ());
    

    const mediaAnualPorCategoria = (categoria) => categoria * 12;
    

    //Gastos anual separados em categorias:
    (function aguaTotal(){
        let aguaAnual = mediaAnualPorCategoria(aguaPorMes);
        let textoAguaAnual = document.querySelector("#aguaPorAno");
        textoAguaAnual.innerHTML = `🌊 Gasto com <b>ÁGUA</b>: R$ ${aguaAnual}`;    
        if(aguaAnual === 0) textoAguaAnual.innerHTML = `🌊 Gasto com <b>ÁGUA</b>: sem gasto ou não preenchido.`;      
    } ());
        
    (function luzTotal(){
        let luzAnual = mediaAnualPorCategoria(luzPorMes);
        let textoLuzAnual = document.querySelector("#luzPorAno");
        textoLuzAnual.innerHTML = `⚡ Gasto com <b>ENERGIA</b>: R$ ${luzAnual}`;
        if(luzAnual === 0) textoLuzAnual.innerHTML = `⚡ Gasto com <b>ENERGIA</b>: sem gasto ou não preenchido.`;
    } ());

    (function mercadoTotal(){
        let mercadoAnual = mediaAnualPorCategoria(mercadoPorMes);
        let textoMercadoAnual = document.querySelector("#mercadoPorAno");
        textoMercadoAnual.innerHTML = `🏪 Gasto com <b>MERCADO</b>: R$ ${mercadoAnual}`;
        if(mercadoAnual === 0) textoMercadoAnual.innerHTML = `🏪 Gasto com <b>MERCADO</b>: sem gasto ou não preenchido.`;
    } ());

    (function habitacaoTotal(){
        let habitacaoAnual = mediaAnualPorCategoria(habitacaoPorMes);
        let textoHabitacaoAnual = document.querySelector("#habitacaoPorAno");
        textoHabitacaoAnual.innerHTML = `🏠 Gasto com <b>HABITAÇÃO</b>: R$ ${habitacaoAnual}`;
        if(habitacaoAnual === 0) textoHabitacaoAnual.innerHTML = `🏠 Gasto com <b>HABITAÇÃO</b>: sem gasto ou não preenchido.`;
    } ());
    
    (function internetTotal(){
        let internetAnual = mediaAnualPorCategoria(internetPorMes);
        let textoInternetAnual = document.querySelector("#internetPorAno");
        textoInternetAnual.innerHTML = `🌐 Gasto com <b>INTERNET</b>: R$ ${internetAnual}`;
        if(internetAnual === 0) textoInternetAnual.innerHTML = `🌐 Gasto com <b>INTERNET</b>: sem gasto ou não preenchido.`;
    } ());   

    (function televisaoTotal(){
        let televisaoAnual = mediaAnualPorCategoria(televisaoPorMes);
        let textoTelevisaoAnual = document.querySelector("#televisaoPorAno");
        textoTelevisaoAnual.innerHTML = `📺 Gasto com <b>TV</b>: R$ ${televisaoAnual}`;
        if(televisaoAnual === 0) textoTelevisaoAnual.innerHTML = `📺 Gasto com <b>TV</b>: sem gasto ou não preenchido.`;
    } ());

    (function telefoneTotal(){
        let telefoneAnual = mediaAnualPorCategoria(telefonePorMes);
        let textoTelefoneAnual = document.querySelector("#telefonePorAno");
        textoTelefoneAnual.innerHTML = `☎️ Gasto com <b>TELEFONE</b>: R$ ${telefoneAnual}`;
        if(telefoneAnual === 0) textoTelefoneAnual.innerHTML = `☎️ Gasto com <b>TELEFONE</b>: sem gasto ou não preenchido.`;
    } ());

    (function saudeTotal(){
        let saudeAnual = mediaAnualPorCategoria(saudePorMes);
        let textoSaudeAnual = document.querySelector("#saudePorAno");
        textoSaudeAnual.innerHTML = `🩺 Gasto com <b>SAÚDE</b>: R$ ${saudeAnual}`;
        if(saudeAnual === 0) textoSaudeAnual.innerHTML = `🩺 Gasto com <b>SAÚDE</b>: sem gasto ou não preenchido.`;
    } ());

    (function impostoTotal(){
        let impostoAnual = mediaAnualPorCategoria(impostoPorMes);
        let textoImpostoAnual = document.querySelector("#impostoPorAno");
        textoImpostoAnual.innerHTML = `💰 Gasto com <b>IMPOSTO</b>: R$ ${impostoAnual}`;
        if(impostoAnual === 0) textoImpostoAnual.innerHTML = `💰 Gasto com <b>IMPOSTO</b>: sem gasto ou não preenchido.`;    
    } ());

    (function veiculoTotal(){
        let veiculoAnual = mediaAnualPorCategoria(veiculoPorMes);
        let textoVeiculoAnual = document.querySelector("#veiculoPorAno");
        textoVeiculoAnual.innerHTML = `🚗 Gasto com <b>AUTOMÓVEL</b>: R$ ${veiculoAnual}`;
        if(veiculoAnual === 0) textoVeiculoAnual.innerHTML = `🚗 Gasto com <b>AUTOMÓVEL</b>: sem gasto ou não preenchido.`;     
    } ());

    (function despesasPessoaisTotal(){
        let despesasPessoaisAnual = mediaAnualPorCategoria(despesasPessoaisPorMes);
        let textoDespesasAnual = document.querySelector("#despesasPessoaisPorAno");
        textoDespesasAnual.innerHTML = `💄 Gasto com <b>DESPESAS PESSOAIS</b>: R$ ${despesasPessoaisAnual}`;
        if(despesasPessoaisAnual === 0) textoDespesasAnual.innerHTML = `💄 Gasto com <b>DESPESAS PESSOAIS</b>: sem gasto ou não preenchido.`;   
    } ());

    (function lazerTotal(){
        let lazerAnual = mediaAnualPorCategoria(lazerPorMes);
        let textoLazerAnual = document.querySelector("#lazerPorAno");
        textoLazerAnual.innerHTML = `🍔 Gasto com <b>LAZER</b>: R$ ${lazerAnual}`;
        if(lazerAnual == 0) textoLazerAnual.innerHTML = `🍔 Gasto com <b>LAZER</b>: sem gasto ou não preenchido.`;
    } ());

    // Dados Finais: Renda anual, gastos anual total e lucro/perda anual.
    let rendaAnual = mediaAnualPorCategoria(rendaPorMes);
    (function rendaPorAno(){ 
        let textoRendaAnual = document.querySelector("#rendaAnual");
        textoRendaAnual.innerHTML = `Sua <b>RENDA</b> anual gira em torno de R$ ${rendaAnual}`;
        if(rendaAnual > 0) textoRendaAnual.style.color = "#0C9FCA";
        else{
            textoRendaAnual.innerText = `Renda anual: [ERRO] Preencha os dados para ver o resultado!`;
            textoRendaAnual.style.fontColor = "#F00D25";
        }
    } ());

    let somaDosGastosAnual = mediaAnualPorCategoria(somaDosGastosMensal());
    (function gastoPorAno(){
        let textoSomaAnual = document.querySelector("#somaDosGastosAnual");
            textoSomaAnual.innerHTML = `Seu <b>GASTO</b> anual gira em torno de R$ ${somaDosGastosAnual}`;
            textoSomaAnual.style.color = "#D80D22"; 
            if(somaDosGastosAnual === 0) textoSomaAnual.innerText = `Gasto anual: [ERRO] Preencha os dados para ver o resultado!`;
    } ());

    (function lucroAoAno(){
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
    } ());
}

function misterio(){
    alert(`Parece que você encontrou meu easter egg!!!`);
}