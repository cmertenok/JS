'use strict'

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key]=='number') {
            obj[key]*=2;
        }
    }
}

let menu = {
width: 500,
height: 1000,
title: "My menu",
};

multiplyNumeric(menu);

for (let key in menu) {
    console.log(menu[key]);
}