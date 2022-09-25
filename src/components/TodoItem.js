import React from 'react'

//Destructuring use kiya hai \..basically ya toh hum props likh kr access kre aur ya direct name likhde isko destructuring bolte hai
const TodoItem = ({todo , onDelete}) => {
  return (
    <div>
     <h4>{todo.title}</h4>
     <p>{todo.desc}</p>
     <button className="btn btn-sm btn-danger" 
     onClick={()=>{onDelete(todo)}}>Delete</button>  
     {/* Use of Arro */}
    </div>
  )
}

export default TodoItem
