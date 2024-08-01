const myNums =[1,2,3]
// const myTotal=myNums.reduce(function(acc,currnval){
//     console.log(`acc:${acc} and currentval :${currnval}`);
//     return acc + currnval
// },0)
 
const myTotal=myNums.reduce((acc,currentval)=>(acc + currentval),0)

// console.log(myTotal);

const shoppingCart=[
    {
        courseName:"javascipt",
        Price:999
    },
    {
        courseName:"python",
        Price:1999
    },
    {
        courseName:"cpp",
        Price:799
    },
    {
        courseName:"ruby",
        Price:9999
    },
]
const totalPrice =shoppingCart.reduce((acc,item)=>(acc + item.Price),0)
console.log(totalPrice);