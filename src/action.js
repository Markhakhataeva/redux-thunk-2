 export const AddTodos = () => {
    return (dispatch) =>{
        dispatch({type:"addTodo/start"})
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((json) =>
                {
                    dispatch({
                        type:"addTodo/complete",
                        payload:json
                    })
                }
            )

    }
 }

 export const deleteUser=(id)=>{
    return (dispatch) =>{
        dispatch({type:"deleteTodo/start",payload:id})
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
            {method:"Delete"} )
            .then(res => res.json())
            .then(()=>{
                dispatch({type:"deleteTodo/complete",payload:id})
            })

 }
 }


 export const updateCheck = (id,completed) => {
     return (dispatch)=>{
         dispatch({type:"check/start",payload:id})

         fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
             method:"PATCH",
             body:JSON.stringify({
                 completed: !completed
             })
         })
             .then(res => res.json())
             .then(()=>{
                 dispatch({type:"check/complete",payload:id})
             })

     }
 }