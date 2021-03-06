// 1. HTML Fragments
// const mhs = {
//     nama: 'Dicky',
//     umur: 33,
//     nim: '10915012',
//     email: 'dicky@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;

// 2. Looping 
// const mhs = [
//     {
//         nama: 'Sandhika Galih',
//         email: 'sandhikagalih@unpas.ac.id'
//     },
//     {
//         nama: 'Dicky',
//         email: 'dicky@unpas.ac.id'
//     },
//     {
//         nama: 'Udin',
//         email: 'udin@unpas.ac.id'
//     }
// ]

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`


// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     penyanyi: 'Isyana Sarasvati'
//     // judul: 'Kau Adalah',
//     // penyanyi: 'Isyana Sarasvati',
//     // feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`

// 4. Nested
// HTML Fragments Bersarang
const mhs = {
    nama: 'Sandhika',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Objek'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
    ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester: ${mhs.semester}</span>
    <h4>Mata Kuliah: </h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`


document.body.innerHTML = el;