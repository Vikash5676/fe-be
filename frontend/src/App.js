import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [value,setValue] = useState('')


  const handleChange = (e)=>{
    setValue(e.target.value)
  }
  const handleClick = () =>{
    axios.post('http://localhost:4010/send',{value:value})
  }
  return (
    <div className="App">
      <input type='text' onChange={handleChange}/>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
