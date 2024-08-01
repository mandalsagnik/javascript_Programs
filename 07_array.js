const myArr=[0,1,2,3,4,5]
const myHeros=["saktiman","ironman"]

const myArr2=new Array(1,2,3,4)
// console.log(myArr[2]);

// methods

// myArr.push(16)
// myArr.push(3)
// myArr.pop()
// myArr.unshift(4)                  // add the number in first of the array....like push
// myArr.shift()                    // like pop ...which is the first element will be poped
// console.log(myArr.includes(9));    // the element present or not
// console.log(myArr.indexOf(9));    //-1 because the 9 element not present in the array
// console.log(myArr);

//****************slice and splice************************* */

// console.log("A",myArr);

const myn1=myArr.slice(1,3)

// console.log(myn1);
// console.log("B",myArr);

const myn2=myArr.splice(1,3)
// console.log(myn2);
// console.log("C",myArr);


//**********************************************array2******************** */

const marvel_heroes=["thor","ironman","spidarman"]
const dc_heroes=["superman","flash","batman"]

const allHeroes=marvel_heroes.concat(dc_heroes)
//console.log(allHeroes);

const all_new_heros=[...marvel_heroes,...dc_heroes]   //sprad operator  ..use like concatination

// console.log(all_new_heros);

const another_array=[1,2,2,[2,4,5],3,6,[6,8,[5,9,1]]]
const real_another_array=another_array.flat(Infinity)

// console.log(real_another_array);

console.log(Array.isArray("Sagnik")); // this is not array
console.log(Array.from("Sagnik"));   // convert it in array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

