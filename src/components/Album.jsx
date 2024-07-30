import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Album.module.css"

export const Album = ({album}) => {

    return (
            <li className={styles.color}>
                <p>
                    <Link to={`/${album.id}`}>{album.title}
                        {album.title}
                    </Link>
                </p>
            </li>

    );
}

