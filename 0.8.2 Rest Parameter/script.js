// REST PARAMETER

// function myFunc(a, b, ...myArgs) {
//     // return myArgs;
//     return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// }

// function myFunc(){
//     // return arguments;
//     // return Array.from(arguments);
//     return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5))


// function jumlahkan() {
//     let total = 0;
//     for(a of arguments) {
//         total += a;
//     }
//     return total;

// }

// function jumlahkan(...angka) {
//     // let total = 0;
//     // for(const a of angka) {
//     //     total += a;
//     // }
//     // return total;

//     return angka.reduce((a, i) => a + i);

// }

// console.log(jumlahkan(1, 2, 3, 4, 5));


// ARRAY DESTRUCTURING
// const kelompok1 = ['Sandhika', 'Doddy', 'Erik', 'Fajar', 'Hendra'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);



// OBJECT DESTRUCTURING
// const team = {
//     pm: 'Sandhika',
//     frontEnd1: 'Deddy',
//     frontEnd2: 'Erik',
//     backEnd: 'Fajar'    ,
//     ux: 'Hendra',
//     devOps: 'Ferry'
// }


// const {pm, ...myTeam} = team;
// console.log(pm);


// FILTERING
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('number', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));
console.log(filterBy('string', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));