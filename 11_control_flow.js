const userloggedin =true
const debitcard =true
const loggedInFromGoogle = false
const loggedInFromEmail=true

if (userloggedin && debitcard) {
    // console.log("Allow to buy");
    
}
if (loggedInFromGoogle || loggedInFromEmail) {
    // console.log("User logged in");
    
}
//*************************** switch*****************************************8 */
  const month =3
  switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
  
    default:
        console.log("default case match");
        break;
  }

  //********************** truthy & falsy Values *************************** */
  // falsy
  // false,0,-0,Bigint 0n,"",null,undefined,NaN

//   truthy
//  "0","false"," ",[],{},function(){}



// object is empty or not 
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

// nulish Coalescing Operator (??): null undefined

// val1=5 ?? 7                 //7
// val1= null ?? 10            //10
// val1=undefined?? 10          //10
val1= null ?? undefined         // undefined

console.log(val1);


// ternary operator

// condition ? true : false

const iceprice =100
iceprice >= 80? console.log("greter the 80") : console.log("less the 80")


