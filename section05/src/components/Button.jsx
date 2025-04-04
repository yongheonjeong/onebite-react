const Button= ({children,text,color="black"}) => {

  //이벤트 객체
  const onClickButton = (e) => {
    console.log(text);
    console.log(e);
  };


  return <button 
  style={{color : color}}
  onClick={onClickButton}
  >
    {text} - {color.toUpperCase()}
    {children}
    </button>
  
};

export default Button;