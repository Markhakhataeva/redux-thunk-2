import React, {ChangeEvent, FC} from 'react';
import {Photo} from "./Photo";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import styles from "../styles/photos.module.scss"


interface photoType{
    albumId: number
    id:number
    title: string
    url: "link"

}

export const Photos:FC = () => {
    const photos = useTypedSelector(state => state.photos.photos)
    const filter = useTypedSelector(state => state.photos.filter)
    const {setFiltered} = useActions()
    const id:string|undefined = (useParams().id)


    let filtered;
    if(typeof id === "string"){
        filtered=photos
            .filter((photo:photoType)=>photo.albumId === parseInt(id))
            .filter((x:photoType) => x.title.indexOf(filter) > -1)

    }

    if (isNaN(parseInt(id as string))){
        return (
            <div className="load">--Выберите пользователя</div>
        )
    }

    const handleChange = (e:ChangeEvent<HTMLInputElement>):void=> {
        (setFiltered(e.target.value));
    }
    return (
        <div className={styles.photos}>
            <div className={styles.filter}>
                <input type="text" placeholder="Поиск по тексту..." value={filter} onChange={(e)=>handleChange(e)}/>
            </div>
            <ul>
                {
                    filtered.map((photo:photoType) => {
                        return <Photo photo={photo} key={photo.id} />
                    })
                }
            </ul>
        </div>
    );
}

