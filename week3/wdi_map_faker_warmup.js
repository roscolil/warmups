// You are a villain trying to trap an adventuring archaeologist. Write a function 'makeFakeMap' that takes two numbers as arguments and returns an array of arrays to represent a map. It should be filled with the 'A' character, except for one, which should be an uppercase X(as below). The position of X should be determined randomly.
//
// makeFakeMap(5, 5);
//
// // Sample outputs:
//
// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","X","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];
//
// makeFakeMap(5, 5);
//
// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","X"],
// ["A","A","A","A","A"]
// ];
//
// makeFakeMap(5, 5);
//
// [
// ["A","A","A","A","A"],
// ["A","A","A","X","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];
// Bonus 1
//
// Modify your function to take a third key argument and generate maps with a single key character inserted randomly.
//
// //bonus output:
//
// makeFakeMap(5, 5, 'F');
//
// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","F","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ];
// Bonus 2
//
// Modify your function to generate maps with 'regions' that you can control. The regions you should support are below:
//
// F: generate a forest W: generate a body of water D: generate a desert region
//
// The argument after the region should be the size of that region. For example, region size 2 would make a 2x2 region within your map (placed randomly) in which one of the tiles is the treasure marker, X. Inspect the sample output below. The Region size argument should not be allowed to be bigger than the map itself.
//
// //bonus 2 output:
//
// makeFakeMap(5, 5, 'F', 2, 'X');
//
// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","F","X","A"],
// ["A","A","F","F","A"],
// ["A","A","A","A","A"]
// ];


// var mapArray = [
//   []
// ];
// 
// var randomX = function() {
//    var random = Math.round(Math.random("X") * num1.length);
//    return random;
// };
// 
// var createRow = function () {
//   for (var i = 1; i <= num1; i++) {
//     var row = mapArray.push("A");
//   }
//   return row;
// };



var makeFakeMap = function(num1, num2) {
  

  
};


makeFakeMap(5, 5);
