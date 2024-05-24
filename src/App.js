
import './App.css';
import { ToDoWrapper } from './Components/ToDoWrapper';
import 'bootstrap/dist/css/bootstrap.min.css'
import  Container  from 'react-bootstrap/Container';

function App() {
  return (

    <Container className='align-items-center justify-content-center background-size: 20px 20px;  background-image: linear-gradient(90deg, black 1px, transparent 0px), linear-gradient(black 1px, transparent 0px'>
    <div className="App">
     <ToDoWrapper/>
    </div>
    </Container>
  );
}

export default App;
