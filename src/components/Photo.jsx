import React from "react";
import styles from "./Photo.module.css";
export const Photo = ({photo}) => {
    return (
        <li className={styles.li}>
            <div>
               <img src={photo.url} alt={""}/>
                <div className={styles.title}> {photo.title}</div>
            </div>
        </li>
    );
}
