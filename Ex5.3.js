/* Ex5.3 - To Camel Case
Complete the method/function so that it converts dash/underscore delimited words into camel
casing. The first word within the output should be capitalized only if the original word was
capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" */

function toCamelCase(str){
    return str.split(/[,_-]+/).map( (s, i) => i !== 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s).join('');
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The,stealth,Warrior"));

