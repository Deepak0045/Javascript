const account_Id = 12345
let account_Email = 'abc@gmail.com'
var account_password = '99999'
accountcity = 'Mumbai'

// account_Id = 1  // Not allowed because we cannot change const

account_Email = 'xyz@gmail.com'
account_password = '1234567890'
accountcity = 'Bengluru'
let account_state;  // undefined

console.log(account_Id);

/*
Prefer not to use var bacause of

*/


console.table([account_Id, account_Email, account_password, accountcity, account_state])

