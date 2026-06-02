const myArr = [2,4,5,7,8,9,45,56,78,90]
console.log(myArr)
console.log(myArr.length); //10


// const myArr2 = new Array(2,5,7,5,8,9)
// console.log(myArr2)
// console.log(myArr2[3])

//methods:

myArr.push(100)    // adds 100 to the end of the array
console.log(myArr)
myArr.unshift(1)   // adds 1 to the beginning of the array
console.log(myArr)
myArr.pop()
console.log(myArr)       // removes the last element of the array
myArr.shift()
console.log(myArr)       // removes the first element of the array
// myArr.splice(2, 3)     // removes 3 elements starting from index 2
// console.log(myArr)
myArr.splice(14, 0, 10083) 
console.log(myArr)       // adds 10083 at index 14 without removing any element
myArr.splice(12,0,9999)    // adds 1000 at index 10 without removing any element
console.log(myArr)