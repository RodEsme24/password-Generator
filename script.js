// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//all my prompt questions
var generatePassword="";
var passWordLength = prompt("How many characters would you like your password to Contain?");
if (passWordLength < 8) { alert("Password lenght must be atleast 8 characters") }
else if (passWordLength > 128) { alert("password lenght must be less than 129 characters") }
if (passWordLength >= 8 && passWordLength <= 128) {
  confirm("click OK to confirm including numeric characters")
  confirm("click OK to confirm including special characters");
  confirm("click OK to confirm including numeric characters");
  confirm("click OK to confirm including lowercase characters");
  confirm("click OK to confirm including uppercase characters");
}
//my options
var numberoptions=["1","2","3","4","5","6","7","8","9","0"];
var specialOption=["!","@","#","$","%","&","^","&","*"];
var lowercaseOptions=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var uppercaseOptions=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

generatePassword="";

     














// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










