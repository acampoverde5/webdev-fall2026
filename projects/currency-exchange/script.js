function convert() {

    const usd= document.getElementById("usd").value;

    const eur = usd * 0.86;
    const gbp = usd * 0.76;
    const jpy = usd * 157;
    const cad = usd * 1.40;
    const chf = usd * 0.80;

    document.getElementById("usdResult").textContent="USD: " + Number(usd).toFixed(2);
    document.getElementById("eur").textContent="EUR: €" + Number(eur).toFixed(2);
    document.getElementById("gbp").textContent="GBP: £" + Number(gbp).toFixed(2);
    document.getElementById("jpy").textContent="JPY: ¥" + Number(jpy).toFixed(2);
    document.getElementById("cad").textContent="CAD: $" + Number(cad).toFixed(2);
    document.getElementById("chf").textContent="CHF: CHF" + Number(chf).toFixed(2);

}
