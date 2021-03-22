const passwordForm = document.querySelector(".password-form");
passwordForm.addEventListener("click", showPassword);
passwordForm.addEventListener("focusin", clearErrorMessage);
passwordForm.addEventListener("submit", verifyPassword);

function showPassword(event) {
    const showPassword = "fa-eye";
    const hidePassword = "fa-eye-slash";
    const icon = event.target.closest(".icon-password");
    if (icon) {
        icon.classList.toggle(showPassword);
        icon.classList.toggle(hidePassword);
        const input = icon.previousElementSibling;
        if(input && input.tagName === 'INPUT' && input.toggleAttribute("type")) input.setAttribute("type", "password");
    } 
}

function verifyPassword(event) {  
    const password = document.querySelector("#password");
    const passwordRepeat = document.querySelector("#password-repeat");
    
    if(password.value === passwordRepeat.value) {
        alert("You are welcome");
    } else {
        const errorMessage = document.createElement('p');
        errorMessage.classList.add("password-error");
        errorMessage.textContent = "Нужно ввести одинаковые значения";
        passwordRepeat.parentElement.append(errorMessage);
    }
    event.preventDefault();
}

function clearErrorMessage(event){
    const input = event.target.closest("input");
    if(input) {
        const error = document.querySelector(".password-error");
        if(error) error.remove();
    }
}