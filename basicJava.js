// function nextInLine(arr, item) {
//     // Only change code below this line
//  arr.push(item);
//  const removed = arr.shift();
//  return removed;
//     // Only change code above this line
//   }
  
//   // Setup
//   let testArr = [1, 2, 3, 4, 5];
  
//   // Display code
// console.log(nextInLine([], 5));
// console.log(nextInLine([], 1));
// console.log(nextInLine([2], 1));
// console.log(nextInLine([5,6,7,8,9], 1));

//   console.log("Before: " + JSON.stringify(testArr));
//   console.log(nextInLine(testArr, 6));
//   console.log("After: " + JSON.stringify(testArr));


// Boolean if conditional
function trueOrFalse(wasThatTrue) {
   // Only change code below this line
   if (wasThatTrue) {
     return "Yes, that was true";
   }
   return "No, that was false";
   // Only change code above this line
 
 }
 console.log(trueOrFalse(true)); //should return "Yes, That was true"
 console.log(trueOrFalse(false)); //should return "No, that was false"


 // Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0]; 
  } else if (strokes <= par -2) {
    return names[1];
  } else if (strokes == par -1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par +1) {
    return names[4];
  } else if (strokes == par +2) {
    return names[5];
  } 
    return names[6];
  // Only change code above this line
}

console.log(golfScore(4,1)); //should return the string Hole-in-one!
console.log(golfScore(4,2)); //should return the string Eagle
console.log(golfScore(5,2)); //should return the string Eagle
console.log(golfScore(4,3)); //should return the string Birdie
console.log(golfScore(4,4)); //should return the string Par
console.log(golfScore(1,1)); //should return the string Hole-in-one!
console.log(golfScore(5,5)); //should return the string Par
console.log(golfScore(4,5)); //should return the string Bogey
console.log(golfScore(4,6)); //should return the string Double Bogey
console.log(golfScore(4,7)); //should return the string Go Home!
console.log(golfScore(5,9)); //should return the string Go Home!


//selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
}


  // Only change code above this line
  return answer;
}

console.log(caseInSwitch(1)); // should show the string "aplha"
console.log(caseInSwitch(2)); // should show the string "beta"
console.log(caseInSwitch(3)); // should show the string "gamma"
console.log(caseInSwitch(4)); // should show the string "delta"


// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
    break;
}


  // Only change code above this line
  return answer;
}

console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("d"));
console.log(switchOfStuff("z"));


// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}


  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(1));


//reutrning boolean values from functions
function isLess(a, b) {
  // Only change code below this line
    return a < b;
  // Only change code above this line
}

console.log(isLess(10, 15));


//Counting Cards blackjack
console.log(" ");
let count = 0;

function cc(card) {
  // Only change code below this line
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
    break;
}
if (count > 0) {
  return count + " Bet";
}
  return count + " Hold";
  // Only change code above this line
}
console.log(cc(2,3,4,5,6));
console.log(cc(7,8,9));


console.log(" ");
//object and properties
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
let lookup = {
  alpha: "Adams",
  bravo: "Boston",
  charlie: "Chicago",
  delta: "Denver",
  echo: "Easy",
  foxtrot: "Frank"
};
  result = lookup[val];
  // Only change code above this line
  return result;
}

console.log(phoneticLookup("charlie"));


console.log(" ");
// Testing Objects for Properties
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")); // pony


console.log("");
//Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents); // should be "maps"

//another nested array
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];


//record colletcion
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));


//while loop
// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray);

//for loop
// Setup
const myArr1 = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0
for (let i = 0; i < myArr1.length; i++) { // i < 4. total = total + myArr [0]
  total += myArr1[i];  //total = total + myArr1[i] = 0 + 2 = 2
}                       // total = total + angka ke sekian. karena angka ke sekitan terus nambah
console.log(myArr1);


//
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    product *= arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]])); // harusnya 5040


// do... while loops
// Setup
const myArray2 = [];
let x = 10;

// Only change code below this line
do {
  myArray2.push(x);
  x++;
} while (x < 10);
console.log(myArray2); // it must be 10


console.log(" ");
//replace loops using recursion
let m = 0;
function sum(arr, n) {
  // Only change code below this line
if (n <= 0) {
  return 0;
} else {
  m++;
  return sum(arr, n - 1) + arr[n - 1];
}
  // Only change code above this line
}
console.log(m++);
console.log(sum([2,3,4], 3)); // it should be 9


//Profile Lookup task
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
for (let i = 0; i < contacts.length; i++) {
  if (contacts[i].firstName == name) {
    if (contacts[i].hasOwnProperty(prop)) {
      return contacts[i][prop];
    } else {
        return "No such property";
    }
    }
  } 
      return "No such contact";
  // Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));


console.log(" ");
//// use the conditional (Ternary) Operator
// function findGreater(a, b) {
//   if(a > b) {
//     return "a is greater";
//   }
//   else {
//     return "b is greater or equal";
//   }
// }

// This can be re-written using the conditional operator:
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal"
  }
  
  console.log(checkEqual(1, 2));


  //  another option
  function checkSign(num) {
    return (num > 0) ? "positive"
      : (num < 0) ? "negative"
      : "zero";
    }
    
    console.log(checkSign(10));