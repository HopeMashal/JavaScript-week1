/* Ex5.7 - shortest words
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.*/

function ShortestWord(str) {
        let arr = str.split(" ");
        let min = arr[0].length;
        for(let i of arr){
            if(min > i.length){
                min = i.length;
            }
        }
        return min;
}

console.log(ShortestWord('lets talk about JavaScript the best language'));
console.log(ShortestWord('Hi! My Name is Hope'));
console.log(ShortestWord('I love galaxy and space a lot!'));
console.log(ShortestWord('Mechatronics Engineer'));
