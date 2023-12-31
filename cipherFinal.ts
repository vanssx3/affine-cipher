//setup variables :3
let alphabetLetters:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-"];
let key:number[] = [0, 0];
let userInput:any = null;
let selection:unknown | null;
let a:number = Math.floor(Math.random() * 37);
let b:number = (Math.floor(Math.random() * 35) + 1);
let userKey:any = null;
//ax + b % m, where x is the value of the letter in the input and m is the length of the alphabet

//function calls
getUserInput();

//prompt user for string
function createInput(){
    userInput = prompt("Enter a string to be encrypted or decrypted (numbers, letters, and \"-\" are acceptable)");
    userInput = userInput.toLowerCase();
}

//ask user to encrypt or decrypt, checks key validity
function getUserInput(){
    createInput();
    if(isInputValid() == true){
        selection = prompt("Enter 1 for encryption or 2 for decryption");
        if(selection == 2){
            userKey = prompt("Enter the given encryption key for your string");
            if(!((userKey.substring(0, (userKey.indexOf(" "))) >= 1 && userKey.substring(0, (userKey.indexOf(" "))) <= (36)) && userKey.substring(userKey.indexOf(" ") + 1) >= 1 && userKey.substring(userKey.indexOf(" ") + 1) <= (36))){
                //if invalid
                console.log("invalid encryption key - restarting...");
                setTimeout(() => {getUserInput()}, 500);
            } else {
                //if valid
                decrypt();
            }

        } else if(selection == 1){
            encrypt();
        }
    } else {
        console.log("enter a VALID string - restarting...");
        setTimeout(() => {getUserInput()}, 500);
    }  
}

//checks if input is valid
function isInputValid(): any { 
    for(let i = 0; i < userInput.length; i++){
        if(alphabetLetters.indexOf(userInput[i]) == -1){
            if(userInput[i] != " "){
                return false;
            }
        }
    }
    return true;
}

//encrypts the input
function encrypt(){
    let encryptedInput:string = "";
    for(let i = 0; i < userInput.length; i++){
        if(userInput[i] == " "){
            encryptedInput += userInput[i];
        } else {
            let num:number = (a * (alphabetLetters.indexOf(userInput[i])) + b) % 37;
            encryptedInput += alphabetLetters[num];
        }
    }
    console.log("Original Input: " + userInput);
    console.log("Encrypted String: " + encryptedInput);
    console.log("Encryption Key: " + a + " " + b);
}

//decrypts the input
function decrypt(){
    let decryptedInput:string = "";
    let aInverse:number = 0;
    let aInput:number = userKey.substring(0, (userKey.indexOf(" ")));
    let bInput:number = userKey.substring((userKey.indexOf(" ") + 1));

    for (let i = 0; i < 37; i++){
        if ((aInput * i) % 37 == 1){
            aInverse = i;
        }
    }

    let bPrime:number = ((37 - bInput) * aInverse) % 37;

    console.log("Decryption Key: " + aInverse + " " + bPrime);

    for(let i = 0; i < userInput.length; i++){
        if(userInput[i] == " "){
            decryptedInput += userInput[i];
        } else {
            let temp = alphabetLetters.indexOf(userInput[i]);
            temp *= aInverse;
            temp += bPrime;
            temp %= 37;
            decryptedInput += alphabetLetters[temp];
        }
    }
    console.log("Original String: " + userInput);
    console.log("Decrypted String: " + decryptedInput);
}
