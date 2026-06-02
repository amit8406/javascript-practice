//const whatsapp = new Object();  //singleton object

//const whatsapp2 = {} //non singleton object
const whatsapp = {}


whatsapp.name= "Bravo";
whatsapp.country = "India";
whatsapp.users= 2000000;
console.log(whatsapp);

const regularUser = {
    email: "amit.uxboost@gmail.com",
    fullName : {
        firstName: "Amit",
        lastName: "Tiparadi"
    }
}

console.log(regularUser.fullName.lastName)
//console.log(regularUser)

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}
const obj4 = {7:"g", 8:"h", 9:"i"}
// const obj3 = {obj1, obj2} //nested object
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2, obj4) //merging objects
// console.log(obj3)

const obj3 = {...obj1, ...obj2, ...obj4} //merging objects using spread operator
console.log(obj3)


const users = [
    {
    id : 1,
    name : "Amit",
    email : "amit.uxboost@gmail.com"
    },

    {
    id : 2,
    name : "Surabhi",
    email : "surabhi.uxboost@gmail.com"
    },

    {
    id : 3,
    name : "Sushant",
    email : "sushant.uxboost@gmail.com"
    },
]

console.log(users[0].name)

console.log(whatsapp)
console.log(Object.keys(whatsapp)) //returns an array of keys of the object
console.log(Object.values(whatsapp)) //returns an array of values of the object
console.log(Object.entries(whatsapp)) //returns an array of key-value pairs of the object
console.log(Object.hasOwn(whatsapp, "name")) //returns true if the object has the specified key
console.log(Object.hasOwn(whatsapp, "users")) //returns true if the object has the specified key
console.log(Object.hasOwn(whatsapp, "country")) //returns true if the object has the specified key
console.log(Object.hasOwn(whatsapp, "age")) //returns false if the object does not have the specified keyconsole.log(Object.hasOwn(whatsapp, "
console.log(Object.isExtensible)
console.log(Object.isExtensible(whatsapp)) //returns true if the object is extensible (can add new properties)

