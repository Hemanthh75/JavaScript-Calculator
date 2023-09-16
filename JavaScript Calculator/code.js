function result() {

    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let sum = document.getElementById("operand").value;

    if (sum == "add") {
        document.getElementById("answer").value = (a + b);
    }else if (sum == "sub") {
        document.getElementById("answer").value = (a - b);
    }else if (sum == "mul") {
        document.getElementById("answer").value = (a * b);
    }else if (sum == "div") {
        document.getElementById("answer").value = (a / b);
    }
}

function clr() {
    document.getElementById("answer").value = "";
}