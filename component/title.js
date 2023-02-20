import styles from '../styles/Home.module.css'
import React, { useState } from "react";

export default function Title(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    
    <div className={styles.title_container} id="title_container">
      <img 
        className={styles.title_img} 
        id="title_img"
        src={props.title_img}>
      </img>
      <h2 className={styles.title} id="title">{props.page_title} </h2>
      <button className={styles.button} id="button" onClick={handleClick}>
        {props.button_title}
      </button>
          {showDropdown && (
              <>
              <div>
                <ul className={styles.list} id="list">
                  <li className={styles.li_box}><a href="/">All</a></li>
                  <li className={styles.li_box}><a href="/america">Americas</a></li>
                  <li className={styles.li_box}><a href="/asia">Asia</a></li>
                  <li className={styles.li_box}><a href="/africa">Africa</a></li>
                  <li className={styles.li_box}><a href="/europe">Europe</a></li>
                  <li className={styles.li_box}><a href="/oceania">Oceania</a></li>
                </ul>
              </div>
              </>
            )}
    </div>
  )
}