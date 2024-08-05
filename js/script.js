/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adds = document.querySelectorAll(".promo__adv"),
      genreDiv = document.querySelector(".promo__genre"),
      bg = document.querySelector(".promo__bg");

let movies =  document.querySelector(".promo__interactive-list");

//1
adds.forEach(item => {
    item.remove();
});

//2
genreDiv.textContent = "Драма";

//3
bg.style.cssText = "background: url('../img/bg.jpg') center center/cover no-repeat; background-position: top";

//4 and 5
movies.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach( function (item, i){
    movies.innerHTML = movies.innerHTML + `<li class="promo__interactive-item">${i+1}. ${item}
                            <div class="delete"></div>
                        </li>`
});






