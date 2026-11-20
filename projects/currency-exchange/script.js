function convert() {

    const usd= document.getElementById("usd").value;

    const eur = usd * 0.86;
    const gbp = usd * 0.76;
    const jpy = usd * 157;
    const cad = usd * 1.40;
    const chf = usd * 0.80;

    document.getElementById("usdResult").textContent="USD: " + usd;
    document.getElementById("eur").textContent="EUR: " + eur;
    document.getElementById("gbp").textContent="GBP: " + gbp;
    document.getElementById("jpy").textContent="JPY: " + jpy;
    document.getElementById("cad").textContent="CAD: " + cad;
    document.getElementById("chf").textContent="CHF: " + chf;

}
