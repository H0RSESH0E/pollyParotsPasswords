// Assignment Code
var generateBtn = document.querySelector("#generate");
var leIn = document.querySelector("#length-input");
var upIn = document.querySelector("#upper-input");
var loIn = document.querySelector("#lower-input");
var spIn = document.querySelector("#special-input");
var nuIn = document.querySelector("#numeric-input");

var generatePassword = function(length, upper, lower, special, numeric){
  return "SUPER COMPLEX PASSWORD"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(leIn.checked,upIn.checked,loIn.checked,spIn.checked,nuIn.checked);
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





// generateBtn.addEventListener("mouseover", ask);
// function ask(){
//   generateBtn.textContent = "Generate now?"
// }