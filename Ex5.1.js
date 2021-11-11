/* Ex5.1 - trimming string
It's pretty straightforward. Your goal is to create a function that removes the first and last
characters of a string. You're given one parameter, the original string. You don't have to worry
with strings with less than two characters. */

const string='Hope Mashal';
const string1='   Mechatronics Engineering';
function TrimmingString(str){
    const str1=str.trim();
    console.log(`The string is: \'${str1}\', the trimming string is: \'${str1.slice(1,str1.length-1)}\'`);
}
TrimmingString(string);
TrimmingString(string1);