// CALLBACK
// SYNCHRONOUS CALLBACK
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback){
//     const nama = prompt('Masukkan Nama: ');
//     callback(nama);
// }

// tampilkanPesan(halo);


// bedah kode
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama: ');
//     callback(nama);
// }

// tampilkanPesan(function (nama){
//     alert(`Halo, ${nama}`);
// });
// atau
// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// const mhs = [
//     {
//         "nama": "Sandhika Galih",
//         "nrp": "1234563",
//         "email": "sandhikagalih@unpas.ac.id",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Doddy Ferdiansyah",
//         "nrp": "1234564",
//         "email": "doddy@unpas.ac.id",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Erik",
//         "nrp": "1234565",
//         "email": "erik@unpas.ac.id",
//         "jurusan": "Teknik Industri",
//         "idDosenWali": 2
//     }
// ];
// console.log('mulai');
// mhs.forEach(m => console.log(m.nama));
// console.log('selesai');

// ASYNCHRONOUS CALLBACK
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             }
//             else if(xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// function success(results) {
//     // console.log(JSON.parse(results));
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }

// function error() {

// }


// getDataMahasiswa('data/mahasiswa.json', success, error);

// JQUERY
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        // console.log(mhs)
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
})