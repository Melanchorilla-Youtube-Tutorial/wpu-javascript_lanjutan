// // function declaration
// function tampilPesan(nama) {
//     alert(`halo ${nama}`);
// }
// tampilPesan('Sandhika');

// function expression
// const tampilPesan = (nama) => {
//     alert(`Halo, ${nama}`);
// }
// tampilPesan('Sandhika')

// // function expression with arrow function
// const tampilPesan = (nama) => {
//     alert(`Halo, ${nama}`);
// }
// tampilPesan('Sandhika');

// const tampilNama = (nama) => { return `Halo, ${nama}`; }
// console.log(tampilNama('Sandhika Galih'));

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('Erik', 'Malam'));

// implicit return (shorthand, harus dengan 1 parameter)
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Doddy'));

// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

let mahasiswa = ['Sandhika Galih', 'Doddy Ferdiansyah', 'Erik'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });

// let jumlahHuruf = mahasiswa.map((nama) => {
//     return nama.length;
// });

// let jumlahHuruf = mahasiswa.map( nama => nama.length );

// let jumlahHuruf = mahasiswa.map(nama => ({
//     nama: nama, jumlahHuruf: nama.length
// }));
let jumlahHuruf = mahasiswa.map(nama => ({
    nama, jumlahHuruf: nama.length
}));

// console.log(jumlahHuruf);
console.table(jumlahHuruf);