// Assignment code here
var generatePassword = function() {

  // Password length function
  var pwdLengthInput = window.prompt('Choose between 8 and 128 for the number of password characters.');
  var pwdLength = function(passLength) {
    if (passLength) {
    if (JSON.parse(passLength) >= 8 && JSON.parse(passLength) <= 128) {
      console.log(passLength)
      return true
    }
    else {
      return false
    }
  }
}
  if (pwdLength(pwdLengthInput)) {
    var spCharacters = window.confirm("Would you like to use special characters?");
      console.log(spCharacters)
    var lowerCharacters = window.confirm("Would you like to use lower case characters?");
      console.log(lowerCharacters)
    var upperCharacters = window.confirm("Would you like to use upper case characters?");
      console.log(upperCharacters)
    var numericCharacters = window.confirm("Would you like to use numeric characters?");
      console.log(numericCharacters)
  }
  else {
    generatePassword()
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword()