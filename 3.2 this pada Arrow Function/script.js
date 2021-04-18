// Konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function() {
//     this.nama = 'Sandhika';
//     this.umur = 33;
//     this.sayHello = function () {
//         return `Halo ${this.nama}, dan saya ${this.umur} tahun`;
//     }
// }

// const sandhika = new Mahasiswa();


// Arrow Function
// const Mahasiswa = function() {
//     this.nama = 'Sandhika';
//     this.umur = 33;
//     this.sayHello = () => {
//         return `Halo ${this.nama}, dan saya ${this.umur} tahun`;
//     }
// }

// const sandhika = new Mahasiswa();

// object literal / arrow function salah
// const mhs1 = {
//     nama: "Sandhika",
//     umur: 33,
//     sayHello: () => {
//         return `Halo ${this.nama}, dan saya ${this.umur} tahun`;
//         // return this;
//     }
// }

// const Mahasiswa = function() {
//     this.nama = 'Sandhika';
//     this.umur = 33;
//     this.sayHello = () => {
//         return `Halo ${this.nama}, dan saya ${this.umur} tahun`;
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);

// }
// const sandhika = new Mahasiswa();

// diakalin
// const box = document.querySelector('.box');
// box.addEventListener('click', function() {
//     let that = this;
//     this.classList.toggle('size');

//     setTimeout(function() {
//         that.classList.toggle('caption');
//     }, 600);
// })


// const box = document.querySelector('.box');
// box.addEventListener('click', function() {
//     this.classList.toggle('size');
    
//     setTimeout(() => {
//         this.classList.toggle('caption');
//     }, 600);
// })


const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)) {
        // satu = temp;
        // satu = dua;
        // dua = temp;
        [satu, dua] = [dua, satu];

    }

    this.classList.toggle('size');
    
    setTimeout(() => {
        this.classList.toggle('caption');
    }, 600);
})
