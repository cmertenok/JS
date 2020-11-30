'use strict'
const log = (base, n) => Math.log(n) / Math.log(base);
const createlog = base => n => log(base, n);

const lg = createlog(10);
const ln = createlog(Math.E);

function getE(){
    return Math.E;
}
function getPi(){
    return Math.PI;
}
console.log('Log(5) = ' + lg(5));
console.log('ln(10) = ' + ln(5));
console.log('E = ' + getE());
console.log('PI = ' + getPi());