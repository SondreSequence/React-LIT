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

  const currentTranslation = useSelector(
    (state) => state.translation.currentTranslation
  );
  const imageSource = useSelector((state) => state.translation.imageData);
  const translations = useSelector((state) => state.translation.translations);
  const data = useSelector((state) => state.api.data);
  const userID = useSelector((state) => state.user.id) - 1;

  function getTranslation() {
    let oldTranslations = [];
    if (data && data[userID] && data[userID].translations) {
      oldTranslations = data[userID].translations;
      return oldTranslations;
    } else {
      return [];
    }
  }

  //Combine translations with the current translations
  function setAllTranslations() {
    let newTranslations = [];
    if (JSON.parse(localStorage.getItem("translations")) !== null) {
      newTranslations = JSON.parse(localStorage.getItem("translations"));
    } else {
      newTranslations = [...getTranslation()];
    }
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
      localStorage.setItem("translations", JSON.stringify(newTranslations));
    } else return;
  }

  /*In handle on submit we call update the state with the current translation that is in the input field.
  Then we map the current translation to handemojis (specific image paths).
  After that is done we update and combine the previous translations from the database with the current translation and post it.

  We use e.preventDefault so that when we hit submit it doesn't automatically reload the page
  */
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(setTranslation(e.target.elements.input.value));
    mapEnglishSignsToHandEmojis(
      e.target.elements.input.value.toUpperCase(),
      dispatch
    );
    setAllTranslations();
  };

  //Update the translation data in the text input live
  const handleOnChange = (event) => {
    dispatch(setTranslation(event.target.value));
  };

  return (
    <div className="w-50 mx-auto mb-5">
      <div className="">
        <form
          className="d-flex align-items-center mx-auto"
          role="search"
          onSubmit={handleOnSubmit}
        >
          <input
            name="input"
            onChange={handleOnChange}
            className="form-control me-2"
            type="search"
            placeholder="Translate Text"
            aria-label="Search"
          />
          <button className="btn btn-info" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div id="translateArea" className="form-control mx-auto m-3 min-height">
        {generateImages(imageSource, currentTranslation)}
      </div>
    </div>
  );
}

export default Translate;
