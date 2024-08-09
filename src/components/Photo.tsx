import React, {FC} from "react";
import styles from "../styles/Photo.module.scss";


interface PhotoProps {
    photo: {
            url?: string
            title: string
        }
}

export const Photo: FC<PhotoProps> = ({photo}:PhotoProps) => {
    return (
        <li className={styles.li}>
            <div>
                <img src={photo.url} alt={""}/>
                <div className={styles.title}> {photo.title}</div>
            </div>
        </li>
    );
}
