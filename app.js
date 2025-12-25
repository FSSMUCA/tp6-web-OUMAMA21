const form = document.getElementById("calcForm");
const errorDiv = document.getElementById("error");
const historyList = document.getElementById("historyList");

let history = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    errorDiv.textContent = "";

    const a = document.getElementById("nombreA").value;
    const b = document.getElementById("nombreB").value;
    const op = document.getElementById("operation").value;

    // Validation
    if (a === "" || b === "") {
        errorDiv.textContent = "❌ Tous les champs sont obligatoires.";
        return;
    }

    if (op === "/" && Number(b) === 0) {
        errorDiv.textContent = "❌ Division par zéro interdite.";
        return;
    }

    let result;
    switch (op) {
        case "+": result = Number(a) + Number(b); break;
        case "-": result = Number(a) - Number(b); break;
        case "*": result = Number(a) * Number(b); break;
        case "/": result = Number(a) / Number(b); break;
    }

    const operationText = `${a} ${op} ${b} = ${result}`;
    history.push(operationText);

    updateHistory();
});

function updateHistory() {
    historyList.innerHTML = "";
    history.forEach(op => {
        const li = document.createElement("li");
        li.textContent = op;
        historyList.appendChild(li);
    });
}
