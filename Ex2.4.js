/* Ex2.4 - Unique
There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers. */

const array=[ 1, 1, 1, 2, 1, 1 ];
const array1=[ 0, 0, 0.55, 0, 0 ];
const array2=[ 0, 0, 0, 0, 0,0,0,0.6,0,0,0 ];
const array3=[ 0, 8, 0, 0, 0,0,0 ];
const array4=[ 7, 0, 0, 0, 0,0,0 ,0];

function findUniq(arr){
    let a=arr[0], b=arr[1], aa;
    if(a==b) aa=a;
    else aa=arr[2];
    for (let i of arr){
        if(i != aa)  b=i;
    }
    return b;
}
console.log(`The array is: [${array}], the unique number is: ${findUniq(array)}`);
console.log(`The array is: [${array1}], the unique number is: ${findUniq(array1)}`);
console.log(`The array is: [${array2}], the unique number is: ${findUniq(array2)}`);
console.log(`The array is: [${array3}], the unique number is: ${findUniq(array3)}`);
console.log(`The array is: [${array4}], the unique number is: ${findUniq(array4)}`);