function orderCoffee(coffee,time){
  setTimeout( ()=> {
    console.log(`${coffee} 제조 완료`);
  },time);
}

orderCoffee("달콤한 커피",4000);
orderCoffee("레몬 티",2000);
orderCoffee("시원한 커피",3000);


function double(num,cb){
  setTimeout(()=>{
    const doubleNum = num * 2;
    cb(doubleNum);
  },1000);
}

double(10,(res)=> {
  console.log(res);
});

console.log("마지막");