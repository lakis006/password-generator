// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

var password = "";

  var length = prompt("How many characters would you like?"); 
    if (length >= 8 && length <= 128) {
      var specialCharacters = confirm("Would you like special characters?");
      var numbers = confirm("Would you like any numbers?");
      var upperCase = confirm("Would you like any uppercase letters?");
      var lowerCase = confirm("Would you like any lowercase letters?");
    } else {
      alert("Please select between 8 and 128");
    }
  

  // These lines (23 & 24) are checking if at least 1 characteristic is true
    var acceptable = (numbers || upperCase || lowerCase || specialCharacters );
    if (acceptable) {
       password = generatePassword();
    } else {
      alert("You need at least 1 acceptable criteria");
    }

 
  var passwordText = document.querySelector("#password");

  // This gets printed out on the html
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
