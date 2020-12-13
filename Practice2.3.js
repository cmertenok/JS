'use strict'

let user = {

  name: 'John',
  surname: 'Smith',

};

user.name = 'Peter';
user.surname = 'Kennedy';
delete user.name;
console.log(user);
