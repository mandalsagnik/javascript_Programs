const user={
    username:"Sagnik",
    Price:9999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

const one=()=> {                     // => arrow function
    let username="Sagnik"
    console.log(this);
}
// one()

// const addTwo=(num1,num2) =>{    //if we use {}then use return
//     return num1+num2
// }
// const addTwo =(num1,num2) => num1+num2

// const addTwo =(num1,num2) => (num1+num2)   // if do not use{} ,if use () ,then do not want to write return
const addTwo =(num1,num2) => ({user:"Sagnik"}) // if we use object so that we use (),then if we not use it comes undefined


console.log(addTwo(4,6));