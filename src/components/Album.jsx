import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import styles from "./Album.module.css"

export const Album = ({album}) => {
    const selectedAlbumId = useSelector(state => state.albums.selectAlbumId)
    

    return (
            <li  className={selectedAlbumId === album.id ? `${styles.selected}` : `${styles.color}`}>
                <p>
                    <Link to={`/${album.id}`}>{album.title}
                        {album.title}
                    </Link>
                </p>
            </li>

    );
}

