import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";


interface AlbumTypes {
   album:{
       userId: number,
       id: number,
       title: string
   }

}


export const Album: FC<AlbumTypes> = ({album}: AlbumTypes) => {
    const selectedAlbumId = useTypedSelector(state => state.albums)

    return (
        <li className={selectedAlbumId === album.id ? "selected" : "color"}>
            <p>
                <Link to={`/${album.id}`}>
                    {album.title}
                </Link>
            </p>
        </li>

    );
}

