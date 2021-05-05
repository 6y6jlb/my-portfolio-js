import style from './Title.module.scss';

const Title = (props)=>{
    return (
        <div className={`${props.even?style.titleOdd:style.titleEven}`}><h4 >{props.title}</h4></div>
    )
}
export default Title;