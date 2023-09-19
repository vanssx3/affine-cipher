//setup variables :3
let alphabetLetters:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numLetters:number = 26;
let key:number[] = [0, 0];
let userInput:any| null;
let selection:unknown | null;
let keyDigit1:number = Math.floor(Math.random() * 10) + 1;
let keyDigit2:number = Math.floor(Math.random() * 100) + 1;
let userKey:any = null;
let keyIsValid:boolean = true;
//Fx + S, where x is the value of the letter in the input



function getUserInput(){
    userInput = prompt("Enter a string to be encrypted or decrypted (letters only)");
    if (isInputValid() == true){
        
    }

    selection = prompt("Enter 1 for Encryption or 2 for Decryption");
    if(selection == 2){
        userKey = prompt("Enter your decryption key");
        //check to see if key is valid, if it is keep going and if its not then set keyIsValid to false
        if(!((userKey.substring(0, (userKey.indexOf(" "))) >= 1 && userKey.substring(0, (userKey.indexOf(" "))) <= 10) && userKey.substring(userKey.indexOf(" ")) >= 1 && userKey.substring(userKey.indexOf(" ")) <= 100)){
            //if invalid
        }
        //if valid
    }
    keyGen();
    input();
    

}

function keyGen(){
    //create encryption key with generated values
    switch(selection){
        case 1:{
            key[1] = keyDigit1;
            key[2] = keyDigit2;
            keyIsValid = true;
            break;
        }
        case 2:{
            key[1] = userKey[0];
            key[2] = userKey.substr(1, 2);
            //check to see if key is valid, if it is set keyIsValid to true and if its not then set keyIsValid to false
            break;
        }
        default:{
            console.log("Invalid selection - no key made");
            break;
        }
    }
    
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
            console.log("Invalid selection - Aborting..."); 
            break; 
        }
    }
}

function isInputValid(): any { 
    let numValid:number = 0;
    for (let i in userInput.length){ //Gets the string length
        for (let j in alphabetLetters){ //Gets each letter
            if(j == userInput[i]){         //replace null with the letter of the string
                numValid++;
            }
        }
    if(numValid != userInput.length){
        return false;
    }
    if(numValid == userInput.length){
        return true;
    }
    }
}


function encrypt(){
    //encrypt it lol
}
