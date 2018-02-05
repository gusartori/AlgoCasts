// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    return parseInt(n.toString().split('').reverse().join(''))*Math.sign(n);
}

// class Main {
//     public static void main(String[] args) {
//         int num = -16;
//         int sign = 0;
//         if (num>=0){
//             sign = 1;
//         } else {
//             sign = -1;
//         }
//         String str = num*sign+"";
//         String r = "";
//         for (char c: str.toCharArray()){
//             r = c + r;
//         }
//         Integer p = new Integer(r);
//         System.out.println(p*sign);
//     }
// }

module.exports = reverseInt;
