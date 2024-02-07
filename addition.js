// console.log('Addition');

// // Creating a function 
// function addition(a,b) {
//     return a+b 
// }

// //Allows us to export our function
// module.exports = {
//     Addition
// }

// Alternative way: If there is one object you need to export, you can make use of this method
exports.addition = (a, b)=> {
    return a + b
}