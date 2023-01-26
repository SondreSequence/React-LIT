import React from "react";
import { useDispatch } from "react-redux";

import { updateUserTranslations } from "../api/user";
import { setTranslations } from "../Reducers/translationReducer";

function DeleteButton() {
  const localUserArray = JSON.parse(localStorage.getItem("translation-user"));
  const userId = localUserArray.id;
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-info all-button mt-5"
      onClick={() => {
        console.log(updateUserTranslations(userId, []));
        dispatch(setTranslations([]));
        dispatch({ type: "CLEAR_DATA" });
      }}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
