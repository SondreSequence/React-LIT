import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTranslation,
  setTranslations,
} from "../Reducers/translationReducer";
import { updateUserTranslations } from "../api/user";
import { useEffect } from "react";
import { fetchData } from "../api/apiActions";

import { mapEnglishSignsToHandEmojis, generateImages } from "./ImageGeneration";

function Translate() {
  const dispatch = useDispatch();
  //Load API DATA
  useEffect(() => {
    dispatch(fetchData("https://glaze-thankful-wombat.glitch.me/translations"));
  }, [dispatch]);

  const output = useSelector((state) => state.translation.currentTranslation);
  const imageSource = useSelector((state) => state.translation.imageData);
  const translations = useSelector((state) => state.translation.translations);
  const localUserArray = JSON.parse(localStorage.getItem("translation-user"));
  const data = useSelector((state) => state.api.data);
  const iDUSER = localUserArray.id - 1;

  const handleOnChange = (event) => {
    dispatch(setTranslation(event.target.value));
  };

  function getTranslation() {
    let newTranslations = [];
    if (data && data[iDUSER] && data[iDUSER].translations) {
      newTranslations = data[iDUSER].translations;
      return newTranslations;
    } else {
      return [];
    }
  }

  function setAllTranslations() {
    let newTranslations = [...getTranslation()];
    translations.forEach((translation) => {
      if (!newTranslations.includes(translation)) {
        newTranslations.push(translation);
      }
    });

    if (newTranslations.length > 9) {
      newTranslations.pop();
      newTranslations.unshift(output);
    } else {
      newTranslations.push(output);
    }

    // Use the setTranslations action to update the state
    dispatch(setTranslations(newTranslations));
    updateUserTranslations(iDUSER + 1, newTranslations);

    console.log(newTranslations);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setAllTranslations(iDUSER);
    console.log("Database " + getTranslation());
    mapEnglishSignsToHandEmojis(output.toUpperCase(), dispatch);
  };

  const [textareaclassName, setTextAreaclassName] = useState(
    "slowlyVisible form-control me-2 m-3 d-none"
  );
  return (
    <div className="w-50 mx-auto mb-5">
      <div className="">
        <form
          className="d-flex align-items-center mx-auto"
          role="search"
          onSubmit={handleOnSubmit}
        >
          <input
            onChange={handleOnChange}
            className="form-control me-2"
            type="search"
            placeholder="Translate Text"
            aria-label="Search"
          />
          <button
            className="btn btn-info"
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
      <div id="translateArea" className="form-control mx-auto m-3 min-vh-75">
        {generateImages(imageSource, output)}
        {fetchData("https://glaze-thankful-wombat.glitch.me/translations")}
      </div>
    </div>
  );
}

export default Translate;
