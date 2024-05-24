import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from 'react-bootstrap/Button';


export const EditToDoForm = ({editTodo,task}) => {
  const [value,setValue] = useState(task.task);

  const handleSubmit = e => {

    e.preventDefault();
    
    editTodo(value,task.id);

    //we clear the value of the search bar here
    setValue("");
    
  }
  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
    
    <input type="text" className='toDoInput' value={value} placeholder='Update Task:' onChange={(e) => setValue(e.target.value)}/>  
    <button type= "submit" className='toDoBtn'>
      Update Task
    </button>
    
    
    </form>
  )
}
