// # singleton
// Object.create (object constructor)


// # OBJECT Literals

const mysym = Symbol("key1")

const JsUser = {                   //(object literals)
    name: "Ayush",
    "full name": "Ayush raj",
    [mysym]: "mykey1",
    age: 18,
    location: "Bihar",
    email: "Ayus@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["monday","Tuesday","Saturday"]
} 

// console.log(JsUser.location);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

// Object.freeze(JsUser)
JsUser.age = 23
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello Ayush");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Ayush, ${this.email}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





