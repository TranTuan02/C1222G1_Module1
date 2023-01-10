function intermediate(from, to) {
    switch (from) {
        case "VND":
            return to/ 23000;
        case "USD":
            return to;
        case "JPY":
            return 0.0076 * to;
        case "RMB":
            return 0.15 * to;
        case "GBP":
            return 1.21 * to;

    }

}

function fromIntermediateTo(from, to) {
    switch (from) {
        case "VND":
            return to * 23000;
        case "USD":
            return to;
        case "JPY":
            return to/ 0.0076;
        case "RMB":
            return to / 0.15;
        case "GBP":
            return to/ 1.21;


    }

}

function result() {
    let showResult = document.getElementById("showResult");
    let fromCurrency = document.getElementById("from").value;
    let toCurrency = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;
    let result = fromIntermediateTo(toCurrency, intermediate(fromCurrency, amount));
    showResult.innerHTML = result;
}