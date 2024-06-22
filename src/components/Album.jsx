import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectId} from "../action";
import {Link} from "react-router-dom";

export const Album = ({album}) => {
    const selectedAlbumId = useSelector(state => state.albums.selectAlbumId)
    

    return (
            <li  className={selectedAlbumId === album.id ? 'selected' : 'color'}>
                <p>
                    <Link to={`/${album.id}`}>{album.title}
                        {album.title}
                    </Link>
                </p>
            </li>

    );
}

