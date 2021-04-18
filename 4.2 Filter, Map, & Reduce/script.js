const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// for
// const newAngka = [];
// for(let i = 0; i < angka.length; i++){
//     if(angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// filter
// const newAngka = angka.filter(function(a) {
//     return a >= 3;
// })


// const newAngka = angka.filter((a) => {
//     return a >= 3
// });
// const newAngka = angka.filter((a) => a >= 3);
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);


// kalikan semua angka dengan 2
// map
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);


// jumlahkan seluruh elemen pada array
// reduce
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => 
//     accumulator + currentValue, 0);
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);

// mehod chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5)  //8, 9, 9
    .map(a => a * 3)    //24, 27, 27
    .reduce((accumulator, current) => accumulator + current);

    console.log(hasil);