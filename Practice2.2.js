'use strict'

/*let a = 2 + 2;

  switch(a){

    case 3:
      console.log('You are wrong!');
      break;

    case 4:
      console.log('You are right!'); 
      break;

    case 1:  
    case 2:  
    case 3:
    case 5:
      console.log('You are wrong!');
      break;

     default:
       console.log('There are no right answers!')    
  }*/
  
  switch (browser) {
    case 'Edge':
      console.log( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      console.log( 'Okay we support these browsers too' );
      break;
  
    default:
      console.log( 'We hope that this page looks ok!' );
  }