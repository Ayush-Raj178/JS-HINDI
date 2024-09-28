// const userOne = new Object()
const userOne = {}

userOne.id = "123abc"
userOne.name = "ayush"
userOne.isLoggedIn = false

// console.log(userOne);

const myUser = {
    name: "Ayush Raj",
    fullname: {
        userfullname:{
            firstname: "Ayush",
            lastname: "Raj"
        }
    }
    ,email: "Ayush123@gmail.com",
    age: 18,
    password: 12345
}

// console.log(myUser);
// console.log(myUser.fullname.userfullname.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@hddd.com"
    },
    {
        id: 1,
        email: "h@hddd.com"
    },
    {
        id: 1,
        email: "h@hddd.com"
    },
]


users[1].email

// console.log(userOne);


// console.log(Object.keys(userOne));
// console.log(Object.values(userOne));
// console.log(Object.entries(userOne));


console.log(userOne.hasOwnProperty('isLogged'));


const course = {
    name: "javascript",
    price: "999",
    faculty: "Ayush"
}

// console.log(course["name"]);

const {faculty: teacher} = course    // destructure of object
console.log(teacher);


// API

// {
//     "name": "Ayush",
//     "coursename": "js",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
