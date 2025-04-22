import React from 'react' 
import './App.css'
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import Notfound from "./pages/Notfound"
import {Route,Routes, Link,useNavigate} from "react-router-dom"
import {getEmotionImage} from "./util/get-emotion-image"
import Button from "./components/Button" 
import Header from "./components/Header"

function App() { 

  
  return (
    <>
    <Header title={"Header"} 
    leftChild={ <Button text={"Left"}/>}
    rightChild={<Button text={"Right"}/>}
    />
    <Button
     text={123}
     type={"POSITIVE"}
     onClick={()=>{
      alert('123번 버튼 클릭@');
    }}
    />

    <Button
     text={123}
     onClick={()=>{
      alert('123번 버튼 클릭@');
    }}
    />


<Button
     text={123}
     type={"NEGATIVE"}
     onClick={()=>{
      alert('123번 버튼 클릭@');
    }}
    />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
