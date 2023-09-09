let cipher:string | null = prompt("encryption or decryption?");
switch(cipher) { 
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