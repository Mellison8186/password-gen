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
    var spCharactersInput = window.confirm("Would you like to use special characters?");
    if (spCharactersInput) {
      console.log(passLength)
      return true
    }
    else {
      return false
    }
    var lowerCharactersInput = window.confirm("Would you like to use lower case characters?");
    var upperCharactersInput = window.confirm("Would you like to use upper case characters?");
    var numericCharactersInput = window.confirm("Would you like to use numeric characters?");
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