// standard comparison
console.log(2 > 1);          // true: 2 is greater than 1
console.log(2 >= 1);         // true: 2 is greater than or equal to 1
console.log(2 < 1);          // false: 2 is not less than 1
console.log(2 == 1);         // false: 2 is not equal to 1
console.log(2 != 1);         // true: 2 is not equal to 1

console.log('Now the confusing ones');

// Comparisons with Type Conversion
// These comparisons can be surprising because JavaScript tries to convert types to make sense of comparisons.

console.log('2' > 1);        // true: '2' is converted to the number 2, so 2 > 1
console.log('02' > 1);       // true: '02' is converted to 2, so 2 > 1


console.log('null');
// null Comparisons
// The null value in JavaScript is handled in a way that can be confusing in comparisons.


console.log(null > 0);       // false: null is not greater than 0
console.log(null < 0);       // false: null is not less than 0
console.log(null == 0);      // false: null is only loosely equal to `undefined`, not to 0
console.log(null >= 0);      // true: in non-strict comparisons, `null` is converted to 0, so 0 >= 0 is true

// The reason null >= 0 is true while null > 0 is false is due to JavaScript's type conversion rules 
// in relational comparisons. When using >=, JavaScript converts null to 0, 
// so the comparison becomes 0 >= 0, which is true. However, null is neither greater than nor less than 0 on its own.



console.log('undefined comparison');

// undefined Comparisons
// The undefined value is even more unpredictable in comparisons.

console.log(undefined == 0); // false: undefined is not equal to 0
console.log(undefined > 0);  // false: undefined is not greater than 0
console.log(undefined < 0);  // false: undefined is not less than 0

// JavaScript does not convert undefined to any number when comparing it to another value. 
//undefined is only loosely equal to null but not to numbers or strings.

// Loose vs. Strict Equality
// Finally, the difference between == (loose equality) and === (strict equality):

console.log('2' == 2);       // true: with loose equality, JavaScript converts '2' to a number, making it equal to 2
console.log('2' === 2);      // false: with strict equality, no type conversion occurs, so a string is not equal to a number
