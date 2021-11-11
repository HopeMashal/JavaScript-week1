/* Ex2.3 - Find the Next Perfect Square
You might know some pretty large perfect squares. But what about the NEXT one?
Complete the findNextSquare method that finds the next integral perfect square after the one
passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is
also an integer.
If the parameter is itself not a perfect square then -1 should be returned. You may assume the
parameter is positive.
Examples:
findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect */

const sq=[121,625,114];
function findNextSquare(arr){
    for (let i of arr){
        let result=0;
        if(Math.sqrt(i)%1==0){
            result=Math.pow(Math.sqrt(i)+1,2);
        }
        else {
            result=-1;
        }
        if (result==-1){
            console.log(`The result is: ${result}, the value ${i} isn't a perfect square`);
        }
        else {
            console.log(`The value is: ${i}, the next perfect square is: ${result}`);
        }
    }
} 
findNextSquare(sq);

