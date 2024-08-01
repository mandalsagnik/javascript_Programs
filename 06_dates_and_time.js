let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);   //Object


let myCreatedDate=new Date(2024,0,25)   // 0 ->refers to jan month if is single digit
console.log(myCreatedDate.toDateString());  // specific date

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{weekday:"long"}))

