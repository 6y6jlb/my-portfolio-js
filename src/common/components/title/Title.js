import style from './Title.module.scss';
import React from "react";

const Title = React.memo((props)=>{
    return (
        <div className={`${props.even?style.titleOdd:style.titleEven}`}><h4 >{props.title}</h4></div>
    )
})
export default Title;