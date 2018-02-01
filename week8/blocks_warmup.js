// You are given a collection of ABC blocks. Just like the ones you had when you were a kid. There are twenty blocks with two letters on each block. You are guaranteed to have a complete alphabet amongst all sides of the blocks. The sample blocks are:
//
// [['B','O'],
// ['X','K'],
// ['D','Q'],
// ['C','P'],
// ['N','A'],
// ['G','T'],
// ['R','E'],
// ['T','G'],
// ['Q','D'],
// ['F','S'],
// ['J','W'],
// ['H','U'],
// ['V','I'],
// ['A','N'],
// ['E','R'],
// ['F','S'],
// ['L','Y'],
// ['P','C'],
// ['Z','M'],]
// If you test these words, these results will happen:
//
// can_make_word("A")
// # => true
// can_make_word("BARK")
// # => true
// can_make_word("BOOK")
// # => false
// can_make_word("TREAT")
// # => true
// can_make_word("COMMON")
// # => false
// can_make_word("SQUAD")
// # => true
// can_make_word("CONFUSE")
// # => true
// can_make_word("BOUGHT")
// # => false

// Write a program that evaluates can_make_word


var blocks =
  [['B','O'],
  ['X','K'],
  ['D','Q'],
  ['C','P'],
  ['N','A'],
  ['G','T'],
  ['R','E'],
  ['T','G'],
  ['Q','D'],
  ['F','S'],
  ['J','W'],
  ['H','U'],
  ['V','I'],
  ['A','N'],
  ['E','R'],
  ['F','S'],
  ['L','Y'],
  ['P','C'],
  ['Z','M']];


var can_make_word = function(word){
  var word_arr = word.split('');
  word_arr.forEach(function(word){
    // incomplete
    // could use while loop to test condition instead of .every function
    // remove element when found?
    console.log(word);
  });
};

can_make_word("BARK");
