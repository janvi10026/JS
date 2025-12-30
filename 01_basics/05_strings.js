const name = "Janvi"
const repoCount = "50"

console.log('Hello my name is ${name} and my repo count is ${repoCount}');
 
const gameName = new String('Janvi-i')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2) );
console.log(gameName.indexOf('n') );

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString =  gameName.slice(-5,0)
console.log(anotherString);

const newStringOne = "   Janvi  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://janvi.com/janvi%20patwa"
console.log(url.replace('%20','_'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));
