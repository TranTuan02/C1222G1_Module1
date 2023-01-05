function Currency() {
    let fromCurrency = document.getElementById("from").value;
    let toCurrency = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;
    alert("Amount : " + amount);
    alert("From Currency : " + fromCurrency);
    alert("To Currency " + toCurrency);
    let result;
    if (fromCurrency === "USD" && toCurrency === "VND") {
        result = " result " + (amount * 23000) + "VND";
    } else if (fromCurrency === "VND" && toCurrency === "USD") {
        result = "result" + (amount / 23000) + "USD";
    } else if (fromCurrency === "VND") {
        result = "result" + amount + "VND";
    } else if (fromCurrency === "USD") {
        result = "result" + amount + "USD";
    }
    document.getElementById("money").innerText = result;
}