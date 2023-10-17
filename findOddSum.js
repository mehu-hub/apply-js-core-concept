function getSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index]
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

//------------------------------------------

const myNumbers = [12, 65, 45, 78, 99, 20]
getSum(myNumbers);

function getOddNumAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            // console.log(element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const numArray = [23, 25, 20, 52, 95, 78, 49, 47, 1, 13];
const getOddNumber = getOddNumAnArray(numArray);
console.log(getOddNumber); 
