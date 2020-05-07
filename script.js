// Scope

// function sayHellp (){
//     var greeting = "Hello"
// }
// console.log(greeting);

// const isTrustWorthy = true;

// if(isTrustWorthy === true){
//     const secret = "I've had way to much coffee this morning"
//     console.log(secret);
//     isTrustWorthy === false; 
// }

// secret = "I woke up like thirty minutes ago"

// let isTrustWorthy = true;

// if(isTrustWorthy === true){
//     let secret = "I've had way to much coffee this morning"
//     isTrustWorthy = false; 
// }
// console.log("is it trustworthy?", isTrustWorthy)
// // console.log(secret)

// LIGHTNING EXERCISE 1
// Copy and paste the following code block into your file


// let sentenceBeginning = "The symtoms of Covid-19 are"
// const symtoms = ["cough", "fever", "exhaustion", "loss of sense of smell", "difficulty breathing"]
// const mySymtoms = [];
// // This loop will go through each symtom, concatenate it to our sentence, and push it into a new array of our own personal symtoms
// for(let i = 0; i < symtoms.length; i++){
//     sentenceBeginning += ` ${symtoms[i]}`
//     mySymtoms.push(symtoms[i])
// }


// Using the new variable keywords we just learned, troubleshoot this code so that it runs without errors
//LIGHTNING EXERCISE 2
// Copy and paste the following code block into your file

// let taco;
// function tacoTruck(shellType, toppings){
//   taco = `A ${shellType} taco with ${toppings}`
// }
// tacoTruck("crunchy", "chicken")
// console.log(taco)


// // Using the new variable keywords we just learned, refactor this code so that we can log what type of taco we ordered outside of the function without error messages

// functions

// function printTaco(shellType, toppings){
//     console.log(`A ${shellType} taco with ${toppings}`)
// }

// printTaco("Soft","nacho")
// printTaco("crunchy", "fish")
// printTaco("soft", "beef")

// // build sentence about tacos 
// // maker function 

// function buildTacoSentence(shellType, toppings){
//     const tacoSentence = `A ${shellType} taco with ${toppings}`
//     return tacoSentence;
// }

// const fishTacoSentence = buildTacoSentence("crunchy", "fish")
// console.log("This is the first function",fishTacoSentence)

// // convert to screaming
// // maker function
// function convertToScreaming(phrase){
//     return `${phrase.toUpperCase()}!!!!!!!!!!!`
// }
// const screamFishTaco = convertToScreaming(fishTacoSentence)
// console.log("this is the second function", screamFishTaco)
// // Print sentence to console
// function printPhraseToConsole(phraseToPrint){
// console.log("this is the third function",phraseToPrint)
// }
// printPhraseToConsole(screamFishTaco);

// function buildNameSentence(firstName, lastName){
//     const nameSentence = `${firstName} ${lastName}`
//     return nameSentence;
// }

// const nameSentence = buildNameSentence("Stephen", "Avila")
// console.log("Allow me to introduce myself, my name is",nameSentence)


// function greetAFriend(firstName, lastName){
//     if(firstName === "Dwayne" && lastName === "The Rock Johnson"){
//         return `If Ya Smelll`
//     } else {
//         return `Hello, ${firstName} ${lastName}`
//     }
// }

// const greeting = greetAFriend ("Stephen","Avila")
// const theRockGreeting = greetAFriend("Dwayne", "The Rock Johnson")
// console.log(greeting)
// console.log(theRockGreeting)

// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.
// Practice Chicken Monkey
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number
    if (currentNumber % 5 === 0  && currentNumber % 7 === 0) {
        console.log("Chicken") 
        // for the multiples of seven (7, 14, 21, etc.) print "Monkey"
    } else if (currentNumber % 7 === 0){
        console.log("Monkey")
    } else if (currentNumber % 5 === 0){
        console.log("CMPunk")
    } else {
        console.log(currentNumber)
    }
}
// For numbers which are multiples of both five and seven print "ChickenMonkey".
// Practice Battle of the Bands

// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.
//1st way or 3rd
let bandNumber = 1
// 2nd way
// let bandNumber = 0
const takeNumber = function (bandName) {
  //1 way
    return bandNumber++ + " " + bandName
// 2nd way
    //  bandNumber = bandNumber + 1
    // return `${bandNumber++}. ${bandName}`
// 3rd way
    // const bandOrder = `${bandNumber++}. ${bandName}`
    // return bandNumber
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];
// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

// The grill() function. Copy this into your JavaScript as well.

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};
// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.

for (let i = 0; i < foods.length; i++) {
  // run each food through the grill function
  grill(foods[i])
    
}
console.log(cookedFood)

// The learning objects of this exercise is to use iteration and string concatenation

// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

// Example output:

// The

// The walrus

// The walrus danced

// The walrus danced through

// The walrus danced through the

// The walrus danced through the trees

// The walrus danced through the trees in

// The walrus danced through the trees in the

// The walrus danced through the trees in the light

// The walrus danced through the trees in the light of

// The walrus danced through the trees in the light of the

// The walrus danced through the trees in the light of the moon ...

// Paste the following code into overly-excited.js

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp

        // buildMeUp += theWordArray[i] + " " 
        // //  or buildMeUp += `${theWordArray[i]} `
        // // Print buildMeUp to the console
        // console.log(buildMeUp)


        if( (i+1) % 3 === 0 && i !== 0){
            buildMeUp += `${theWordArray[i]}! `
            console.log(buildMeUp)
        } else{
            buildMeUp += `${theWordArray[i]} `
            console.log(buildMeUp)
        }
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)

// I want to use a question mark
addExcitement(sentence, "?")
// Example output:

// The

// The walrus

// The walrus danced?

// The walrus danced? through

// The walrus danced? through the

// The walrus danced? through the trees?

// The walrus danced? through the trees? in

// etc..

// Challenge: Multiple Punctuation
// Challenges are optional exercises that you can work once you've completed all the practice exercises and understand the concepts in them.

// Add a new argument to the function so that a developer can specify how many times the special character should be added.

// // I want to use a 4 asterisks
// addExcitement(sentence, "*", 4)
// Example output:

// The

// The walrus

// The walrus danced****

// The walrus danced**** through

// The walrus danced**** through the

// The walrus danced**** through the trees****

// The walrus danced**** through the trees**** in

// etc..