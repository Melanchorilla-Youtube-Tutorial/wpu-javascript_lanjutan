// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = "Sandhika";

// Bag. ke-1 creation phase pada Global Context
// 1. nama var = undefined
// 2. nama function = fn()
// ke-2 itu namanya hoisting
// hoisting
// window = global object
// this = window

// Bag. ke-2 execution phase

// console.log(sayHello());

// var nama = "Sandhika";
// var umur = 33;

// function sayHello() {
//     // console.log(`Halo, nama saya ${nama}, saya ${umur} tahun.`);
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Sandhika Galih';
// var username = '@sandhikagalih';

// function cetakURL(username) {
//     var instagramURL = 'https://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));


// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();


function satu() {
    var nama = 'Sandhika';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Erik';
satu();
dua('Doddy');
console.log(nama);
