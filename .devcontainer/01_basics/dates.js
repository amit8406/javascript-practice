//Dates

// let myDate  = new Date() // current date and time
// console.log(myDate.toString()); //Mon Jun 01 2026 10:37:14 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Mon Jun 01 2026
// console.log(myDate.toTimeString()); //10:37:14 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleDateString()); //6/1/2026
// console.log(myDate.toLocaleString());//6/1/2026, 10:37:14 AM

// let date = new Date(2026, 4, 1) // month is 0-indexed (0 = January, 5 = June)

// let date =  new Date("2026-04-15") //yy-mm-dd format
let date = new Date("05-27-2026") // mm-dd-yy format
console.log(date.toString()); //Fri May 01 2026 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString()); //Fri May 01 2026
console.log(date.toTimeString()); //00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(date.toLocaleDateString()); //5/1/2026
console.log(date.toLocaleString());//5/1/2026, 12:00:00 AM

let newTimeStamp = Date.now() // returns the number of milliseconds since January 1, 1970
console.log(newTimeStamp)
console.log(date.getTime()); // returns the number of milliseconds since January 1, 1970

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

console.log(newDate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
}));
