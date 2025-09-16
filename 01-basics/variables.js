const accountId=123
let accountEmail="vishal@gmail.com"
var accountPassword="12345"
accountCity="Varanasi"

// accountId=1 Not allowed as it declared as const

// var is not used because of scope issue
// var variables are function-scoped, not block-scoped.
// var is hoisted to the top of its scope and initialized with undefined.
// console.log(a); // undefined (no error!)
// var a = 5;



console.table([accountId,accountEmail,accountPassword,accountCity])

