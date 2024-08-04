import React, {FC} from "react";
import styles from "../styles/photos.module.scss"


interface photType{
    photo:{
        albumId: number
        id:number
        title: string
        url:"link"

    }

}
export const Photo:FC<photType> = ({photo}:photType) => {


    return (
        <li className={styles.li}>
            <div>
               <img src={photo.url} alt={""}/>
                <div className={styles.titleForPhoto}> {photo.title}</div>
            </div>
        </li>
    );
}
