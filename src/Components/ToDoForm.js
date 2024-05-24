import React,{useState} from 'react'
import  Button  from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';

export const ToDoForm = ({addTodo}) => {
  const [value,setValue] = useState("");

  const handleSubmit = e => {

    e.preventDefault();
    
    addTodo(value);

    //we clear the value of the search bar here
    setValue("");
    
  }
  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
    
    <input type="text" className='toDoInput' value={value} placeholder='Add Task:' onChange={(e) => setValue(e.target.value)}/>  
    
    <Button type= "submit" className='toDoBtn'>
      Add Task
    </Button>
    
    
    </form>
  )
}
