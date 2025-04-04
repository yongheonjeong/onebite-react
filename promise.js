
const promise = new Promise(
  function(reslove,reject) {
    setTimeout(()=>{
      // reslove("성공");
      reject("실패");
    },500);
  }
);

promise.then(function(res){
  console.log(res);
})
.catch(function(res){
  console.log(res);
});