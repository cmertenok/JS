'use strict';

let browser;

if(browser == 'Edge'){
    console.log( "You've got the Edge!" );
}

else if(browser == 'Chrome'){
    console.log( 'Okay we support these browsers too' );
}

else if(browser == 'Firefox'){
    console.log( 'Okay we support these browsers too' );
}

else if(browser == 'Safari'){
    console.log( 'Okay we support these browsers too' );
}

else if(browser == 'Opera'){
    console.log( 'Okay we support these browsers too' );
}

else console.log('We hope that this page looks ok!');

//---------------------------------------------------------------

const number = +prompt('Введите число между 0 и 3', '');

switch(number){
  case 0: 
  console.log(0);
  break;

  case 1:
  console.log(1);
  break;

  case 2:
  case 3:
  console.log('Вы ввели число 2, а может и 3');

}

  
  