// function minMax(min, max) {
//   let sum = 0;
//   for (let i = min; i <= max; i++) {
//     sum = sum + i;
//   }
//   console.log(sum);
// }

// class Solution {
//   isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if (n % i == 0) {
//         return false;
//       }
//     }

//     return true;
//   }

//   printPrimeFactorization(n) {
//     let ans = "";
//     for (let i = 2; i <= n; i++) {
//       if (this.isPrime(i)) {
//         let x = i;
//         while (n % x == 0) {
//           if (ans.length > 0) ans += " ";
//           ans += i.toString();
//           x *= i;
//         }
//       }
//     }
//     console.log(ans);
//   }
// }
