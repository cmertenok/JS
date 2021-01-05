'use strict';

let calculator = {
    sum() {
      return (this.a + this.b + this.c);
    },
  
    mul() {
      return (this.a * this.b * this.c);
    },

    delUp() {
        return Math.ceil(this.a / this.b / this.c);
    },

    pow() {
      return ( this.a ** this.b);
    },

    read() {
      this.a = +prompt('A?', 0);
      this.b = +prompt('B?', 0);
      this.c = +prompt('C?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
  alert( calculator.delUp() );
  alert( calculator.pow() );