function joinArrayRemoveDuplicate(arrayA: string[], arrayB: string[]): string[] {
    let combinedArray = arrayA.concat(arrayB); // method concat dipake buat menggabungkan si arraynya
    let uniqueSet = new Set(combinedArray); // ini buat set dari gabungan biar menghapus nilai duplikatnya
    let uniqueArray = Array.from(uniqueSet); // nah ini untuk konversi set yang atas biar jadi array 
  
    return uniqueArray;
  }
  

  console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]));
  
  console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]));
  
  console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]));

  





















// function joinArrayRemoveDuplicate(arrayA, arrayB) {
//     let resultArray = arrayA.concat(arrayB); // gabungkan kedua array
  
//     resultArray = resultArray.filter((value, index) => {
//       // filter nilai-nilai yang duplikat
//       return resultArray.indexOf(value) === index;
//     });
  
//     return resultArray;
//   }
  
//   // Test cases
//   console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]));
//   // ["apel", "anggur", "lemon", "leci", "nanas"]
  
//   console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]));
//   // ["samsung", "apple", "sony", "xiaomi"]
  
//   console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]));
//   // ["football", "basketball"]