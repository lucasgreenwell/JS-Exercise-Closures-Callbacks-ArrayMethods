// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/////////////// CALLBACKS AND HIGHER-ORDER FUNCTIONS ///////////////
/////////////// CALLBACKS AND HIGHER-ORDER FUNCTIONS ///////////////

/**
 * ### Challenge `processLength`
 * 
 * @instructions
 * PLEASE STUDY THE EXAMPLE CHALLENGE THOROUGHLY BEFORE PROCEEDING!
 * PLEASE STUDY THE EXAMPLE CHALLENGE THOROUGHLY BEFORE PROCEEDING!
 * 
 * Implement a higher-order function called `processLength`.
 * It takes two arguments:
 * @param list an array with elements of any type.
 * @param callback function that takes a number as its argument.
 * @returns the result of invoking `callback` passing the LENGTH of `list`.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processLength` passing `['foo', 'bar']` and `(num) => num + 1000`,
 * should return 1002.
 * 
 * [2] Invoking `processLength` passing `[]` and `(num) => "There are " + num`,
 * should return "There are 0".
*/
const processLength = (arr, cb) => cb(arr.length); 
  

/**
 * ### Challenge `processLastItem`
 * 
 * @instructions
 * Implement a higher-order function called `processLastItem`.
 * It takes two arguments:
 * @param stringList array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the LAST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processLastItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'barbar'.
*/
const processLastItem = (arr, cb) => cb(arr[arr.length - 1]);

/**
 * ### Challenge `processSum`
 * 
 * @instructions
 * Implement a higher-order function called `processSum`.
 * It takes two arguments:
 * @param numberList array of numbers.
 * @param callback function that takes a number as its argument.
 * @returns the result of invoking `callback` passing the SUM of all elements in `numberList`.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processSum` passing `[10, 20, 30]` and `(num) => num + " is a big number!"`,
 * should return "60 is a big number!".
 * 
 * [2] Invoking `processSum` passing `[]` and `(num) => num + 1000`,
 * should return 1000.
*/
const processSum = (arr, cb) => {
  let sum = arr.reduce( (init, val) => init + val, 0);
  return cb(sum);
}

/**
 * ### Challenge `processProduct`
 * 
 * @instructions
 * Implement a higher-order function called `processProduct`.
 * It takes three arguments:
 * @param num1 a number.
 * @param num2 a number.
 * @param callback function that takes a number as its argument.
 * @returns the result of invoking `callback` passing the PRODUCT of `num1` and `num2`.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processProduct` passing 2 and 7 and `(num) => num + " is a big number!"`,
 * should return "14 is a big number!".
 * 
 * [2] Invoking `processProduct` passing 25 and 0 and `(num) => num + 1000`,
 * should return 1000.
*/
const processProduct = (num1, num2, cb) => cb(num1 * num2);

/**
 * ### Challenge `processContains`
 * 
 * @instructions
 * Implement a higher-order function called `processContains`.
 * It takes three arguments:
 * @param item of any kind.
 * @param list array of elements of any kind.
 * @param callback function that takes a boolean as its argument.
 * @returns the result of invoking `callback` passing true if `item` exists in `list`, false otherwise.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processContains` passing
 * "foo" and `['foo', 'bar']` and `(bool) => bool ? 'nice!' : 'sad'`
 * should return "nice!".
 * 
 * [2] Invoking `processContains` passing
 * "lady gaga" and `['foo', 'bar']` and `(bool) => bool ? 'nice!' : 'sad'`,
 * should return "sad".
*/
const processContains = (ele, arr, cb) => cb(arr.includes(ele));


/**
 * ### Challenge `processDuplicateFree`
 * THIS IS A STRETCH PROBLEM! ATTEMPT ONLY AFTER COMPLETING ALL NON-STRETCH CHALLENGES!
 * THIS IS A STRETCH PROBLEM! ATTEMPT ONLY AFTER COMPLETING ALL NON-STRETCH CHALLENGES!
 * 
 * @instructions
 * Implement a higher-order function called `processDuplicateFree`.
 * It takes two arguments:
 * @param list array of elements of any kind.
 * @param callback function that takes an array as its argument.
 * @returns the result of invoking `callback` passing a de-duped version of `list`.
 * 
 * Examples of usage of this higher-order function:
 * [1] Invoking `processDuplicateFree` passing `[1,1,1,2]` and `(arr) => arr`,
 * should return `[1,2]`.
 * 
 * [2] Invoking `processDuplicateFree` passing `[1,1,2,2,3]` and `(arr) => arr.length`,
 * should return 3.
*/
const processDuplicateFree = (arr, cb) => {
  let jeff = arr.filter((ele, i) => arr.indexOf(ele) === i);
  return cb(jeff);
}

