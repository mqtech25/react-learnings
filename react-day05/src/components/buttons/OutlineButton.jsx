import React from "react";
import styles from './OutlineButton.module.css'

function OutlineButton(){
 return (
    <button className={`${styles.btn} ${styles.outline_red}`} >More</button>
 )  
}

export default OutlineButton;