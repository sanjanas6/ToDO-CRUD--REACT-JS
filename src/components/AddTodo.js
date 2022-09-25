import React, { useState } from "react";

const AddTodo = (props) => {
    const[title,setTitle] = useState("");
    const[desc,setdesc] = useState("");
   
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc)  {
            alert("Title or description is not defined");
        }
        else 
        {
        props.addTodo(title,desc);  //Parent component define in App.js
        }
    }
  return (
    <div className="container my-3">
        <h3>Add a ToDo</h3>
      <form onSubmit={submit}>
        <div className='mb-3'>
          <label for='exampleInputEmail1' className='form-label'>
            Title
          </label>
          <input
            type='text'
            value={title}   //Important
            className='form-control'
            id='title'
            onChange= {(e)=>setTitle(e.target.value)}
          />
        </div>
         <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Description
          </label>
          <input
            type='text'
            value={desc}  //Important
            className='form-control'
            id='desc'
            onChange= {(e)=>setdesc(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddTodo;
