import './App.css'
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import NotFound from './pages/NotFound'
import {Routes,Route,Link,useNavigate} from "react-router-dom"
import {getEmotionImage} from "./util/get-emotion-images"
import Button from "./components/Button"
import Header from "./components/Header"

// 1."/" : 모든 일기를 조회하는 Home 페이지
// 2."/new" : 새로운 일기를 작성하는 New 페이지
// 3."/diary": 일기를 상세히 조회하는 Diary 페이지 

function App() { 

  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  }

  return (
    <>
    <Header 
    title={"header"} 
    leftChild={<Button text={"Left"} />}
    rightChild={<Button text={"Right"} />}
    />
    
    <Button text={123} type={"default"} onClick={()=>{
      console.log("123");
    }} />
    
    <Button text={123} type={"negative"} onClick={()=>{
      console.log("123");
    }} />

    <Button text={123} type={"positive"} onClick={()=>{
      console.log("123");
    }} />

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/new" element={<New />}></Route>
      <Route path="/diary/:id" element={<Diary />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>

    </>
  )
}

export default App
