fetch('https://api.coingecko.com/api/v3/simple/price?ids=stellar&vs_currencies=eur')
  .then(response => response.json())
  .then(data => {
    const xlmPrice = data.stellar.eur;
    console.log('XLM Price:', xlmPrice);

    //Diogo
    var xlmamount1 = 23426.88333947;
    document.getElementById('amount1').textContent = "Quantidade : " + xlmamount1 + " XLM.";
    var finalvalue1 = parseFloat((xlmamount1 * xlmPrice).toFixed(2));
    document.getElementById('tvalue1').textContent = "Valor: " + finalvalue1 + " euros.";
    var investedAmount1 = 2028.64;
    var atualRetorn1 = parseFloat((xlmamount1 * xlmPrice).toFixed(2)) - investedAmount1;
    atualRetorn1 = parseFloat((atualRetorn1).toFixed(2))
    profitp1 = (atualRetorn1/investedAmount1)*100;
    profitp1 = parseFloat((profitp1).toFixed(2));
    document.getElementById('creturn1').textContent = "Retorno atual : " + atualRetorn1 + " euros." + "  ("+ profitp1 +" %)";

    //Cláudia
    var xlmamount2 = 505.3000;
    document.getElementById('amount2').textContent = "Quantidade : " + xlmamount2 + " XLM.";
    var finalvalue2 = parseFloat((xlmamount2 * xlmPrice).toFixed(2));
    document.getElementById('tvalue2').textContent = "Valor: " + finalvalue2 + " euros.";
    var investedAmount2 = 41.42;
    var atualRetorn2 = parseFloat((xlmamount2 * xlmPrice).toFixed(2)) - investedAmount2;
    atualRetorn2 = parseFloat((atualRetorn2).toFixed(2))
    profitp2 = (atualRetorn2/investedAmount2)*100;
    profitp2 = parseFloat((profitp2).toFixed(2));
    document.getElementById('creturn2').textContent = "Retorno atual : " + atualRetorn2 + " euros." + "  ("+ profitp2 +" %)";

    //Carlos
    var xlmamount3 = 151.7000;
    document.getElementById('amount3').textContent = "Quantidade : " + xlmamount3 + " XLM.";
    var finalvalue3 = parseFloat((xlmamount3 * xlmPrice).toFixed(2));
    document.getElementById('tvalue3').textContent = "Valor: " + finalvalue3 + " euros.";
    var investedAmount3 = 12.94;
    var atualRetorn3 = parseFloat((xlmamount3 * xlmPrice).toFixed(2)) - investedAmount3;
    atualRetorn3 = parseFloat((atualRetorn3).toFixed(2))
    profitp3 = (atualRetorn3/investedAmount3)*100;
    profitp3 = parseFloat((profitp3).toFixed(2));
    document.getElementById('creturn3').textContent = "Retorno atual : " + atualRetorn3 + " euros." + "  ("+ profitp3 +" %)";

    //Santiago
    var xlmamount4 = 151.7000;
    document.getElementById('amount4').textContent = "Quantidade : " + xlmamount4 + " XLM.";
    var finalvalue4 = parseFloat((xlmamount4 * xlmPrice).toFixed(2));
    document.getElementById('tvalue4').textContent = "Valor: " + finalvalue4 + " euros.";
    var investedAmount4 = 12.94;
    var atualRetorn4 = parseFloat((xlmamount4 * xlmPrice).toFixed(2)) - investedAmount4;
    atualRetorn4 = parseFloat((atualRetorn4).toFixed(2))
    profitp4 = (atualRetorn4/investedAmount4)*100;
    profitp4 = parseFloat((profitp4).toFixed(2));
    document.getElementById('creturn4').textContent = "Retorno atual : " + atualRetorn4 + " euros." + "  ("+ profitp4 +" %)";

    //Susana
    var xlmamount5 = 2162.091;
    document.getElementById('amount5').textContent = "Quantidade : " + xlmamount5 + " XLM.";
    var finalvalue5 = parseFloat((xlmamount5 * xlmPrice).toFixed(2));
    document.getElementById('tvalue5').textContent = "Valor: " + finalvalue5 + " euros.";
    var investedAmount5 = 207.54;
    var atualRetorn5 = parseFloat((xlmamount5 * xlmPrice).toFixed(2)) - investedAmount5;
    atualRetorn5 = parseFloat((atualRetorn5).toFixed(2))
    profitp5 = (atualRetorn5/investedAmount5)*100;
    profitp5 = parseFloat((profitp5).toFixed(2));
    document.getElementById('creturn5').textContent = "Retorno atual : " + atualRetorn5 + " euros." + "  ("+ profitp5 +" %)";
})
.catch(error => {
  console.error('Error:', error);
});