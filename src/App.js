import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import ToDos from './components/Todos';
import Footer from './components/Footer';
import React , {useState} from 'react';
import AddTodo from './components/AddTodo';
function App() {
  let initTodo;
  if(localStorage.getItem("Todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("Todos"))
  }
  const onDelete =(todo)=>{
    console.log("I am on Delete" , todo);

    setTodos(Todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.getItem("Todos" , JSON.stringify(ToDos));
  }

  const addTodo = (title,desc)=>{
    console.log("I am adding ", title,desc)
    let sno;
    if(Todos.length==0)
    {
      sno=0;
    }
    else{
      sno = Todos[Todos.length-1].sno + 1; //Todos k last todo k sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    } 
    setTodos([...Todos, myTodo]); //Spread Operator
    console.log(myTodo);

    localStorage.setItem("todos",JSON.stringify(Todos));
    

  }
  const [Todos, setTodos] = useState([initTodo])
  return (
  <>
   {/* <h1>My App</h1>
   <p>My app Works</p> */}
   <Header title="My ToDO List" searchBar={false} />
   <AddTodo addTodo={addTodo}/>
   <ToDos Todos={Todos} onDelete={onDelete} />
   <Footer />
</>
  );
}

export default App;
