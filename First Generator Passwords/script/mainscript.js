
"use strict"

/* Selectors */
const d = document;
const $charAmountRange = d.getElementById("charAmountRange")
, $charAmountNumber = d.getElementById("charAmountNumber"),
$includeUppercase = d.getElementById("include-uppercase"),
$includeNumbers =d.getElementById("include-numbers"),
$includeSymbols = d.getElementById("include-symbols"),
$form = d.querySelector(".form"),
$passwordDisplay = d.getElementById('passwordDisplay'),
$copy = d.getElementById("to-clipboard");

const uppercaseCharCodes = arrayFromLowToHigh(65, 90)
const lowercaseCharCodes = arrayFromLowToHigh(97, 122)
const numbersCharCodes = arrayFromLowToHigh(48, 57)
const symbolsCharCodes = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

let alertBox = d.querySelector('.alertBox');




  function copyToClipboard(str) {
    if(str != "password"){
      const elem = d.createElement('textarea');
      elem.value = str;
      d.body.appendChild(elem);
      elem.select();
      d.execCommand("copy");
      d.body.removeChild(elem);
    }
  }

  function clickHandle(e) {
    copyToClipboard($passwordDisplay.innerText);
  }
  
  $copy.addEventListener('click', clickHandle())
  

  
  /* This function syncs the range and the number input */
  
  
  /* With this function we get the characters from ASCII Character Codes https://www.petefreitag.com/cheatsheets/ascii-codes/ instead of manually creating an array */
  
  $form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const charAmount = $charAmountNumber.value
    const includeUppercase = $includeUppercase.checked
    const includeNumbers = $includeNumbers.checked
    const includeSymbols = $includeSymbols.checked
    const password = getPassword(charAmount, includeUppercase, includeNumbers, includeSymbols);
    $passwordDisplay.innerText = password;
    
  })
  function getPassword(charAmount, includeUppercase, includeNumbers, includeSymbols) {
    
    let charCodes = lowercaseCharCodes;
    if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes)
    if (includeSymbols) charCodes = charCodes.concat(symbolsCharCodes)
    if (includeNumbers) charCodes = charCodes.concat(numbersCharCodes)
    
    const passwordCharacters = []
    for (let i = 0; i < charAmount; i++) {
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
  
  
  const syncCharAmount = (e)=> {
    const value = e.target.value
    $charAmountRange.value = value
    $charAmountNumber.value = value
  }
  
  $charAmountRange.addEventListener("input", syncCharAmount);
  $charAmountNumber.addEventListener("input", syncCharAmount);
console.log($passwordDisplay)