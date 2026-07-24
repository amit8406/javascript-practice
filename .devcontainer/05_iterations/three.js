//for of

const array = [1, 3, 5, 6, 8]
for (const num of array) {
  //  console.log(num);

}

const greetings = "Hello World Javascript!"

for (const element of greetings) {
  //  console.log(`Each character is ${element}`);
}

const map =  new Map();
map.set('IN', "INDIA");
map.set('ENG', "ENGLAND");
map.set('CN', "CHINA");

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObject ={
    game1: 'NFS',
    game2: 'IGI',
    game3: 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
// }
