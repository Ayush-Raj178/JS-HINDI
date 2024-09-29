const user = {
    name: "Ayush",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.name} welcome to website`);
        // console.log(this);
        
    }

 }
// user.welcomeMessage()

// user.name = "sam"
// user.welcomeMessage()
// console.log(this);


// function one () {
//     let name = "Ayush"
//     console.log(this.name);
    
// }
// one()

// const chai = function() {
//     let name = "Ayush"
//        console.log(this.name);
// }
// chai()


const chai = () => {
    let name = "Ayush"
       console.log(this.name);
}

// chai()

//Explicit(return)

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>   num1 + num2


//implicit
// const addTwo = (num1, num2) =>   (num1 + num2)

const addTwo = (num1, num2) =>   ({name: "ayush"})


console.log(addTwo(5,4))


