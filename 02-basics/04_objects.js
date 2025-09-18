
// const user=new Object()  OR cost user={} both are object
const user={}
user.id=7;
user.name="vishal";
console.log(user);
//{ id: 7, name: 'vishal' }

const regularUser={
    email:"vishal@gmail.com",
    fullName: {
        userfullName:{
            firstName:"Vishal",
            lastName:"Gupta"
        }
    }
}

console.log(regularUser);
/*
{ id: 7, name: 'vishal' }
{
  email: 'vishal@gmail.com',
  fullName: { userfullName: { firstName: 'Vishal', lastName: 'Gupta' } }
}
*/


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1 , obj2};
// console.log(obj3);
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


const obj3= Object.assign({},obj1,obj2);
// {} is treated as target and obj1, obj2 is treated as source
// {} is optional as we are returning the new object therefore we can
//  store it in different {}


console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const obj4={...obj1,...obj2}
console.log(obj4);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } 
// spread and combine


 console.log(Object.keys(user));
// [ 'id', 'name' ]

console.log(Object.values(user));
// [ 7, 'vishal' ]



const course={
    courseName:"JS",
    price:"0"
}

course.courseName;
// Accessing this using .(dot) if used many times is not good 

const {courseName}=course
console.log(courseName);
// JS 
// This is known as destructuring

