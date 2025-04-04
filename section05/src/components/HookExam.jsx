import useInput from "../hooks/useInput";

const HookExam = () => {

  const [input1,onChange1] = useInput();
  const [input2,onChange2] = useInput();

  return <div>HookExam
    <input value={input1} onChange={onChange1}></input>
    <input value={input2} onChange={onChange2}></input>
  </div>;
}

export default HookExam;