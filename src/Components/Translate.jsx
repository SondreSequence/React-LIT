import { useState } from "react";



function Translate(){

    const handleSubmit = (event) => {
        event.preventDefault();

      }

    const [textareaClass, setTextAreaClass] = useState("slowlyVisible form-control me-2 m-3 d-none");
    return(
        <nav class="flex-container navbar bg-body-tertiary">
        <div class="container-fluid">
          <form class="d-flex align-items-center mx-auto" role="search" onSubmit={handleSubmit}>
            <input class="form-control me-2 m-3" type="search" placeholder="Translate Text" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit" onClick={() => setTextAreaClass("slowlyVisible form-control me-2 m-3 animate__animated animate__rollIn animate__delay-0s")}>Submit</button>
          </form>
        </div>
        <nav class="d-flex align-items-center mx-auto">
            <textarea class={textareaClass}/></nav> 
      </nav>)
}

export default Translate;
