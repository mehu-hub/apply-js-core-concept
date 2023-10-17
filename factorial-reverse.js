function factorial (number){
    let result = 1;
    for(let i = number; i >= 1; i-- ){
        result = result * i; 
    }
    return result;
}
const number = 8;
const getResult = factorial(number)
console.log(getResult);
//------------------------------