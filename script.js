// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword); //when button is clicked It's restarts the function 


function generatePassword() {
  const length = parseInt(prompt('Enter your password length:'));
  const includeLowercase = confirm('Do you want to Include lowercase letters?');  //confirm popup to get true/false on Lowercase letters 
  const includeUppercase = confirm('Do you want to Include uppercase letters?');  //confirm popup to get true/false on Uppercase letters
  const includeNumbers = confirm('Do you want to Include numbers?');  //confirm popup to get true/false on numbers 
  const includeSymbols = confirm('Do you want to Include symbols?');  //confirm popup to get true/false on symbols 

  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';  //string of all lowercase 
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  //string of all Uppercase
  const numberChars = '0123456789'; //string of all numbers 
  const symbolChars = '!@#$%^&*()'; //string of all symbols

  let chars = "";   //setting a placeholder for my password to add them together later on
  if (includeLowercase) {   //if confirm is true add lowercase to chars
    chars += lowercaseChars;
  }

  if (includeUppercase) {   //if confirm is true add uppercase to chars(placeholder for password)
    chars += uppercaseChars; 
  }

  if (includeNumbers) { //if confirm is true add number to chars(placeholder for password)
    chars += numberChars; 
  }

  if (includeSymbols) { //if confirm is true add symbols to chars(placeholder for password)
    chars += symbolChars;
  }

  let password = '';  //setting empty placeholder for password var
  for (let i = 0; i < length; i++) {     //sets interger to 0 and continues loop until i is lessthan length
    const randomIndex = Math.floor(Math.random() * chars.length); //sets password to be randomized 
    password += chars[randomIndex]; // randomizes the chars const to add to password var
  }

  return password; 
}

const generatedPassword = generatePassword();
const passwordInput = document.getElementById('password');
passwordInput.value = generatedPassword;
