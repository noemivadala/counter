// 1 - cart
// 2 - function (increment, decrement)
// 3 - add to cart
// 4 - reset

function createElement(tag, nameClass, text) {
    let element = document.createElement(tag);
    element.className = nameClass;
    element.innerHTML = text;
    return element;
}

let divContainer = createElement('div', 'divContainer', '')
document.body.append(divContainer);

let divCart = createElement('div', 'divCart', '')
let counter = createElement('div', 'counter', '')
counter.id = 'counterDiv';

let buttonIncrement = createElement('button', 'buttonIncrement', '+')
let buttonDecrement = createElement('button', 'buttonDecrement', '-')
let inputNumber = createElement('input', 'inputNumber', '')
inputNumber.type = "number";
inputNumber.value = 0;
let add = createElement('button', 'add', 'Aggiungi al carrello')
let reset = createElement('button', 'reset', 'Cancella carrello')
// 1 - cart
let cart = createElement('img', 'cart', '')
cart.src = "assets/img/cart.png";
let quantity = createElement('img', 'quantity', '')
quantity.src = "assets/img/quantity-cart.png";
let valueQuantity = createElement('p', 'value-quantity', '')
valueQuantity.src = "assets/img/quantity-cart.png";
valueQuantity.innerHTML = inputNumber.value;


divCart.append(cart, quantity, valueQuantity)
divContainer.append(divCart, counter);
counter.append(buttonDecrement, inputNumber, buttonIncrement, add, reset);

let counterDiv = document.getElementById('counterDiv');

counterDiv.addEventListener('click', function(e){
    const target = e.target;

    if(target == buttonIncrement) {
        inputNumber.value++;
    } else if (target == buttonDecrement) {
        inputNumber.value--;
        if (inputNumber.value <= 0){
            inputNumber.value = 0;
        }
    } else if (target == add) {
        valueQuantity.innerHTML = inputNumber.value;
    } else if (target == reset) {
        inputNumber.value = 0;
        valueQuantity.innerHTML = inputNumber.value;
    }
})