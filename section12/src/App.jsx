import './App.css'
import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import NotFound from './pages/NotFound'
import {Routes,Route,Link} from "react-router-dom"

// 1."/" : 모든 일기를 조회하는 Home 페이지
// 2."/new" : 새로운 일기를 작성하는 New 페이지
// 3."/diary": 일기를 상세히 조회하는 Diary 페이지 

function App() { 

  return (
    <>
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/diary"}>Diary</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/new" element={<New />}></Route>
      <Route path="/diary" element={<Diary />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </>
  )
}

export default App
