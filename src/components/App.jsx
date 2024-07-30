import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {Albums} from "./Albums";
import {Photos} from "./Photos";
import {Route, Routes} from "react-router-dom";
import styles from  "./App.module.css"
import {GetAlbums} from "../redux/Albums/AlbumsSlice";
import {GetPhotos} from "../redux/photos/PhotoSlice";

export const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetAlbums())
    })

    useEffect(()=>{
        dispatch(GetPhotos())
    })
  return (
      <div className={styles.app}>
          <Albums/>
         <Routes>
             <Route path="/:id" element={ <Photos/>} />
         </Routes>

      </div>
  );
}
