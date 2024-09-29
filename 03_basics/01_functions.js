function myNmae(){
    console.log("A");
    console.log("y");
    console.log("u");
    console.log("s");
    console.log("h");
    
}


// myNmae()


// function add2Numbers(number1, number2){
//     console.log(number1 + number2);
     
// }

function add2Numbers(number1, number2){
//    let result = number1 +number2
//     return result
        return number1 + number2
     
}

const result = add2Numbers(5,3)
// console.log(result);


function loginUser(username = "sam"){
    if(!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `
}

// console.log(loginUser("Ayush"))

// console.log(loginUser());


function calculateCartPrice( ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));
const user = {
    username: "Ayush",
    price: 199
}

function handelobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handelobject(user)
handelobject({
    username: "sam",
    price: 499
})



const myArr = [200,400,600,100]
function returnValue(getArray){
    return getArray[1]
}

console.log(returnValue(myArr));

