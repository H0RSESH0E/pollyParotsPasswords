// Global variable assignments
var passwordTextBox = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var leIn = document.getElementById("length-input");
var upIn = document.getElementById("upper-input");
var loIn = document.getElementById("lower-input");
var spIn = document.getElementById("special-input");
var nuIn = document.getElementById("numeric-input");
var testValue;
var arrayBank = [];


// MANUAL DATA SET CREATION
// upper case characters
var upperC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// special characters
var specialC = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "]", '^', "_", '`', '{', '|', '}', '~'];
// numeric characters
var numericC = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// AUTOMATED DATA SET CREATION
// lowercase characters
var lowerC = upperC.map(upperC => upperC.toLowerCase());


// FUNCTION Validates the number of characters is within bounds
var validLe = function (){
  testValue = (parseInt(leIn.value));
  if (testValue > 7 && testValue < 129 && Number.isInteger(testValue) && !isNaN(testValue)) {
    return true;
  }
  else {
    return false;
  }
};

// FUNCTION Validates that at least one type of character is selected
var validCharactersChosen = function (){
 if (upIn.checked || loIn.checked || spIn.checked || nuIn.checked){
 return true;
 }
 else {
   return false;
 }
}

// FUNCTION Validates the generated Password contains all required characters
function pwCriteriaCheck(pwToCheck){

  // The "pass" variable will confirm that the password contains at least one of each character type
  var pass = 0;

  // For assembly of the chosen character arrays as an array of arrays
  var superArray = [];

  if (upIn.checked) {
    superArray.push(upperC);
  }
  if (loIn.checked) {
    superArray.push(lowerC);
  }
  if (spIn.checked) {
    superArray.push(specialC);
  }
  if (nuIn.checked) {
    superArray.push(numericC)
  }

  // Three nested loops iterate through the superArray (k), password to check (l), and finally the character type arrays (m)
  for (k = 0; k < superArray.length; k++){
    
    //looping through upto every character in the password
    for (l = 0; l < pwToCheck.length; l++){
      
      // looping through the each character in each array to check for a match
      for (m = 0; m < superArray[k].length; m++){
        
        // For debugging:

        // console.log(
        //   "There are: ", pass," passes", '\n',
        //   "Checking for", pwToCheck.charAt(l), '\n',
        //   "Looking in in the sub array: ", k, '\n',
        //   "Comparing to: ", superArray[k][m], "(character index: ",m);

        if (pwToCheck.charAt(l) === superArray[k][m]){
          pass += 1;
          break;
        }
        else if ( (m + 1) === superArray[k].length && (l + 1) === pwToCheck.length) {
          return false;
        }

      }
      if (pass === (k + 1)){
        break;
      }
      else {

      }
    }

    // For debugging:

    // console.log("Sub array at index: ",k,"passed.  We have a total of ", pass, "passes.")
    // console.log("How many total passes needed = SuperArray.length: ", superArray.length)
    
  }

  if (pass === superArray.length){
      return true;
  }
  else {
    return false;
  }

}

// FUNCTION 
var generatePassword = function(){

  // Ensures that a number is passed as a condition of the for loop
  testValue = (parseInt(leIn.value));

  // Concatenates the desired character arrays into one source
  arrayBank = [];

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
    
  // creates a variable to collect the randomly selected characters
  var concatString = "";

  // assembles random characters from the arrayBank array in the variable concatString
  for (var i = 0; i < testValue; i++){
  concatString = concatString.concat(arrayBank[(Math.floor(Math.random() * arrayBank.length))]  );
  }

  // Validate that the random selection included all desired characters and restarts the generator otherwise
  if (!pwCriteriaCheck(concatString)){
    return generatePassword()
  }
  
  // Returns the validated randomly generated password meeting all criteria
    return concatString;
}

// Calls for the length and character type validation, Writes password to the #password input
function writePassword() {

  // If NOT valid characters are chosen the function ends without calling for password generation or writing
  if (!validCharactersChosen()){
    window.alert("Please choose at least one type of character to use.");
    return;
  }

  // If NOT valid length is chosen the function ends without calling for password generation or writing
  if (!validLe()){
    window.alert("Please choose from 8 to 128 characters in length.");
    return;
  }
  // password is created and calls for a value to be returned from the function generatePassword
  var password = generatePassword();

  // the value of the password variable is passed through the textContent method to the selected element of the document
  passwordTextBox.textContent = password;
}

// Runs promtps to get the user started (and satisfy the assignment's acceptance criteria :)  
var firstTime = function () {

  // Removes the first time response to the click which follows
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

  // Resets checkboxes before confirmation with the user
  upIn.checked = false;
  loIn.checked = false;
  spIn.checked = false;
  nuIn.checked = false;

  // Continues to cycle through critera until at least one is chosen
  while (!validCharactersChosen()) {
    upIn.checked = window.confirm("Would you like uppercase letters used?");
    loIn.checked = window.confirm("Would you like lowercase letters used?");
    spIn.checked = window.confirm("Would you like special characters used?");
    nuIn.checked = window.confirm("Would you like numbers used?");
  }

writePassword();

// Keeps the candle buring.
generateBtn.addEventListener("click", writePassword);
}


// Lights the candle.
generateBtn.addEventListener("click", firstTime);

