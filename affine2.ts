//setup variables :3
let alphabetLetters:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let key:number[] = [0, 0];
let userInput:any = null;
let selection:unknown | null;
let a:number = Math.floor(Math.random() * 10) + 1;
let b:number = Math.floor(Math.random() * 100) + 1;
let userKey:any = null;
let keyIsValid:boolean = true;
//ax + b % 26, where x is the value of the letter in the input

//function calls
createInput();
getUserInput();

function createInput(){
    userInput = prompt("Enter a string to be encrypted or decrypted (letters only)");
}

function getUserInput(){
    if(isInputValid() == true){
        selection = prompt("Enter 1 for Encryption or 2 for Decryption");
        if(selection == 2){
            userKey = prompt("Enter your decryption key");
            //check to see if key is valid, if it is keep going and if its not then set keyIsValid to false
            if(!((userKey.substring(0, (userKey.indexOf(" "))) >= 1 && userKey.substring(0, (userKey.indexOf(" "))) <= 10) && userKey.substring(userKey.indexOf(" ")) >= 1 && userKey.substring(userKey.indexOf(" ")) <= 100)){
                //if invalid
                console.log("invalid decryption key - restarting...");
                getUserInput();
            } else {
                //if valid
                decrypt();
            }

        } else if(selection == 1){
            encrypt();
        }
    } else {
        console.log("enter a VALID string - restarting...");
        getUserInput();
    }  
}

function isInputValid(): any { 
    for(let i = 0; i < userInput.length; i++){
        if(alphabetLetters.indexOf(userInput[i]) == -1){
            return false;
        }
    }
    return true;
}

function encrypt(){
    //encrypt it lol
    let encryptedInput:string = "";
    for(let i = 0; i < userInput.length; i++){
        //find number for original letter and plug in
        let num:number = (a * (alphabetLetters.indexOf(userInput[i])) + b) % 26;
        //find new letter from alphabet and add to encryptedString
        encryptedInput += alphabetLetters[num];
    }
    console.log("Encrypted String: " + encryptedInput);
    console.log("Encryption Key: " + a + " " + b);
}

function decrypt(){
    //decrypt it lol
}