import {FC, useEffect} from "react";
import {Albums} from "./Albums";
import {Photos} from "./Photos";
import {Route, Routes} from "react-router-dom";
import styles from "../styles/App.module.scss"
import {GetAlbums} from "../redux/Albums/AlbumsSlice";
import {GetPhotos} from "../redux/photos/PhotoSlice";

export const App:FC = () => {

    useEffect(():void=>{
        (GetAlbums());
        (GetPhotos())
    },[])


    
  return (
      <div className={styles.app}>
          <Albums />
         <Routes>
             <Route path="/:id?" element={<Photos  title={""}/>} />
         </Routes>

      </div>
  );
}
