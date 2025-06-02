/**
 * Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
 **/

function stringWord(words) {
    return words.split(' ').map(str => str.length > 4 ? str.split('').reverse().join('') : str).join(' ')
}