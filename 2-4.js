// const arr = [1,2,3];
// const sliced = arr.slice(0,2);

// console.log(arr);
// console.log(sliced);



// function cb(item,idx){
//   console.log(`1 - ${idx}번째 요소: ${item}`);
// }

// const arr = [1,2,3];
// arr.forEach(cb);

// arr.forEach((item,idx) => {
//   console.log(`2 - ${idx}번째 요소: ${item}`);
// })

let arr = [1,3,5,6,8];
let index = arr.findIndex((item) => 
  item%2 === 0 ? true : false
);

console.log(index);


let arr3 = [
  {name:"이종원"},
  {name:"이정환"},
  {name:"신다민"},
  {name:"김효빈"}
];

let element = arr3.find((item)=> item.name === "이정환");
console.log(element);


let arr4 = [
  {name:"이종원",hobby:"축구"},
  {name:"이정환",hobby:"영화"},
  {name:"신다민",hobby:"축구"},
  {name:"김효빈",hobby:"노래"},
  
]

let filteredArr = arr4.filter((item)=> item.hobby === "축구");
console.log(filteredArr);


let arr5=[1,2,3,4];
let newArr = arr.map((item)=> item*3 );
console.log(newArr);


function compare(a,b){
  if(a>b) return 1;
  else if(a<b) return -1;
  else return 0;
}

let arr6 = [10,5,3];
arr6.sort(compare);
console.log(arr6);

let arr7 = [1,2,3,4,5];
let result = arr7.reduce((acc,item) => acc + item, 0);
console.log(result);


