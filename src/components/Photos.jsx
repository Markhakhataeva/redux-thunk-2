import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Photo} from "./Photo";
import {setFiltered} from "../action";
import {useParams} from "react-router-dom";



export const Photos = () => {
    const dispatch= useDispatch();
    const photos = useSelector((state) => state.photos.photos)
    const id = parseInt(useParams().id)
    const filter= useSelector((state)=>state.photos.filter)

    const filtered=photos
        .filter(photo=>photo.albumId === id)
        .filter(x => x.title.indexOf(filter) > -1)

    if (isNaN(id)){
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

