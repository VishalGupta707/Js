let arr=[0,2,3,5];
console.log(arr[3]);

arr.push(6)
console.log(arr);
//[ 0, 2, 3, 5, 6 ]


arr.pop();

console.log(arr);
// [ 0, 2, 3, 5 ]


arr.unshift(9);
console.log(arr);
// [ 9, 0, 2, 3, 5 ] insert in the front by shifting rest

 
arr.shift()
console.log(arr);
// [ 0, 2, 3, 5 ]
 


console.log(arr.indexOf(9));
// -1

const newarr= arr.join()
console.log(typeof newarr);
// string
// join convert the array into string


//+++++++++++Slice and Splice +++++++=====

const newa=[1,2,3,4,5]
console.log(newa.slice(1,3));
//[ 2, 3 ]-> without including the last index
console.log(newa);
//[ 1, 2, 3, 4, 5 ]-> No change in the original array




console.log(newa.splice(1,3));
// [ 2, 3, 4 ]-> Includes the last index too and changes the array itself
console.log(newa);
//[ 1, 5 ]
//changes the array also


