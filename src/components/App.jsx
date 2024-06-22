import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {Albums} from "./Albums";
import {Photos} from "./Photos";
import {GetAlbumPhotos, GetAlbums} from "../action";
import {Route, Routes} from "react-router-dom";


export const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetAlbums())
    })

    useEffect(()=>{
        dispatch(GetAlbumPhotos())
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
