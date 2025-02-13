const dislpay = document.querySelector("#pantalla")
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.id === '='){
            dislpay.value = eval(dislpay.value);
        } else if (btn.id === 'ac') {
            dislpay.value = "";
        } else if (btn.id === 'de') {
            dislpay.value = dislpay.value.slice(0, -1)
        } else {
            dislpay.value += btn.id
        }
    })
});