let num1 = null;
let num2 = null;
let operator = null;
let result = null;
const display = document.querySelector('#pantalla');
const buttons = document.querySelectorAll('button');


display.value = '0';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'equals':
                if (display.value == '0' && num1 == null || display.value === 'Error' || display.value === 'Infinity'){
                    display.value = '0';
                    // alert(button.id);
                } else if (num1 != null && operator === null) {
                    display.value = display.value;
                } else {
                    calcular(Number(num1), Number(num2), operator);
                    if (result === 'jeje') {
                        display.value = 'jeje';
                    } else {    
                        display.value = result;
                        num1 = result;
                        num2 = null;
                        operator = null;
                        result = null;
                    }
                }
                break;
            case 'clear':
                display.value = '0';
                num1 = null;
                num2 = null;
                operator = null;
                result = null;
            break;
            case 'delete':
                if (display.value.length === 1 || display.value === "Error"){
                    display.value = '0';
                } else {
                    display.value = display.value.slice(0, -1);
                }
            break;
            case '+':
            case '-':
            case '*':
            case '/':
                display.value = display.value;
                if(num1 === null){
                    if (button.id === '-'){
                        num1 = button.id;
                        display.value = button.id;
                    }
                } else if (num1 != null && operator === null){
                    operator = button.id;
                }
            break;
            default:
                if (display.value === "0" || display.value === "Error" || display.value === 'Infinity'){
                    display.value = button.id;
                    num1 = button.id;
                } else if (num1 != null && operator === null) {
                    display.value += button.id;
                    num1 += button.id;
                } else if (operator != null && num2 === null){
                    display.value = button.id;
                    num2 = button.id;
                } else if (operator != null && num2 != null){
                    display.value += button.id;
                    num2 += button.id;
                }
            break;
        }
    });
});

function calcular(x, y, op) {
    switch (op) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            if (y === '0'){
                result = 'jeje';
            } else{
                result = x / y;
            }
            break;
    }
}