import React from "react";
import { Button } from "react-bootstrap";

/* 
This function logs a user out of the webpage by deleting local storage. The button also boots the user to the login page  
*/

function LogoutButton() {
  function handleClearLocalStorage() {
    localStorage.clear();
  }

  return <Button onClick={handleClearLocalStorage}>Logout</Button>;
}

export default LogoutButton;
