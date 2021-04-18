// Cara untuk membuat object pada javascript
// 1. Object Literal
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
    // function Mahasiswa(nama, energi){
    //     this.nama = nama;
    //     this.energi = energi;

    //     this.makan = function(porsi) {
    //         this.energi += porsi;
    //         console.log(`Halo ${this.nama} selamat makan!`);
    //     }
    // }

    // let sandhika = new Mahasiswa("Sandhika", 10);

    function Mahasiswa(nama, energi){
        this.nama = nama;
        this.energi = energi;

        this.makan = function(porsi) {
            this.energi += porsi;
            console.log(`Halo ${this.nama} selamat makan!`);
        }

        this.main = function(main) {
            this.energi -= main;
            console.log(`Halo ${this.nama} selamat bermain!`);
        }
    }
    let sandhika = new Mahasiswa("Sandhika", 10);


// 4. Object.create()
