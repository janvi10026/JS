// singleton
// object.create

//object literals


const mySym = Symbol("key1")

const JsUser = {
    name: " janvi",
    "full name": "Janvi Patwa" ,
    [mySym]: "mykey1",
    age: 22,
    location: "jhansi",
    email: "janvi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
 console.log(JsUser["full name"]);
 console.log(JsUser[mySym]);

 JsUser.email = " janvi@outlook.com"
//  Object.freeze(JsUser)
JsUser.email = "janvi@chatgpt.com"
console.log(JsUser);

 JsUser.greeting = function(){
    console.log('hello js user,${this.name}');
 }
 
 console.log(JsUser.greeting());
  console.log(JsUser.greetingTwo());