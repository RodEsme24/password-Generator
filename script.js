// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//all my prompt questions

function writePassword() {
  var passWordLength = prompt("How many characters would you like your password to Contain?");
  if (passWordLength < 8) { alert("Password lenght must be atleast 8 characters") }
  else if (passWordLength > 128) { alert("password lenght must be less than 129 characters") }
  if (passWordLength >= 8 && passWordLength <= 128) {
    var number = confirm("click OK to confirm including numeric characters");
    var special = confirm("click OK to confirm including special characters");
    var lower = confirm("click OK to confirm including lowercase characters");
    var upper = confirm("click OK to confirm including uppercase characters");
  }


  //my options
  var numberOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialOption = ["!", "@", "#", "$", "%", "&", "^", "&", "*"];
  var lowerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  var upperOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var pool=[];//empty array
if (number===true){
  for(var i =0; i < numberOptions.length; i++){
    pool.push(numberOptions[i]);
  }
} 
if (special===true){
  for(var i =0; i < specialOption.length; i++){
    pool.push(specialOption[i]);
  }
}
if (lower===true){
  for(var i =0; i < lowerOptions.length; i++){
    pool.push(lowerOptions[i]);
  }
}
if (upper===true){
  for(var i =0; i < upperOptions.length; i++){
    pool.push(upperOptions[i]);
  }
}

var currentPassword = "";
for(var i=0; i< passWordLength; i++){
  var randomCharPosition = Math.floor(Math.random() * pool.length) ;
  currentPassword += pool[randomCharPosition];
  console.log(currentPassword);
  //document.getElementById("password").value 
}
document.getElementById("password").value = currentPassword;





}









  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);










