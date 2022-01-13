// Assignment Code
var generateBtn = document.querySelector("#generate");
var leIn = document.getElementById("length-input");
var upIn = document.getElementById("upper-input");
var loIn = document.getElementById("lower-input");
var spIn = document.getElementById("special-input");
var nuIn = document.getElementById("numeric-input");
var testValue;
var counter = 0;

// Validates the number of characters
var validLe = function (){
  testValue = (parseInt(leIn.value));
  console.log(testValue)
  if (testValue > 7 && testValue < 129 && Number.isInteger(testValue) && !isNaN(testValue)) {
    return true;
  }
  else {
    return false;
  }
};

// Validates that at least one type of character is selected
var validCharactersChosen = function (){
 if (upIn.checked || loIn.checked || spIn.checked || nuIn.checked){
 console.log("at least one character type was selected")
 return true;
 }
 else {
   return false;
 }
}


var generatePassword = function(){
  // upper case characters
  var upperC = ['A', 'B', 'C'];
  // lowercase characters
  var lowerC = ['a', 'b'];
  // special characters
  var specialC = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "]", '^', "_", '`', '{', '|', '}', '~'];
  // numeric characters
  var numericC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // array to store selected characters
  var arrayBank = [];
  testValue = (parseInt(leIn.value));
  console.log(arrayBank);

  if (upIn.checked) {
    arrayBank = arrayBank.concat(upperC);
  }
  if (loIn.checked) {
    arrayBank = arrayBank.concat(lowerC);
  }
  if (spIn.checked) {
    arrayBank = arrayBank.concat(specialC);
  }
  if (nuIn.checked) {
    arrayBank = arrayBank.concat(numericC)
  }
    

  console.log(arrayBank)
  // resets the variable for the next pasword generation
  var concatString = "";

  // assembles the random password from the super array
  debugger;
  for (var i = 0; i < testValue; i++){
  concatString = concatString.concat(arrayBank[(Math.floor(Math.random() * arrayBank.length))]  );
  }

  // Validate random selection included all desired characters
  var arrayedArrays = [];

  if (upIn.checked) {
    arrayedArrays = arrayedArrays.push(upperC);
  }
  // if (spIn.checked) {
  //   arrayedArrays = arrayedArrays.push(specialC);
  // }
  // if (nuIn.checked) {
  //   arrayedArrays = arrayedArrays.push(numericC)
  // }






  // if (loIn.checked) {
  //   arrayedArrays = arrayedArrays.push(lowerC);
  // }

 
 


  for (var i = 0; i < arrayedArrays.length; i++) {
    console.log(i);
  for (var j = 0; j < arrayedArrays[i].length; j++) {
    console.log(j);
      if (concatString.includes(arrayedArrays[i][j])) {
        console.log("character found");
        break;
      }
    
      else {
      console.log("character missing");
      generatePassword();    
      } 
    }
  }
  
    // search the string for any character from the arrays that were chosen
    


    // passes the assembled password back to the password varible within the writePassword function
    return concatString;
}

// Write password to the #password input
function writePassword() {
  if (!validCharactersChosen()){
    window.alert("Please choose at least one type of character to use.");
    return;
  }
  if (!validLe()){
    window.alert("Please choose from 8 to 128 characters in length.");
    return;
  }
  var password = generatePassword();
  var passwordTextBox = document.querySelector("#password");
  passwordTextBox.textContent = password;
}

// Runs promtps to get the user started (and satisfy the assignment's acceptance criteria :)  
var firstTime = function () {

  generateBtn.removeEventListener("click", firstTime);

    leIn.value = window.prompt("Please choose a length for your password between 8 and 128 characters inclusively.");
    if (!validLe()){
        leIn.value = window.prompt("Choose a number from 8 to 128 to determine the length of the password.");
        if (!validLe()){
          leIn.value = window.prompt("8 and 128 characters is an ideal length.  Trust in the singularity.");
          if (!validLe()){
            leIn.value = window.prompt("Your safety is our first priority. Choose any number between 8 and 128 inclusively.");
            if (!validLe()){
            window.alert("Allow me to help.");
            leIn.value = Math.floor(Math.random() * (128 - 8 + 1) + 8);
            testValue = (parseInt(leIn.value));
        }
      }
    }
  }
  upIn.checked = false;
    loIn.checked = false;
    spIn.checked = false;
    nuIn.checked = false;
  while (!validCharactersChosen()) {
    // window.alert("Please choose at least one type of character to use.")
    upIn.checked = window.confirm("Would you like uppercase letters used?");
    loIn.checked = window.confirm("Would you like lowercase letters used?");
    spIn.checked = window.confirm("Would you like special characters used?");
    nuIn.checked = window.confirm("Would you like numbers used?");
  }

writePassword()
generateBtn.addEventListener("click", writePassword);
}

var strong = "123abc"

console.log(strong[2]);

generateBtn.addEventListener("click", firstTime);

