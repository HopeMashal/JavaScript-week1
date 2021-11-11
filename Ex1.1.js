/* Ex1.1 - Yes or No
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
string for false. */

let myBoolean = [true,false];
for (let i of myBoolean){
    let value=i;
    let result = value ? "Yes" : "No";
    console.log(`The Boolean is ${value}, and the output is ${result}`);
}


