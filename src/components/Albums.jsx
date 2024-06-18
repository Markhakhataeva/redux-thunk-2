import React from 'react';
import {useSelector} from "react-redux";
import {Album} from "./Album";

export const Albums = (props) => {
    const albums = useSelector((state) => state.albums.albums)

    console.log(albums)
    return (
        <div className="albums">
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

