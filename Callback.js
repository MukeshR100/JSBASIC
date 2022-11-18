
const nos = [3,4,-5,7,-2,6,23];

// Call removeNegNos with a Callback
const posNumbers = removeNegNos(nos, (x) => x >= 0);

// Remove negative numbers
function removeNegNos(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
console.log(posNumbers);