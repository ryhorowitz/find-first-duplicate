function findFirstDuplicate(arr) {
  // type your code here
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (obj[elem]) {
      return elem
    }
    obj[elem] = true
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// iterate through Array
// keep track/ store what numbers i have seen

// if this number has already been return it
// if i go through the loop without finding a dupe return -1 

// And a written explanation of your solution
// create empty object
// loop through Array
// at first index assign to object a key of index and a value of true
// at the next index 
//   check if it's value is a key of the object
//     true then return the key
//     false assign this item as the key of the object with a value of true.valueOf

