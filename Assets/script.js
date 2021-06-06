var numbers =  "0123456789"
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lettersLower = "abcdefghijklmnopqrstuvwxyz"
var specialCase ="!@#$%^&*()"


function writePassword() {
  var dataInput ="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";
  var passwordLength = 15;
  var password = "";
  var generateBtn = document.querySelector("#generate");
  var password = generatePassword();
    for (var i = 0; i < passwordLength; i++) {
      var calculate = Math.floor(Math.random() * dataInput.length);
      password += dataInput.substring(calculate, calculate + 1);
  }
        
  generateBtn.addEventListner("click",writePassword);
}







