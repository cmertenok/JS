'use strict';

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] *= 2;
        }
        if(typeof obj[key] === 'string'){
            obj[key] += ' - It is string!';
        }
    }
}

let menu = {
    width: 400,
    height: 600,
    title: "My menu",
  };

  multiplyNumeric(menu);

 for(let key in menu){
     console.log(menu[key]);
 }

