import React from 'react'
import Header from "../components/Header"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"
import {useState,useContext} from 'react'
import { DiaryStateContext } from '../App'


const getMonthlyData = (pivotDate, data) => {

    const beginTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1,
        0,0,0
    ).getTime();

    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth()+1,
        0,
        23,59,59
    ).getTime();

    //pivot date를 기준으로 필터링된 데이터 반환 
    return data.filter((item)=> beginTime <= item.createdDate && endTime >= item.createdDate);
}

const Home = () => {
    const data = useContext(DiaryStateContext);

    const [pivotDate,setPivotDate] = useState(new Date());

    const monthlyData = getMonthlyData(pivotDate,data);
 

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1) );
    }

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1) );
    }

    return (
        <div>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`} 
            leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
            rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
            />
            <DiaryList data={monthlyData}/>
        </div>
    )
}

export default Home;