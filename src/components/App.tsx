import {FC, useEffect} from "react";
import {Albums} from "./Albums";
import {Photos} from "./Photos";
import {Route, Routes} from "react-router-dom";
import {useActions} from "../hooks/useActions";


export const App:FC = () => {
    const {GetAlbums, GetAlbumPhotos} = useActions();


    useEffect(()=>{
        (GetAlbums())
    })

    useEffect(()=>{
        (GetAlbumPhotos())
    })
  return (
      <div className="App">
          <Albums/>
         <Routes>
             <Route path="/:id" element={ <Photos/>} />
         </Routes>

      </div>
  );
}
