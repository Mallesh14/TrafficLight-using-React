// import logo from './logo.svg';
import './App.css';
import {useState}from 'react';
function App() {
const [color,setcolor]=useState(false);
  return (
    <>
    <h1>TRAFFIC SIGNAL</h1>
    <div class="container">
        <div className={color=="red" ?"light red active":"light red" } ></div>
        <div className={color=="yellow"?"light yellow active":"light yellow"}></div>
        <div className={color=="green"?"light green active":"light green"} ></div>
    </div>
    <div class="buttons">
    <button className='stop' onClick={()=>setcolor("red")}>RED</button>
    <button className='ready' onClick={()=>setcolor("yellow")}>YELLOW</button>
    <button className='go' onClick={()=>setcolor("green")}>GREEN</button>
</div>
</>
  );
};

export default App;