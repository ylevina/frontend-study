'use strict';

const priceForm = document.querySelector('.price-form');
priceForm.addEventListener('click', removePrice);
priceForm.addEventListener('focusin', inputFocusIn);
priceForm.addEventListener('focusout', inputFocusOut);

function inputFocusIn(event) {
    const input = event.target.closest("#price-input");
    input.style.outline = "1px solid green";
    input.style.color = "black";
    removeError();
}

function inputFocusOut(event) {
    const input = event.target.closest("#price-input");
    input.style.outline = "";
    if (input.value) {
        if (input.value < 0) {
            input.style.outline = "1px solid red";
            showErrorMessage();
        } else {
            input.style.color = "green";
            showPrice(input.value);
        }
    } else {
        showErrorMessage();
    }
}

function removePrice(event) {
    const close = event.target.closest(".close");
    if (!close) return;
    close.closest(".current-price").remove();
    const priceInput = document.querySelector('#price-input');
    priceInput.value = "";
}

function showErrorMessage() {
    let error = document.querySelector('.error');
    if (!error) {
        error = document.createElement('span');
        error.classList.add("error");
    }
    error.textContent = "Please enter correct price";
    priceForm.append(error);
}

function showPrice(price) {
    let currentPrice = document.querySelector('span');
    if (!currentPrice) {
        currentPrice = document.createElement('span');
        currentPrice.classList.add("current-price");
    }
    currentPrice.innerHTML = `Текущая цена: ${price} <span class="close">&times;</span>`;
    priceForm.prepend(currentPrice);
}

function removeError() {
    const error = document.querySelector('.error');
    if (error) error.remove();
}