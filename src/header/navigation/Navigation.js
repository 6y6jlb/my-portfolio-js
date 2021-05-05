import React from 'react';
import style from './Navigation.module.scss'

const Navigation = () => {
    return (
        <>
            <div className={style.navigation}>
                <a href="">Common</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </div>
        </>
    )
}
export default Navigation;