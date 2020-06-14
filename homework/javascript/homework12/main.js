const delay = 5000;
const div = document.querySelector(".images-wrapper");
let intervalId = setInterval(showImage, delay);
addButton("Прекратить", () => clearInterval(intervalId));
addButton("Возобновить", () => { intervalId = setInterval(showImage, delay); })

function showImage() {
    const images = Array.from(div.children);
    let index = images.findIndex(img => !img.classList.contains("hide"));
    images[index].classList.toggle('hide');
    index++;
    if (index >= images.length) index = 0;
    images[index].classList.toggle('hide');
}

function addButton(text, parentElement = document.body, event = "click", handler = () => {}) {
    const button = document.createElement('button');
    button.innerText = text;
    button.style.cssText = "margin: 20px,"
    parentElement.append(button);
    button.addEventListener(event, handler);
}