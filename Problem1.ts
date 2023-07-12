function compareString(a: string, b: string): string {
    let longestSubstring = '';
  
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j <= a.length; j++) {
        let substring = a.substring(i, j);
  
        if (isSubstring(substring, b) && substring.length > longestSubstring.length) {
          longestSubstring = substring;
        }
      }
    }
  
    return longestSubstring;
  }
  
  function isSubstring(substring: string, string: string): boolean {
    return string.indexOf(substring) !== -1;
  }
  
  console.log(compareString("AKA", "AKASHI"));     // AKA
  console.log(compareString("KANGAROO", "KANG"));  // KANG
  console.log(compareString("KI", "KIJANG"));      // KI
  console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
  console.log(compareString("ILALANG", "ILA"));    // ILA
  
































// function compareString(a: string, b: string): string {
//     let longestSubstring = '';
  
//     for (let i = 0; i < a.length; i++) {
//       for (let j = i + 1; j <= a.length; j++) {
//         const substring = a.substring(i, j);
  
//         if (isSubstring(substring, b) && substring.length > longestSubstring.length) {
//           longestSubstring = substring;
//         }
//       }
//     }
  
//     return longestSubstring;
//   }
  
//   function isSubstring(substring: string, string: string): boolean {
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === substring[0]) {
//         let found = true;
  
//         for (let j = 1; j < substring.length; j++) {
//           if (string[i + j] !== substring[j]) {
//             found = false;
//             break;
//           }
//         }
  
//         if (found) {
//           return true;
//         }
//       }
//     }
  
//     return false;
//   }
  
//   // Test cases
//   console.log(compareString("AKA", "AKASHI"));     // AKA
//   console.log(compareString("KANGAROO", "KANG"));  // KANG
//   console.log(compareString("KI", "KIJANG"));      // KI
//   console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
//   console.log(compareString("ILALANG", "ILA"));    // ILA
  