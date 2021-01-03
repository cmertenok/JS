'use strict';

let user = {
  name: "Artem",
  age: 17,
  isStudent: true,
};

for (let key in user) {
  
  console.log(key);  
  console.log(user[key]);
}