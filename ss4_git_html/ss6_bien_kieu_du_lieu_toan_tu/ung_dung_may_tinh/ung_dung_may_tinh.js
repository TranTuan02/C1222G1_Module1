function addition() {
    let number1 = +document.getElementById("number1").value;
    let number2 = +document.getElementById("number2").value;
    let result = number1 + number2;
    document.getElementById("result").innerHTML = "Kết quả :" + result;
}

function subtraction() {
    let number1 = +document.getElementById("number1").value;
    let number2 = +document.getElementById("number2").value;
    let result = number1 - number2;
    document.getElementById("result").innerHTML = "Kết quả : " + result;
}

function multiplication() {
    let number1 = +document.getElementById("number1").value;
    let number2 = +document.getElementById("number2").value;
    let result = number1 * number2;
    document.getElementById("result").innerHTML = "Kết quả : " + result;
}

function division() {
    let number1 = +document.getElementById("number1").value;
    let number2 = +document.getElementById("number2").value;
    let result = number1 / number2;
    document.getElementById("result").innerHTML = "Kết quả : " + result;
}