import React from 'react';
import {useSelector} from "react-redux";
import {Album} from "./Album";
import styles from "./Albums.module.css"

export const Albums = (props) => {
    const albums = useSelector((state) => state.albums.albums)

    console.log(albums)
    return (
        <div className={styles.albums}>
            <ol>
                {
                    albums.map((album) => {
                        return <Album key={album.id}  album={album} />
                    })
                }
            </ol>
        </div>
    );
}

