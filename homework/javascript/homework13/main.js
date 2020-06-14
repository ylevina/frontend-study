"use strict";
globalThis.onload = checkLocalStorage;

const changeButton = document.querySelector(".btn-change-style");

changeButton.addEventListener("click", () => {
    const alternativeTheme = localStorage.getItem("alternativeTheme");
    if (alternativeTheme) {
        const currentTheme = document.getElementById("theme");
        localStorage.setItem("alternativeTheme", currentTheme.href)
        currentTheme.href = alternativeTheme;
        localStorage.setItem("currentTheme", alternativeTheme)
    }
});

function checkLocalStorage() {
    const currentTheme = localStorage.getItem("currentTheme");
    if (currentTheme) {
        document.getElementById("theme").href = currentTheme;
    }
    else {
        localStorage.setItem("alternativeTheme", "styles/orange.css")
    }
}