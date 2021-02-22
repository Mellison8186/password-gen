// Assignment code here

// Declare generatePassword var function
var generatePassword = function() {

  // Declare global variables
  var spCharacters = "!@#$%^&*()?.";
  var lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
  var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var finalPwd = '';

  // Password length function
  var pwdLengthInput = window.prompt('Choose between 8 and 128 for the number of password characters.');
  var pwdLength = function(passLength) {
    if (passLength) {
    if (JSON.parse(passLength) >= 8 && JSON.parse(passLength) <= 128) {
      return true
    }
    else {
      return false
    }
  }
}

// If statements for character prompts
  if (pwdLength(pwdLengthInput)) {
    var spCharacters = window.confirm("Would you like to use special characters?");
    var lowerCharacters = window.confirm("Would you like to use lower case characters?");
    var upperCharacters = window.confirm("Would you like to use upper case characters?");
    var numbers = window.confirm("Would you like to use numbers?");

    // If statement to validate that one character option is chosen
  if (spCharacters === false && lowerCharacters === false && upperCharacters === false && numbers === false) {
   window.alert("Please choose at least one character type.")
  }
  for (var i = 0; i < length; i++) {
    if (spCharacters) {
      finalPwd += generateRandomSymbol();
    }
    if (lowerCharacters) {
      finalPwd += generateRandomLowerCase();
    }
    if (upperCharacters) {
      finalPwd += generateRandomUpperCase();
    }
    if (numbers) {
      finalPwd += generater(0,9);
    }
  }
}
  else {
    generatePassword()
  }
};

generatePassword()

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