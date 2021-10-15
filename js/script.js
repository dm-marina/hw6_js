// Task1
// Boolean(Number('10')) + 1; //Number  2
// 'sub' + Number(false); //True('sub0')
// 16  *  '      91    '; //Number 1456
// true-70; //Number (-69) 
// Number(1 + String(1)) + 1; //12 Number

// Task2
const hour=60*60;
const userHour= prompt('Enter quantity of hours, which you want to calculate:')
let hoursInSeconds = Number(userHour) * Number(hour);
alert(hoursInSeconds);

// Task3
let num = 1;
num +=12;
num -=14;
num *=5;
num /=7;
num ++;
num --;
alert(num);