function addTwoNum(num1,num2){   // num1,num2 ->parameters
    console.log(num1+num2);
}

addTwoNum(5,7)                  // 5,7 .... are arguments

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());        // return undefined bcz in the argument we do not pass any value
// console.log(loginUserMessage("Sagnik")); 

function loginUserMessage(username){
    if(!username){
        console.log("Please enter your username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());

function calculateCartPrice(...num){        //rest operator
    return num
}
// console.log(calculateCartPrice(200,300,500));

const user={
    username:"Sagnik",
    Price:3999
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.Price}`);
}
// handleObject(user)
handleObject({
    username:"Sam",
    Price:222
})

const myNewArray=[200,255,855]
function returnSecondaryArray(getArry){
    return getArry[1]
}
console.log(returnSecondaryArray(myNewArray));
