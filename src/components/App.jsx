import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {AddAlbums, AddPhotos} from "../action";
import {Albums} from "./Albums";
import {Photos} from "./Photos";

export const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(AddAlbums())
    })

    useEffect(()=>{
        dispatch(AddPhotos())
    })
  return (
      <div className="App">
          <Albums/>
          <Photos/>

      </div>
  );
}
