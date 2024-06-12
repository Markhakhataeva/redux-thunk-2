import React from "react";

export const Photo = ({photo}) => {
    return (
        <li>
            <div>
               <img src={photo.url} alt={""}/>
                <div className="title"> {photo.title}</div>
            </div>
        </li>
    );
}
