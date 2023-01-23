import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTranslation } from "./Reducers/translationReducer";

function Translate() {
  const output = useSelector((state) => state.translation.currentTranslation);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    event.preventDefault();
    dispatch(setTranslation(event.target.value));
  };

  const [textareaClass, setTextAreaClass] = useState(
    "slowlyVisible form-control me-2 m-3 d-none"
  );
  return (
    <nav className="flex-container navbar bg-body-tertiary">
      <div className="container-fluid">
        <form className="d-flex align-items-center mx-auto" role="search">
          <input
            onChange={handleOnChange}
            className="form-control me-2 m-3"
            type="search"
            placeholder="Translate Text"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={() =>
              setTextAreaClass(
                "slowlyVisible form-control me-2 m-3 animate__animated animate__rollIn animate__delay-0s"
              )
            }
          >
            Submit
          </button>
        </form>
      </div>
      <nav className="d-flex align-items-center mx-auto">
        <h3>Value is: {output}</h3>
        <textarea className={textareaClass} />
      </nav>
    </nav>
  );
}

export default Translate;
