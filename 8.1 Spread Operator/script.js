// SPREAD OPERATOR
// MEMECAH ITERABLES MENJADI SINGLE ELEMENT

// const mhs = ['Sandhika', 'Doddy', 'Erik'];
// console.log(...mhs);
// console.log(...mhs[0]);


// MENGGABUNGKAN 2 ARRAY DENGAN NON SPREAD OPERATOR
// const mhs = ['Sandhika', 'Doddy', 'Erik'];
// const dosen = ['Ade', 'Hendra', 'Wanda'];
// const orang = mhs.concat(dosen);
// console.log(orang);


// MENGGABUNGKAN 2 ARRAY DENGAN SPREAD OPERATOR
// const mhs = ['Sandhika', 'Doddy', 'Erik'];
// const dosen = ['Ade', 'Hendra', 'Wanda'];
// const orang = [...mhs, ...dosen];
// const orang = [...mhs, 'Aji', ...dosen];
// console.log(orang);

// MENGCOPY ARRAY (PROBLEM)
// const mhs = ['Sandhika', 'Doddy', 'Erik'];
// const mhs1 = mhs;
// mhs1[0] = 'Fajar';
// console.log(mhs);
// console.log(mhs1);

// MENGCOPY ARRAY DENGAN SPREAD OPERATOR
// const mhs = ['Sandhika', 'Doddy', 'Erik'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs);
// console.log(mhs1);



// const liMhs = document.querySelectorAll('li');
// NODELIST KE ARRAY DENGAN LOOPING
// const mhs = [];
// for(let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }

// NODELIST KE ARRAY DENGAN SPREAD OPERATOR
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);



const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent];
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
console.log(huruf);
nama.innerHTML = huruf;
