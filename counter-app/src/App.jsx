import { useState } from "react";


export default function App() {
  const [count, setCount] = useState(0)

  

  function plus () {
 setCount((count)=> count + 1)
}

function minus () {
  setCount((count)=> count === 0 ? 0 : count -1)
}

function reset () {
  setCount(0)
}


  
return (
  <div> 
  <h1 style ={count > 9 ? {color : 'red'} : null}>{count}</h1>
  <button onClick={plus}>+1</button>
   <button onClick={minus}>-1</button>
   <button onClick={reset}>Reset</button>
</div>
  );
}