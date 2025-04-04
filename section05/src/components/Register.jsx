import {useState,useRef} from "react";


const Register = () => {
  
  // const [name,setName] = useState("이름");
  // const [birth,setBirth] = useState("");
  // const [country,setCountry] = useState("");
  // const [bio,setBio] = useState("");

  const [input,setInput] = useState({
    name : "",
    birth : "",
    country : "",
    bio : ""
  });

  // DOM 요소를 참조하거나, 렌더링을 발생시키지 않는 변수를 만들거나 (일반변수는 state로 인해 리렌더링되어 계속 초기화값을 가짐)
  const countRef = useRef(0);
  const inputRef = useRef();

   console.log(input);

   // [] 괄호를 사용하는 이유는 객체의 '계산된 속성 이름(computed property name)' 기능을 이용하기 위해서야.

   const onChange = (e) => {
      countRef.current++;
      console.log(countRef.current);
      setInput({
        ...input,
        [e.target.name] : e.target.value
      });
   };

   const onSubmit = ()=>{
    if(input.name === ""){
       //이름을 입력하는 DOM요소 포커스
       inputRef.current.focus();
       
    } 
   }

  // const onChangeName = (e) => {
  //   // setName(e.target.value);
  //   setInput({
  //     ...input,
  //     name:e.target.value
  //   });
  // }

  // const onChangeBirth = (e) => {
  //   // setBirth(e.target.value);
  //   setInput({
  //     ...input,
  //     birth:e.target.value
  //   });
  // }

  // const onChangeCountry = (e) => {
  //   // setCountry(e.target.value);
  //   setInput({
  //     ...input,
  //     country:e.target.value
  //   });
  // }
  
  // const onChangeBio = (e) => {
  //   // setBio(e.target.value);
  //   setInput({
  //     ...input,
  //     bio:e.target.value
  //   });
  // }


  return (
    <>
    <div>
      <input 
      ref={inputRef}
      name="name"
      value={input.name}
      onChange={onChange} 
      placeholder={"이름"}
      />
    </div>

    <div>
    <input 
    name="birth"
    type="date"
    onChange={onChange}
    value={input.birth}
     />
    </div>

    <div>
      <select name="country" onChange={onChange} value={input.country}>
        <option value=""></option>
        <option value="kr">한국</option>
        <option value="us">미국</option>
        <option value="uk">영국</option>
      </select>
    </div>

    <div>
      <textarea onChange={onChange} name="bio" value={input.bio}/>
    </div>

    <div>
      <button onClick={onSubmit}>제출</button>
    </div>
    </>
  )
}

export default Register;