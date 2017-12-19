// Palindrome warmup
// Prompt for Palindrome
var string = prompt('Palindrome checker: Write a sentence here.');

// Remove unwanted characters and lowercase the string
var regExp = /[\W_]/g;
var lowCaseString = string.toLowerCase().replace(regExp, '');
// Reverse order of string
var reverseString = lowCaseString.split('').reverse().join('');

// Test to see if string is equal in forward and reverse and print result to console
if (reverseString === lowCaseString) {
  alert('This is a palindrome!');
} else {
  alert('This is not a palindrome.');
}
