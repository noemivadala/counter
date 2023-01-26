// 1 - cart
// 2 - function (increment, decrement)
// 3 - add to cart
// 4 - reset

let divContainer = document.createElement('div');
divContainer.className = "divContainer";

let counter = document.createElement('div');
counter.className = "counter";

let buttonIncrement = document.createElement('button');
buttonIncrement.className = "buttonIncrement";
buttonIncrement.innerHTML = "+";

let buttonDecrement = document.createElement('button');
buttonDecrement.className = "buttonDecrement";
buttonDecrement.innerHTML = "-";

let inputNumber = document.createElement('input');
inputNumber.className = "inputNumber";
inputNumber.type = "number";
inputNumber.value = 0;

let reset = document.createElement('button');
reset.className = "reset";
reset.innerHTML = "Cancella carrello";

let add = document.createElement('button');
add.className = "add";
add.innerHTML = "Aggiungi al carrello";

// 1 - cart
let cart = document.createElement('img');
cart.className = "cart";
cart.src = "img/cart.png";

let quantity = document.createElement('img');
quantity.className = "quantity cart";
quantity.src = "img/quantity-cart.png";

let valueQuantity = document.createElement('p');
valueQuantity.className = "value-quantity";
valueQuantity.innerHTML = inputNumber.value;

document.body.append(divContainer);
divContainer.append(quantity, cart, valueQuantity, counter, add, reset);
counter.append(buttonDecrement, inputNumber, buttonIncrement);

// 2 - function
buttonDecrement.onclick = function() {
    inputNumber.value--;

    if (inputNumber.value <= 0){
        inputNumber.value = 0;
    }
}

buttonIncrement.onclick = function() {
    inputNumber.value++;
}

// 3 - add to cart
add.onclick = function() {
    valueQuantity.innerHTML = inputNumber.value;
}

// 4 - reset
reset.onclick = function() {
    inputNumber.value = 0;
    valueQuantity.innerHTML = inputNumber.value;
}
