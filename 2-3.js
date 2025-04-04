let person = {
  name : "이정환",
  age : 25,
  location : "경기도"
};

const keyArr = Object.keys(person);

console.log(keyArr);

for(let key of keyArr){
  const value = person[key];
  console.log(key);
  console.log(value);
}


for(let key in person){
  const value = person[key];
  console.log(value); 
}



let arr = [1,2,3];
let [one,two,three] = arr;
console.log(one,two,three);



let {name,age,location} = person;
console.log(name, age, location);

function func({name,age,location}){
  console.log(name, age, location);
}

func(person);


function func2({name:n,age:a,location:l}){
  console.log(n,a,l);
}

func2(person);


function func3(a,b,c){
  console.log(a,b,c);
}

let arr2=[1,2,3];
func3(...arr2);


function func4(...rest){
  console.log(rest);
}

func4(1,2,3,4);