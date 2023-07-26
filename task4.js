/* 
Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

 Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9) 

 */


 const twoIndices = (arr, target) => {
  const allNumbers = {};

  for (let i = 0; i < arr.length; i++) {
    const firstNum = arr[i];
    const secondNum = target - firstNum;
    if (allNumbers.hasOwnProperty(secondNum)) {
      const firstIndex = allNumbers[secondNum];
      return [firstIndex, i];
    }

    allNumbers[firstNum] = i;
  }

  return [];
}

// Example usage:
console.log(twoIndices([1, 3, 6, 8, 11, 15], 9)); 
