import { useSelector, useDispatch } from "react-redux";
import {
  setImageData,
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
    dispatch(setImageData([]));
    dispatch(fetchData("https://glaze-thankful-wombat.glitch.me/translations"));
  }, [dispatch]);

  const currentTranslation = useSelector(
    (state) => state.translation.currentTranslation
  );
  const imageSource = useSelector((state) => state.translation.imageData);
  const translations = useSelector((state) => state.translation.translations);
  const userID = JSON.parse(localStorage.getItem("userID")) - 1;
  const data = useSelector((state) => state.api.data);

  function getTranslation() {
    let oldTranslations = [];
    if (data && data[userID] && data[userID].translations) {
      oldTranslations = data[userID].translations;
      return oldTranslations;
    } else {
      return [];
    }
  }

  function setAllTranslations(valuecheck) {
    let newTranslations = [...getTranslation()];
    translations.forEach((translation) => {
      if (!newTranslations.includes(translation)) {
        newTranslations.push(translation);
      }
    });

    if (newTranslations.length >= 10) {
      newTranslations.splice(0, newTranslations.length - 10);
    }
    translations.forEach((translation) => {
      if (!newTranslations.includes(translation)) {
        newTranslations.push(translation);
      }
    });

    if (newTranslations.length > 9) {
      newTranslations.shift();
      newTranslations.push(currentTranslation);
    } else {
      newTranslations.push(currentTranslation);
    }

    if (currentTranslation.length > 0) {
      dispatch(setTranslations(newTranslations));
      updateUserTranslations(userID + 1, newTranslations);
    } else return;
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(setTranslation(e.target.elements.input.value));
    mapEnglishSignsToHandEmojis(
      e.target.elements.input.value.toUpperCase(),
      dispatch
    );
    setAllTranslations();
  };

  const handleOnChange = (event) => {
    dispatch(setTranslation(event.target.value));
  };

  return (
    <div className=" mx-auto mb-5 card-container color-light">
      <h2>Translator</h2>
      <div className="mt-3">
        <form
          className="d-flex align-items-center mx-auto"
          role="search"
          onSubmit={handleOnSubmit}
        >
          <input
            name="input"
            onChange={handleOnChange}
            className="form-control input-field"
            type="search"
            placeholder="Translate text ... (don't type 'Rick')"
            aria-label="Search"
          />
          <button className="all-buttons">Submit</button>
        </form>
      </div>
      <div id="translateArea" className="form-control mx-auto m-3">
        {generateImages(imageSource, currentTranslation)}
      </div>
    </div>
  );
}

export default Translate;
