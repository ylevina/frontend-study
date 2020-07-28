const books = [
    {
        author: "Скотт Бэккер",
        name: "Тьма, что приходит прежде",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Воин-пророк",
    },
    {
        name: "Тысячекратная мысль",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Нечестивый Консульт",
        price: 70
    },
    {
        author: "Дарья Донцова",
        name: "Детектив на диете",
        price: 40
    },
    {
        author: "Дарья Донцова",
        name: "Дед Снегур и Морозочка",
    }
];

function validateFields(book) {
    const requiredFields = ["author", "name", "price"];
    requiredFields.forEach(field => {
        if (!(field in book)) throw new Error(`Missing ${field} field!`);       
    });

    return `<ul>${Object.keys(book).map(key => key = `<li>${key}</li>`)}</ul>`;
}

try {
    books.map(book => book = `<li>${validateFields(book)}</li>`)
} catch(error) {
    console.log(error);
}





