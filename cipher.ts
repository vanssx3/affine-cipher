let meow:string | null = prompt("encryption or decryption?");
let input:string | null = prompt("what would you like to " + meow + "?");
let a:int = Math.random() * 8 + 2;
let b:int = Math.random() * 99 + 1
let key:string = "figure out later :3"; //algorithm for genning key

switch(meow) { 
    case "encryption": { 
       //encrypts input; 
       break; 
    } 
    case "decryption": { 
       //decrypts input; 
       break; 
    } 
    default: { 
       console.log("error: empty return"); 
       break; 
    } 
 } 