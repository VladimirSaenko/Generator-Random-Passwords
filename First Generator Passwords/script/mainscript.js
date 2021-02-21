
"use strict"

/* Selectors */
const d = document;
const $charAmountRange = d.getElementById("charAmountRange")
, $charAmountNumber = d.getElementById("charAmountNumber"),
$includeUppercase = d.getElementById("include-uppercase"),
$includeNumbers =d.getElementById("include-numbers"),
$includeSymbols = d.getElementById("include-symbols"),
$form = d.querySelector(".form"),
$passwordDisplay = d.getElementById('password-display');

const uppercaseCharCodes = arrayFromLowToHigh(65, 90)
const lowercasecharCodes = arrayFromLowToHigh(97, 122)
const numbersCharCodes = arrayFromLowToHigh(48, 57)
const symbolsCharCodes = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

let alertBox = d.querySelector('.alertBox');


/* function getPassword(charAmount, includeUppercase, includeNumbers, includeSymbols) {

    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/@#$%&()+&<>:";
    let passwordLength = 16;
    let password = "";

    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }

    d.getElementById('password').value = password;
    alertBox.innerHTML = "New Password Copied: <br>" + password;
} */

function copyPassword() {
    let copyPassText = d.getElementById('password');
    copyPassText.select();
    d.execCommand("copy");
    alertBox.classList.toggle('active');
    setTimeout(function() {
        alertBox.classList.toggle('active');
    }, 4000);
}


/* My Contribution */

/* This function syncs the range and the number input */

const syncCharAmount = (e)=> {
  const value = e.target.value
  $charAmountRange.value = value
  $charAmountNumber.value = value
}

$charAmountRange.addEventListener("input", syncCharAmount);
$charAmountNumber.addEventListener("input", syncCharAmount);


/* With this function we get the characters from ASCII Character Codes https://www.petefreitag.com/cheatsheets/ascii-codes/ instead of manually creating an array */

function getPassword(charAmount, includeUppercase, includeNumbers, includeSymbols) {

  let charCodes = lowercaseCharCodes;
  if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes)
  if (includeSymbols) charCodes = charCodes.concat(symbolsCharCodes)
  if (includeNumbers) charCodes = charCodes.concat(numbersCharCodes)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

$form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
  $passwordDisplay.value = password;

})

