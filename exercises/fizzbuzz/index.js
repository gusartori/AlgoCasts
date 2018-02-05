// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    // for(let i=1;i<=n;i++){
    //     if(i%3==0 && i%5==0){
    //         console.log("fizzbuzz");
    //     } else {
    //         if(i%3==0){
    //             console.log("fizz");
    //         } else {
    //             if(i%5==0){
    //                 console.log("buzz");
    //             } else {
    //                 console.log(i);
    //             }
    //         }
    //     }
    // }
    for (let i = 1; i <= n; i++) {
        if(i%3===0 && i%5===0){
            console.log('fizzbuzz');
            continue;
        }
        if(i%3===0){
            console.log('fizz');
            continue;
        }
        if(i%5===0){
            console.log('buzz');
            continue;
        }
        console.log(i);
    }

}

// class Main {
//     public static void main(String[] args) {
//         for(int i = 1; i<=15; i++){
//             if(i%3==0&&i%5==0){
//                 System.out.println("fizzbuzz");
//                 continue;
//             }
//             if(i%3==0){
//                 System.out.println("fizz");
//                 continue;
//             }
//             if(i%5==0){
//                 System.out.println("buzz");
//                 continue;
//             }
//             System.out.println(i);
//         }
//     }
// }

module.exports = fizzBuzz;
