// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //1st sol
    //return str.split('').reverse().join('');

    //2nd sol
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;

    //3rd sol
    // return str.split('').reduce((r, c)=>c + r, '');
}

//Java 2nd sol
// public static void main(String[] args) {
//     String a = "Hello World!";
//     String reversed = "";
//     for (char c: a.toCharArray()){
//         reversed = c + reversed;
//     }
//     System.out.println(reversed);
// }

module.exports = reverse;
