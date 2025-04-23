import React from 'react'
import {getEmotionImage} from '../util/get-emotion-image'
import Button from './Button'
import './DiaryItem.css'

const DiaryItem = () => {

    const emotionId = 1;


    return <div className='DiaryItem'> 
        <div className={`img_section img_section_${emotionId}`}>
            <img src={getEmotionImage(emotionId)}/>
        </div>
        <div className='info_section'>
            <div className='createdDate'>
                {new Date().toLocaleDateString()}
            </div>
            <div className='content'>
                일기 컨텐츠
            </div>
        </div>
        <div className='button_section'>
            <Button text={"수정하기"} />
        </div>
    </div>
}

export default DiaryItem;