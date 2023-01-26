import { async } from "q";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setTranslations } from "../Reducers/translationReducer";
import { setUsername, setID } from "../Reducers/userReducer";

/* 
This function logs a user out of the webpage by deleting local storage. The button also boots the user to the login page  
*/

function LogoutButton() {
  const dispatch = useDispatch();

  return (
    <Link to="/">
      <button
        className="btn btn-info all-button mt-5"
        onClick={() => {
          localStorage.clear();
          dispatch(setTranslations([]));
          dispatch(setID(0));
          dispatch(setUsername(""));
        }}
      >
        Logout
      </button>
    </Link>
  );
}

export default LogoutButton;
