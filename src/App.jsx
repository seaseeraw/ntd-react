import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import Table from './components/Table';
function App() {
  const [taskList, setTaskList]=useState([])
const addTaskList = (taskObj) =>{
  // console.log(taskObj);
  const obj ={
  ...taskObj,
id: randomIdGenerator(),
type:"entry",
};


  setTaskList([...taskList,obj]);
};
console.log(taskList);

const randomIdGenerator = (lenght = 6) => {
  const str = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";

  let id = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * str.length);
    id += str[randomIndex];
  }

  return id;
};


  return (
    <div className="wrapper pt-5">
   
    <div className="container">
        <h1 className="text-center">Not to do list</h1>
    
   
     <Form addTaskList={addTaskList}/>
     
     
      <Table taskList={taskList}/>

      <div className="alert alert-success">Total hour = <span id="totalhr">0</span>hrs</div>
     
</div>
</div>
  );
}

export default App;
