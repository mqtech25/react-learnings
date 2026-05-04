import React from "react";
import style from './Header.module.css'

function Header(){
    return(
        <div className={style.header}>
            <div className={style.logo}>
            <h1>Logo</h1>
            </div>
            <button className={`${style.btn} ${style.btn_primary}`}>Login</button>
        </div>
    )
}

export default Header;