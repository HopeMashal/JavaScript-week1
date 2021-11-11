/* Ex5.5 - Abbreviate two words
Write a function to convert a name into initials. This kata strictly takes two words with one space
in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F6.6 */

function AbbreviateTwoWords(name){
    var nam = name.split(' ');
    return nam[0].charAt(0).toUpperCase()+'.' + nam[1].charAt(0).toUpperCase();
  }

console.log(AbbreviateTwoWords('Sam Harris'));
console.log(AbbreviateTwoWords('Patrick Feeney'));