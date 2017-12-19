var map1 = [
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "X", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"]
];

//var treasure = 'X';

var treasureFinder = function(map, treasure) {
  debugger;
  for (var i = 0; i < map.length; i++) {
    var index1 = map[i].indexOf(treasure);
      if (index1 !== -1) {
        for (var j = 0; j < map1[j].length; j++) {
          var index2 = map1[j].indexOf(treasure);
          if (index2 > -1) {
            return [index1, index2];
      }
      }
    }
  }
  //console.log(treasure + ' is at coordinates [' + i + '], [' + index1 + ']');
};

treasureFinder(map1, 'X');
