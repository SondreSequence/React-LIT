import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateUserTranslations } from "../api/user";
import { setTranslations } from "../Reducers/translationReducer";

function DeleteButton() {
  const userID = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  return (
    <button
      className="btn btn-info all-button mt-5"
      onClick={() => {
        dispatch(setTranslations([]));
        dispatch({ type: "CLEAR_DATA" });
        localStorage.removeItem("translations");
      }}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
