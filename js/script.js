
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

document.addEventListener("DOMContentLoaded", () => {

    const adds = document.querySelectorAll(".promo__adv img"),
        genreDiv = document.querySelector(".promo__genre"),
        bg = document.querySelector(".promo__bg"),
        checkBox = document.querySelector('[type = "checkbox"]'),
        input = document.querySelector(".adding__input"),
        addButton = document.querySelector('[data-current="1"]');

    let movies =  document.querySelector(".promo__interactive-list"),
        deleteButtons;


    adds.forEach(item => {
        item.remove();
    });


    genreDiv.textContent = "Драма";


//bg.style.cssText = "background: url('../img/bg.jpg') center center/cover no-repeat; background-position: top";
    bg.style.backgroundImage = "url('/img/bg.jpg')";


    const updateMovies = () => {
        movies.innerHTML = '';


        movieDB.movies.sort();

        movieDB.movies.forEach( (item, i) => {

            if(item.length > 21) item = item.substring(0, 21) + '...';
            movies.innerHTML += `<li class="promo__interactive-item">${i+1}. ${item}
                            <div class="delete"></div>
                        </li>`
        });

        deleteButtons = document.querySelectorAll(".delete");

        deleteButtons.forEach((item, i) => {
            item.addEventListener('click', () => {

                movieDB.movies.splice(i, 1);
                updateMovies();

            });

        });

    };

    updateMovies();

    addButton.addEventListener( 'click', (e) => {
        e.preventDefault();
        movieDB.movies.push(input.value);
        updateMovies();
        if(checkBox.checked) console.log("Любимый фильм");
        input.value = "";
    });


});

