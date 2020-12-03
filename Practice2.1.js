'use strict'

function key() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  console.log(`1) ${key()}-${key()}-${key()}-${key()}`);
  console.log(`2) ${key()}-${key()}-${key()}-${key()}`);
  console.log(`3) ${key()}-${key()}-${key()}-${key()}`);
  console.log(`4) ${key()}-${key()}-${key()}-${key()}`);
  console.log(`5) ${key()}-${key()}-${key()}-${key()}`);