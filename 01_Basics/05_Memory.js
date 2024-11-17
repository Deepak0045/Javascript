// Stack (Primitive types) vs Heap (Non-Primitive types)

// Primitive types (like strings, numbers, booleans) are stored on the stack
let myName = 'Deepak'; // 'myName' is stored on the stack


// Copying primitive types creates a new space in the stack
let anotherName = myName; // 'anotherName' is also stored on the stack as a copy of 'myName'
anotherName = 'Tony Stark'; // Changing 'anotherName' does NOT affect 'myName'

// Logging the values to observe that changing 'anotherName' didn't change 'myName'
console.log(anotherName); // Output: 'Tony Stark'
console.log(myName); // Output: 'Deepak'


// Explanation:
// - 'myName' and 'anotherName' hold separate values on the stack.
// - Changing 'anotherName' doesn't affect 'myName' because each has its own copy in memory.


// Non-primitive types (like objects and arrays) are stored on the heap
let userOne = {
    email: 'user@gmail.com',
    upi: 'user@ybl'
}; // 'userOne' object is stored on the heap, and the variable holds a reference to it


// Copying non-primitive types (objects) only copies the reference to the heap, not the actual object
let userTwo = userOne; // 'userTwo' holds a reference to the same object as 'userOne' on the heap

// Modifying the object through one reference affects the other since both point to the same object in heap memory
userTwo.email = 'deepak@google.com'; // Modifying 'email' through 'userTwo'


// Logging the values to observe that changing 'userTwo' affects 'userOne' as well
console.log(userOne.email); // Output: 'deepak@google.com'
console.log(userTwo.email); // Output: 'deepak@google.com'


// Explanation:
// - 'userOne' and 'userTwo' point to the same object in the heap.
// - Changing 'userTwo' affects 'userOne' because both references point to the same object in heap memory.
