'use strict';

const div = document.querySelector(".btn-wrapper");
div.setAttribute("tabindex", 0);
div.addEventListener("keydown", highlightKey);

function highlightKey(event) {
    const classActive = "active";
    const keyPressed = event.key;
    for (const btn of div.children) {
        if(btn.classList.contains(classActive)) btn.classList.toggle(classActive);
        if(btn.innerText === keyPressed) btn.classList.toggle(classActive); 
    }    

    event.preventDefault();
}