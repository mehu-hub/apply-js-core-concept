function isLeapYear(year) {
    const reminder = year % 4;
    if (reminder === 0) {
        return true;
    }
    return false;
}
const isMyYear = isLeapYear(2020);
console.log(isMyYear); // output true

const yourYear = isLeapYear(2022);
console.log(yourYear); // output false