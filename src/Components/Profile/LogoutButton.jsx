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
    <Link to="/" class="logout-button">
      <div
        className="all-buttons "
        onClick={() => {
          localStorage.clear();
          dispatch(setTranslations([]));
          dispatch(setID(0));
          dispatch(setUsername(""));
        }}
      >
        Logout
      </div>
    </Link>
  );
}

export default LogoutButton;
