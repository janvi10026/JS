 function sayMyName(){
    console.log("J");
    console.log("A");
    console.log("N");
    console.log("V");
    console.log("I");
 }

//  sayMyName();

// function addTwoNumbers(number1, number2){
//       console.log(number1 + number2);


function addTwoNumbers(number1, number2){
   //   let result = number1 + number2;
   //     return result;
   return number1 + number2
}

const result =addTwoNumbers(5,7);

// console.log("Result:",result);


function loginUserMessage(username){
   if(username === undefined){
      console.log("Please enter a username");
      return;
   }
   return `${username} just logged in`
}
console.log(loginUserMessage("janvi"));


function calaculatorCartPrice(val1,val2,...num1){
   return num1
}

console.log(calaculatorCartPrice(222,300,500));
  