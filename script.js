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

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        switch (btn.id) {
            case 'equals':
                display.value = calculateExpression(display.value);
                break;
            case 'clear':
                display.value = "";
                break;
            case 'delete':
                display.value = display.value.slice(0, -1);
                break;
            default:
                if (display.value.length < MAX_DISPLAY_LENGTH) {
                    display.value += btn.id;
                }
        }
    });
});
