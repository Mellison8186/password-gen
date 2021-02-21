// Assignment code here
var spCharacters = "!@#$%^&*()?.";
var lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerals = "1234567890";
finalPwd = ''

var generatePassword = function() {

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
// The pwdLength function 
  if (pwdLength(pwdLengthInput)) {
    var spCharacters = window.confirm("Would you like to use special characters?");
    if (spCharacters === true) {
      finalPwd += spCharacters
    }
    var lowerCharacters = window.confirm("Would you like to use lower case characters?");
    if (lowerCharacters === true) {
      finalPwd += lowerCharacters
    }
    var upperCharacters = window.confirm("Would you like to use upper case characters?");
    if (upperCharacters === true) {
      finalPwd += upperCharacters
    }
    var numerals = window.confirm("Would you like to use numbers?");
    if (numerals === true) {
      finalPwd += numerals
    }
  if (spCharacters === false && lowerCharacters === false && upperCharacters === false && numerals === false) {
   console.log(window.alert("Please choose at least one character type."))
  }
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

//result.innerText = 

generatePassword()