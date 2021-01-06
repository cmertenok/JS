'use strict';

let user = {
    name: "Вася"
  };
  
  let id = Symbol("id");
  
  user[id] = 1;
  
  console.log( user[id] ); // мы можем получить доступ к данным по ключу-символу