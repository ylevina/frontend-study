Теоретический вопрос
Приведите пару примеров, когда уместно использовать в коде конструкцию try...catch.
Если есть места где потенциально возможно возникновение ошибки и нужно ее словить, обработать и продолжить выполнение кода. Например, мы делаем запрос на сервер и по какой-то причине возникает ошибка или в ответ ошибка, нужно закетчить, обработать и что бы выполение остального кода не остановилось.

Задание
Дан массив books.
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

Выведите этот массив в виде списка (тег ul).
На странице должен находится div с id="root", куда и нужно будет положить этот список (похожая задача была дана в модуле basic).
Перед выводом обьекта на странице, нужно проверить его на корректность (в обьекте должны содержаться все три свойства - author, name, price). Если какого-то из этих свойств нету, в консоли должна высветится ошибка с указанием - какого свойства нету в обьекте.
Тот обьект, что некорректен по условиям предыдущего пункта - не должен появиться на странице.