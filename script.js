const buttons = document.querySelectorAll('.btn');
console.log("🚀 ~ buttons:", buttons)
const display = document.querySelector('.calculator-display');
let val = '';

const actions = (innerText) => {
    console.log('val', val.slice(0, 1));


    switch (innerText) {
        case 'RESET': {
            val = '0'
            break;
        }
        case 'DEL': {
            val = val.slice(0, -1) || '0';
            break;
        }
        default:
    }

    display.innerText = val;
}



buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const { innerText } = event.target;
        if (['RESET', 'DEL'].includes(innerText)) actions(innerText);
        else {
            val = val + event.target.innerText;
            display.innerText = val;
        }
    })
})

