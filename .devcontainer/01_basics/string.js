const name = "Amit"
const rapCount = 40

//String interpolation
console.log(`Hello my name is ${name} and my repo count is ${rapCount}`)

const Company = new String("Virtusa-qa")
// // console.log(Company)
// // console.log(Company[5])
// // console.log(Company.toUpperCase())
// // console.log(Company.toLowerCase())
// console.log(Company.charAt(5))
// console.log(Company.indexOf('t'))
const newStr= console.log(Company.substring(0,3))
console.log(newStr)

const c = Company.slice(-10,-3)
console.log(c)

const d = "   amit    "
console.log(d)
console.log(d.trim())
console.log(d.trimStart())
const e = "Amit-QA-D-SDET"
console.log(e.split('-'))