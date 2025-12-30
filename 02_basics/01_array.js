// array

const myArr = [0,1,2,3,4,5]
const heros = ["Superman","Batman","Spider-Man"]

console.log(myArr[4]);


// Array methods

myArr.push(8) //add elememnts in the end
myArr.pop() //remove last element


myArr.unshift(9) //add start
myArr.shift() // remove first element

console.log(myArr.includes(4)); // find the no. that is there or not by show the result (true/false)
console.log(myArr.indexOf (3));

const newArr = myArr.join()
console.log(newArr);

console.log(myArr);


// slice,splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);