import React from 'react';
import {Album} from "./Album";
import {useTypedSelector} from "../hooks/useTypedSelector";
import styles from "../styles/albums.module.scss";

interface AlbumsTypes{
    userId: number,
    id: number,
    title: string
    key: number
}


export const Albums:React.FC = () => {
    const albums = useTypedSelector((state) => state.albums.albums)
    return (
        <div className={styles.albums}>
            <ol>
                {
                  albums.map((album:AlbumsTypes) => {
                        return <Album key={album.id} album={album} />
                    })
                }
            </ol>
        </div>
    );
}

