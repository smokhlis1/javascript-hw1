// Exercise #1

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords(dog_string, dog_names) {
    let foundMatch = false;
    for (let name of dog_names) {
        if (dog_string.toLowerCase().includes(name.toLowerCase())) {
            console.log("Matched " + name);
            foundMatch = true;
        }
    }
    if (!foundMatch) {
        console.log("No Matches");
    }
}

console.log("\n====================\n");

findWords(dog_string, dog_names);
/* Matched Max
Matched PuRple expected output using node.js
Matched dog 
*/

// Exercise #2

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index");
    }
    return arr;
}

console.log("Expected output == [" + replaceEvens(arr).join(", ") + "]");


// Exercise #1 from codewars 

// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

const stringToNumber = function(str){
    return Number(str);
  }

let str ="123"
let num = stringToNumber(str)
console.log(num)

// Exercise #2 from codewars

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.


function findMissingLetter(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let currentCharCode = array[i].charCodeAt(0); // to get the first char of the array using charCodeAt(0)
        let nextCharCode = array[i + 1].charCodeAt(0); // to get the next char 

        if (nextCharCode !== currentCharCode + 1) {
            return String.fromCharCode(currentCharCode + 1); // will catch the char that's out of place
        }
    }
    return ' ';
}

console.log(findMissingLetter(['a','b','d','e','f']));


// Exercise #3 from codewars

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.


function rgb(r, g, b) {
    // Keep the range to 0-255 using both Math.max and Math.min 
    function color(value) {
        return Math.max(0, Math.min(255, value));
    }

    // using ternary operators to ensure two chars
    function toHex(value) {
        let hex = value.toString(16).toUpperCase();
        return hex.length === 1 ? '0' + hex : hex;
    }

    const red = toHex(color(r));
    const green = toHex(color(g));
    const blue = toHex(color(b));

    return red + green + blue;
}

console.log(rgb(255, 255, 255));
console.log(rgb(255, 5, 0));

// Exercise #4 from codewars

// There is an array with some numbers. All numbers are equal except for one. Try to find it!


function findUniq(arr) {
    // sort into ascending order
    arr.sort((a, b) => a - b);

    // if the unique number is in the beginning it'll run the if statement and if it's at the end it'll run
    // the else statement, otherwise there is no unique number
    if (arr[0] !== arr[1]) {
        return arr[0];
    } else {
        return arr[arr.length - 1];
    }
}

let nums = [0,0,2,0,0]
console.log(findUniq(nums))






