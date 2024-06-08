import {useEffect} from "react";
import {AddTodos, updateCheck} from "./action";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser} from "./action";
import * as PropTypes from "prop-types";

function ReactLoading(props) {
  return null;
}

ReactLoading.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  type: PropTypes.string,
  height: PropTypes.number
};
export const App = () => {
  const users = useSelector((state)=>state.users)
  const loading = useSelector((state)=>state.loading)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(AddTodos())
  }, []);

  const handleDelete=(id)=>{
    dispatch(deleteUser(id))
  }

  const handleChange=(id,completed)=>{
    dispatch(updateCheck(id,completed))
  }
  return (
      <div className="App">
        <div className="App-header">List</div>
        <hr/>
        {
          loading ? "....." :
              (
                  users.map((user) => {
                    return (
                        <div className="App-body">
                          <div className="check">
                            { user.checking ? "..":(
                                <input type="checkbox" checked={user.completed} onChange={()=>handleChange(user.id,user.completed)}/>)}

                          </div>
                          <div className="user">
                            <ul>
                              <li>{user.name}</li>
                            </ul>

                            <hr/>
                          </div>
                          <div className="button">
                            <button onClick={() => handleDelete(user.id)} disabled={user.deleting}>Delete</button>
                          </div>

                        </div>
                    )


                  })
              )
        }


      </div>
  );
}
