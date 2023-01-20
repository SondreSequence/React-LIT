import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {
  setTranslation,
} from "./Reducers/translationReducer"

function Translate(){


  const output = useSelector((state) => state.translation.currentTranslation)
  const dispatch = useDispatch();

    const handleOnChange = (event) => {
        event.preventDefault();
        dispatch(setTranslation(event.target.value))
      }

    const [textareaClass, setTextAreaClass] = useState("slowlyVisible form-control me-2 m-3 d-none");
    return(
        <nav class="flex-container navbar bg-body-tertiary">
        <div class="container-fluid">
          <form class="d-flex align-items-center mx-auto" role="search">
            <input onChange={handleOnChange} class="form-control me-2 m-3" type="search" placeholder="Translate Text" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit" onClick={() => setTextAreaClass("slowlyVisible form-control me-2 m-3 animate__animated animate__rollIn animate__delay-0s")}>Submit</button>
          </form>
        </div>
        <nav class="d-flex align-items-center mx-auto">
            <h3>Value is: {output}</h3>
            <textarea class={textareaClass}/></nav> 
      </nav>)
}

export default Translate;
