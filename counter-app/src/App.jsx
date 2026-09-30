import { useState } from "react";


export default function App() {
  const [isPlusUpdate, setIsPlusUpdating] = useState(0)

  

  function plus () {
 setIsPlusUpdating((count)=> count + 1)
}

function mainus () {
  setIsPlusUpdating((count)=> count -1)
}

function reset () {
  setIsPlusUpdating((count)=> count === 0)
}

console.log(setIsPlusUpdating)
  
return (
  <div> 
  <h1>{isPlusUpdate}</h1>
  <button onClick={plus}>+1</button>
   <button onClick={mainus}>-1</button>
   <button onClick={reset}>Reset</button>
</div>
  );
}