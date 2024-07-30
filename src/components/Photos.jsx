import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Photo} from "./Photo";
import {useParams} from "react-router-dom";
import styles from "./Photos.module.css";
import {setFiltered} from "../redux/photos/PhotoSlice";



export const Photos = () => {
    const dispatch= useDispatch();
    const photos = useSelector(state => state.photos.photos);
    const id = parseInt(useParams().id)
    const filter= useSelector((state)=>state.photos.fillter)

    const filtered= photos
        .filter(photo=>photo.albumId === id)
        .filter(x => x.title.indexOf(filter) > -1)

    if (isNaN(id)){
        return (
            <div className="load">--Выберите пользователя</div>
        )
    }


    return (
        <div className={styles.photos}>
            <div className={styles.filter}>
                <input type="text" placeholder="Поиск по тексту..." value={filter} onChange={(e)=>dispatch(setFiltered({text:e.target.value}))} />
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

