function factorial(numbers){
    let result = 1;
    for(let i = 1; i < numbers; i++){
        result = result * i; 
    }
    return result;
}
 
const result = factorial(4);
console.log(result);