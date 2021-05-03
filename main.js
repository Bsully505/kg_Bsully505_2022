/*
Author: Bryan Sullivan
Date:March 2nd 2021
Application for Kargo
*/


let Values = process.argv.slice(2);//assigning an array for these argument values
console.log(Values);//This is to show all of the arguments passed on to the class

let NumOfString = [];//this is going to be the return value
for(x in Values){//iterate through all of the arguments
let str = "";//base string which will be used to add all phonetic equivalent values in a individual argument
for(y in Values[x]){// for loop to traverse throughout each digit place
console.log((Values[x])[y])//Views the current digit in respect to the digit place
}
console.log();//used to separate each integer value from the argument
}