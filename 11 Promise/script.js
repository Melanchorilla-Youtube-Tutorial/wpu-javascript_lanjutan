// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=97ed753d&s=avengers',
//     success: movies => console.log(movies.Search)
// })


// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if(xhr.status === 200) {
//         if(xhr.readyState === 4) {
//             const movies = JSON.parse(xhr.response);
//             console.log(movies.Search);
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=97ed753d&s=avengers');
// xhr.send();

// const movies = fetch('http://www.omdbapi.com/?apikey=97ed753d&s=avengers');
// console.log(movies);

// fetch('http://www.omdbapi.com/?apikey=97ed753d&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));


// PROMISE
// OBJECT YANG MEMPRESENTASIKAN KEBERHASILAN / KEGAGALAM SEBUAH EVENT YANG ASYNCHRONOUS DI MASA YANG AKAN DATANG
// JANJI (TERPENUHI / INGKAR)
// states (fullfilled / rejected / pending)
// kondisi callback (resolve / reject / finally)
// aksi (then / catch)

// CONTOH 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve('Janji telah ditepati');
//     } else {
//         reject('Ingkar Janji..')
//     }
// });

// // console.log(janji1);
// janji1
// .then(response => console.log('OK! : ' + response))
// .catch(response => console.log('NOT OK! : ' + response));


// CONTOH 2 
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         setTimeout(() =>{
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000)
//     } else {
//         setTimeout(() =>{
//             resolve('Tidak ditepati setelah beberapa waktu!');
//         }, 2000)
//     }
// });


// console.log(janji2.then(() => console.log(janji2)));
// janji2
// .finally(() => console.log('Selesai menunggu'))
// .then(response => console.log('OK! : ' + response))
// .catch(response => console.log('NOT OK! : ' + response));

// Promise.all()
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Midil',
            sutradara: 'ASIAP',
            pemeran: 'Nani, Nanda'
        }]);
    }, 1000)
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            sutradara: 26,
            pemeran: 'Cerah Berawan'
        }]);
    }, 500);
})

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
// .then(response => console.log(response));
.then(response => {
    const [film,cuaca] = response;
    console.log(film);
    console.log(cuaca);
})
