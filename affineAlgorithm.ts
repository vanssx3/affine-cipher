//setup variables :3
let alphabetLetters:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numLetters:number = 26;
let key:number[] = [0, 0];
let userInput:string | null = prompt("Enter a string to be encrypted or decrypted (letters only)").toLowerCase();
let selection:number | null = prompt("Enter 1 for Encryption or 2 for Decryption");

let keyDigit1:number = Math.random() * 8 + 2;
let keyDigit2:number = Math.random() * 99 + 1;
//ax+b, where x is the value of the letter in the input

function keyGen(){
    //create encryption key with generated values
}

function input(){
    switch(selection){
        case 1: {
            console.log("Encryption Starting...");
            break;
        }
        case 2: {
            console.log("Decryption Starting...");
            break;
        }
        default: { 
            console.log("Input a proper number - Aborting..."); 
            break; 
        }
    }
}

function encrypt(){
    //A
}
