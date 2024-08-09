import React, {FC} from 'react';
import {Photo} from "./Photo";
import {useParams} from "react-router-dom";
import styles from "../styles/Photos.module.scss";
import {setFiltered} from "../redux/photos/PhotoSlice";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useTypedDispatch} from "../hooks/useTypedDispatch";

interface PhotosProps{
    albumId?:number,
    title:string,
    id?:number,



}

export const Photos:FC<PhotosProps> = () => {
    const dispatch= useTypedDispatch();
    const photos = useTypedSelector(state => state.photos.photos);
    const id:string | undefined = (useParams().id)
    const filter= useTypedSelector((state) => state.photos.fillter)
    let filtered;
    if (typeof id === "string") {
        filtered = photos
            .filter((photo:PhotosProps)=> photo.albumId === parseInt(id))
            .filter((x:PhotosProps) => x.title.indexOf(filter) > -1)

    }

    if (isNaN(parseInt(id as string))){
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
                    filtered?.map((photo:PhotosProps) => {
                        return <Photo  key={photo.id}  photo={photo}/>
                    })
                }
            </ul>
        </div>
    );
}
