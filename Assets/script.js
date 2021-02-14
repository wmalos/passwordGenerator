// Assignment Code

// Adding the characters for the password generator to choose from
var numbers =
    '1'
    '2'
    '3'
    '4'
    '5'
    '6'
    '7'
    '8'
    '9'
    '0';

var lowerCase =
    'a'
    'b'
    'c'
    'd'
    'e'
    'f'
    'g'
    'h'
    'i'
    'j'
    'k'
    'l'
    'm'
    'n'
    'o'
    'p'
    'q'
    'r'
    's'
    't'
    'u'
    'v'
    'w'
    'x'
    'y'
    'z';

var upperCase =
    'A'
    'B'
    'C'
    'D'
    'E'
    'F'
    'G'
    'H'
    'I'
    'J'
    'K'
    'L'
    'M'
    'N'
    'O'
    'P'
    'Q'
    'R'
    'S'
    'T'
    'U'
    'V'
    'W'
    'X'
    'Y'
    'Z';

var  specialChar =
    '!'
    '@'
    '#'
    '$'
    '%'
    '^'
    '&'
    '*'
    '('
    ')'
    '-'
    '+'
    '=';

var generateBtn = document.querySelector("#generate");

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbols: getRandomSymbol
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
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);