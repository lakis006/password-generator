// Assignment Code
var generateBtn = document.querySelector("#generate");


//randMaker will take two paramiters ( a , b ) => 
const randMaker = (a ,b) => { return Math.floor((Math.random() * b)  + a);} 


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
      password = generatePassword(numbers, upperCase, lowerCase, specialCharacters, length);
    } else {
      alert("You need at least 1 acceptable criteria");
    }


 
  var passwordText = document.querySelector("#password");

  // This gets printed out on the html
  passwordText.value = password;

  console.log(password.length);
}


// arguements can be integers(number) text, functions, variables etc..



function generatePassword(numbers, upperCase, lowerCase, specialCharacters, length) {

var spChr = "!@#$%^&*()_-=+~`|}{][\/?<>;:.,'" + '"';
var upCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lcase = "qwertyuiopasdfghjklzxcvbnm";
var num = "1234567890";
//code
  console.log(numbers);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(specialCharacters);
  console.log(length);
  var x = randMaker(0,spChr.length);
  console.log(x);
  console.log(spChr[x]);


 


  var theBox = "";
 for (var i = 0; i < length;) {
   if (numbers && i < length) {
    theBox += num[randMaker(0,10)];
    i++; 
   }

   if (upperCase && i < length ) {
    theBox += upCase[randMaker(0, upCase.length)];
    i++;
   }

   if (specialCharacters && i < length) {
    theBox += spChr[randMaker(0, spChr.length)];
    i++; 
   }

   if (lowerCase && i < length ) {
    theBox += lcase[randMaker(0, lcase.length)];
    i++; 
   }
 }

 return theBox;
 
 
};
  




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
