function myName(){
console.log("A");
console.log("M");
console.log("i");
console.log("T");
}
//myName()
//--------------------------------------

// function addNumbers(num1,num2){
//  console.log(num1 + num2);
// }

function addNumbers(num1,num2){
    // let result = num1 + num2;
    return num1 + num2
 
}
const result = addNumbers(4,8)
// console.log("Result: "+result);

function loginUserMessage(username = "Sagar"){
    if(!username){
        console.log("Please enter a username");
    }
    return `${username} is logged in successfully!`
}

console.log(loginUserMessage("Amit")); //Amit is logged in successfully!
console.log(loginUserMessage()); //undefined is logged in successfully!
