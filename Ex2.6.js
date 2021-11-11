/* Ex2.6 - Years and Centuries
The first century spans from the year 1 up to and including the year 100, The second - from the
year 101 up to and including the year 200, etc.
Task :
Given a year, return the century it is in.
Input , Output Examples ::
centuryFromYear(1705) returns (18)
centuryFromYear( 1900) returns (19)
centuryFromYear(1601) returns (17)
centuryFromYear(2000) returns (20) */

const array=[1705,1900,1601,2000];
function centuryFromYear(num){
    for (let y of num){
        if(y%100==0) console.log(`The year is ${y}, the century is ${y/100}`);
        else{
            let i=Math.round(y/100)+1;
            console.log(`The year is ${y}, the century is ${i}`);
        }
    }
}
centuryFromYear(array);
