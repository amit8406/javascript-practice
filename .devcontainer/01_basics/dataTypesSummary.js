const score = "1500"
const scr = 100.50
const isLogged = true

const temp =null
console.log(Number(scr))
const id = Symbol('124')
const id2 = Symbol('124')
let user;
console.log(isLogged)
console.log(Number(score))
console.log(temp)
console.log(user)

console.log(id===id2);

const movies =["Dhurnadhar", "War", "Criminal Justice"]

let myObj = {
    name: "Sanjeev",
    age: 25,
}

const myFun = function(){
    console.log("Hello Chcha ji");
}

console.log(typeof(isLogged))
console.log(typeof(movies))
console.log(typeof(temp))
console.log(typeof(score))
console.log(typeof(scr))
console.log(typeof(id))
console.log(typeof(id2))
console.log(typeof(myFun))
console.log(typeof(myObj))

/*
ReturnTypes:
isLogged: boolean
movies: object
temp: object
score: string
scr: number
id: symbol
id2: symbol
myFun: function

*/


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack and Heap Memory------

let myVar = "AmitTiparadi"
let myvar2 = myVar
myvar2 = "chai aur code"

console.log(myVar);
console.log(myvar2);

let userOne = {
    name: "Amit Test",
    email: "amit.test@yopmail.com"
}

let userTwo = {
    name: "Sagar Test",
    email: "sagar@yopmail.com"
}

let userThree = userOne

userThree.email = "amit.tiparadi@yahoo.com"
console.log(userThree)

console.log(userOne.email)
console.log(userThree.email)
