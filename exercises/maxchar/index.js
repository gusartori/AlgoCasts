// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let max = 0;
    let maxChar = '';
    const charMap ={};
    for (let char of str){
        if(!charMap[char]){
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }
    for (let char in charMap) {
        if(charMap[char]>max){
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

// import java.util.*;
// class Main {
//     public static void main(String[] args) {
//         String example = "aabbbbbbbbbbbbcccccd";
//         HashMap<Character, Integer> charMap = new HashMap();
//         for (char c: example.toCharArray()){
//             Integer i = charMap.get(c);
//             if(i==null){
//                 i = 0;
//             }
//             charMap.put(c, i+1);
//         }
//         String maxChar = " ";
//         int max = 0;
//         for(Character c: charMap.keySet()){
//             if(charMap.get(c)>max){
//                 max = charMap.get(c);
//                 maxChar = c.toString();
//             }
            
//         }
//         System.out.println(maxChar);
//     }
// }

module.exports = maxChar;
