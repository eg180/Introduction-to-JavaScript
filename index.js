/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18
var age = 19

if (age >= votingAge) {
    console.log("True");
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var currentGirlfriend = "Katie"

var newGirlfriend = "Delphine"

if (currentGirlfriend !== newGirlfriend) {
    currentGirlfriend = newGirlfriend;
    console.log(currentGirlfriend);
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


var year = "1999"

var convertedYear = Number(year)


console.log(convertedYear)
console.log(typeof convertedYear)

//Task d: Write a function to multiply a*b 

function multiply(a, b) {
    result = a * b;
    return result;
}

multiply(5, 2)

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function humanYearsToDogYears(humanYears) {
    convertedDogYears = humanYears * 7;
    return convertedDogYears;
}

humanYearsToDogYears(40)



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function poundsToFeed(weight, age) {

    if (age >= (2/12) && age <= (4/12)) {
        console.log((weight*.10));
    } else if (age > (4/12) && age <= (7/12)) {
        console.log((weight*.05));
    } else if (age >= (7/12) && age < (1)) {
        console.log(weight*.04);
    } else if (age === (4/12) && age === (4/12)) {
        console.log((weight*.05));
    } else if (age === (4/12)) {
        console.log(weight*.04);
    } else if (age === (4/12) && age === (4/12)) {
        console.log((weight*.05));
    } else if (age >= 1){
        if (0 <= weight && weight <= 5) {
            console.log(weight*.05);
        } else if (weight >= 6 && weight <= 10) {
            console.log(weight*.04);
        } else if (weight >= 11 && weight <= 15) {
            console.log(weight*.03);
        } else {
            console.log(weight*.02);
        }
    }
 
}

poundsToFeed(15, 1)



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

const weapons = ["rock", "paper", "scissors"]


function rockPaperScissors(myWeapon) {


    var indexNum = Math.floor(Math.random() * 3);
    
    computerWeapon = weapons[indexNum]

    console.log(indexNum)
    console.log(myWeapon)
    console.log(computerWeapon)

    if (computerWeapon == "rock") {

        if (myWeapon == "rock") {
            console.log("It's a draw.");
        } else if (myWeapon == "paper") {
            console.log("You win!");
        } else {
            console.log("You lose!");
        }
    }
    else if (computerWeapon == "scissors") {          
        if (myWeapon == "scissors") {
            console.log("It's a draw.");
        } else if (myWeapon == "rock") {
            console.log("You win!");
        } else {
            console.log("You lose!");
        }
        }

    else if (computerWeapon == "paper") {
        if (myWeapon == "paper") {
            console.log("It's a draw!");
        } else if (myWeapon == "scissors") {
            console.log("You win!");
        } else {
            console.log("You lose!");
        }
    }
    

}

rockPaperScissors("paper");
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(km) {
    miles = km * 0.621371;
    console.log(miles);
}



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  

function ftTocm(feet) {
    centimeters = feet * 30.48;
    console.log(centimeters);
}


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  

function annoyingSong(startingNumber) {
    for(i=startingNumber; startingNumber==1, startingNumber--;) {
        if(startingNumber==0) {
            
            console.log(startingNumber + " bottles of beer on the wall " + startingNumber + " bottles of beer. Take one down and pass it around " + (startingNumber) + " bottles of beer on the wall.");
        } else {
            console.log(startingNumber + " bottles of beer on the wall " + startingNumber + " bottles of beer. Take one down and pass it around " + (startingNumber - 1) + " bottles of beer on the wall.");
        }
        
    }
}

annoyingSong(99);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corresponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function returnLetterGrade(numberGrade) {
    if (numberGrade >= 90) {
        console.log("A");
    } else if (79 < numberGrade && numberGrade < 90) {
        console.log("B");
    } else if (69 < numberGrade && numberGrade < 80) {
        console.log("C");
    } else if (59 < numberGrade && numberGrade < 70) {
        console.log("D");
    } else {
        console.log("F");
    }
}

returnLetterGrade(98); // Returns 'A'
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





const vowels = ['a', 'e', 'i', 'o', 'u'];

var myString = "Lambda School";

var allLower = myString.toLowerCase();

var totalVowels = 0;
for(i = 0; i < vowels.length; i++) {
    
    if (myString.includes(vowels[i])) {
        console.log("True");
        totalVowels++;
    } else {
        console.log("False");
    } 
} console.log(totalVowels);

// NOTE: This really only counts the unique instances of vowels. I didn't have enough time to learn how to make it count all instances.




/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





