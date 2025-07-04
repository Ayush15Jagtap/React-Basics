import { useState } from "react";
import "./App.css";
// import ClassCounter from "./components/ClassCounter";
import HandleClick from "./components/HandleClick";
import Greeting from "./components/Greeting";
import TodoItem from "./components/TodoItem";
import LoginLogout from "./components/LoginLogout";
import FormSubmit from "./components/FormSubmit";
import KeysList from "./components/KeysList";
import SharingState from "./components/SharingState";


function App() {
  const [count, setCount] = useState(0);
  
  const[text,setText]=useState('');



  const sampleTodo={ id:1,
    title:"Learn React",
    completed:true
  }

  function handleChange(e){
    setText(e.target.value)
  }

  

  return (
    <>
    
    <SharingState 
    label="Input"
    value={text}
    onhov={handleChange}
    />
    <SharingState 
    label="Second Input"
    value={text}
    
    />
    <div>
        <HandleClick/>
      </div>



      {/* <div>
        Hello World !
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <ClassCounter/>
      </div> */}
{/*       
      
      <div>
        <Greeting name="Ayush"/>
      </div>


      <div>
        <h2>Todo List</h2>
        <TodoItem todo={sampleTodo}/>
      </div>


      <div>
        <LoginLogout/>
      </div>
      <div>
        <FormSubmit/>
      </div>
      <div>
        <KeysList/>
      </div> */}




    </>
  );
}

export default App;
