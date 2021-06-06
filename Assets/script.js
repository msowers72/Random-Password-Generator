

// var numbers =  "0123456789"
// var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var lettersLower = "abcdefghijklmnopqrstuvwxyz"
// var specialCase ="!@#$%^&*()"


function generatePassword() {
  var dataInput ="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";
  var passwordLength = 15;
  var password = "";
         for (var i = 0; i < passwordLength; i++) {
      var calculate = Math.floor(Math.random() * Math.floor(dataInput.length));
      password += dataInput[calculate];
    } 
    return password;       
} 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
 var password = generatePassword();
 var passwordText = document.querySelector("#password");
 passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// password += dataInput.substring(calculate, calculate + 1);
