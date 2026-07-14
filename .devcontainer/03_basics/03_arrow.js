const user = {
    username: "Amit",
    price :1500,

    WelcomeMessage: function(){
        console.log(`${this.username}, welcome to website and your price is ${this.price} `);
        console.log(this);
    }
}

// user.WelcomeMessage()
// user.username = "Ganesh"
// user.WelcomeMessage()
// console.log(this);
//here this in node points to the global object in node which is empty object and 
//in browser it points to window object.

// function chai(){
//     let username = "Sagar"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "Jeevan"
//     console.log(this.username);
// }

const chai = () =>{
    let username = "Jeevan"
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,5))


// const addTwo = (num1, num2) => num1 + num2  //implicit return

const addTwo = (num1, num2) => ({username : "Ramesh"}) // For returning object we need to add parathesis
console.log(addTwo(4,5))