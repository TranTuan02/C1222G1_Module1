function Currency() {
    let fromCurrency = document.getElementById("from").value;
    let toCurrency = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;
    let result;
    if (fromCurrency === "USD" && toCurrency === "VND") {
        result = "result" + (amount * 23000) + "VND";
    } else if (fromCurrency === "USD" && toCurrency === "JPY") {
        result = "result" + (amount * 133.95) + "JPY";
    } else if (fromCurrency === "USD" && toCurrency === "RMB") {
        result = "result" + (amount * 6.68) + "RMB";
    } else if (fromCurrency === "USD" && toCurrency === "GBP") {
        result = "result" + (amount * 0.84) + "GBP";
    }
    document.getElementById("Money").innerText = result;
}