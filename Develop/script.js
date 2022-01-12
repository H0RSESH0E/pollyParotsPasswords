// Assignment Code
var generateBtn = document.querySelector("#generate");
var leIn = document.getElementById("length-input");
var upIn = document.getElementById("upper-input");
var loIn = document.getElementById("lower-input");
var spIn = document.getElementById("special-input");
var nuIn = document.getElementById("numeric-input");



var validLe = function (){
  var testValue = (parseInt(leIn.value,0));
  console.log(testValue)
  if (testValue > 7 && testValue < 129 && Number.isInteger(testValue) && !isNaN(testValue)) {
    return true;
  }
  else {
    return false;
  }
  
};

var validCharactersChosen = function (){

}


var firstTime = function () {

  // this function will prompt for responses the first time the generator is run
    leIn.value = window.prompt("Please choose a length for your password between 8 and 128 characters.");
    if (!validLe()){
        leIn.value = window.prompt("Please enter an integer between 8 and 128 characters for your password.");
        if (!validLe()){
          leIn.value = window.prompt("8 and 128 characters is an ideal length.  Trust in the singularity.");
          if (!validLe()){
            leIn.value = window.prompt("Your safety is our first priority. Choose any number between 8 and 128 inclusively.");
            if (!validLe()){
            window.alert("PEBKAC - Be well human.");
            leIn.value = Math.floor(Math.random() * (128 - 8 + 1) + 8);
            
        }
      }
    }
  }
    upIn.checked = window.confirm("Would you like uppercase letters used?");
    loIn.checked = window.confirm("Would you like lowercase letters used?");
    spIn.checked = window.confirm("Would you like special characters used?");
    nuIn.checked = window.confirm("Would you like numbers used?");

  
};

var validateCriteria = function() {
  // check to see number exists
  // check to see value is acceptable
    // select random number for the length if not selected

  // check that a character type is selected
    // give smart ass responses

  // return a bollean to break the password generate function
}


var generatePassword = function(){

  
  return "SUPER COMPLEX PASSWORD"
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordEl = document.querySelector("#password");
  
  console.log(leIn.value + " length")
  console.log(upIn.checked + " upper")
  console.log(loIn.checked + " lower")
  console.log(spIn.checked + " special")
  console.log(nuIn.checked + " numeric")
  
  
  passwordEl.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

firstTime();



// generateBtn.addEventListener("mouseover", ask);
// function ask(){
//   generateBtn.textContent = "Generate now?"
// 