//Declaration of all variables for characters in password//
var lowerChar = "abdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar ="0123456789";
var specialChar ="!@#$%^&*(){}[]<>?|\|";
var userSelection ="";
var finalPassword ="";


// Variable for Generate function //
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  var userSelection="";

  //Criteria for password length//

  passwordLength = prompt("Please choose length of your password between 8 and 128 characters.");
  if (!passwordLength) {
    alert("Please add a value!")
    return generatePassword();
  } else if (passwordLength < 8) {
    alert("Password must be at least 8 characters")
    return generatePassword();
  } else if (passwordLength > 128) {
    alert ("Password may not be more than 128 characters")
    return generatePassword();
  }
}

//Chose characters for the password & generate the password//

lowerCharConfirm= confirm("Include lowercase characters?")
if (lowerCharConfirm){
  userSelection += lowerChar
};
console.log(lowerCharConfirm);
console.log(userSelection);

upperCharConfirm= confirm("Include uppercase characters?")
if (upperCharConfirm){
  userSelection += upperChar
};
console.log(upperCharConfirm);
console.log(userSelection);

numberCharConfirm= confirm("Include numbers?")
if (numberCharConfirm){
  userSelection += numberChar
};
console.log(numberCharConfirm);
console.log(userSelection);

specialCharConfirm= confirm("Include special characters?")
if (specialCharConfirm){
  userSelection += specialChar
};
console.log(specialCharConfirm);
console.log(userSelection);

// Alert in case no character was selected for password//

if (lowerCharConfirm === false &&  upperCharConfirm === false &&  numberCharConfirm === false &&  specialCharConfirm === false) {
  alert("Please select at least one character type!")
  generatePassword()
};

//Create random passwored based on user preferences//
finalPassword = ""
for (var i = 0; i < passwordLength; i++) {
  finalPassword += userSelection.charAt(Math.floor(Math.random() * userSelection.length))
  return finalPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
