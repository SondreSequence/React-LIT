import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setImageData, setTranslation } from "../Reducers/translationReducer";

import { mapEnglishSignsToHandEmojis, generateImages } from "./ImageGeneration";

function Translate() {
  const output = useSelector((state) => state.translation.currentTranslation);
  const imageSource = useSelector((state) => state.translation.imageData);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    dispatch(setTranslation(event.target.value));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    mapEnglishSignsToHandEmojis(output.toUpperCase(), dispatch);
  };

  const [textareaclassName, setTextAreaclassName] = useState(
    "slowlyVisible form-control me-2 m-3 d-none"
  );
  return (
    <nav className="flex-container navbar bg-body-tertiary">
      <div className="container-fluid">
        <form
          className="d-flex align-items-center mx-auto"
          role="search"
          onSubmit={handleOnSubmit}
        >
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
              setTextAreaclassName(
                "slowlyVisible form-control me-2 m-3 animate__animated animate__rollIn animate__delay-0s"
              )
            }
          >
            Submit
          </button>
        </form>
      </div>
      <nav
        contentEditable="true"
        id="translateArea"
        className="mx-auto form-control"
      >
        {generateImages(imageSource)}
      </nav>
    </nav>
  );
}

export default Translate;
