import React from 'react'
import TodoItem from './TodoItem'
const Todos = (props) => {
  let myStyle = {
    minHeight: "100vh"
  }
  return (
    <div className='container' my-3 style={myStyle}>
      <h3 className='text-center my-3'>Todos List</h3>
       {/* {props.todos} */}
       {/* <TodoItem todo={props.Todos[0]} /> */}
       
       {/* Map is an higher order method , accepts upto 3 arguments map function call calback function for each element of array */}
       {/* Map mai humesha ek unique attribute ko as a key pass krna hota hai  */}
       {props.Todos.length===0? "No Todos to display":
       props.Todos.map((todo)=>{
              return ( 
              <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> 
              <hr />
              </>
              ) 
       })}
    </div>
  )
}

export default Todos
