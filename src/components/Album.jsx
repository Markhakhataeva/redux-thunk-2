import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectId} from "../action";

export const Album = ({album}) => {
    const selectedAlbumId = useSelector(state => state.albums.selectAlbumId)

    const dispatch = useDispatch();
    const selectAlbumId=()=>{
        dispatch(selectId(album.id));
    }

    return (
            <li onClick={selectAlbumId} className={selectedAlbumId === album.id ? 'selected' : 'color'}>
                <p>
                    {album.title}
                </p>
            </li>

    );
}

