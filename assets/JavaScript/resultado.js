function resultados(){
    let containerResultado = document.querySelector("#div-resultado");
        containerResultado.style.display = "block";

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

    // Resultados Mensal: Lucro e Soma dos Gastos
    function resultadoLucroMensal(){
        let resultadoMensal = document.querySelector("#saldoDoMes");
        if(lucroMensal > 0 ){
            resultadoMensal.innerText = `Seu mês fecha ANIMADO com um SALDO POSITIVO de  ${lucroMensal} reais.`;
        } 
        else if(lucroMensal === 0){
            resultadoMensal.innerText = `Seu mês fecha ZERADO!`;
        }
        else{
            resultadoMensal.innerText = `Seu mês fecha TRISTE com um SALDO NEGATIVO de  ${lucroMensal} reais.`;
        }
    } resultadoLucroMensal();

    function resultadoSomaMensal(){
        let somaMensal = document.querySelector("#somaDosGastosDoMes");
            somaMensal.innerText = `O seu gasto mensal é de ${somaDosGastosMensal} reais.`;
            if(somaDosGastosMensal === 0){
                somaMensal.innerText = `O seu gasto mensal está ZERADO!`;
            }
    } resultadoSomaMensal();
    
    //Gastos anual separados em categorias:
    function aguaTotal(){
        let aguaAnual = Number(aguaPorMes) * 12;
        let textoAguaAnual = document.querySelector("#aguaPorAno");
            textoAguaAnual.innerHTML = `🌊 Gasto com <b>ÁGUA</b>: R$ ${aguaAnual}`;    
            if(aguaAnual === 0){
                textoAguaAnual.innerHTML = `🌊 Gasto com <b>ÁGUA</b>: sem gasto ou não preenchido.`;
            }       
    } aguaTotal();
        
    function luzTotal(){
        let luzAnual = Number(luzPorMes) * 12;
        let textoLuzAnual = document.querySelector("#luzPorAno");
            textoLuzAnual.innerHTML = `⚡ Gasto com <b>ENERGIA</b>: R$ ${luzAnual}`;
            if(luzAnual === 0){
                textoLuzAnual.innerHTML = `⚡ Gasto com <b>ENERGIA</b>: sem gasto ou não preenchido.`;
            }     
    } luzTotal();

    function mercadoTotal(){
        let mercadoAnual = Number(mercadoPorMes) * 12;
        let textoMercadoAnual = document.querySelector("#mercadoPorAno");
            textoMercadoAnual.innerHTML = `🏪 Gasto com <b>MERCADO</b>: R$ ${mercadoAnual}`;
            if(mercadoAnual === 0){ 
                textoMercadoAnual.innerHTML = `🏪 Gasto com <b>MERCADO</b>: sem gasto ou não preenchido.`;
            }     
    } mercadoTotal();

    function habitacaoTotal(){
        let habitacaoAnual = Number(habitacaoPorMes) * 12;
        let textoHabitacaoAnual = document.querySelector("#habitacaoPorAno");
            textoHabitacaoAnual.innerHTML = `🏠 Gasto com <b>HABITAÇÃO</b>: R$ ${habitacaoAnual}`;
            if(habitacaoAnual === 0){
                textoHabitacaoAnual.innerHTML = `🏠 Gasto com <b>HABITAÇÃO</b>: sem gasto ou não preenchido.`;
            }     
    } habitacaoTotal();
    
    function internetTotal(){
        let internetAnual = Number(internetPorMes) * 12;
        let textoInternetAnual = document.querySelector("#internetPorAno");
            textoInternetAnual.innerHTML = `🌐 Gasto com <b>INTERNET</b>: R$ ${internetAnual}`;
            if(internetAnual === 0){
                textoInternetAnual.innerHTML = `🌐 Gasto com <b>INTERNET</b>: sem gasto ou não preenchido.`;
            } 
    } internetTotal();   

    function televisaoTotal(){
        let televisaoAnual = Number(televisaoPorMes) * 12;
        let textoTelevisaoAnual = document.querySelector("#televisaoPorAno");
            textoTelevisaoAnual.innerHTML = `📺 Gasto com <b>TV</b>: R$ ${televisaoAnual}`;
            if(televisaoAnual === 0){
                textoTelevisaoAnual.innerHTML = `📺 Gasto com <b>TV</b>: sem gasto ou não preenchido.`;
            }
    } televisaoTotal();

    function telefoneTotal(){
        let telefoneAnual = Number(telefonePorMes) * 12;
        let textoTelefoneAnual = document.querySelector("#telefonePorAno");
            textoTelefoneAnual.innerHTML = `☎️ Gasto com <b>TELEFONE</b>: R$ ${telefoneAnual}`;
            if(telefoneAnual === 0){
                textoTelefoneAnual.innerHTML = `☎️ Gasto com <b>TELEFONE</b>: sem gasto ou não preenchido.`;
            }
    } telefoneTotal();

    function saudeTotal(){
        let saudeAnual = Number(saudePorMes) * 12;
        let textoSaudeAnual = document.querySelector("#saudePorAno");
            textoSaudeAnual.innerHTML = `🩺 Gasto com <b>SAÚDE</b>: R$ ${saudeAnual}`;
            if(saudeAnual === 0){
                textoSaudeAnual.innerHTML = `🩺 Gasto com <b>SAÚDE</b>: sem gasto ou não preenchido.`;
            }     
    } saudeTotal();

    function impostoTotal(){
        let impostoAnual = Number(impostoPorMes) * 12;
        let textoImpostoAnual = document.querySelector("#impostoPorAno");
            textoImpostoAnual.innerHTML = `💰 Gasto com <b>IMPOSTO</b>: R$ ${impostoAnual}`;
            if(impostoAnual === 0){
                textoImpostoAnual.innerHTML = `💰 Gasto com <b>IMPOSTO</b>: sem gasto ou não preenchido.`;
            }     
    } impostoTotal();

    function veiculoTotal(){
        let veiculoAnual = Number(veiculoPorMes) * 12;
        let textoVeiculoAnual = document.querySelector("#veiculoPorAno");
            textoVeiculoAnual.innerHTML = `🚗 Gasto com <b>AUTOMÓVEL</b>: R$ ${veiculoAnual}`;
            if(veiculoAnual === 0){
                textoVeiculoAnual.innerHTML = `🚗 Gasto com <b>AUTOMÓVEL</b>: sem gasto ou não preenchido.`;
            }     
    } veiculoTotal();

    function despesasPessoaisTotal(){
        let despesasPessoaisAnual = Number(despesasPessoaisPorMes) * 12;
        let textoDespesasAnual = document.querySelector("#despesasPessoaisPorAno");
            textoDespesasAnual.innerHTML = `💄 Gasto com <b>DESPESAS PESSOAIS</b>: R$ ${despesasPessoaisAnual}`;
            if(despesasPessoaisAnual === 0){
                textoDespesasAnual.innerHTML = `💄 Gasto com <b>DESPESAS PESSOAIS</b>: sem gasto ou não preenchido.`;
            }     
    } despesasPessoaisTotal();

    function lazerTotal(){
        let lazerAnual = Number(lazerPorMes) * 12;
        let textoLazerAnual = document.querySelector("#lazerPorAno");
            textoLazerAnual.innerHTML = `🍔 Gasto com <b>LAZER</b>: R$ ${lazerAnual}`;
            if(lazerAnual == 0){
                textoLazerAnual.innerHTML = `🍔 Gasto com <b>LAZER</b>: sem gasto ou não preenchido.`;
            }
    } lazerTotal();

    // Dados Finais: Renda anual, gastos anual total e lucro/perda anual.
    let rendaAnual = Number(rendaPorMes) * 12;
    function rendaPorAno(){ 
        let textoRendaAnual = document.querySelector("#rendaAnual");
            textoRendaAnual.innerHTML = `Sua <b>RENDA</b> anual gira em torno de R$ ${rendaAnual}`;
            if(rendaAnual > 0){
                textoRendaAnual.style.color = "#0C9FCA";
            }
            else{
                textoRendaAnual.innerText = `Renda anual: [ERRO] Preencha os dados para ver o resultado!`;
                textoLucroAnual.style.fontColor = "#F00D25";
            }
    } rendaPorAno();

    let somaDosGastosAnual = Number(somaDosGastosMensal) * 12;
    function gastoPorAno(){
        let textoSomaAnual = document.querySelector("#somaDosGastosAnual");
            textoSomaAnual.innerHTML = `Seu <b>GASTO</b> anual gira em torno de R$ ${somaDosGastosAnual}`;
            textoSomaAnual.style.color = "#D80D22"; 
            if(somaDosGastosAnual === 0){
                textoSomaAnual.innerText = `Gasto anual: [ERRO] Preencha os dados para ver o resultado!`;
            }
    } gastoPorAno();

    function lucroAoAno(){
        let lucroAnual = rendaAnual - somaDosGastosAnual;
        let textoLucroAnual = document.querySelector("#lucroAnual");
            textoLucroAnual.innerHTML = `Seu <b>LUCRO</b> anual gira em torno de R$ ${lucroAnual}`;
            if(lucroAnual > 0){
                textoLucroAnual.style.color = "#19D327";
            }
            else if(lucroAnual === 0){
                textoLucroAnual.innerHTML = `Seu <b>LUCRO</b> anual é IGUAL a 0 ou você NÃO preencheu sua renda ou seus gastos`;
                textoLucroAnual.style.color = "#0DBAEC";
            }
            else{
                textoLucroAnual.innerHTML = `Sua <b>PERDA</b> anual gira em torno de R$ ${lucroAnual}`;
                textoLucroAnual.style.color = "#D80D22";
            }
    } lucroAoAno();
}

function misterio(){
    alert(`Parece que você encontrou meu easter egg!!!
Na verdade não é nada demais kkk só quero te desejar um bom dia e que tudo na sua vida dê certo 😊`);
}