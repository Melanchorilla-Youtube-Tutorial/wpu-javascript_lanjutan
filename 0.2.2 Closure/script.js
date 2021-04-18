// lexical scope
// function init() {
//     let nama = "Sandhika"       // local variable
//     function tampilNama () {        // inner function (closure*)
//         console.log(nama);      // akses ke parent variable
//     }
//     tampilNama();
// }
// init();


// function init() {
//     // let nama = "Sandhika"       // local variable
//     function tampilNama (nama) {        // inner function (closure*)
//         console.log(nama);      // akses ke parent variable
//     }
//     return tampilNama;
// }
// let panggilNama = init();
// panggilNama('Sandhika');


// function init() {
//     // let nama = "Sandhika"       // local variable
//     return function tampilNama (nama) {        // inner function (closure*)
//         console.log(nama);      // akses ke parent variable
//     }
// }
// let panggilNama = init();
// panggilNama('Sandhika');
// panggilNama('Galih');

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Sandhika');
// selamatMalam('Galih');


// let counter = 0;
// let add = function() {
//     return ++counter;
// }
// counter = 100;
// console.log(add());
// console.log(add());
// console.log(add());

// let add = function() {
//     let counter = 0;
//     return function () {
//         return ++counter;
//     }
// }
// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());


// immidiately invoke function
let add = (function() {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();
// let a = add();

console.log(add());
console.log(add());
console.log(add());