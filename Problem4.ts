function meanMedian(arrayInput: number[]): string {
    const n = arrayInput.length;
    let mean = arrayInput.reduce((a, b) => a + b) / n;
    mean = Math.round(mean * 10) / 10; // ini untuk ngebuletin angka di mean
  
    let median: number;
    if (n % 2 === 0) {
      median = (arrayInput[n / 2 - 1] + arrayInput[n / 2]) / 2;
    } else {
      median = arrayInput[(n - 1) / 2];
    }
    median = Math.round(median * 10) / 10; // ini untuk ngebuletin angka di median
  
    return `${mean} ${median}`;
  }
  
  console.log(meanMedian([1, 2, 3, 4]));          
  console.log(meanMedian([1, 2, 3, 4, 5]));      
  console.log(meanMedian([7, 8, 9, 13, 15]));    
  console.log(meanMedian([10, 20, 30, 40, 50]));
  console.log(meanMedian([15, 20, 30, 60, 120])); 
  