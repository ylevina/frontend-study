Теоретический вопрос

1. Опишите своими словами как работает цикл forEach.

forEach метод массивов(встроенный в массив) и других перебираемых коллекций. В основе под капотом скорее всего лежит цикл for. Используется для перебора массива. Перебирая каждый эллемент вызывает функцию коллбек(которую нужно передать, можно ранее где-то созданную). В коллбек передает параметры: эллемент, индекс, сам массив. Если индекс не нужен можно просто элемент. Ну и foreach ничего не возвращает и используется только для перебора. 