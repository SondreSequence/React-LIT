import React from "react";
import { Button } from "react-bootstrap";
import {useDispatch } from "react-redux";
import { setTranslations } from "../Reducers/translationReducer";

function LogoutButton() {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => {
      localStorage.clear();
      dispatch(setTranslations([]));
    }}>
      Logout
    </Button>
  );
}


export default LogoutButton;
