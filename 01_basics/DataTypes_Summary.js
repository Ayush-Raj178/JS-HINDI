// # Primitive

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLogged = false
const outsidetemp = null
let userMail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 374648448384n


// # refrence type(Non primitive)

// Array, Object, Functions

const heros =["shaktiman","naagraj","doga"]
let myObj = {
    name: "ayush",
    age: 222,
}


const myFunction = function(){
    console.log("Hello World!");
    
}

console.log(typeof anotherId);

//*************************************************************
//***************************** # Memory***********************

// # Stack (Primitive) = it provides copy,
// # Heap (Non-Primitive)= it provides refrence that change in original value.


let myYoutubename = "Oggyy11_yt"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi: "user@sbi"
}

let userTwo = userOne

userTwo.email = "ayush@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);




