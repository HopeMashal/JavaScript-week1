/* Ex5.8 - shortest words version 2
Given a string of words, return the longest word[s].
String will never be empty and you do not need to account for different data types. */

function LongestWord(str) {
    let arr = str.split(" ");
    let max = arr[0].length;
    for(let i of arr){
        if(max < i.length){
            max = i.length;
        }
    }
    return max;
}

console.log(LongestWord('lets talk about JavaScript the best language'));
console.log(LongestWord('Hi! My Name is Hope'));
console.log(LongestWord('I love galaxy and space a lot!'));
console.log(LongestWord('Mechatronics Engineer'));