import {useState} from "react";

const Count = () => {
  const [count,setCount] = useState(0);

  return(
  <>
  <div>
  <h1>{count}</h1>
  <button onClick={()=>{
    setCount(count + 1);
  }}>+</button>
  </div>
  </>
  );
}

export default Count;