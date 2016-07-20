function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for (var i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`); 
  }
  return arr;
}

function johnLennonFacts(array) {
  var arr = []
  var i = 0
  var l = array.length
  while (i < l) {
    arr.push(`${array[i]}!!!`);
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var arr = []
  var i = 0
  do {
    arr.push("I love the Beatles!");
    i++;
  } while (i < num + 1 && num < 15)
  return arr;
}

