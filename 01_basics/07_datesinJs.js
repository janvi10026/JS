// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreateDate = new Date(2025,0,25)
// console.log(myCreateDate.toDateString());

let myCreateDate = new Date(2025,0,25,8,45)
// console.log(myCreateDate.toLocaleString());

// let myCreateDate = new Date("12,30,2025")  //month,date,year
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date ()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})
