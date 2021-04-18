// template literal

// `string text`

// `string text baris 1     //multi-line string
// string text baris 2
// string text baris 3`

// `string text ${expression} string text` //embedded expression

// tag `string text ${expression} string text`      //tagged template

// Template Literals/ Template String
// const nama = 'Sandhika';
// const umur = 33;
// console.log(`Halo nama saya ${nama}, dan saya ${umur} tahun`);

// Embedded Expressions
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragments
const mhs = {
    nama: 'Dicky',
    umur: 23,
    nrp: '10915012',
    email: 'dicky@gmail.com'
};
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);

document.body.innerHTML = el;