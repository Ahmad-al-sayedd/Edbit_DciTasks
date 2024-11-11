// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// Examples
// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
// Notes
// Tests contain arrays with both strings and numbers.
// Tests are case sensitive.
// Each array item is unique.

function removeDups(arr) {
  const newArr = [];

  for (let item of arr) {
    if (typeof item === "string") {
      if (
        !newArr.some(
          (existing) => existing.toLowerCase() === item.toLowerCase()
        )
      ) {
        newArr.push(item);
      }
    } else if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }

  return newArr;
}

console.log(removeDups([1, 0, 1, 0])); // ➞ [1, 0]
console.log(removeDups(["The", "big", "cat"])); // ➞ ["The", "big", "cat"]
console.log(removeDups(["John", "Taylor", "John"])); // ➞ ["John", "Taylor"]
console.log(removeDups(["John", "john", "Taylor", "tayLOR"])); // ➞ ["John", "Taylor"]
