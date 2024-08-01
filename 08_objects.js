// Object literls

const Jsuser={
    name :"Sagnik",
    "full name":"Sagnik Mandal",
    age: 21,
    location:"Malda",
    email:"sagnikmandal369@gmail.com",
    isLoggedIn:false,
    lastLoginDayes:["Monday","Friday"]

}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
//console.log(Jsuser[email]);               // give this error bcz in email there is no " "
//console.log(Jsuser.full name);           // can not use
// console.log(Jsuser["full name"]);
Jsuser.email="sagnik123@gmail.com"        // update the mail
// Object.freeze(Jsuser)                 //the jsuser is loacked this is next time can not be change
Jsuser.email="sagnik345@gmail.com"
// console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("Hello JS User");
}
Jsuser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);   //this. is the tachnique

}
// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingTwo());


const tinderUser={}
tinderUser.id="12345"
tinderUser.name="ram"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"abc123@gmail.com",
    fullname:{
        Userfullname:{
            firstname:"Sagnik",
            lastname:"Mandal"
        }

    }
}
// console.log(regularUser.fullname.Userfullname.firstname);

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}

// const obj3=Object.assign(obj1,obj2)
const obj3={...obj1,...obj2}            // another process of concantinate two objects
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


const course={
    coursename:"js",
    price:"999",
    couseinstructor:"hitesh"
}
// console.log(course.couseinstructor)

const {couseinstructor:instructor}=course    // this is object de structure
console.log(instructor);