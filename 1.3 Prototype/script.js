// Cara untuk membuat object pada javascript
// 1. Object Literal
// PROBLEM: tidak efektif untuk objek yang banyak
    // let mahasiswa1 = {
    //     nama: "Sandhika",
    //     energi: 10,
    //     makan: function(porsi){
    //         this.energi += porsi;
    //         console.log(`Halo ${this.nama} selamat makan!`);
    //     }
    // };

    // let mahasiswa2 = {
    //     nama: "Doddy",
    //     energi: 20,
    //     makan: function(porsi){
    //         this.energi += porsi;
    //         console.log(`Halo ${this.nama} selamat makan!`);
    //     }
    // };


// 2. Function Declaration
// PROBLEM: method tetap disimpan di memory
    // function Mahasiswa(nama, energi){
    //     let mahasiswa = {};
    //     mahasiswa.nama = nama;
    //     mahasiswa.energi = energi;

    //     mahasiswa.makan = function(porsi) {
    //         this.energi += porsi;
    //         console.log(`Halo ${this.nama} selamat makan!`);
    //     }

    //     mahasiswa.main = function(main){
    //         this.energi -= main;
    //         console.log(`Halo ${this.nama} selamat bermain!`);
    //     }

    //     return mahasiswa;
    // }

    // let sandhika = Mahasiswa("Sandhika", 10);
    // let doddy = Mahasiswa("Doddy", 20);

    

// 3. Constructor Function
// 
    // function Mahasiswa(nama, energi){
    //     this.nama = nama;
    //     this.energi = energi;

    //     this.makan = function(porsi) {
    //         this.energi += porsi;
    //         console.log(`Halo ${this.nama} selamat makan!`);
    //     }
    // }

    // let sandhika = new Mahasiswa("Sandhika", 10);

    // function Mahasiswa(nama, energi){
    //     this.nama = nama;
    //     this.energi = energi;

    //     this.makan = function(porsi) {
    //         this.energi += porsi;
    //         console.log(`Halo ${this.nama} selamat makan!`);
    //     }

    //     this.main = function(main) {
    //         this.energi -= main;
    //         console.log(`Halo ${this.nama} selamat bermain!`);
    //     }
    // }
    // let sandhika = new Mahasiswa("Sandhika", 10);


// 4. Object.create()
// 4.1 non Object.create()
// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama} selamat makan!`);
//     },
//     main : function(main){
//         this.energi -= main;
//         console.log(`Halo ${this.nama} selamat bermain!`);
//     },
//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama} selamat tidur!`);
//     }
// }

// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
//     mahasiswa.tidur = methodMahasiswa.tidur;

//     return mahasiswa;
// }

// let sandhika = Mahasiswa("Sandhika", 10);
// let doddy = Mahasiswa("Doddy", 20);

// 4.2 with Object.create()
// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama} selamat makan!`);
//     },
//     main : function(main){
//         this.energi -= main;
//         console.log(`Halo ${this.nama} selamat bermain!`);
//     },
//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama} selamat tidur!`);
//     }
// }

// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let sandhika = Mahasiswa("Sandhika", 10);
// let doddy = Mahasiswa("Doddy", 20);


// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama} selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama} selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama} selamat tidur!`;
// }

class Mahasiswa {

    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama} selamat makan!`;
    }
    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama} selamat bermain!`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama} selamat tidur!`;
    }
}


let sandhika = new Mahasiswa("Sandhika", 10);