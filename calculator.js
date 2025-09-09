
let display = document.getElementById("evaluateArea");
let buttons = document.querySelectorAll("#calculator button");
let history = [];
let memory = 0;
let grandTotal = 0;
let mrcPressed = false;
let gtPressed = false;
let operatorSymbol = [".", "√", "+", "-", "*", "%", "/"];
let result;
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            let expression = display.textContent;
            if (display.textContent.includes("√")) {
                result = Math.sqrt(parseFloat(display.textContent.replace("√", "")));

            }
            else if (display.textContent.includes("%")) {
                let expression = display.textContent;
                let beforePercent = parseFloat(expression.split("%")[0]);
                let afterPercent = parseFloat(expression.split("%")[1]);
                result = (beforePercent / 100) * afterPercent;
                result = parseFloat(result).toFixed(2)
            }
            else {
                result = parseFloat(eval(display.textContent)).toFixed(2);
            }
            display.textContent = result;
            history.push(expression + " = " + result);
            let list = "";
            history.forEach(item => {
                list = list + "<li>" + item + "</li>";
            })
            document.getElementById("history-list").innerHTML = list;
            grandTotal += parseFloat(result);

        }
        else if (button.textContent === "⌫") {
            display.textContent = display.textContent.slice(0, -1);
        }
        else if (button.textContent === "Ac") {
            display.textContent = "";
        }
        else if (button.textContent === "history") {
            let historyBox = document.getElementById("history-box");

            historyBox.classList.toggle("show");

        }

        else if (button.textContent === "M+") {
            let num = parseFloat(display.textContent);
            if (!isNaN(num)) {
                memory += num;
            }
        }
        else if (button.textContent === "M-") {
            let num = parseFloat(display.textContent);
            if (!isNaN(num)) {
                memory -= num;
            }
        }

        else if (button.textContent === "MRC") {
            if (!mrcPressed) {
                mrcPressed = true;
                display.textContent = memory.toString();
                setTimeout(() => { mrcPressed = false }, 2000);
            }
            else {
                memory = 0;
                display.textContent = "0";
                mrcPressed = false;
            }
        }
        else if (button.textContent === "GT") {
            if (!gtPressed) {
                gtPressed = true;
                display.textContent = grandTotal.toString();
                setTimeout(() => { gtPressed = false }, 2000);
            }


            else {
                grandTotal = 0;
                display.textContent = "0";
                gtPressed = false;
            }
        }
        else if (button.textContent === "C") {
            display.textContent = "0";
        }

        else {
            let value = button.textContent;
            if (operatorSymbol.includes(value) && display.textContent === "" && value !== "-") {
                return;
            }
            if (operatorSymbol.includes(value) && operatorSymbol.includes(display.textContent.slice(-1))) {
                display.textContent = display.textContent.slice(0, -1) + value;
            } else {
                display.textContent += value;
            }
        }
    });
});

