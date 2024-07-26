import React, {FC} from "react";

interface photType{
    photo:{
        albumId: number
        id:number
        title: string
        url:"link"

    }

}
export const Photo:FC<photType> = ({photo}:photType) => {


    return (
        <li className="li">
            <div>
               <img src={photo.url} alt={""}/>
                <div className="titleForPhoto"> {photo.title}</div>
            </div>
        </li>
    );
}
