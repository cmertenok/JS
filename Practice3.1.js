'use strict';

function isPalidrome(str){
    let strLen = str.length;
    let result = '';
    for(let i = 0; i < strLen; i++){
        if(str[i] === str[strLen - 1 - i]){
            result = 'Yes';
        } else {
            result = 'No';
        }
    }
    return result;
}

let test1 = isPalidrome('abcdedcba');
let test2 = isPalidrome('abcded');

console.log(`Result: \n1)${test1} \n2)${test2}`)
