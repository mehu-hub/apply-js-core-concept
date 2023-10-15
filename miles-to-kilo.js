function milesToKilo (miles){
    const kilo = miles * 1.609;
    return kilo;
}
const todaysMile = 8;
const kilometer = milesToKilo(todaysMile);
// console.log(kilometer);

//----------------------------
function gramToKg (gram){
    const kg = gram / 1000;
    return kg;
}
const potato = 5600;
const potatoKg = gramToKg(potato);
console.log(potatoKg, 'KG');