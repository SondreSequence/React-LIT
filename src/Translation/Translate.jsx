import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setImageData,
  setTranslation,
} from "../Components/Reducers/translationReducer";

function Translate() {
  const englishSignsToHandEmojis = {
    A: require("../Individual_Signs/a.png"),
    B: require("../Individual_Signs/b.png"),
    C: require("../Individual_Signs/c.png"),
    D: require("../Individual_Signs/d.png"),
    E: require("../Individual_Signs/e.png"),
    F: require("../Individual_Signs/f.png"),
    G: require("../Individual_Signs/g.png"),
    H: require("../Individual_Signs/h.png"),
    I: require("../Individual_Signs/i.png"),
    J: require("../Individual_Signs/j.png"),
    K: require("../Individual_Signs/k.png"),
    L: require("../Individual_Signs/l.png"),
    M: require("../Individual_Signs/m.png"),
    N: require("../Individual_Signs/n.png"),
    O: require("../Individual_Signs/o.png"),
    P: require("../Individual_Signs/p.png"),
    Q: require("../Individual_Signs/q.png"),
    R: require("../Individual_Signs/r.png"),
    S: require("../Individual_Signs/s.png"),
    T: require("../Individual_Signs/t.png"),
    U: require("../Individual_Signs/u.png"),
    V: require("../Individual_Signs/v.png"),
    W: require("../Individual_Signs/w.png"),
    X: require("../Individual_Signs/x.png"),
    Y: require("../Individual_Signs/y.png"),
    Z: require("../Individual_Signs/z.png"),
  };

  function mapEnglishSignsToHandEmojis(signs) {
    const imageSource = [];
    for (const sign of signs) {
      if (englishSignsToHandEmojis[sign]) {
        imageSource.push(englishSignsToHandEmojis[sign]);
      }
    }

    dispatch(setImageData(imageSource));
  }

  const output = useSelector((state) => state.translation.currentTranslation);
  const imageSource = useSelector((state) => state.translation.imageData);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    dispatch(setTranslation(event.target.value));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    mapEnglishSignsToHandEmojis(output.toUpperCase());
  };

  function generateImages() {
    const images = imageSource.map((image) => <img src={image}></img>);
    return images;
  }

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
        className="container-fluid d-flex align-items-center mx-auto form-control me-2 m-3"
      >
        {generateImages()}
      </nav>
    </nav>
  );
}

export default Translate;
