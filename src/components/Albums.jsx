import React from 'react';
import {useSelector} from "react-redux";
import {Album} from "./Album";

export const Albums = (props) => {
    const albums=useSelector((state)=>state.albums)
    return (
        <div className="albums">
            <ol>
                {
                    albums.map((album)=>{
                        return <Album album={album} key={album.id}/>
                    })
                }
            </ol>
        </div>
    );
}

