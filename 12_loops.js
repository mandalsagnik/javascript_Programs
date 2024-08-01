// for loop
for (let i = 1; i <=10; i++) {
    const element = i;
    // console.log(element);
    
}

// table of 1 to 10
for (let i = 1; i <=10; i++) {
    for (let j = 1; j <=10; j++) {
        // console.log(i + '*' + j + '=' + i*j );
        
    }
    
}

let myarray=["flash","batman","superman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
}

// break and continue
for (let index = 1; index <=20; index++) {
    if (index==5) {
        // console.log("5 is detected");
        break
    }
    // console.log(`value of index is ${index}`);
}  


for (let index = 1; index <=20; index++) {
    if (index==5) {
        // console.log("5 is detected");
        continue
    }
    // console.log(`value of index is ${index}`);
    
}


let array=["flash","batman","superman"]
let arr=0
while (arr <array.length) {
    // console.log(`value of array ${array[arr]}`);
    arr++
    
}


let score=1
do {
    // console.log(`score is ${score}`);
    score++
} while (score<=10);


let score1=11
do {
    // console.log(`score1 is ${score}`);
    score1++
} while (score1<=10);

// for of 

const newarray=[1,2,3,4,5]
for (const num of newarray) {
    // console.log(num);
    
}

const greetings="Hello World!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}



//for in  ,.........basically using for object map bcz for of not use in map object
const myobject={
    js:"Javascript",
    cpp:"C++",
    rb:"Ruby"
}
for (const key in myobject) {
    // console.log(`${key} shortcut for ${myobject[key]}`);

}


// forEach
const coding=["js","python","cpp","c","ruby"]
coding.forEach(element => {
    // console.log(element);
});

coding.forEach((element,index,arr) => {
    // console.log(element,index,arr);
});

// mostly using in database
const mycodding=[
    {
        LanguageName:"python",
        LanguageFileName:"Python"
    },
    {
        LanguageName:"javascript",
        LanguageFileName:"js"
        
    },
    {
         LanguageName:"c++",
        LanguageFileName:"cpp"
    }
]
mycodding.forEach((item)=>{
    // console.log(item.LanguageName);
})


