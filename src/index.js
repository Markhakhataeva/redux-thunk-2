import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {thunk} from "redux-thunk";


const initialState={users:[],loading:false

}
const  reducer = (state=initialState, action) =>{
    switch(action.type){
        case "addTodo/start":
           return {
               ...state,
               loading:true
           }

        case "addTodo/complete":
            return{
                ...state,
                users:action.payload,
                loading: false

            }

        case "deleteTodo/start":
            return {
                ...state,
                users:state.users.map(user=>{
                    if(user.id === action.payload){
                        return{
                            ...user,
                            deleting:true
                        }
                    }
                    return user;
                })
            }

        case "deleteTodo/complete":
            return {
                ...state,
                users:state.users.filter(user => user.id !== action.payload)
            }

        case "check/start":
            return {
                ...state,
                users:state.users.map(user=>{
                    if(user.id === action.payload){
                        return{
                            ...user,
                            checking:true
                        }
                    }
                    return user;
                })
            }

        case "check/complete":
            return {
                ...state,
                users: state.users.map(user=>{
                    if(user.id === action.payload){
                        return{
                            ...user,
                            completed:!user.completed,
                            checking:false

                        }
                    }
                    return user
                })

            }
        default:
            return state;

    }
}

export const store = createStore(reducer,applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);