function evenAndOdd (value){
     const reminder = value % 2;
     if(reminder == 0){
        return true;
     }
     else{
        return false;
     } 
}

const myNum = evenAndOdd(100);
console.log(myNum);
//----------------------------
const herNum = evenAndOdd(303)
console.log(herNum);