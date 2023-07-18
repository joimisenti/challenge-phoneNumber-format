/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don’t forget the space after the closing parentheses!
*/

const createPhoneNumber = (phone_number) => {
    const areaCode = phone_number.slice(0, 3).join('');
    const threeNum = phone_number.slice(3, 6).join('');
    const lastFour = phone_number.slice(6, 10).join('');

    return console.log(`(${areaCode}) ${threeNum}-${lastFour}`)
}


let example = [3, 6, 7, 3, 5, 2, 4, 4, 8, 0]
createPhoneNumber(example)