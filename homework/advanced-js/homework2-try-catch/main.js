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

const requiredFields = ["author", "name", "price"];

function validateBook(book, requiredFields) {
    try {
        requiredFields.forEach(field => {
            if (!(field in book)) throw new Error(`Missing ${field} field!`);
        });

        return `<li>${book.author}, '${book.name}', ${book.price}</li>`;

    } catch (error) {
        console.log(error);
    }
}

function showValidBooks(books, requiredFields) {
    const root = document.querySelector('#root');
    const ul = document.createElement('ul');
    ul.innerHTML = books.map(book => validateBook(book, requiredFields)).join('');
    root.append(ul);
}

showValidBooks(books, requiredFields);