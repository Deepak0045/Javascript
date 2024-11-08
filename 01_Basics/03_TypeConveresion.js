let score = 33
console.log(typeof score);

let score2 = '33ab'
console.log(typeof score2);

let valueInNumber = Number(score2)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// '33' ==> 33
// '33abc' ==> NaN
// true ==> 1

let someNumber = 33

let stringnumber = String(someNumber)
console.log(stringnumber); //33
console.log(typeof(stringnumber));   // string


console.log(' *********************** Operations **************************')

let value = 3
let negvalue = -value
console.log(negvalue);


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%3);

let str1 = 'Hello'
let str2 = 'Deepak'
let str3 = str1 + " "  + str2
console.log(str3);


console.log('1' + 2);       // 12
console.log(1 + '2');       // 12
console.log('1' + 2 + 2);   // 122
console.log(1 + 2 + '2');   // 32

// JS is High 

console.log( 3 + 4 * 5 % 3);    // 5 Not a good practice
console.log( (3 + 4) * 5 % 3);  // Define which operation you want to perform first

console.log(true);
console.log(+true);

// Prefix and  postfix
gameCounter = 100
// ++gameCounter
// console.log(gameCounter); 101

// gameCounter++
// console.log(gameCounter); 101

// in above cases ans is 101 but its not always the same

console.log('JavaScript Demo: Expressions - Increment operator');

let x = 3       // Here, x is set to 3.
let y = x ++

// x++ is a post-increment operator, which means it will return the current value of x before incrementing it.
// So, y will be assigned the current value of x (which is 3), and then x will be incremented by 1


// After the operation:

// Now, x is 4 because it was incremented.
// y is 3 because it was assigned the original value of x (before incrementing).

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3

// This outputs x:4, y:3 because:
// x is 4 (it was incremented).
// y is 3 (it got the value of x before the increment happened).



let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);