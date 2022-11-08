let a = [];
let n = 100;
let m = -5;
let count = 70;

for ( let i = m; i < count; ++i ) {
    a.push( Math.round(Math.random() * n) );
}

console.log(a)