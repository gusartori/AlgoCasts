// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    //1st sol
    // let reversed = '';
    // for(let char of str){
    //     reversed = char + reversed;
    // }
    // return reversed===str;

    // 2nd sol
    return str.split('').every((char, i)=>char===str[str.length - i - 1])
}

//Java sol
// class Main {
//     public static void main(String[] args) {
//         String str = "abba";
//         String r = "";
//         for (char c: str.toCharArray()){
//             r = c + r;
//         }
//         System.out.println(r.equals(str));
//     }
// }

module.exports = palindrome;
