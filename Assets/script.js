// Assignment Code


//var generateBtn = document.querySelector("#generate");

const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lower');
const uppercaseEl = document.getElementById('upper');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbols: getRandomSymbol
};

// Generate eventListener
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasSymbols = symbolsEl.checked;

    passwordEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumbers,
        hasSymbols,
        length,
    );
});

// Generate Password Function
function generatePassword(lower, upper, number, symbols, length) {

    let generatedPassword = '';

    const typesCount = lower + upper + number + symbols;

// .filter allows for the object to be removed if it is unchecked
    const typesArr = [{lower}, {upper}, {number}, {symbols}].filter
    (
        item => Object.values(item) [0]
    );

// ensures that if no boxes are checked then no results will come back    
    if(typesCount === 0) {
        return '';
    }

// Creates a loop
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}


// Generator functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%%^&*()-+='
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);