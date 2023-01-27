var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ]; 
var specialCharacter = ['~', '`', '!', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', ',', '?', '.', ];
var passwordLength =[];
var choices =[];

// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log("hello")
// Write password to the #password input
function writePassword() {
  var correctAnswers = questions();
  var passwordText = document.querySelector("#password");
  if(correctAnswers){
    var password = createPassword();
    passwordText.value = password;
  }
  else{
    alert("You must click OK for at least one of the options to receive a password.")
    passwordText.value="";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function questions(){
  passwordLength = parseInt(prompt("How many characters would you like in your password? 8-128"));
  choices = []
  if (isNaN(passwordLength)){
    alert("Password must be a number chartacter. Please try again.")
    return false;
  }

  if (passwordLength < 8){
    alert("Password must be more than 8 characers. Please try again.")
    return false;
  }

  if (passwordLength > 128){
    alert("Password must be less than 128 characters. Please try again.")
    return false;
  }

  if (confirm("Would you like upper case letters in your password?")){
    choices =choices.concat(upper);
  }
  
  if (confirm("Would you like lower case letters in your password?")){
    choices =choices.concat(lower);
  }

  if (confirm("Would you like numbers in your password?")){
    choices =choices.concat(number);
  }

  if (confirm("Would you like special characters in your password?")){
    choices =choices.concat(specialCharacter);
  }
  if(choices.length==0){
    return false;
  }
  return true;
} 

function createPassword(){
  var password ="";
  for(var i=0; i <passwordLength; i++){
    var character = Math.floor(Math.random() * choices.length);
    password = password +choices[character];
  }
  return password;
}