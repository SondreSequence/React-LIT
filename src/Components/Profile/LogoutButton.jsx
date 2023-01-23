import React from "react";
import { Button } from "react-bootstrap";

function LogoutButton() {
  function handleClearLocalStorage() {
    localStorage.clear();
  }

  return <Button onClick={handleClearLocalStorage}>Logout</Button>;
}

export default LogoutButton;
