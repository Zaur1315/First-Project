'use strict';

let numberOfFilm;

function start() {
    numberOfFilm = prompt('Сколько фильмов ты уже посмотрел?', '');

    while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
        numberOfFilm = prompt('Сколько фильмов ты уже посмотрел?', '');
    }
}

start();

function detectPersonLevel() {

    if (numberOfFilm < 10 && numberOfFilm > 0) {
        alert('Вы просмотрели слишком мало фильмов');
    } else if (numberOfFilm < 30 && numberOfFilm > 0) {
        alert('Классический зритель');
    } else if (numberOfFilm > 30) {
        alert('Вы киноман!!!');
    } else {
        alert('Произошла ошибка!');
    }
}

detectPersonLevel();
let personaMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        let a = prompt('Назовите один из последних просмотренных', ''),
            b = prompt('На сколько вы его отцениваете?', '');



        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personaMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }

}

rememberMyFilms();


function writeYourGenres(){
    for(let i =1; i<4; i++ ){
        let x = prompt(`Ваш любимый жанр номер ${i}`);
        personaMovieDB.genres[i-1]=x;
    }
}


writeYourGenres();



function showMyDB (){

    if(personaMovieDB.privat == false){
        console.log(personaMovieDB);
    }

}

showMyDB();