let historyBox = document.getElementById("history-box");
function closeHistory() {
    historyBox.classList.remove("show");
};
window.addEventListener('resize', () => {
    if (window.innerWidth <= 580) {
        historyBox.classList.remove("show");
    }

})
document.getElementById('themeSelect').addEventListener('change', () => {
    let theme = document.getElementById("themeSelect").value;
    let calculator = document.getElementById("calculator");
    let evaluate = document.getElementById("evaluateArea");
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator, .extra-operator");
    let historyBox = document.getElementById("history-box");
    let closeBtn = document.getElementById("closebtn");

    if (theme === "blue") {
        calculator.style.backgroundImage = "linear-gradient(blue, black)";
        evaluate.style.backgroundColor = "blue";
        evaluate.style.color = "white";
        historyBox.style.background = "#1a1a40";
        historyBox.style.color = "white";
        closeBtn.style.background = "green";
        closeBtn.style.color = "yellow";
        numbers.forEach(btn => {
            btn.style.background = "#031b6b";
            btn.style.color = "white";
        });
        operators.forEach(btn => {
            btn.style.background = "#ffcc00";
            btn.style.color = "black";
        });
    }

    if (theme === "green") {
        calculator.style.backgroundImage = "linear-gradient(#2ecc71, #31f555ff)";
        evaluate.style.backgroundColor = "#27ae60";
        evaluate.style.color = "white";
        historyBox.style.background = "#145a32";
        historyBox.style.color = "gold";
        closeBtn.style.background = "#1586f6ff";
        closeBtn.style.color = "black";
        numbers.forEach(btn => {
            btn.style.background = "#c3f82fff";
            btn.style.color = "black";
        });
        operators.forEach(btn => {
            btn.style.background = "#096de0ff";
            btn.style.color = "black";
        });
    }

    if (theme === "red") {
        calculator.style.backgroundImage = "linear-gradient(#e74c3c, #fd2c15ff)";
        evaluate.style.backgroundColor = "#c0392b";
        evaluate.style.color = "white";
        historyBox.style.background = "#f84141ff";
        historyBox.style.color = "#0a0212f3";
        closeBtn.style.background = "#ac7fe6ff";
        closeBtn.style.color = "black";
        numbers.forEach(btn => {
            btn.style.background = "#922b21";
            btn.style.color = "white";
        });
        operators.forEach(btn => {
            btn.style.background = "#f7dc6f";
            btn.style.color = "black";
        });
    }

    if (theme === "purple") {
        calculator.style.backgroundImage = "linear-gradient(#9b59b6, #b049daff)";
        evaluate.style.backgroundColor = "#8e44ad";
        evaluate.style.color = "white";
        historyBox.style.background = "#d98bf8ff";
        historyBox.style.color = "#42700dff";
        closeBtn.style.background = "#b91ffbff";
        closeBtn.style.color = "black";
        numbers.forEach(btn => {
            btn.style.background = "#6c3483";
            btn.style.color = "white";
        });
        operators.forEach(btn => {
            btn.style.background = "#f521b9f6";
            btn.style.color = "black";
        });
    }
    if (theme === "orange") {
        calculator.style.backgroundImage = "linear-gradient(orange,orange)";
        evaluate.style.backgroundColor = "#fb761de4";
        evaluate.style.color = "white";
        historyBox.style.background = "orange";
        historyBox.style.color = "black";
        closeBtn.style.background = "#7421fbff";
        closeBtn.style.color = "black";
        numbers.forEach(btn => {
            btn.style.background = "#ffec1cff";
            btn.style.color = "black";
        });
        operators.forEach(btn => {
            btn.style.background = "#1c20ffff";
            btn.style.color = "black";
        });
    }




    if (theme === "pink") {
        calculator.style.backgroundImage = "linear-gradient(to bottom right, #ff85c1, #ff1abc)";
        evaluate.style.backgroundColor = "#ff69b4";
        evaluate.style.color = "white";
        evaluate.style.border = "2px solid black";
        historyBox.style.background = "#c71585";
        historyBox.style.color = "#ffe6f0";
        closeBtn.style.background = "#ffe6f0";
        closeBtn.style.color = "black";
        numbers.forEach(btn => {
            btn.style.background = "#FF69B4";
            btn.style.color = "black";
        });
        operators.forEach(btn => {
            btn.style.background = "#FF7F50";
            btn.style.color = "black";
        });
    }

    if (theme === "brown") {
        calculator.style.backgroundImage = "linear-gradient(#a0522d, #3e2723)";
        evaluate.style.backgroundColor = "#6e2c00";
        evaluate.style.color = "white";
        historyBox.style.background = "#3e2723";
        historyBox.style.color = "#ffe206ff";
        closeBtn.style.background = "#f25015ff";
        closeBtn.style.color = "black";
        numbers.forEach(btn => {
            btn.style.background = "#5d4037";
            btn.style.color = "white";
        });
        operators.forEach(btn => {
            btn.style.background = "#f0e68c";
            btn.style.color = "black";
        });
    }

    if (theme === "yellow") {
        calculator.style.backgroundImage = "linear-gradient(to bottom right,orange,yellow)"; // mostly yellow with soft orange touch


        evaluate.style.backgroundColor = "#f1c40f";
        evaluate.style.color = "black";
        historyBox.style.background = "#7d6608";
        historyBox.style.color = "#fff9c4";
        closeBtn.style.background = "#fff176";
        closeBtn.style.color = "black";
        numbers.forEach(btn => {
            btn.style.background = "#ffe082";
            btn.style.color = "black";
        });
        operators.forEach(btn => {
            btn.style.background = "#ffd700";
            btn.style.color = "black";
        });
    }

    if (theme === "grey") {
        calculator.style.backgroundImage = "linear-gradient(#95a5a6, #2c3e50)";
        evaluate.style.backgroundColor = "#7f8c8d";
        evaluate.style.color = "white";
        historyBox.style.background = "#2c3e50";
        historyBox.style.color = "white";
        closeBtn.style.background = "#bdc3c7";
        closeBtn.style.color = "black";
        numbers.forEach(btn => {
            btn.style.background = "#34495e";
            btn.style.color = "white";
        });
        operators.forEach(btn => {
            btn.style.background = "#ecf0f1";
            btn.style.color = "black";
        });
    }
});
document.addEventListener('keydown', (e) => {
    let key = e.key;
    let buttonMap = {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "0": "0",
        "+": "+",
        "-": "-",
        "*": "*",
        "/": "/",
        "c": "C",
        "C": "C",
        "a": "Ac",
        "A": "Ac",
        "shift+5": "%",
        "Enter": "="
    }
    let buttonValue = buttonMap[key];
    if (buttonValue) {
        const btn = Array.from(document.querySelectorAll(".number,.operator,.extra-operator")).find(b => b.textContent === buttonValue);
        if (btn) btn.click();
        if (e.key === "Enter") {
            e.preventDefault(); /*normally enter dabane par selected button press ho jati hai par maine 
            enter = ko assign kiya hai isliye uske default behavior ko rokne ke liye*/
        }
    }
})
