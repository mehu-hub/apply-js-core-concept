/* const myInches = 12;
const myFeet = myInches / 12;
// console.log(myFeet);

const dadaInch = 144;
const dadaFeet = dadaInch / 12;
// console.log('dada feet', dadaFeet);

const dadiInch = 60;
const dadiFeet = dadiInch / 12;
// console.log('dadi feet', dadiFeet); */
//-----------------------------------
// Feet to inch using function

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
//---------------------------------------
const dadaInches = 78;
const dadaFeet = inchToFeet(dadaInches);
console.log('Dada Feet', dadaFeet);
//---------------------------------------
const nanaInch = 62;
const nanaFeet = inchToFeet(nanaInch);
console.log('Nana Feet', nanaFeet);
