var headFlip = 0;
var tailsFlip = 0;
var coinImage = document.querySelector('img');

var coinFlip = function () {
    var coinToss = Math.floor(Math.random() * 2);
    if (coinToss === 0) {
      headFlip++;
      console.log('HEADS');
  } else {
      tailsFlip++;
      console.log('TAILS');
  }

  if (headFlip === 5) {
    console.log('HEADS WINS');
  } else if (tailsFlip === 5) {
    console.log('TAILS WINS');
  }
};


// while (headFlip < 5 && tailsFlip < 5) {
//
// }

coinImage.addEventListener('click', coinFlip);
