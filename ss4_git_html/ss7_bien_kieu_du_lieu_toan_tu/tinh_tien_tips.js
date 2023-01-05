function Calculate() {
    let bill = document.getElementById("pay").value;
    let service = document.getElementById("service").value;
    let money = document.getElementById("money").value;
    let result;
    let people = document.getElementById("people").value;
    if (service === "30") {
        result = (bill * 30 / 100) / people;
        document.getElementById("money").innerHTML = result;
    } else if (service === "20") {
        result = (bill * 20 / 100) / people;
        document.getElementById("money").innerHTML = result;
    } else if (service === "15") {
        result = (bill * 15 / 100) / people;
        document.getElementById("money").innerHTML = result;
    } else if (service === "10") {
        result = (bill * 10 / 100) / people;
        document.getElementById("money").innerHTML = result;
    } else if (service === "5") {
        result = (bill * 5 / 100) / people;
        document.getElementById("money").innerHTML = result;
    }
}

