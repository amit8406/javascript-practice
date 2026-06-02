
//object literals
const sign = Symbol("Code1");


const JsUser = {
    name: "Amit Tiparadi",
    age: 34,
    [sign]: "DF@3467",
    country: "India",
    city: "Pune",
    lastLoggedInDays: ["Sunday", "Friday", "Monday"]
}

JsUser

console.log(JsUser["lastLoggedInDays"]) //Sunday;
console.log(JsUser[sign])
JsUser.country="USA";
//Object.freeze(JsUser);
JsUser.country="Italy"; //freeze the object to prevent any changes to it
console.log(JsUser.country),

JsUser.greeting = function(){
    console.log("Hello JS user");
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, I am from ${this.country}`);
    console.log(this.lastLoggedInDays);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());