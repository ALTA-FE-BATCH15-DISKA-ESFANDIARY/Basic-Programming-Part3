function removeDuplicates(array: number[]): number {
    let i = 0;
    let j = 0;
    const n = array.length;
  
    while (i < n) {
      if (array[i] === array[j]) {
        i++;
      } else {
        j++;
        array[j] = array[i];
        i++;
      }
    }
  
    return j + 1;
  }
  
  console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));    // 4
  console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9]));    // 6
  console.log(removeDuplicates([2, 2, 2, 11]));            // 2
  console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])); // 4
  