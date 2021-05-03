/*
Author: Bryan Sullivan
Date:March 2nd 2021
Application for Kargo
*/


let Values = process.argv.slice(2);//assigning an array for these argument values
let phoneticEquivalent = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];//This is used as a key for being able to get the phonetic equivalent
let NumOfString = [];//this is going to be the return value
for(x in Values){//iterate through all of the arguments
let str = "";//base string which will be used to add all phonetic equivalent values in a individual argument
for(y in Values[x]){// for loop to traverse throughout each digit place
str+= phoneticEquivalent[parseInt((Values[x])[y])]
}
NumOfString.push(str)//allows to append the phonetic equivalent
}
console.log(NumOfString.toString())//this prints out the result of the argument to their word equivalent