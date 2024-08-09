import React, {FC} from 'react';
import {Album} from "./Album";
import styles from "../styles/Albums.module.scss"
import {useTypedSelector} from "../hooks/useTypedSelector";

interface Props {
    id?: number;
    key?:number,

}

export const Albums:FC<Props> = () => {
    const albums = useTypedSelector((state) => state.albums.albums)

    return (
        <div className={styles.albums}>
            <ol>
                {
                    albums.map((album:Props) => {
                        return <Album key={album.id}  album={album} />
                    })
                }
            </ol>
        </div>
    );
}

