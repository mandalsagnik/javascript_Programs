const promiseOne=new Promise(function(resolve,reject){
    // do an async task
    // db calls,crypography,network
    setTimeout(function(){
        console.log('Anyns task is complete');
        resolve()

    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})
// other method
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Anyns task 2 is complete');
        resolve()

    },1000)
}).then(function(){
    console.log("Promise consumed 2");
})

// data consumtion
const promiseThree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"sagnik",email:"sagnik@mail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"sagnik",password:'123'})

        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript",password:'123'})

        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})
async function consumePromiseFive(){
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


fetch('https://api.github.com/users/mandalsagnik')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>console.log(error));