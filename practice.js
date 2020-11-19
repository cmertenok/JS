'use strict';
let counter = 1;
const interval = setInterval(function(){
    if (counter === 11){
        clearInterval(interval);
    } else{
        console.log(counter++);
    }

} ,1000);


