'use strict';

let user = { age: 17};
let admin = { age: 27};

function sayHello(){
    console.log( this.age );
}

user.fun = sayHello;
admin.fun = sayHello;

user.fun();
admin.fun();
