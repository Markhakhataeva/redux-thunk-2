import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Photo} from "./Photo";
import {setFiltered} from "../action";



export const Photos = () => {
    const photos=useSelector((state)=>state.photos)
    const selectedAlbum=useSelector((state)=>state.selectAlbumId)
    const filter=useSelector((state)=>state.filter)
    const filtered=photos
        .filter(photo=>photo.albumId===selectedAlbum)
        .filter(photo=>photo.title.indexOf(filter) > -1)


    const dispatch=useDispatch();

    if (selectedAlbum=== null){
        return (
            <div className="load">--Выберите пользователя</div>
        )
    }
    const handleChange=(event)=>{
        dispatch(setFiltered(event.target.value));
    }
    return (
        <div className="photos">
            <div className="filter">
                <input type="text" placeholder="Поиск по тексту..." value={filter} onChange={handleChange}/>
            </div>
            <ul>
                {
                    filtered.map((photo)=>{
                        return <Photo photo={photo} key={photo.id} />
                    })
                }
            </ul>
        </div>
    );
}

