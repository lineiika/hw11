

function generateKey () {
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let passwordLength = 15;
let password = "";

for (let i = 0; i <= passwordLength; i++) {
  let randomNumber = Math.floor(Math.random() * characters.length);
  password += characters.charAt(randomNumber, randomNumber +1);
 }
console.log(password)
  
}
generateKey()





