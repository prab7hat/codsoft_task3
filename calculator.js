let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").textContent = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").textContent = "0";
}

function calculate() {
    try {
        const result = eval(displayValue); // Use eval to calculate the result
        displayValue = result.toString();
        document.getElementById("display").textContent = displayValue;
    } catch (error) {
        displayValue = "Error";
        document.getElementById("display").textContent = displayValue;
    }
}
