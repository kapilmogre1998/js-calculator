const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.calculator-display');
let inputResult = '';
const operators = ['+', '-', '*', '%', '/'];
let decimalAdded = false;

const actions = (innerText) => {
    if (innerText == 'RESET') {
        inputResult = 0;
    } else if (innerText == 'DEL') {
        inputResult = inputResult.slice(0, -1) || '0';
    }
    display.innerText = inputResult;
}

const calculateResult = () => {
    try {
        inputResult = eval(inputResult).toString();
        if (inputResult.includes('.')) inputResult = parseFloat(inputResult).toFixed(2);
        display.innerText = inputResult;
    } catch (error) {
        display.innerText = 'Error';
    }
};

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const { innerText } = event.target;

        //first character is operant then return
        if (operators.includes(innerText) && inputResult.length == 0) return;

        //if duplicate decimal return
        if (innerText == '.' && decimalAdded) return;

        //Replace last operator
        if (operators.includes(innerText) && operators.includes(inputResult.slice(-1))) {
            inputResult = inputResult.slice(0, -1) + innerText;
            display.innerText = inputResult;
            decimalAdded = false;
        }

        else if (innerText == '=') calculateResult();

        else if (['RESET', 'DEL'].includes(innerText)) actions(innerText);

        else {
            inputResult += innerText;
            if (inputResult.slice(0, 1) == '0') {
                inputResult = inputResult.slice(1);
            }
            if (innerText == '.') decimalAdded = true;

            if (operators.includes(innerText)) decimalAdded = false;

            display.innerText = inputResult;
        }
    })
})

