const name="sagnik"
const repoCount=50

// console.log(name+ repoCount +"value");
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName =new String('sagnik-sm')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.indexOf('k'));

const newString =gameName.substring(0,4)
console.log(newString);

const anotherstring=gameName.slice(-8,3)
console.log(anotherstring);

const newStringOne="   sagnik  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://www.google.com/google%20open"
console.log(url.replace('%20','-'));