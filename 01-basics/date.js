let date=new Date();
//console.log(date);
// 2025-09-16T07:22:56.821Z

//console.log(date.toString());
// 2025-09-16T07:23:24.163Z
// Tue Sep 16 2025 07:23:24 GMT+0000 (Coordinated Universal Time)

console.log(date.toDateString);
// [Function: toDateString]

console.log(typeof date);
//object

let myCreatedDate=new Date(2025, 8, 16);
                        // year, Month, date
                        // Month start from 0 -> jan
console.log(myCreatedDate.toString());
// Thu sept 16 2025

console.log(myCreatedDate.toLocaleString());
// 9/16/2025, 12:00:00 AM

let newDate=new Date("09-16-2025")
console.log(newDate.toLocaleString());
// 9/16/2025, 12:00:00 AM

console.log(Date.now());
// 1758008689453 -> current time in milli seconds


console.log(Date.now()/1000);
// 1758008689.453 -> current time in seconds



console.log(Math.floor(Date.now()/1000));
// 1758008689
// current time in seconds 
// Using Math.floor to avoid the decimal value


let latestDate=new Date();
console.log(latestDate.getDay());
