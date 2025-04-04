// const varA = "안녕하세요";

// typeof varA === "string" ? console.log("문자 자료형") : console.log("문자 자료형이 아님");
 
// function greetFunc(){
//   console.log("hello");
// }

// let greeting = greetFunc;
// greeting();



// function parentFunc(callback){
//   console.log("parent");
//   callback();
// }

// function childFunc(){
//   console.log("child");
// }

// parentFunc(childFunc);




// function repeat(count,callback){
//   for(let idx=0; idx<count; idx++){
//     callback(idx+1);
//   }
// }

// function origin(count){
//   console.log(count);
// }

// function double(count){
//   console.log(count*2);
// }

// repeat(5,double);


function repaet(count,callback){
  for(let idx=0; idx<count; idx++){
    callback(idx+1);
  }
}

// const double = function(count){
//   console.log(count*2);
// };

// repaet(5,double);

repaet(5,function(count){
  console.log(count*2);
});




let greeting = (name)=>`hello ${name}`;
const greetingText = greeting("이정환");
console.log(greetingText);




let isConfirm = true;

function confirm(onYes,onNo){
  if(isConfirm) onYes() 
    else onNo();
}

confirm(()=>console.log("승인"), ()=>console.log("거부"));



let person = {
  name: "이정환",
  age : 25,
  "like cat" : true,
  sayHello : function(){
    console.log("안뇽!");
  }
};

const personName = person.name;
const personAge = person["age"];

console.log(personName);
console.log(personAge);

let isNameExist = "name" in person;
console.log(isNameExist);


person.sayHello();