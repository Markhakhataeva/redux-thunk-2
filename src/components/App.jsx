import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {Albums} from "./Albums";
import {Photos} from "./Photos";
import {GetAlbumPhotos, GetAlbums} from "../action";


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
          <Photos/>

      </div>
  );
}
