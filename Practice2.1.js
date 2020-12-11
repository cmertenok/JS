'use strict'

/*function key() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  console.log(`${key()}-${key()}-${key()}-${key()}`);
  console.log(`${key()}-${key()}-${key()}-${key()}`);
  console.log(`${key()}-${key()}-${key()}-${key()}`);
  console.log(`${key()}-${key()}-${key()}-${key()}`);
  console.log(`${key()}-${key()}-${key()}-${key()}`);
  console.log(`${key()}-${key()}-${key()}-${key()}`);*/

/*for( let i = 0; i < 10; i++){

  if( i % 2 == 0)continue;
  console.log(i)
}*/
//for(let i = 0; i <= 10; i++){
  //if( i % 2 == 0)
 // console.log(i)
//}
/*let i = 0;
while( i < 3){
  console.log(`Your number is ${i++}`)
}*/

//let n = 10;

number:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue number; 
  }

  console.log( i ); 
}
