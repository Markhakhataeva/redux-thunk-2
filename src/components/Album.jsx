import React from 'react';
import {useDispatch} from "react-redux";
import {selectId} from "../action";

export const Album = ({album}) => {
    const dispatch = useDispatch();
    const selectAlbumId=()=>{
        dispatch(selectId(album.id));
    }


    return (
            <li onClick={selectAlbumId}>
                <p>
                    {album.title}
                </p>
            </li>

    );
}

