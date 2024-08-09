import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from "../styles/Album.module.scss"

interface AlbumProps {
    album:{
        id?: number;
        title?: string;
    }
}

export const Album: FC<AlbumProps> = ({album}:AlbumProps) => {

    return (
        <li className={styles.color}>
            <p>
                <Link to={`/${album.id}`}>
                    {album.title}
                </Link>
            </p>
        </li>

    );
}

