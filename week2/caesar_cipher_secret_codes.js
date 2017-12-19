// Write a program to decode this message:
//
// NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG.
//
// This is a form of cryptography known as the Caesar Ciper. It has a shift parameter of 3.
//
// The alphabet is normally:
//
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// The alphabet with the shift parameter of 3 is now as follows:
//
// DEFGHIJKLMNOPQRSTUVWXYZABC
// which means if the original message is ABC. The encrypted message will be DEF
//
// secret message 2:
//
// ERQXV ILIWHHQ PLQXWHV EUHDN

var alphabet = ['D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X',
                'Y','Z','A','B','C'];   // Or can be one string and you can split it.
var codedMessage = "NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG.";
var splitMessage = codedMessage.split('');
//var cipher =


for (var i = 0; i <= alphabet.length; i++) {
  var alphabetChar = alphabet[i].indexOf();
}

/*
 DT's solution
