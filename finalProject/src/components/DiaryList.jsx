import React from 'react'
import Button from "./Button"
import DiaryItem from './DiaryItem'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import "./DiaryList.css"

const DiaryList = ({data}) =>{
    const nav = useNavigate();

    const [sortType,setSortType] = useState("latest");

    const onChangeSortType = (e) =>{
        setSortType(e.target.value);
    };


    // sorted : 원본배열을 정렬
    // toSorted : 배열을 정렬해서 반환(원본배열 수정X)
    const getSortedDate = ()=> {

        // 객체간 비교이기 때문에 비교함수를 콜백함수로 등록
        return data.toSorted((a,b)=>{
            if(sortType==='oldest'){
                return Number(a.createdDate) - Number(b.createdDate); //oldest 
            }else{
                return Number(b.createdDate) - Number(a.createdDate); // latest
            }
        })
    }

    const sortedData = getSortedDate();

    return(
        <div className="DiaryList">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button onClick={()=>nav('/new')} text={"새 일기 쓰기"} type={"POSITIVE"} />
            </div>
            <div className="list_wrapper">
                {sortedData.map((item)=><DiaryItem key={item.id} {...item}/>)}
            </div>
        </div>
    ) 
};

export default DiaryList;