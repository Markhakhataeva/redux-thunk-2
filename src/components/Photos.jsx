import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Photo} from "./Photo";
import {setFiltered} from "../action";



export const Photos = () => {
    const dispatch= useDispatch();
    const photos = useSelector((state) => state.photos.photos)
    const selectedAlbum = useSelector((state) => state.albums.selectAlbumId)
    const filter= useSelector((state)=>state.photos.filter)

    const filtered=photos
        .filter(photo=>photo.albumId === selectedAlbum)
        .filter(x => x.title.indexOf(filter) > -1)

    if (selectedAlbum=== null){
        return (
            <div className="load">--Выберите пользователя</div>
        )
    }
    const handleChange = (e)=> {
        dispatch(setFiltered(e.target.value));
    }
    return (
        <div className="photos">
            <div className="filter">
                <input type="text" placeholder="Поиск по тексту..." value={filter} onChange={(e)=>handleChange(e)}/>
            </div>
            <ul>
                {
                    filtered.map((photo) => {
                        return <Photo photo={photo} key={photo.id} />
                    })
                }
            </ul>
        </div>
    );
}

