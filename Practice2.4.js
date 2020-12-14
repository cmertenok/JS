'use strict'

function makeUser() {
    return {
      name: "Jhon",
      ref() {
        return this;
      }
    };
  };
  
  let user = makeUser();
  
  console.log( user.ref().name );