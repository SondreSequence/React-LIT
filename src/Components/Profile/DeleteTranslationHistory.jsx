import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { updateUserTranslations } from "../api/user";
import { setTranslations } from "../Reducers/translationReducer";

function DeleteButton() {
  const userID = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  return (
    <div
      className="all-buttons delete-button"
      onClick={() => {
        updateUserTranslations(userID,[])
        dispatch(setTranslations([]));
        dispatch({ type: "CLEAR_DATA" });
        localStorage.removeItem("translations");
      }}
    >
      <img className="icon" alt="Trashcan" src={require("./delete-icon.png")}></img>
    </div>
  );
}

export default DeleteButton;
