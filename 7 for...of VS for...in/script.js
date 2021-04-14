// LOOPING BARU
// for...of
// ARRAY
// const mhs = ['Sandhika', 'Doddy', 'Erik'];

// for(let i = 0; i < mhs.length; i++){
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));
// mhs.forEach((m,i) => {
//     console.log(`${m} adalah mahasiswa ke- ${i + 1}`);
// });

// for(const m of mhs){
//     console.log(m);
// }
// for(const m of mhs.entries()){
//     console.log(m);
// }
// for(const [i, m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke- ${i + 1}`);
// }



// STRING
// const nama = 'Sandhika';
// for(const n of nama) {
//     console.log(n);
// }




// NODELIST
// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);

// liNama.forEach(n => console.log(n.innerHTML));
// for(n of liNama){
//     console.log(n.innerHTML);
// }




// ARGUMENTS
// function jumlahkanAngka() {
//     // console.log(arguments);
//     let jumlah = 0;
//     for (a of arguments){
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for...in
const mhs = {
    nama: 'Sandhika',
    umur: 33,
    email: 'sandhikagalih@unpas.ac.id'
}

for(m in mhs) {
    console.log(m)
}


for(m in mhs) {
    console.log(mhs[m])
}