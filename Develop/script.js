// Assignment Code
var generateBtn = document.querySelector("#generate");
var leIn = document.getElementById("length-input");
var upIn = document.getElementById("upper-input");
var loIn = document.getElementById("lower-input");
var spIn = document.getElementById("special-input");
var nuIn = document.getElementById("numeric-input");
var testValue;

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
  var upperC = ['A', 'B', 'C']
  // lowercase characters
  var lowerC = ['a', 'b']
  // special characters
  var specialC = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "]", '^', "_", '`', '{', '|', '}', '~']
  // numeric characters
  var numericC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var arrayBank = []

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
      var concatString = "";



      for (var i = 0; i < testValue; i++){
         
      // console.log(i + " " + arrayBank[(Math.floor(Math.random() * arrayBank.length))])
      concatString = concatString.concat(arrayBank[(Math.floor(Math.random() * arrayBank.length))]  )
      // var temp = temp + something[i]
      

    }
  
    return concatString;
}

// Write password to the #password input
function writePassword() {
debugger;
  var password = generatePassword();
  var passwordTextBox = document.querySelector("#password");
  passwordTextBox = password;
  // console.log(leIn.value + " length")
  // console.log(upIn.checked + " upper")
  // console.log(loIn.checked + " lower")
  // console.log(spIn.checked + " special")
  // console.log(nuIn.checked + " numeric")
  

}

// Runs promtps to get the user started (and satisfy the assignment's acceptance criteria :)  
var firstTime = function () {

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
            testValue = (parseInt(leIn.value));
        }
      }
    }
  }
  while (!validCharactersChosen()) {
    window.alert("Please choose at least one type of character to use.")
    upIn.checked = window.confirm("Would you like uppercase letters used?");
    loIn.checked = window.confirm("Would you like lowercase letters used?");
    spIn.checked = window.confirm("Would you like special characters used?");
    nuIn.checked = window.confirm("Would you like numbers used?");
  }

writePassword()

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

firstTime();




// generateBtn.addEventListener("mouseover", ask);
// function ask(){
//   generateBtn.textContent = "Generate now?"
// 