// 1st step; I created these variable inputs that became my dataInput variable
// <-------------------------------------------------------------> //
//  numbers =  "0123456789"
// lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//  lettersLower = "abcdefghijklmnopqrstuvwxyz"
//  specialCase ="!@#$%^&*()"
// ---------------------------------------------------------------> //

// 2nd step; I created the function generatePassword() //
// 3rd step: I creeated a window prompt that ask for password length // 
// Steps 4-7;  created if conditions for the window prompt //
// Setp 8 - the for loop was created and has a calulate variable
// last step; return statement; return statement determines the value the function returns //

var dataInput = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  specialcase: "!@#$%^&*()",
};

function generatePassword() {
  var dataSet = "";

   var length = window.prompt("Select a number between 8 and 128 to confirm password length.")

   var lowercase = window.confirm("Lowercase letters?");
    if (lowercase) {
      dataSet += dataInput.lowercase;   
    };

    var uppercase = window.confirm("Uppercase letters?");
    if (uppercase) {
      dataSet += dataInput.uppercase;      
    };

    var number = window.confirm("Numbers?");
    if (number) {
      dataSet += dataInput.number;      
    };

    var specialcase = window.confirm("Specialcase?");
    if (specialcase) {
      dataSet += dataInput.specialcase;      
    };

    
  var password = "";
       for (var i = 0; i < length; i++) {
      password += dataSet[Math.floor(Math.random() * dataSet.length)]      
    } 
    return password;       
  } 

  console.log(generatePassword)

// This code was provide as part of the homework assignment //

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




