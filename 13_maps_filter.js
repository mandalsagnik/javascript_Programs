// Maps
const map=new Map()

map.set('IN',"India")
map.set('FR',"France")
map.set('USA',"United State Of America")

// console.log(map);


// filter

//  const newNum=[1,2,3,4,5,6,7,8,9,10]
//  const new2Num=newNum.filter((val)=> val > 4)
//  console.log(new2Num);

const newNum=[1,2,3,4,5,6,7,8,9,10]                   
const new2Num=newNum.filter((val)=> {                 // if we use scope {},then we use return
  return val > 4
})     
//  console.log(new2Num);

const books=[
   {
       title:'Book One',genre:"Non fiction",publish:1992
   },
   {
       title:'Book two',genre:"geo",publish:1993
   },
   {
       title:'Book three',genre:"beng",publish:1994
   },
   {
       title:'Book four',genre:"chem",publish:1995
   },
   {
       title:'Book five',genre:"phy",publish:1996
   },
   {
       title:'Book six',genre:"math",publish:1997
   },
   {
       title:'Book seven',genre:"history",publish:1998
   }
]
//  const userBooks=books.filter((bk)=>bk.genre==='history')
const userBooks=books.filter((bk)=>bk.publish<=1997)
// console.log(userBooks);

//filter map

const new1num=[1,2,3,4,5,6,7,8,9,0]
const newnums=new1num
               .map((num)=>num *10)
               .map((num)=>num+1)
               .filter((num)=>num>=50)

console.log(newnums);