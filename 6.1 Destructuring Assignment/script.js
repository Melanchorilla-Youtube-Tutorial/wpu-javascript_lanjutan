// const coba = ['satu', 'dua', 'tiga'];

// const [a, b, c] = coba;

// console.log(a);     // satu
// console.log(b);     // dua
// console.log(c);     // tiga


// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'sandhikagalih@unpas.ac.id'
// };

// const {nama, umur, email} = mhs;
// console.log(nama);      // Sandhika Galih
// console.log(umur);      // 33
// console.log(email);     // sandhikagalih@unpas.ac.id

// DESTRUCTURING VARIABLE / ASSIGNMENT
// DESTRUCTURING ARRAY
// const perkenalan = ['Halo', 'nama', 'saya', 'Sandhika Galih'];

// // const [salam, satu, dua, nama] = perkenalan;

// // SKIPPING ITEM
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// SWAP ITEMS
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// RETURN VALUE PADA FUNCTION
// function coba() {
//     return [1, 2];
// }
// const a = coba();
// const [a, b] = coba();
// console.log(a);


// REST PARAMETER
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// DESTRUCTURING OBJECT
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33
// }

// const {nama,umur} = mhs;
// console.log(nama);
// const nama = mhs.nama; 

// ASSIGNMENT TANPA DEKLARASI OBJECT
// ({nama, umur} = {nama: 'Sandhika Galih', umur: 33});
// console.log(nama);
// console.log(umur);



// ASSIGN KE VARIABEL BARU
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33
// }

// const {nama: n, umur: u} = mhs;
// console.log(n);


// MEMBERIKAN DEFAULT VALUE
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33
// } 
// const {nama, umur, email = 'email@default.com'} = mhs;
// console.log(email);



// MEMBERI NILAI DEFAULT + ASSIGN KE VARIABEL BARU
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33
// }
// const {nama: n, umur: u, email:e = 'email@default.com'} = mhs;
// console.log(e);

// REST PARAMETER
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'sandhikagalih@unpas.ac.id'
// }
// const {nama, ...value} = mhs;
// console.log(value);


// MENGAMBIL FIELD PADA OBJECT, SETELAH DIKIRIM SEBAGAI PARAMETER UNTUK FUNCTION
const mhs = {
    id: 123,
    nama: 'Sandhika Galih',
    umur: 33,
    email: 'sandhikagalih@unpas.ac.id'
}

function getIdMhs({id}){
    return id;
}
console.log((mhs));
