const data1 = ['hello', 'world', 'Kyiv', 'Kharkiv', 'Odesa', [1, 2, 3, [4, 5, 6]], 'Lviv'];

showOnPage(data1);
clearPageOnTimer(10);

function showOnPage(data) {  
    document.body.innerHTML = nestedObjects(data);
}

function clearPageOnTimer(countDown) {
    const h1 = window.document.createElement('h1');
    window.document.body.append(h1);

    const timerId = setInterval(() => {
        h1.textContent = countDown;
        countDown--;
    },
        1000);

    setTimeout(() => { clearInterval(timerId); window.location = "about:blank"; }, countDown * 1000);
}

function nestedObjects(element) {
    if(Array.isArray(element)) {
        return `<ul>${element.map(e => nestedObjects(e)).join(' ')}</ul>`;
    }

    return `<li>${element}</li>`;   
} 