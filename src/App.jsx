import { useState } from "react";
import "./App.css";
// import ClassCounter from "./components/ClassCounter";
import HandleClick from "./components/HandleClick";
import Greeting from "./components/Greeting";
import TodoItem from "./components/TodoItem";
import LoginLogout from "./components/LoginLogout";
import FormSubmit from "./components/FormSubmit";
import KeysList from "./components/KeysList";


function App() {
  const [count, setCount] = useState(0);



  const sampleTodo={ id:1,
    title:"Learn React",
    completed:true
  }

  

  return (
    <>
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
      
      <div>
        <HandleClick/>
      </div>
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
      </div>


    </>
  );
}

export default App;
