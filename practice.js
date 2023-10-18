//------------------------------------------
//- Find Leap Year and output an array
function findLeapYear(years){
    var result = [];
    for(let i = 0; i < years.length; i++){
        var index = i;
        var element = years[index];  
        if(element % 4 ===0){
            result.push(element); 
        }
    }
    return result;
}
const year = [2022, 2023, 2024, 2025, 2028, 2030, 2032, 2035, 2036];
const finalResult = findLeapYear(year)
console.log("leap year", finalResult);
//---------------------------------------------
// Input Hours and output minutes
function hoursToMin(hour){
    for(let i = 0; i < hour.length; i++){
        var index = i;  
        var element = hour[index];
        var element = element * 60;
        console.log('minutes', element);
    }
}
const myHour = [5];
hoursToMin(myHour);
 