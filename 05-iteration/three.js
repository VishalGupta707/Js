/*
TO Iterate in map use for in loop and to iterate in array use for of
*/ 

const myobject={
    js:"Javascript",
    cpp:'C++',
    rb:'Ruby'
}


for (const key in myobject) {
    //console.log(key);  
    // js cpp rb
}

for (const key in myobject) {
   // console.log(myobject[key]);
//     Javascript
// C++
// Ruby
    
}


const arr=["js","cpp","java","py"]

for (const key in arr) {
    console.log(key);
    // This gives key of array as 0,1,2,3 output
    // But in for of it gives value of array
}

for (const key in arr) {
    console.log(arr[key]);
// js
// cpp
// java
// py
}