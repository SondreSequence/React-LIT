import { useState } from "react";

function Boomerang() {
  let [count, setCount] = useState([]);

  function handleOnChange(event){
    setCount(count=0);
    getAmountOfBoomerangs(event.target.value);
  } 
  function getAmountOfBoomerangs(array){for (let i = 0; i < array.length-2; i++)
    if (array[i] === array[i + 2] && array[i + 1] !== array[i]) count++;
    setCount(count);}

  return(
    <div>
        <input type="text" onChange={handleOnChange}></input>
        <p>Amount of boomerangs: {count}</p>
    </div>
)
}

export default Boomerang;