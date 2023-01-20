import React from "react";
import { Button } from "react-bootstrap";

function LogoutButton() {
  function handleClearLocalStorage() {
    if (typeof Storage !== "undefined") {
      localStorage.clear();
    }
  }

  return <Button onClick={handleClearLocalStorage}>Logout</Button>;
}

export default LogoutButton;