/////////////// HIGHER-ORDER ARRAY METHODS ///////////////
/////////////// HIGHER-ORDER ARRAY METHODS ///////////////

// A local community center is holding a fund raising 5k fun run and has invited
// 50 small businesses to make a small donation on their behalf for some much needed
// updates to their facilities. Each business has assigned a representative
// to attend the event along with a small donation.

/**
 * ### Challenge `getFullNames`
 * 
 * @instructions
 * Implement this function using forEach().
 * 
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @returns an array with all the runners' full names in the following format: "Smith, John".
 * The full names appear in the array in the same order the runners appear in the `runners` array.
*/
  const getFullNames = arr => {
    let arr2 = [];
    arr.forEach(r => arr2.push(`${r.last_name}, ${r.first_name}`));
    return arr2;
  }



/**
 * ### Challenge `firstNamesAllCaps`
 * 
 * @instructions
 * The event director needs to have all the runners' first names 
 * in uppercase because the director BECAME DRUNK WITH POWER.
 * Implement this function using map().
 * 
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @returns an array with all the runners' first names in ALL CAPS.
 * The first names appear in the array in the same order the runners appear in the `runners` array.
*/
const firstNamesAllCaps = arr => {
  let res = arr.map(v => {return v.first_name.toUpperCase()});
  return res;
}

//error says that it cant utilize the touppercase function on undefined, however the output on repl it has no undefined elements

/**
 * ### Challenge `getRunnersByTShirtSize`
 * 
 * @instructions
 * The event director needs a way to find the runners that need
 * a specific t-shirt size, so they can place the orders easily.
 * Implement this function using filter().
 * 
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @param tShirtSize string (possible values are "S", "M", "L", "XL", "2XL", "3XL").
 * @returns an array containing only the runners that use the given `tShirtSize`.
 * The runners in the array appear in the same order they appear in the `runners` array.
*/
const getRunnersByTShirtSize = (arr, str) => {
  let res = arr.filter(v => {return v.shirt_size === str});
  return res;
}


/**
 * ### Challenge `tallyUpDonations`
 * 
 * @instructions
 * The donations need to be tallied up and reported for tax purposes.
 * Implement this function using reduce().
 * 
 * @param runners array of runners like the one inside the /data/runners.js file.
 * @returns a number which is the sum of the donations by all runners.
*/
const tallyUpDonations = arr => {
  let res = arr.reduce((total, val) => total + val.donation, 0);
  return res;
}

/////////////// CLOSURES ///////////////
/////////////// CLOSURES ///////////////

/**
 * ### Challenge `counterMaker`
 * 
 * @instructions
 * Fix this function so a counter produced with it will increment correctly!
 * Usage is as follows:
 * 
 * const counter = counterMaker()
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * etc
*/
function counterMaker() {
  // BROKEN CODE STARTS
  let count = -1;
  return function counter() {
     count ++;
     return count;
  }
  // BROKEN CODE ENDS
}

/**
 * ### Challenge `counterMakerWithLimit`
 * 
 * @instructions
 * Implement a counter maker that takes a max value for the count.
 * A counter created with it will reset itself after reaching the max value.
 * Usage is as follows:
 * 
 * const counter = counterMakerWithLimit(3)
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * counter() // should return 3
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * counter() // should return 3
 * counter() // should return 0
 * etc
*/
function counterMakerWithLimit() {
  /* CODE HERE */
  let count = -1;
  return function counter() {
     if(count > 2){
       count = 0;
       return count;
     }
     count ++;
     return count;
  }
}

/////////////// END OF CHALLENGE ///////////////
/////////////// END OF CHALLENGE ///////////////
/////////////// END OF CHALLENGE ///////////////

if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (processFirstItem) { module.exports.processFirstItem = processFirstItem }
  if (processLength) { module.exports.processLength = processLength }
  if (processLastItem) { module.exports.processLastItem = processLastItem }
  if (processSum) { module.exports.processSum = processSum }
  if (processProduct) { module.exports.processProduct = processProduct }
  if (processContains) { module.exports.processContains = processContains }
  if (processDuplicateFree) { module.exports.processDuplicateFree = processDuplicateFree }
  if (getFullNames) { module.exports.getFullNames = getFullNames }
  if (firstNamesAllCaps) { module.exports.firstNamesAllCaps = firstNamesAllCaps }
  if (getRunnersByTShirtSize) { module.exports.getRunnersByTShirtSize = getRunnersByTShirtSize }
  if (tallyUpDonations) { module.exports.tallyUpDonations = tallyUpDonations }
  if (counterMaker) { module.exports.counterMaker = counterMaker }
  if (counterMakerWithLimit) { module.exports.counterMakerWithLimit = counterMakerWithLimit }
}
