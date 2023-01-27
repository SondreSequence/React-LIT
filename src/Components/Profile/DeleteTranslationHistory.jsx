import React from "react";
import { useDispatch } from "react-redux";

import { updateUserTranslations } from "../api/user";
import { setTranslations } from "../Reducers/translationReducer";

function DeleteButton() {
  const localUserArray = JSON.parse(localStorage.getItem("translation-user"));
  const userId = localUserArray.id;
  const dispatch = useDispatch();

  return (
    <div
      className="all-buttons delete-button"
      onClick={() => {
        console.log(updateUserTranslations(userId, []));
        dispatch(setTranslations([]));
        dispatch({ type: "CLEAR_DATA" });
      }}
    >
      <img className="icon " src={require("./delete-icon.png")}></img>
    </div>
  );
}

export default DeleteButton;
