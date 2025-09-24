const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.map( (num) => num*10)

// console.log(newNums);
/*[
  10, 20, 30, 40,  50,
  60, 70, 80, 90, 100
]
*/


// +++++++Chaining+++++++++++++=

const newNums= myNumbers.map((num) => num*10).map( (num) => num+1)
console.log(newNums);
/*[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
 in second map the updated value from first is passed 
 we can do any no. of chaining map with filter or anything
*/