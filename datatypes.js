// the types of data and how to use each and every data type

// to check the type of variable , we van use console.log(typeof variableName)

// string - it is a sequence of characters
let userName = 'Sahil'
console.log(userName)

// number

let age =  21

// boolean only true or false

let isProductInCart = false
console.log(isProductInCart)

// undefined -- we only define variable not its value
let value 
console.log(typeof value)


// null

let noValue = null
console.log(noValue)


// Object

const myDetails = {name: "Sahil" , age: 21 , Degree: "Engineering"}
console.log(myDetails)

// array

const arrayOfNumber = [1,2,3,4]
console.log(arrayOfNumber)
console.log(typeof arrayOfNumber)

// function

function add(a,b){
    return a+b
}
console.log(add(2,3))