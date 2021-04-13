// Tagged Templates
const nama = "Sandhika Galih";
const umur = 33;
const email = 'email.com';


// function coba(strings, nama, umur) {
//     return strings;
//     return nama;
//     return umur;
// }


// function coba(strings, ...values) {
//     return values;
// }

// function coba(strings, ...values) {
//     let result = '';
//     strings.forEach((str, i) => {
//         result += `${str}${values[i] || ''}`;
//     })
//     return result;
// }

// function coba(strings, ...values) {
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Highlight
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="highlight">${values[i] || ''}</span>`, '')
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun dan email saya ${email}.`;
console.log(str);

document.body.innerHTML = str;