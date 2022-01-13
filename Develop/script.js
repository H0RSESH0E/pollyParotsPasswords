// Assignment Code
var generateBtn = document.querySelector("#generate");
var leIn = document.getElementById("length-input");
var upIn = document.getElementById("upper-input");
var loIn = document.getElementById("lower-input");
var spIn = document.getElementById("special-input");
var nuIn = document.getElementById("numeric-input");
var testValue;
var counter = 0;
// upper case characters
var upperC = ['A', 'B', 'C'];
// lowercase characters
var lowerC = ['a', 'b'];
// special characters
var specialC = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "]", '^', "_", '`', '{', '|', '}', '~'];
// numeric characters
var numericC = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// array to store selected characters
var arrayBank = [];



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



// Validates Password contains all required characters

function pwCriteriaCheck(pwTooCheck){

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

  console.log(superArray)

  var pass = 0;

  console.log("Here is the POTENTIAL PASSWORD -------------------------------------------")
  for (var i = 0; i < pwTooCheck.length; i++) {
    console.info(pwTooCheck[i]);
  }


  // Looping for as many criteria arrays as there are
  for (k = 0; k < superArray.length; k++){
    console.log("k-loop: ", k);
  

    //looping through upto every character in the password
    for (l = 0; l < pwTooCheck.length; l++){
      console.log("Pword character number: ", l, "in the: ",k, " array of the super array.");
      console.log("Looking for a: ---------- ", pwTooCheck[l]," ----------");

      // looping through the each character in each array to check for a match
      for (m = 0; m < superArray[k].length; m++){
        console.log("Sub-array character at index: ", m, " in the: ",k, " array of the super array.");

        console.log(
          "There are: ", pass," passes", '\n',
          "Checking for", pwTooCheck.charAt(l), '\n',
          "Looking in in the sub array: ", k, '\n',
          "Comparing to: ", superArray[k][m], "(character index: ",m);

        if (pwTooCheck.charAt(l) === superArray[k][m]){
          console.log(" ---------- PASS BEING ADDED ----------  m loop being broken");
          pass += 1;
          break;
        }
        else if ( (m + 1) === superArray[k].length && (l + 1) === pwTooCheck.length) {
          console.log("m+1 equalled the sub arrays lenght. ", m + 1, " = ", superArray[k].length);
          return false;
        }

      }
      if (pass === (k + 1)){
        break;
      }
      else {

      }
    }
    console.log("Sub array at index: ",k,"passed.  We have a total of ", pass, "passes.")
    console.log("How many total passes needed = SuperArray.length: ", superArray.length)
    
  }
  if (pass === superArray.length){
    console.log("returning TRUE")
    return true;
  }
  else {
    console.log("returning FALSE")
    debugger;
    return false;
  }


  // if (pass == superArray.length){
  //   return true;
  // }
  // console.log(pass, " is the number of passes")
  // debugger;
    

}



// for (i = 0; i < pwTooCheck.length; i++){

//   console.log(pwTooCheck.length, "pwTooCheck length");
//   console.log(pwTooCheck.charAt(i));

//   for (j = 0; j < upperC.length; j++){
//     console.log(i, " i ", j, " j ")
//     console.log(upperC.length, "upperC length")
//     console.log(upperC[j], "upperC character to check")

//     if (pwTooCheck.charAt(i) == upperC[j]){
//       console.log("Found upperC: ", upperC[j])
//       break;
//     }
//     else if (upperC.length === j) {
//       return false;
//     }

//   }

//   for (j = 0; j < lowerC.length; j++){

//     console.log(i, " i ", j, " j ")
//     console.log(lowerC.length, "lowerC length")
//     console.log(lowerC[j], "lowerC character to check")


//     if (pwTooCheck.charAt(i) == lowerC[j]){
//       console.log("Found lowerC: ", lowerC[j])
//       break;
//     }
//     else if (lowerC.length === j) {
//       return false;
//     }

//   }

//   for (j = 0; j < specialC.length; j++){

//     console.log(i, " i ", j, " j ")
//     console.log(specialC.length, "specialC length")
//     console.log(specialC[j], "specialC character to check")


//     if (pwTooCheck.charAt(i) == specialC[j]){
//       console.log("Found specialC: ", specialC[j])
//       break;
//     }
//     else if (specialC.length === j) {
//       return false;
//     }

//   }

//   for (j = 0; j < numericC.length; j++){

//     console.log(i, " i ", j, " j ")
//     console.log(numericC.length, "numericC length")
//     console.log(numericC[j], "numericC character to check")

//     if (pwTooCheck.charAt(i) == numericC[j]){
//       console.log("Found numericC: ", numericC[j])
//       break;
//     }
//     else if (numericC.length === j) {
//       return false;
//     }

//   }

// }
// }



var generatePassword = function(){

  testValue = (parseInt(leIn.value));
  arrayBank = [];
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
  // debugger;
  for (var i = 0; i < testValue; i++){
  concatString = concatString.concat(arrayBank[(Math.floor(Math.random() * arrayBank.length))]  );
  }

  // Validate random selection included all desired characters
  if (!pwCriteriaCheck(concatString)){
    return generatePassword()
  }
  
  
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

