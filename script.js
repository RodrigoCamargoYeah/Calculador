const display = document.querySelector("#pantalla");
const buttons = document.querySelectorAll("button");
const MAX_DISPLAY_LENGTH = 12;

function calculateExpression(expression) {
    try {
        // This is a simple and unsafe implementation. In a real-world scenario,
        // you should use a proper math expression parser library.
        return Function(`'use strict'; return (${expression})`)();
    } catch (error) {
        return "Error";
    }
}
display.value = "0";

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        switch (btn.id) {
            case 'equals':
                if(display.value === "Error" || display.value === 'Infinty'){
                    display.value = "0";
                } else{
                    display.value = calculateExpression(display.value);
                }
                break;
            case 'clear':
                display.value = "0";
                break;
            case 'delete':
                if (display.value.length === 1 || display.value === "Error" || display.value === "infnity") {
                    display.value = "0";
                } else {
                    display.value = display.value.slice(0, -1);
                }
                    
                break;
            default:
                if (display.value.length < MAX_DISPLAY_LENGTH) {
                    if (display.value === "0" || display.value === "Error" || display.value === "infnity") {
                    display.value = btn.id;
                } else {
                    display.value += btn.id;
                } 
            } 
        }
    });
});
