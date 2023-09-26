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

function generatePassword(){
  var numChar = window.prompt
  var inclNum = window.confirm // true/false
  var inclSpec = window.confirm 
  var upper = window.confirm
  var lower = window.confirm

var numArray = ["0","1","2","3","4","5","6","7","8","9"]

// var numArray
// if true push/concat array into a new array

//for  loop through options array based on required characters
// Random index value for every loop
// var chosenArr = [];
// turn array into string<--(password)

  return password;
}