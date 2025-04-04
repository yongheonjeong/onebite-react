let date = new Date();
console.log(date);

let Jan01_1970 = new Date(0);
console.log(Jan01_1970);


let Jan02_1970 = new Date(24*3600*1000);
console.log(Jan02_1970);

console.log(Jan02_1970.getTime());


let date1 = new Date("2000-10-10/00:00:00");
console.log("1",date1);


let num1 = new Date(2000,10,10,0,0,0,0);
let num2 = new Date(2025,4,1);

console.log(num1);
console.log(num2);




let date2 = new Date(2025,4,1);
let timeStamp = date2.getTime();
console.log(timeStamp);

let dateClone = new Date(timeStamp);
console.log(dateClone);




let date3 = new Date(2000,9,10);

console.log(date3.getFullYear());
console.log(date3.getMonth());
console.log(date3.getDate());
 

console.log(date3.getHours());
console.log(date3.getMinutes());
console.log(date3.getSeconds());
console.log(date3.getMilliseconds());

date3.setFullYear(2021);
date3.setMonth(10);
date3.setDate(11);
date3.setHours(1);
date3.setMinutes(1);
date3.setSeconds(1);

console.log(date3);

const today = new Date(2002, 5, 5,22);

console.log(today.toString());
console.log(today.toDateString());
console.log(today.toLocaleString());
console.log(today.toLocaleDateString());


function moveMonth(date,moveMonth){
  const curTimestamp = date.getTime();
  const curMonth = date.getMonth();

  const resDate = new Date(curTimestamp);
  resDate.setMonth(curMonth+moveMonth);

  return resDate;
}

const dateA = new Date("2000-10-10");
console.log("A: ",dateA);

const dateB =  moveMonth(dateA,1);
console.log("B: ",dateB);

const dateC =  moveMonth(dateA,-1);
console.log("C: ",dateC);



function filterThisMonth(pivotDate,dateArray) {
  const year = pivotDate.getFullYear();
  const month = pivotDate.getMonth();

  const startDay = new Date(year,month,1,0,0,0,0);
  const endDay = new Date(year,month+1,0,23,59,59);

  const resArr = dateArray.filter(
    (it) => startDay.getTime() <= it.getTime() && it.getTime() <= endDay.getTime()
  );

  return resArr;
}

const dateArray = [
  new Date("2000-10-1"),
  new Date("2000-10-31"),
  new Date("2000-11-1"),
  new Date("2000-9-30"),
  new Date("1900-10-11")
];

const today2 = new Date("2000-10-10/00:00:00");
const filteredArray = filterThisMonth(today2,dateArray);

console.log(filteredArray);

