// const add = (x, y) => x + y;
// const division = (n1, n2) => n1 / n2;

// const math = (a, b, callback) => {
//     console.log(callback(a, b))

// };

// math(164, 7, division);
// math(6, 4, add);

// setTimeout( () => console.log("Hello There"), 2000)
// console.log("ABC!");

const fs = require('fs');

fs.readFile('./text.txt', 'utf-8', (err, file) => console.log(file));
console.log("EO")